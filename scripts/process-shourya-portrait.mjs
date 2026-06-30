#!/usr/bin/env node
/**
 * Upscale the full original Shourya Jain portrait (no crop) for TLB + Infraventure.
 * Source: assets/source/shourya-jain.jpeg
 */
import { mkdir, unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "assets", "source", "shourya-jain.jpeg");
const TLB_OUT = join(__dirname, "..", "public", "images", "team");
const INFRA_OUT = join(__dirname, "..", "..", "shourya infraventure", "assets");

/** 1080p-height master — full frame, no side crop. */
const MASTER_HEIGHT = 1080;

const variants = [
  { name: "shourya-jain.jpg", height: MASTER_HEIGHT, quality: 92 },
  { name: "shourya-jain-800.jpg", height: 800, quality: 90 },
  { name: "shourya-jain-600.jpg", height: 600, quality: 88 },
];

const OBSOLETE = [
  "shourya-jain-2400.jpg",
  "shourya-jain-1600.jpg",
  "shourya-jain-1200.jpg",
];

async function sourcePipeline() {
  const meta = await sharp(SRC).metadata();
  console.log(`Source: ${meta.width}×${meta.height} (full frame, no crop)`);
  return sharp(SRC).rotate();
}

async function exportSet(outDir, pipeline, alsoWebp = true) {
  await mkdir(outDir, { recursive: true });

  for (const stale of OBSOLETE) {
    try {
      await unlink(join(outDir, stale));
      console.log(`  removed stale ${stale}`);
    } catch {
      /* already gone */
    }
  }

  let masterWidth = 0;
  let masterHeight = 0;

  for (const v of variants) {
    const resized = pipeline.clone().resize({
      height: v.height,
      fit: "inside",
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    });

    const jpgPath = join(outDir, v.name);
    const info = await resized
      .clone()
      .jpeg({ quality: v.quality, mozjpeg: true })
      .toFile(jpgPath);

    if (v.name === "shourya-jain.jpg") {
      masterWidth = info.width;
      masterHeight = info.height;
    }

    console.log(
      `  ${v.name} → ${info.width}×${info.height} (${Math.round(info.size / 1024)} KB)`,
    );

    if (alsoWebp && v.name === "shourya-jain.jpg") {
      const webpPath = join(outDir, "shourya-jain.webp");
      const webp = await resized
        .clone()
        .webp({ quality: 88, effort: 6 })
        .toFile(webpPath);
      console.log(
        `  shourya-jain.webp → ${webp.width}×${webp.height} (${Math.round(webp.size / 1024)} KB)`,
      );
    }
  }

  return { width: masterWidth, height: masterHeight };
}

console.log("TLB Website exports:");
const pipeline = await sourcePipeline();
const tlbDims = await exportSet(TLB_OUT, pipeline);

console.log("\nShourya Infraventure exports:");
await exportSet(INFRA_OUT, pipeline, false);

console.log(`\nMaster dimensions: ${tlbDims.width}×${tlbDims.height}`);
console.log("Done.");

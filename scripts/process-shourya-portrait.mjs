#!/usr/bin/env node
/**
 * Export Shourya Jain portrait for TLB + Infraventure.
 * Source: assets/source/shourya-jain.png (1536×1024 studio portrait)
 */
import { mkdir, unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "assets", "source", "shourya-jain.png");
const TLB_OUT = join(__dirname, "..", "public", "images", "team");
const INFRA_OUT = join(__dirname, "..", "..", "shourya infraventure", "assets");

/** Width tiers — preserve native 3:2 aspect from the studio PNG. */
const variants = [
  { name: "shourya-jain.jpg", width: 1536, quality: 96 },
  { name: "shourya-jain-1200.jpg", width: 1200, quality: 94 },
  { name: "shourya-jain-800.jpg", width: 800, quality: 92 },
  { name: "shourya-jain-600.jpg", width: 600, quality: 90 },
];

const OBSOLETE = [
  "shourya-jain-2400.jpg",
  "shourya-jain-1600.jpg",
];

async function sourcePipeline() {
  const meta = await sharp(SRC).metadata();
  console.log(`Source: ${meta.width}×${meta.height} PNG (studio portrait)`);
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
      width: v.width,
      fit: "inside",
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3,
    });

    const jpgPath = join(outDir, v.name);
    const info = await resized
      .clone()
      .jpeg({
        quality: v.quality,
        mozjpeg: true,
        chromaSubsampling: "4:4:4",
      })
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
        .webp({ quality: 92, effort: 6, smartSubsample: false })
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

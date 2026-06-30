#!/usr/bin/env node
/**
 * Export Shourya Jain full-body portrait for TLB + Infraventure.
 * Source: assets/source/shourya-jain.jpeg (739×1600, no crop)
 */
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "assets", "source", "shourya-jain.jpeg");
const TLB_OUT = join(__dirname, "..", "public", "images", "team");
const INFRA_OUT = join(__dirname, "..", "..", "shourya infraventure", "assets");

const SOURCE_HEIGHT = 1600;

const variants = [
  { name: "shourya-jain.jpg", height: 3840, quality: 98, sharpen: true },
  { name: "shourya-jain-2400.jpg", height: 2400, quality: 96, sharpen: true },
  { name: "shourya-jain-1600.jpg", height: 1600, quality: 94, sharpen: false },
  { name: "shourya-jain-1200.jpg", height: 1200, quality: 92, sharpen: false },
  { name: "shourya-jain-800.jpg", height: 800, quality: 90, sharpen: false },
];

async function sourcePipeline() {
  const meta = await sharp(SRC).metadata();
  console.log(`Source: ${meta.width}×${meta.height} JPEG (full body, no crop)`);
  return sharp(SRC).rotate();
}

function resizeVariant(pipeline, v) {
  let img = pipeline.clone().resize({
    height: v.height,
    fit: "inside",
    withoutEnlargement: false,
    kernel: sharp.kernel.lanczos3,
  });

  if (v.sharpen && v.height > SOURCE_HEIGHT) {
    img = img.sharpen({ sigma: 0.9, m1: 1.05, m2: 0.55, x1: 2, y2: 10, y3: 20 });
  }

  return img;
}

async function exportSet(outDir, pipeline, alsoWebp = true) {
  await mkdir(outDir, { recursive: true });

  let masterWidth = 0;
  let masterHeight = 0;

  for (const v of variants) {
    const resized = resizeVariant(pipeline, v);

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
        .webp({ quality: 94, effort: 6, smartSubsample: false })
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

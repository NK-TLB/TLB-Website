#!/usr/bin/env node
/**
 * Crop, upscale, sharpen and export Shourya Jain portrait for TLB + Infraventure.
 * Source: assets/source/shourya-jain.jpeg
 */
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "assets", "source", "shourya-jain.jpeg");
const TLB_OUT = join(__dirname, "..", "public", "images", "team");
const INFRA_OUT = join(__dirname, "..", "..", "shourya infraventure", "assets");

/** 4K-height master after crop + upscale. */
const MASTER_HEIGHT = 3840;

/** Trim car / background on left and right — center on subject. */
const CROP = { leftPct: 0.14, widthPct: 0.72 };

const variants = [
  { name: "shourya-jain.jpg", height: MASTER_HEIGHT, quality: 96 },
  { name: "shourya-jain-2400.jpg", height: 2400, quality: 94 },
  { name: "shourya-jain-1600.jpg", height: 1600, quality: 92 },
  { name: "shourya-jain-1200.jpg", height: 1200, quality: 90 },
  { name: "shourya-jain-800.jpg", height: 800, quality: 88 },
];

async function croppedPipeline() {
  const meta = await sharp(SRC).metadata();
  const left = Math.round(meta.width * CROP.leftPct);
  const width = Math.min(
    Math.round(meta.width * CROP.widthPct),
    meta.width - left,
  );

  console.log(
    `Crop: ${meta.width}×${meta.height} → extract ${width}×${meta.height} from x=${left}`,
  );

  return sharp(SRC)
    .rotate()
    .extract({ left, top: 0, width, height: meta.height })
    .sharpen({ sigma: 1.2, m1: 1.05, m2: 0.65, x1: 2, y2: 10, y3: 20 });
}

async function exportSet(outDir, pipeline, alsoWebp = true) {
  await mkdir(outDir, { recursive: true });

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
const pipeline = await croppedPipeline();
const tlbDims = await exportSet(TLB_OUT, pipeline);

console.log("\nShourya Infraventure exports:");
await exportSet(INFRA_OUT, pipeline, false);

console.log(`\nMaster dimensions: ${tlbDims.width}×${tlbDims.height}`);
console.log("Done.");

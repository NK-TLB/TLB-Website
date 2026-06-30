#!/usr/bin/env node
/**
 * Upscale and export Shourya Jain portrait for TLB + Infraventure.
 * Source: ../../shourya jain.jpeg (739×1600)
 */
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "..", "shourya jain.jpeg");
const TLB_OUT = join(__dirname, "..", "public", "images", "team");
const INFRA_OUT = join(__dirname, "..", "..", "shourya infraventure", "assets");

/** 4K-height portrait (2.4× upscale from 1600 → 3840). */
const MASTER_HEIGHT = 3840;

const variants = [
  { name: "shourya-jain.jpg", height: MASTER_HEIGHT, quality: 92 },
  { name: "shourya-jain-2400.jpg", height: 2400, quality: 90 },
  { name: "shourya-jain-1600.jpg", height: 1600, quality: 88 },
  { name: "shourya-jain-1200.jpg", height: 1200, quality: 85 },
  { name: "shourya-jain-800.jpg", height: 800, quality: 82 },
];

async function exportSet(outDir, alsoWebp = true) {
  await mkdir(outDir, { recursive: true });
  const meta = await sharp(SRC).metadata();
  console.log(`Source: ${meta.width}×${meta.height}`);

  for (const v of variants) {
    const pipeline = sharp(SRC).resize({
      height: v.height,
      fit: "inside",
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    });

    const jpgPath = join(outDir, v.name);
    const info = await pipeline.clone().jpeg({ quality: v.quality, mozjpeg: true }).toFile(jpgPath);
    console.log(`  ${jpgPath.replace(outDir, ".")} → ${info.width}×${info.height} (${Math.round(info.size / 1024)} KB)`);

    if (alsoWebp && v.name === "shourya-jain.jpg") {
      const webpPath = join(outDir, "shourya-jain.webp");
      const webp = await pipeline.clone().webp({ quality: 85, effort: 6 }).toFile(webpPath);
      console.log(`  shourya-jain.webp → ${webp.width}×${webp.height} (${Math.round(webp.size / 1024)} KB)`);
    }
  }
}

console.log("TLB Website exports:");
await exportSet(TLB_OUT);

console.log("\nShourya Infraventure exports:");
await exportSet(INFRA_OUT, false);

console.log("\nDone.");

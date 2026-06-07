// Press media pipeline — turns the raw originals in /media into enhanced,
// responsive web assets in /public/images/press.
//
// Enhancement is intentionally NON-DESTRUCTIVE (no AI face regeneration): a
// high-quality Lanczos resize, gentle white-balance/contrast, and a light
// sharpen. Newspaper clippings get a touch more sharpening + contrast for text
// legibility and are kept full-frame (no crop) for the zoom lightbox.
//
// Usage:  npm run media:press
//
// Outputs both WebP (small) and JPEG (universal fallback) at several widths so
// the page can serve a <picture> with srcset + width/height (no layout shift).

import { fileURLToPath } from "node:url";
import path from "node:path";
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "media");
const OUT = path.join(ROOT, "public", "images", "press");

// A processing job. `aspect` (w/h) crops via a face/detail-aware cover; omit it
// to keep the original frame (used for the newspaper clippings).
const JOBS = [
  // MoU on stage — wide hero (cleaner principals framing in cm-2)
  { src: "cm-2.jpeg", base: "mou-cm-hero", aspect: 16 / 9, widths: [1600, 1024, 640], kind: "photo" },
  // MoU group incl. CSSDA officials
  { src: "cm-1.jpeg", base: "mou-cm-group", aspect: 4 / 3, widths: [1200, 800, 400], kind: "photo" },
  // MoU close-up (founder + CM + partner)
  { src: "cm-2.jpeg", base: "mou-cm-closeup", aspect: 4 / 3, widths: [1200, 800, 400], kind: "photo" },
  // Founder with the late Shri Ratan Tata (lowest-res source -> upscaled)
  { src: "Ratan-tata.jpeg", base: "shourya-ratan-tata", aspect: 4 / 3, widths: [1200, 800, 400], kind: "photo" },
  // Newspaper clippings — full frame, high-res for the zoom lightbox
  { src: "cm-newsletter-2.jpeg", base: "clipping-hitavada", widths: [2000, 1000], kind: "clipping" },
  { src: "cm-newsletter.jpeg", base: "clipping-patrika", widths: [2000, 1000], kind: "clipping" },
];

function enhance(pipeline, kind) {
  if (kind === "clipping") {
    // text legibility: normalise contrast + crisper edges
    return pipeline.normalise().sharpen({ sigma: 1.1, m1: 0.6, m2: 2.2 });
  }
  // photos: subtle warmth/contrast + gentle sharpen, preserve skin tones
  return pipeline
    .modulate({ brightness: 1.03, saturation: 1.07 })
    .linear(1.04, -5)
    .sharpen({ sigma: 0.8 });
}

async function run() {
  await mkdir(OUT, { recursive: true });
  const manifest = [];

  for (const job of JOBS) {
    const inputPath = path.join(SRC, job.src);
    const meta = await sharp(inputPath).rotate().metadata();
    const srcW = meta.width ?? 0;
    const srcH = meta.height ?? 0;

    for (const w of job.widths) {
      let h = null;
      let base = sharp(inputPath).rotate();

      if (job.aspect) {
        h = Math.round(w / job.aspect);
        base = base.resize(w, h, { fit: "cover", position: "attention" });
      } else {
        base = base.resize({ width: w, withoutEnlargement: false });
        h = Math.round((srcH / srcW) * w);
      }

      base = enhance(base, job.kind);

      const webpPath = path.join(OUT, `${job.base}-${w}.webp`);
      const jpgPath = path.join(OUT, `${job.base}-${w}.jpg`);
      await base.clone().webp({ quality: job.kind === "clipping" ? 86 : 82 }).toFile(webpPath);
      await base.clone().jpeg({ quality: job.kind === "clipping" ? 88 : 84, mozjpeg: true }).toFile(jpgPath);

      manifest.push({ base: job.base, w, h, webp: `/images/press/${job.base}-${w}.webp`, jpg: `/images/press/${job.base}-${w}.jpg` });
    }
    const largest = job.widths[0];
    const lh = job.aspect ? Math.round(largest / job.aspect) : Math.round((srcH / srcW) * largest);
    console.log(`✓ ${job.src} -> ${job.base} (${job.widths.join(", ")}w)  intrinsic ${largest}x${lh}`);
  }

  console.log("\nDimensions for site.ts (largest variant):");
  const seen = new Set();
  for (const m of manifest) {
    if (seen.has(m.base)) continue;
    seen.add(m.base);
    console.log(`  ${m.base}: ${m.w}x${m.h}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

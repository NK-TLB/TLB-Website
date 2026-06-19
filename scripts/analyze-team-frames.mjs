// One-off helper: inspects each Our Team portrait and suggests a portraitFrame
// ({ x, y, scale }) so every person ends up with consistent head + shoulder gaps.
//
// Model it matches (see TeamMemberCard): the card is a 4:5 box. The image is
// drawn with background-size `auto <scale>%` (height = scale% of the card) and
// background-position `x% y%`. scale=100 => exact vertical cover; higher zooms in.
//
// Usage: node scripts/analyze-team-frames.mjs

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEAM_DIR = path.resolve(__dirname, "..", "public", "images", "team");

// id -> filename (must match src/data/site.ts)
const IMAGES = {
  "prakhar-singh": "prakhar-singh.png",
  "nirmal-kumar": "nirmal-kumar.png",
  "deep-titermare": "deep-titermare.png",
  "akash-singh-baghel": "akash-singh-baghel.png",
  "vivek-devnani": "vivek-devnani.png",
  "vishwashree-pandey": "vishwashree-pandey.jpeg",
  "naman-kunhappan": "naman-kunhappan.png",
};

// Card geometry.
const CARD_AR = 4 / 5; // width / height

// Framing targets (fractions of the visible crop).
const TARGET_HEAD_GAP = 0.05; // gap above head, as fraction of visible height
// Uniform zoom for every card: gives a little vertical slack so head gaps can
// be aligned, while keeping as much shoulder width visible as possible.
const TARGET_SCALE = 106;

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

async function analyze(id, file) {
  const abs = path.join(TEAM_DIR, file);
  const src = sharp(abs);
  const meta = await src.metadata();
  const SW = meta.width;
  const SH = meta.height;

  // Downscale for speed; keep aspect. Work on grayscale for edge detection.
  const w = 384;
  const h = Math.round((w * SH) / SW);
  const { data } = await sharp(abs)
    .resize(w, h, { fit: "fill" })
    .greyscale()
    .blur(0.6)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const gray = (x, y) => data[y * w + x];

  // Sobel gradient magnitude — background-agnostic (works on light OR dark
  // backdrops, since it keys off the subject's internal/edge detail).
  const grad = new Float32Array(w * h);
  let gMax = 0;
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const gx =
        gray(x + 1, y - 1) + 2 * gray(x + 1, y) + gray(x + 1, y + 1) -
        (gray(x - 1, y - 1) + 2 * gray(x - 1, y) + gray(x - 1, y + 1));
      const gy =
        gray(x - 1, y + 1) + 2 * gray(x, y + 1) + gray(x + 1, y + 1) -
        (gray(x - 1, y - 1) + 2 * gray(x, y - 1) + gray(x + 1, y - 1));
      const m = Math.hypot(gx, gy);
      grad[y * w + x] = m;
      if (m > gMax) gMax = m;
    }
  }

  const edgeThresh = 0.18 * gMax;
  const rowCount = new Array(h).fill(0);
  const rowMin = new Array(h).fill(Infinity);
  const rowMax = new Array(h).fill(-Infinity);
  const colCount = new Array(w).fill(0);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (grad[y * w + x] > edgeThresh) {
        rowCount[y]++;
        colCount[x]++;
        if (x < rowMin[y]) rowMin[y] = x;
        if (x > rowMax[y]) rowMax[y] = x;
      }
    }
  }

  const minRowFill = 0.04 * w;

  // Head top: first row with meaningful edge content (hair/face).
  let headTop = 0;
  for (let y = 0; y < h; y++) {
    if (rowCount[y] >= minRowFill) {
      headTop = y;
      break;
    }
  }

  // Subject bottom.
  let subjBottom = h - 1;
  for (let y = h - 1; y >= 0; y--) {
    if (rowCount[y] >= minRowFill) {
      subjBottom = y;
      break;
    }
  }

  // Horizontal centre: edge-density centroid over the subject's vertical span
  // (robust to which side a shoulder is clipped on).
  let cWeighted = 0;
  let cTotal = 0;
  for (let x = 0; x < w; x++) {
    cWeighted += x * colCount[x];
    cTotal += colCount[x];
  }
  const edgeCx = cTotal > 0 ? cWeighted / cTotal : w / 2;

  // Shoulder line: widest edge extent in the lower portion of the subject.
  const lowerStart = Math.round(headTop + (subjBottom - headTop) * 0.6);
  let shL = Infinity;
  let shR = -Infinity;
  for (let y = lowerStart; y <= subjBottom; y++) {
    if (rowCount[y] >= minRowFill) {
      shL = Math.min(shL, rowMin[y]);
      shR = Math.max(shR, rowMax[y]);
    }
  }
  if (!isFinite(shL)) {
    shL = 0;
    shR = w - 1;
  }

  // Convert detected features to source-pixel space.
  const sx = SW / w;
  const sy = SH / h;
  const headTopPx = headTop * sy;
  const shoulderL = shL * sx;
  const shoulderR = shR * sx;
  const shoulderSpan = shoulderR - shoulderL;
  const shoulderMidPx = ((shoulderL + shoulderR) / 2);
  const facePx = edgeCx * sx;
  // Blend face centroid + shoulder midpoint: keeps the head visually centred
  // while balancing the gaps beside the shoulders.
  const anchorPx = 0.5 * facePx + 0.5 * shoulderMidPx;

  // Uniform zoom for everyone.
  const scale = TARGET_SCALE;
  const Hc = (SH * 100) / scale;
  const Wc = Hc * CARD_AR;

  // Horizontal: centre on the blended anchor.
  const left = clamp(anchorPx - Wc / 2, 0, SW - Wc);
  const xDenom = SW - Wc;
  const x = xDenom <= 0 ? 50 : Math.round((left / xDenom) * 100);

  // Vertical: consistent gap above the head (clamped to what the source allows).
  const top = clamp(headTopPx - TARGET_HEAD_GAP * Hc, 0, SH - Hc);
  const yDenom = SH - Hc;
  const y = yDenom <= 0 ? 50 : Math.round((top / yDenom) * 100);

  return {
    id,
    headTopPct: Math.round((headTopPx / SH) * 100),
    shoulder: {
      lPct: Math.round((shoulderL / SW) * 100),
      rPct: Math.round((shoulderR / SW) * 100),
      midPct: Math.round((shoulderMidPx / SW) * 100),
      facePct: Math.round((facePx / SW) * 100),
      spanPct: Math.round((shoulderSpan / SW) * 100),
    },
    frame: { x, y, scale },
  };
}

const results = [];
for (const [id, file] of Object.entries(IMAGES)) {
  if (!fs.existsSync(path.join(TEAM_DIR, file))) {
    console.warn(`! missing ${file}`);
    continue;
  }
  results.push(await analyze(id, file));
}

console.log("\n=== Detection + suggested frames ===\n");
for (const r of results) {
  console.log(
    `${r.id.padEnd(20)} headTop=${String(r.headTopPct).padStart(2)}%  face${
      r.shoulder.facePct
    }% shMid${r.shoulder.midPct}% (L${r.shoulder.lPct}-R${r.shoulder.rPct}, span${
      r.shoulder.spanPct
    }%)  ->  { x: ${r.frame.x}, y: ${r.frame.y}, scale: ${r.frame.scale} }`,
  );
}

console.log("\n=== Paste-ready ===\n");
for (const r of results) {
  console.log(`${r.id}: portraitFrame: { x: ${r.frame.x}, y: ${r.frame.y}, scale: ${r.frame.scale} },`);
}
console.log("");

// One-off generator: downloads India boundary data that follows the OFFICIAL
// boundary of India (Survey of India depiction — full Jammu & Kashmir, Ladakh
// and Aksai Chin), projects it with a Web-Mercator projection into a fixed
// viewBox, and emits src/components/india-outline.ts (silhouette + internal
// state borders + the identical projection used to place the city markers).
// Run with `node scripts/gen-india-outline.mjs`.
//
// Sources (official Indian boundary, not the international Natural Earth one):
//   • Country silhouette  — datameet/maps india-composite.geojson (Survey of India)
//   • State divisions      — udit-001/india-maps-data district polygons (st_nm),
//                            dissolved to keep only true inter-state borders.

import { writeFileSync } from "node:fs";

// Country land area incl. disputed territories per Survey of India.
const COUNTRY_SOURCES = [
  "https://raw.githubusercontent.com/datameet/maps/master/Country/india-composite.geojson",
];

// District polygons (carry `st_nm` = state name) following the official boundary.
const STATE_SOURCES = [
  "https://raw.githubusercontent.com/udit-001/india-maps-data/main/geojson/india.geojson",
];

const TARGET_WIDTH = 1000; // viewBox width; height derived from aspect
const PAD = 12; // px padding inside the viewBox
const SIMPLIFY_EPS = 0.05; // Douglas-Peucker tolerance in degrees (silhouette)
const STATE_SIMPLIFY_EPS = 0.06; // tolerance for the internal state borders

const mercY = (lat) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));

function ringArea(ring) {
  let a = 0;
  for (let i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    a += ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1];
  }
  return Math.abs(a) / 2;
}

// Perpendicular-distance Douglas-Peucker simplification (lon/lat space).
function simplify(points, eps) {
  if (points.length < 3) return points;
  let maxD = 0;
  let idx = 0;
  const [ax, ay] = points[0];
  const [bx, by] = points[points.length - 1];
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i];
    const dx = bx - ax;
    const dy = by - ay;
    const denom = Math.hypot(dx, dy) || 1e-9;
    const d = Math.abs(dy * px - dx * py + bx * ay - by * ax) / denom;
    if (d > maxD) {
      maxD = d;
      idx = i;
    }
  }
  if (maxD > eps) {
    const left = simplify(points.slice(0, idx + 1), eps);
    const right = simplify(points.slice(idx), eps);
    return left.slice(0, -1).concat(right);
  }
  return [points[0], points[points.length - 1]];
}

async function fetchFirst(urls) {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch {
      /* try next */
    }
  }
  throw new Error("Could not download boundary data from any source.");
}

function ringsOf(geometry) {
  if (!geometry) return [];
  if (geometry.type === "Polygon") return geometry.coordinates;
  if (geometry.type === "MultiPolygon")
    return geometry.coordinates.flatMap((poly) => poly);
  return [];
}

// ----------------------------------------------------------------------------
// 1) Country silhouette (official boundary) — largest ring = mainland.
// ----------------------------------------------------------------------------
const countryGeo = await fetchFirst(COUNTRY_SOURCES);
const countryFeats =
  countryGeo.type === "FeatureCollection" ? countryGeo.features : [countryGeo];

let best = null;
for (const feat of countryFeats) {
  for (const ring of ringsOf(feat.geometry)) {
    const area = ringArea(ring);
    if (!best || area > best.area) best = { ring, area };
  }
}
if (!best) throw new Error("India silhouette ring not found.");

let openRing = best.ring.slice();
const fp = openRing[0];
const lp = openRing[openRing.length - 1];
if (fp[0] === lp[0] && fp[1] === lp[1]) openRing = openRing.slice(0, -1);
const mainland = simplify(openRing, SIMPLIFY_EPS);

// Projection bounds from the simplified ring.
let lonMin = Infinity, lonMax = -Infinity, latMin = Infinity, latMax = -Infinity;
for (const [lon, lat] of mainland) {
  lonMin = Math.min(lonMin, lon);
  lonMax = Math.max(lonMax, lon);
  latMin = Math.min(latMin, lat);
  latMax = Math.max(latMax, lat);
}
const DEG = Math.PI / 180;
const lonMinRad = lonMin * DEG;
const yMin = mercY(latMin);
const yMax = mercY(latMax);
const k = (TARGET_WIDTH - PAD * 2) / (lonMax * DEG - lonMinRad);
const height = (yMax - yMin) * k + PAD * 2;

const projX = (lon) => PAD + (lon * DEG - lonMinRad) * k;
const projY = (lat) => PAD + (yMax - mercY(lat)) * k;

const ringToPath = (ring) =>
  ring
    .map(([lon, lat], i) => {
      const x = projX(lon).toFixed(1);
      const y = projY(lat).toFixed(1);
      return `${i === 0 ? "M" : "L"}${x} ${y}`;
    })
    .join("") + "Z";

const d = ringToPath(mainland);

// ----------------------------------------------------------------------------
// 2) Internal state borders — keep ONLY true inter-state divisions.
//    We count every district edge and tag it with its state. An edge shared by
//    two districts of DIFFERENT states is an inter-state border; edges internal
//    to a state (same state twice) or on the coast/national boundary (once) are
//    dropped — the coast is already drawn by the silhouette.
// ----------------------------------------------------------------------------
const SKIP_STATES = new Set([
  "Andaman and Nicobar",
  "Andaman and Nicobar Islands",
  "Andaman & Nicobar",
  "Lakshadweep",
]);

const RND = 1e5; // round coords to 5 decimals so shared edges match exactly
const keyOf = (pt) => `${Math.round(pt[0] * RND)},${Math.round(pt[1] * RND)}`;

let statePaths = [];
try {
  const statesGeo = await fetchFirst(STATE_SOURCES);
  const feats = statesGeo.features || [];

  // edgeKey -> { a, b, states:Set<string> }
  const edges = new Map();
  for (const feat of feats) {
    const p = feat.properties || {};
    const state = p.st_nm || p.NAME_1 || p.state || p.name;
    if (!state || SKIP_STATES.has(state)) continue;
    for (const ring of ringsOf(feat.geometry)) {
      for (let i = 0; i + 1 < ring.length; i++) {
        const a = ring[i];
        const b = ring[i + 1];
        const ka = keyOf(a);
        const kb = keyOf(b);
        if (ka === kb) continue;
        const ck = ka < kb ? `${ka}|${kb}` : `${kb}|${ka}`;
        let e = edges.get(ck);
        if (!e) {
          e = { a, b, states: new Set() };
          edges.set(ck, e);
        }
        e.states.add(state);
      }
    }
  }

  // Boundary edges between two different states.
  const interEdges = [];
  for (const e of edges.values()) {
    if (e.states.size >= 2) interEdges.push([e.a, e.b]);
  }

  // Chain loose edges into polylines so the output is compact + simplifiable.
  const adj = new Map();
  const used = new Array(interEdges.length).fill(false);
  interEdges.forEach(([a, b], i) => {
    const ka = keyOf(a);
    const kb = keyOf(b);
    if (!adj.has(ka)) adj.set(ka, []);
    if (!adj.has(kb)) adj.set(kb, []);
    adj.get(ka).push({ i, pt: b });
    adj.get(kb).push({ i, pt: a });
  });

  const polylines = [];
  for (let i = 0; i < interEdges.length; i++) {
    if (used[i]) continue;
    used[i] = true;
    const [a, b] = interEdges[i];
    const line = [a, b];
    // extend forward
    let cur = b;
    for (;;) {
      const nbrs = adj.get(keyOf(cur)) || [];
      const nxt = nbrs.find((n) => !used[n.i]);
      if (!nxt) break;
      used[nxt.i] = true;
      line.push(nxt.pt);
      cur = nxt.pt;
    }
    // extend backward
    cur = a;
    for (;;) {
      const nbrs = adj.get(keyOf(cur)) || [];
      const nxt = nbrs.find((n) => !used[n.i]);
      if (!nxt) break;
      used[nxt.i] = true;
      line.unshift(nxt.pt);
      cur = nxt.pt;
    }
    polylines.push(line);
  }

  for (let pl of polylines) {
    pl = simplify(pl, STATE_SIMPLIFY_EPS);
    if (pl.length < 2) continue;
    const path = pl
      .map(([lon, lat], i) => `${i === 0 ? "M" : "L"}${projX(lon).toFixed(1)} ${projY(lat).toFixed(1)}`)
      .join("");
    statePaths.push(path);
  }
} catch (err) {
  console.warn("State borders skipped:", err.message);
}

const W = TARGET_WIDTH;
const H = Math.round(height);

const file = `// AUTO-GENERATED by scripts/gen-india-outline.mjs — do not edit by hand.
// India silhouette following the OFFICIAL boundary of India (Survey of India:
// full Jammu & Kashmir, Ladakh and Aksai Chin), Web-Mercator projected, plus
// the identical projection used to place city markers so pins line up.

export const viewBox = "0 0 ${W} ${H}";
export const width = ${W};
export const height = ${H};

export const indiaPath =
  "${d}";

// Internal state/UT borders (inter-state divisions only), same projection as
// the silhouette. Render clipped to indiaPath so only the divisions show.
export const statePaths: string[] = [
${statePaths.map((s) => `  "${s}",`).join("\n")}
];

const PAD = ${PAD};
const DEG = Math.PI / 180;
const LON_MIN_RAD = ${lonMinRad};
const Y_MAX = ${yMax};
const K = ${k};

const mercY = (lat: number) =>
  Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));

/** Project a lat/lng to a point in the SVG viewBox (matches the outline). */
export function projectToViewBox(lat: number, lng: number) {
  return {
    x: PAD + (lng * DEG - LON_MIN_RAD) * K,
    y: PAD + (Y_MAX - mercY(lat)) * K,
  };
}

/** Project a lat/lng to percentage offsets for absolute positioning. */
export function projectToPercent(lat: number, lng: number) {
  const { x, y } = projectToViewBox(lat, lng);
  return { left: (x / ${W}) * 100, top: (y / ${H}) * 100 };
}
`;

writeFileSync(new URL("../src/components/india-outline.ts", import.meta.url), file);
console.log(
  `Wrote india-outline.ts — viewBox ${W}x${H}, ${mainland.length} silhouette points (from ${best.ring.length}), ${statePaths.length} state border polylines.`
);

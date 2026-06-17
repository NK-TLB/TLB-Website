// Submits every sitemap URL to IndexNow on each deploy so Bing, Copilot,
// ChatGPT search, Yandex, Naver, Seznam and Yep re-crawl the site quickly.
// Runs automatically as an npm "postbuild" step on Netlify. It never throws,
// so a network hiccup can never fail a production deploy.
//
// Note: IndexNow is not used by Google. Google discovery relies on the sitemap
// (already linked in robots.txt) plus natural re-crawls and manual "Request
// indexing" in Search Console for urgent pages.
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const KEY = "d294c714edf784212665d1b814c3165e";
const here = dirname(fileURLToPath(import.meta.url));

// TLB (Vite) keeps the sitemap in public/; the static Infraventure repo keeps
// it at the project root. Try both so this one script works in either repo.
const SITEMAP_CANDIDATES = [
  resolve(here, "../public/sitemap.xml"),
  resolve(here, "../sitemap.xml"),
];

async function main() {
  if (process.env.NETLIFY !== "true" && !process.env.FORCE_INDEXNOW) {
    console.log("[indexnow] not on Netlify, skipping (set FORCE_INDEXNOW=1 to test)");
    return;
  }

  let xml = null;
  for (const path of SITEMAP_CANDIDATES) {
    try {
      xml = await readFile(path, "utf8");
      break;
    } catch {
      // try next candidate
    }
  }
  if (!xml) {
    console.log("[indexnow] no sitemap found, skipping");
    return;
  }

  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) {
    console.log("[indexnow] sitemap had no <loc> URLs, skipping");
    return;
  }

  const host = new URL(urls[0]).host;
  const payload = {
    host,
    key: KEY,
    keyLocation: `https://${host}/${KEY}.txt`,
    urlList: urls,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    console.log(`[indexnow] submitted ${urls.length} URLs for ${host} -> HTTP ${res.status}`);
  } catch (err) {
    console.log(`[indexnow] ping failed (non-fatal): ${err.message}`);
  }
}

main().catch((err) => console.log("[indexnow] error (non-fatal):", err.message));

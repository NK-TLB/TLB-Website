#!/usr/bin/env node
/**
 * Post-build prerender: snapshot each route with Puppeteer so crawlers receive
 * route-specific <title>, meta description, and canonical in static HTML.
 */
import { createServer } from "node:http";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import { PRERENDER_ROUTES } from "./prerender-routes.mjs";
import { cleanupPrerenderedHtml } from "./cleanup-prerendered-html.mjs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST = join(__dirname, "..", "dist");
const PORT = 4173;
const BASE = `http://127.0.0.1:${PORT}`;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".vtt": "text/vtt",
  ".webmanifest": "application/manifest+json",
};

async function tryRead(pathname) {
  const candidates = [];

  if (pathname.endsWith("/")) {
    candidates.push(join(DIST, pathname, "index.html"));
  } else {
    candidates.push(join(DIST, pathname));
    candidates.push(join(DIST, pathname, "index.html"));
  }

  for (const filePath of candidates) {
    try {
      const fileStat = await stat(filePath);
      if (fileStat.isFile()) {
        return readFile(filePath);
      }
    } catch {
      // try next candidate
    }
  }

  return null;
}

function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const url = new URL(req.url ?? "/", BASE);
        const pathname = decodeURIComponent(url.pathname);
        const data = (await tryRead(pathname)) ?? (await readFile(join(DIST, "index.html")));
        const ext = extname(pathname.split("/").pop() ?? "");
        res.writeHead(200, {
          "Content-Type": MIME[ext] ?? "text/html; charset=utf-8",
        });
        res.end(data);
      } catch {
        res.writeHead(500).end("Prerender server error");
      }
    });

    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

function outputPath(route) {
  if (route === "/") return join(DIST, "index.html");
  return join(DIST, route.slice(1), "index.html");
}

async function waitForRouteReady(page, route) {
  await page.waitForFunction(
    (path) => {
      const title = document.title.trim();
      const brandSuffix = " · The Laundry Bag";

      if (path === "/") {
        return (
          title.startsWith("The Laundry Bag ·") &&
          !title.includes("Commercial Laundry, Dry Cleaning")
        );
      }

      return title.endsWith(brandSuffix) && !title.startsWith("The Laundry Bag · India");
    },
    { timeout: 45000 },
    route,
  );

  await page.waitForSelector("#main", { timeout: 10000 });
}

async function prerender() {
  console.log("Starting prerender server…");
  const server = await startServer();

  console.log("Launching headless browser…");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    for (const route of PRERENDER_ROUTES) {
      const url = `${BASE}${route}`;
      console.log(`Prerendering ${route}`);

      await page.goto(url, { waitUntil: "networkidle0", timeout: 90000 });
      await waitForRouteReady(page, route);

      const html = cleanupPrerenderedHtml(await page.content());
      const out = outputPath(route);
      await mkdir(dirname(out), { recursive: true });
      await writeFile(out, html);

      console.log(`  saved ${out.replace(DIST, "dist")}`);
      console.log(`  title: ${await page.title()}`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log("Prerender complete.");
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});

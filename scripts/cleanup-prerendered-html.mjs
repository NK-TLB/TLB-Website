import * as cheerio from "cheerio";

/** Keep the last matching node; react-helmet-async appends the active route tags last. */
function keepLast($, selector) {
  const nodes = $(selector);
  if (nodes.length <= 1) return;
  nodes.slice(0, -1).remove();
}

/** Helmet's prioritized title is injected first in the head. */
function keepFirst($, selector) {
  const nodes = $(selector);
  if (nodes.length <= 1) return;
  nodes.slice(1).remove();
}

/**
 * Prerender snapshots can contain duplicate SEO tags from hydration. Keep the
 * final Helmet-managed values so crawlers see one canonical title per page.
 */
export function cleanupPrerenderedHtml(html) {
  const $ = cheerio.load(html, { decodeEntities: false });

  keepFirst($, "title");
  keepLast($, 'meta[name="description"]');
  keepLast($, 'meta[name="keywords"]');
  keepLast($, 'meta[name="robots"]');
  keepLast($, 'link[rel="canonical"]');
  keepLast($, 'meta[property="og:url"]');
  keepLast($, 'meta[property="og:title"]');
  keepLast($, 'meta[property="og:description"]');
  keepLast($, 'meta[name="twitter:title"]');
  keepLast($, 'meta[name="twitter:description"]');

  return $.html();
}

# The Laundry Bag — Website

**India's Leading Laundry Service Provider.** The official marketing site for
The Laundry Bag (TLB) — commercial laundry, dry cleaning and linen management
for hotels, resorts and hospitals, founded by Shourya Jain, headquartered in
Raipur, Chhattisgarh, India.

Built with **Vite + React 19 + TypeScript + Tailwind CSS 3**, with SEO handled
via `react-helmet-async` (per-page titles, descriptions, canonical/hreflang,
OpenGraph/Twitter cards, and JSON-LD `LocalBusiness`/`Organization`/`WebSite`
schemas).

## Scripts

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:3000
npm run build   # type-check + production build to dist/
npm run preview # preview the production build
npm run lint    # eslint
```

## Project structure

```
public/            # static assets (logo, favicons, images, robots, sitemap, _redirects)
  logo.svg         # primary logo (vector, with tagline) used in the UI
  logo.png         # raster logo for social / JSON-LD
  favicon.svg      # scalable favicon (washer mark)
  favicon-32/192/512.png, apple-touch-icon.png
src/
  components/      # Layout, Navbar, Footer, Logo, Icon, SEO, PageHero, …
  pages/           # Home, Services, Commercial, Locations, About, Clients, FAQ, App, Contact, …
  data/site.ts     # single source of truth for all content + SEO keywords
```

## Deployment (Netlify)

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Routing/redirects and security headers are configured in `netlify.toml`
  (git-connected builds) and `public/_redirects` (drag-and-drop deploys).

## Branding

- **Logo:** `public/logo.svg` (with the tagline *"India's Leading Laundry
  Service Provider"*); raster fallback at `public/logo.png`.
- **Colors:** brand green `#33d65b`, sky blue `#009cdc` (see `tailwind.config.js`).

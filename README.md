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
docs/              # internal planning notes (not served by the site)
media/             # press photo originals (input for npm run media:press)
scripts/           # build helpers (press media pipeline, IndexNow ping, team frame tool)
src/
  components/      # Layout, Navbar, Footer, Logo, Icon, SEO, PageHero, …
  pages/           # Home, Locations, About, Clients, FAQ, Contact, …
  data/site.ts     # single source of truth for all content + SEO keywords
```

## Deployment (Netlify)

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Routing/redirects and security headers are configured in `netlify.toml`
  (git-connected builds) and `public/_redirects` (drag-and-drop deploys).

## Branding

- **Logo:** `public/logo.png` (with the tagline *"India's Leading Laundry
  Service Provider"*). All favicons, the maskable PWA icons and the social
  share image are derived from this single logo.
- **Colors:** brand sky blue `#00afef` / `#009cdc` (see `tailwind.config.js`).

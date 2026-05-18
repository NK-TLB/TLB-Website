# The LaundryBag — Website

A fresh React + Vite + TypeScript + Tailwind rebuild of **thelaundrybag.co.in**,
designed to deploy on **Netlify** with the GoDaddy domain pointing to it.

Live preview locally:

```bash
npm install
npm run dev
```

Open http://localhost:5173.

---

## What's inside

- **Framework:** Vite + React 19 + TypeScript
- **Styling:** Tailwind CSS 3 with a custom brand palette
- **Routing:** `react-router-dom` (client-side, with Netlify SPA fallback)
- **Pages:** Home · Services · Commercial · About · FAQ · App · Contact · 404
- **SEO:** OpenGraph + Twitter meta, JSON-LD `LocalBusiness`, `sitemap.xml`, `robots.txt`
- **Legacy redirects:** Old `/home/index.php/pages/...` URLs from the previous
  PHP site are 301-redirected to the new pages (configured in `netlify.toml`
  and `public/_redirects`), so indexed Google links keep working.
- **Contact form:** Set up to use **Netlify Forms** (zero backend — submissions
  land in the Netlify dashboard and can be emailed to you).

---

## Project structure

```
public/
  favicon.svg
  og-image.svg
  robots.txt
  sitemap.xml
  _redirects
src/
  components/   # Layout, Navbar, Footer, Logo, Icon, PageHero
  pages/        # Home, Services, Commercial, About, FAQ, AppDownload, Contact, NotFound
  data/site.ts  # Single source of truth for content (phone, email, services, FAQs, …)
  App.tsx       # Routes
  main.tsx      # React entry
index.html
netlify.toml
```

To change site copy (phone, email, services, FAQs, etc.), edit
`src/data/site.ts` — most of the visible content is centralized there.

---

## Available scripts

```bash
npm run dev       # Start the dev server
npm run build     # Type-check + production build into dist/
npm run preview   # Preview the production build locally
npm run lint      # ESLint
```

---

## Deploying to Netlify

You have two easy paths — pick whichever fits your workflow.

### Option A — Drag & drop (fastest, no Git needed)

1. Run `npm run build` locally.
2. Go to [app.netlify.com](https://app.netlify.com) → **Sites** → **Add new site**
   → **Deploy manually**.
3. Drag the **`dist/`** folder onto the page.
4. Netlify will give you a temporary `https://<random>.netlify.app` URL.
5. Verify the site loads, then move on to **Custom domain** below.

### Option B — Connect a Git repo (recommended for ongoing changes)

1. Push this project to GitHub / GitLab / Bitbucket.
2. In Netlify, **Add new site** → **Import from Git** → pick the repo.
3. Build settings (Netlify will auto-detect from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `20` (set via `.nvmrc` / `netlify.toml`)
4. Click **Deploy**. Every push to your main branch redeploys automatically.

---

## Pointing your GoDaddy domain to Netlify

You own **thelaundrybag.co.in** at GoDaddy. The cleanest setup is:

> Keep the domain registered at GoDaddy, but use **Netlify DNS** to manage the
> records. This is what Netlify recommends and it makes SSL + apex domains
> "just work".

### Step 1 — Add the domain in Netlify

1. In your site → **Domain management** → **Add a domain**.
2. Enter `thelaundrybag.co.in` and confirm you own it.
3. Netlify will give you **4 nameservers**, e.g.:

   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

### Step 2 — Update nameservers at GoDaddy

1. Log in to GoDaddy → **My Products** → next to `thelaundrybag.co.in` click
   **DNS** (or **Manage**).
2. Scroll to **Nameservers** → **Change** → **Enter my own nameservers (advanced)**.
3. Paste the 4 nameservers from Netlify, save.
4. Propagation usually takes 15 min – a few hours.

> ⚠️ Once you switch nameservers, **GoDaddy's DNS records stop applying** —
> manage all DNS (A/CNAME/MX/TXT) inside Netlify going forward.
> If you have email (e.g. Google Workspace / Zoho) tied to this domain,
> add those MX/TXT records in Netlify **before** switching nameservers,
> so email keeps working.

### Step 3 — Confirm www + apex both work

In Netlify → **Domain management** make sure both of these are listed:

- `thelaundrybag.co.in` (apex)
- `www.thelaundrybag.co.in` (primary, recommended)

Set **`www`** as the **primary domain** and Netlify will 301 the apex to it.
Provision the free Let's Encrypt SSL when prompted.

### Step 3b — (Alternative) Keep DNS at GoDaddy

If you'd rather not move nameservers, in GoDaddy DNS:

| Type    | Name | Value                              | TTL  |
| ------- | ---- | ---------------------------------- | ---- |
| `A`     | `@`  | `75.2.60.5` (Netlify load balancer)| 600  |
| `CNAME` | `www`| `<your-site>.netlify.app`          | 600  |

Then in Netlify → **Domain management** → **Add custom domain**, add both
`thelaundrybag.co.in` and `www.thelaundrybag.co.in`, and let Netlify
provision SSL. (Netlify DNS is still the easier route — fewer SSL gotchas.)

> The screenshot you sent showed `DNS_PROBE_FINISHED_NXDOMAIN` for `www`.
> That's because the `www` subdomain has no DNS record right now. The two
> steps above will fix it.

---

## Contact form (Netlify Forms)

The form on **/contact** is already wired up for Netlify Forms:

- The `<form>` has `name="contact"`, `data-netlify="true"` and a honeypot.
- A hidden `form-name` input is included so the static HTML works without JS.

After your first deploy:

1. In Netlify → **Forms** → you'll see the `contact` form once one submission
   has been made.
2. Set up **Form notifications** (Netlify → Forms → Settings → Form
   notifications) to email you on each submission, or pipe to Slack/Zapier.

If you'd rather use a different provider (Formspree, EmailJS, your own
Supabase function), just remove the Netlify form attributes in
`src/pages/Contact.tsx` and replace the submit handler.

---

## Recovering more of the old site

The previous Plesk hosting is gone, but a lot of public-facing content is
still recoverable. If you want to restore even more pages or imagery, try:

- **Wayback Machine** — [web.archive.org/web/*/thelaundrybag.co.in](https://web.archive.org/web/*/thelaundrybag.co.in)
- **Google cache / indexed URLs** — search `site:thelaundrybag.co.in` and
  open each result; copy headings, body copy and images.
- **Google Images** — search `thelaundrybag.co.in` and save logos / banners.
- **App store listings** — the Play Store and App Store listings have
  current screenshots and descriptions.

Add recovered content to `src/data/site.ts` (most copy lives there) or edit
the page components directly.

---

## Next things you might want to add

- Real photographs (replace the SVG/illustration placeholders).
- A `BookingForm` that creates an order in your backend / Supabase.
- A blog (`src/pages/Blog.tsx` + MDX or Contentlayer).
- Analytics (Plausible / Umami / GA4 — drop a `<script>` in `index.html`).
- A live chat / WhatsApp button (already linked in the footer).

---

## Brand quick reference

- **Brand:** The LaundryBag™ (TLB)
- **Tagline:** *On Demand Laundry & Dry-Clean* · *Less laundry. More life.*
- **Primary blue:** `#29abe2` (brand-400, signature) / `#0f86bb` (brand-600 for buttons)
- **Accent green:** `#10b981` (accent-500)
- **Fonts:** Plus Jakarta Sans (display) + Inter (body)
- **Logo:** `public/logo.jpg` (replace with a transparent PNG/SVG for the crispest look)

## SEO

- Per-page `<title>`, `<meta description>`, OG and Twitter tags are managed
  via `react-helmet-async` in `src/components/SEO.tsx`.
- Default keyword list lives in `src/data/site.ts` (`seoKeywords`).
- Three JSON-LD blocks are emitted on every page: `LocalBusiness`,
  `Organization`, `WebSite`. The FAQ page adds a `FAQPage` schema; Services
  page adds a `Service` + `OfferCatalog`.
- A `<h1 class="sr-only">` and a `<p class="sr-only">` in `Layout.tsx`
  give crawlers a fully indexed, keyword-rich description of the business
  without affecting the visible UI.
- `public/robots.txt` allows all major crawlers; `public/sitemap.xml`
  enumerates every page.
- Submit `https://www.thelaundrybag.co.in/sitemap.xml` to **Google Search
  Console** and **Bing Webmaster Tools** after first deploy.

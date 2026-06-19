# The Laundry Bag — Marketing Backlog (Pending)

Ideas not yet built. Everything reuses data in
[`src/data/site.ts`](src/data/site.ts) and the existing component kit (`Reveal`,
`SectionHeading`, `Icon`, `CountUp`, brand classes, the 6 templates, `IndiaMap`).

Legend for mockups: `▢` image · `●` icon · `◀` highlighted metric · `[ Button ]` ·
`──` divider · `»` motion/animation.

---

## ✅ Recently shipped (removed from backlog)
- Client logo wall · "As featured in" press strip · brand timeline · service-area
  checker · founder/leadership · certifications band · FAQ + schema · scroll progress.
- **Dedicated `/press` page** with real photos, MoU video (EN + हिन्दी captions),
  newspaper clippings, recognition gallery and the **Ratan Tata** feature.
- **Animated stat counters** (`CountUp`, count-up on scroll, reduced-motion safe).
- **Floating WhatsApp CTA** (site-wide).
- **Subtle-premium recolour** (blue-tinted page background, deep-blue footer, white
  floating cards) + **content de-duplication** (each page now owns its content).
- India map with **state borders** (political look).

---

## Table of contents
1. [Conversion & lead generation](#1-conversion--lead-generation)
2. [Trust & social proof](#2-trust--social-proof)
3. [Interactive & visual showcases](#3-interactive--visual-showcases)
4. [SEO & content](#4-seo--content)
5. [Delight & polish](#5-delight--polish)
6. [Suggested priority](#6-suggested-priority)

---

## 1. Conversion & lead generation

### 1.1 Linen-spend / savings calculator  ⟵ NEW
**What:** A short interactive — rooms/beds + occupancy → estimated monthly linen
volume and an indicative TLB cost vs in-house. Outputs a CTA to request the real quote.
**Why:** Procurement buyers think in numbers; this captures intent + qualifies leads.

```
┌───────────────────────────────────────────────────────────┐
│   ESTIMATE YOUR LINEN PROGRAMME                             │
│   Property type [ Hotel ▾ ]   Rooms/Beds [  120 ]          │
│   Avg occupancy  [——————●———— ] 72%                        │
│   ───                                                       │
│   ◀ ~4,300 pieces / day     ◀ 24h turnaround               │
│   Indicative model:  On-premise · Off-site · Rental         │
│   [ Get my exact proposal → ]                               │
└───────────────────────────────────────────────────────────┘
```

### 1.2 Sticky "Request a quote" bar (desktop)  ⟵ NEW
**What:** Slim bar that slides in after the hero on scroll (WhatsApp FAB already ships).
**Data:** `site.phone`.

```
┌──────────────────────────────────────────────────────────────┐
│  Need a linen partner?  (+91) 8085990015   [ Request a quote ] │ ← slides in on scroll
└──────────────────────────────────────────────────────────────┘
```

### 1.3 B2B "Request a proposal" form
**What:** Dedicated institutional enquiry form (separate from generic Contact).
**Fields:** Property type, city, rooms/beds, linen owned vs rental, work email, phone.

```
┌───────────────────────────────────────────────────┐
│   FOR HOTELS & HOSPITALS — Request a proposal       │
│   Property type [ Hotel ▾ ]   City [ ________ ]     │
│   Rooms / Beds  [ ____ ]                            │
│   Model ( On-premise ) ( Off-site ) ( Rental )      │
│   Work email [ ________ ]   Phone [ ________ ]      │
│   [ Request proposal ]                              │
└───────────────────────────────────────────────────┘
```

### 1.4 Downloadable capability deck (PDF)  ⟵ NEW
**What:** A gated/ungated "Capabilities & compliance one-pager" for procurement to
forward internally. Email-gate optionally to capture leads.

```
┌───────────────────────────────┐
│ ▢  TLB Capability Deck (PDF)   │
│ ● ISO · never-mix · 24h · map   │
│ [ Download ]  or  [ Email it to me ] │
└───────────────────────────────┘
```

---

## 2. Trust & social proof

### 2.1 Client case-study / spotlight cards
**What:** 3 mini case studies, each with one headline metric.
**Data:** new `caseStudies` array (derive from `clientGroups` + copy).

```
┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────────┐
│ ▢ Grand Hyatt, Goa   │ │ ▢ Tata Medical, Kol. │ │ ▢ DKS Hospital, Rai. │
│ ● Hospitality        │ │ ● Healthcare         │ │ ● On-premise         │
│ "Five-star linen,    │ │ Infection-safe linen │ │ In-house unit, zero  │
│  zero misses."       │ │ at hospital scale.   │ │ linen downtime.      │
│ 24h ◀ turnaround     │ │ 100% ◀ compliance    │ │ 24/7 ◀ uptime        │
└──────────────────────┘ └──────────────────────┘ └──────────────────────┘
```

### 2.2 Ratings badge (more prominent)
**What:** Surface the JustDial score with stars in the hero trust strip / footer.
**Data:** `ratings`.

```
┌─────────────────────────────┐
│  ★★★☆☆  3.3 / 5             │
│  JustDial · 167 ratings     │
└─────────────────────────────┘
```

### 2.3 Testimonials carousel / quote wall
**What:** Upgrade `testimonials` into an auto-scrolling carousel with initials avatars.
**Data:** `testimonials`.

```
┌───────────────────────────────────────────────────────────────────┐
│   CUSTOMER LOVE                                                     │
│   ┌───────────────────────┐   ┌───────────────────────┐            │
│   │ "Linen quality and …" │   │ "Hygienic, infection-…"│            │
│   │ ★★★★★  Front Office   │   │ ★★★★★  Facility Mgr    │            │
│   └───────────────────────┘   └───────────────────────┘            │
│        ‹  ● ● ○ ○  ›   (auto-advance, swipeable)                    │
└───────────────────────────────────────────────────────────────────┘
```

### 2.4 Video testimonials / founder film  ⟵ NEW
**What:** Slot for the founder film + short client soundbites (from SHOOT-STRATEGY.md)
on Home and `/press`, click-to-play (reuse `VideoFeature`).

```
┌───────────────────────────────┐
│ ▢ ▶  "Why hotels switch to TLB" │  ● 0:48 · captioned
└───────────────────────────────┘
```

---

## 3. Interactive & visual showcases

### 3.1 Compare the 3 models (decision table)  ⟵ NEW
**What:** On-premise vs Off-site vs Linen-rental at a glance — helps buyers self-select.
**Data:** `operationalModels` + a few comparison rows.

```
┌──────────────┬────────────┬────────────┬────────────┐
│              │ On-premise │ Off-site   │ Rental     │
│ Capex        │   ●        │   —        │   —        │
│ Space needed │   High     │   None     │   None     │
│ Control      │   Highest  │   High     │   Managed  │
│ Best for     │ Big hotels │ City spread│ New props  │
└──────────────┴────────────┴────────────┴────────────┘
[ Not sure? Talk to us → ]
```

### 3.2 Animated "How it works" stepper
**What:** `howItWorks` as a connected 4-step flow that illuminates on scroll.
**Data:** `howItWorks`.

```
●━━━━━━━●━━━━━━━●━━━━━━━●   « line draws in
1        2        3        4
Assess   Design   Process  Deliver
```

### 3.3 Before / After garment slider
**What:** Draggable handle revealing stained vs cleaned garment.
**Data:** 2 image pairs (from the shoot).

```
┌───────────────────────────────────────────┐
│ BEFORE ▢▢▢ ┃ ▢▢▢ AFTER     ◀ ┃ ▶ drag      │
└───────────────────────────────────────────┘
```

### 3.4 Eco-impact ticker
**What:** "Water saved" counter (reuse `CountUp`) + a green promise band.
**Data:** `whyChooseUs` (5,000 L/day), `usps` (PERC-free).

```
~5,000 L water saved/day   ·   PERC-free   ·   ISO-certified
12,481,920 L » ← ticking since 2013
```

---

## 4. SEO & content

### 4.1 City landing pages (programmatic SEO)
**What:** One page per city ("Commercial laundry in Pune") generated from `mapMarkers`.

```
/locations/pune
┌───────────────────────────────────────────────────┐
│ Commercial laundry & linen in Pune                 │
│ ● Hyatt, Pune · on-premise / off-site / rental      │
│ [ Mini India map, Pune highlighted ]                │
│ [ Request B2B proposal ]   [ Check coverage ]       │
└───────────────────────────────────────────────────┘
```

### 4.2 Newsroom / press index  ⟵ NEW
**What:** A dated, auto-listed index of coverage (YourStory, Startup Buzz, CM MoU,
Ratan Tata, newspaper clippings) with `NewsArticle` schema per item — feeds the `/press`
feature and ranks for "The Laundry Bag news".

```
┌───────────────────────────────────────────┐
│ NEWSROOM                                    │
│ 2024 · MoU with CM of Chhattisgarh   →      │
│ 2023 · Inauguration at Tata Medical  →      │
│ ──   · Featured in YourStory         →      │
└───────────────────────────────────────────┘
```

### 4.3 Blog / care guides
**What:** "Hotel linen lifespan", "Hospital linen hygiene standards", "PERC-free dry
cleaning explained" — keyword strategy + inbound.

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ ▢ Hotel linen│ │ ▢ Hospital   │ │ ▢ PERC-free  │
│ lifespan     │ │ hygiene 101  │ │ explained    │
└──────────────┘ └──────────────┘ └──────────────┘
```

---

## 5. Delight & polish

- **Form success animation** — confetti / checkmark draw-in on proposal submit.
- **Sticky page sub-nav** on long pages (Home/Commercial) — jump to sections.
- **Hindi / regional language toggle** — wider reach in TLB's home markets.
- **Accessibility statement page** + a visible WCAG-AA commitment.

```
┌───────────────────────────────────────────────────┐
│   ✓  Message sent!   (subtle confetti + check)     │
│   We'll be in touch within 24 hours.              │
└───────────────────────────────────────────────────┘
```

---

## 6. Suggested priority

| Priority | Idea | Effort | Data ready? |
|----------|------|--------|-------------|
| 1 | Eco-impact ticker (3.4) | Low | ✅ reuse `CountUp` |
| 2 | Testimonials carousel (2.3) | Low | ✅ `testimonials` |
| 3 | Ratings badge prominence (2.2) | Low | ✅ `ratings` |
| 4 | Sticky quote bar (1.2) | Low | ✅ phone |
| 5 | Compare-the-3-models table (3.1) | Low | ✅ `operationalModels` |
| 6 | Animated how-it-works stepper (3.2) | Med | ✅ `howItWorks` |
| 7 | B2B proposal form (1.3) | Med | ➕ Netlify/backend |
| 8 | Linen-spend calculator (1.1) | Med | ➕ formula + copy |
| 9 | Client case-study cards (2.1) | Med | ➕ short copy |
| 10 | Newsroom / press index (4.2) | Med | ✅ press data |
| 11 | Before/After slider (3.3) | Med | ➕ shoot images |
| 12 | Video testimonials / founder film (2.4) | Med | ➕ from shoot |
| 13 | Capability deck PDF (1.4) | Low | ➕ design the PDF |
| 14 | City landing pages (4.1) | High | ✅ `mapMarkers` |
| 15 | Blog / care guides (4.3) | High | ➕ content |
| 16 | Form success animation (5) | Low | ✅ Contact form |

> All sections inherit the brand blue palette and re-skin automatically across the
> 6 templates, exactly like the `IndiaMap` and `CountUp`.

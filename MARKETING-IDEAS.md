# The Laundry Bag — Marketing Backlog (Pending)

Ideas not yet built. Completed items (logo wall, press strip, timeline,
service-area checker, founder spotlight, certifications band, FAQ + schema,
scroll progress, hero bubbles) have been removed from this list.

Most pending ideas reuse data in [`src/data/site.ts`](src/data/site.ts) and the
existing component kit (`Reveal`, `SectionHeading`, `Icon`, brand classes, the
6 templates, and `IndiaMap`).

Legend for mockups: `▢` image · `●` icon · `◀` highlighted metric · `[ Button ]` ·
`──` divider · `»` motion/animation.

---

## Table of contents

1. [Trust & social proof](#1-trust--social-proof)
2. [Interactive & visual showcases](#2-interactive--visual-showcases)
3. [Conversion & lead generation](#3-conversion--lead-generation)
4. [Brand & differentiation](#4-brand--differentiation)
5. [SEO & content](#5-seo--content)
6. [Delight & polish](#6-delight--polish)
7. [Suggested priority](#7-suggested-priority)

---

## 1. Trust & social proof

### 1.1 Animated stat counters
**What:** The `counters` data (5,00,000+ laundry done, 3,500 customers, etc.)
count up from 0 when scrolled into view.
**Why:** Instant credibility; pairs with the India map.
**Data:** `counters`.

```
┌───────────────────────────────────────────────────────────────────┐
│                    BY THE NUMBERS  (eyebrow)                        │
│           A decade of laundry, trusted at scale                     │
│  ───                                                                │
│                                                                     │
│   5,00,000+ »      15 »          50,000+ »        3,500 »           │
│   Laundry Done   Machines      Dry-Cleaned       Happy             │
│                  Working        Items            Customers          │
│                                                                     │
│   (numbers tick up 0 → final on scroll-in)                          │
└───────────────────────────────────────────────────────────────────┘
```

### 1.2 Client case-study / spotlight cards
**What:** 3 mini case studies with a headline metric each.
**Why:** Turns logos into proof of outcomes — gold for procurement buyers.
**Data:** new `caseStudies` array (derive from `clientGroups` + copy).

```
┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────────┐
│ ▢ Grand Hyatt, Goa   │ │ ▢ Tata Medical, Kol. │ │ ▢ DKS Hospital, Rai. │
│ ●  Hospitality       │ │ ●  Healthcare        │ │ ●  On-premise        │
│                      │ │                      │ │                      │
│ "Five-star linen,    │ │ Infection-safe linen │ │ In-house unit, zero  │
│  zero misses."       │ │ at hospital scale.   │ │ linen downtime.      │
│                      │ │                      │ │                      │
│  24h ◀ turnaround    │ │  100% ◀ compliance   │ │  24/7 ◀ uptime       │
│  Read story  »       │ │  Read story  »       │ │  Read story  »       │
└──────────────────────┘ └──────────────────────┘ └──────────────────────┘
```

### 1.3 Ratings badge
**What:** Surface the JustDial score with stars — more prominent than the
current Clients page cards (e.g. hero trust strip or footer badge).
**Data:** `ratings`.

```
┌─────────────────────────────┐
│  ★★★☆☆  3.3 / 5             │
│  JustDial · 167 ratings     │
└─────────────────────────────┘
```

### 1.4 Testimonials carousel / quote wall
**What:** Upgrade `testimonials` into an auto-scrolling carousel or masonry wall
with initials avatars.
**Data:** `testimonials`.

```
┌───────────────────────────────────────────────────────────────────┐
│                   CUSTOMER LOVE  (eyebrow)                          │
│  ───                                                                │
│   ┌───────────────────────┐   ┌───────────────────────┐            │
│   │ "Linen quality and      │   │ "Hygienic, infection-  │            │
│   │  finishing are..."      │   │  safe processing..."    │            │
│   │  ★★★★★                  │   │  ★★★★★                  │            │
│   │  Front Office · Goa     │   │  Facility Mgr · Hospital│            │
│   └───────────────────────┘   └───────────────────────┘            │
│        ‹  ● ● ○ ○  ›   (auto-advance, swipeable)                    │
└───────────────────────────────────────────────────────────────────┘
```

---

## 2. Interactive & visual showcases

### 2.1 Animated "How it works" stepper
**What:** `howItWorks` as a connected 4-step flow that animates/illuminates on
scroll (assess → design → process → deliver).
**Data:** `howItWorks`.

```
┌───────────────────────────────────────────────────────────────────┐
│                 HOW WE PARTNER  (eyebrow)                           │
│  ───                                                                │
│                                                                     │
│   ●━━━━━━━━━━━●━━━━━━━━━━━●━━━━━━━━━━━●   « line draws in            │
│   1           2           3           4                             │
│   Assess      Design      Process     Deliver &                     │
│   volumes     the model   to spec     track linen                   │
└───────────────────────────────────────────────────────────────────┘
```

### 2.2 Before / After garment slider
**What:** Draggable handle revealing stained vs. cleaned garment.
**Why:** Strong visual proof for dry-cleaning / delicate-garment quality.
**Data:** 2 image pairs (new asset).

```
┌───────────────────────────────────────────────────┐
│  BEFORE                  ┃                  AFTER   │
│  (stained shirt) ▢▢▢▢▢▢▢ ┃ ▢▢▢▢▢▢▢ (spotless)       │
│                          ┃                          │
│                       ◀  ┃  ▶   « drag handle       │
│                          ┃                          │
└───────────────────────────────────────────────────┘
   Drag to see the difference
```

### 2.3 Eco-impact live ticker
**What:** "Water saved" counter that increments in real time + a water-drop
visual; ties to the eco/PERC-free story.
**Why:** Differentiator + ESG signal for institutional buyers.
**Data:** `whyChooseUs` (5,000 L/day), `usps` (PERC-free).

```
┌───────────────────────────────────────────────────────────────────┐
│   ●  OUR GREEN PROMISE                                              │
│                                                                     │
│        ~5,000 L          PERC-free        ISO-certified            │
│        water saved/day   dry cleaning     process                  │
│        12,481,920 L »  ← ticking up since 2013                      │
│                                                                     │
│        [ How we do it ]                                             │
└───────────────────────────────────────────────────────────────────┘
```

---

## 3. Conversion & lead generation

### 3.1 Sticky WhatsApp / quote CTA
**What:** Floating WhatsApp button + sticky "Request a quote" bar on scroll.
**Data:** `site.phone`, `whatsapp` icon (already in `Icon.tsx`).

```
                                              ┌───────────────────┐
   ...page content...                         │ ●  Chat on        │
                                              │    WhatsApp       │
┌─────────────────────────────────────────────┴───────────────────┘
│  Need a linen partner?   (+91) 8085990015   [ Request a quote ]   │ ← sticky
└──────────────────────────────────────────────────────────────────┘
```

### 3.2 B2B "Request a quote" form
**What:** Dedicated institutional enquiry form (separate from the generic
Contact form).
**Fields:** Property type, city, rooms/beds, linen owned vs rental, contact.

```
┌───────────────────────────────────────────────────┐
│   FOR HOTELS & HOSPITALS — Request a proposal       │
│                                                     │
│   Property type   [ Hotel ▾ ]                       │
│   City            [ ____________ ]                  │
│   Rooms / Beds    [ ____ ]                          │
│   Model           ( On-premise ) ( Off-site ) ( Rental )│
│   Work email      [ ____________ ]                  │
│   Phone           [ ____________ ]                  │
│                                                     │
│   [ Request proposal ]                              │
└───────────────────────────────────────────────────┘
```

---

## 4. Brand & differentiation

### 4.1 Press gallery — real photos
**What:** Replace SVG placeholders in `public/images/press/` with real photos
(Shourya Jain with CM, Ratan Tata, newspaper clippings) and add
`public/images/team/shourya-jain.jpg` for the founder portrait.
**Why:** Authenticity; the layout is live — assets are the missing piece.

```
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│ ▢  (real)     │ │ ▢  (real)     │ │ ▢  (clipping) │
│ Shourya + CM  │ │ Shourya + RT  │ │ Press coverage│
└───────────────┘ └───────────────┘ └───────────────┘
```

---

## 5. SEO & content

### 5.1 City landing pages (programmatic SEO)
**What:** One page per city ("Commercial laundry in Pune") generated from
`mapMarkers`, linked from the map → strong local SEO.

```
/locations/pune
┌───────────────────────────────────────────────────┐
│  Commercial laundry & linen in Pune               │
│  ● Hyatt, Pune  ·  on-premise / off-site / rental   │
│  [ Mini India map, Pune highlighted ]               │
│  [ Request B2B proposal ]   [ Check coverage ]      │
└───────────────────────────────────────────────────┘
```

### 5.2 Blog / care guides
**What:** "Hotel linen lifespan", "Hospital linen hygiene standards",
"PERC-free dry cleaning explained" — supports keyword strategy and inbound.

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ ▢ Hotel linen│ │ ▢ Hospital   │ │ ▢ PERC-free  │
│ lifespan     │ │ hygiene 101  │ │ explained    │
│ Read »       │ │ Read »       │ │ Read »       │
└──────────────┘ └──────────────┘ └──────────────┘
```

---

## 6. Delight & polish

- **Confetti / check animation** on successful contact / proposal form submission.

```
┌───────────────────────────────────────────────────┐
│   ✓  Message sent!                                │
│   (subtle confetti burst + checkmark draw-in)     │
│   We'll be in touch within 24 hours.              │
└───────────────────────────────────────────────────┘
```

---

## 7. Suggested priority

| Priority | Section | Effort | Data ready? |
|----------|---------|--------|-------------|
| 1 | Animated stat counters (1.1) | Low | ✅ `counters` |
| 2 | Eco-impact ticker (2.3) | Low | ✅ `whyChooseUs`, `usps` |
| 3 | Testimonials carousel (1.4) | Low | ✅ `testimonials` |
| 4 | Sticky WhatsApp / quote CTA (3.1) | Low | ✅ phone + icon |
| 5 | B2B quote form (3.2) | Med | ➕ Netlify or backend |
| 6 | Client case-study cards (1.2) | Med | ➕ short copy |
| 7 | Before/After slider (2.2) | Med | ➕ 2 image pairs |
| 8 | Press gallery real photos (4.1) | Low | ➕ assets from you |
| 9 | Animated how-it-works stepper (2.1) | Med | ✅ `howItWorks` |
| 10 | City landing pages (5.1) | High | ✅ `mapMarkers` |
| 11 | Blog / care guides (5.2) | High | ➕ content |
| 12 | Form success animation (6) | Low | ✅ Contact form |

> All sections inherit the brand sky-blue palette and re-skin automatically
> across the 6 templates, exactly like the `IndiaMap`.

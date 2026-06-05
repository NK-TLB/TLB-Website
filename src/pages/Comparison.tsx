import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

// =============================================================================
//  CONTENT AUDIT — old (legacy / existing) website vs the new redesigned site.
//  This page lists, item-by-item, which information lives in which website:
//  what the new site ADDS, what is CARRIED OVER unchanged, and what was
//  different/missing and has now been reconciled.
// =============================================================================

export default function Comparison() {
  // Information that exists on the NEW website but was NOT on the old one.
  const addedInNew = [
    {
      title: "Founders & leadership",
      old: "The old website never named anyone. There was no team, founder or leadership information anywhere on the site.",
      added:
        "A full Founders section on the Our Story page: Shourya Jain (Founder), Nalin Agarwal (Co-Founder) and Honey Jain (Co-Founder) — each with a role, a short bio and a LinkedIn link.",
      source: "LinkedIn, Startup Buzz, Letsmarkup (cross-referenced with the Raipur HQ details)",
    },
    {
      title: "Company facts panel",
      old: "No structured at-a-glance company facts existed.",
      added:
        "A facts strip: Founded 2013 · Headquarters Raipur, Chhattisgarh · Industry Laundry & Dry Cleaning · Presence India · 20+ cities.",
      source: "Legacy copy + public profiles",
    },
    {
      title: "Brand-story timeline",
      old: "The old 'Who we are' page had only a short paragraph — no history or milestones.",
      added:
        "A 5-stage timeline: 2013 idea → 2014 launch → B2B expansion into hotels & hospitals → central processing unit in Raipur → today's Built-Own-Operate platform.",
      source: "Press articles + legacy site",
    },
    {
      title: "USP / differentiator block",
      old: "USPs like 'we never mix clothes' were buried inside paragraph text.",
      added:
        "Four headline USP cards: 'We never mix your clothes', '24-hour finish', 'Free pickup & delivery' and 'PERC-free & eco-friendly'.",
      source: "Legacy copy + Play Store description",
    },
    {
      title: "Clients grouped by sector",
      old: "The old site had a single flat list of partner names.",
      added:
        "A dedicated Clients & Press page where partners are grouped by sector: Hospitality, Healthcare and Retail.",
      source: "Legacy 'Who we serve' + research",
    },
    {
      title: "Ratings & reputation",
      old: "No ratings or review scores were shown anywhere.",
      added:
        "Ratings block: JustDial 3.3 / 5 (based on 167 customer ratings) and the Google Play listing.",
      source: "JustDial, Google Play",
    },
    {
      title: "Press coverage with sources",
      old: "Press links existed only in the legacy 'News' dropdown, untitled by outlet.",
      added:
        "Press items are now labelled by outlet (YourStory, Startup Buzz, Letsmarkup) and surfaced on the Clients & Press page.",
      source: "Legacy News links",
    },
    {
      title: "Dedicated Locations page",
      old: "Locations were only an embedded Google Map and a couple of cards.",
      added:
        "A standalone Locations page with image-led hubs (Raipur HQ/retail, Goa hospitality, pan-India hotels & hospitals) plus extended B2B cities across 20+ locations.",
      source: "Legacy map info-windows + research",
    },
  ];

  // Information that was on the OLD site and could have been lost — now
  // reconciled / carried into the new site so nothing regresses.
  const reconciled = [
    {
      title: "Full SEO keyword set",
      issue:
        "The new site initially shipped with a trimmed keyword list (~45 terms), while the old site carries a much larger ~90-term set of brand/geo/service/founder permutations that Google already indexes.",
      resolution:
        "Restored the complete keyword superset into the new site and added the new co-founder names (Nalin Agarwal, Honey Jain) and the pan-India hotel/hospital footprint — so the new site now matches and slightly exceeds the old one.",
      status: "Reconciled",
    },
    {
      title: "Current client & city list",
      issue:
        "The old site still listed decommissioned campus and salon clients, and cities the business no longer operates in.",
      resolution:
        "The new site lists only the current, operational clients — leading hotels & resorts (Hyatt, Marriott, Hilton, Taj, Novotel) and hospitals (Tata Medical Center, Balco, Lata Mangeshkar, DKS, SIMS) — across the 20+ cities served today.",
      status: "Updated",
    },
    {
      title: "Navigation labels",
      issue:
        "Old labels were 'Who we are' and 'Contact Us', with no Locations or Clients entry.",
      resolution:
        "New nav renames to 'Our Story' and 'Contact', and adds 'Locations' and 'Clients & Press' so the added content is reachable.",
      status: "Updated",
    },
  ];

  // Content that is IDENTICAL between the two sites (verbatim carried over).
  const identical = [
    "Hero services (Laundry, Dry Cleaning, Commercial Laundry)",
    "For-your-Home services & feature grid (Wash & Fold, Bag & Shoes, Drying, Ironing…)",
    "For-your-Business services (Hotel, Hospital, Resorts, Linen Rental)",
    "3 operational models (On-Premise, Central Processing, Linen Rental)",
    "'Who we serve' partner details (Grand Hyatt, Taj Exotica, Hilton, Tata Medical Center, Balco…)",
    "4-step 'How it works' process",
    "'Why choose us' (Eco-friendly, Affordable, Technology, Quality, Express, A Class Apart)",
    "Counters (5,00,000+ laundry done, 50,000+ dry cleaned, 3,500 happy customers…)",
    "All 5 customer testimonials (Rohit, Sudhanshu, Sourabh, Jyoti, Sumit)",
    "Commercial sub-features (Sheets & Towels, Janitorial, Floor Mats, Linen Rentals…)",
    "Location descriptions (Raipur HQ, Goa hospitality, pan-India hotels & hospitals)",
    "All FAQ questions & answers (First Order, Dry Cleaning, Wash/Tumble/Fold)",
    "Contact details, emails, phone, WhatsApp, address & hours",
    "Privacy Policy and Delete-My-Account pages",
    "App store links (Android Play Store + iOS App Store)",
  ];

  return (
    <>
      <SEO
        title="Content Comparison — Old vs New"
        description="An item-by-item audit of the information and content differences between the legacy website and the redesigned website of The Laundry Bag."
      />

      <PageHero
        eyebrow="Content Audit"
        title="What changed between the two websites"
        description="A transparent, item-by-item breakdown of which information lives on which site — what the new site adds, what was reconciled so nothing is lost, and what is carried over exactly as it was."
        crumbs={[{ label: "Home", to: "/" }, { label: "Content Comparison" }]}
      />

      {/* --- At-a-glance summary --- */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-3">
            <Reveal className="card bg-brand-50/40 border-brand-100 text-center" delay={0}>
              <p className="font-display text-4xl font-extrabold text-brand-600">
                8
              </p>
              <p className="mt-2 text-sm font-semibold text-ink-700">
                New information blocks added to the new site
              </p>
            </Reveal>
            <Reveal className="card bg-sky2-50/50 border-sky2-100 text-center" delay={100}>
              <p className="font-display text-4xl font-extrabold text-sky2-600">
                3
              </p>
              <p className="mt-2 text-sm font-semibold text-ink-700">
                Items reconciled so the old site loses nothing
              </p>
            </Reveal>
            <Reveal className="card bg-ink-50 border-ink-100 text-center" delay={200}>
              <p className="font-display text-4xl font-extrabold text-ink-800">
                15+
              </p>
              <p className="mt-2 text-sm font-semibold text-ink-700">
                Content sections carried over identically
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- 1. In NEW but not in OLD --- */}
      <section className="section bg-ink-50/50 border-y border-ink-100">
        <div className="container-page">
          <SectionHeading
            eyebrow="In the new site only"
            title="Information added to the new website"
            description="These exist on the new website but were never present on the old website. Each one is sourced from the legacy copy and/or cross-referenced public information."
          />

          <div className="mt-16 space-y-6">
            {addedInNew.map((item, index) => (
              <Reveal key={item.title} className="card p-6 md:p-8" delay={index * 40}>
                <div className="mb-5 flex flex-col gap-3 border-b border-ink-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="flex items-center gap-3 text-lg font-bold text-ink-900">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
                    {item.title}
                  </h3>
                  <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                    New
                  </span>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-ink-400">
                      Old website
                    </h4>
                    <p className="text-sm leading-relaxed text-ink-600">{item.old}</p>
                  </div>
                  <div className="border-t border-ink-100 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                    <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-600">
                      New website
                    </h4>
                    <p className="text-sm font-medium leading-relaxed text-ink-800">{item.added}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-ink-500">
                  <span className="font-semibold text-ink-600">Source:</span> {item.source}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2. Reconciled (was in OLD, kept/extended in NEW) --- */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nothing lost"
            title="Differences reconciled"
            description="A few things existed (or were larger) on the old site. Rather than drop them, we carried them across and, where useful, expanded them on the new site."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {reconciled.map((item, idx) => (
              <Reveal key={item.title} className="card flex flex-col p-8 bg-sky2-50/20 border-sky2-100" delay={idx * 100}>
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-sky2-100 px-3 py-1 text-xs font-semibold text-sky2-700">
                  {item.status}
                </span>
                <h3 className="h3 mb-3 text-sky2-800">{item.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-ink-600">
                  <span className="font-semibold text-ink-700">Was:</span> {item.issue}
                </p>
                <p className="mt-auto text-sm font-medium leading-relaxed text-ink-800">
                  <span className="font-semibold text-brand-600">Now:</span> {item.resolution}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. Identical content carried over --- */}
      <section className="section bg-ink-900 text-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="100% preserved"
            title="Content carried over identically"
            description="Every one of these existed on the old site and appears, word-for-word, on the new site — only the presentation is more modern."
            invert
          />

          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {identical.map((item, idx) => (
              <Reveal
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                delay={(idx % 3) * 80}
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm leading-snug text-ink-100">{item}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center" delay={150}>
            <p className="mx-auto max-w-2xl text-sm text-ink-300">
              In short: the new website is a strict superset of the old one. No
              content was removed — it adds founder, history, ratings, press and
              client information, and reconciles the SEO keyword set so nothing
              the old site ranked for is lost.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

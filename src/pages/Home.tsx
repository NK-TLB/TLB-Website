import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import {
  featuredClients,
  locationDetails,
  locations,
  services,
  site,
  stats,
} from "../data/site";

const promises = [
  {
    icon: "shield",
    title: "Hygienic & separated",
    description:
      "Every order is tagged and washed separately in a clean, monitored facility. No mixing — ever.",
  },
  {
    icon: "leaf",
    title: "PERC-free dry cleaning",
    description:
      "Lagoon Advance Care technology — gentle on fabrics, kinder to skin and the planet.",
  },
  {
    icon: "clock",
    title: "On-time pickup & delivery",
    description:
      "Choose your slot. We collect and deliver to your doorstep, free of cost.",
  },
  {
    icon: "check",
    title: "Quality, guaranteed",
    description:
      "Not happy? We'll re-wash, re-press or refund — no questions asked.",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        title="On-Demand Laundry &amp; Dry Cleaning · Wash · Dry · Iron"
        description="The LaundryBag — India's on-demand laundry and dry cleaning service. Free pickup &amp; delivery, hygienic processing, no mixing of clothes. Operating in Raipur, Pune and Goa since 2013."
      />

      {/* === PRIMARY (original homepage positioning) ============================ */}
      <section className="relative overflow-hidden bg-hero-radial">
        <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="eyebrow">Trusted since {site.founded}</span>
            <h2 className="h1 mt-4">
              Less laundry.<br />
              <span className="text-brand-500">More life.</span>
            </h2>
            <p className="lead mt-6 max-w-xl">
              On-demand wash, dry &amp; iron, plus dry-cleaning — picked up
              from your doorstep and back in 48 hours. Hygienic, separated,
              and never mixed with anyone else&apos;s clothes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Schedule a pickup
                <Icon name="truck" className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn-secondary">
                <Icon name="phone" className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-600">
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-accent-600" />
                Free pickup &amp; delivery
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-accent-600" />
                48-hour turnaround
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-accent-600" />
                PERC-free dry clean
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="card relative z-10 mx-auto max-w-md">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Today&apos;s pickup</span>
                <span className="text-xs font-semibold text-accent-600">
                  Scheduled
                </span>
              </div>
              <h3 className="h3 mt-3">Wash, dry &amp; iron · 4.2 kg</h3>
              <p className="mt-1 text-sm text-ink-600">
                Pickup window 5:30 PM – 6:30 PM · Free
              </p>
              <ul className="mt-5 space-y-3 text-sm text-ink-700">
                {[
                  "PERC-free dry cleaning available",
                  "Stain treatment included",
                  "Returned in 48 hours",
                  "No mixing with other customers",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between rounded-xl bg-ink-50 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-500">
                    Estimated
                  </p>
                  <p className="font-display text-xl font-bold text-ink-900">
                    ₹ 252
                  </p>
                </div>
                <Link to="/contact" className="btn-primary">
                  Confirm
                </Link>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 h-44 w-44 rounded-3xl bg-brand-300/40"
            />
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-32 w-32 rounded-3xl bg-accent-100"
            />
          </div>
        </div>
      </section>

      {/* === PRIMARY — services overview (from original residential page) ====== */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="h2 mt-4 max-w-2xl">
                Everything you&apos;d want from a laundry — and nothing you
                wouldn&apos;t.
              </h2>
            </div>
            <Link to="/services" className="btn-secondary self-start">
              See all services
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={s.icon} />
                </span>
                <h3 className="h3 mt-5">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === PRIMARY — why TLB / "A few words about us" ======================== */}
      <section className="bg-ink-50/60 section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Why The LaundryBag</span>
            <h2 className="h2 mt-4">
              A laundry that takes care like you would.
            </h2>
            <p className="lead mt-5">
              Since {site.founded}, we&apos;ve been on a mission to bring
              India&apos;s unorganised laundry sector into the 21st century —
              with hygienic processes, trained teams, and technology that puts
              the customer first.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/about" className="btn-primary">
                Our story
              </Link>
              <Link to="/locations" className="btn-secondary">
                Where we operate
              </Link>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {promises.map((p) => (
              <div key={p.title} className="card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                  <Icon name={p.icon} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-ink-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PRIMARY — locations (Raipur · Pune · Goa) ========================= */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Where we are</span>
              <h2 className="h2 mt-4 max-w-2xl">
                Headquartered in Raipur · On-campus in Pune &amp; Goa.
              </h2>
            </div>
            <Link to="/locations" className="btn-secondary self-start">
              Explore all locations
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {locations.map((l) => (
              <article key={l.city} className="card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name="pin" />
                </span>
                <h3 className="h3 mt-4">
                  {l.city}
                  <span className="ml-2 text-sm font-semibold text-ink-500">
                    · {l.state}
                  </span>
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                  {l.role}
                </p>
                <p className="mt-3 text-sm text-ink-600">{l.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === SECONDARY — by the numbers (supplementary intel) ================== */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <span className="eyebrow">By the numbers</span>
          <h2 className="h2 mt-4 max-w-2xl">A decade of clean. Counting.</h2>
          <p className="lead mt-4 max-w-2xl">
            Supplementary stats from our retail and on-campus operations.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card">
                <dt className="text-xs uppercase tracking-wider text-ink-500">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-3xl font-extrabold text-ink-900">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
          <ul className="mt-8 grid gap-3 text-sm text-ink-600 sm:grid-cols-3">
            {Object.entries(locationDetails).map(([city, d]) => (
              <li key={city} className="rounded-xl bg-white px-4 py-3 shadow-soft">
                <span className="block text-xs font-semibold uppercase tracking-wider text-brand-700">
                  {city}
                </span>
                <span className="block text-ink-800">{d.stat}</span>
                {d.partner && (
                  <span className="block text-xs text-ink-500">
                    {d.partner}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* === SECONDARY — featured B2B partners (supplementary) ================= */}
      <section className="section">
        <div className="container-page">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
            A few of the businesses that trust us
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-ink-700">
            {featuredClients.map((c) => (
              <li
                key={c}
                className="rounded-full bg-ink-50 px-4 py-1.5 text-ink-700"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* === PRIMARY — commercial CTA ========================================= */}
      <section className="section pt-0">
        <div className="container-page">
          <div className="rounded-3xl bg-brand-700 px-6 py-12 text-white sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                B2B / Commercial
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                Run a hotel, hospital, hostel or salon? Let us handle the
                laundry.
              </h2>
              <p className="mt-4 text-white/85">
                We partner with hospitality, healthcare, education and
                business clients across India — delivering reliable, hygienic,
                large-volume laundry programs with linen rentals available.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
              <Link
                to="/commercial"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
              >
                Explore B2B
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

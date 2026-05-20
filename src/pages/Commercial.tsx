import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import {
  businessServices,
  commercialFeatures,
  commercialSubFeatures,
  featuredClients,
  homeFeatures,
  operationalModels,
  site,
} from "../data/site";

export default function Commercial() {
  return (
    <>
      <SEO
        path="/commercial"
        title="Working with City's Institutions — Commercial Laundry"
        description="Together with our institutional customers — Universities, Hospitals, Hotels and other agencies — The Laundry Bag is transforming the cities we serve. Hotel laundry, hospital laundry, on-campus laundromats and small local businesses."
      />
      <div className="breadcrumb-strip">
        <div className="container-page py-3 text-xs text-ink-500">
          <Link to="/" className="hover:text-brand-700">Home</Link>{" "}
          <span className="mx-2">/</span>{" "}
          <span className="text-ink-700">Our Commercial services</span>
        </div>
      </div>

      <PageHero
        eyebrow="For your Business"
        title="Working with City's Institutions"
        description="Together with our institutional customers — Universities, Hospitals, Hotels, and other agencies — The Laundry Bag is transforming the cities we serve. As a respected start-up, we're a mission-aligned service partner in meeting strategic plan objectives, fitting budget needs and finding sustainable alternatives."
      />

      {/* === Top 3 service cards (Laundry / Dry Clean / Upholstery) ========== */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {commercialFeatures.map((s) => (
              <article key={s.title} className="card overflow-hidden p-0">
                <div className="h-44 w-full overflow-hidden bg-ink-50">
                  <img
                    src={s.image}
                    alt={`${s.title} — The Laundry Bag`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="h3">{s.title}</h3>
                  <p className="mt-3 text-sm text-ink-600">{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Commercial Laundry for Small to Large Businesses + 3 sub blocks */}
      <section
        className="relative section text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,40,60,0.82),rgba(10,40,60,0.82)), url(/images/parallax-img-02.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container-page">
          <h2 className="title-underline text-white">
            Commercial Laundry for Small to Large Businesses
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-base text-white/90 sm:text-lg">
            From an owner-operated hair salon to a government hospital and
            everything in between, we are the most responsive and
            cost-competitive laundry and linen provider in your city.
            We&apos;re the fastest, most responsive, most affordable laundry
            and linen solution for small to large businesses in our area.
            With a proven track record of serving hundreds of businesses in
            Raipur, Goa and Jabalpur. We&apos;ll wash the sheets and towels
            you own to shoes to carpets. Let&apos;s see how we can get you
            out of the laundry room and back to your business.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {commercialSubFeatures.map((b) => (
              <article
                key={b.title}
                className="rounded-3xl bg-white/95 p-6 text-ink-800 shadow-soft sm:p-8"
              >
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {b.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === "What we do for your business" full descriptions =============== */}
      <section className="section">
        <div className="container-page">
          <h2 className="title-underline">What we do for your business</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {businessServices.map((b) => (
              <article key={b.title} className="card">
                <h3 className="h3">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {b.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === 3 operational models =========================================== */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <h2 className="title-underline">Our operational models</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {operationalModels.map((m, i) => (
              <article key={m.title} className="card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 font-display text-lg font-bold text-brand-500">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {m.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Our Features (present in legacy commercial-laundrey pages) ======= */}
      <section className="section">
        <div className="container-page">
          <h2 className="title-underline">Our Features</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeFeatures.map((f) => (
              <article key={f.title} className="card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                  <Icon name="sparkle" />
                </span>
                <h3 className="h3 mt-5">{f.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Promo strip — "24/7 premium customer services" ================== */}
      <section className="bg-sky2-500 py-10 text-white">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-display text-xl font-semibold sm:text-2xl">
            24/7 premium customer services
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href={site.phoneHref} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-sky2-700 hover:bg-sky2-50">
              {site.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

      {/* === SECONDARY — featured B2B partners =============================== */}
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
          <div className="mt-10 flex justify-center">
            <Link to="/contact" className="btn-primary">
              <Icon name="check" className="h-4 w-4" />
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

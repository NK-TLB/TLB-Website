import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import {
  businessServices,
  counters,
  homeServices,
  homeWeDo,
  howItWorks,
  operationalModels,
  site,
  testimonials,
  whoWeServe,
  whyChooseUs,
} from "../data/site";

const howItWorksIcons = ["bag", "truck", "washer", "check"];

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        title="Commercial and Residential Laundry and Dry Cleaning"
        description="The Laundry Bag provides professional laundry and dry-cleaning services to hotels, hospitals, restaurants, colleges, schools and companies of all sizes — and on-demand pickup and delivery for homes and students."
      />

      {/* === HERO — "For your Business" / "For your Home" (legacy slider) ====== */}
      <section className="relative overflow-hidden bg-hero-radial">
        <div className="container-page relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="eyebrow">Since {site.founded}</span>
            <h2 className="h1 mt-4">
              The most convenient way
              <br />
              <span className="text-brand-500">to do laundry</span>{" "}
              <span className="text-ink-800">and</span>{" "}
              <span className="text-sky2-500">dry cleaning</span>.
            </h2>
            <p className="lead mt-6 max-w-xl">
              We provide on-demand pick-up and delivery services for homes
              and students, and professional laundry programs for hotels,
              hospitals, restaurants, colleges, schools and companies of all
              sizes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.android}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Icon name="truck" className="h-4 w-4" />
                Get the App
              </a>
              <a href={site.phoneHref} className="btn-secondary">
                <Icon name="phone" className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-600">
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-brand-500" />
                Free pickup &amp; delivery
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-brand-500" />
                48-hour turnaround
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-brand-500" />
                We do not mix clothes
              </span>
            </div>
          </div>

          {/* "For your Business" / "For your Home" split CTA — matches the
              legacy slide-1 split layout. */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/commercial"
              className="group block overflow-hidden rounded-3xl bg-brand-400 p-6 text-white shadow-soft transition hover:-translate-y-1 hover:bg-brand-500"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                For your Business
              </p>
              <ul className="mt-4 space-y-1 font-display text-lg font-semibold leading-tight">
                <li>Hotel Laundry</li>
                <li>Hospital Laundry</li>
                <li>On Campus Laundromats</li>
                <li>Small Local Businesses</li>
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                Know more
                <Icon name="check" className="h-4 w-4" />
              </span>
            </Link>
            <Link
              to="/services"
              className="group block overflow-hidden rounded-3xl bg-sky2-500 p-6 text-white shadow-soft transition hover:-translate-y-1 hover:bg-sky2-600"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                For your Home
              </p>
              <ul className="mt-4 space-y-1 font-display text-lg font-semibold leading-tight">
                <li>Laundry</li>
                <li>Dry Clean</li>
                <li>On Site Cleaning</li>
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                Know more
                <Icon name="check" className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* === Three top services (legacy services-box row) ====================== */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {homeServices.map((s) => (
              <Link
                key={s.title}
                to={s.href}
                className={`group relative block overflow-hidden rounded-3xl p-8 shadow-soft transition hover:-translate-y-1 ${
                  s.accent === "blue"
                    ? "bg-sky2-500 text-white"
                    : s.accent === "green"
                    ? "bg-brand-400 text-white"
                    : "bg-ink-50 text-ink-900"
                }`}
              >
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                    s.accent === "grey"
                      ? "bg-white/70 text-brand-500"
                      : "bg-white/15 text-white"
                  }`}
                >
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide">
                  {s.title}
                </h3>
                <p
                  className={`mt-3 text-sm ${
                    s.accent === "grey" ? "text-ink-700" : "text-white/90"
                  }`}
                >
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === "What we do for your business" (legacy carousel) ================= */}
      <section
        className="relative section text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,30,40,0.78),rgba(0,30,40,0.78)), url(/images/parallax-img-03.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container-page">
          <h2 className="title-underline text-white">
            What we do for your business?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {businessServices.map((b) => (
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

      {/* === "Who we serve?" (legacy permission-box row) ====================== */}
      <section className="section">
        <div className="container-page">
          <h2 className="title-underline">Who we serve?</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeServe.map((w) => (
              <article key={w.title} className="card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                  <Icon name="check" />
                </span>
                <h3 className="h3 mt-5">{w.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{w.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === "What we do for your home" ======================================= */}
      <section
        className="relative section text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,60,90,0.82),rgba(0,60,90,0.82)), url(/images/parallax-img-04.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-page">
          <h2 className="title-underline text-white">
            What we do for your home?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeWeDo.map((b) => (
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

      {/* === "How It Works: in 4 Easy Steps" (legacy box-step row) ============ */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <h2 className="title-underline">How It Works: in 4 Easy Steps</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s, i) => (
              <li key={s.step} className="card text-center">
                <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-sky2-100 text-sky2-700">
                  <Icon name={howItWorksIcons[i]} className="h-7 w-7" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-700">
                  {s.step}
                </p>
                <p className="mt-2 font-display text-lg font-bold text-ink-900">
                  {s.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* === "How we do it?" (process diagram) ================================ */}
      <section className="section">
        <div className="container-page">
          <h2 className="title-underline">How we do it?</h2>
          <div className="mt-10 flex justify-center">
            <img
              src="/images/process.png"
              alt="The Laundry Bag — How we do it: pickup, sort, treat, wash, dry, iron, fold, deliver"
              className="h-auto w-full max-w-3xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* === "Commercial Laundry for Small to Large Businesses" =============== */}
      <section
        className="relative section text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,40,60,0.8),rgba(10,40,60,0.8)), url(/images/parallax-img-02.jpg)",
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
            The Laundry Bag™ provides professional laundry services to
            government establishments, hospitals, hotels, restaurants,
            colleges, schools and companies of all sizes who share a need
            for cost-effective, consistent and reliable laundry service.
            With a focus on health care, hospitality and commercial laundry
            sectors, The Laundry Bag™ has designed its operational formats
            in various models:
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {operationalModels.map((m, i) => (
              <article
                key={m.title}
                className="rounded-3xl bg-white/95 p-6 text-ink-800 shadow-soft sm:p-8"
              >
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

      {/* === Testimonials (legacy carousel) =================================== */}
      <section
        className="relative section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.94),rgba(255,255,255,0.94)), url(/images/parallax-img-01.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-page">
          <h2 className="title-underline">What our customers say</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card">
                <blockquote className="text-sm italic text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-700">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* === "A few words about us" + Why Choose Us =========================== */}
      <section className="section">
        <div className="container-page">
          <h2 className="title-underline">A few words about us</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-base text-ink-700 sm:text-lg">
            We are professionals in the laundry and dry-cleaning business,
            which means we always stay up to date on the latest technologies,
            cleaning methods, and solutions for dealing with stains or
            delicate fabrics. Plus, we maintain the highest standards of
            business integrity by following local and national regulations
            and environmental safety rules.
          </p>

          <h3 className="title-underline mt-16">Why Choose Us</h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((r) => (
              <article key={r.title} className="card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                  <Icon name={r.icon} />
                </span>
                <h4 className="h3 mt-5">{r.title}</h4>
                <p className="mt-2 text-sm text-ink-600">{r.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Counters (legacy product-total row) ============================== */}
      <section
        className="relative py-16 text-white sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,156,220,0.88),rgba(51,214,91,0.88)), url(/images/parallax-img-02.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container-page">
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {counters.map((c) => (
              <div key={c.label} className="text-center">
                <dd className="font-display text-4xl font-extrabold sm:text-5xl">
                  {c.value}
                </dd>
                <dt className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/85">
                  {c.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* === Corporate office =================================================== */}
      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="title-underline-left">Corporate Office</h2>
            <p className="lead mt-4">
              Our corporate office is located in Raipur, CG — a
              visitor-friendly location in the city centre. It&apos;s the
              house of all our laundry machines, employees and processing
              unit.
            </p>
            <p className="mt-6 text-sm text-ink-700">
              {site.address.full}
              <br />
              {site.hours}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.address.mapsHref} target="_blank" rel="noreferrer" className="btn-secondary">
                <Icon name="pin" className="h-4 w-4" />
                Get directions
              </a>
              <Link to="/contact" className="btn-primary">
                Contact us
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <iframe
                title="The Laundry Bag — Raipur"
                src={`https://www.google.com/maps?q=${site.address.geo.lat},${site.address.geo.lng}&z=14&output=embed`}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

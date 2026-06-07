import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Marquee from "../components/Marquee";
import IndiaMap from "../components/IndiaMap";
import CertificationsBand from "../components/CertificationsBand";
import ServiceAreaChecker from "../components/ServiceAreaChecker";
import { PressStripBar } from "../components/PressStrip";
import {
  businessServices,
  clientLogos,
  counters,
  homeServices,
  howItWorks,
  operationalModels,
  site,
  testimonials,
  usps,
  whoWeServe,
  whyChooseUs,
} from "../data/site";

// B2B segments TLB actively serves (sourced from the live client list in
// site.ts) — rotated in the hero to lead with the business story.
const heroSegments = [
  "luxury hotels",
  "hospitals & medical centres",
  "resorts & retreats",
  "enterprises & institutions",
];

function RotatingSegment() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroSegments.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span key={index} className="word-cycle inline-block text-gradient">
      {heroSegments[index]}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        title="India's Leading Laundry Service Provider"
        description="The Laundry Bag is India's Leading Laundry Service Provider — commercial laundry, dry-cleaning and linen-management programmes for luxury hotels, resorts, hospitals and medical centres across India. On-premise, off-site or linen-rental models from our Raipur HQ."
      />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-radial" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-ink-mesh blur-2xl"
        />
        {/* Decorative floating bubbles — subtle laundry-day delight */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <span className="absolute left-[8%] top-[22%] h-3 w-3 animate-float rounded-full bg-brand-300/50 [animation-delay:0s]" />
          <span className="absolute left-[18%] top-[64%] h-5 w-5 animate-float rounded-full bg-sky2-300/40 [animation-delay:1.2s]" />
          <span className="absolute right-[26%] top-[30%] h-4 w-4 animate-float rounded-full bg-accent-300/40 [animation-delay:0.6s]" />
          <span className="absolute right-[12%] top-[58%] h-6 w-6 animate-float rounded-full bg-brand-200/50 [animation-delay:2s]" />
          <span className="absolute left-[46%] top-[12%] h-2.5 w-2.5 animate-float rounded-full bg-sky2-300/50 [animation-delay:1.6s]" />
        </div>
        <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-6">
            <span className="eyebrow animate-fade-up">
              <Icon name="leaf" className="h-3.5 w-3.5" />
              India&apos;s Leading Laundry Service Provider
            </span>
            <h1 className="h1 mt-5 animate-fade-up">
              The laundry &amp; linen partner
              <br />
              for <RotatingSegment />.
            </h1>
            <p className="lead mt-6 max-w-xl animate-fade-up">
              From leading hotel chains and major hospitals to luxury resorts
              and medical centres, we run cost-effective, consistent commercial
              laundry and linen programmes for institutions of every size — on
              your premises, off-site or on a managed linen-rental model. We
              never mix one client&apos;s linen with anyone else&apos;s.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:+91${site.phoneRaw}`} className="btn-primary">
                <Icon name="phone" className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
              <Link to="/contact" className="btn-secondary">
                Request a quote
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-600">
              {[
                "On-premise or off-site",
                "24-hour finish",
                "We never mix your linen",
              ].map((f) => (
                <li key={f} className="inline-flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-brand-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Split CTA cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            <Link
              to="/commercial"
              className="group relative block overflow-hidden rounded-4xl bg-brand-gradient p-7 text-white shadow-lift transition hover:-translate-y-1"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Icon name="hotel" className="h-6 w-6" />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-white/80">
                Hotels &amp; Resorts
              </p>
              <ul className="mt-3 space-y-1.5 font-display text-lg font-semibold leading-tight">
                <li>Guest-room linen</li>
                <li>F&amp;B &amp; banquet</li>
                <li>Spa &amp; uniforms</li>
                <li>Linen rental</li>
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                Explore hospitality
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              to="/commercial"
              className="group relative block overflow-hidden rounded-4xl bg-ink-900 p-7 text-white shadow-lift transition hover:-translate-y-1"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-ink-mesh opacity-70"
              />
              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <Icon name="shield" className="h-6 w-6" />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                  Hospitals &amp; Healthcare
                </p>
                <ul className="mt-3 space-y-1.5 font-display text-lg font-semibold leading-tight">
                  <li>Infection-safe linen</li>
                  <li>Patient &amp; theatre linen</li>
                  <li>On-premise units</li>
                  <li>Managed logistics</li>
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                  Explore healthcare
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-y border-ink-100 bg-white/70 backdrop-blur">
          <div className="container-page py-8">
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-ink-400">
              Trusted by India&apos;s leading hotels &amp; hospitals
            </p>
            <Marquee items={clientLogos} durationSeconds={46} />
            <PressStripBar className="mt-8 border-t border-ink-100 pt-8" />
          </div>
        </div>
      </section>

      {/* ===================== TOP SERVICES ===================== */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="Three ways we take linen off your plate"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {homeServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Link
                  to={s.href}
                  className={`group relative block h-full overflow-hidden rounded-4xl p-8 shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift ${
                    s.accent === "blue"
                      ? "bg-sky2-500 text-white"
                      : s.accent === "brand"
                      ? "bg-brand-gradient text-white"
                      : "bg-ink-50 text-ink-900"
                  }`}
                >
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                      s.accent === "grey"
                        ? "bg-white text-brand-500"
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
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                    Learn more
                    <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== USP BAND ===================== */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why TLB"
            title="The details other laundries skip"
            description="The promises we have kept since day one — and the reason hotels, hospitals and resorts stay with us."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((u, i) => (
              <Reveal key={u.title} delay={i * 70}>
                <article className="card card-hover h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <Icon name={u.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">{u.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we partner"
            title="From first call to fully managed in 4 steps"
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <li className="relative h-full rounded-4xl border border-ink-100 bg-white p-7 text-center shadow-soft">
                  <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-sky2-50 text-sky2-600">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-brand-600">
                    {s.step}
                  </p>
                  <p className="mt-2 font-display text-lg font-bold text-ink-900">
                    {s.title}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===================== FOR BUSINESS (parallax) ===================== */}
      <section
        className="parallax relative section text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,30,40,0.82),rgba(0,40,55,0.82)), url(/images/parallax-img-03.jpg)",
        }}
      >
        <div className="container-page">
          <SectionHeading
            eyebrow="For your business"
            title="What we do for your business"
            description="Having served businesses of all sizes — leading hotel chains, luxury resorts and major hospitals across India."
            invert
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {businessServices.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <article className="glass h-full rounded-4xl p-7 text-ink-800">
                  <h3 className="font-display text-xl font-bold text-ink-900">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {b.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Link to="/commercial" className="btn-primary">
              See commercial services
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== WHO WE SERVE ===================== */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who we serve"
            title="From a boutique resort to a 100-bed hospital"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeServe.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <article className="card card-hover h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name="users" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">{w.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHERE WE OPERATE ===================== */}
      <section className="section bg-ink-mesh">
        <div className="container-page">
          <SectionHeading
            eyebrow="Where we operate"
            title="Trusted across 20+ Indian cities"
            description="Headquartered in Raipur, we run laundry and linen programmes for leading hotels, resorts and hospitals nationwide."
          />
          <Reveal className="mt-12">
            <IndiaMap variant="compact" />
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-2xl">
            <ServiceAreaChecker />
          </Reveal>
        </div>
      </section>

      {/* ===================== STANDARDS & EQUIPMENT ===================== */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Standards & equipment"
            title="Certified, equipped and accountable"
            description="The standards, machinery and promises that make us a dependable partner for hotels and hospitals."
          />
          <CertificationsBand className="mt-12" />
        </div>
      </section>

      {/* ===================== OPERATIONAL MODELS ===================== */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Operational models"
            title="Commercial laundry, your way"
            description="The Laundry Bag™ designs its operational formats around your needs — on your premises, off-site, or as a fully-managed linen-rental programme."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {operationalModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <article className="card card-hover h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {m.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== COUNTERS ===================== */}
      <section
        className="parallax relative py-16 text-white sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(0,156,220,0.92), rgba(28,191,69,0.92)), url(/images/parallax-img-02.jpg)",
        }}
      >
        <div className="container-page">
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {counters.map((c, i) => (
              <Reveal key={c.label} delay={i * 80} className="text-center">
                <dd className="font-display text-4xl font-extrabold sm:text-5xl">
                  {c.value}
                </dd>
                <dt className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/85">
                  {c.label}
                </dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why choose us"
            title="A few words about us"
            description="We are professionals in the laundry and dry-cleaning business — always up to date on the latest technologies, cleaning methods and solutions for stains and delicate fabrics."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <article className="card card-hover h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky2-50 text-sky2-600">
                    <Icon name={r.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">{r.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section
        className="parallax relative section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(246,248,251,0.95),rgba(246,248,251,0.95)), url(/images/parallax-img-01.jpg)",
        }}
      >
        <div className="container-page">
          <SectionHeading
            eyebrow="Customer love"
            title="What our customers say"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <figure className="card h-full">
                  <div className="flex gap-1 text-brand-400">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm italic text-ink-700">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-700">
                    — {t.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="section">
        <div className="container-page">
          <Reveal className="relative overflow-hidden rounded-5xl bg-ink-900 px-6 py-14 text-center text-white sm:px-12 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-ink-mesh opacity-80"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="h2 text-white">
                Ready to take linen off your operation&apos;s plate?
              </h2>
              <p className="lead mt-4 text-white/80">
                Call us or request a proposal — on-premise, off-site or
                linen-rental, with a 24-hour finish and linen that is never
                mixed with anyone else&apos;s.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={`tel:+91${site.phoneRaw}`} className="btn-primary">
                  <Icon name="phone" className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

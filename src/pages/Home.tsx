import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Marquee from "../components/Marquee";
import IndiaMap from "../components/IndiaMap";
import CountUp from "../components/CountUp";
import {
  clientLogos,
  homeServices,
  howItWorks,
  site,
  whyTlbFeatures,
  whyTlbStats,
} from "../data/site";

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        title="India's Leading Laundry Service Provider"
        description="The Laundry Bag is India's Leading Laundry Service Provider, commercial laundry, dry-cleaning and linen-management programmes for luxury hotels, resorts, hospitals and medical centres across India. On-premise, off-site or linen-rental models from our Raipur HQ."
      />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-radial" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-ink-mesh blur-2xl"
        />
        {/* Decorative floating bubbles, subtle laundry-day delight */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <span className="absolute left-[8%] top-[22%] h-3 w-3 animate-float rounded-full bg-brand-300/50 [animation-delay:0s]" />
          <span className="absolute left-[18%] top-[64%] h-5 w-5 animate-float rounded-full bg-sky2-300/40 [animation-delay:1.2s]" />
          <span className="absolute right-[26%] top-[30%] h-4 w-4 animate-float rounded-full bg-accent-300/40 [animation-delay:0.6s]" />
          <span className="absolute right-[12%] top-[58%] h-6 w-6 animate-float rounded-full bg-brand-200/50 [animation-delay:2s]" />
          <span className="absolute left-[46%] top-[12%] h-2.5 w-2.5 animate-float rounded-full bg-sky2-300/50 [animation-delay:1.6s]" />
        </div>
        <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-6">
            <h1 className="h1 animate-fade-up">
              The laundry &amp; linen partner
              <br />
              for{" "}
              <span className="text-gradient">luxury hotels and hospitals</span>.
            </h1>
            <p className="lead mt-6 max-w-xl animate-fade-up">
              From leading hotel chains and major hospitals to luxury resorts
              and medical centres, we run cost-effective, consistent commercial
              laundry and linen programmes for institutions of every size, on
              your premises, off-site or on a managed linen-rental model. We
              never mix one client&apos;s linen with anyone else&apos;s.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
              <a href={`tel:+91${site.phoneRaw}`} className="btn-primary">
                <Icon name="phone" className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
              <Link to="/contact" className="btn-secondary">
                Request a quote
              </Link>
            </div>
          </div>

          {/* India coverage map */}
          <div className="lg:col-span-6">
            <div className="group relative animate-fade-up">
              {/* ambient brand glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-brand-gradient opacity-[0.12] blur-3xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/50 p-5 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.1)] backdrop-blur-2xl sm:p-7">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent" />
                {/* soft brand wash behind the map */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 left-1/2 h-60 w-72 -translate-x-1/2 rounded-full bg-brand-200/25 blur-3xl"
                />
                <div className="relative mb-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500/60" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-600" />
                    </span>
                    <p className="font-display text-base font-bold tracking-tight text-ink-900">
                      Trusted across India
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-700 shadow-sm backdrop-blur-md">
                    <Icon name="pin" className="h-3.5 w-3.5" />
                    18 cities
                  </span>
                </div>
                <div className="relative">
                  <IndiaMap variant="compact" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-y border-ink-100 bg-white/70 backdrop-blur">
          <div className="container-page py-8">
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-ink-400">
              Trusted by India&apos;s leading hotels &amp; hospitals
            </p>
            <Marquee items={clientLogos} durationSeconds={46} />
          </div>
        </div>
      </section>

      {/* ===================== OPERATIONAL MODELS ===================== */}
      <section className="section section-tint">
        <div className="container-page">
          <SectionHeading title="What We Do" />
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
            {homeServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <Link
                  to={s.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100/70 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift"
                >
                  <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/30">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="relative mt-7 font-display text-xl font-extrabold tracking-tight text-ink-900">
                    {s.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                    {s.description}
                  </p>
                  <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition group-hover:text-brand-700">
                    Learn more
                    <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY TLB ===================== */}
      <section className="section">
        <div className="container-page relative">
          <SectionHeading title="Why Choose Us" />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:auto-rows-fr">
            {/* Feature tile, Girbau */}
            <Reveal>
              <article className="card card-hover group relative flex h-full flex-col overflow-hidden p-6 sm:p-8">
                <span className="relative w-fit rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
                  {whyTlbFeatures[0].badge}
                </span>
                <img
                  src="/images/clients/girbau.png"
                  alt="Girbau"
                  width={413}
                  height={90}
                  className="relative mt-6 h-9 w-auto max-w-[160px] self-start object-contain"
                  loading="lazy"
                />
                <h3 className="relative mt-5 font-display text-xl font-bold text-ink-900">
                  {whyTlbFeatures[0].title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-600">
                  {whyTlbFeatures[0].description}
                </p>
              </article>
            </Reveal>

            {/* Stat tiles, paired two-up */}
            {[whyTlbStats.slice(0, 2), whyTlbStats.slice(2, 4)].map((pair, p) => (
              <Reveal key={p} delay={(p + 1) * 90}>
                <article className="card card-hover group relative flex h-full items-center overflow-hidden p-6 sm:p-8">
                  <dl className="grid w-full grid-cols-2 items-center divide-x divide-ink-100">
                    {pair.map((s) => (
                      <div
                        key={s.label}
                        className="flex flex-col items-center px-5 text-center first:pl-0 last:pr-0"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                          <Icon name={s.icon} className="h-5 w-5" />
                        </span>
                        <dd className="mt-4 font-display text-4xl font-extrabold leading-none text-brand-600 sm:text-5xl">
                          <CountUp value={s.value} />
                        </dd>
                        <dt className="mt-2 text-sm font-semibold text-ink-600">
                          {s.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            ))}

            {/* Feature tile, equity-backed */}
            <Reveal delay={3 * 90}>
              <article className="card card-hover group relative flex h-full flex-col overflow-hidden p-6 sm:p-8">
                <span className="w-fit rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
                  {whyTlbFeatures[1].badge}
                </span>
                <span className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                  <Icon name={whyTlbFeatures[1].icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                  {whyTlbFeatures[1].title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {whyTlbFeatures[1].description}
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="section section-tint">
        <div className="container-page">
          <SectionHeading title="How We Partner" />
          <ol className="relative mt-16 grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <li className="group relative flex h-full flex-col items-center rounded-2xl bg-white px-6 pb-8 pt-10 text-center shadow-soft ring-1 ring-brand-100/60 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="absolute -top-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-extrabold text-white shadow-lift ring-4 ring-[rgb(var(--page-bg))]">
                    {i + 1}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition duration-300 group-hover:bg-brand-100">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
                    {s.step}
                  </p>
                  <p className="mt-2 font-display text-base font-bold leading-snug text-ink-900">
                    {s.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {s.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section className="section">
        <div className="container-page">
          <SectionHeading title="Get In Touch" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={`tel:+91${site.phoneRaw}`}
              className="card card-hover group flex h-full flex-col"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                <Icon name="phone" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                Call us
              </h3>
              <p className="mt-2 text-base font-semibold text-brand-600">
                {site.phoneDisplay}
              </p>
              <p className="mt-1 text-sm text-ink-500">{site.hours}</p>
            </a>

            <a
              href={`mailto:${site.emails.contact}`}
              className="card card-hover group flex h-full flex-col"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                <Icon name="mail" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                Email us
              </h3>
              <p className="mt-2 break-all text-base font-semibold text-brand-600">
                {site.emails.contact}
              </p>
              <p className="mt-1 text-sm text-ink-500">We reply within one business day.</p>
            </a>

            <a
              href={site.address.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="card card-hover group flex h-full flex-col"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                <Icon name="pin" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                Visit us
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {site.address.full}
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

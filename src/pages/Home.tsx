import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Marquee from "../components/Marquee";
import IndiaMap from "../components/IndiaMap";
import {
  clientLogos,
  homeServices,
  howItWorks,
  site,
  usps,
} from "../data/site";

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
            <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-700 shadow-soft backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              India&apos;s Leading Laundry Service Provider · Since {site.founded}
            </span>
            <h1 className="h1 mt-6 animate-fade-up">
              The laundry &amp; linen partner
              <br />
              for{" "}
              <span className="text-gradient">luxury hotels and hospitals</span>.
            </h1>
            <p className="lead mt-6 max-w-xl animate-fade-up">
              From leading hotel chains and major hospitals to luxury resorts
              and medical centres, we run cost-effective, consistent commercial
              laundry and linen programmes for institutions of every size — on
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
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-600 animate-fade-up">
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
            {/* Headline stats */}
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 animate-fade-up">
              {[
                { value: "20+", label: "Cities served" },
                { value: "5L+", label: "Loads laundered" },
                { value: "ISO", label: "Certified ops" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-brand-100/70 bg-white/70 px-4 py-3 text-center shadow-soft backdrop-blur"
                >
                  <dd className="font-display text-2xl font-extrabold text-brand-600">
                    {stat.value}
                  </dd>
                  <dt className="mt-0.5 text-xs font-semibold text-ink-500">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* India coverage map */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-15 blur-3xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-lift backdrop-blur-xl sm:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial opacity-60"
                />
                <p className="mb-1 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
                  Our footprint
                </p>
                <p className="mb-4 text-center font-display text-lg font-bold text-ink-900">
                  Trusted across India
                </p>
                <IndiaMap variant="compact" />
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
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="Operational Models"
            description="Three flexible ways we plug into your operation — advise, optimise or run it end-to-end."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
            {homeServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <Link
                  to={s.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100/70 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift"
                >
                  {/* animated top accent */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-x-100"
                  />
                  {/* oversized watermark index */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-1 -top-3 select-none font-display text-[5.5rem] font-black leading-none text-brand-50 transition-colors duration-300 group-hover:text-brand-100"
                  >
                    {i + 1}
                  </span>
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
      <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink-mesh opacity-40"
        />
        <div className="container-page relative">
          <SectionHeading
            title="Why TLB"
            description="The promises we have kept since day one — and the reason hotels, hospitals and resorts stay with us."
            invert
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((u, i) => (
              <Reveal key={u.title} delay={i * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-sm transition duration-300 hover:border-brand-400/40 hover:from-white/[0.12]">
                  {/* hover glow */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-500/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                    <Icon name={u.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-5 font-display text-base font-bold text-white">
                    {u.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-white/65">{u.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="bg-brand-50/40 py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we partner"
            title="From first call to fully managed in 4 steps"
            description="A clear, proven onboarding path — so you know exactly how we take linen off your plate."
          />
          <ol className="relative mt-16 grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* connector line behind the step badges (lg only) */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-0 hidden h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 lg:block"
            />
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
          <SectionHeading
            eyebrow="Get in touch"
            title="Contact us"
            description="Call, email or visit us — we'll help you find the right laundry and linen model for your operation."
          />
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
              href={`mailto:${site.emails.hr}`}
              className="card card-hover group flex h-full flex-col"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                <Icon name="mail" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                Email us
              </h3>
              <p className="mt-2 break-all text-base font-semibold text-brand-600">
                {site.emails.hr}
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

import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import PageSection from "../components/PageSection";
import SectionHeading from "../components/SectionHeading";
import Marquee from "../components/Marquee";
import IndiaMap from "../components/IndiaMap";
import CountUp from "../components/CountUp";
import WhyChooseUsGrid from "../components/WhyChooseUsGrid";
import {
  clientLogos,
  homeServices,
  howItWorks,
  site,
  whyTlbFeatures,
  whyTlbStatGroups,
} from "../data/site";

export default function Home() {
  return (
    <>
      <SEO
        path="/"
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
          <span className="absolute left-[18%] top-[64%] h-5 w-5 animate-float rounded-full bg-brand-300/40 [animation-delay:1.2s]" />
          <span className="absolute right-[26%] top-[30%] h-4 w-4 animate-float rounded-full bg-accent-300/40 [animation-delay:0.6s]" />
          <span className="absolute right-[12%] top-[58%] h-6 w-6 animate-float rounded-full bg-brand-200/50 [animation-delay:2s]" />
          <span className="absolute left-[46%] top-[12%] h-2.5 w-2.5 animate-float rounded-full bg-brand-300/50 [animation-delay:1.6s]" />
        </div>
        <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6">
            <h1 className="h1">
              The laundry &amp; linen partner
              <br />
              for{" "}
              <span className="text-gradient">luxury hotels and hospitals</span>.
            </h1>
            <p className="lead mt-6 max-w-xl">
              From leading hotel chains and major hospitals to luxury resorts
              and medical centres, we run cost-effective, consistent commercial
              laundry and linen programmes for institutions of every size, on
              your premises, off-site or on a managed linen-rental model.
            </p>
          </Reveal>

          {/* India coverage map */}
          <Reveal className="lg:col-span-6" delay={80}>
            <div className="group relative">
              {/* ambient brand glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-brand-gradient opacity-[0.12] blur-3xl"
              />
              <div className="accent-border relative overflow-hidden rounded-4xl shadow-[0_8px_32px_-12px_rgba(0,0,0,0.1)]">
                <div className="relative overflow-hidden rounded-[calc(var(--radius-4xl)-1px)] bg-white/50 p-5 backdrop-blur-2xl sm:p-7">
                  <span aria-hidden="true" className="accent-hairline" />
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
                  <span className="eyebrow-glass-light">
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
          </Reveal>
        </div>

        {/* Trust bar */}
        <Reveal>
          <div className="relative bg-white/70 backdrop-blur">
          <span aria-hidden="true" className="section-separator top-0" />
          <span aria-hidden="true" className="section-separator bottom-0" />
          <div className="container-page py-8">
            <p className="eyebrow-plain mb-4 text-center">
              Trusted by India&apos;s leading hotels &amp; hospitals
            </p>
            <Marquee items={clientLogos} durationSeconds={46} />
          </div>
        </div>
        </Reveal>
      </section>

      {/* ===================== OPERATIONAL MODELS ===================== */}
      <PageSection className="section section-tint" reveal={false}>
          <SectionHeading title="What We Do" />
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
            {homeServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <Link
                  to={s.href}
                  className="group accent-border relative block h-full overflow-hidden rounded-3xl shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className="accent-border-3xl-inner relative flex h-full flex-col p-8">
                    <span aria-hidden="true" className="accent-hairline" />
                    <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/30">
                      <Icon name={s.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="h3 relative mt-7">
                      {s.title}
                    </h3>
                    <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                      {s.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
      </PageSection>

      <WhyChooseUsGrid />

      {/* ===================== WHY TLB ===================== */}
      <PageSection className="section section-tint" reveal={false}>
          <SectionHeading title="Our Strength" />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:auto-rows-fr">
            {/* Feature tile, equity-backed */}
            <Reveal>
              <article className="card card-hover group relative h-full">
                <div className="card-inner flex h-full flex-col p-6 sm:p-8">
                <span className="eyebrow w-fit">
                  {whyTlbFeatures[1].badge}
                </span>
                <h3 className="h3 mt-6">
                  {whyTlbFeatures[1].title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {whyTlbFeatures[1].description}
                </p>
                </div>
              </article>
            </Reveal>

            {/* Feature tile, Girbau */}
            <Reveal delay={90}>
              <article className="card card-hover group relative h-full">
                <div className="card-inner flex h-full flex-col p-6 sm:p-8">
                <span className="eyebrow relative w-fit">
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
                <h3 className="h3 relative mt-5">
                  {whyTlbFeatures[0].title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-600">
                  {whyTlbFeatures[0].description}
                </p>
                </div>
              </article>
            </Reveal>

            {/* Stat tiles, paired two-up */}
            {whyTlbStatGroups.map((group, p) => (
              <Reveal key={group.badge} delay={(p + 2) * 90}>
                <article className="card card-hover group relative h-full">
                  <div className="card-inner flex h-full flex-col p-6 sm:p-8">
                  <span className="eyebrow relative w-fit">
                    {group.badge}
                  </span>
                  <dl className="relative mt-6 grid w-full flex-1 grid-cols-2 items-center">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-2 left-1/2 top-2 z-[1] w-px -translate-x-1/2 rounded-full accent-line-v"
                    />
                    {group.stats.map((s) => (
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
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
      </PageSection>

      {/* ===================== HOW IT WORKS ===================== */}
      <PageSection reveal={false}>
          <SectionHeading title="How We Partner" />

          {/* Desktop — numbered progress connector aligned to the cards */}
          <div
            aria-hidden="true"
            className="relative mt-14 hidden lg:block"
          >
            <div className="grid grid-cols-4 gap-x-6">
              <span className="pointer-events-none absolute inset-x-[12.5%] top-6 h-[2px] -translate-y-1/2 rounded-full accent-line-h" />
              <span className="pointer-events-none absolute inset-x-[12.5%] top-6 h-px -translate-y-1/2 rounded-full accent-line-hairline-h" />
              {howItWorks.map((s, i) => (
                <div key={s.step} className="relative z-10 flex justify-center">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-extrabold text-white shadow-lift ring-[6px] ring-[rgb(var(--page-bg))]">
                    <span
                      aria-hidden="true"
                      className="absolute -inset-1 rounded-full bg-brand-500/25 blur-sm"
                    />
                    <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-brand-400 via-brand-800 to-brand-600">
                      {i + 1}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <ol className="relative mt-10 grid gap-y-8 gap-x-6 max-lg:pt-2 sm:mt-12 sm:grid-cols-2 sm:gap-y-12 lg:mt-8 lg:grid-cols-4 lg:gap-y-12">
            {howItWorks.map((s, i) => (
              <Reveal key={s.step} delay={i * 100} className="contents">
                <li className="accent-box-2xl card-hover group relative z-[1] hover:-translate-y-1 max-lg:h-auto lg:h-full">
                  <div className="accent-box-2xl-inner flex h-full flex-col items-center px-6 pb-8 pt-8 text-center max-lg:pt-6 lg:pt-8">
                  <span className="relative z-10 mx-auto mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-extrabold text-white shadow-lift ring-4 ring-[rgb(var(--page-bg))] sm:h-11 sm:w-11 sm:text-base lg:absolute lg:-top-6 lg:mb-0 lg:hidden">
                    <span
                      aria-hidden="true"
                      className="absolute -inset-1 rounded-full bg-brand-500/25 blur-sm"
                    />
                    <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-brand-400 via-brand-800 to-brand-600">
                      {i + 1}
                    </span>
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition duration-300 group-hover:bg-brand-100">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="h3-sm mt-5">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {s.text}
                  </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
      </PageSection>

      {/* ===================== CONTACT ===================== */}
      <PageSection className="section section-tint" reveal={false}>
          <SectionHeading title="Get In Touch" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: `tel:+91${site.phoneRaw}`,
                icon: "phone" as const,
                title: "Call us",
                primary: site.phoneDisplay,
                secondary: site.hours,
              },
              {
                href: `mailto:${site.emails.enquiries}`,
                icon: "mail" as const,
                title: "Email us",
                primary: site.emails.enquiries,
                secondary: "We reply within one business day.",
                primaryClassName: "break-all",
              },
              {
                href: site.address.mapsHref,
                icon: "pin" as const,
                title: "Visit us",
                primary: site.address.full,
                external: true,
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="card card-hover group block h-full"
                >
                  <div className="card-inner flex h-full flex-col p-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                      <Icon name={item.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="h3 mt-5">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-2 text-base font-semibold text-brand-600 ${item.primaryClassName ?? ""}`}
                    >
                      {item.primary}
                    </p>
                    {item.secondary && (
                      <p className="mt-1 text-sm text-ink-500">
                        {item.secondary}
                      </p>
                    )}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
      </PageSection>
    </>
  );
}

import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Marquee from "../components/Marquee";
import {
  businessServices,
  clientLogos,
  commercialFeatures,
  commercialSubFeatures,
  operationalModels,
  site,
} from "../data/site";

export default function Commercial() {
  return (
    <>
      <SEO
        path="/commercial"
        title="Commercial Laundry & Linen for Hotels and Hospitals"
        description="Together with our institutional customers — luxury hotels, resorts, hospitals and medical centres — The Laundry Bag is transforming the cities we serve."
      />

      <PageHero
        eyebrow="For your Business"
        title="Working with your city's institutions"
        description="Together with luxury hotels, resorts, hospitals and medical centres, The Laundry Bag is transforming the cities we serve — a mission-aligned partner that fits budget needs and finds sustainable alternatives."
        crumbs={[{ label: "Home", to: "/" }, { label: "For your Business" }]}
      >
        <div className="flex flex-wrap gap-3">
          <a href={`tel:+91${site.phoneRaw}`} className="btn-primary">
            <Icon name="phone" className="h-4 w-4" />
            Talk to sales
          </a>
          <Link to="/contact" className="btn-secondary">
            Request a quote
          </Link>
        </div>
      </PageHero>

      {/* Top 3 service cards */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Core services" title="A full commercial toolkit" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {commercialFeatures.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="card h-full overflow-hidden p-0">
                  <div className="h-44 w-full overflow-hidden bg-ink-50">
                    <img
                      src={s.image}
                      alt={`${s.title} — The Laundry Bag`}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-3 text-sm text-ink-600">{s.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Small to large businesses + sub features (parallax) */}
      <section
        className="parallax relative section text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,40,60,0.86),rgba(10,40,60,0.86)), url(/images/parallax-img-02.jpg)",
        }}
      >
        <div className="container-page">
          <SectionHeading
            eyebrow="Small to large"
            title="Commercial laundry for businesses of every size"
            description="From a boutique resort to a 100-bed hospital and everything in between — the fastest, most responsive and most affordable laundry and linen solution across the 20+ cities we serve."
            invert
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commercialSubFeatures.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <article className="glass h-full rounded-4xl p-6 text-ink-800">
                  <h3 className="font-display text-lg font-bold text-ink-900">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{b.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we do for your business */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Sectors" title="What we do for your business" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {businessServices.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <article className="card card-hover h-full">
                  <h3 className="font-display text-xl font-bold text-ink-900">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{b.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational models */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <SectionHeading eyebrow="Operational models" title="Three ways we operate" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {operationalModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <article className="card card-hover h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{m.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Premium services strip */}
      <section className="bg-sky2-500 py-12 text-white">
        <div className="container-page flex flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="font-display text-xl font-semibold sm:text-2xl">
            24/7 premium customer services
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`tel:+91${site.phoneRaw}`} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-sky2-700 hover:bg-sky2-50">
              {site.phoneDisplay}
            </a>
            <Link to="/contact" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Trusted by" title="Businesses that count on us" />
          <div className="mt-10">
            <Marquee items={clientLogos} durationSeconds={46} />
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Link to="/clients" className="btn-secondary">
              See all clients &amp; press
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

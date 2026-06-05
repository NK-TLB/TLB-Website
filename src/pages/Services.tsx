import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { homeFeatures, homeWeDo, howItWorks, locations, site } from "../data/site";

export default function Services() {
  return (
    <>
      <SEO
        path="/services"
        title="Laundry and Dry Cleaning · Delivered for Individuals and Students"
        description="Save time and visits to your local laundromat by using The Laundry Bag for your laundry and dry cleaning. We wash clothes in all-natural detergents and our dry cleaning process is PERC-free."
      />

      <PageHero
        eyebrow="For your Home"
        title="Laundry & dry cleaning, delivered for individuals and students"
        description="Save time and visits to your local laundromat. We wash clothes in all-natural detergents and our dry-cleaning process is PERC-free. Everything is picked up and delivered with next-day service standard."
        crumbs={[{ label: "Home", to: "/" }, { label: "For your Home" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">
            <Icon name="truck" className="h-4 w-4" />
            Schedule a pickup
          </Link>
          <a href={`tel:+91${site.phoneRaw}`} className="btn-secondary">
            <Icon name="phone" className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>
      </PageHero>

      {/* What we do for your home */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Services" title="What we do for your home" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {homeWeDo.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <article className="card card-hover h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <Icon name={i === 0 ? "washer" : i === 1 ? "shirt" : "sparkle"} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {b.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our features"
            title="Care in every step"
            description="Each garment is treated, spotted for stains and finished individually. Our USP — we do not mix clothes."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <article className="card card-hover h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky2-50 text-sky2-600">
                    <Icon name="sparkle" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">{f.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="How it works" title="From bag to wardrobe in 4 steps" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <li className="h-full rounded-4xl border border-ink-100 bg-white p-7 text-center shadow-soft">
                  <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
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

      {/* Locations promo */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Locations we serve"
            title="On-demand at your doorstep"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {locations.map((l, i) => (
              <Reveal key={l.city} delay={i * 80}>
                <article className="card h-full overflow-hidden p-0">
                  <div className="h-44 w-full overflow-hidden bg-ink-50">
                    <img
                      src={l.image}
                      alt={`${l.city} — The Laundry Bag`}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-ink-900">{l.city}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                      {l.role}
                    </p>
                    <p className="mt-3 text-sm text-ink-600">{l.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Link to="/locations" className="btn-secondary">
              See all locations
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-sky2-500 py-12 text-white">
        <div className="container-page flex flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="font-display text-xl font-semibold sm:text-2xl">
            Ready to schedule a pickup?
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary bg-white text-sky2-700 hover:brightness-100">
              Book online
            </Link>
            <a href={`tel:+91${site.phoneRaw}`} className="btn-secondary border-white/40 text-white hover:bg-white/10">
              <Icon name="phone" className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

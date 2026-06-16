import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/Timeline";
import Leadership from "../components/Leadership";
import WhyChooseUsGrid from "../components/WhyChooseUsGrid";
import { companyFacts, site } from "../data/site";

const factIcon: Record<string, string> = {
  Founded: "calendar",
  Headquarters: "building",
  Focus: "washer",
  Presence: "pin",
};

function factValueClass(value: string) {
  if (value.length <= 6) {
    return "font-display text-4xl font-extrabold leading-none text-brand-600 sm:text-[2.75rem]";
  }
  if (value.length <= 22) {
    return "font-display text-xl font-extrabold leading-snug text-ink-900 sm:text-2xl";
  }
  return "font-display text-base font-bold leading-snug text-ink-900 sm:text-lg";
}

const dreamHighlights = [
  { icon: "hotel", label: "Hotels & hospitals" },
  { icon: "factory", label: "On-premise & off-site" },
  { icon: "clock", label: "24-hour turnaround" },
] as const;

export default function About() {
  return (
    <>
      <SEO
        path="/about"
        title="Our Story"
        description="The Laundry Bag was founded in 2013 by Shourya Jain in Raipur, Chhattisgarh, today India's Leading Laundry Service Provider and a trusted commercial laundry & linen partner for leading hotels and hospitals across India."
      />

      <PageHero
        eyebrow="Our Story"
        title="The Story Behind The Laundry Bag"
        description={`Founded in ${site.founded} in Raipur, today India's leading laundry and linen partner for hotels and hospitals across the country.`}
        crumbs={[{ label: "Home", to: "/" }, { label: "Our Story" }]}
      />

      {/* Company facts */}
      <section className="section">
        <div className="container-page">
          <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyFacts.map((f, i) => (
              <Reveal key={f.label} delay={i * 70}>
                <div className="card card-hover group relative h-full">
                  <div className="card-inner flex h-full flex-col items-center px-6 py-8 text-center sm:px-7 sm:py-9">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[2px] accent-line-h opacity-90"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-100/45 blur-2xl transition duration-300 group-hover:bg-brand-200/55"
                  />

                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition duration-300 group-hover:bg-brand-800 group-hover:text-white group-hover:ring-transparent group-hover:shadow-soft">
                    <Icon name={factIcon[f.label] ?? "spark"} className="h-5 w-5" />
                  </span>

                  <dd className={`relative mt-5 ${factValueClass(f.value)}`}>
                    {f.value}
                  </dd>
                  <dt className="relative mt-3 text-xs font-bold uppercase tracking-[0.18em] text-ink-500">
                    {f.label}
                  </dt>
                  </div>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Our dream / mission */}
      <section className="section-tint section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our dream"
              title="Laundry that exceeds expectations"
              showRule={false}
            />
            <p className="lead mt-6">
              We follow a dream, to organise India&apos;s unorganised laundry
              sector and serve institutions in a way that far exceeds
              expectations. So we built an array of commercial laundry, linen
              and dry-cleaning services to take the laundry room off your plate.
            </p>
            <p className="mt-4 text-ink-700">
              Hotels and hospitals need not tolerate late turnarounds or low
              standards merged with high costs. Our programmes cover guest-room
              and patient linen, F&amp;B, uniforms, dry cleaning and upholstery
              — with efficient teams and state-of-the-art technology behind
              every load.
            </p>

            <ul className="mt-7 flex flex-wrap gap-3">
              {dreamHighlights.map((item) => (
                <li
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-800 shadow-sm"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Icon name={item.icon} className="h-4 w-4" />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/clients" className="btn-primary">
                See who we serve
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Talk to our team
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="accent-border group relative overflow-hidden rounded-[2rem] shadow-lift">
              <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-ink-100">
                <span aria-hidden="true" className="accent-hairline" />
                <img
                  src="/images/res_laundry.jpg"
                  alt="The Laundry Bag processing facility"
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/75 via-ink-950/20 to-transparent px-6 pb-6 pt-16">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-200">
                    Raipur · Chhattisgarh
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-white">
                    Processing facility
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-tint section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our journey"
            title="From a simple idea to a national network"
          />
          <Timeline />
        </div>
      </section>

      {/* Founder / leadership */}
      <section className="section-tint section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Leadership"
            title="The founder behind The Laundry Bag"
            description="Built on a simple promise, never mix one client's linen with anyone else's."
          />
          <Leadership />
        </div>
      </section>

      <WhyChooseUsGrid />
    </>
  );
}

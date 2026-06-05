import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import {
  companyFacts,
  counters,
  founders,
  site,
  timeline,
  whyChooseUs,
} from "../data/site";

export default function About() {
  return (
    <>
      <SEO
        path="/about"
        title="Our Story — founded by Shourya Jain"
        description="The Laundry Bag was founded in 2013 by Shourya Jain with co-founders Nalin Agarwal and Honey Jain — today a trusted laundry & linen partner for leading hotels and hospitals across India. We are professionals in the laundry and dry-cleaning business."
      />

      <PageHero
        eyebrow={`Since ${site.founded}`}
        title="A few words about us"
        description="We are professionals in the laundry and dry-cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics — while maintaining the highest standards of business integrity and environmental safety."
        crumbs={[{ label: "Home", to: "/" }, { label: "Our Story" }]}
      />

      {/* Company facts */}
      <section className="section">
        <div className="container-page">
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyFacts.map((f, i) => (
              <Reveal key={f.label} delay={i * 70}>
                <div className="card h-full text-center">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    {f.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-extrabold text-ink-900">
                    {f.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Our dream / mission */}
      <section className="bg-ink-50/60 section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading align="left" eyebrow="Our dream" title="Laundry that exceeds expectations" />
            <p className="lead mt-5">
              We follow a dream — to serve our customers in a way that far
              exceeds expectations. It is not easy to come home from a hectic
              day and rush to the nearest laundry with your clothes. So we
              built an array of services to make things easy for you.
            </p>
            <p className="mt-4 text-ink-700">
              You need not tolerate late deliveries or low standards merged
              with high prices. Our services cater to all your laundering,
              ironing, dry cleaning, shoe repairs and upholstery cleaning. Our
              highly efficient employees ensure you face no difficulty, the
              technology we use is state of the art, and the service we provide
              is incredibly good.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/services" className="btn-primary">For your Home</Link>
              <Link to="/commercial" className="btn-secondary">For your Business</Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-4xl shadow-soft">
              <img
                src="/images/res_laundry.jpg"
                alt="The Laundry Bag processing facility"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our journey"
            title="From a simple idea to a national network"
          />
          <ol className="mx-auto mt-12 max-w-3xl space-y-6">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 60}>
                <li className="relative rounded-4xl border border-ink-100 bg-white p-6 pl-20 shadow-soft">
                  <span className="absolute left-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600">
                    {t.year}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink-900">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">{t.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind The Laundry Bag"
            description="Started by college friends with a simple promise — never mix a customer's clothes with anyone else's."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {founders.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <article className="card card-hover h-full text-center">
                  <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient font-display text-xl font-extrabold text-white">
                    {p.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{p.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {p.role}
                  </p>
                  <p className="mt-3 text-sm text-ink-600">{p.bio}</p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky2-700 hover:text-sky2-800"
                  >
                    <Icon name="linkedin" className="h-4 w-4" />
                    Profile
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Counters */}
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
                <dd className="font-display text-4xl font-extrabold sm:text-5xl">{c.value}</dd>
                <dt className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/85">
                  {c.label}
                </dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Why choose us" title="Built on values that stick" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <article className="card card-hover h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={r.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{r.title}</h3>
                  <p className="mt-2 text-sm text-ink-600">{r.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

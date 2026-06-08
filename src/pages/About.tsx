import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/Timeline";
import Leadership from "../components/Leadership";
import { companyFacts, site, whyChooseUs } from "../data/site";

export default function About() {
  return (
    <>
      <SEO
        path="/about"
        title="Our Story — founded by Shourya Jain"
        description="The Laundry Bag was founded in 2013 by Shourya Jain in Raipur, Chhattisgarh — today India's Leading Laundry Service Provider and a trusted commercial laundry & linen partner for leading hotels and hospitals across India."
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
      <section className="bg-brand-50/50 section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading align="left" eyebrow="Our dream" title="Laundry that exceeds expectations" />
            <p className="lead mt-5">
              We follow a dream — to organise India&apos;s unorganised laundry
              sector and serve institutions in a way that far exceeds
              expectations. So we built an array of commercial laundry, linen
              and dry-cleaning services to take the laundry room off your plate.
            </p>
            <p className="mt-4 text-ink-700">
              Hotels and hospitals need not tolerate late turnarounds or low
              standards merged with high costs. Our programmes cover guest-room
              and patient linen, F&amp;B, uniforms, dry cleaning and upholstery.
              Our highly efficient teams ensure you face no difficulty, the
              technology we use is state of the art, and the service we provide
              is incredibly good.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/commercial" className="btn-primary">Our Services</Link>
              <Link to="/contact" className="btn-secondary">Talk to our team</Link>
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
          <Timeline />
        </div>
      </section>

      {/* Founder / leadership */}
      <section className="bg-brand-50/50 section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Leadership"
            title="The founder behind The Laundry Bag"
            description="Built on a simple promise — never mix one client's linen with anyone else's."
          />
          <Leadership />
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                    <Icon name={r.icon} className="h-6 w-6" />
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

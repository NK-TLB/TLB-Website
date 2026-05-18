import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import { site, stats } from "../data/site";

const values = [
  {
    icon: "shield",
    title: "Trust, by design",
    description:
      "No mixing of clothes. Every garment is tagged, tracked and returned to the right customer.",
  },
  {
    icon: "leaf",
    title: "Cleaner for the planet",
    description:
      "PERC-free dry cleaning, water-efficient machines and responsible packaging.",
  },
  {
    icon: "check",
    title: "Quality you can feel",
    description:
      "Trained operators, professional equipment, and a quality check on every order.",
  },
  {
    icon: "clock",
    title: "Always on time",
    description:
      "Reliable turnarounds and on-schedule pickup &amp; delivery slots, every time.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        path="/about"
        title="About The LaundryBag — India's On-Demand Laundry Since 2013"
        description="Established in 2013 by two college friends, The LaundryBag (TLB) is one of India's first companies to provide on-campus laundromat facilities. Our vision: bring India's unorganised laundry sector into an organised industry."
      />

      {/* === PRIMARY — "A few words about us" (from original homepage) ======== */}
      <PageHero
        eyebrow="About us"
        title="A few words about us."
        description={`Established in ${site.founded} by two college friends, ${site.name} (TLB) is one of India's first companies to provide on-campus laundromat facilities — and a trusted laundry partner for homes, hotels, hospitals and hostels.`}
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="h2">Our story</h2>
            <div className="lead mt-5 space-y-5">
              <p>
                We started The LaundryBag with a simple frustration: India&apos;s
                laundry industry was largely unorganised, inconsistent and
                opaque. Clothes were mixed, turnaround times were unpredictable
                and quality varied wildly from one shop to the next.
              </p>
              <p>
                Over the last decade, we&apos;ve built a service that does the
                boring stuff brilliantly — clean processes, trained teams,
                modern machines and software that keeps customers in control.
                From students on campus to five-star hotels, we treat every
                order with the same care.
              </p>
              <p>
                Today, we operate retail laundry &amp; dry-cleaning in Raipur
                and on-campus laundromats in Pune and Goa, serving government
                establishments, hospitals, hotels, restaurants, colleges,
                schools and corporates across India.
              </p>
            </div>
          </div>
          <aside className="card self-start">
            <h3 className="h3">Our vision</h3>
            <p className="mt-3 text-ink-600">
              To be India&apos;s leading laundry service provider — bringing
              the unorganised laundry sector into an organised, customer-first
              industry through quality service and smart technology.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-500">
                  Founded
                </dt>
                <dd className="font-display text-xl font-bold text-ink-900">
                  {site.founded}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-500">
                  HQ
                </dt>
                <dd className="font-display text-xl font-bold text-ink-900">
                  Raipur
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-500">
                  Cities
                </dt>
                <dd className="font-display text-xl font-bold text-ink-900">
                  {site.cities.length}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-500">
                  Team
                </dt>
                <dd className="font-display text-xl font-bold text-ink-900">
                  13+
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* === PRIMARY — values / promises ====================================== */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <span className="eyebrow">What we stand for</span>
          <h2 className="h2 mt-4 max-w-2xl">
            Four promises we make on every single order.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <article key={v.title} className="card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={v.icon} />
                </span>
                <h3 className="h3 mt-5">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{v.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === SECONDARY — by the numbers (supplementary intel) ================ */}
      <section className="section">
        <div className="container-page">
          <span className="eyebrow">Additional details</span>
          <h2 className="h2 mt-4 max-w-2xl">By the numbers.</h2>
          <p className="lead mt-4 max-w-2xl">
            Supplementary stats compiled from our retail and on-campus operations.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card">
                <dt className="text-xs uppercase tracking-wider text-ink-500">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-3xl font-extrabold text-ink-900">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

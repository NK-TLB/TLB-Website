import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import { commercial, featuredClients, site } from "../data/site";

const features = [
  {
    icon: "shield",
    title: "Hygienic processing",
    description:
      "Strict segregation for healthcare and food-grade laundry, with sanitised handling and trained staff.",
  },
  {
    icon: "clock",
    title: "Reliable schedules",
    description:
      "Daily / alternate-day / weekly pickup cycles with on-time delivery commitments.",
  },
  {
    icon: "truck",
    title: "End-to-end logistics",
    description:
      "Pickup, processing, packing and delivery — all managed by our team.",
  },
  {
    icon: "check",
    title: "Linen rentals",
    description:
      "Lease fresh, professionally laundered linen — no capex, no inventory headaches.",
  },
];

export default function Commercial() {
  return (
    <>
      <SEO
        path="/commercial"
        title="Commercial Laundry for Institutions and Businesses"
        description="The LaundryBag delivers commercial laundry across India — hospitality-grade for hotels and resorts, sanitised for hospitals and clinics, plus on-campus laundromats, restaurant linen, sheets &amp; towels, linen rentals, and upholstery &amp; carpet cleaning."
      />

      {/* === PRIMARY — original commercial page intro ========================= */}
      <PageHero
        eyebrow="B2B / Commercial"
        title="Commercial laundry for institutions and businesses."
        description="Hospitality-grade laundry for hotels, hospitals, restaurants, universities and corporates — with linen rentals, uniform programs and on-premise setup available."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">
            Request a quote
          </Link>
          <a
            href={`mailto:${site.email}?subject=B2B%20laundry%20enquiry`}
            className="btn-secondary"
          >
            Email our sales team
          </a>
        </div>
      </PageHero>

      {/* === PRIMARY — original list of commercial services =================== */}
      <section className="section">
        <div className="container-page">
          <span className="eyebrow">Who we serve</span>
          <h2 className="h2 mt-4 max-w-2xl">
            Built for businesses that can&apos;t compromise on clean.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commercial.map((c) => (
              <article key={c.title} className="card">
                <h3 className="h3">{c.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{c.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === PRIMARY — why partner with us ==================================== */}
      <section className="bg-ink-50/60 section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Why partner with us</span>
            <h2 className="h2 mt-4">
              A laundry operation that runs like clockwork — so yours can too.
            </h2>
            <p className="lead mt-5">
              Whether you run a 200-room resort, a 50-bed hospital or a campus
              of 3,000 students, we custom-build a plan that matches your
              volume, turnaround and hygiene needs. Inventory tracking,
              on-site coordinators and monthly reporting are all part of the
              package.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Request a quote
              </Link>
              <a href={site.phoneHref} className="btn-secondary">
                Call sales · {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={f.icon} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-ink-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECONDARY — featured B2B partners (supplementary) ================ */}
      <section className="section">
        <div className="container-page">
          <span className="eyebrow">Additional details</span>
          <h2 className="h2 mt-4 max-w-2xl">Featured business partners.</h2>
          <p className="lead mt-4 max-w-2xl">
            A few of the brands and institutions we&apos;ve served — across
            hospitality, healthcare, beauty and education.
          </p>
          <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-semibold text-ink-700">
            {featuredClients.map((c) => (
              <li
                key={c}
                className="rounded-full bg-ink-50 px-4 py-2 text-ink-700"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

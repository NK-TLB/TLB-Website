import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import { services } from "../data/site";

const packages = [
  {
    name: "Silver",
    price: "Wash & fold",
    features: [
      "Standard 48-hour turnaround",
      "Free pickup & delivery",
      "Tagged & separated — never mixed",
    ],
    cta: "Start with Silver",
  },
  {
    name: "Gold",
    price: "Wash, fold & iron",
    features: [
      "Priority turnaround on request",
      "Stain treatment included",
      "Free pickup & delivery",
    ],
    highlight: true,
    cta: "Pick the popular one",
  },
  {
    name: "Platinum",
    price: "Dry-clean & specialty",
    features: [
      "PERC-free dry cleaning",
      "Hand-finish for designer wear",
      "Shoe & bag specialty cleaning",
      "Dedicated account manager",
    ],
    cta: "Talk to us",
  },
];

const steps = [
  {
    n: "01",
    title: "Bag up your dirty clothes",
    description:
      "Toss your laundry into a bag — we'll bring our own on the first pickup if you'd like.",
  },
  {
    n: "02",
    title: "We pick it up",
    description:
      "Schedule a pickup via the app, website or a phone call. We arrive at your preferred time.",
  },
  {
    n: "03",
    title: "We clean it right",
    description:
      "Tagged, sorted and washed separately in a hygienic facility — never mixed.",
  },
  {
    n: "04",
    title: "We deliver back",
    description:
      "Folded or hung, packed neatly, and back at your door — usually within 48 hours.",
  },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Laundry and Dry Cleaning",
  provider: {
    "@type": "LocalBusiness",
    name: "The LaundryBag",
    url: "https://www.thelaundrybag.co.in/",
  },
  areaServed: { "@type": "Country", name: "India" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Laundry packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Wash & Fold" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Wash, Fold & Iron" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Dry Cleaning (PERC-free)" },
      },
    ],
  },
};

export default function Services() {
  return (
    <>
      <SEO
        path="/services"
        title="Laundry &amp; Dry Cleaning for Residents and Students"
        description="Wash &amp; fold, dry cleaning, iron, shoe and bag cleaning — picked up from your home, hostel or campus and delivered back in 48 hours. Free pickup &amp; delivery."
        schema={servicesSchema}
      />

      {/* === PRIMARY — original residents/students services page intro ======== */}
      <PageHero
        eyebrow="Services"
        title="Laundry & dry cleaning for residents and students."
        description="Pickup, wash, dry, iron, dry-clean and delivery — all from one service. Free pickup and delivery at your preferred time."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">
            Schedule a pickup
          </Link>
          <Link to="/app" className="btn-secondary">
            Download the app
          </Link>
        </div>
      </PageHero>

      {/* === PRIMARY — what's included (original service list) ================ */}
      <section className="section">
        <div className="container-page">
          <span className="eyebrow">What&apos;s included</span>
          <h2 className="h2 mt-4 max-w-2xl">
            From everyday loads to delicate designer wear.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={s.icon} />
                </span>
                <h3 className="h3 mt-5">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === PRIMARY — how it works (original 4-step flow) ==================== */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <span className="eyebrow">How it works</span>
          <h2 className="h2 mt-4 max-w-2xl">Four simple steps to clean.</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="card">
                <span className="font-display text-3xl font-extrabold text-brand-500">
                  {s.n}
                </span>
                <h3 className="h3 mt-3">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* === PRIMARY — "Our prices are simple and affordable" ================= */}
      <section className="section">
        <div className="container-page">
          <span className="eyebrow">Simple &amp; affordable pricing</span>
          <h2 className="h2 mt-4 max-w-2xl">
            Pick a plan that fits your laundry life.
          </h2>
          <p className="lead mt-4 max-w-2xl">
            Our prices are simple and affordable. Choose from Silver, Gold and
            Platinum packages — final pricing is confirmed at pickup based on
            weight and garment type.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((p) => (
              <article
                key={p.name}
                className={`card flex flex-col ${
                  p.highlight ? "border-brand-500 ring-2 ring-brand-100" : ""
                }`}
              >
                {p.highlight && (
                  <span className="self-start rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <h3 className="mt-3 font-display text-2xl font-extrabold text-ink-900">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand-700">
                  {p.price}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-ink-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-6 ${p.highlight ? "btn-primary" : "btn-secondary"}`}
                >
                  {p.cta}
                </Link>
              </article>
            ))}
          </div>

          {/* === SECONDARY — indicative pricing detail ======================== */}
          <p className="mt-6 text-sm text-ink-500">
            <span className="font-semibold text-ink-700">
              Additional details:
            </span>{" "}
            Silver wash-and-fold pricing typically starts from ₹60/kg.
            Commercial pricing is customised based on volume and frequency —
            call {" "}
            <a className="text-brand-700 hover:underline" href="tel:+919111132222">
              091111 32222
            </a>{" "}
            or use our contact form for a quote.
          </p>
        </div>
      </section>
    </>
  );
}

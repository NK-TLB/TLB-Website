import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import {
  homeFeatures,
  homeWeDo,
  howItWorks,
  locations,
  site,
} from "../data/site";

const howItWorksIcons = ["bag", "truck", "washer", "check"];

export default function Services() {
  return (
    <>
      <SEO
        path="/services"
        title="Laundry and Dry Cleaning · Delivered for Individuals and Students"
        description="Save time and visits to your local laundromat by using The Laundry Bag for your laundry and dry cleaning services. We wash clothes in all-natural detergents and our dry cleaning process is PERC-free."
      />
      <div className="breadcrumb-strip">
        <div className="container-page py-3 text-xs text-ink-500">
          <Link to="/" className="hover:text-brand-700">Home</Link>{" "}
          <span className="mx-2">/</span>{" "}
          <span className="text-ink-700">Our services for Individuals</span>
        </div>
      </div>

      <PageHero
        eyebrow="For your Home"
        title="Laundry and Dry Cleaning. Delivered for Individuals and Students"
        description="Save time and visits to your local laundromat by using The Laundry Bag for your laundry and dry cleaning services. We wash clothes in all-natural detergents and our dry cleaning process is PERC-free. Everything is picked up and delivered with next-day service standard."
      />

      {/* === Locations we serve =============================================== */}
      <section className="section">
        <div className="container-page">
          <h2 className="title-underline">Locations we serve</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {locations.map((l) => (
              <article key={l.city} className="card overflow-hidden p-0">
                <div className="h-40 w-full overflow-hidden bg-ink-50">
                  <img
                    src={l.image}
                    alt={`${l.city} — The Laundry Bag`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="h3">{l.city}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {l.role}
                  </p>
                  <p className="mt-3 text-sm text-ink-600">{l.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Promo strip — "Download our App to Schedule Pick-up" ============= */}
      <section className="bg-sky2-500 py-10 text-white">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-display text-xl font-semibold sm:text-2xl">
            Download our App to Schedule Pick-up
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={site.android}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center"
            >
              <img
                src="/images/Get_it_on_Google_play.svg"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </a>
            <a
              href={site.ios}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center"
            >
              <img
                src="/images/apple_btn_135x40.svg"
                alt="Download on the App Store"
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* === Our Features ==================================================== */}
      <section className="section">
        <div className="container-page">
          <h2 className="title-underline">Our Features</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeFeatures.map((f) => (
              <article key={f.title} className="card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                  <Icon name="sparkle" />
                </span>
                <h3 className="h3 mt-5">{f.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === What we do for your home (residential carousel) ================= */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <h2 className="title-underline">What we do for your home?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeWeDo.map((b) => (
              <article
                key={b.title}
                className="rounded-3xl bg-white p-6 text-ink-800 shadow-soft sm:p-8"
              >
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {b.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === How It Works ==================================================== */}
      <section className="section">
        <div className="container-page">
          <h2 className="title-underline">How It Works: in 4 Easy Steps</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s, i) => (
              <li key={s.step} className="card text-center">
                <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-sky2-100 text-sky2-700">
                  <Icon name={howItWorksIcons[i]} className="h-7 w-7" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-700">
                  {s.step}
                </p>
                <p className="mt-2 font-display text-lg font-bold text-ink-900">
                  {s.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

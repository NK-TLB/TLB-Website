import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { extraCities, locations, site } from "../data/site";

export default function Locations() {
  return (
    <>
      <SEO
        path="/locations"
        title="Locations — Raipur HQ · hotels & hospitals across India"
        description="The Laundry Bag operates retail laundry & dry-cleaning from its Raipur HQ, and runs laundry & linen programmes for hotels and hospitals across Goa, Mumbai, Chennai, Kolkata, Hyderabad, Pune and 20+ cities."
      />

      <PageHero
        eyebrow="Locations"
        title="Where you'll find us"
        description="Retail laundry & dry-cleaning and our central processing unit in Raipur, plus laundry & linen programmes for leading hotels and hospitals across Goa, Mumbai, Chennai, Kolkata, Hyderabad, Pune and more than 20 cities nationwide."
        crumbs={[{ label: "Home", to: "/" }, { label: "Locations" }]}
      />

      {/* Primary locations */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((l, i) => (
              <Reveal key={l.city} delay={i * 80}>
                <article className="card h-full overflow-hidden p-0">
                  <div className="h-48 w-full overflow-hidden bg-ink-50">
                    <img
                      src={l.image}
                      alt={`${l.city} — The Laundry Bag`}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name="pin" />
                    </span>
                    <h2 className="mt-4 font-display text-xl font-bold text-ink-900">
                      {l.city}
                      <span className="ml-2 text-sm font-semibold text-ink-500">· {l.state}</span>
                    </h2>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                      {l.role}
                    </p>
                    <p className="mt-3 text-sm text-ink-600">{l.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate office */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="Corporate office · Raipur"
            title="Walk in, drop off, or schedule a free pickup"
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name="pin" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-500">Address</span>
                  <span className="block font-semibold text-ink-900">{site.address.street}</span>
                  <span className="block text-ink-700">
                    {site.address.city}, {site.address.region} {site.address.postalCode}, {site.address.country}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ink-500">Phone</span>
                  <span className="block font-semibold text-ink-900">{site.phone}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name="clock" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-500">Hours</span>
                  <span className="block font-semibold text-ink-900">{site.hours}</span>
                </span>
              </li>
              <li className="flex flex-wrap items-center gap-3 pt-2">
                <a href={site.address.mapsHref} target="_blank" rel="noreferrer" className="btn-primary">
                  Get directions
                </a>
                <Link to="/contact" className="btn-secondary">Schedule pickup</Link>
              </li>
            </ul>

            <div className="overflow-hidden rounded-4xl border border-ink-100 shadow-soft">
              <iframe
                title="The Laundry Bag · Raipur location map"
                src={`https://www.google.com/maps?q=${site.address.geo.lat},${site.address.geo.lng}&z=14&output=embed`}
                className="h-80 w-full lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Also serving */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Also serving" title="More cities on the map" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {extraCities.map((c, i) => (
              <Reveal key={c.city} delay={i * 60}>
                <li className="card card-hover h-full">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky2-50 text-sky2-600">
                    <Icon name="pin" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{c.city}</h3>
                  <p className="mt-2 text-sm text-ink-600">{c.note}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import { locationDetails, locations, site } from "../data/site";

export default function Locations() {
  return (
    <>
      <SEO
        path="/locations"
        title="Locations — Raipur · Pune · Goa"
        description="The LaundryBag operates retail laundry &amp; dry-cleaning out of Raipur and on-campus laundromats in Pune and Goa, plus B2B partnerships across India."
      />

      {/* === PRIMARY — three cities from the original site ==================== */}
      <PageHero
        eyebrow="Locations"
        title="Where you'll find us."
        description="Retail laundry & dry-cleaning out of Raipur, plus on-campus laundromats in Pune and Goa. B2B clients across India."
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((l) => (
              <article key={l.city} className="card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name="pin" />
                </span>
                <h2 className="h3 mt-4">
                  {l.city}
                  <span className="ml-2 text-sm font-semibold text-ink-500">
                    · {l.state}
                  </span>
                </h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                  {l.role}
                </p>
                <p className="mt-3 text-sm text-ink-600">{l.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === SECONDARY — flagship Raipur outlet & map ========================= */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <span className="eyebrow">Additional details</span>
          <h2 className="h2 mt-4 max-w-2xl">Flagship outlet · Raipur.</h2>
          <p className="lead mt-4 max-w-2xl">
            Walk in, drop off, or schedule a free pickup anywhere across Raipur.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name="pin" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-500">
                    Address
                  </span>
                  <span className="block font-semibold text-ink-900">
                    {site.address.street}, {site.address.landmark}
                  </span>
                  <span className="block text-ink-700">
                    {site.address.city}, {site.address.region}{" "}
                    {site.address.postalCode}, {site.address.country}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                <a href={site.phoneHref} className="hover:text-brand-700">
                  <span className="block text-xs uppercase tracking-wider text-ink-500">
                    Phone
                  </span>
                  <span className="block font-semibold text-ink-900">
                    {site.phone}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name="clock" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-500">
                    Hours
                  </span>
                  <span className="block font-semibold text-ink-900">
                    {site.hours}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 pt-2">
                <a
                  href={site.address.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Get directions
                </a>
                <Link to="/contact" className="btn-secondary">
                  Schedule pickup
                </Link>
              </li>
            </ul>

            <div className="overflow-hidden rounded-3xl border border-ink-100 shadow-soft">
              <iframe
                title="The LaundryBag · Raipur location map"
                src="https://www.google.com/maps?q=The+Laundry+Bag+TV+Tower+Road+Raipur&output=embed"
                className="h-80 w-full lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="h3">Campus partnerships</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {Object.entries(locationDetails).map(([city, d]) => (
                <li
                  key={city}
                  className="rounded-xl bg-white px-4 py-3 shadow-soft"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {city}
                  </span>
                  <span className="block text-ink-800">{d.stat}</span>
                  {d.partner && (
                    <span className="block text-xs text-ink-500">
                      {d.partner}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

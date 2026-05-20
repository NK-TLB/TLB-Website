import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import { extraCities, locations, site } from "../data/site";

export default function Locations() {
  return (
    <>
      <SEO
        path="/locations"
        title="Locations — Raipur · Pune · Goa · Delhi · Noida · Gurgaon"
        description="The Laundry Bag operates retail laundry &amp; dry-cleaning out of Raipur, on-campus laundromats in Pune (Symbiosis) and Goa (BITS Pilani), and B2B services across Delhi, Noida and Gurgaon."
      />
      <div className="breadcrumb-strip">
        <div className="container-page py-3 text-xs text-ink-500">
          <Link to="/" className="hover:text-brand-700">Home</Link>{" "}
          <span className="mx-2">/</span>{" "}
          <span className="text-ink-700">Locations</span>
        </div>
      </div>

      <PageHero
        eyebrow="Locations"
        title="Where you'll find us."
        description="Retail laundry & dry-cleaning out of Raipur, plus on-campus laundromats in Pune (Symbiosis International University) and Goa (BITS Pilani Goa Campus). B2B clients across Delhi, Noida and Gurgaon."
      />

      {/* === Three primary location cards ==================================== */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((l) => (
              <article key={l.city} className="card overflow-hidden p-0">
                <div className="h-44 w-full overflow-hidden bg-ink-50">
                  <img
                    src={l.image}
                    alt={`${l.city} — The Laundry Bag`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Flagship Raipur outlet ========================================== */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <h2 className="title-underline-left">Corporate office · Raipur</h2>
          <p className="lead mt-4">
            Walk in, drop off, or schedule a free pickup anywhere across Raipur.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
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
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                <a href={site.phoneHref} className="hover:text-brand-700">
                  <span className="block text-xs uppercase tracking-wider text-ink-500">Phone</span>
                  <span className="block font-semibold text-ink-900">{site.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                  <Icon name="clock" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-500">Hours</span>
                  <span className="block font-semibold text-ink-900">{site.hours}</span>
                </span>
              </li>
              <li className="flex items-start gap-3 pt-2">
                <a href={site.address.mapsHref} target="_blank" rel="noreferrer" className="btn-primary">
                  Get directions
                </a>
                <Link to="/contact" className="btn-secondary">
                  Schedule pickup
                </Link>
              </li>
            </ul>

            <div className="overflow-hidden rounded-3xl border border-ink-100 shadow-soft">
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

      {/* === Extra cities ==================================================== */}
      <section className="section">
        <div className="container-page">
          <h2 className="title-underline">Also serving</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {extraCities.map((c) => (
              <li key={c.city} className="card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky2-50 text-sky2-700">
                  <Icon name="pin" />
                </span>
                <h3 className="h3 mt-4">{c.city}</h3>
                <p className="mt-2 text-sm text-ink-600">{c.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

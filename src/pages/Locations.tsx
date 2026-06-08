import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import IndiaMap from "../components/IndiaMap";
import { locations, site } from "../data/site";

export default function Locations() {
  return (
    <>
      <SEO
        path="/locations"
        title="Locations — Raipur HQ · hotels & hospitals across India"
        description="The Laundry Bag is headquartered in Raipur with a central processing unit, and runs commercial laundry & linen programmes for hotels and hospitals across Goa, Mumbai, Chennai, Kolkata, Hyderabad, Pune and 20+ cities."
      />

      <PageHero
        eyebrow="Locations"
        title="Where you'll find us"
        description="Our headquarters and central processing unit in Raipur, plus commercial laundry & linen programmes for leading hotels and hospitals across Goa, Mumbai, Chennai, Kolkata, Hyderabad, Pune and more than 20 cities nationwide."
        crumbs={[{ label: "Home", to: "/" }, { label: "Locations" }]}
      />

      {/* Primary locations */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((l, i) => (
              <Reveal key={l.city} delay={i * 80}>
                <article className="card card-hover group h-full overflow-hidden p-0">
                  <div className="h-48 w-full overflow-hidden bg-ink-50">
                    <img
                      src={l.image}
                      alt={`${l.city} — The Laundry Bag`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                      <Icon name="pin" className="h-6 w-6" />
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
      <section className="bg-brand-50/50 section">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="Corporate office · Raipur"
            title="Visit our headquarters & processing unit"
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
                <Link to="/contact" className="btn-secondary">Talk to our team</Link>
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

      {/* India operations map */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Across India"
            title="Everywhere you need us"
            description="From our Raipur headquarters, our laundry and linen programmes reach leading hotels, resorts and hospitals in more than 20 cities. Hover or tap a city to see what we run there."
          />
          <Reveal className="mt-12">
            <IndiaMap variant="full" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

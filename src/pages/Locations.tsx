import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import IndiaMap from "../components/IndiaMap";
import { site } from "../data/site";

export default function Locations() {
  return (
    <>
      <SEO
        path="/locations"
        title="Locations, Raipur HQ · hotels & hospitals across India"
        description="The Laundry Bag is headquartered in Raipur with a central processing unit, and runs commercial laundry & linen programmes for hotels and hospitals across Goa, Mumbai, Chennai, Kolkata, Hyderabad, Pune and 18 cities."
      />

      <PageHero
        eyebrow="Locations"
        title="Where We Operate"
        crumbs={[{ label: "Home", to: "/" }, { label: "Locations" }]}
      />

      {/* India operations map */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Across India"
            title="Everywhere you need us"
            description="From our Raipur headquarters, our laundry and linen programmes reach leading hotels, resorts and hospitals across 18 cities. Hover or tap a city to see what we run there."
          />
          <Reveal className="mt-12">
            <IndiaMap variant="full" />
          </Reveal>
        </div>
      </section>

      {/* Head Office */}
      <section className="section-tint section">
        <div className="container-page">
          <Reveal className="text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-700 shadow-[0_2px_10px_-4px_rgba(0,156,220,0.3)] backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              Head Office · Raipur
            </span>
          </Reveal>
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
                src={`https://maps.google.com/maps?q=${site.address.geo.lat},${site.address.geo.lng}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="h-80 w-full lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

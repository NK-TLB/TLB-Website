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
            description="From our Raipur headquarters, our laundry and linen programmes reach leading hotels, resorts and hospitals across 18 cities. Hover or tap a city to explore our network."
          />
          <Reveal className="mt-12">
            <article className="relative overflow-hidden rounded-[2rem] p-[1.5px] shadow-lift">
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-brand-gradient opacity-90"
              />
              <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] border border-white/70 bg-white p-6 sm:p-8 lg:p-8">
                <IndiaMap variant="full" />
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Head Office */}
      <section className="section-tint section">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="Head Office · Raipur"
            title="Our Raipur headquarters"
            description="Visit or reach our head office for partnerships, site visits and general enquiries."
            showRule={false}
          />

          <Reveal className="mt-10">
            <article className="group relative overflow-hidden rounded-[2rem] p-[1.5px] shadow-lift">
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-brand-gradient opacity-90"
              />
              <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] border border-white/70 bg-white">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 sm:p-10 lg:p-12">
                    <ul className="space-y-5">
                      {[
                        {
                          icon: "pin",
                          label: "Address",
                          content: (
                            <>
                              <span className="block font-semibold text-ink-900">
                                {site.address.street}
                              </span>
                              <span className="mt-0.5 block text-ink-600">
                                {site.address.city}, {site.address.region}{" "}
                                {site.address.postalCode}, {site.address.country}
                              </span>
                            </>
                          ),
                        },
                        {
                          icon: "phone",
                          label: "Phone",
                          content: (
                            <a
                              href={`tel:${site.phone}`}
                              className="font-semibold text-brand-700 transition hover:text-brand-800"
                            >
                              {site.phoneDisplay}
                            </a>
                          ),
                        },
                        {
                          icon: "clock",
                          label: "Hours",
                          content: (
                            <span className="font-semibold text-ink-900">
                              {site.hours}
                            </span>
                          ),
                        },
                      ].map((item) => (
                        <li
                          key={item.label}
                          className="flex items-start gap-4 rounded-2xl border border-brand-100/80 bg-brand-50/40 p-4 transition duration-300 hover:border-brand-200 hover:bg-brand-50/70"
                        >
                          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                            <Icon name={item.icon} className="h-5 w-5" />
                          </span>
                          <div>
                            <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-600">
                              {item.label}
                            </span>
                            <div className="mt-1 text-sm">{item.content}</div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={site.address.mapsHref}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                      >
                        Get directions
                        <Icon name="arrow" className="h-4 w-4" />
                      </a>
                      <Link to="/contact" className="btn-secondary">
                        Talk to our team
                      </Link>
                    </div>
                  </div>

                  <div className="relative min-h-[18rem] bg-ink-50 lg:min-h-full">
                    <iframe
                      title="The Laundry Bag · Raipur location map"
                      src={`https://maps.google.com/maps?q=${site.address.geo.lat},${site.address.geo.lng}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}

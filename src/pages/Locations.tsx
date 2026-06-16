import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import PageSection from "../components/PageSection";
import SectionHeading from "../components/SectionHeading";
import IndiaMap from "../components/IndiaMap";
import { site } from "../data/site";

export default function Locations() {
  return (
    <>
      <SEO
        path="/locations"
        title="Locations"
        description="The Laundry Bag is headquartered in Raipur with a central processing unit, and runs commercial laundry & linen programmes for hotels and hospitals across Goa, Mumbai, Chennai, Kolkata, Hyderabad, Pune and 18 cities."
      />

      <PageHero
        title="Where We Operate"
        description="From our Raipur headquarters, we run laundry and linen programmes for hotels and hospitals across 18 cities in India."
        crumbs={[{ label: "Home", to: "/" }, { label: "Locations" }]}
      />

      <PageSection reveal={false}>
        <Reveal>
        <div className="group relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[3rem] bg-brand-gradient opacity-[0.09] blur-3xl"
          />
          <article className="accent-border relative overflow-hidden rounded-[2rem] shadow-lift">
            <div className="accent-border-2rem-inner relative overflow-hidden p-6 sm:p-8 lg:p-10">
              <span aria-hidden="true" className="accent-hairline" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-100/25 blur-3xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-accent-400/10 blur-3xl"
              />
              <div className="relative">
                <IndiaMap variant="full" />
              </div>
            </div>
          </article>
        </div>
        </Reveal>
      </PageSection>

      <PageSection className="section-tint section" reveal={false}>
          <SectionHeading
            align="left"
            title="Our Raipur headquarters"
            description="Visit or reach our head office for partnerships, site visits and general enquiries."
            showRule={false}
          />

          <article className="accent-border group relative mt-10 overflow-hidden rounded-[2rem] shadow-lift">
              <div className="accent-border-2rem-inner">
                <span aria-hidden="true" className="accent-hairline" />
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
                      ].map((item, i) => (
                        <Reveal key={item.label} delay={i * 60}>
                        <li className="accent-border rounded-2xl transition duration-300 hover:-translate-y-0.5 hover:shadow-soft">
                          <div className="surface-inset flex items-start gap-4 rounded-[calc(1rem-1px)] p-4">
                            <span aria-hidden="true" className="accent-hairline" />
                          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                            <Icon name={item.icon} className="h-5 w-5" />
                          </span>
                          <div>
                            <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-600">
                              {item.label}
                            </span>
                            <div className="mt-1 text-sm">{item.content}</div>
                          </div>
                          </div>
                        </li>
                        </Reveal>
                      ))}
                    </ul>

                    <Reveal delay={200}>
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
                    </Reveal>
                  </div>

                  <Reveal delay={120} className="relative min-h-[18rem] bg-ink-50 lg:min-h-full">
                    <iframe
                      title="The Laundry Bag · Raipur location map"
                      src={`https://maps.google.com/maps?q=${site.address.geo.lat},${site.address.geo.lng}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </Reveal>
                </div>
              </div>
            </article>
      </PageSection>
    </>
  );
}

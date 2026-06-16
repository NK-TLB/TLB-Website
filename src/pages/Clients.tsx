import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import PageSection from "../components/PageSection";
import SectionHeading from "../components/SectionHeading";
import ClientWall from "../components/ClientWall";
import { clientGroups } from "../data/site";

const sectorIcon: Record<string, string> = {
  Hospitality: "hotel",
  Healthcare: "shield",
};

const sectorDot: Record<string, string> = {
  Hospitality: "bg-brand-500",
  Healthcare: "bg-accent-500",
};

function ClientPartnerList({
  sector,
  items,
}: {
  sector: string;
  items: string[];
}) {
  return (
    <div className="accent-box-2xl mt-6 overflow-hidden">
      <div className="accent-box-2xl-inner overflow-hidden">
      <div className="flex items-center justify-between border-b border-brand-100/70 bg-gradient-to-r from-brand-50/50 to-white px-4 py-3 sm:px-5">
        <p className="eyebrow-label">
          Partner properties
        </p>
        <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-bold text-brand-700 ring-1 ring-brand-100">
          {items.length}
        </span>
      </div>

      <ul className="grid gap-2.5 p-3 sm:grid-cols-2 sm:p-4">
        {items.map((item, i) => (
          <Reveal key={item} delay={i * 35}>
          <li>
            <div className="accent-box-xl card-hover group h-full hover:-translate-y-0.5">
              <div className="accent-box-xl-inner flex h-full items-start gap-2.5 bg-gradient-to-br from-white to-brand-50/25 px-3 py-3">
              <span
                aria-hidden="true"
                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${sectorDot[sector] ?? "bg-brand-500"} ring-2 ring-white shadow-sm`}
              />
              <span className="min-w-0 text-sm font-semibold leading-snug text-ink-800 transition duration-200 group-hover:text-brand-800">
                {item}
              </span>
              </div>
            </div>
          </li>
          </Reveal>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <>
      <SEO
        path="/clients"
        title="Clients"
        description="The Laundry Bag serves leading hotels and resorts (Grand Hyatt, Taj Exotica, JW Marriott, Hilton, Novotel, Hyatt) and major hospitals (Tata Medical Center, Balco Medical Center, Lata Mangeshkar Hospital) across India."
      />

      <PageHero
        title="Who We Serve"
        description="Five-star hotels, luxury resorts and major hospitals trust The Laundry Bag with their linen every day."
        crumbs={[{ label: "Home", to: "/" }, { label: "Clients" }]}
      />

      <PageSection reveal={false}>
          <SectionHeading
            title="A wall of logos we're proud of"
            description="Five-star hotels, luxury resorts and major medical centres rely on The Laundry Bag for their linen and laundry."
          />
          <ClientWall className="mt-12" />
      </PageSection>

      <PageSection className="section-tint section" reveal={false}>
          <SectionHeading
            title="The hotels & hospitals that count on us daily"
            description="Across hospitality and healthcare, India's most demanding properties trust us with the linen their guests and patients touch every day."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {clientGroups.map((g, i) => (
              <Reveal key={g.sector} delay={i * 70}>
                <article className="frame-4xl group relative h-full">
                  <div className="frame-4xl-inner flex h-full flex-col">
                    <span aria-hidden="true" className="accent-hairline" />

                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                          <Icon
                            name={sectorIcon[g.sector] ?? "check"}
                            className="h-7 w-7"
                          />
                        </span>
                        <div>
                          <h3 className="h3">
                            {g.sector}
                          </h3>
                          <p className="mt-0.5 text-sm font-semibold text-brand-700">
                            {g.items.length} partner brands
                          </p>
                        </div>
                      </div>

                      <ClientPartnerList sector={g.sector} items={g.items} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
      </PageSection>
    </>
  );
}

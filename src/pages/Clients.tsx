import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ClientWall from "../components/ClientWall";
import { clientGroups } from "../data/site";

const sectorIcon: Record<string, string> = {
  Hospitality: "hotel",
  Healthcare: "shield",
};

const sectorAccent: Record<string, string> = {
  Hospitality: "from-brand-400/80 via-brand-500 to-brand-600",
  Healthcare: "from-accent-400/80 via-accent-500 to-accent-600",
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
    <div className="mt-6 overflow-hidden rounded-2xl border border-brand-100/70 bg-white shadow-sm ring-1 ring-brand-50/80">
      <div className="flex items-center justify-between border-b border-brand-100/70 bg-gradient-to-r from-brand-50/50 to-white px-4 py-3 sm:px-5">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-700">
          Partner properties
        </p>
        <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-bold text-brand-700 ring-1 ring-brand-100">
          {items.length}
        </span>
      </div>

      <ul className="grid gap-2.5 p-3 sm:grid-cols-2 sm:p-4">
        {items.map((item) => (
          <li key={item}>
            <div className="group flex h-full items-start gap-2.5 rounded-xl border border-brand-100/60 bg-gradient-to-br from-white to-brand-50/25 px-3 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft">
              <span
                aria-hidden="true"
                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${sectorDot[sector] ?? "bg-brand-500"} ring-2 ring-white shadow-sm`}
              />
              <span className="min-w-0 text-sm font-semibold leading-snug text-ink-800 transition duration-200 group-hover:text-brand-800">
                {item}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Clients() {
  return (
    <>
      <SEO
        path="/clients"
        title="Clients, hotels, resorts & hospitals we serve"
        description="The Laundry Bag serves leading hotels and resorts (Grand Hyatt, Taj Exotica, JW Marriott, Hilton, Novotel, Hyatt) and major hospitals (Tata Medical Center, Balco Medical Center, Lata Mangeshkar Hospital) across India."
      />

      <PageHero
        eyebrow="Our clients"
        title="Who We Serve"
        crumbs={[{ label: "Home", to: "/" }, { label: "Clients" }]}
      />

      {/* Logo wall */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Brands that trust us"
            title="A wall of logos we're proud of"
            description="Five-star hotels, luxury resorts and major medical centres rely on The Laundry Bag for their linen and laundry."
          />
          <Reveal className="mt-12">
            <ClientWall />
          </Reveal>
        </div>
      </section>

      {/* Client groups */}
      <section className="section-tint section">
        <div className="container-page">
          <SectionHeading
            eyebrow="By sector"
            title="The hotels & hospitals that count on us daily"
            description="Across hospitality and healthcare, India's most demanding properties trust us with the linen their guests and patients touch every day."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {clientGroups.map((g, i) => (
              <Reveal key={g.sector} delay={i * 70}>
                <article className="group relative h-full overflow-hidden rounded-[2rem] p-[1.5px] shadow-lift">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-brand-gradient opacity-90"
                  />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(2rem-1.5px)] border border-white/70 bg-white">
                    <span
                      aria-hidden="true"
                      className={`block h-1.5 bg-gradient-to-r ${sectorAccent[g.sector] ?? "from-brand-400 to-brand-600"}`}
                    />

                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                          <Icon
                            name={sectorIcon[g.sector] ?? "check"}
                            className="h-7 w-7"
                          />
                        </span>
                        <div>
                          <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
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
        </div>
      </section>
    </>
  );
}

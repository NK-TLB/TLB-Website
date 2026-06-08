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
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {clientGroups.map((g, i) => (
              <Reveal key={g.sector} delay={i * 70}>
                <article className="card card-hover group h-full">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                      <Icon
                        name={sectorIcon[g.sector] ?? "check"}
                        className="h-7 w-7"
                      />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink-900">
                        {g.sector}
                      </h3>
                      <p className="text-sm font-medium text-ink-500">
                        {g.items.length} partner brands
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-brand-100 bg-brand-50/60 px-3.5 py-1.5 text-sm font-semibold text-brand-800 transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white hover:shadow-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

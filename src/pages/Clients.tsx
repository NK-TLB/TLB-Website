import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ClientWall from "../components/ClientWall";
import PressTeaser from "../components/PressStrip";
import { clientGroups, ratings, testimonials } from "../data/site";

const sectorIcon: Record<string, string> = {
  Hospitality: "hotel",
  Healthcare: "shield",
};

export default function Clients() {
  return (
    <>
      <SEO
        path="/clients"
        title="Clients & Press — hotels, resorts & hospitals"
        description="The Laundry Bag serves leading hotels and resorts (Grand Hyatt, Taj Exotica, JW Marriott, Hilton, Novotel, Hyatt) and major hospitals (Tata Medical Center, Balco Medical Center, Lata Mangeshkar Hospital), and has been featured in YourStory and Startup Buzz."
      />

      <PageHero
        eyebrow="Clients & Press"
        title="Trusted by India's leading hotels & hospitals"
        description="From five-star hotels and luxury resorts to large medical centres — here are some of the institutions that count on The Laundry Bag, and the press that has covered our journey."
        crumbs={[{ label: "Home", to: "/" }, { label: "Clients & Press" }]}
      />

      {/* Rating cards */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2">
            {ratings.map((r, i) => (
              <Reveal key={r.source} delay={i * 80}>
                <article className="card flex h-full items-center gap-5">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <Icon name="star" className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-extrabold text-ink-900">
                      {r.score}
                      {r.scale && <span className="text-base text-ink-400"> / {r.scale}</span>}
                    </p>
                    <p className="text-sm font-semibold text-ink-700">{r.source}</p>
                    <p className="text-xs text-ink-500">{r.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <SectionHeading eyebrow="Our clients" title="A few of the businesses that trust us" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {clientGroups.map((g, i) => (
              <Reveal key={g.sector} delay={i * 70}>
                <article className="card h-full">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky2-50 text-sky2-600">
                      <Icon name={sectorIcon[g.sector] ?? "check"} />
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink-900">{g.sector}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-ink-50 px-3.5 py-1.5 text-sm font-semibold text-ink-700"
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

      {/* Press teaser */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="As featured in"
            title="Recognised by government & the press"
            description="A skill-development MoU with the Government of Chhattisgarh, national media coverage and moments with India's industry leaders."
          />
          <Reveal className="mt-12">
            <PressTeaser />
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <SectionHeading eyebrow="Customer love" title="What our customers say" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <figure className="card h-full">
                  <div className="flex gap-1 text-brand-400">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm italic text-ink-700">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-700">
                    — {t.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Link to="/contact" className="btn-primary">
              Become a client
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

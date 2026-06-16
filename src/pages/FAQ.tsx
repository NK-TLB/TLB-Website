import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { faqs, site } from "../data/site";

const categoryIcon: Record<string, string> = {
  "Working with hotels & hospitals": "hotel",
  "Linen rental & management": "tag",
  "Operations, quality & getting started": "spark",
  "About the founder": "users",
};

const categoryLabel: Record<string, string> = {
  "Working with hotels & hospitals": "Hotels & hospitals",
  "Linen rental & management": "Linen rental",
  "Operations, quality & getting started": "Operations & getting started",
  "About the founder": "Founder",
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Hidden from FAQ UI — data kept in `faqs` for schema / future use. */
const HIDDEN_FAQ_CATEGORIES = new Set(["About the founder"]);
const visibleFaqs = faqs.filter((g) => !HIDDEN_FAQ_CATEGORIES.has(g.category));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <>
      <SEO
        path="/faq"
        title="FAQ"
        description="Answers about working with hotels and hospitals, on-premise vs off-site laundry, linen rental & management, infection-safe processing, turnaround times and getting started with The Laundry Bag."
        schema={faqSchema}
      />

      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Answers on working with us, our laundry models, quality standards and getting started."
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />

      <section className="section-tint section">
        <div className="container-page max-w-5xl">
          <SectionHeading
            eyebrow="Browse by topic"
            title="Find the answer you need"
            description="Each topic has its own section below — open any question to read the answer."
            align="left"
            showRule={false}
          />

          <div className="mt-10 space-y-8">
            {visibleFaqs.map((g, gi) => (
              <Reveal key={g.category} delay={gi * 60}>
                <article
                  id={slugify(g.category)}
                  className="accent-border relative scroll-mt-28 overflow-hidden rounded-[2rem] shadow-lift"
                >
                  <div className="accent-border-2rem-inner">
                    <span aria-hidden="true" className="accent-hairline" />

                    <div className="flex items-start gap-4 border-b border-brand-100/60 px-5 py-4 sm:px-7 sm:py-5">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm ring-1 ring-white/20">
                        <Icon
                          name={categoryIcon[g.category] ?? "spark"}
                          className="h-5 w-5"
                        />
                      </span>
                      <div className="min-w-0">
                        <h2 className="font-display text-lg font-bold tracking-tight text-ink-900 sm:text-xl">
                          {categoryLabel[g.category] ?? g.category}
                        </h2>
                        <p className="mt-1 text-sm text-ink-500">
                          {g.items.length}{" "}
                          {g.items.length === 1 ? "question" : "questions"}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 p-4 sm:p-5 sm:pt-4">
                      {g.items.map((item, ii) => {
                        const key = `${gi}-${ii}`;
                        const isOpen = openKey === key;
                        return (
                          <div
                            key={key}
                            className="accent-box-2xl overflow-hidden transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                          >
                            <div
                              className={`accent-box-2xl-inner overflow-hidden ${
                                isOpen ? "bg-brand-50/30" : ""
                              }`}
                            >
                            <button
                              type="button"
                              onClick={() => setOpenKey(isOpen ? null : key)}
                              className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-5"
                              aria-expanded={isOpen}
                            >
                              <span className="flex min-w-0 items-start gap-3">
                                <span
                                  aria-hidden="true"
                                  className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-display text-[0.65rem] font-extrabold transition duration-300 ${
                                    isOpen
                                      ? "bg-brand-gradient text-white"
                                      : "bg-brand-50 text-brand-400 ring-1 ring-brand-100"
                                  }`}
                                >
                                  {ii + 1}
                                </span>
                                <span
                                  className={`text-[0.9375rem] font-semibold leading-snug sm:text-base ${
                                    isOpen ? "text-brand-800" : "text-ink-900"
                                  }`}
                                >
                                  {item.q}
                                </span>
                              </span>
                              <span
                                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                                  isOpen
                                    ? "bg-brand-gradient text-white"
                                    : "bg-brand-50 text-brand-600 ring-1 ring-brand-100"
                                }`}
                              >
                                <Chevron open={isOpen} />
                              </span>
                            </button>

                            <div
                              className={`grid transition-all duration-300 ${
                                isOpen
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                            >
                              <div className="overflow-hidden">
                                <p className="border-t border-brand-100/60 px-4 pb-4 pt-3 text-sm leading-relaxed text-ink-600 sm:px-5 sm:pl-[3.25rem] sm:text-[0.9375rem]">
                                  {item.a}
                                </p>
                              </div>
                            </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-900 to-brand-950 shadow-lift">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-ink-mesh opacity-25"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent-400/15 blur-3xl"
              />

              <div className="relative grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12">
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-brand-300 backdrop-blur-md">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
                    Speak with our team
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                    Share your requirements and we will advise on the right laundry
                    or linen solution for your property.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:min-w-[13rem]">
                  <Link
                    to="/contact"
                    className="btn-primary justify-center whitespace-nowrap"
                  >
                    Contact us
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                  <a
                    href={`tel:+91${site.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                  >
                    <Icon name="phone" className="h-4 w-4" />
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

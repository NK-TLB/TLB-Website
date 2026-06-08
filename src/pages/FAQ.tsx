import { useEffect, useState } from "react";
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
};

const categoryLabel: Record<string, string> = {
  "Working with hotels & hospitals": "Hotels & hospitals",
  "Linen rental & management": "Linen rental",
  "Operations, quality & getting started": "Operations & getting started",
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const totalQuestions = faqs.reduce((n, g) => n + g.items.length, 0);

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

function groupIndexFromHash(): number {
  const hash = window.location.hash.slice(1);
  if (!hash) return 0;
  const idx = faqs.findIndex((g) => slugify(g.category) === hash);
  return idx >= 0 ? idx : 0;
}

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
  const [activeGroup, setActiveGroup] = useState(0);
  const [openKey, setOpenKey] = useState<string | null>("0-0");

  useEffect(() => {
    const syncFromHash = () => {
      const idx = groupIndexFromHash();
      setActiveGroup(idx);
      setOpenKey(`${idx}-0`);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const selectGroup = (gi: number) => {
    setActiveGroup(gi);
    setOpenKey(`${gi}-0`);
    window.history.replaceState(null, "", `#${slugify(faqs[gi].category)}`);
  };

  const group = faqs[activeGroup];

  return (
    <>
      <SEO
        path="/faq"
        title="Frequently Asked Questions"
        description="Answers about working with hotels and hospitals, on-premise vs off-site laundry, linen rental & management, infection-safe processing, turnaround times and getting started with The Laundry Bag."
        schema={faqSchema}
      />

      <PageHero
        eyebrow="Help centre"
        title="Frequently asked questions"
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />

      <section className="section-tint section">
        <div className="container-page max-w-5xl">
          <SectionHeading
            eyebrow="Browse by topic"
            title="Find the answer you need"
            description="Select a topic, then open any question below."
            align="left"
            showRule={false}
          />

          <Reveal className="mt-10">
            <article className="relative overflow-hidden rounded-[2rem] p-[1.5px] shadow-lift">
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-brand-gradient opacity-90"
              />
              <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] border border-white/70 bg-white">
                <span aria-hidden="true" className="block h-1.5 bg-brand-gradient" />

                {/* Mobile topic pills */}
                <div className="border-b border-brand-100/70 bg-gradient-to-r from-brand-50/50 to-white p-4 lg:hidden">
                  <nav
                    aria-label="FAQ topics"
                    className="flex gap-2 overflow-x-auto pb-0.5"
                    role="tablist"
                  >
                    {faqs.map((g, gi) => {
                      const isActive = activeGroup === gi;
                      return (
                        <button
                          key={g.category}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => selectGroup(gi)}
                          className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition duration-200 ${
                            isActive
                              ? "border-brand-300 bg-brand-gradient text-white shadow-sm"
                              : "border-brand-100 bg-white text-ink-700 hover:border-brand-200"
                          }`}
                        >
                          <Icon
                            name={categoryIcon[g.category] ?? "spark"}
                            className="h-3.5 w-3.5"
                          />
                          {categoryLabel[g.category] ?? g.category}
                        </button>
                      );
                    })}
                  </nav>
                </div>

                <div className="grid lg:grid-cols-[15rem_minmax(0,1fr)]">
                  {/* Desktop sidebar */}
                  <aside className="hidden border-r border-brand-100/70 bg-gradient-to-b from-brand-50/40 to-white p-5 lg:block">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-600">
                      Topics
                    </p>
                    <nav
                      aria-label="FAQ topics"
                      className="mt-4 space-y-1"
                      role="tablist"
                    >
                      {faqs.map((g, gi) => {
                        const isActive = activeGroup === gi;
                        return (
                          <button
                            key={g.category}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`faq-panel-${gi}`}
                            id={`faq-tab-${gi}`}
                            onClick={() => selectGroup(gi)}
                            className={`relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition duration-200 ${
                              isActive
                                ? "bg-white shadow-soft ring-1 ring-brand-100/80"
                                : "hover:bg-white/80"
                            }`}
                          >
                            {isActive && (
                              <span
                                aria-hidden="true"
                                className="absolute inset-y-2 left-0 w-1 rounded-full bg-brand-gradient"
                              />
                            )}
                            <span
                              className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition duration-200 ${
                                isActive
                                  ? "bg-brand-gradient text-white shadow-sm"
                                  : "bg-brand-50 text-brand-600 ring-1 ring-brand-100"
                              }`}
                            >
                              <Icon
                                name={categoryIcon[g.category] ?? "spark"}
                                className="h-4 w-4"
                              />
                            </span>
                            <span className="min-w-0">
                              <span
                                className={`block text-sm font-semibold leading-snug ${
                                  isActive ? "text-brand-800" : "text-ink-800"
                                }`}
                              >
                                {categoryLabel[g.category] ?? g.category}
                              </span>
                              <span className="mt-0.5 block text-[0.68rem] text-ink-500">
                                {g.items.length} questions
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </nav>

                    <p className="mt-6 border-t border-brand-100/70 pt-4 text-xs leading-relaxed text-ink-500">
                      {totalQuestions} answers across {faqs.length} topics
                    </p>
                  </aside>

                  {/* Accordion panel */}
                  <div
                    id={slugify(group.category)}
                    role="tabpanel"
                    aria-labelledby={`faq-tab-${activeGroup}`}
                    className="min-w-0 scroll-mt-28"
                  >
                    <div className="border-b border-brand-100/60 px-5 py-4 sm:px-7 lg:py-5">
                      <h2 className="font-display text-lg font-bold tracking-tight text-ink-900 sm:text-xl">
                        {categoryLabel[group.category] ?? group.category}
                      </h2>
                      <p className="mt-1 text-sm text-ink-500 lg:hidden">
                        {group.items.length}{" "}
                        {group.items.length === 1 ? "question" : "questions"}
                      </p>
                    </div>

                    <div className="space-y-2 p-4 sm:p-5 sm:pt-4">
                      {group.items.map((item, ii) => {
                        const key = `${activeGroup}-${ii}`;
                        const isOpen = openKey === key;
                        return (
                          <div
                            key={key}
                            className={`overflow-hidden rounded-2xl border transition duration-300 ${
                              isOpen
                                ? "border-brand-200/80 bg-brand-50/30 shadow-sm"
                                : "border-brand-100/70 bg-white hover:border-brand-200/80"
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
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-ink-950 shadow-lift">
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

import { useState } from "react";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { faqs } from "../data/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>("0-0");

  return (
    <>
      <SEO
        path="/faq"
        title="Frequently Asked Questions"
        description="Answers about your first order, dry cleaning, wash-tumble-dry-fold, turnaround times, stains and more from The Laundry Bag."
        schema={faqSchema}
      />

      <PageHero
        eyebrow="Help centre"
        title="Frequently asked questions"
        description="Everything about your first order, dry cleaning, and our wash, tumble-dry & fold service. Can't find an answer? Call us on (+91) 8085990015."
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />

      <section className="section">
        <div className="container-page max-w-3xl">
          {faqs.map((group, gi) => (
            <div key={group.category} className={gi > 0 ? "mt-12" : ""}>
              <h2 className="font-display text-xl font-bold text-ink-900">
                {group.category}
              </h2>
              <div className="mt-5 space-y-3">
                {group.items.map((item, ii) => {
                  const key = `${gi}-${ii}`;
                  const isOpen = openKey === key;
                  return (
                    <Reveal key={key} delay={ii * 30}>
                      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft">
                        <button
                          type="button"
                          onClick={() => setOpenKey(isOpen ? null : key)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-ink-900">{item.q}</span>
                          <svg
                            viewBox="0 0 24 24"
                            className={`h-5 w-5 shrink-0 text-brand-500 transition-transform ${
                              isOpen ? "rotate-45" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            aria-hidden="true"
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </button>
                        <div
                          className={`grid transition-all duration-300 ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="px-5 pb-5 text-sm leading-relaxed text-ink-600">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

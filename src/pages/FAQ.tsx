import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import { faqs, site } from "../data/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <SEO
        path="/faq"
        title="FAQ — Laundry pickup, pricing &amp; turnaround"
        description="Answers to common questions about The LaundryBag (TLB) — how pickup works, turnaround time, pricing, dry cleaning, and our Raipur flagship location."
        schema={faqSchema}
      />
      <PageHero
        eyebrow="Help"
        title="Frequently asked questions."
        description="Everything you might want to know about how we pick up, clean and return your laundry."
      />

      <section className="section">
        <div className="container-page max-w-3xl">
          <ul className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-soft">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-bold text-ink-900 sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition ${
                        isOpen ? "rotate-45 bg-brand-50 text-brand-700" : ""
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-ink-600">{f.a}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-10 rounded-2xl bg-brand-50 p-6 text-center">
            <h3 className="h3">Still have questions?</h3>
            <p className="mt-2 text-ink-600">
              Our team usually replies within a few hours.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                Contact us
              </Link>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import { faqs } from "../data/site";

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((g) =>
      g.items.map((q) => ({
        "@type": "Question",
        name: q.q,
        acceptedAnswer: { "@type": "Answer", text: q.a },
      })),
    ),
  };

  return (
    <>
      <SEO
        path="/faq"
        title="Frequently Asked Questions"
        description="Common questions about The Laundry Bag — pickup &amp; delivery, turnaround, dry cleaning, wash and fold, damage policy and more."
        schema={faqSchema}
      />
      <div className="breadcrumb-strip">
        <div className="container-page py-3 text-xs text-ink-500">
          <Link to="/" className="hover:text-brand-700">Home</Link>{" "}
          <span className="mx-2">/</span>{" "}
          <span className="text-ink-700">FAQ</span>
        </div>
      </div>

      <PageHero
        eyebrow="Help & support"
        title="Frequently Asked Questions"
        description="We make doing your laundry simple. We can save your time, so you can enjoy doing the things you love. We can save you money on soap, water, heating and electricity — so you can enjoy even more of the things you love. Our prices are simple and affordable."
      />

      {faqs.map((group) => (
        <section key={group.category} className="section">
          <div className="container-page">
            <h2 className="title-underline-left">{group.category}</h2>
            <div className="mt-8 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-soft">
              {group.items.map((item) => (
                <details
                  key={item.q}
                  className="group px-5 py-4 sm:px-6 sm:py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-base font-semibold text-ink-900 sm:text-lg">
                    {item.q}
                    <span className="ml-4 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700 sm:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

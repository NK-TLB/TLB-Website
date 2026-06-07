import Reveal from "./Reveal";
import { timeline } from "../data/site";

/**
 * Brand-story timeline. A single brand-gradient spine with alternating cards on
 * desktop and a clean single column on mobile.
 */
export default function Timeline() {
  return (
    <div className="relative mx-auto mt-12 max-w-4xl">
      {/* Spine */}
      <span
        aria-hidden="true"
        className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-400 via-sky2-400 to-accent-400 md:left-1/2 md:-translate-x-1/2"
      />

      <ol className="space-y-8 md:space-y-12">
        {timeline.map((t, i) => {
          const right = i % 2 === 1;
          return (
            <Reveal key={t.title} delay={i * 70}>
              <li className="relative md:grid md:grid-cols-2 md:gap-12">
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-6 z-10 inline-flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-brand-gradient ring-4 ring-white md:left-1/2"
                />
                <div
                  className={`pl-12 md:pl-0 ${
                    right
                      ? "md:col-start-2 md:pl-12"
                      : "md:col-start-1 md:pr-12 md:text-right"
                  }`}
                >
                  <div className="rounded-4xl border border-ink-100 bg-white p-6 shadow-soft transition hover:shadow-lift">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-600">
                      {t.year}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink-900">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {t.text}
                    </p>
                  </div>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}

import Reveal from "./Reveal";
import { timeline } from "../data/site";

/**
 * Brand-story timeline — gradient spine, year medallions, and card-hover
 * milestones that alternate on desktop and stack cleanly on mobile.
 */
export default function Timeline() {
  const lastIndex = timeline.length - 1;

  return (
    <div className="relative mx-auto mt-14 max-w-5xl">
      <span
        aria-hidden="true"
        className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-brand-200 via-brand-500 to-accent-400 md:left-1/2 md:-translate-x-1/2"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-5 top-4 w-3 -translate-x-1/2 bg-brand-400/15 blur-md md:left-1/2"
      />

      <ol className="relative space-y-10 md:space-y-16">
        {timeline.map((t, i) => {
          const right = i % 2 === 1;
          const isLast = i === lastIndex;

          return (
            <Reveal key={t.title} delay={i * 80}>
              <li className="relative md:grid md:grid-cols-2 md:gap-16">
                {/* Year medallion on the spine */}
                <div className="absolute left-5 top-7 z-20 md:left-1/2 md:top-8 md:-translate-x-1/2">
                  <span
                    className={`inline-flex min-w-[3.25rem] items-center justify-center rounded-full px-3.5 py-1.5 text-xs font-bold shadow-soft ring-4 ring-[rgb(var(--page-bg))] ${
                      isLast
                        ? "bg-brand-gradient text-white"
                        : "border border-brand-200/80 bg-white text-brand-700"
                    }`}
                  >
                    {t.year}
                  </span>
                </div>

                <div
                  className={`pl-14 md:pl-0 ${
                    right
                      ? "md:col-start-2 md:pl-14"
                      : "md:col-start-1 md:pr-14 md:text-right"
                  }`}
                >
                  <article
                    className={`card card-hover group relative overflow-hidden ${
                      isLast
                        ? "border-brand-300/70 bg-gradient-to-br from-white via-white to-brand-50/50"
                        : ""
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 top-0 h-1 bg-brand-gradient ${
                        isLast ? "opacity-100" : "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition duration-300 ${
                        isLast
                          ? "bg-brand-200/40"
                          : "bg-brand-100/30 group-hover:bg-brand-200/40"
                      } ${right ? "md:-left-10 md:right-auto" : ""}`}
                    />

                    <div className={`relative ${right ? "md:text-left" : "md:text-right"}`}>
                      <h3 className="font-display text-xl font-bold text-ink-900 sm:text-[1.35rem]">
                        {t.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-600">
                        {t.text}
                      </p>
                    </div>
                  </article>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}

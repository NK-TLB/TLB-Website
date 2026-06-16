import Reveal from "./Reveal";
import { timeline } from "../data/site";

/**
 * Brand-story timeline — centre spine with integrated year badges and
 * alternating cards on desktop.
 */
export default function Timeline() {
  const lastIndex = timeline.length - 1;

  return (
    <div className="relative mx-auto mt-14 max-w-5xl">
      {/* Vertical spine — aligned to badge centres (left-5 / md:centre) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-5 top-6 z-0 -translate-x-1/2 md:bottom-8 md:left-1/2 md:top-8"
      >
        <span className="absolute inset-y-0 -left-1.5 w-4 bg-brand-400/10 blur-lg" />
        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-brand-200/90 via-brand-400/80 to-accent-400/70" />
        <span className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-300/35 via-brand-500/45 to-brand-400/30" />
        <span className="absolute inset-y-2 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-white/70 via-white/25 to-transparent opacity-60" />
      </div>

      <ol className="relative z-10 space-y-10 md:space-y-16">
        {timeline.map((t, i) => {
          const right = i % 2 === 1;
          const isLast = i === lastIndex;

          return (
            <Reveal key={t.title} delay={i * 80}>
              <li className="relative md:grid md:grid-cols-2 md:gap-16">
                {/* Year badge — centred on spine */}
                <div className="absolute left-5 top-7 z-20 -translate-x-1/2 md:left-1/2 md:top-8">
                  {/* Desktop bridge toward the card */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-1/2 hidden h-px -translate-y-1/2 md:block ${
                      right
                        ? "left-[calc(100%+0.35rem)] w-10 bg-gradient-to-r from-brand-400/55 via-brand-300/25 to-transparent"
                        : "right-[calc(100%+0.35rem)] w-10 bg-gradient-to-l from-brand-400/55 via-brand-300/25 to-transparent"
                    }`}
                  />
                  {/* Mobile bridge toward the card */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-px w-5 -translate-y-1/2 bg-gradient-to-r from-brand-400/50 to-brand-300/15 md:hidden"
                  />

                  <span
                    className={`relative inline-flex min-w-[3.5rem] items-center justify-center rounded-full px-4 py-2 text-xs font-bold tracking-wide shadow-[0_6px_24px_-10px_rgb(var(--shadow-rgb)/0.4)] ring-[4px] ring-[rgb(var(--page-bg))] ${
                      isLast
                        ? "border border-brand-400/90 bg-gradient-to-br from-white via-brand-50 to-brand-100/80 text-brand-800"
                        : "border border-brand-300/80 bg-white text-brand-800"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
                    />
                    {isLast && (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-full bg-brand-gradient opacity-[0.07]"
                      />
                    )}
                    <span className="relative">{t.year}</span>
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
                        isLast
                          ? "opacity-100"
                          : "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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

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
        <span className="absolute inset-y-0 -left-1.5 w-4 bg-brand-500/20 blur-lg" />
        <span className="section-separator-v" />
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
                    className={`absolute top-1/2 hidden h-[2px] -translate-y-1/2 md:block ${
                      right
                        ? "left-[calc(100%+0.35rem)] w-10 accent-line-h-r"
                        : "right-[calc(100%+0.35rem)] w-10 accent-line-h-l"
                    }`}
                  />
                  {/* Mobile bridge toward the card */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-[2px] w-5 -translate-y-1/2 accent-line-h-r md:hidden"
                  />

                  <span
                    className="accent-border relative inline-flex min-w-[3.5rem] rounded-full shadow-[0_6px_24px_-10px_rgb(var(--shadow-rgb)/0.4)] ring-[4px] ring-[rgb(var(--page-bg))]"
                  >
                    <span
                      className={`relative inline-flex min-w-[3.5rem] items-center justify-center rounded-full px-4 py-2 text-xs font-bold tracking-wide text-brand-800 ${
                        isLast
                          ? "bg-gradient-to-br from-white via-brand-50 to-brand-100/80"
                          : "bg-white"
                      }`}
                    >
                      <span aria-hidden="true" className="accent-hairline" />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-1 rounded-full bg-brand-500/25 blur-[3px]"
                      />
                      {isLast && (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 rounded-full bg-brand-800/10"
                        />
                      )}
                      <span className="relative">{t.year}</span>
                    </span>
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
                    className={`card card-hover group relative h-full overflow-hidden ${
                      isLast ? "card-fill-brand" : ""
                    }`}
                  >
                    <div className="card-inner p-6 sm:p-8">
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 top-0 h-[2px] accent-line-h ${
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

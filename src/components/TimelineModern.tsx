import Reveal from "./Reveal";
import { timeline } from "../data/site";

const BRAND = "The Laundry Bag™";

const bodyClass =
  "font-display text-lg leading-snug tracking-tight sm:text-xl lg:text-[1.35rem]";

/** Renders milestone copy with only the brand name in bold. */
function BrandHighlightText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(BRAND);

  return (
    <span className={`${bodyClass} ${className}`}>
      {parts.map((part, i) => (
        <span key={i}>
          <span className="font-normal text-ink-700">{part}</span>
          {i < parts.length - 1 && (
            <span className="font-extrabold text-ink-900">{BRAND}</span>
          )}
        </span>
      ))}
    </span>
  );
}

/**
 * Modern centre-spine timeline — year nodes on a gradient spine, horizontal
 * connectors into alternating cards. Brand name highlighted in each milestone.
 */
export default function TimelineModern() {
  const lastIndex = timeline.length - 1;

  return (
    <div className="relative mx-auto mt-14 max-w-5xl">
      {/* Ambient glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-200/25 blur-3xl"
      />

      {/* Vertical spine */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-5 top-8 z-0 -translate-x-1/2 md:bottom-10 md:left-1/2 md:top-10"
      >
        <span className="absolute inset-y-0 -left-2 w-4 bg-brand-500/20 blur-lg" />
        <span className="section-separator-v" />
      </div>

      <ol className="relative z-10 space-y-10 md:space-y-16">
        {timeline.map((t, i) => {
          const right = i % 2 === 1;
          const isLast = i === lastIndex;

          return (
            <Reveal
              as="li"
              key={t.title}
              delay={i * 65}
              className="relative md:grid md:grid-cols-2 md:items-center md:gap-14 lg:gap-20"
            >
                {/* Year node on spine */}
                <div className="absolute left-5 top-7 z-20 -translate-x-1/2 md:left-1/2 md:top-8">
                  <span
                    aria-hidden="true"
                    className={`absolute top-1/2 hidden h-[2px] -translate-y-1/2 md:block ${
                      right
                        ? "left-[calc(100%+0.35rem)] w-14 accent-line-h-r"
                        : "right-[calc(100%+0.35rem)] w-14 accent-line-h-l"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-y-1/2 accent-line-h-r md:hidden"
                  />

                  <span className="accent-border relative inline-flex rounded-full shadow-[0_10px_32px_-14px_rgb(var(--shadow-rgb)/0.5)] ring-[6px] ring-[rgb(var(--page-bg))]">
                    <span
                      className={`relative inline-flex min-w-[4.5rem] items-center justify-center rounded-full px-4 py-2.5 font-display text-xs font-extrabold tracking-wide sm:min-w-[5rem] sm:text-sm ${
                        isLast
                          ? "bg-brand-gradient text-white"
                          : "bg-white text-brand-800"
                      }`}
                    >
                      <span aria-hidden="true" className="accent-hairline" />
                      {!isLast && (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-1 rounded-full bg-brand-500/25 blur-[5px]"
                        />
                      )}
                      <span className="relative whitespace-nowrap">{t.year}</span>
                    </span>
                  </span>
                </div>

                {/* Milestone card */}
                <div
                  className={`pl-[3.75rem] md:pl-0 ${
                    right
                      ? "md:col-start-2 md:pl-12 lg:pl-16"
                      : "md:col-start-1 md:pr-12 md:text-right lg:pr-16"
                  }`}
                >
                  <article
                    className={`card card-hover group relative h-full overflow-hidden transition duration-300 ${
                      isLast ? "card-fill-brand shadow-lift" : "hover:shadow-lift"
                    }`}
                  >
                    <div className="card-inner bg-white/95 p-6 backdrop-blur-sm sm:p-7 lg:p-8">
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-0 top-0 h-[3px] accent-line-h ${
                          isLast
                            ? "opacity-100"
                            : "opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                        }`}
                      />
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl transition duration-500 ${
                          isLast
                            ? "bg-brand-200/50"
                            : "bg-brand-100/40 group-hover:bg-brand-200/50"
                        } ${right ? "md:-left-10 md:right-auto" : ""}`}
                      />

                      <div
                        className={`relative ${right ? "md:text-left" : "md:text-right"}`}
                      >
                        <h3 className="relative">
                          <BrandHighlightText text={t.title} />
                        </h3>
                        {t.text && (
                          <p
                            className={`relative mt-3 ${
                              right ? "md:mr-0" : "md:ml-auto md:max-w-lg"
                            }`}
                          >
                            <BrandHighlightText text={t.text} />
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}

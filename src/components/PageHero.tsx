import type { ReactNode } from "react";
import CenterOutLine from "./CenterOutLine";

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  crumbs?: Crumb[];
  /** Giant faint background word derived from eyebrow (default: false) */
  showWatermark?: boolean;
  /** Optional icon or illustration above the title (e.g. success checkmark). */
  icon?: ReactNode;
  /** Underline beneath the title — static bar, animated center-out rule, or none. */
  rule?: "static" | "center-out" | "none";
};

/** Floating soap bubbles, an on-brand laundry motif that drifts gently behind
 * the hero. Each bubble is a translucent sphere with a soft highlight. */
const BUBBLES = [
  { pos: "left-[8%] top-[20%]", size: "h-10 w-10", delay: "0s", dur: "7s" },
  { pos: "left-[18%] bottom-[24%]", size: "h-6 w-6", delay: "1.2s", dur: "9s" },
  { pos: "right-[12%] top-[26%]", size: "h-14 w-14", delay: "0.6s", dur: "8s" },
  { pos: "right-[22%] bottom-[20%]", size: "h-7 w-7", delay: "2s", dur: "10s" },
  { pos: "left-[40%] top-[12%]", size: "h-4 w-4", delay: "1.6s", dur: "6.5s" },
  { pos: "right-[38%] bottom-[14%]", size: "h-5 w-5", delay: "0.3s", dur: "8.5s" },
];

function Bubbles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className={`absolute ${b.pos} ${b.size} animate-float`}
          style={{ animationDelay: b.delay, animationDuration: b.dur }}
        >
          <span className="block h-full w-full rounded-full bg-gradient-to-br from-white/70 via-brand-100/40 to-brand-300/10 shadow-[0_8px_22px_-8px_rgb(var(--shadow-rgb)/0.3)] ring-1 ring-inset ring-white/70 backdrop-blur-[1px]" />
          <span className="absolute left-[22%] top-[18%] h-1/4 w-1/4 rounded-full bg-white/85 blur-[1px]" />
        </span>
      ))}
    </div>
  );
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  showWatermark = false,
  icon,
  rule = "static",
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-hero-radial" />
      <div
        aria-hidden="true"
        className="page-hero-grid pointer-events-none absolute inset-0 -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-ink-mesh opacity-30"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-8 -z-10 h-[22rem] w-[22rem] animate-hero-glow rounded-full bg-brand-400/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-28 -z-10 h-80 w-80 animate-hero-glow rounded-full bg-accent-400/20 blur-3xl [animation-delay:1.5s]"
      />

      <Bubbles />

      {eyebrow && showWatermark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[clamp(3rem,13vw,9rem)] font-extrabold uppercase leading-none tracking-tighter text-brand-500/[0.07]"
        >
          {eyebrow}
        </span>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[rgb(var(--page-bg))] to-transparent"
      />

      <div className="container-page relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center [perspective:1400px]">
          <div className="page-hero-card">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/70 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-brand-800 shadow-sm backdrop-blur">
                <span aria-hidden="true" className="relative flex h-2 w-2">
                  <span className="absolute -inset-0.5 rounded-full bg-brand-500/30 blur-[2px]" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-800 ring-2 ring-brand-300/80" />
                </span>
                {eyebrow}
              </span>
            )}

            {icon && <div className="mt-8 flex justify-center">{icon}</div>}

            <h1 className={`h1 ${icon ? "mt-5" : "mt-6"}`}>{title}</h1>

            {rule === "center-out" ? (
              <CenterOutLine
                fullWidth
                showDot
                className="mx-auto mt-6 max-w-sm sm:max-w-md"
                delayMs={650}
                durationMs={750}
              />
            ) : rule === "static" ? (
              <span
                aria-hidden="true"
                className="mx-auto mt-6 block h-[2px] w-20 rounded-full accent-line-h"
              />
            ) : null}

            {description && (
              <p className="lead mx-auto mt-6 max-w-2xl text-ink-600">
                {description}
              </p>
            )}

            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </div>

      {/* Static hero bottom separator */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[6%] bottom-0 z-10 h-[2px] accent-line-h sm:inset-x-[10%]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[6%] bottom-0 z-10 h-px accent-line-hairline-h sm:inset-x-[10%]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-400/70 ring-4 ring-[rgb(var(--page-bg))]"
      />
    </section>
  );
}

import type { ReactNode } from "react";
import CenterOutLine from "./CenterOutLine";
import Reveal from "./Reveal";

type Crumb = { label: string; to?: string };

type Props = {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  crumbs?: Crumb[];
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
  title,
  description,
  children,
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[rgb(var(--page-bg))] to-transparent"
      />

      <div className="container-page relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center [perspective:1400px]">
          <Reveal>
            <div className="page-hero-card">
              {icon && <div className="flex justify-center">{icon}</div>}

              <h1 className={`h1 ${icon ? "mt-5" : ""}`}>{title}</h1>

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
          </Reveal>
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

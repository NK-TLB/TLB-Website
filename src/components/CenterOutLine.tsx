import { useEffect, useRef, useState } from "react";
import {
  useScrollProgressThroughElement,
  type ScrollStrategy,
} from "../hooks/useScrollProgressThroughElement";

type Props = {
  /** 0–100; omit to auto-animate once when scrolled into view. */
  progress?: number;
  /** Max width of each half-line (CSS length). Ignored when `fullWidth`. */
  halfWidth?: string;
  /** Lines expand to % of container width (50% max each side). */
  fullWidth?: boolean;
  showDot?: boolean;
  /** Dark / inverted surface — adjusts dot ring colour. */
  invert?: boolean;
  /** Override dot ring utility classes. */
  dotRingClassName?: string;
  className?: string;
  durationMs?: number;
  /** Delay before the entrance animation starts (ms). */
  delayMs?: number;
  /** Tie line width to scroll — expands and collapses like the header separator. */
  scrollLinked?: boolean | ScrollStrategy;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Brand rule with a fixed centre dot and lines that grow outward.
 * Used under section headings, heroes, accordions, etc.
 */
export default function CenterOutLine({
  progress: controlledProgress,
  halfWidth = "1.75rem",
  fullWidth = false,
  showDot = true,
  invert = false,
  dotRingClassName,
  className = "",
  durationMs = 700,
  delayMs = 150,
  scrollLinked = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollStrategy: ScrollStrategy =
    scrollLinked === true ? "in-viewport" : scrollLinked || "in-viewport";
  const scrollProgress = useScrollProgressThroughElement(
    ref,
    scrollStrategy,
  );
  const scrollLinkedActive = Boolean(scrollLinked);
  const [revealProgress, setRevealProgress] = useState(() =>
    scrollLinkedActive || controlledProgress !== undefined
      ? 0
      : prefersReducedMotion()
        ? 100
        : 0,
  );

  useEffect(() => {
    if (scrollLinkedActive || controlledProgress !== undefined) return;
    if (prefersReducedMotion()) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let timeout = 0;
    let done = false;

    const animate = () => {
      let start = 0;
      const step = (t: number) => {
        if (!start) start = t;
        const p = Math.min((t - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setRevealProgress(eased * 100);
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (done) return;
        if (entries.some((e) => e.isIntersecting)) {
          done = true;
          io.disconnect();
          timeout = window.setTimeout(animate, delayMs);
        }
      },
      { threshold: 0.6, rootMargin: "0px 0px -5% 0px" },
    );

    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
      io.disconnect();
    };
  }, [controlledProgress, durationMs, delayMs, scrollLinkedActive]);

  const progress = scrollLinkedActive
    ? scrollProgress
    : (controlledProgress ?? revealProgress);

  // Drive the lines with `transform: scaleX` (GPU-composited, no layout) rather
  // than animating `width` (which forces layout + paint on every frame).
  const scale = Math.max(0, Math.min(1, progress / 100));
  const transition =
    fullWidth || scrollLinkedActive
      ? "transition-transform duration-100 ease-out"
      : "";
  const halfWidthValue = fullWidth ? "50%" : halfWidth;
  const lineHeight = fullWidth ? "h-[2px]" : "h-1";
  const dotRing =
    dotRingClassName ?? (invert ? "ring-white/20" : "ring-brand-300/80");

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative ${fullWidth ? "w-full" : ""} ${lineHeight} ${className}`}
    >
      {/* Footer-style sky-blue ambient glow at centre */}
      {showDot && (
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-md"
          aria-hidden="true"
        />
      )}

      <span
        className={`absolute top-1/2 right-1/2 ${lineHeight} rounded-l-full accent-line-h-l motion-reduce:transition-none ${transition}`}
        style={{
          width: halfWidthValue,
          transformOrigin: "right center",
          transform: `translateY(-50%) scaleX(${scale})`,
          willChange: scrollLinkedActive ? "transform" : undefined,
        }}
      />
      <span
        className={`absolute top-1/2 left-1/2 ${lineHeight} rounded-r-full accent-line-h-r motion-reduce:transition-none ${transition}`}
        style={{
          width: halfWidthValue,
          transformOrigin: "left center",
          transform: `translateY(-50%) scaleX(${scale})`,
          willChange: scrollLinkedActive ? "transform" : undefined,
        }}
      />

      {/* Footer-style centre hairline — brand-400/70 */}
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 h-px w-full max-w-[2.5rem] -translate-x-1/2 -translate-y-1/2 accent-line-hairline-h motion-reduce:transition-none"
        style={{ opacity: scale }}
      />

      {showDot && (
        <span className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2">
          <span className="relative flex h-1.5 w-1.5 items-center justify-center">
            <span className="absolute -inset-1 rounded-full bg-brand-500/30 blur-[3px]" />
            <span
              className={`relative h-1.5 w-1.5 rounded-full bg-brand-800 ring-[3px] ${dotRing}`}
            />
          </span>
        </span>
      )}
    </div>
  );
}

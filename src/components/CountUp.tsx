import { useEffect, useRef, useState } from "react";

type Props = {
  /** Formatted target, e.g. "5,00,000+", "15", "₹3,500". */
  value: string;
  durationMs?: number;
  className?: string;
};

// Splits "5,00,000+" -> { prefix: "", num: 500000, suffix: "+" } so we can
// animate the numeric part and re-format with Indian digit grouping.
function parse(value: string) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  if (!match) return null;
  const num = Number(match[2].replace(/,/g, ""));
  if (!Number.isFinite(num)) return null;
  return { prefix: match[1], num, suffix: match[3] };
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Counts up from 0 to the target the first time it scrolls into view. */
export default function CountUp({ value, durationMs = 1600, className }: Props) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => {
    if (!parsed) return value;
    // Respect reduced-motion by rendering the final value up-front (no animation).
    if (prefersReducedMotion())
      return `${parsed.prefix}${parsed.num.toLocaleString("en-IN")}${parsed.suffix}`;
    return `${parsed.prefix}0${parsed.suffix}`;
  });

  useEffect(() => {
    if (!parsed || prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let start = 0;
    const run = () => {
      const step = (t: number) => {
        if (!start) start = t;
        const p = Math.min((t - start) / durationMs, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        const current = Math.round(parsed.num * eased);
        setDisplay(`${parsed.prefix}${current.toLocaleString("en-IN")}${parsed.suffix}`);
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

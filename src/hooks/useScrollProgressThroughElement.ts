import { useEffect, useState, type RefObject } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export type ScrollStrategy =
  /** Best for heroes at the page top — 0 when visible, 100 when scrolled past. */
  | "past-top"
  /** Best for mid-page sections — 0 when entering viewport, 100 when leaving. */
  | "in-viewport";

/** 0–100 scroll progress for an element. */
export function useScrollProgressThroughElement(
  ref: RefObject<HTMLElement | null>,
  strategy: ScrollStrategy = "past-top",
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const el = ref.current;
      if (!el) return;

      const height = el.offsetHeight;
      if (height <= 0) return;

      if (prefersReducedMotion()) {
        setProgress(100);
        return;
      }

      const rect = el.getBoundingClientRect();
      let pct: number;

      if (strategy === "in-viewport") {
        const vh = window.innerHeight;
        const total = vh + height;
        const traveled = vh - rect.top;
        pct = total > 0 ? (traveled / total) * 100 : 0;
      } else {
        const scrolledPast = Math.max(0, -rect.top);
        pct = (scrolledPast / height) * 100;
      }

      // Round to whole percent so we only re-render when the value actually
      // changes — avoids a fresh float (and React re-render) on every frame.
      const next = Math.round(Math.min(100, Math.max(0, pct)));
      setProgress((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, strategy]);

  return progress;
}

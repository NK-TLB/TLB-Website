import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props<T extends ElementType = "div"> = {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the entrance animation runs once visible. */
  delay?: number;
  /** Render as a semantic element (e.g. `li` inside `ol`) instead of a wrapping `div`. */
  as?: T;
};

/**
 * Lightweight scroll-reveal wrapper. Fades + lifts its children into view the
 * first time they intersect the viewport. Respects prefers-reduced-motion via
 * the global CSS override.
 */
export default function Reveal<T extends ElementType = "div">({
  children,
  className = "",
  delay = 0,
  as,
}: Props<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref as never}
      className={`${className} transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** When true, scroll-reveals the whole section body as one block. Prefer reveal={false} with per-element Reveal wrappers. */
  reveal?: boolean;
  delay?: number;
  /** Decorative elements rendered inside the section but outside the reveal wrapper. */
  decorations?: ReactNode;
};

/**
 * Standard page section. By default children handle their own Reveal wrappers
 * (headings, cards, images). Set reveal for a single block entrance.
 */
export default function PageSection({
  children,
  className = "section",
  containerClassName = "container-page",
  reveal = false,
  delay = 0,
  decorations,
}: Props) {
  return (
    <section className={className}>
      {decorations}
      {reveal ? (
        <Reveal delay={delay}>
          <div className={containerClassName}>{children}</div>
        </Reveal>
      ) : (
        <div className={containerClassName}>{children}</div>
      )}
    </section>
  );
}

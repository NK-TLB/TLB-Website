import type { ReactNode } from "react";
import CenterOutLine from "./CenterOutLine";
import Reveal from "./Reveal";

type Props = {
  title?: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  invert?: boolean;
  showRule?: boolean;
  /** Slightly smaller, balanced type for longer statement-style titles. */
  prominent?: boolean;
  /** When false, heading is static (no scroll-reveal). Default true. */
  reveal?: boolean;
};

export default function SectionHeading({
  title,
  description,
  align = "center",
  invert = false,
  showRule = true,
  prominent = false,
  reveal = true,
}: Props) {
  const centered = align === "center";

  const content = (
    <>
      {title && (
        <h2
          className={`text-balance ${centered ? "mx-auto" : ""} ${
            prominent ? "h2-statement" : "h2 max-w-3xl"
          } ${invert ? "text-white" : ""}`}
        >
          {title}
        </h2>
      )}

      {showRule && (
        <CenterOutLine
          scrollLinked
          showDot
          invert={invert}
          halfWidth="2.25rem"
          className={`mt-6 w-24 sm:w-28 ${centered ? "mx-auto" : ""}`}
        />
      )}

      {description && (
        <p
          className={`mt-6 text-base leading-relaxed sm:text-lg ${
            invert ? "text-white/70" : "text-ink-500"
          } ${centered ? "mx-auto max-w-2xl" : ""}`}
        >
          {description}
        </p>
      )}
    </>
  );

  const className = centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  if (!reveal) {
    return <div className={className}>{content}</div>;
  }

  return <Reveal className={className}>{content}</Reveal>;
}

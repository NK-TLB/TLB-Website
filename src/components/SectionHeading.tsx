import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  invert?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
}: Props) {
  const centered = align === "center";
  return (
    <Reveal
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.25em] ${
            invert ? "text-white/60" : "text-brand-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`h2 ${eyebrow ? "mt-3" : ""} ${
          invert ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            invert ? "text-white/70" : "text-ink-500"
          } ${centered ? "mx-auto max-w-2xl" : ""}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

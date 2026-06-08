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
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] ${
            invert
              ? "border-white/15 bg-white/10 text-white/80"
              : "border-brand-200/70 bg-brand-50 text-brand-700"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${
              invert ? "bg-brand-300" : "bg-brand-500"
            }`}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={`h2 ${eyebrow ? "mt-5" : ""} ${
          invert ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-5 block h-1 w-14 rounded-full bg-brand-gradient ${
          centered ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            invert ? "text-white/70" : "text-ink-500"
          } ${centered ? "mx-auto max-w-2xl" : ""}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

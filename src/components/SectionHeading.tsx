import type { ReactNode } from "react";
import CenterOutLine from "./CenterOutLine";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  invert?: boolean;
  showRule?: boolean;
  /** Slightly smaller, balanced type for longer statement-style titles. */
  prominent?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  showRule = true,
  prominent = false,
}: Props) {
  const centered = align === "center";

  return (
    <Reveal
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] shadow-sm backdrop-blur ${
            invert
              ? "border-white/15 bg-white/10 text-white/80"
              : "border-brand-200/80 bg-white/70 text-brand-800"
          }`}
        >
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span
              className={`absolute -inset-0.5 rounded-full blur-[2px] ${
                invert ? "bg-brand-300/40" : "bg-brand-500/30"
              }`}
            />
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ring-2 ${
                invert
                  ? "bg-brand-300 ring-white/20"
                  : "bg-brand-800 ring-brand-300/80"
              }`}
            />
          </span>
          {eyebrow}
        </span>
      )}

      {title && (
        <h2
          className={`font-display font-extrabold text-ink-900 text-balance ${
            eyebrow ? "mt-6" : ""
          } ${centered ? "mx-auto" : ""} ${
            prominent
              ? "max-w-4xl text-[1.65rem] leading-snug sm:text-3xl lg:text-[2.35rem]"
              : "h2 max-w-3xl"
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
    </Reveal>
  );
}

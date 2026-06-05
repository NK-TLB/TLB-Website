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
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <span
          className={`eyebrow ${
            invert ? "border-white/30 bg-white/10 text-white" : ""
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`h2 ${eyebrow ? "mt-4" : ""} ${
          invert ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      <span
        className={`rule ${centered ? "" : "ml-0"}`}
        aria-hidden="true"
      />
      {description && (
        <p
          className={`lead mt-5 ${invert ? "text-white/80" : ""} ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

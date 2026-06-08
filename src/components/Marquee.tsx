import { useState } from "react";

type Item = string | { name: string; logo?: string; imgClass?: string };

type Props = {
  items: Item[];
  /** Seconds for one full loop. Higher = slower. Defaults to 60. */
  durationSeconds?: number;
};

function normalize(item: Item): { name: string; logo?: string; imgClass?: string } {
  return typeof item === "string" ? { name: item } : item;
}

/** A single marquee cell: shows the brand logo, falling back to a wordmark. */
function LogoCell({
  name,
  logo,
  imgClass,
}: {
  name: string;
  logo?: string;
  imgClass?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showLogo = logo && !failed;

  return (
    <span className="flex h-14 shrink-0 items-center justify-center px-7">
      {showLogo ? (
        // Each logo is bounded by the same max height AND width, so it scales
        // down to fit an identical box regardless of its aspect ratio, no
        // logo can render taller or wider than another.
        <img
          src={logo}
          alt={name}
          title={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`max-h-11 max-w-[150px] h-auto w-auto object-contain transition duration-300 hover:scale-105 ${imgClass ?? ""}`}
        />
      ) : (
        <span className="whitespace-nowrap font-display text-base font-semibold tracking-wide text-ink-400 transition hover:text-brand-600">
          {name}
        </span>
      )}
    </span>
  );
}

/** Infinite horizontal marquee of client/partner logos. */
export default function Marquee({ items, durationSeconds = 60 }: Props) {
  const normalized = items.map(normalize);
  const doubled = [...normalized, ...normalized];

  return (
    <div className="marquee-mask relative overflow-hidden">
      <div
        className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]"
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {doubled.map((item, i) => (
          <LogoCell
            key={`${item.name}-${i}`}
            name={item.name}
            logo={item.logo}
            imgClass={item.imgClass}
          />
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import { clientLogos } from "../data/site";

/** One logo tile: brand logo shown in full colour, falling back to a clean
 * wordmark if the asset is missing. */
function LogoTile({ name, logo }: { name: string; logo?: string }) {
  const [failed, setFailed] = useState(false);
  const showLogo = logo && !failed;

  return (
    <div className="group flex h-24 items-center justify-center rounded-3xl border border-ink-100 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift sm:h-28">
      {showLogo ? (
        <img
          src={logo}
          alt={`${name}, a Laundry Bag client`}
          title={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="max-h-12 max-w-[140px] object-contain transition duration-300 group-hover:scale-105 sm:max-h-14"
        />
      ) : (
        <span className="text-center font-display text-base font-semibold tracking-wide text-ink-400 transition group-hover:text-brand-600">
          {name}
        </span>
      )}
    </div>
  );
}

type Props = { className?: string };

/** Upgraded client logo wall, a tidy, responsive grid of marquee-grade
 * brand logos. Pairs with the sector chip lists on the Clients page. */
export default function ClientWall({ className = "" }: Props) {
  return (
    <div
      className={`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 ${className}`}
    >
      {clientLogos.map((c) => (
        <LogoTile key={c.name} name={c.name} logo={c.logo} />
      ))}
    </div>
  );
}

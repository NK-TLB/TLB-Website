import { useState } from "react";
import Reveal from "./Reveal";
import { clientLogos } from "../data/site";

/** One logo tile: brand logo in full colour with a premium glass tile treatment. */
function LogoTile({ name, logo }: { name: string; logo?: string }) {
  const [failed, setFailed] = useState(false);
  const showLogo = logo && !failed;

  return (
    <div className="accent-box-2xl card-hover group relative flex h-24 items-center justify-center overflow-hidden sm:h-28">
      <div className="accent-box-2xl-inner flex h-full w-full items-center justify-center p-4">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-brand-100/50 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100"
      />
      {showLogo ? (
        <img
          src={logo}
          alt={`${name}, a Laundry Bag client`}
          title={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="relative max-h-12 max-w-[140px] object-contain transition duration-300 group-hover:scale-105 sm:max-h-14"
        />
      ) : (
        <span className="relative text-center font-display text-sm font-semibold tracking-wide text-ink-400 transition group-hover:text-brand-600">
          {name}
        </span>
      )}
      </div>
    </div>
  );
}

type Props = { className?: string };

/** Client logo wall inside a premium framed panel. */
export default function ClientWall({ className = "" }: Props) {
  return (
    <article
      className={`accent-border relative overflow-hidden rounded-[2rem] shadow-lift ${className}`}
    >
      <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-gradient-to-br from-white via-brand-50/20 to-white p-5 sm:p-6 lg:p-8">
        <span aria-hidden="true" className="accent-hairline" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-brand-200/25 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-200/20 blur-3xl"
        />
        <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {clientLogos.map((c, i) => (
            <Reveal key={c.name} delay={i * 40}>
              <LogoTile name={c.name} logo={c.logo} />
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}

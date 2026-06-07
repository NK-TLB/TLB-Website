import Icon from "./Icon";
import Reveal from "./Reveal";
import { pressFeatures, pressGallery } from "../data/site";

/** Slim "As featured in" outlet strip — quick social proof for any page. */
export function PressStripBar({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-ink-400">
        As featured in
      </p>
      <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {pressFeatures.map((p) => (
          <li key={p.href}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="font-display text-lg font-bold tracking-tight text-ink-400 transition hover:text-brand-700 sm:text-xl"
            >
              {p.outlet}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Full press section: article feature cards + a founder-appearance gallery. */
export default function PressStrip() {
  return (
    <div>
      {/* Article features */}
      <div className="grid gap-6 md:grid-cols-3">
        {pressFeatures.map((p, i) => (
          <Reveal key={p.href} delay={i * 70}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="card card-hover flex h-full flex-col"
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
                {p.outlet}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-600">{p.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky2-700">
                Read the feature
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Founder appearances / recognition gallery */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pressGallery.map((g, i) => (
          <Reveal key={g.image} delay={i * 70}>
            <figure className="group overflow-hidden rounded-4xl border border-ink-100 bg-white shadow-soft">
              <div className="aspect-[4/3] w-full overflow-hidden bg-ink-100">
                <img
                  src={g.image}
                  alt={g.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-semibold text-ink-700">
                {g.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

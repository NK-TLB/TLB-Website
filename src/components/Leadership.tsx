import { useState } from "react";
import Icon from "./Icon";
import { founders, site } from "../data/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

/** Founder portrait — real photo when available, otherwise a premium monogram. */
function Portrait({ name, image }: { name: string; image?: string }) {
  const [failed, setFailed] = useState(false);
  const showImage = image && !failed;

  if (showImage) {
    return (
      <div className="relative h-full min-h-[18rem] overflow-hidden md:min-h-full">
        <img
          src={image}
          alt={`${name}, Founder, The Laundry Bag`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.03]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/25 via-transparent to-transparent"
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[18rem] items-center justify-center overflow-hidden bg-hero-radial md:min-h-full">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand-300/30 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-accent-300/20 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ink-mesh opacity-25"
      />
      <div className="accent-border relative flex h-32 w-32 items-center justify-center rounded-full shadow-lift ring-4 ring-white/80 sm:h-36 sm:w-36">
        <span className="flex h-[calc(100%-2px)] w-[calc(100%-2px)] items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          <span className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {initials(name)}
          </span>
        </span>
      </div>
    </div>
  );
}

/** Leadership / founder spotlight — portrait paired with bio + LinkedIn. */
export default function Leadership() {
  const lead = founders[0];
  if (!lead) return null;

  return (
    <div className="mx-auto mt-12 max-w-5xl">
      <article className="accent-border group relative overflow-hidden rounded-[2rem] shadow-lift">
        <div className="accent-border-2rem-inner">
          <span aria-hidden="true" className="accent-hairline" />
          <div className="grid items-stretch md:grid-cols-12">
            <div className="md:col-span-5">
              <Portrait name={lead.name} image={lead.image} />
            </div>

            <div className="flex flex-col justify-center p-8 md:col-span-7 lg:p-10 xl:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200/80 bg-brand-50/80 px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-700">
                <Icon name="star" className="h-3.5 w-3.5" />
                {lead.role}
              </span>

              <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                {lead.name}
              </h3>

              <span
                aria-hidden="true"
                className="mt-4 block h-1 w-14 rounded-full bg-brand-gradient"
              />

              <p className="mt-5 text-base leading-relaxed text-ink-700">
                {lead.bio}
              </p>

              <dl className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: "Based in", value: "Raipur, Chhattisgarh" },
                  { label: "Since", value: String(site.founded) },
                  { label: "Network", value: "18 cities" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-full border border-brand-100 bg-brand-50/60 px-3.5 py-1.5 text-xs font-semibold text-brand-800"
                  >
                    <span className="text-brand-600/80">{item.label} · </span>
                    {item.value}
                  </div>
                ))}
              </dl>

              <figure className="mt-6 border-l-2 border-brand-300 pl-4">
                <blockquote className="font-display text-base font-semibold leading-snug text-ink-800">
                  Built on a simple promise — we never mix one client&apos;s linen
                  with anyone else&apos;s.
                </blockquote>
              </figure>

              <div className="mt-6 flex flex-wrap gap-3">
                {lead.href && (
                  <a
                    href={lead.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold text-brand-800 shadow-sm transition hover:border-brand-400"
                  >
                    <Icon name="users" className="h-3.5 w-3.5" />
                    {lead.name} on LinkedIn
                  </a>
                )}
                <a
                  href="https://www.shouryainfraventure.com/about.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold text-brand-800 shadow-sm transition hover:border-brand-400"
                >
                  <Icon name="building" className="h-3.5 w-3.5" />
                  Also at Shourya Infraventure
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

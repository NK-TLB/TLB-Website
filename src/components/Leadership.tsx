import { useState } from "react";
import Icon from "./Icon";
import { founders } from "../data/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

/** Founder portrait that gracefully falls back to a monogram avatar until a
 * real photo is dropped into /public/images/team. */
function Portrait({ name, image }: { name: string; image?: string }) {
  const [failed, setFailed] = useState(false);
  const showImage = image && !failed;

  if (showImage) {
    return (
      <img
        src={image}
        alt={`${name} — Founder, The Laundry Bag`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-brand-gradient">
      <span className="font-display text-5xl font-extrabold text-white sm:text-6xl">
        {initials(name)}
      </span>
    </div>
  );
}

/** Leadership / founder spotlight. Single-founder layout (Shourya Jain): a
 * portrait paired with bio + LinkedIn for authenticity and founder-name SEO. */
export default function Leadership() {
  const lead = founders[0];
  if (!lead) return null;

  return (
    <div className="mx-auto mt-12 max-w-4xl">
      <article className="grid items-stretch gap-0 overflow-hidden rounded-5xl border border-ink-100 bg-white shadow-soft md:grid-cols-5">
        <div className="aspect-square md:col-span-2 md:aspect-auto">
          <Portrait name={lead.name} image={lead.image} />
        </div>
        <div className="flex flex-col justify-center p-8 md:col-span-3 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
            {lead.role}
          </p>
          <h3 className="mt-2 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
            {lead.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-700">{lead.bio}</p>
          <div className="mt-6">
            <a
              href={lead.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-sky2-700 shadow-soft transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
            >
              <Icon name="linkedin" className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

import Icon from "./Icon";
import FramedPortrait from "./FramedPortrait";
import { founders, site } from "../data/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

/** Founder portrait — cover-fill with optional frame tuning. */
function Portrait({
  name,
  image,
}: {
  name: string;
  image?: string;
}) {
  if (image) {
    return (
      <FramedPortrait
        src={image}
        alt={`${name}, Founder, The Laundry Bag`}
        fit="contain"
        filter="brightness(1.08) contrast(1.08) saturate(1.1) sepia(0.05)"
        wrapperClassName="h-full min-h-[18rem] md:min-h-full"
      />
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

  const portraitSrc = lead.image;

  return (
    <div className="mx-auto mt-12 max-w-5xl">
      <article className="frame-4xl group relative">
        <div className="frame-4xl-inner">
          <span aria-hidden="true" className="accent-hairline" />
          <div className="grid items-stretch md:grid-cols-12">
            <div className="md:col-span-5">
              <Portrait name={lead.name} image={portraitSrc} />
            </div>

            <div className="flex flex-col justify-center p-8 md:col-span-7 lg:p-10 xl:p-12">
              <span className="eyebrow w-fit">
                <Icon name="star" className="h-3.5 w-3.5" />
                {lead.role}
              </span>

              <h3 className="h2 mt-4">{lead.name}</h3>

              <span
                aria-hidden="true"
                className="mt-4 block h-1 w-14 rounded-full bg-brand-gradient"
              />

              <p className="mt-5 text-base leading-relaxed text-ink-700">
                {lead.bio}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: "Based in", value: "Raipur, Chhattisgarh" },
                  { label: "Since", value: String(site.founded) },
                  { label: "Network", value: "18 cities" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="rounded-full border border-brand-100 bg-brand-50/60 px-3.5 py-1.5 text-xs font-semibold text-brand-800"
                  >
                    <span className="text-brand-700">{item.label} · </span>
                    {item.value}
                  </li>
                ))}
              </ul>

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
                    className="btn-outline btn-xs"
                  >
                    <Icon name="users" className="h-3.5 w-3.5" />
                    {lead.name} on LinkedIn
                  </a>
                )}
                <a
                  href="https://www.shouryainfraventure.com/about.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline btn-xs"
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

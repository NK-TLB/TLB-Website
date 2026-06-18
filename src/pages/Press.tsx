import { useState, type ReactNode } from "react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import PageSection from "../components/PageSection";
import Icon from "../components/Icon";
import PremiumFrame from "../components/PremiumFrame";
import ResponsiveImage from "../components/ResponsiveImage";
import VideoFeature from "../components/VideoFeature";
import Lightbox, { type LightboxItem } from "../components/Lightbox";
import { pressFeature, pressClippings, ratanTata } from "../data/site";

const BASE_URL = "https://www.thelaundrybag.co.in";
const abs = (p: string) => `${BASE_URL}${p}`;
const PUBLISHED = "2025-12-25";
// Full ISO 8601 with IST offset; Google requires a timezone on VideoObject.uploadDate.
const PUBLISHED_DT = "2025-12-25T11:00:00+05:30";

const newsArticleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: pressFeature.title,
  image: [
    abs(`${pressFeature.image.base}-1600.jpg`),
    abs(`${pressFeature.image.base}-1024.jpg`),
  ],
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  articleSection: "Business",
  inLanguage: "en-IN",
  author: { "@type": "Organization", name: "The Hitavada" },
  publisher: {
    "@type": "Organization",
    name: "The Laundry Bag",
    logo: { "@type": "ImageObject", url: abs("/logo.png") },
  },
  description:
    "The Chhattisgarh State Skill Development Authority (CSSDA) signed an MoU with The Laundry Bag for a Laundry Operations Skill Development Programme, formalising the organised laundry workforce for hospitality, healthcare and commercial establishments.",
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "The Laundry Bag × CSSDA, MoU ceremony at Chhattisgarh Skill Tech",
  description: pressFeature.video.summary,
  thumbnailUrl: [abs(pressFeature.video.poster)],
  uploadDate: PUBLISHED_DT,
  duration: "PT43S",
  contentUrl: abs(pressFeature.video.mp4),
  inLanguage: "hi",
  publisher: {
    "@type": "Organization",
    name: "The Laundry Bag",
    logo: { "@type": "ImageObject", url: abs("/logo.png") },
  },
};

const imageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: abs(`${ratanTata.image.base}-1200.jpg`),
    caption: ratanTata.image.alt,
    creditText: "The Laundry Bag",
    creator: { "@type": "Organization", name: "The Laundry Bag", url: BASE_URL },
    copyrightNotice: "© The Laundry Bag",
    license: abs("/privacy-policy"),
    acquireLicensePage: abs("/contact"),
  },
];

const ratanItem: LightboxItem = {
  image: ratanTata.image,
  caption: ratanTata.image.alt,
};

const ratanHeroSrc = `${ratanTata.image.base}-${Math.max(...ratanTata.image.widths)}.jpg`;

const clippingItems: LightboxItem[] = pressClippings.map((c) => ({
  image: c.image,
  caption: `${c.outlet}, ${c.title}`,
}));

function MetaPill({
  icon,
  children,
  tone = "brand",
}: {
  icon: string;
  children: ReactNode;
  tone?: "brand" | "neutral" | "dark";
}) {
  const toneClass =
    tone === "dark"
      ? "eyebrow-glass"
      : tone === "neutral"
        ? "eyebrow eyebrow-neutral"
        : "eyebrow";

  return (
    <span className={toneClass}>
      <Icon name={icon} className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function MemorialQuote({ children }: { children: ReactNode }) {
  return (
    <figure className="accent-box-2xl">
      <div className="accent-box-2xl-inner relative bg-gradient-to-br from-ink-950/[0.03] via-brand-50/50 to-white p-6 sm:p-8">
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-ink-700 via-brand-500 to-accent-400"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-200/25 blur-3xl"
      />
      <div className="relative flex gap-4 sm:gap-5">
        <Icon name="quote" className="mt-0.5 h-8 w-8 shrink-0 text-brand-300 sm:h-9 sm:w-9" />
        <blockquote className="font-display text-xl font-semibold leading-snug text-ink-900 sm:text-2xl">
          {children}
        </blockquote>
      </div>
      </div>
    </figure>
  );
}

function FactCards({
  facts,
  icons,
  columns = 3,
}: {
  facts: { label: string; value: string }[];
  icons: string[];
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 4
      ? "sm:grid-cols-2 xl:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-3";

  return (
    <dl className={`grid gap-3 ${colClass}`}>
      {facts.map((f, i) => (
        <Reveal key={f.label} delay={i * 50}>
        <div className="accent-box-2xl card-hover hover:-translate-y-0.5 hover:shadow-soft">
          <div className="accent-box-2xl-inner p-4">
          <dt className="eyebrow-label flex items-center gap-2">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100/80">
              <Icon name={icons[i] ?? "star"} className="h-3.5 w-3.5" />
            </span>
            {f.label}
          </dt>
          <dd className="mt-3 text-sm font-semibold leading-snug text-ink-800">{f.value}</dd>
          </div>
        </div>
        </Reveal>
      ))}
    </dl>
  );
}

export default function Press() {
  const [box, setBox] = useState<{ items: LightboxItem[]; index: number } | null>(
    null,
  );

  return (
    <>
      <SEO
        path="/press"
        type="article"
        title="Press"
        description="The Laundry Bag in the news: an MoU with the Chhattisgarh State Skill Development Authority (CSSDA), signed at Chhattisgarh Skill Tech in the presence of Hon'ble CM Shri Vishnu Deo Sai, plus founder Shourya Jain's meeting with the late Shri Ratan Tata and coverage in The Hitavada, Patrika and more."
        image={`${pressFeature.image.base}-1600.jpg`}
        schema={[newsArticleSchema, videoSchema, ...imageSchemas]}
      />

      <PageHero
        title="Press & Recognition"
        description="Milestones, media coverage and national recognition for The Laundry Bag."
        crumbs={[{ label: "Home", to: "/" }, { label: "Press" }]}
      />

      <PageSection reveal={false}>
          <PremiumFrame>
              <div className="grid items-stretch lg:grid-cols-2">
                <Reveal>
                <figure className="relative min-h-[28rem] border-b border-brand-100/60 lg:min-h-[36rem] lg:border-b-0 lg:border-r">
                  <button
                    type="button"
                    onClick={() => setBox({ items: [ratanItem], index: 0 })}
                    className="group/photo relative flex h-full min-h-[28rem] w-full flex-col overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-400 lg:min-h-[36rem]"
                    aria-label="View the photo full-screen"
                  >
                    <div className="relative flex min-h-[22rem] flex-1 flex-col bg-ink-950">
                      <img
                        src={ratanHeroSrc}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-3xl brightness-75 saturate-125"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ink-950/80 via-ink-900/50 to-brand-950/70"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-ink-mesh opacity-25"
                      />

                      <span className="eyebrow-glass absolute left-5 top-5 z-20">
                        <Icon name="pin" className="h-3.5 w-3.5 text-brand-300" />
                        {ratanTata.kicker}
                      </span>

                      <ResponsiveImage
                        image={ratanTata.image}
                        sizes="(min-width: 1024px) 50vw, 92vw"
                        className="absolute inset-0 z-10 block h-full w-full"
                        imgClassName="h-full w-full object-contain transition duration-500 group-hover/photo:scale-[1.01]"
                      />

                      <span className="pointer-events-none absolute inset-0 z-10 bg-ink-950/0 transition duration-300 group-hover/photo:bg-ink-950/15 group-focus-visible/photo:bg-ink-950/15" />
                    </div>

                    <figcaption className="border-t border-brand-100/60 bg-gradient-to-r from-brand-50/40 via-white to-brand-50/40 px-6 py-3.5 text-center text-xs leading-relaxed text-ink-500 sm:px-8">
                      {ratanTata.image.alt}
                    </figcaption>
                  </button>
                </figure>
                </Reveal>

                <Reveal delay={80}>
                <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center gap-2">
                    <MetaPill icon="star">Healthcare milestone</MetaPill>
                    <MetaPill icon="shield" tone="neutral">
                      Hospital-grade linen
                    </MetaPill>
                  </div>

                  <div>
                    <h3 className="h2">
                      {ratanTata.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-700 sm:text-[1.05rem]">
                      {ratanTata.lead}
                    </p>
                  </div>

                  <div className="space-y-4 border-l-2 border-brand-200/80 pl-5">
                    {ratanTata.body.map((para) => (
                      <p
                        key={para.slice(0, 24)}
                        className="text-sm leading-relaxed text-ink-600 sm:text-[0.9375rem]"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
                </Reveal>
              </div>

              <Reveal delay={120}>
              <div className="border-t border-brand-100/70 bg-gradient-to-r from-brand-50/30 via-white to-brand-50/30 px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
                <MemorialQuote>{ratanTata.pullQuote}</MemorialQuote>
                <div className="mt-6">
                  <FactCards
                    facts={ratanTata.facts}
                    icons={["pin", "calendar", "shield"]}
                  />
                </div>
              </div>
              </Reveal>
            </PremiumFrame>
      </PageSection>

      <PageSection className="section-tint section" reveal={false}>
          <SectionHeading
            title={pressFeature.title}
            align="left"
            showRule={false}
          />

            <div className="mt-10">
            <PremiumFrame>
              <div className="grid items-stretch lg:grid-cols-2">
                <Reveal>
                <div className="flex flex-col justify-center gap-7 p-8 sm:p-10 lg:p-12">
                  <p className="text-lg leading-relaxed text-ink-700 sm:text-xl">
                    {pressFeature.dek}
                  </p>

                  <FactCards
                    facts={pressFeature.facts}
                    icons={["shield", "star", "pin", "star"]}
                    columns={2}
                  />
                </div>
                </Reveal>

                <Reveal delay={80} className="h-full min-h-[20rem]">
                <figure className="relative h-full min-h-[20rem] border-t border-brand-100/60 lg:min-h-[28rem] lg:border-l lg:border-t-0">
                  <div className="absolute inset-0 overflow-hidden bg-ink-950">
                    <img
                      src={`${pressFeature.image.base}-1600.jpg`}
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-3xl"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ink-950/70 via-ink-900/40 to-brand-950/60"
                    />
                    <ResponsiveImage
                      image={pressFeature.image}
                      priority
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="absolute inset-0 z-10 block h-full w-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
                      imgClassName="h-full w-full object-cover"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-ink-950/90 to-transparent px-5 py-4 text-xs font-medium text-white/85 sm:px-6">
                      <span className="eyebrow-accent">
                        {pressFeature.outlet}
                      </span>
                      <span className="mx-2 text-white/40">·</span>
                      {pressFeature.edition}
                    </figcaption>
                  </div>
                </figure>
                </Reveal>
              </div>

              <div className="grid items-stretch border-t border-brand-100/70 lg:grid-cols-2">
                <Reveal delay={120}>
                <div className="flex flex-col gap-5 border-b border-brand-100/70 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <div>
                    <p className="eyebrow-label">
                      Watch the ceremony
                    </p>
                    <h3 className="h3 mt-2">
                      The MoU, on stage
                    </h3>
                  </div>
                  <VideoFeature
                    mp4={pressFeature.video.mp4}
                    webm={pressFeature.video.webm}
                    poster={pressFeature.video.poster}
                    posterAlt={pressFeature.image.alt}
                    captions={pressFeature.video.captions}
                    durationSec={pressFeature.video.durationSec}
                  />
                  <p className="text-sm text-ink-500">
                    Captioned in English &amp; हिन्दी. Loads only when you press play.
                  </p>
                </div>
                </Reveal>

                <Reveal delay={160}>
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="eyebrow-label">
                    In the papers
                  </p>
                  <h3 className="h3 mt-2">
                    Press coverage
                  </h3>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {pressClippings.map((c, i) => (
                      <Reveal key={c.image.base} delay={i * 50}>
                      <button
                        type="button"
                        onClick={() => setBox({ items: clippingItems, index: i })}
                        className="group block h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                      >
                        <article className="accent-box-xl card-hover flex h-full flex-col overflow-hidden hover:-translate-y-0.5 hover:shadow-soft">
                          <div className="accent-box-xl-inner flex h-full flex-col overflow-hidden">
                          <div className="relative overflow-hidden bg-ink-50/50">
                            <ResponsiveImage
                              image={c.image}
                              sizes="(min-width: 1024px) 16vw, 50vw"
                              className="block overflow-hidden"
                              imgClassName="h-40 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                            />
                            <span className="absolute inset-0 flex items-center justify-center bg-ink-950/0 transition duration-300 group-hover:bg-ink-950/30">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink-800 opacity-0 shadow-soft transition group-hover:opacity-100">
                                <Icon name="expand" className="h-4 w-4 text-brand-600" />
                                Read
                              </span>
                            </span>
                          </div>
                          <div className="border-t border-brand-100/70 px-4 py-3">
                            <p className="font-display text-sm font-bold text-ink-900">{c.outlet}</p>
                            <p className="mt-0.5 text-[0.7rem] text-ink-500">{c.edition}</p>
                          </div>
                          </div>
                        </article>
                      </button>
                      </Reveal>
                    ))}
                  </div>
                </div>
                </Reveal>
              </div>
            </PremiumFrame>
            </div>
      </PageSection>

      {box && (
        <Lightbox
          items={box.items}
          index={box.index}
          onClose={() => setBox(null)}
          onNavigate={(index) => setBox((b) => (b ? { ...b, index } : b))}
        />
      )}
    </>
  );
}

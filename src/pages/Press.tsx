import { useState } from "react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import ResponsiveImage from "../components/ResponsiveImage";
import VideoFeature from "../components/VideoFeature";
import Lightbox, { type LightboxItem } from "../components/Lightbox";
import {
  pressFeature,
  pressClippings,
  pressGallery,
  ratanTata,
} from "../data/site";

const BASE_URL = "https://www.thelaundrybag.co.in";
const abs = (p: string) => `${BASE_URL}${p}`;
const PUBLISHED = "2025-12-25";

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
  uploadDate: PUBLISHED,
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
  ...pressGallery.map((g) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: abs(`${g.image.base}-1200.jpg`),
    caption: g.caption,
    creditText: "The Laundry Bag",
  })),
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: abs(`${ratanTata.image.base}-1200.jpg`),
    caption: ratanTata.image.alt,
    creditText: "The Laundry Bag",
  },
];

const ratanItem: LightboxItem = {
  image: ratanTata.image,
  caption: ratanTata.image.alt,
};

const clippingItems: LightboxItem[] = pressClippings.map((c) => ({
  image: c.image,
  caption: `${c.outlet}, ${c.title}`,
}));

export default function Press() {
  const [box, setBox] = useState<{ items: LightboxItem[]; index: number } | null>(
    null,
  );

  return (
    <>
      <SEO
        path="/press"
        type="article"
        title="Press & Recognition, Government MoU & coverage"
        description="The Laundry Bag in the news: an MoU with the Chhattisgarh State Skill Development Authority (CSSDA), signed at Chhattisgarh Skill Tech in the presence of Hon'ble CM Shri Vishnu Deo Sai, plus founder Shourya Jain's meeting with the late Shri Ratan Tata and coverage in The Hitavada, Patrika and more."
        image={`${pressFeature.image.base}-1600.jpg`}
        schema={[newsArticleSchema, videoSchema, ...imageSchemas]}
      />

      <PageHero
        eyebrow="Press & Recognition"
        title="Milestones, media & national recognition"
        crumbs={[{ label: "Home", to: "/" }, { label: "Press" }]}
      />

      {/* Ratan Tata, standout milestone */}
      <section className="section">
        <div className="container-page">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
              {ratanTata.eyebrow}
            </p>
          </div>
          <div className="overflow-hidden rounded-4xl border border-brand-100 bg-white shadow-lift">
            <div className="grid items-stretch lg:grid-cols-2">
              <button
                type="button"
                onClick={() => setBox({ items: [ratanItem], index: 0 })}
                className="group relative flex w-full items-center justify-center overflow-hidden bg-ink-50 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-400 sm:p-6"
                aria-label="View the photo full-screen"
              >
                <ResponsiveImage
                  image={ratanTata.image}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="block w-full"
                  imgClassName="mx-auto max-h-[34rem] w-full rounded-2xl object-contain transition duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-ink-950/60 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  <Icon name="expand" className="h-4 w-4" />
                  View photo
                </span>
              </button>

              <div className="p-8 sm:p-10 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-700 ring-1 ring-brand-100">
                  <Icon name="star" className="h-4 w-4" />
                  {ratanTata.kicker}
                </span>
                <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
                  {ratanTata.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-700">
                  {ratanTata.lead}
                </p>
                {ratanTata.body.map((para) => (
                  <p key={para.slice(0, 24)} className="mt-3 text-sm leading-relaxed text-ink-600">
                    {para}
                  </p>
                ))}

                <figure className="mt-6 border-l-2 border-brand-400 pl-4">
                  <Icon name="quote" className="h-6 w-6 text-brand-300" />
                  <blockquote className="mt-1 font-display text-lg font-semibold leading-snug text-ink-900">
                    {ratanTata.pullQuote}
                  </blockquote>
                </figure>

                <dl className="mt-7 grid gap-3 sm:grid-cols-3">
                  {ratanTata.facts.map((f) => (
                    <div key={f.label} className="rounded-2xl border border-ink-100 bg-brand-50/50 p-3.5">
                      <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink-400">
                        {f.label}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-ink-800">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Headline MoU feature */}
      <section className="section-tint section">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                <Icon name="shield" className="h-4 w-4" />
                {pressFeature.kicker}
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
                {pressFeature.title}
              </h2>
              <p className="mt-4 text-ink-600">{pressFeature.dek}</p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                {pressFeature.facts.map((f) => (
                  <div key={f.label} className="rounded-2xl border border-ink-100 bg-white p-4 shadow-soft">
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-ink-400">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-ink-800">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={80}>
              <figure>
                <ResponsiveImage
                  image={pressFeature.image}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="block overflow-hidden rounded-4xl border border-ink-100 bg-ink-100 shadow-soft"
                  imgClassName="aspect-video w-full object-cover"
                />
                <figcaption className="mt-3 text-xs text-ink-500">
                  {pressFeature.image.alt}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MoU video */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Watch the ceremony"
            title="The MoU, on stage at Chhattisgarh Skill Tech"
            description="Captioned in English and हिन्दी. The clip loads only when you press play."
          />
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <VideoFeature
                mp4={pressFeature.video.mp4}
                webm={pressFeature.video.webm}
                poster={pressFeature.video.poster}
                posterAlt={pressFeature.image.alt}
                captions={pressFeature.video.captions}
                durationSec={pressFeature.video.durationSec}
              />
            </Reveal>
            <Reveal delay={80}>
              <figure className="rounded-4xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8">
                <Icon name="quote" className="h-8 w-8 text-brand-300" />
                <blockquote className="mt-3 text-lg font-medium leading-relaxed text-ink-800">
                  {pressFeature.video.summary}
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-ink-600">
                  Chhattisgarh Skill Tech · Raipur
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Newspaper clippings */}
      <section className="section-tint section">
        <div className="container-page">
          <SectionHeading
            eyebrow="In print"
            title="Newspaper coverage"
            description="Click any clipping to read it full-screen."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {pressClippings.map((c, i) => (
              <Reveal key={c.image.base} delay={i * 70}>
                <button
                  type="button"
                  onClick={() => setBox({ items: clippingItems, index: i })}
                  className="group block w-full overflow-hidden rounded-4xl border border-ink-100 bg-white text-left shadow-soft transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                >
                  <div className="relative overflow-hidden bg-ink-100">
                    <ResponsiveImage
                      image={c.image}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      imgClassName="max-h-[26rem] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1.5 text-xs font-semibold text-white">
                      <Icon name="expand" className="h-4 w-4" />
                      Read
                    </span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                      {c.outlet}
                    </p>
                    <p className="mt-1 font-display text-base font-bold text-ink-900">
                      {c.title}
                    </p>
                    <p className="mt-1 text-xs text-ink-500">{c.edition}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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

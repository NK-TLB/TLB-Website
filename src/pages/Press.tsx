import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import ResponsiveImage from "../components/ResponsiveImage";
import VideoFeature from "../components/VideoFeature";
import Lightbox, { type LightboxItem } from "../components/Lightbox";
import { PressStripBar } from "../components/PressStrip";
import {
  pressFeature,
  pressClippings,
  pressGallery,
  pressFeatures,
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
  name: "The Laundry Bag × CSSDA — MoU ceremony at Chhattisgarh Skill Tech",
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

const imageSchemas = pressGallery.map((g) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: abs(`${g.image.base}-1200.jpg`),
  caption: g.caption,
  creditText: "The Laundry Bag",
}));

const clippingItems: LightboxItem[] = pressClippings.map((c) => ({
  image: c.image,
  caption: `${c.outlet} — ${c.title}`,
}));

const galleryItems: LightboxItem[] = pressGallery.map((g) => ({
  image: g.image,
  caption: g.caption,
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
        title="Press & Recognition — Government MoU & coverage"
        description="The Laundry Bag in the news: an MoU with the Chhattisgarh State Skill Development Authority (CSSDA), signed at Chhattisgarh Skill Tech in the presence of Hon'ble CM Shri Vishnu Deo Sai — plus founder Shourya Jain's meeting with the late Shri Ratan Tata and coverage in The Hitavada, Patrika and more."
        image={`${pressFeature.image.base}-1600.jpg`}
        schema={[newsArticleSchema, videoSchema, ...imageSchemas]}
      />

      <PageHero
        eyebrow="Press & Recognition"
        title="Recognised by government, covered by the press"
        description="A government skill-development MoU, national media coverage and moments with leaders who have shaped Indian industry — a snapshot of the trust The Laundry Bag has earned."
        crumbs={[{ label: "Home", to: "/" }, { label: "Press" }]}
      />

      {/* Headline MoU feature */}
      <section className="section">
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
      <section className="bg-ink-50/60 section">
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

      {/* As featured in */}
      <section className="section">
        <div className="container-page">
          <PressStripBar />
        </div>
      </section>

      {/* Newspaper clippings */}
      <section className="bg-ink-50/60 section">
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

      {/* Recognition gallery */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Moments & recognition"
            title="With the leaders who shape Indian industry"
            description="From the Hon'ble Chief Minister of Chhattisgarh to the late Shri Ratan Tata."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pressGallery.map((g, i) => (
              <Reveal key={g.image.base} delay={i * 70}>
                <button
                  type="button"
                  onClick={() => setBox({ items: galleryItems, index: i })}
                  className="group block w-full overflow-hidden rounded-4xl border border-ink-100 bg-white text-left shadow-soft transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-100">
                    <ResponsiveImage
                      image={g.image}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      imgClassName="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink-950/60 text-white opacity-0 transition group-hover:opacity-100">
                      <Icon name="expand" className="h-4 w-4" />
                    </span>
                  </div>
                  <figcaption className="px-5 py-4 text-sm font-semibold text-ink-700">
                    {g.caption}
                  </figcaption>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Online features list */}
      <section className="bg-ink-50/60 section">
        <div className="container-page">
          <SectionHeading eyebrow="Read more" title="Featured stories" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                    <Icon name="external" className="h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="overflow-hidden rounded-4xl bg-brand-gradient px-6 py-12 text-center text-white shadow-soft sm:px-12 sm:py-16">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Partner with India's leading laundry service provider
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/90">
              Hotels, resorts, hospitals and institutions across India trust The Laundry Bag for hygienic, never-mix, industrial-grade laundry.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg transition hover:bg-ink-50"
            >
              Talk to our team
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
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

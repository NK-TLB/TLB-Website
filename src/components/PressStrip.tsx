import { Link } from "react-router-dom";
import Icon from "./Icon";
import ResponsiveImage from "./ResponsiveImage";
import { pressFeature, pressClippings } from "../data/site";

/**
 * Slim press teaser for the Clients page — highlights the government MoU with a
 * photo + top clipping, then sends visitors to the full /press page.
 */
export default function PressTeaser() {
  const clipping = pressClippings[0];

  return (
    <div className="overflow-hidden rounded-4xl border border-ink-100 bg-white shadow-soft">
      <div className="grid gap-0 md:grid-cols-2">
        <ResponsiveImage
          image={pressFeature.image}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="block bg-ink-100"
          imgClassName="h-full min-h-56 w-full object-cover"
        />
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
            <Icon name="shield" className="h-4 w-4" />
            {pressFeature.kicker}
          </span>
          <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight text-ink-900">
            {pressFeature.title}
          </h3>
          <p className="mt-2 text-sm text-ink-600">
            Covered by {clipping.outlet}
            {clipping.edition ? ` · ${clipping.edition}` : ""}. Watch the ceremony, read the clippings and see the full recognition gallery.
          </p>
          <Link
            to="/press"
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-bold text-white shadow-soft transition hover:opacity-95"
          >
            See press &amp; recognition
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import Icon from "./Icon";

type Caption = { src: string; srclang: string; label: string };

type Props = {
  mp4: string;
  webm?: string;
  poster: string;
  posterAlt: string;
  captions?: Caption[];
  durationSec?: number;
  className?: string;
};

function formatDuration(seconds?: number) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

// Click-to-play video: shows a crisp poster + play button and only loads the
// actual video bytes once the user opts in (no autoplay, reduced-motion safe).
export default function VideoFeature({
  mp4,
  webm,
  poster,
  posterAlt,
  captions = [],
  durationSec,
  className = "",
}: Props) {
  const [playing, setPlaying] = useState(false);
  const duration = formatDuration(durationSec);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-ink-950 shadow-soft ring-1 ring-ink-900/10 ${className}`}
    >
      {!playing ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
          aria-label="Play the MoU ceremony video"
        >
          <img
            src={poster}
            alt={posterAlt}
            className="aspect-video w-full object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          <span className="absolute inset-0 bg-ink-950/15 transition group-hover:bg-ink-950/30" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow-lg transition duration-300 group-hover:scale-105">
              <Icon name="play" className="ml-1 h-7 w-7" />
            </span>
          </span>
          {duration && (
            <span className="absolute bottom-3 right-3 rounded-md bg-ink-950/70 px-2 py-1 text-xs font-medium tabular-nums text-white">
              {duration}
            </span>
          )}
        </button>
      ) : (
        <video
          className="aspect-video w-full bg-black"
          controls
          autoPlay
          playsInline
          preload="metadata"
          poster={poster}
        >
          {webm && <source src={webm} type="video/webm" />}
          <source src={mp4} type="video/mp4" />
          {captions.map((c) => (
            <track
              key={c.srclang}
              kind="subtitles"
              src={c.src}
              srcLang={c.srclang}
              label={c.label}
              default={c.srclang === "en"}
            />
          ))}
        </video>
      )}
    </div>
  );
}

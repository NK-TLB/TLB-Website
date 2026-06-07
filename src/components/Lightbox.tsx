import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { PressImage } from "../data/site";
import Icon from "./Icon";

export type LightboxItem = { image: PressImage; caption?: string };

type Props = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
};

// Accessible image lightbox: focus-trapped modal dialog with Esc to close,
// arrow-key navigation, click-to-zoom, and a locked background scroll.
export default function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Track which index is zoomed so navigating to another image resets to "fit"
  // without needing a state-resetting effect.
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const item = items[index];
  const count = items.length;
  const zoomed = zoomIndex === index;
  const toggleZoom = () => setZoomIndex(zoomed ? null : index);

  const prev = useCallback(
    () => onNavigate((index - 1 + count) % count),
    [index, count, onNavigate],
  );
  const next = useCallback(
    () => onNavigate((index + 1) % count),
    [index, count, onNavigate],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowLeft" && count > 1) {
        prev();
        return;
      }
      if (e.key === "ArrowRight" && count > 1) {
        next();
        return;
      }
      if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next, count]);

  if (!item) return null;
  const { base, widths, width, height, alt } = item.image;
  const sorted = [...widths].sort((a, b) => a - b);
  const largest = sorted[sorted.length - 1];
  const webpSrcSet = sorted.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
  const jpgSrcSet = sorted.map((w) => `${base}-${w}.jpg ${w}w`).join(", ");

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-ink-950/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption || alt}
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex items-center justify-between gap-3 p-3 text-white sm:p-4">
        <span className="text-xs font-medium text-white/70">
          {count > 1 ? `${index + 1} / ${count}` : ""}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleZoom}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-pressed={zoomed}
          >
            <Icon name="expand" className="h-4 w-4" />
            {zoomed ? "Fit" : "Zoom"}
          </button>
          <button
            type="button"
            ref={closeRef}
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="Close"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className={`flex flex-1 items-center justify-center px-2 pb-2 sm:px-6 ${
          zoomed ? "overflow-auto" : "overflow-hidden"
        }`}
      >
        <picture>
          <source type="image/webp" srcSet={webpSrcSet} sizes="100vw" />
          <source type="image/jpeg" srcSet={jpgSrcSet} sizes="100vw" />
          <img
            src={`${base}-${largest}.jpg`}
            alt={alt}
            width={width}
            height={height}
            onClick={toggleZoom}
            className={
              zoomed
                ? "h-auto max-w-none cursor-zoom-out rounded-lg"
                : "max-h-full max-w-full cursor-zoom-in rounded-lg object-contain shadow-2xl"
            }
            style={zoomed ? { width: largest } : undefined}
          />
        </picture>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 rotate-180 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:left-4"
          >
            <Icon name="arrow" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:right-4"
          >
            <Icon name="arrow" className="h-5 w-5" />
          </button>
        </>
      )}

      {item.caption && (
        <p className="mx-auto max-w-3xl px-4 pb-5 text-center text-sm text-white/80">
          {item.caption}
        </p>
      )}
    </div>,
    document.body,
  );
}

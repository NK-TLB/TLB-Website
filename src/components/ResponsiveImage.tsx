import type { PressImage } from "../data/site";

type Props = {
  image: PressImage;
  /** Wrapper <picture> classes (e.g. aspect ratio + rounding). */
  className?: string;
  /** Classes applied to the inner <img>. */
  imgClassName?: string;
  /** Responsive `sizes` hint; defaults to full viewport width. */
  sizes?: string;
  /** Eager-load + high priority (use for the LCP/hero image only). */
  priority?: boolean;
};

// Serves a modern WebP with a universal JPEG fallback at several widths, and
// always reserves intrinsic width/height to avoid cumulative layout shift.
export default function ResponsiveImage({
  image,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
}: Props) {
  const { base, widths, width, height, alt } = image;
  const sorted = [...widths].sort((a, b) => a - b);
  const largest = sorted[sorted.length - 1];
  const webpSrcSet = sorted.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
  const jpgSrcSet = sorted.map((w) => `${base}-${w}.jpg ${w}w`).join(", ");

  return (
    <picture className={className}>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <source type="image/jpeg" srcSet={jpgSrcSet} sizes={sizes} />
      <img
        src={`${base}-${largest}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        draggable={false}
        className={imgClassName}
      />
    </picture>
  );
}

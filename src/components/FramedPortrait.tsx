import { resolvePortraitFrame, type PortraitFrame } from "../data/site";

type Props = {
  src: string;
  alt: string;
  frame?: PortraitFrame;
  filter?: string;
  wrapperClassName?: string;
  /** cover = fill & crop (headshots). contain = full image, no crop (full-body portraits). */
  fit?: "cover" | "contain";
};

export default function FramedPortrait({
  src,
  alt,
  frame,
  filter,
  wrapperClassName = "",
  fit = "cover",
}: Props) {
  const resolved = resolvePortraitFrame(frame);
  const zoom = resolved.scale / 100;
  const isContain = fit === "contain";

  return (
    <div className={`relative overflow-hidden bg-brand-50 ${wrapperClassName}`}>
      <div
        className={
          isContain
            ? "flex h-full w-full items-center justify-center"
            : "absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]"
        }
        style={
          isContain
            ? undefined
            : {
                transform: `scale(${zoom})`,
                transformOrigin: `${resolved.x}% ${resolved.y}%`,
              }
        }
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={
            isContain
              ? "max-h-full max-w-full object-contain"
              : "h-full w-full object-cover"
          }
          style={
            isContain
              ? { filter }
              : {
                  objectPosition: `${resolved.x}% ${resolved.y}%`,
                  filter,
                }
          }
        />
      </div>
    </div>
  );
}

import { useState } from "react";
import Icon from "./Icon";
import FramedPortrait from "./FramedPortrait";
import {
  defaultPortraitFrame,
  resolvePortraitFrame,
  shouryaJainPortrait,
  type PortraitFrame,
  type TeamMember,
} from "../data/site";

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => part && part !== "Add")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function frameSnippet(id: string, frame: Required<PortraitFrame>) {
  const parts: string[] = [];
  if (frame.x !== defaultPortraitFrame.x) parts.push(`x: ${frame.x}`);
  if (frame.y !== defaultPortraitFrame.y) parts.push(`y: ${frame.y}`);
  if (frame.scale !== defaultPortraitFrame.scale) parts.push(`scale: ${frame.scale}`);

  if (parts.length === 0) {
    return `// ${id}: defaults — omit portraitFrame or use {}`;
  }

  return `portraitFrame: { ${parts.join(", ")} }, // ${id}`;
}

function Portrait({
  member,
  frame,
}: {
  member: TeamMember;
  frame: Required<PortraitFrame>;
}) {
  const showImage = Boolean(member.image);

  if (showImage) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden">
        <FramedPortrait
          src={member.image!}
          alt={`${member.name}, ${member.role}, The Laundry Bag`}
          fit="cover"
          frame={frame}
          srcSet={
            member.id === "shourya-jain" ? shouryaJainPortrait.srcSet : undefined
          }
          sizes={
            member.id === "shourya-jain" ? shouryaJainPortrait.sizes : undefined
          }
          filter={
            member.id === "vivek-devnani"
              ? "none"
              : "brightness(1.08) contrast(1.08) saturate(1.1) sepia(0.05)"
          }
          wrapperClassName="h-full w-full"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/20 via-transparent to-transparent"
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-hero-radial">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-0 h-32 w-32 rounded-full bg-brand-300/25 blur-3xl"
      />
      <div className="accent-border relative flex h-24 w-24 items-center justify-center rounded-full shadow-soft ring-4 ring-white/80 sm:h-28 sm:w-28">
        <span className="flex h-[calc(100%-2px)] w-[calc(100%-2px)] items-center justify-center rounded-full bg-white/90">
          <span className="font-display text-2xl font-extrabold tracking-tight text-brand-700 sm:text-3xl">
            {initials(member.name) || "TL"}
          </span>
        </span>
      </div>
    </div>
  );
}

function FrameSlider({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block text-xs text-ink-600">
      <span className="mb-1 flex items-center justify-between font-semibold text-ink-800">
        {label}
        <span className="tabular-nums text-brand-700">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer accent-brand-600"
      />
    </label>
  );
}

type Props = {
  member: TeamMember;
  frameEditMode?: boolean;
};

export default function TeamMemberCard({ member, frameEditMode = false }: Props) {
  const [draftFrame, setDraftFrame] = useState<Required<PortraitFrame>>(() =>
    resolvePortraitFrame(member.portraitFrame),
  );
  const [copied, setCopied] = useState(false);

  const frame = frameEditMode ? draftFrame : resolvePortraitFrame(member.portraitFrame);

  const copySnippet = async () => {
    await navigator.clipboard.writeText(frameSnippet(member.id, draftFrame));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const resetFrame = () => {
    setDraftFrame(resolvePortraitFrame(member.portraitFrame));
  };

  return (
    <article className="accent-box-2xl card-hover group h-full overflow-hidden hover:-translate-y-1 hover:shadow-lift">
      <div className="accent-box-2xl-inner flex h-full flex-col overflow-hidden p-0">
        <Portrait member={member} frame={frame} />

        {frameEditMode && member.image && (
          <div className="space-y-3 border-t border-brand-100/70 bg-brand-50/40 p-4">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-700">
              Frame · {member.name}
            </p>
            <FrameSlider
              label="Horizontal (x)"
              value={draftFrame.x}
              min={0}
              max={100}
              step={1}
              onChange={(x) => setDraftFrame((prev) => ({ ...prev, x }))}
            />
            <FrameSlider
              label="Vertical (y)"
              value={draftFrame.y}
              min={0}
              max={100}
              step={1}
              onChange={(y) => setDraftFrame((prev) => ({ ...prev, y }))}
            />
            <FrameSlider
              label="Zoom (%)"
              value={draftFrame.scale}
              min={100}
              max={150}
              step={1}
              onChange={(scale) => setDraftFrame((prev) => ({ ...prev, scale }))}
            />
            <code className="block rounded-lg border border-brand-100 bg-white px-3 py-2 text-[0.65rem] leading-relaxed text-ink-700">
              {frameSnippet(member.id, draftFrame)}
            </code>
            <div className="flex gap-2">
              <button type="button" onClick={copySnippet} className="btn-outline btn-xs flex-1">
                {copied ? "Copied" : "Copy for site.ts"}
              </button>
              <button type="button" onClick={resetFrame} className="btn-outline btn-xs">
                Reset
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <span className="eyebrow w-fit">{member.department}</span>
          <h3 className="h3 mt-4">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold text-brand-700">{member.role}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{member.bio}</p>
          {(member.email || member.linkedIn) && (
            <div className="mt-5 flex flex-wrap gap-2 border-t border-brand-100/70 pt-4">
              {member.email && (
                <a href={`mailto:${member.email}`} className="btn-outline btn-xs">
                  <Icon name="mail" className="h-3.5 w-3.5" />
                  Email
                </a>
              )}
              {member.linkedIn && (
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline btn-xs"
                >
                  <Icon name="users" className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

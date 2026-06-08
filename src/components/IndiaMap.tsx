import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import {
  HQ_MARKER,
  mapMarkers,
  type MapMarker,
  type MarkerType,
} from "../data/mapMarkers";
import {
  indiaPath,
  statePaths,
  projectToPercent,
  projectToViewBox,
  viewBox,
  width as VB_W,
  height as VB_H,
} from "./india-outline";

type Variant = "full" | "compact";

// Brand-palette colour per marker type (all themes share this palette).
const typeDotClass: Record<MarkerType, string> = {
  hq: "bg-brand-600",
  hotel: "bg-brand-500",
  hospital: "bg-accent-500",
  retail: "bg-brand-400",
  city: "bg-brand-500",
};

// Richer map markers: a glossy gradient core with a soft colour-matched halo
// (via box-shadow) instead of a flat dot, reads as a premium location pin.
const typeMarker: Record<MarkerType, { core: string; glow: string }> = {
  hq: {
    core: "bg-gradient-to-br from-ink-700 to-ink-950",
    glow: "0 0 0 5px rgb(var(--ink-900) / 0.15)",
  },
  hotel: {
    core: "bg-gradient-to-br from-brand-300 to-brand-600",
    glow: "0 0 0 4px rgb(var(--brand-400) / 0.18)",
  },
  hospital: {
    core: "bg-gradient-to-br from-accent-400 to-accent-600",
    glow: "0 0 0 4px rgb(var(--accent-500) / 0.18)",
  },
  retail: {
    core: "bg-gradient-to-br from-brand-300 to-brand-600",
    glow: "0 0 0 4px rgb(var(--brand-400) / 0.18)",
  },
  city: {
    core: "bg-gradient-to-br from-brand-300 to-brand-600",
    glow: "0 0 0 4px rgb(var(--brand-400) / 0.18)",
  },
};

/** Quadratic arc path (in viewBox units) from the HQ to a destination marker. */
function arcPath(to: MapMarker) {
  const a = projectToViewBox(HQ_MARKER.lat, HQ_MARKER.lng);
  const b = projectToViewBox(to.lat, to.lng);
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy) || 1;
  // Lift the control point perpendicular to the chord for a gentle bow.
  const lift = dist * 0.2;
  const cx = (a.x + b.x) / 2 + (-dy / dist) * lift;
  const cy = (a.y + b.y) / 2 + (dx / dist) * lift;
  return `M${a.x} ${a.y} Q${cx} ${cy} ${b.x} ${b.y}`;
}

export default function IndiaMap({
  variant = "full",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string>(HQ_MARKER.id);

  const destinations = useMemo(
    () => mapMarkers.filter((m) => m.id !== HQ_MARKER.id),
    []
  );
  const counts = useMemo(() => {
    const hotels = mapMarkers.filter((m) => m.type === "hotel").length;
    const hospitals = mapMarkers.filter((m) => m.type === "hospital").length;
    return { cities: mapMarkers.length, hotels, hospitals };
  }, []);

  const currentId = active ?? selectedId;

  // Draw the arcs in once the map scrolls into view.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || drawn) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [drawn]);

  const map = (
    <div
      ref={containerRef}
      className="relative mx-auto w-full"
      style={{ maxWidth: variant === "compact" ? 460 : 560 }}
    >
      {/* aspect-ratio box matching the India viewBox so pins + arcs align */}
      <div className="relative" style={{ paddingTop: `${(VB_H / VB_W) * 100}%` }}>
        <svg
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id={`fill-${uid}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" style={{ stopColor: "rgb(var(--brand-50))" }} />
              <stop offset="55%" style={{ stopColor: "rgb(var(--brand-100))" }} />
              <stop offset="100%" style={{ stopColor: "rgb(var(--brand-200))" }} />
            </linearGradient>
            <filter id={`soft-${uid}`} x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow
                dx="0"
                dy="16"
                stdDeviation="20"
                floodColor="rgb(var(--brand-700))"
                floodOpacity="0.18"
              />
            </filter>
            {/* Clip the internal borders to the silhouette so only the state
                divisions show (any coastline overdraw is trimmed away). */}
            <clipPath id={`clip-${uid}`}>
              <path d={indiaPath} />
            </clipPath>
          </defs>

          <path
            d={indiaPath}
            fill={`url(#fill-${uid})`}
            stroke="rgb(var(--brand-500))"
            strokeWidth={2}
            strokeLinejoin="round"
            filter={`url(#soft-${uid})`}
          />

          {/* Internal state / UT borders, a political-map feel */}
          <g
            clipPath={`url(#clip-${uid})`}
            fill="none"
            stroke="rgb(var(--brand-500))"
            strokeOpacity={0.4}
            strokeWidth={1}
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          >
            {statePaths.map((d, i) => (
              <path key={i} d={d} vectorEffect="non-scaling-stroke" />
            ))}
          </g>

          {/* HQ -> city connecting arcs */}
          <g
            fill="none"
            stroke="rgb(var(--brand-600))"
            strokeWidth={1.6}
            strokeLinecap="round"
            opacity={0.55}
          >
            {destinations.map((m, i) => {
              const isOn = currentId === m.id;
              return (
                <path
                  key={m.id}
                  d={arcPath(m)}
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={drawn ? 0 : 1}
                  strokeWidth={isOn ? 3 : 1.6}
                  opacity={isOn ? 1 : 0.5}
                  style={{
                    transition: `stroke-dashoffset 1.1s ease ${i * 55}ms, opacity .25s ease, stroke-width .25s ease`,
                  }}
                />
              );
            })}
          </g>
        </svg>

        {/* Interactive markers (HTML overlay, same projection as the SVG) */}
        <div className="absolute inset-0">
          {mapMarkers.map((m) => {
            const pos = projectToPercent(m.lat, m.lng);
            const isHQ = m.type === "hq";
            const isOn = currentId === m.id;
            return (
              <button
                key={m.id}
                type="button"
                className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                style={{ left: `${pos.left}%`, top: `${pos.top}%`, zIndex: isOn ? 30 : isHQ ? 20 : 10 }}
                aria-label={`${m.city}, ${m.state}, ${m.role}`}
                onMouseEnter={() => setActive(m.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(m.id)}
                onBlur={() => setActive(null)}
                onClick={() => setSelectedId(m.id)}
              >
                {/* pulse ring (keyframe carries its own centering transform) */}
                <span
                  className={`absolute left-1/2 top-1/2 rounded-full ${
                    isHQ ? "bg-brand-500/40" : "bg-brand-400/40"
                  } ${isHQ || isOn ? "animate-pulse-ring" : "opacity-0"}`}
                  style={{
                    width: isHQ ? 26 : 18,
                    height: isHQ ? 26 : 18,
                    marginLeft: isHQ ? -13 : -9,
                    marginTop: isHQ ? -13 : -9,
                  }}
                  aria-hidden="true"
                />
                {/* marker */}
                <span
                  className={`relative block rounded-full ring-2 ring-white transition-transform duration-200 ${
                    typeMarker[m.type].core
                  } ${isOn ? "scale-125" : "group-hover:scale-110"}`}
                  style={{
                    width: isHQ ? 18 : 13,
                    height: isHQ ? 18 : 13,
                    boxShadow: `${typeMarker[m.type].glow}, 0 2px 6px rgba(6,44,64,0.5)`,
                  }}
                  aria-hidden="true"
                />
                {/* tooltip */}
                <span
                  className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink-900 px-2.5 py-1 text-[0.7rem] font-semibold text-white shadow-lift transition duration-150 ${
                    isOn ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {m.city}
                  {isHQ && (
                    <span className="ml-1 rounded bg-white/20 px-1 text-[0.6rem]">HO</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  const legend = (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-ink-600">
      <li className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-gradient-to-br from-ink-700 to-ink-950 ring-2 ring-white" />
        Head Office
      </li>
      <li className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brand-300 to-brand-600" />
        Hotels &amp; resorts
      </li>
      <li className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-accent-400 to-accent-600" />
        Hospitals
      </li>
    </ul>
  );

  if (variant === "compact") {
    return (
      <div className={className}>
        {map}
        <div className="mt-8 flex flex-col items-center gap-5">
          {legend}
          <Link to="/locations" className="btn-primary">
            See all locations
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid items-start gap-10 lg:grid-cols-2 ${className}`}>
      {map}

      <div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: "18", label: "Cities" },
            { value: "30+", label: "Operational units" },
            { value: `${counts.hospitals}+`, label: "Hospitals" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-ink-100 bg-white p-4 text-center shadow-soft">
              <div className="font-display text-2xl font-extrabold text-brand-600">{s.value}</div>
              <div className="mt-1 text-xs font-semibold text-ink-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          {legend}
          <ul className="mt-6 grid grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3">
            {mapMarkers.map((m) => {
              const isOn = currentId === m.id;
              return (
                <li key={m.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(m.id)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(m.id)}
                    onBlur={() => setActive(null)}
                    onClick={() => setSelectedId(m.id)}
                    className={`flex w-full items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition ${
                      isOn
                        ? "border-brand-300 bg-brand-50 text-brand-700 shadow-sm"
                        : "border-ink-100 bg-white text-ink-700 hover:border-brand-200 hover:bg-brand-50/50 hover:text-brand-800"
                    }`}
                  >
                    <span className={`h-2 w-2 shrink-0 rounded-full ${typeDotClass[m.type]}`} />
                    <span className="truncate">{m.city}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

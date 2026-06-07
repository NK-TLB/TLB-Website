// Template (design system) catalogue for The Laundry Bag site.
//
// IMPORTANT: every template uses the EXACT same colour palette as the default
// (logo Sky Blue #009cdc primary, teal accent, slate ink). Templates differ
// ONLY in design language — shape (border radius), typography, depth (shadows)
// and borders. The actual tokens live as CSS variables in src/index.css
// (`:root` = default, `[data-theme="…"]` = the alternatives).
//
// The directions below are drawn from the dominant 2026 web-design styles:
// editorial serif, Swiss / engineering precision (Linear · Vercel),
// neo-brutalism, glassmorphism, and a friendly rounded consumer look.

export type ThemeId =
  | "default"
  | "editorial"
  | "precision"
  | "brutalist"
  | "glass"
  | "friendly";

export interface ThemeOption {
  id: ThemeId;
  name: string;
  tagline: string;
  /** Google Fonts stylesheet to load when this template is used. */
  fontHref?: string;
  /** Font family used to render the "Aa" preview tile in the switcher. */
  previewFont: string;
  previewWeight: number;
  previewTransform: "none" | "uppercase";
  /** Corner radius of the preview tile (communicates the template's shape). */
  previewRadius: string;
  /** Box-shadow of the preview tile (communicates the template's depth). */
  previewShadow: string;
  /** Border of the preview tile. */
  previewBorder: string;
}

export const THEMES: ThemeOption[] = [
  {
    id: "default",
    name: "Soft (Default)",
    tagline: "Friendly rounded corners, Rubik display, soft brand shadows.",
    previewFont: '"Rubik", sans-serif',
    previewWeight: 800,
    previewTransform: "none",
    previewRadius: "1rem",
    previewShadow: "0 8px 18px -8px rgba(0,156,220,0.5)",
    previewBorder: "0",
  },
  {
    id: "editorial",
    name: "Editorial",
    tagline: "Magazine feel — serif headlines, airy space, hairline rules.",
    fontHref:
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap",
    previewFont: '"Fraunces", Georgia, serif',
    previewWeight: 600,
    previewTransform: "none",
    previewRadius: "0.375rem",
    previewShadow: "0 0 0 1px rgba(15,25,36,0.12)",
    previewBorder: "0",
  },
  {
    id: "precision",
    name: "Precision",
    tagline: "Swiss engineering minimal — sharp, tight type, hairline rings.",
    fontHref:
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap",
    previewFont: '"Space Grotesk", sans-serif',
    previewWeight: 700,
    previewTransform: "none",
    previewRadius: "0.375rem",
    previewShadow: "0 1px 3px rgba(0,124,180,0.25), 0 0 0 1px rgba(0,124,180,0.2)",
    previewBorder: "0",
  },
  {
    id: "brutalist",
    name: "Brutalist",
    tagline: "Bold challenger look — thick borders, hard offset shadows, caps.",
    fontHref:
      "https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&display=swap",
    previewFont: '"Archivo", sans-serif',
    previewWeight: 900,
    previewTransform: "uppercase",
    previewRadius: "0.25rem",
    previewShadow: "3px 3px 0 0 #0f1924",
    previewBorder: "2px solid #0f1924",
  },
  {
    id: "glass",
    name: "Glass",
    tagline: "Techno-futurist — frosted surfaces, big radius, glowing depth.",
    fontHref:
      "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap",
    previewFont: '"Sora", sans-serif',
    previewWeight: 700,
    previewTransform: "none",
    previewRadius: "1.25rem",
    previewShadow: "0 10px 26px -8px rgba(0,156,220,0.6)",
    previewBorder: "1px solid rgba(255,255,255,0.7)",
  },
  {
    id: "friendly",
    name: "Friendly",
    tagline: "Warm consumer vibe — extra-round bubbly corners, Poppins type.",
    fontHref:
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap",
    previewFont: '"Poppins", sans-serif',
    previewWeight: 700,
    previewTransform: "none",
    previewRadius: "1.5rem",
    previewShadow: "0 10px 22px -8px rgba(0,156,220,0.5)",
    previewBorder: "0",
  },
];

export const DEFAULT_THEME: ThemeId = "default";
export const THEME_STORAGE_KEY = "tlb-theme";

export function isThemeId(value: unknown): value is ThemeId {
  return typeof value === "string" && THEMES.some((t) => t.id === value);
}

/** Inject a Google Fonts stylesheet once (keyed by href). Safe to call often. */
export function loadFont(href?: string) {
  if (!href || typeof document === "undefined") return;
  if (document.querySelector(`link[data-theme-font][href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.setAttribute("data-theme-font", "");
  document.head.appendChild(link);
}

/** Preload every template's web font (used when the switcher panel opens). */
export function loadAllThemeFonts() {
  THEMES.forEach((t) => loadFont(t.fontHref));
}

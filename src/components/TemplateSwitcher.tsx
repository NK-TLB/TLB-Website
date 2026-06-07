import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { useTheme } from "../theme/useTheme";
import { THEMES, loadAllThemeFonts, type ThemeId } from "../theme/themes";

export default function TemplateSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTheme = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  // Preload every template's web font so the previews render in the real face.
  useEffect(() => {
    if (open) loadAllThemeFonts();
  }, [open]);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function applyTemplate(id: ThemeId) {
    setTheme(id);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-xs font-semibold text-ink-700 shadow-soft transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
      >
        <Icon name="palette" className="h-4 w-4" />
        <span>
          Template: <span className="text-brand-700">{activeTheme.name}</span>
        </span>
        <span
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Choose a site template"
          className="absolute bottom-full left-0 z-50 mb-3 w-[20rem] max-w-[calc(100vw-2.5rem)] origin-bottom-left animate-fade-up rounded-3xl border border-ink-100 bg-white p-3 shadow-lift sm:left-auto sm:right-0 sm:origin-bottom-right"
        >
          <div className="flex items-center justify-between px-2 pb-2 pt-1">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ink-500">
              Choose a template
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full text-ink-400 transition hover:bg-ink-50 hover:text-ink-700"
            >
              <Icon name="close" className="h-3.5 w-3.5" />
            </button>
          </div>

          <ul className="max-h-[60vh] space-y-1.5 overflow-y-auto pr-0.5">
            {THEMES.map((t) => {
              const isActive = t.id === theme;
              return (
                <li key={t.id}>
                  <div
                    className={`flex items-center gap-3 rounded-2xl border p-2.5 transition ${
                      isActive
                        ? "border-brand-300 bg-brand-50/70"
                        : "border-ink-100 hover:border-ink-200 hover:bg-ink-50/60"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-gradient text-base leading-none text-white"
                      style={{
                        borderRadius: t.previewRadius,
                        boxShadow: t.previewShadow,
                        border: t.previewBorder,
                        fontFamily: t.previewFont,
                        fontWeight: t.previewWeight,
                        textTransform: t.previewTransform,
                      }}
                    >
                      Aa
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                        {t.name}
                        {t.id === "default" && (
                          <span className="rounded-full bg-ink-100 px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-ink-500">
                            Default
                          </span>
                        )}
                      </p>
                      <p className="truncate text-xs text-ink-500">{t.tagline}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => applyTemplate(t.id)}
                      disabled={isActive}
                      aria-label={
                        isActive ? `${t.name} is active` : `Apply the ${t.name} template`
                      }
                      className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${
                        isActive
                          ? "cursor-default bg-brand-100 text-brand-700"
                          : "bg-brand-gradient text-white shadow-soft hover:shadow-lift hover:brightness-105"
                      }`}
                    >
                      {isActive ? "Active" : "Apply"}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="px-2 pt-2 text-[0.65rem] leading-relaxed text-ink-400">
            Every template shares our sky-blue brand palette — only the design
            (shape, type &amp; depth) changes. Your choice is saved on this device.
          </p>
        </div>
      )}
    </div>
  );
}

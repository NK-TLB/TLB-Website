import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { mapMarkers } from "../data/mapMarkers";
import { site } from "../data/site";

type Result =
  | { state: "idle" }
  | { state: "covered"; city: string; region: string; note: string }
  | { state: "nearby"; query: string; nearest: string; note: string }
  | { state: "empty" };

const norm = (s: string) => s.trim().toLowerCase();

/** Lightweight "do you serve my city?" checker wired to the live map markers in
 * mapMarkers.ts. No backend — instant client-side match against our footprint. */
export default function ServiceAreaChecker({ className = "" }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Result>({ state: "idle" });

  const suggestions = useMemo(() => {
    const q = norm(query);
    if (!q) return [];
    return mapMarkers
      .filter((m) => norm(m.city).includes(q) || norm(m.state).includes(q))
      .slice(0, 5);
  }, [query]);

  const check = (raw?: string) => {
    const value = raw ?? query;
    const q = norm(value);
    if (!q) {
      setResult({ state: "empty" });
      return;
    }
    const exact =
      mapMarkers.find((m) => norm(m.city) === q) ??
      mapMarkers.find((m) => norm(m.city).includes(q) || norm(m.state).includes(q));

    if (exact) {
      setQuery(exact.city);
      setResult({
        state: "covered",
        city: exact.city,
        region: exact.state,
        note: exact.note,
      });
      return;
    }
    setResult({
      state: "nearby",
      query: value.trim(),
      nearest: "Raipur HQ",
      note: "We run programmes in 20+ cities and regularly set up new on-premise and central-processing operations. Tell us your location and volumes — we'll let you know how quickly we can serve you.",
    });
  };

  return (
    <div
      className={`rounded-5xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8 ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white">
          <Icon name="pin" className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-display text-lg font-bold text-ink-900">
            Do we serve your city?
          </h3>
          <p className="text-sm text-ink-500">
            Check our footprint across {site.cities.length}+ cities in seconds.
          </p>
        </div>
      </div>

      <form
        className="relative mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          check();
        }}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (result.state !== "idle") setResult({ state: "idle" });
              }}
              placeholder="Enter your city or state (e.g. Goa, Mumbai)"
              aria-label="Your city or state"
              className="w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            {suggestions.length > 0 && result.state === "idle" && (
              <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-lift">
                {suggestions.map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => check(s.city)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm hover:bg-brand-50"
                    >
                      <span className="font-semibold text-ink-800">{s.city}</span>
                      <span className="text-xs text-ink-400">{s.state}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button type="submit" className="btn-primary shrink-0">
            Check coverage
          </button>
        </div>
      </form>

      {result.state === "covered" && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-4">
          <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
          <div>
            <p className="font-semibold text-ink-900">
              Yes — we operate in {result.city}, {result.region}.
            </p>
            <p className="mt-1 text-sm text-ink-600">{result.note}</p>
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Request a proposal
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {result.state === "nearby" && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-sky2-100 bg-sky2-50 p-4">
          <Icon name="truck" className="mt-0.5 h-5 w-5 shrink-0 text-sky2-600" />
          <div>
            <p className="font-semibold text-ink-900">
              We&apos;re expanding towards {result.query}.
            </p>
            <p className="mt-1 text-sm text-ink-600">{result.note}</p>
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky2-700 hover:text-sky2-800"
            >
              Talk to our team
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {result.state === "empty" && (
        <p className="mt-4 text-sm text-accent-600">
          Please type a city or state to check coverage.
        </p>
      )}
    </div>
  );
}

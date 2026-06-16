type Props = {
  className?: string;
};

/**
 * Animated success medallion for form confirmation — circle draws in,
 * then the checkmark stroke. Respects reduced motion via CSS.
 */
export default function SuccessCheckmark({ className = "" }: Props) {
  return (
    <div
      className={`relative mx-auto flex h-[5.25rem] w-[5.25rem] items-center justify-center ${className}`}
      role="img"
      aria-label="Submission successful"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-brand-400/25 motion-safe:animate-pulse-ring motion-reduce:hidden [animation-delay:0.95s]"
      />

      <span className="relative flex h-full w-full items-center justify-center rounded-full bg-brand-gradient shadow-lift ring-[5px] ring-[rgb(var(--page-bg))] motion-safe:animate-success-pop motion-reduce:opacity-100">
        <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden="true">
          <path
            d="M5 13l4 4L19 7"
            fill="none"
            stroke="white"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            className="motion-safe:animate-success-check motion-reduce:[stroke-dashoffset:0]"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
          />
        </svg>

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full -rotate-90 motion-reduce:hidden"
          viewBox="0 0 80 80"
          aria-hidden="true"
        >
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            opacity="0.45"
            pathLength={1}
            className="motion-safe:animate-success-circle"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
          />
        </svg>
      </span>
    </div>
  );
}

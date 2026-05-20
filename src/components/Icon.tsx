import type { ReactElement } from "react";

type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, ReactElement> = {
  washer: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="14" r="4" />
      <circle cx="8" cy="7" r="0.6" fill="currentColor" />
      <circle cx="11" cy="7" r="0.6" fill="currentColor" />
    </>
  ),
  shirt: (
    <>
      <path d="M4 7l4-3 4 2 4-2 4 3-2 3-2-1v11H8V9L6 10 4 7z" />
    </>
  ),
  iron: (
    <>
      <path d="M3 17h18" />
      <path d="M5 17c0-5 4-8 9-8h5l-2 8" />
      <path d="M7 21h2" />
      <path d="M13 21h2" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 12H6L5 8z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  check: <path d="M5 12l4 4 10-10" />,
  phone: (
    <path d="M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  leaf: (
    <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14zM5 19l6-6" />
  ),
  shield: (
    <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
  ),
  factory: (
    <>
      <path d="M3 21h18V11l-5 3V11l-5 3V8L3 11v10z" />
      <path d="M6 21v-4M10 21v-4M14 21v-4M18 21v-4" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V4h8l10 10-8 8L3 12z" />
      <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" />
    </>
  ),
  spark: (
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2" />
  ),
  star: (
    <path d="M12 3l2.6 5.4 6 .9-4.3 4.2 1 6L12 16.8 6.7 19.5l1-6L3.4 9.3l6-.9L12 3z" />
  ),
  facebook: (
    <path d="M13.5 22v-8h3l.5-4h-3.5V7.5c0-1.2.3-2 2-2H17V2.2c-.3 0-1.4-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.6V10H6v4h3.8v8h3.7z" />
  ),
  twitter: (
    <path d="M22 5.9a8.2 8.2 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.6 1A4.1 4.1 0 0 0 11.7 9 11.7 11.7 0 0 1 3 4.5a4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.8.1 4.1 4.1 0 0 0 3.9 2.9A8.2 8.2 0 0 1 2 18.3 11.6 11.6 0 0 0 8.3 20c7.5 0 11.6-6.3 11.6-11.6v-.5A8.3 8.3 0 0 0 22 5.9z" />
  ),
};

export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const path = paths[name] ?? paths.check;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}

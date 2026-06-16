import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Large accent-framed panel — theme-aware 4xl radius (see .frame-4xl in index.css). */
export default function PremiumFrame({ children, className = "" }: Props) {
  return (
    <article className={`frame-4xl ${className}`}>
      <div className="frame-4xl-inner">
        <span aria-hidden="true" className="accent-hairline" />
        {children}
      </div>
    </article>
  );
}

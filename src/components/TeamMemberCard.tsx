import { useState } from "react";
import Icon from "./Icon";
import type { TeamMember } from "../data/site";

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => part && part !== "Add")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Portrait({ member }: { member: TeamMember }) {
  const [failed, setFailed] = useState(false);
  const showImage = member.image && !failed;

  if (showImage) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-50">
        <img
          src={member.image}
          alt={`${member.name}, ${member.role}, The Laundry Bag`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
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

type Props = { member: TeamMember };

export default function TeamMemberCard({ member }: Props) {
  return (
    <article className="accent-box-2xl card-hover group h-full overflow-hidden hover:-translate-y-1 hover:shadow-lift">
      <div className="accent-box-2xl-inner flex h-full flex-col overflow-hidden p-0">
        <Portrait member={member} />
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <span className="eyebrow w-fit">
            {member.department}
          </span>
          <h3 className="h3 mt-4">
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-semibold text-brand-700">{member.role}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{member.bio}</p>
          {(member.email || member.linkedIn) && (
            <div className="mt-5 flex flex-wrap gap-2 border-t border-brand-100/70 pt-4">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="btn-outline btn-xs"
                >
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

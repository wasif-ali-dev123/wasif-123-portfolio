import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  /** Small overline label above the title. */
  eyebrow?: string;
  title: string;
  /** Optional intro paragraph rendered under the title. */
  lead?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Consistent section shell: semantic <section> with an accessible heading,
 * generous vertical rhythm, and a centered max-width container.
 */
export function Section({ id, eyebrow, title, lead, children, className = "" }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow ? (
              <p className="mb-4 flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                <span aria-hidden="true" className="h-px w-6 bg-accent" />
                {eyebrow}
              </p>
            ) : null}
            <h2
              id={headingId}
              className="font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-text sm:text-[2.75rem]"
            >
              {title}
            </h2>
            {lead ? <p className="mt-4 text-lg leading-relaxed text-muted">{lead}</p> : null}
          </div>
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/** Full-width hairline divider between sections. */
export function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8" aria-hidden="true">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border-strong to-transparent" />
    </div>
  );
}

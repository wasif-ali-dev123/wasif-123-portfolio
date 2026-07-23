import { experience } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Six years shipping and operating production software"
    >
      <ol className="space-y-0">
        {experience.map((job, i) => (
          <Reveal
            as="li"
            key={`${job.company}-${job.role}`}
            delay={i * 60}
            className="grid gap-x-10 gap-y-4 border-t border-border py-8 first:border-t-0 first:pt-0 sm:grid-cols-[13rem_1fr]"
          >
            {/* Ledger column: period + company */}
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {job.period}
              </p>
              <p className="mt-2 font-serif text-lg font-medium text-text">{job.company}</p>
            </div>

            {/* Detail column: role + highlights */}
            <div>
              <h3 className="text-base font-semibold text-text">{job.role}</h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {job.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1 w-3 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

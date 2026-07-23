import { education, achievements } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { AwardIcon } from "./icons";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & achievements"
      title="Foundations and recognition"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Education */}
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-7">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Education
            </h3>
            <ul className="mt-5 space-y-6">
              {education.map((item) => (
                <li key={`${item.degree}-${item.school}`}>
                  <p className="font-serif text-lg font-medium leading-snug text-text">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Achievements */}
        <Reveal delay={80} className="h-full">
          <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-7">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Achievements
            </h3>
            <ul className="mt-5 space-y-4">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-text">
                  <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                    <AwardIcon width={18} height={18} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

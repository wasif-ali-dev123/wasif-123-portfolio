import { about, profile } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const focusAreas = [
  "Distributed systems & microservices",
  "Scalable REST & GraphQL APIs",
  "Real-time & event-driven workflows",
  "Performance, caching & databases",
  "AWS, Docker & CI/CD",
  "Ownership & stakeholder communication",
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Senior engineer who owns outcomes, not just tickets">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <aside className="rounded-2xl border border-border bg-surface p-6" aria-label="Focus areas and location">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Focus areas</h3>
            <ul className="mt-4 space-y-3">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-start gap-3 text-sm text-text">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-4">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">Based in</p>
              <p className="mt-1 text-sm font-medium text-text">{profile.location}</p>
            </div>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}

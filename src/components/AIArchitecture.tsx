import { aiIntro, aiWorkflow, architectureCards } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function AIArchitecture() {
  return (
    <Section id="engineering" eyebrow="AI-assisted engineering" title={aiIntro.lead} lead={aiIntro.body}>
      {/* Day-to-day AI-assisted workflow */}
      <div>
        <h3 className="font-serif text-xl font-semibold text-text">How I work with AI day to day</h3>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiWorkflow.map((s, i) => (
            <Reveal as="li" key={s.step} delay={(i % 3) * 60}>
              <div className="flex h-full gap-4 rounded-xl border border-border bg-surface p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-sm font-semibold text-accent">
                  {s.step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-text">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Architecture capability cards */}
      <div className="mt-16">
        <h3 className="font-serif text-xl font-semibold text-text">Architecture building blocks</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {architectureCards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 60} className="h-full">
              <div className="h-full rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-strong">
                <h4 className="text-sm font-semibold text-text">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Diagram */}
      <div className="mt-16">
        <h3 className="mb-6 font-serif text-xl font-semibold text-text">Reference architecture</h3>
        <Reveal>
          <ArchitectureDiagram />
        </Reveal>
      </div>
    </Section>
  );
}

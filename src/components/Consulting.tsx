import { consulting } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Consulting() {
  return (
    <Section id="consulting" eyebrow="Technical consulting" title={consulting.heading} lead={consulting.lead}>
      <div className="grid gap-10 lg:grid-cols-5">
        {/* Approach steps */}
        <ol className="lg:col-span-3">
          {consulting.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 40}>
              <div className="flex gap-4 pb-6 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs font-semibold text-accent">
                    {i + 1}
                  </span>
                  {i < consulting.steps.length - 1 ? (
                    <span className="mt-1 w-px grow bg-border" aria-hidden="true" />
                  ) : null}
                </div>
                <div className="pb-2">
                  <p className="text-sm font-semibold text-text">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Example callout */}
        <div className="lg:col-span-2">
          <Reveal delay={120}>
            <figure className="sticky top-24 rounded-2xl border border-border bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">In plain language</p>
              <blockquote className="mt-3 font-serif text-lg italic leading-relaxed text-text">
                &ldquo;{consulting.example}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                — how I explain an architecture trade-off to a non-technical stakeholder
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

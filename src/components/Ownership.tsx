import { consulting } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { container, eyebrow, h2 } from "./ui";

/** Technical consulting: from requirements to production. */
export function Ownership() {
  return (
    <section id="consulting" aria-labelledby="consulting-heading" className={`${container} flex flex-col gap-10 py-24`}>
      <Reveal className="flex max-w-[720px] flex-col gap-4">
        <span className={`${eyebrow} text-faint`}>Technical consulting</span>
        <h2 id="consulting-heading" className={`${h2} text-strong`}>
          {consulting.heading}
        </h2>
        <p className="text-[17px] leading-relaxed text-muted">{consulting.lead}</p>
      </Reveal>
      <div className="flex flex-wrap gap-10">
        <ol className="flex min-w-0 flex-[3_1_420px] flex-col">
          {consulting.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 40} className="flex gap-4 pb-6 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent font-mono text-xs font-medium text-accent">
                  {i + 1}
                </span>
                {i < consulting.steps.length - 1 ? <span aria-hidden="true" className="mt-1 w-px grow bg-line-strong" /> : null}
              </div>
              <div className="pb-2">
                <p className="font-semibold text-strong">{s.title}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={120} className="min-w-0 flex-[2_1_320px]">
          <figure className="m-0 rounded-[18px] border border-line bg-surface p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">In plain language</p>
            <blockquote className="mt-3 font-display text-xl leading-relaxed text-strong">&ldquo;{consulting.example}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm text-faint">How I explain an architecture trade-off to a non-technical stakeholder</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

import { experience, links } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { container, eyebrow, h2 } from "./ui";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className={`${container} flex flex-col gap-10 pb-24`}>
      <Reveal className="flex max-w-[680px] flex-col gap-3">
        <span className={`${eyebrow} text-faint`}>Experience</span>
        <h2 id="experience-heading" className={`${h2} text-strong`}>
          Six years shipping and operating production software.
        </h2>
      </Reveal>

      <ol className="flex flex-col border-t border-line">
        {experience.map((e, i) => (
          <Reveal as="li" key={e.company} delay={i * 60} className="flex flex-wrap gap-x-10 gap-y-4 border-b border-line py-8">
            <div className="flex flex-[0_0_220px] flex-col gap-1">
              <span className="text-sm text-faint">{e.period}</span>
              <span className="font-display text-xl font-bold text-strong">{e.company}</span>
              <span className="text-[15px] text-soft">{e.role}</span>
            </div>
            <ul className="flex min-w-0 flex-[1_1_420px] flex-col gap-2.5">
              {e.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>

      {links.resume ? (
        <a href={links.resume} className="self-start text-[15px] text-text underline underline-offset-4">
          Full resume (PDF) →
        </a>
      ) : null}
    </section>
  );
}

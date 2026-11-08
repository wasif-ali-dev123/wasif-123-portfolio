import { achievements, education } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { container, eyebrow, h2 } from "./ui";
import { AwardIcon } from "./icons";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className={`${container} flex flex-col gap-10 pb-24`}>
      <Reveal className="flex flex-col gap-3">
        <span className={`${eyebrow} text-faint`}>Education &amp; achievements</span>
        <h2 id="education-heading" className={`${h2} text-strong`}>
          Foundations and recognition.
        </h2>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-5">
        <Reveal className="rounded-[18px] border border-line bg-surface p-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">Education</h3>
          <ul className="mt-5 flex flex-col gap-6">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="font-display text-lg font-bold leading-snug text-strong">{e.degree}</p>
                <p className="mt-1 text-[15px] text-muted">{e.school}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-faint">{e.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80} className="rounded-[18px] border border-line bg-surface p-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">Achievements</h3>
          <ul className="mt-5 flex flex-col gap-4">
            {achievements.map((a) => (
              <li key={a} className="flex items-start gap-3 text-[15px] leading-relaxed text-text">
                <AwardIcon width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

import { about } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { container, eyebrow, h2 } from "./ui";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className={`${container} flex flex-col gap-10 pb-24 pt-8`}>
      <Reveal className="flex max-w-[720px] flex-col gap-3">
        <span className={`${eyebrow} text-faint`}>About</span>
        <h2 id="about-heading" className={`${h2} text-strong`}>
          {about.title}
        </h2>
      </Reveal>
      <div className="flex flex-wrap gap-10">
        <div className="flex min-w-0 flex-[2_1_480px] flex-col gap-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="text-[17px] leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="min-w-0 flex-[1_1_300px]">
          <aside aria-label="Focus areas and location" className="rounded-[18px] border border-line bg-surface p-7">
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">Focus areas</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {about.focusAreas.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[15px] text-text">
                  <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-line pt-4">
              <p className="text-xs uppercase tracking-[0.08em] text-faint">Based in</p>
              <p className="mt-1 text-[15px] font-medium text-strong">{about.location}</p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

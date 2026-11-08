import { skillGroups } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { container, eyebrow, h2 } from "./ui";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className={`${container} flex flex-col gap-10 pb-24`}>
      <Reveal className="flex max-w-[680px] flex-col gap-3">
        <span className={`${eyebrow} text-faint`}>Skills</span>
        <h2 id="skills-heading" className={`${h2} text-strong`}>
          A grouped, honest view of the stack.
        </h2>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.category} delay={(i % 3) * 60} className="rounded-[18px] border border-line bg-surface p-6">
            <h3 className={`text-sm font-semibold uppercase tracking-[0.08em] ${i === 0 ? "text-accent" : "text-soft"}`}>{g.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li key={s} className="rounded-full border border-line-strong px-3 py-1 text-[13px] text-text">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

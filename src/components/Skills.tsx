import { skillGroups } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { tag } from "./ui";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A grouped, honest view of the stack"
      lead="Technologies I work with, organized by area. No proficiency bars — just what I use to build and operate systems."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 60} className="h-full">
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className={tag}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

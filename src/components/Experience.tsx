import { experience, links, stackLine } from "@/data/portfolio";
import { container } from "./ui";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className={`${container} flex flex-col gap-7 pb-24`}>
      <h2 id="experience-heading" className="font-display text-[32px] font-bold text-strong">
        Experience
      </h2>
      <ol className="flex flex-col border-t border-line">
        {experience.map((e) => (
          <li key={e.role} className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b border-line py-[22px]">
            <span className="flex-[0_0_180px] text-sm text-faint">{e.period}</span>
            <span className="flex-[1_1_260px] text-lg font-semibold text-strong">{e.role}</span>
            <span className="flex-[1_1_320px] text-[15px] text-muted">{e.note}</span>
          </li>
        ))}
      </ol>
      <p className="text-[15px] leading-relaxed text-faint">
        {stackLine}{" "}
        {links.resume ? (
          <a href={links.resume} className="text-text underline underline-offset-4">
            Full resume (PDF) →
          </a>
        ) : null}
      </p>
    </section>
  );
}

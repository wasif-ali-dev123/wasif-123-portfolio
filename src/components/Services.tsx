import { services } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { container, eyebrow, h2 } from "./ui";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className={`${container} flex flex-col gap-10 py-24`}>
      <Reveal className="flex max-w-[680px] flex-col gap-3">
        <span className={`${eyebrow} text-faint`}>How I can help</span>
        <h2 id="services-heading" className={`${h2} text-strong`}>
          From an AI idea to a feature your users rely on.
        </h2>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60} as="article" className="flex flex-col gap-3 rounded-[18px] border border-line bg-surface p-7">
            <span className="font-mono text-[13px] text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="font-display text-[22px] font-bold text-strong">{s.title}</h3>
            <p className="text-base leading-relaxed text-muted">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { bookingHref, engagements, services } from "@/data/portfolio";
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

      <div className="flex flex-col gap-5 pt-6">
        <h3 className="font-display text-[26px] font-bold text-strong">Ways to work together</h3>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5">
          {engagements.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 60} className="flex flex-col gap-3 rounded-[18px] border border-line-strong p-7">
              <h4 className="font-display text-xl font-bold text-strong">{e.title}</h4>
              <p className="text-base leading-relaxed text-muted">{e.text}</p>
              <p className="text-sm text-faint">Best for: {e.fit}</p>
              <a href={bookingHref} className="mt-auto pt-2 text-[15px] font-semibold text-accent underline-offset-4 hover:underline">
                Talk about this →
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { testimonials, workingPromises } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { container } from "./ui";
import { namedIcons } from "./icons";

/** Quotes (when there are any) and how working together goes. */
export function Trust() {
  return (
    <section aria-label="Working with me" className={`${container} flex flex-col gap-8 pt-24`}>
      {testimonials.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
          {testimonials.map((t) => (
            <Reveal key={t.name} as="article" className="flex flex-col gap-5 rounded-[18px] border border-line bg-surface p-8">
              <figure className="m-0 flex flex-col gap-5">
                <blockquote className="font-display text-[22px] leading-snug text-strong">“{t.quote}”</blockquote>
                <figcaption className="flex flex-col">
                  <span className="font-semibold text-strong">{t.name}</span>
                  <span className="text-sm text-faint">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      ) : null}

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 border-y border-line py-7">
        {workingPromises.map((p) => {
          const Icon = namedIcons[p.icon];
          return (
            <li key={p.title} className="flex items-start gap-3">
              <Icon width={22} height={22} strokeWidth={2} className="mt-0.5 flex-none text-accent" />
              <span className="text-[15px] leading-normal text-soft">
                <strong className="text-strong">{p.title}</strong>
                <br />
                {p.text}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

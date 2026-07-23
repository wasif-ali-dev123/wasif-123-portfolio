import type { Project } from "@/data/portfolio";
import { withBasePath } from "@/config/site";
import { tag } from "./ui";
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon, LockIcon } from "./icons";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{label}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}

/** Decorative placeholder shown when no screenshot is provided yet. */
function PlaceholderPanel({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div
      className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-border bg-surface-2"
      role="img"
      aria-label={`${name} — screenshot placeholder`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span className="text-3xl font-semibold tracking-tight text-muted">{initials}</span>
        <span className="text-xs uppercase tracking-[0.14em] text-muted">Screenshot coming soon</span>
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  const indexLabel = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-border-strong">
      {/* Media */}
      {project.image ? (
        <figure className="m-0">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export: image optimizer is disabled by design */}
          <img
            src={withBasePath(project.image)}
            alt={`${project.name} — representative illustration of the product`}
            width={1280}
            height={720}
            loading="lazy"
            className="aspect-[16/9] w-full rounded-xl border border-border object-cover"
          />
          <figcaption className="mt-2 text-xs italic text-muted">
            Representative illustration — production UI is under NDA.
          </figcaption>
        </figure>
      ) : (
        <PlaceholderPanel name={project.name} />
      )}

      {/* Header */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        {indexLabel ? (
          <span
            aria-hidden="true"
            className="font-mono text-sm font-semibold tabular-nums text-accent"
          >
            {indexLabel}
          </span>
        ) : null}
        <h3 className="font-serif text-2xl font-semibold tracking-tight text-text">{project.name}</h3>
        {project.isPrivate ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted">
            <LockIcon width={13} height={13} />
            Private production project
          </span>
        ) : null}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-text">{project.context}</p>

      {/* Case-study fields */}
      <div className="mt-5 space-y-4">
        <Field label="Problem">{project.problem}</Field>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">My contribution</h4>
          <ul className="mt-2 space-y-1.5">
            {project.contribution.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <Field label="Technical approach">{project.approach}</Field>
        <Field label="Architecture / workflow">{project.architecture}</Field>

        <div className="rounded-xl border border-border bg-surface-2 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Outcome</h4>
          <p className="mt-1.5 text-sm leading-relaxed text-text">{project.outcome}</p>
        </div>
      </div>

      {/* Tags */}
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.tags.map((t) => (
          <li key={t} className={tag}>
            {t}
          </li>
        ))}
      </ul>

      {/* Links — rendered only when a real URL is provided */}
      {project.repoUrl || project.demoUrl ? (
        <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-accent"
            >
              <GitHubIcon width={16} height={16} />
              Repository
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-accent"
            >
              <ExternalLinkIcon width={16} height={16} />
              Live site
            </a>
          ) : null}
        </div>
      ) : (
        <div className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted">
          <ArrowRightIcon width={14} height={14} />
          Source under NDA — happy to walk through the architecture on request.
        </div>
      )}
    </article>
  );
}

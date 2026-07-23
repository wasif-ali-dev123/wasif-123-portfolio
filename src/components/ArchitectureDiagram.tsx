/**
 * Accessible architecture diagram built with plain HTML + CSS (no diagram lib).
 * Primary flow: Client → API / Services → Data Layer.
 * The service layer optionally connects to jobs, integrations, storage, and monitoring.
 */

function FlowNode({ title, subtitle, accent = false }: { title: string; subtitle: string; accent?: boolean }) {
  return (
    <div
      className={`flex-1 rounded-xl border p-4 text-center ${
        accent ? "border-accent/50 bg-accent/10" : "border-border bg-surface-2"
      }`}
    >
      <p className="text-sm font-semibold text-text">{title}</p>
      <p className="mt-1 text-xs text-muted">{subtitle}</p>
    </div>
  );
}

function OptionalNode({ label }: { label: string }) {
  return (
    <li className="rounded-lg border border-dashed border-border-strong bg-surface px-3 py-2 text-center text-xs font-medium text-muted">
      {label}
    </li>
  );
}

/** Small connector: horizontal on md+, vertical on small screens. */
function Connector() {
  return (
    <div className="flex items-center justify-center text-muted" aria-hidden="true">
      <span className="hidden md:block">→</span>
      <span className="md:hidden">↓</span>
    </div>
  );
}

const primary = [
  { title: "Client", subtitle: "React / Next.js UI" },
  { title: "API / Services", subtitle: "Node microservices, RBAC & real-time", accent: true },
  { title: "Data Layer", subtitle: "PostgreSQL + Redis cache" },
];

const optional = ["Background jobs / queues", "Third-party integrations", "Object storage (S3)", "WebSockets / real-time", "Observability"];

export function ArchitectureDiagram() {
  return (
    <figure className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <figcaption className="mb-6 text-sm text-muted">
        Representative architecture — not every project uses all of these components.
      </figcaption>

      {/* Visually-hidden linear description for screen readers. */}
      <p className="sr-only">
        Primary request flow: Client to the API and service layer to the data layer. The service layer optionally
        connects to background jobs and queues, third-party integrations, object storage, real-time WebSocket channels,
        and observability tooling.
      </p>

      {/* Primary flow */}
      <div className="flex flex-col gap-3 md:flex-row md:items-stretch" aria-hidden="true">
        {primary.map((node, i) => (
          <div key={node.title} className="flex flex-col gap-3 md:flex-1 md:flex-row md:items-center">
            <FlowNode title={node.title} subtitle={node.subtitle} accent={node.accent} />
            {i < primary.length - 1 ? <Connector /> : null}
          </div>
        ))}
      </div>

      {/* Branch to optional components */}
      <div className="mt-6 border-t border-dashed border-border pt-6">
        <p className="mb-3 text-center text-xs uppercase tracking-[0.14em] text-muted">
          Optional connections from the service layer
        </p>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5" aria-hidden="true">
          {optional.map((label) => (
            <OptionalNode key={label} label={label} />
          ))}
        </ul>
      </div>
    </figure>
  );
}

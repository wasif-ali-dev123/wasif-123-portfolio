import { projects } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured work"
      title="Production systems, not demos"
      lead="Selected work across multi-tenant SaaS, real-estate fintech, distributed asset tracking, and payroll modernization — each a short case study of problem, contribution, and outcome."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} as="div" delay={(i % 2) * 80} className="h-full">
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import type { PortfolioProjectEntry } from "@/src/data/portfolio";
import { PortfolioCard } from "./PortfolioCard";

type PortfolioGridProps = {
  projects: PortfolioProjectEntry[];
};

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  if (projects.length === 0) {
    return (
      <div className="glass-card mx-auto max-w-2xl rounded-[1.25rem] p-6 text-center md:rounded-[1.5rem] md:p-10">
        <h2 className="heading-tight text-heading text-2xl">No projects found</h2>
        <p className="text-muted mt-3">
          This category does not currently have any listed portfolio companies.
        </p>
      </div>
    );
  }

  return (
    <div className="grid min-w-0 grid-cols-[repeat(auto-fill,minmax(min(100%,240px),1fr))] gap-4">
      {projects.map((project) => (
        <PortfolioCard
          key={`${project.categorySlug}-${project.name}`}
          project={project}
        />
      ))}
    </div>
  );
}

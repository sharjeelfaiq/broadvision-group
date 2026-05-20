import type { PortfolioProjectEntry } from "@/src/data/portfolio";
import { PortfolioCard } from "./PortfolioCard";

type PortfolioGridProps = {
  projects: PortfolioProjectEntry[];
};

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  if (projects.length === 0) {
    return (
      <div className="glass-card mx-auto max-w-2xl rounded-[1.25rem] p-6 text-center md:rounded-[1.5rem] md:p-10">
        <h2 className="text-2xl font-black text-white">No projects found</h2>
        <p className="mt-3 text-[#c0c7d6]">
          This category does not currently have any listed portfolio companies.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
      {projects.map((project) => (
        <PortfolioCard
          key={`${project.categorySlug}-${project.name}`}
          project={project}
        />
      ))}
    </div>
  );
}

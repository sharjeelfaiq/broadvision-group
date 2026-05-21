import Image from "next/image";
import type { PortfolioProjectEntry } from "@/src/data/portfolio";

type PortfolioCardProps = {
  project: PortfolioProjectEntry;
};

function compactCategory(category: string) {
  return category
    .replace(" / Big Data / Digital Engagement", "")
    .replace(" / Digital Health", "");
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const category = compactCategory(project.category);

  return (
    <article className="group h-full min-w-0">
      <a
        className="glass-card flex h-full min-h-[17rem] min-w-0 flex-col overflow-hidden rounded-[1.25rem] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--border-accent)] hover:shadow-[0_18px_50px_rgba(39,146,255,0.12),inset_0_1px_0_rgba(255,255,255,0.05)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--primary-focus-ring)]"
        href={project.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="flex min-h-28 items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.045] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          {project.logo ? (
            <Image
              alt={`${project.name} logo`}
              className="max-h-12 w-auto object-contain"
              height={48}
              src={project.logo}
              width={160}
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border-strong)] bg-[var(--primary-glass)] text-3xl font-black text-accent-soft shadow-[0_0_34px_rgba(39,146,255,0.2)]"
            >
              {project.monogram}
            </div>
          )}
        </div>

        <div className="mt-5 flex min-w-0 flex-1 flex-col">
          <div className="flex min-w-0 flex-wrap items-start gap-x-3 gap-y-2">
            <h3 className="heading-tight text-heading min-w-0 flex-[1_1_10rem] text-lg leading-6">
              {project.name}
            </h3>
            <span className="portfolio-card-badge border-[var(--border-accent)] bg-[var(--primary-glass)] text-secondary">
              {category}
            </span>
          </div>

          <p className="portfolio-card-description text-muted mt-3 text-sm leading-6">
            {project.description}
          </p>

          <div className="mt-auto flex min-w-0 flex-wrap gap-2 pt-5">
            <span className="portfolio-card-badge border-white/10 bg-white/[0.04] text-subtle">
              {project.status}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

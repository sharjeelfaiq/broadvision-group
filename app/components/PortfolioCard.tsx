import type { PortfolioProjectEntry } from "@/src/data/portfolio";

type PortfolioCardProps = {
  project: PortfolioProjectEntry;
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <article className="glass-card group flex min-h-[19rem] flex-col rounded-[1.25rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--border-accent)] sm:min-h-[21rem] md:rounded-[1.5rem] md:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="label-caps text-secondary rounded-full bg-[var(--primary-chip)] px-3 py-1 text-[0.58rem]">
          {project.status}
        </span>
        <span className="label-caps text-accent-soft rounded-full bg-white/[0.06] px-3 py-1 text-[0.58rem]">
          {project.category}
        </span>
      </div>

      <div className="mt-6 flex flex-1 flex-col md:mt-8">
        <h3 className="heading-tight text-heading text-xl sm:text-2xl">
          {project.name}
        </h3>
        <p className="text-muted mt-4 flex-1 text-sm leading-6">
          {project.description}
        </p>
        <a
          className="label-caps ui-link mt-7 inline-flex w-fit items-center gap-3 hover:gap-5 md:mt-8"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </article>
  );
}

import type { PortfolioProjectEntry } from "@/src/data/portfolio";

type PortfolioCardProps = {
  project: PortfolioProjectEntry;
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <article className="glass-card group flex min-h-[19rem] flex-col rounded-[1.25rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#2792ff]/50 sm:min-h-[21rem] md:rounded-[1.5rem] md:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="label-caps rounded-full bg-[#2792ff]/25 px-3 py-1 text-[0.58rem] text-[#00c8fe]">
          {project.status}
        </span>
        <span className="label-caps rounded-full bg-[#a5c8ff]/15 px-3 py-1 text-[0.58rem] text-[#a5c8ff]">
          {project.category}
        </span>
      </div>

      <div className="mt-6 flex flex-1 flex-col md:mt-8">
        <h2 className="text-xl font-black leading-tight text-white sm:text-2xl">
          {project.name}
        </h2>
        <p className="mt-4 flex-1 text-sm leading-6 text-[#c0c7d6]">
          {project.description}
        </p>
        <a
          className="label-caps mt-7 inline-flex w-fit items-center gap-3 text-[#2792ff] transition hover:gap-5 hover:text-[#a5c8ff] md:mt-8"
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

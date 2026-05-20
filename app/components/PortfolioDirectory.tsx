import {
  getPortfolioCategoryBySlug,
  getPortfolioProjectsByCategory,
} from "@/src/data/portfolio";
import { PortfolioCategoryFilter } from "./PortfolioCategoryFilter";
import { PortfolioGrid } from "./PortfolioGrid";

type PortfolioDirectoryProps = {
  category?: string | string[];
};

export function PortfolioDirectory({ category }: PortfolioDirectoryProps) {
  const categoryParam = Array.isArray(category) ? category[0] : category ?? null;
  const activeCategory = getPortfolioCategoryBySlug(categoryParam);
  const projects = getPortfolioProjectsByCategory(activeCategory.slug);

  return (
    <>
      <PortfolioCategoryFilter activeSlug={activeCategory.slug} />
      <div className="text-muted mt-8 text-center text-sm font-semibold">
        Showing {projects.length}{" "}
        {projects.length === 1 ? "project" : "projects"}
        {activeCategory.slug === "all" ? "" : ` in ${activeCategory.name}`}
      </div>
      <section className="pb-24 pt-10">
        <div className="site-container">
          <PortfolioGrid projects={projects} />
        </div>
      </section>
    </>
  );
}

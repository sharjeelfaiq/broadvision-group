"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  getPortfolioCategoryBySlug,
  getPortfolioProjectsByCategory,
} from "@/src/data/portfolio";
import { PortfolioCategoryFilter } from "./PortfolioCategoryFilter";
import { PortfolioGrid } from "./PortfolioGrid";

export function PortfolioDirectory() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const activeCategory = getPortfolioCategoryBySlug(categoryParam);
  const projects = useMemo(
    () => getPortfolioProjectsByCategory(activeCategory.slug),
    [activeCategory.slug],
  );

  return (
    <>
      <PortfolioCategoryFilter activeSlug={activeCategory.slug} />
      <div className="mt-8 text-center text-sm font-semibold text-[#c0c7d6]">
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

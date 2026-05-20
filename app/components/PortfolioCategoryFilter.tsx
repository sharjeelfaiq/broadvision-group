import Link from "next/link";
import { portfolioTabs } from "@/src/data/portfolio";

type PortfolioCategoryFilterProps = {
  activeSlug: string;
};

export function PortfolioCategoryFilter({
  activeSlug,
}: PortfolioCategoryFilterProps) {
  return (
    <nav aria-label="Portfolio categories" className="mt-10">
      <div className="site-container">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-white/10 bg-[#101827]/70 p-2 shadow-[0_22px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl">
          <div className="flex items-center gap-3 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8fa0b8] md:px-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00c8fe] shadow-[0_0_18px_rgba(0,200,254,0.8)]" />
            Filter by sector
          </div>

          <div className="portfolio-filter-scroll overflow-x-auto">
            <div className="flex w-max min-w-full snap-x gap-1.5 p-1 md:w-full md:flex-wrap md:justify-center md:gap-2">
              {portfolioTabs.map((category) => {
                const active = category.slug === activeSlug;

                return (
                  <Link
                    aria-current={active ? "page" : undefined}
                    className={[
                      "relative inline-flex min-h-10 shrink-0 snap-start items-center justify-center whitespace-nowrap rounded-full px-4 text-sm font-bold leading-5 transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2792ff]/25 md:min-h-11 md:px-5",
                      active
                        ? "bg-[#2792ff] text-white shadow-[0_10px_28px_rgba(39,146,255,0.26),inset_0_1px_0_rgba(255,255,255,0.16)]"
                        : "text-[#d8e0ee] hover:bg-white/[0.07] hover:text-white",
                    ].join(" ")}
                    href={
                      category.slug === "all"
                        ? "/portfolio"
                        : `/portfolio?category=${category.slug}`
                    }
                    key={category.slug}
                    scroll={false}
                  >
                    {active ? (
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white/90" />
                    ) : null}
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

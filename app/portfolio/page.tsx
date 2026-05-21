import type { Metadata } from "next";
import { CTASection } from "../components/CTASection";
import { PortfolioDirectory } from "../components/PortfolioDirectory";
import { StructuredData } from "../components/StructuredData";
import { breadcrumbJsonLd, createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata("portfolio");

type PortfolioPageProps = {
  searchParams: Promise<{
    category?: string | string[];
  }>;
};

export default async function PortfolioPage({
  searchParams,
}: PortfolioPageProps) {
  const { category } = await searchParams;

  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <section className="section-y pb-8 text-center md:pb-10">
        <div className="site-container">
          <p className="label-caps text-accent-soft mb-5">
            Venture Ecosystem
          </p>
          <h1 className="page-title text-heading">Strategic Portfolio</h1>
          <p className="body-copy mx-auto mt-6 max-w-3xl text-base md:mt-8 md:text-lg md:leading-8">
            Diversified investments in high-impact sectors that are redefining
            the global technological landscape.
          </p>
        </div>
      </section>

      <PortfolioDirectory category={category} />

      <CTASection
        buttonLabel="Submit Venture Proposal"
        href="/contact"
        text="We invest in teams that are redefining the boundaries of human potential and global systems."
        title="Partner with BroadVision"
      />
    </>
  );
}

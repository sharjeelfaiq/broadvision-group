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
      <section className="section-y pb-10 text-center md:pb-14">
        <div className="site-container">
          <h1 className="page-title text-heading">Portfolio</h1>
          <p className="body-copy mx-auto mt-6 max-w-3xl text-base md:mt-8 md:text-lg md:leading-8">
            Powering the world&apos;s most ambitious technology leaders across
            artificial intelligence, biotech, and global infrastructure.
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

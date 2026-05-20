import type { Metadata } from "next";
import { Suspense } from "react";
import { CTASection } from "../components/CTASection";
import { PortfolioDirectory } from "../components/PortfolioDirectory";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="section-y pb-10 text-center md:pb-14">
        <div className="site-container">
          <h1 className="page-title text-white">Portfolio</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white md:mt-8 md:text-lg md:leading-8">
            Powering the world&apos;s most ambitious technology leaders across
            artificial intelligence, biotech, and global infrastructure.
          </p>
        </div>
      </section>

      <Suspense fallback={null}>
        <PortfolioDirectory />
      </Suspense>

      <CTASection
        buttonLabel="Submit Venture Proposal"
        href="/contact"
        text="We invest in teams that are redefining the boundaries of human potential and global systems."
        title="Partner with BroadVision"
      />
    </>
  );
}

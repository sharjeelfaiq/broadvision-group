import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "../components/Button";
import { CTASection } from "../components/CTASection";
import { StatsBlock } from "../components/StatsBlock";
import { StructuredData } from "../components/StructuredData";
import { founderImage } from "../data";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  drPehongChenJsonLd,
} from "../lib/seo";

export const metadata: Metadata = createPageMetadata("about");

const aboutStats = [
  { value: "2006", label: "Founded" },
  { value: "50+", label: "Direct Investments" },
  { value: "9", label: "Key Sectors" },
  { value: "Global", label: "Operational Reach" },
];

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          drPehongChenJsonLd,
        ]}
      />
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">
        <div className="site-container">
          <p className="label-caps text-accent-soft mb-6">
            The Institution of Innovation
          </p>
          <h1 className="heading-tight text-heading max-w-3xl text-4xl sm:text-5xl md:text-7xl">
            Institutional-Grade Private Asset Management.
          </h1>
          <p className="body-copy mt-6 max-w-3xl text-base md:text-lg md:leading-8">
            BroadVision Group (BVG) is a US-based private asset management firm
            focusing on funding, incubating, and operating cutting-edge business
            ventures globally across artificial intelligence, cleantech,
            cloudtech, fintech, healthtech, medtech, biotech, and other
            innovative technology domains.
          </p>
          <div className="mt-10 md:mt-14">
            <StatsBlock stats={aboutStats} />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <blockquote className="heading-tight text-accent-soft max-w-lg text-3xl italic sm:text-4xl md:text-5xl">
              &quot;Creating and nurturing unique solutions through digital
              transformation.&quot;
            </blockquote>
            <div className="mt-10 h-1 w-24 rounded-full bg-[var(--primary)]" />
          </div>
          <div className="body-copy space-y-6 text-base md:space-y-8 md:text-lg md:leading-8">
            <p>
              <strong className="text-accent-soft font-black">
                BroadVision Group (BVG)
              </strong>{" "}
              is a US-based private asset management firm focusing on funding,
              incubating, and operating cutting-edge business ventures globally
              across artificial intelligence, cleantech, cloudtech, fintech,
              healthtech, medtech, biotech, and other innovative technology
              domains.
            </p>
            <p>
              At BVG, we thrive to create and nurture unique solutions through
              digital transformation, delivering compelling growth and
              profitability for businesses as well as happier work and healthier
              lives for the people they serve and, in doing so, generate robust
              returns for our investors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="site-container">
          <h2 className="heading-tight text-heading mb-8 text-3xl sm:text-4xl md:mb-12 md:text-5xl">
            Our Founder
          </h2>
          <div className="glass-card-strong grid gap-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative min-h-[320px] overflow-hidden sm:min-h-[380px] lg:min-h-full">
              <Image
                alt="Dr. Pehong Chen"
                className="object-cover grayscale"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                src={founderImage}
              />
            </div>
            <div className="p-5 sm:p-7 md:p-10 lg:p-12" id="dr-pehong-chen">
              <h3 className="heading-tight text-heading text-3xl md:text-4xl">
                Dr. Pehong Chen
              </h3>
              <p className="label-caps text-secondary mt-2">
                Founder & Chairman
              </p>
              <div className="mt-6 md:mt-8">
                <div className="body-copy space-y-5 border-b border-white/15 pb-6 text-base md:space-y-6 md:pb-8">
                  <p>
                    BVG Founder & Chairman{" "}
                    <strong className="text-accent-soft font-black">
                      Dr. Pehong Chen
                    </strong>{" "}
                    was formerly CEO of BroadVision, Inc. (
                    <strong className="text-accent-soft font-black">
                      Nasdaq: BVSN
                    </strong>
                    ), a highly recognized pioneer in e-commerce, content
                    management, and enterprise digital hub platform solutions,
                    which he founded in 1993 and took public in 1996, reaching a{" "}
                    <strong className="text-accent-soft font-black">
                      $26B market cap
                    </strong>{" "}
                    in 2000.
                  </p>
                  <p>
                    For more than 25 years, BVSN empowered thousands of
                    organizations worldwide to successfully transform and
                    profitably operate their businesses digitally through
                    high-output collaboration internally and high-touch
                    engagement externally. BVSN was acquired by private equity
                    firm ESW Capital in May 2020.
                  </p>
                </div>
                <div className="grid gap-6 pt-6 sm:grid-cols-2 md:gap-8 md:pt-8">
                  <div>
                    <div className="text-accent-soft text-3xl font-black md:text-4xl">
                      $26B
                    </div>
                    <div className="label-caps text-heading mt-2">
                      Peak Market Cap
                    </div>
                  </div>
                  <div>
                    <div className="text-accent-soft text-3xl font-black md:text-4xl">
                      1993
                    </div>
                    <div className="label-caps text-heading mt-2">
                      Year Founded
                    </div>
                  </div>
                </div>
              </div>
              <Button className="mt-8" href="/team" variant="secondary">
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        buttonLabel="Partner With Us"
        href="/contact"
        title="Ready to explore the next frontier of capital?"
      />
    </>
  );
}

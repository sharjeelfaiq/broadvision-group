import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "../components/Button";
import { CTASection } from "../components/CTASection";
import { StatsBlock } from "../components/StatsBlock";
import { founderImage } from "../data";

export const metadata: Metadata = {
  title: "About",
};

const aboutStats = [
  { value: "2006", label: "Founded" },
  { value: "50+", label: "Direct Investments" },
  { value: "9", label: "Key Sectors" },
  { value: "Global", label: "Operational Reach" },
];

export default function AboutPage() {
  return (
    <>
      <section className="ambient-section relative overflow-hidden py-20 sm:py-24 md:py-36">
        <div className="site-container">
          <p className="label-caps mb-6 text-[#a5c8ff]">
            The Institution of Innovation
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">
            Institutional-Grade Private Asset Management.
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="site-container">
          <StatsBlock stats={aboutStats} />
        </div>
      </section>

      <section className="section-y">
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <blockquote className="max-w-lg text-3xl font-black italic leading-tight text-[#a5c8ff] sm:text-4xl md:text-5xl">
              &quot;Creating and nurturing unique solutions through digital
              transformation.&quot;
            </blockquote>
            <div className="mt-10 h-1 w-24 rounded-full bg-[#2792ff]" />
          </div>
          <div className="space-y-6 text-base leading-7 text-white md:space-y-8 md:text-lg md:leading-8">
            <p>
              <strong className="font-black text-[#a5c8ff]">
                BroadVision Group (BVG)
              </strong>{" "}
              is a US-based private asset management firm focusing on funding,
              incubating, and operating cutting-edge business ventures globally
              across artificial intelligence, cleantech, cloudtech, fintech,
              healthtech, medtech, biotech, and other innovative technology
              domains.
            </p>
            <p>
              At BVG, we strive to create and nurture unique solutions through
              digital transformation, delivering compelling growth and
              profitability for businesses as well as happier work and healthier
              lives for the people they serve and, in doing so, generate robust
              returns for our investors.
            </p>
            <p className="glass-card rounded-[1.25rem] p-5 text-base leading-7 text-[#e2e8f0] md:rounded-[1.5rem] md:p-6">
              Since BVG&apos;s formation in 2006, we have made direct investments
              in more than{" "}
              <strong className="font-black text-white">
                50 startup ventures
              </strong>
              , plus many more indirectly as a limited partner via a number of
              special purpose vehicles and venture/private equity funds.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y pt-0">
        <div className="site-container">
          <h2 className="mb-8 text-3xl font-black text-white sm:text-4xl md:mb-12 md:text-5xl">
            Our Founder
          </h2>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10">
            <div className="glass-card relative h-[320px] overflow-hidden rounded-[1.25rem] sm:h-[380px] md:h-[420px] md:rounded-[1.5rem]">
              <Image
                alt="Dr. Pehong Chen"
                className="object-cover grayscale"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                src={founderImage}
              />
            </div>
            <div>
              <h3 className="text-3xl font-black text-white md:text-4xl">
                Dr. Pehong Chen
              </h3>
              <p className="label-caps mt-2 text-[#00c8fe]">
                Founder & Chairman
              </p>
              <div className="glass-card-strong mt-6 rounded-[1.25rem] p-5 md:mt-8 md:rounded-[1.5rem] md:p-8">
                <div className="space-y-5 border-b border-white/20 pb-6 text-base leading-7 text-white md:space-y-6 md:pb-8">
                  <p>
                    BVG Founder & Chairman{" "}
                    <strong className="font-black text-[#a5c8ff]">
                      Dr. Pehong Chen
                    </strong>{" "}
                    was formerly CEO of BroadVision, Inc. (
                    <strong className="font-black text-[#a5c8ff]">
                      Nasdaq: BVSN
                    </strong>
                    ), a highly recognized pioneer in e-commerce, content
                    management, and enterprise digital hub platform solutions,
                    which he founded in 1993 and took public in 1996, reaching a{" "}
                    <strong className="font-black text-[#a5c8ff]">
                      $26B market cap
                    </strong>{" "}
                    in 2000.
                  </p>
                  <p className="text-[#e2e8f0]">
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
                    <div className="text-4xl font-black text-[#a5c8ff] md:text-5xl">
                      $26B
                    </div>
                    <div className="label-caps mt-2 text-white">
                      Peak Market Cap
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-[#a5c8ff] md:text-5xl">
                      1993
                    </div>
                    <div className="label-caps mt-2 text-white">
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

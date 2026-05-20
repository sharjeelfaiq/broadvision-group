import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "./components/Button";
import { SectionTitle } from "./components/SectionTitle";
import { StatsBlock } from "./components/StatsBlock";
import { StructuredData } from "./components/StructuredData";
import { sectorCards } from "./data";
import { absoluteUrl } from "./lib/site";
import { createPageMetadata } from "./lib/seo";

export const metadata: Metadata = createPageMetadata("home");

const homeStats = [
  { value: "12 B+", label: "Capital Deployed" },
  { value: "450+", label: "Portfolio Companies" },
  { value: "32+", label: "Global Markets" },
  { value: "2", label: "Decades Excellence" },
];

const heroStats = [
  { value: "50+", label: "Startup Ventures" },
  { value: "2006", label: "Founded" },
  { value: "Global", label: "Technology Focus" },
];

const heroSectors = [
  {
    label: "Artificial Intelligence",
    href: "/portfolio?category=artificial-intelligence",
  },
  { label: "Fintech", href: "/portfolio?category=fintech" },
  { label: "Healthtech", href: "/portfolio?category=healthtech-digital-health" },
  {
    label: "Cloudtech",
    href: "/portfolio?category=cloudtech-big-data-digital-engagement",
  },
  { label: "Cleantech", href: "/portfolio?category=cleantech" },
  { label: "Biotech", href: "/portfolio?category=biotech" },
  { label: "Medtech", href: "/portfolio?category=medtech" },
];

export default function Home() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "BroadVision Group technology sectors",
          itemListElement: heroSectors.map((sector, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: sector.label,
            url: absoluteUrl(sector.href),
          })),
        }}
      />
      <section className="relative -mt-20 overflow-hidden pt-20">
        <div className="site-container relative grid items-center gap-10 py-14 sm:py-16 md:py-20 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1fr_0.88fr] lg:gap-12 lg:py-20 xl:gap-16">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <p className="label-caps text-secondary mx-auto mb-5 inline-flex max-w-full rounded-full border border-[var(--border-strong)] bg-white/[0.04] px-3.5 py-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl lg:mx-0">
              Global Technology Asset Management &amp; Venture Building
            </p>

            <h1 className="hero-title text-heading mx-auto max-w-[48rem] lg:mx-0">
              Funding, Incubating, and Operating the Next Generation of{" "}
              <span className="blue-gradient-text">Technology Ventures</span>
            </h1>

            <p className="body-copy mx-auto mt-5 max-w-2xl text-base sm:text-lg md:mt-6 md:leading-8 lg:mx-0">
              BroadVision Group partners with ambitious founders and companies
              across AI, cleantech, cloudtech, fintech, healthtech, medtech,
              biotech, and other high-growth technology sectors to build
              globally scalable businesses.
            </p>

            <div className="mx-auto mt-8 flex max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center lg:mx-0 lg:justify-start">
              <Button className="w-full sm:w-auto" href="/portfolio">
                Explore Portfolio
              </Button>
              <Button className="w-full sm:w-auto" href="/about" variant="secondary">
                About BVG
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-2xl">
              {heroStats.map((stat) => (
                <div
                  className="glass-card rounded-[1rem] px-4 py-4 text-center lg:text-left"
                  key={`${stat.value}-${stat.label}`}
                >
                  <div className="text-accent-soft text-2xl font-black sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="label-caps text-muted mt-2 text-[0.62rem]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual mx-auto w-full max-w-xl lg:max-w-none">
            <div className="hero-visual-panel glass-card-strong relative overflow-hidden rounded-[1.25rem] p-4 sm:p-5 md:rounded-[1.5rem] md:p-6">
              <div className="hero-grid" aria-hidden="true" />
              <div className="relative">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="label-caps text-secondary">BVG Focus Map</p>
                    <h2 className="heading-tight text-heading mt-2 text-xl sm:text-2xl">
                      Strategic technology sectors
                    </h2>
                  </div>
                  <div className="hidden rounded-full border border-[var(--border-strong)] bg-white/[0.05] px-3 py-2 text-xs font-black text-accent-soft sm:block">
                    7 Sectors
                  </div>
                </div>

                <div className="hero-network" aria-hidden="true">
                  <div className="hero-node hero-node-primary">
                    <span>BVG</span>
                  </div>
                  <div className="hero-node hero-node-ai">AI</div>
                  <div className="hero-node hero-node-fin">Fintech</div>
                  <div className="hero-node hero-node-health">Health</div>
                  <div className="hero-node hero-node-cloud">Cloud</div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {heroSectors.map((sector) => (
                    <Link
                      className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-bold text-body shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                      href={sector.href}
                      key={sector.label}
                    >
                      {sector.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1rem] border border-[var(--border-strong)] bg-white/[0.045] p-4">
                    <p className="label-caps text-accent-soft text-[0.62rem]">
                      Operating Lens
                    </p>
                    <p className="text-heading mt-2 text-sm font-bold leading-6">
                      Capital, incubation, and operating support for globally
                      scalable technology ventures.
                    </p>
                  </div>
                  <div className="rounded-[1rem] border border-white/10 bg-white/[0.035] p-4">
                    <p className="label-caps text-secondary text-[0.62rem]">
                      Investment Thesis
                    </p>
                    <p className="text-heading mt-2 text-sm font-bold leading-6">
                      Enterprise platforms and breakthrough sectors with
                      durable long-term market demand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="site-container text-center">
          <SectionTitle
            eyebrow="Institutional Strategy"
            title="About BVG"
            subtitle="At BVG, we thrive to create and nurture unique solutions through digital transformation, delivering compelling growth and profitability for businesses as well as happier work and healthier life for the people they serve and, in doing so, generate robust returns for our investors."
          />
          <Link
            className="label-caps ui-link inline-flex items-center gap-3 hover:gap-5"
            href="/about"
          >
            Explore More <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </section>

      <section className="section-y">
        <div className="site-container">
          <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-[1fr_0.85fr] md:items-end md:gap-8">
            <div>
              <p className="label-caps text-accent mb-4">
                Venture Ecosystem
              </p>
              <h2 className="heading-tight text-heading text-3xl sm:text-4xl md:text-6xl">
                Strategic Portfolio
              </h2>
            </div>
            <p className="body-copy max-w-xl text-base md:text-lg md:leading-8">
              Diversified investments in high-impact sectors that are redefining
              the global technological landscape.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {sectorCards.map((sector) => (
              <Link
                className="glass-card group relative aspect-[1.45] overflow-hidden rounded-[1rem] sm:aspect-[1.55] md:aspect-[1.78]"
                href={sector.href}
                key={sector.title}
              >
                <Image
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-110 group-hover:opacity-60"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={sector.image}
                />
                <div className="absolute inset-0 bg-[var(--image-overlay)]" />
                <div className="relative flex h-full items-center justify-center p-5 text-center sm:p-6">
                  <h3 className="heading-tight text-heading text-2xl md:text-3xl">
                    {sector.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="site-container">
          <StatsBlock stats={homeStats} />
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="site-container">
          <h2 className="sr-only">Explore BroadVision Group</h2>
          <div className="glass-card mx-auto grid max-w-5xl gap-5 rounded-[1.5rem] p-5 sm:grid-cols-2 md:rounded-[2rem] md:p-8 lg:grid-cols-4">
            {[
              ["About BroadVision Group", "/about"],
              ["Technology Ventures Portfolio", "/portfolio"],
              ["Leadership Team", "/team"],
              ["Contact BroadVision Group", "/contact"],
            ].map(([label, href]) => (
              <Link
                className="label-caps ui-link rounded-[1rem] border border-white/10 px-4 py-4 text-center hover:border-[var(--border-accent)] hover:bg-white/[0.05]"
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

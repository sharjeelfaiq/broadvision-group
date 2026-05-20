import Link from "next/link";
import { Button } from "./components/Button";
import { Logo } from "./components/Logo";
import { SectionTitle } from "./components/SectionTitle";
import { StatsBlock } from "./components/StatsBlock";
import { heroNetworkImage, sectorCards } from "./data";

const homeStats = [
  { value: "12 B+", label: "Capital Deployed" },
  { value: "450+", label: "Portfolio Companies" },
  { value: "32+", label: "Global Markets" },
  { value: "2", label: "Decades Excellence" },
];

export default function Home() {
  return (
    <>
      <section className="relative -mt-20 flex min-h-[100svh] items-center overflow-hidden pt-20">
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          src={heroNetworkImage}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,30,0.3),rgba(10,15,30,0.88)_72%,rgba(10,15,30,0))]" />
        <div className="site-container relative py-24 text-center sm:py-28 md:py-32">
          <div className="mb-7 flex justify-center md:mb-8">
            <Logo className="h-14 w-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:h-16 md:h-24" />
          </div>
          <h1 className="hero-title mx-auto max-w-5xl text-white">
            Funding the Future of{" "}
            <span className="blue-gradient-text">Technology</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white sm:text-lg md:mt-8 md:text-xl md:leading-8">
            Investing in breakthrough ventures across AI, Cleantech, Fintech,
            Healthtech, and beyond to build the next generation of global
            infrastructure.
          </p>
          <div className="mx-auto mt-10 flex max-w-sm flex-col items-stretch justify-center gap-4 sm:max-w-none sm:flex-row sm:items-center md:mt-12">
            <Button className="w-full sm:w-auto" href="/portfolio">
              View Portfolio
            </Button>
            <Button className="w-full sm:w-auto" href="/about" variant="secondary">
              Learn More
            </Button>
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
            className="label-caps inline-flex items-center gap-3 text-[#2792ff] transition hover:gap-5 hover:text-[#a5c8ff]"
            href="/about"
          >
            Explore More <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </section>

      <section className="ambient-section section-y">
        <div className="site-container">
          <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-[1fr_0.85fr] md:items-end md:gap-8">
            <div>
              <p className="label-caps mb-4 text-[#2792ff]">
                Venture Ecosystem
              </p>
              <h2 className="text-3xl font-black text-white sm:text-4xl md:text-6xl">
                Strategic Portfolio
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#e2e8f0] md:text-lg md:leading-8">
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
                <img
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-110 group-hover:opacity-60"
                  src={sector.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d19]/80 via-[#080d19]/25 to-transparent" />
                <div className="relative flex h-full items-center justify-center p-5 text-center sm:p-6">
                  <h3 className="text-2xl font-black leading-tight text-white md:text-3xl">
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
    </>
  );
}

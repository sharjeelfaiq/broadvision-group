import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { StructuredData } from "../components/StructuredData";
import { siteConfig } from "../lib/site";
import { breadcrumbJsonLd, createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata("contact");

const features = [
  {
    icon: "G",
    title: "Global Presence",
    text: "Investments across technology sectors worldwide",
  },
  {
    icon: "S",
    title: "Institutional Trust",
    text: "Operating since 2006 with a disciplined investment approach",
  },
  {
    icon: "@",
    title: "Direct Contact",
    text: siteConfig.email,
  },
];

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="section-y">
        <div className="site-container">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
            <p className="label-caps text-secondary mb-5">Contact BVG</p>
            <h1 className="page-title text-accent-soft">Contact Us</h1>
            <p className="body-copy mx-auto mt-6 max-w-2xl text-base font-semibold sm:text-lg md:mt-8 md:text-xl md:leading-8">
              For any inquiries, please fill in the form below or email us at{" "}
              <a
                className="text-accent-soft hover:text-accent"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-8">
            <aside className="glass-card rounded-[1.5rem] p-5 sm:p-7 md:p-9 lg:sticky lg:top-28 lg:rounded-[2rem]">
            <p className="label-caps text-accent-soft">Start a Conversation</p>
            <h2 className="heading-tight text-heading mt-5 text-2xl sm:text-3xl md:text-4xl">
              Tell us where capital, technology, or venture-building can help.
            </h2>
            <p className="muted-copy mt-6 text-base">
              BVG evaluates opportunities across global technology sectors with
              an institutional, operator-led perspective. Share the context and
              our team will route the inquiry appropriately.
            </p>

            <div className="mt-9 space-y-4">
              <a
                className="group block rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-[var(--border-strong)] hover:bg-white/[0.07]"
                href={`mailto:${siteConfig.email}`}
              >
                <span className="label-caps text-secondary">Email</span>
                <span className="text-heading group-hover:text-accent-soft mt-2 block text-base font-bold transition">
                  {siteConfig.email}
                </span>
              </a>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5">
                <span className="label-caps text-secondary">Direct Contact</span>
                <span className="text-heading mt-2 block text-base font-bold">
                  {siteConfig.email}
                </span>
              </div>
            </div>

            <div className="mt-9 border-t border-white/15" />

            <div className="mt-7 grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {features.map((feature) => (
                <article key={feature.title}>
                  <div className="flex items-center gap-3">
                    <div className="text-accent-soft flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--primary-glass)] text-sm font-black">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-heading text-sm font-black">
                        {feature.title}
                      </h3>
                      <p className="text-muted mt-1 text-sm leading-5">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            </aside>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

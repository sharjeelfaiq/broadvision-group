import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StructuredData } from "../../components/StructuredData";
import {
  getTeamMemberBySlug,
  teamMemberSlugs,
  teamMembers,
} from "../../data";
import { absoluteUrl, siteConfig } from "../../lib/site";
import { breadcrumbJsonLd } from "../../lib/seo";

type TeamMemberPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return teamMemberSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return {};
  }

  const title = `${member.name} | ${siteConfig.name}`;
  const description = `${member.name}, ${member.title} at ${siteConfig.name}.`;
  const canonical = absoluteUrl(`/team/${member.slug}`);

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "profile",
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl(member.image),
          alt: member.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: absoluteUrl(member.image),
          alt: member.name,
        },
      ],
    },
  };
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <>
      <StructuredData
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
            { name: member.name, path: `/team/${member.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": absoluteUrl(`/team/${member.slug}#person`),
            name: member.name,
            jobTitle: member.title,
            image: absoluteUrl(member.image),
            worksFor: {
              "@id": absoluteUrl("/#organization"),
              name: siteConfig.name,
            },
          },
        ]}
      />
      <section className="section-y">
        <div className="site-container">
          <Link
            className="label-caps ui-link mb-8 inline-flex items-center gap-3 hover:gap-5"
            href="/team"
          >
            <span aria-hidden="true">&lt;-</span> Executive Team
          </Link>

          <article className="grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:items-start lg:gap-12">
            <aside className="glass-card rounded-[1.5rem] p-6 text-center sm:rounded-[2rem] sm:p-8">
              <div className="relative mx-auto mb-7 h-36 w-36 rounded-full border-2 border-[var(--primary)] p-2 shadow-[0_0_0_5px_rgba(39,146,255,0.18)] sm:h-44 sm:w-44 lg:h-52 lg:w-52">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    alt={member.name}
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 640px) 9rem, (max-width: 1024px) 11rem, 13rem"
                    src={member.image}
                  />
                </div>
              </div>
              <h1 className="heading-tight text-heading text-4xl sm:text-5xl">
                {member.name}
              </h1>
              <p className="text-secondary mt-4 text-sm font-extrabold uppercase tracking-wide sm:text-base">
                {member.title}
              </p>
            </aside>

            <div className="glass-card-strong rounded-[1.5rem] p-6 sm:rounded-[2rem] sm:p-8 lg:p-10">
              <div className="space-y-5">
                {member.bio.map((paragraph) => (
                  <p
                    className="body-copy text-base md:text-lg md:leading-8"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {member.details ? (
                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="label-caps text-accent-soft mb-5">
                    Selected Experience
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {member.details.map((detail) => (
                      <div
                        className="rounded-[1rem] border border-white/10 bg-white/[0.035] p-4 text-sm font-bold leading-6 text-body"
                        key={detail}
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </article>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers
              .filter((person) => person.slug !== member.slug)
              .map((person) => (
                <Link
                  className="label-caps ui-link rounded-[1rem] border border-white/10 px-4 py-4 text-center hover:border-[var(--border-accent)] hover:bg-white/[0.05]"
                  href={`/team/${person.slug}`}
                  key={person.slug}
                >
                  {person.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

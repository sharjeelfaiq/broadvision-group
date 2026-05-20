import type { Metadata } from "next";
import { StructuredData } from "../components/StructuredData";
import { TeamCard } from "../components/TeamCard";
import { teamMembers } from "../data";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  drPehongChenJsonLd,
} from "../lib/seo";

export const metadata: Metadata = createPageMetadata("team");

export default function TeamPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
          ]),
          drPehongChenJsonLd,
        ]}
      />
      <section className="section-y">
        <div className="site-container">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <p className="label-caps text-accent-soft mb-4">Leadership</p>
            <h1 className="page-title text-heading">Executive Team</h1>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[var(--primary)]" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

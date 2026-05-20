import type { Metadata } from "next";
import { TeamCard } from "../components/TeamCard";
import { teamMembers } from "../data";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <section className="section-y">
      <div className="site-container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="label-caps mb-4 text-[#a5c8ff]">Leadership</p>
          <h1 className="page-title text-white">Executive Team</h1>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#2792ff]" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

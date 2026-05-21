import type { MetadataRoute } from "next";
import { teamMembers } from "./data";
import { absoluteUrl, siteConfig } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const teamRoutes = teamMembers.map((member) => ({
    path: `/team/${member.slug}`,
    priority: 0.6,
  }));

  return [...siteConfig.routes, ...teamRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date("2026-05-20"),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}

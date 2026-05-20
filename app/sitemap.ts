import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date("2026-05-20"),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}

export const siteConfig = {
  name: "BroadVision Group",
  shortName: "BroadVision",
  url: "https://broadvision.com",
  email: "contact@broadvision.com",
  description:
    "BroadVision Group is a US-based private asset management firm funding, incubating, and operating technology ventures across AI, cleantech, cloudtech, fintech, healthtech, medtech, biotech, and other innovative sectors.",
  routes: [
    { path: "/", label: "Home", priority: 1 },
    { path: "/about", label: "About", priority: 0.8 },
    { path: "/portfolio", label: "Portfolio", priority: 0.9 },
    { path: "/team", label: "Team", priority: 0.7 },
    { path: "/contact", label: "Contact", priority: 0.7 },
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

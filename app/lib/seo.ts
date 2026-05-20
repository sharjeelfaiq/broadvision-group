import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

export const pageSeo = {
  home: {
    path: "/",
    title: "BroadVision Group | Technology Asset Management & Venture Building",
    description:
      "BroadVision Group is a US-based private asset management firm funding, incubating, and operating technology ventures across AI, cleantech, cloudtech, fintech, healthtech, medtech, biotech, and other innovative sectors.",
  },
  about: {
    path: "/about",
    title: "About BroadVision Group | Global Technology Investment Firm",
    description:
      "Learn about BroadVision Group, its venture-building approach, founder Dr. Pehong Chen, BroadVision Inc. legacy, and global technology investment strategy.",
  },
  portfolio: {
    path: "/portfolio",
    title: "Portfolio | BroadVision Group Technology Ventures",
    description:
      "Explore BroadVision Group’s portfolio of technology ventures across artificial intelligence, cleantech, cloudtech, fintech, healthtech, medtech, biotech, semiconductor, and other sectors.",
  },
  team: {
    path: "/team",
    title: "Team | BroadVision Group Leadership",
    description:
      "Meet the BroadVision Group leadership team driving global technology investment, venture incubation, digital transformation, and innovation across high-growth sectors.",
  },
  contact: {
    path: "/contact",
    title: "Contact BroadVision Group | Technology Investment & Venture Building",
    description:
      "Contact BroadVision Group to connect about technology ventures, investment opportunities, strategic partnerships, and global innovation initiatives.",
  },
} as const;

const socialImage = {
  url: absoluteUrl("/android-chrome-512x512.png"),
  width: 512,
  height: 512,
  alt: "BroadVision Group brand mark",
};

export function createPageMetadata(page: keyof typeof pageSeo): Metadata {
  const seo = pageSeo[page];
  const canonical = absoluteUrl(seo.path);

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: siteConfig.name,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: socialImage.url,
          alt: socialImage.alt,
        },
      ],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: siteConfig.name,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/logo.svg"),
  description:
    "BroadVision Group is a technology asset management and venture-building firm funding, incubating, and operating globally scalable technology ventures.",
  foundingDate: "2006",
  founder: {
    "@id": absoluteUrl("/about#dr-pehong-chen"),
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: siteConfig.name,
  url: absoluteUrl("/"),
  description: pageSeo.home.description,
  publisher: {
    "@id": absoluteUrl("/#organization"),
  },
};

export const drPehongChenJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": absoluteUrl("/about#dr-pehong-chen"),
  name: "Dr. Pehong Chen",
  jobTitle: "Founder & Chairman",
  image: absoluteUrl("/Dr.%20Pehong%20Chen.webp"),
  affiliation: {
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
  },
  worksFor: {
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
  },
};

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

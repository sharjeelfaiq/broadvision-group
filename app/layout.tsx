import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { StructuredData } from "./components/StructuredData";
import "./globals.css";
import { absoluteUrl, siteConfig } from "./lib/site";
import {
  organizationJsonLd,
  pageSeo,
  websiteJsonLd,
} from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: pageSeo.home.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: pageSeo.home.description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl("/android-chrome-512x512.png"),
        width: 512,
        height: 512,
        alt: "BroadVision Group brand mark",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    images: [
      {
        url: absoluteUrl("/android-chrome-512x512.png"),
        alt: "BroadVision Group brand mark",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="site-root min-h-full">
        <StructuredData data={[organizationJsonLd, websiteJsonLd]} />
        <div className="site-background" aria-hidden="true" />
        <div className="app-shell min-h-screen">
          <Header />
          <main className="page-shell min-h-screen pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

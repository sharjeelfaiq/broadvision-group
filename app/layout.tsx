import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://broadvision.com"),
  title: {
    default: "BroadVision Group",
    template: "%s | BroadVision Group",
  },
  description:
    "Institutional-grade private asset management for breakthrough technology ventures.",
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
    title: "BroadVision Group",
    description:
      "Institutional-grade private asset management for breakthrough technology ventures.",
    siteName: "BroadVision Group",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "BroadVision Group icon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BroadVision Group",
    description:
      "Institutional-grade private asset management for breakthrough technology ventures.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        alt: "BroadVision Group icon",
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
      <body className="min-h-full">
        <Header />
        <main className="page-shell min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

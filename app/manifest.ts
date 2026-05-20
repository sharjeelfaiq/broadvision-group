import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BroadVision Group",
    short_name: "BroadVision",
    description:
      "Institutional-grade private asset management for breakthrough technology ventures.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1e",
    theme_color: "#2792ff",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

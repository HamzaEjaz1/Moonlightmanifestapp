import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/"],
    },
    sitemap: "https://moonlightmanifest.app/sitemap.xml",
    host: "https://moonlightmanifest.app",
  };
}

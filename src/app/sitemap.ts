import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://moonlightmanifest.app";
  const updated = new Date("2026-10-17");
  const paths = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  ];
  return locales.flatMap((locale) =>
    paths.map(({ path, priority, changeFrequency }) => ({
      url: `${base}/${locale}${path}`,
      lastModified: updated,
      changeFrequency,
      priority: locale === "en" && path === "" ? 1 : priority,
    })),
  );
}

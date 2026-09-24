import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://moonlightmanifest.app";
  const paths = ["", "/privacy", "/terms"];
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date("2026-09-23"),
    })),
  );
}

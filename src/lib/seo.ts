import { locales, type Locale } from "@/i18n/config";
import { site } from "@/lib/site";

export const languageAlternates = {
  en: "/en",
  ru: "/ru",
  ar: "/ar",
  id: "/id",
  "x-default": "/en",
} as const;

export function absoluteUrl(path = "") {
  return `${site.url}${path}`;
}

export function localeLanguages(path = "") {
  return Object.fromEntries(
    locales.map((locale) => [locale, `/${locale}${path}`]),
  ) as Record<Locale, string>;
}

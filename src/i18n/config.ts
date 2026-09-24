export const locales = ["en", "ru", "ar", "id"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { label: string; native: string; dir: "ltr" | "rtl"; htmlLang: string }
> = {
  en: { label: "English", native: "English", dir: "ltr", htmlLang: "en" },
  ru: { label: "Russian", native: "Русский", dir: "ltr", htmlLang: "ru" },
  ar: { label: "Arabic", native: "العربية", dir: "rtl", htmlLang: "ar" },
  id: { label: "Indonesian", native: "Bahasa Indonesia", dir: "ltr", htmlLang: "id" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

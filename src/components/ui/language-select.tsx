"use client";

import { usePathname, useRouter } from "next/navigation";
import { localeMeta, locales, type Locale } from "@/i18n/config";

export function LanguageSelect({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();

  function onChange(next: string) {
    const parts = pathname.split("/");
    parts[1] = next;
    router.push(parts.join("/") || `/${next}`);
  }

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-full border border-white/12 bg-white/5 py-2 pe-8 ps-3 text-sm text-ink"
      >
        {locales.map((code) => (
          <option key={code} value={code} className="bg-navy text-ink">
            {localeMeta[code].native}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute end-3 text-muted" aria-hidden>
        ▾
      </span>
    </label>
  );
}

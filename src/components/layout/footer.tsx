import Link from "next/link";
import type { Dictionary } from "@/i18n/en";
import { localeMeta, locales, type Locale } from "@/i18n/config";
import { site } from "@/lib/site";
import { Logo } from "@/components/ui/logo";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-white/8 bg-transparent">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo locale={locale} />
          <p className="mt-4 max-w-md text-sm leading-6 text-muted">{dict.footer.blurb}</p>
          <p className="mt-3 text-sm text-lavender/80">{dict.footer.company}</p>
          <a className="mt-2 inline-block text-sm text-ink" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Moonlight</p>
          <ul className="mt-4 space-y-2 text-sm text-ink">
            <li><a href="#features">{dict.nav.features}</a></li>
            <li><a href="#voices">{dict.nav.voices}</a></li>
            <li><a href="#whisper">{dict.nav.whisper}</a></li>
            <li><a href="#stories">{dict.nav.stories}</a></li>
            <li><a href="#faq">{dict.nav.faq}</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">{dict.nav.language}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {locales.map((code) => (
              <li key={code}>
                <Link href={`/${code}`} hrefLang={code} className={code === locale ? "text-lavender" : "text-ink"}>
                  {localeMeta[code].native}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-2 text-sm text-ink">
            <li><Link href={`/${locale}/privacy`}>{dict.nav.privacy}</Link></li>
            <li><Link href={`/${locale}/terms`}>{dict.nav.terms}</Link></li>
            <li><a href={`mailto:${site.supportEmail}`}>{dict.nav.contact}</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-white/8 px-5 py-6 text-xs leading-5 text-muted">
        <p>{dict.footer.copyright}</p>
        <p className="mt-3 max-w-3xl">{dict.footer.safety}</p>
      </div>
    </footer>
  );
}

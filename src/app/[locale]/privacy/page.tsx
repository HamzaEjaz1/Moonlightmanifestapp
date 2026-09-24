import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPrivacy } from "@/content/legal";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.legal.privacyTitle, description: dict.privacy.body };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const doc = getPrivacy(locale);

  return (
    <main id="main" className="mx-auto max-w-3xl px-5 py-16">
      <Link href={`/${locale}`} className="text-sm text-lavender">
        ← {dict.legal.back}
      </Link>
      <h1 className="mt-6 font-serif text-4xl text-ink sm:text-5xl">{dict.legal.privacyTitle}</h1>
      <p className="mt-3 text-sm text-muted">{dict.legal.updated}</p>
      <p className="mt-8 leading-7 text-muted">{doc.intro}</p>
      {doc.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="font-serif text-2xl text-ink">{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p} className="mt-3 leading-7 text-muted">
              {p}
            </p>
          ))}
        </section>
      ))}
      <p className="mt-12 text-sm text-ink">{dict.legal.contact}</p>
    </main>
  );
}

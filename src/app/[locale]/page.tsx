import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { Voices } from "@/components/sections/voices";
import { FAQ } from "@/components/sections/faq";
import { Affirmations } from "@/components/sections/affirmations";
import { CreateStory } from "@/components/sections/create-story";
import { Features } from "@/components/sections/features";
import { Whisper } from "@/components/sections/whisper";
import {
  About,
  Daily,
  Download,
  FinalCta,
  HowItWorks,
  PrivacyBand,
  Sharing,
  Showcase,
  Testimonials,
  Trust,
} from "@/components/sections/static-sections";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { site } from "@/lib/site";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Moonlight",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android",
    description: dict.meta.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: site.company,
      email: site.supportEmail,
    },
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero dict={dict} />
      <Trust dict={dict} />
      <About dict={dict} />
      <Features dict={dict} />
      <Voices dict={dict} />
      <Whisper dict={dict} />
      <CreateStory dict={dict} />
      <Affirmations dict={dict} />
      <Sharing dict={dict} />
      <Daily dict={dict} />
      <PrivacyBand locale={locale} dict={dict} />
      <HowItWorks dict={dict} />
      <Showcase dict={dict} />
      <Testimonials dict={dict} />
      <FAQ dict={dict} />
      <Download dict={dict} />
      <FinalCta dict={dict} />
    </main>
  );
}

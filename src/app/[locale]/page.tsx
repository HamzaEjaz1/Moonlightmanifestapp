import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { FAQ } from "@/components/sections/faq";
import { ProductMoments } from "@/components/sections/product-moments";
import { HowItWorks, Download, Testimonials } from "@/components/sections/static-sections";
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
    name: "Moonlight Manifest",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS",
    downloadUrl: site.store.appStore,
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
      <ProductMoments dict={dict} />
      <HowItWorks dict={dict} />
      <Testimonials dict={dict} />
      <FAQ dict={dict} />
      <Download dict={dict} />
    </main>
  );
}

import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { FAQ } from "@/components/sections/faq";
import { ProductMoments } from "@/components/sections/product-moments";
import { Trust, HowItWorks, Daily, Download } from "@/components/sections/static-sections";
import { TestimonialsSlider } from "@/components/sections/testimonials-slider";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localeMeta, type Locale } from "@/i18n/config";
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

  const pageUrl = `${site.url}/${locale}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Moonlight Manifest",
        url: site.url,
        inLanguage: localeMeta[locale].htmlLang,
        description: dict.meta.description,
        publisher: {
          "@type": "Organization",
          name: site.company,
          email: site.supportEmail,
          url: site.url,
        },
      },
      {
        "@type": "MobileApplication",
        name: "Moonlight Manifest",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS",
        url: pageUrl,
        image: `${site.url}/opengraph-image`,
        downloadUrl: site.store.appStore,
        installUrl: site.store.appStore,
        description: dict.meta.description,
        inLanguage: ["en", "ru", "ar", "id"],
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
      },
      {
        "@type": "FAQPage",
        mainEntity: dict.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero dict={dict} />
      <Trust dict={dict} />
      <ProductMoments dict={dict} />
      <HowItWorks dict={dict} />
      <Daily dict={dict} />
      <TestimonialsSlider dict={dict} />
      <FAQ dict={dict} />
      <Download dict={dict} />
    </main>
  );
}

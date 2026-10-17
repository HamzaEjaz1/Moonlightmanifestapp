import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Noto_Naskh_Arabic } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const arabic = Noto_Naskh_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-ar",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07040f",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Moonlight Manifest — Your daily manifestation space",
    template: "%s · Moonlight",
  },
  description:
    "Stories, intentions and affirmations in one place. Listen, write, and return whenever you need them. Download Moonlight Manifest on the App Store.",
  applicationName: "Moonlight Manifest",
  authors: [{ name: site.company }],
  creator: site.company,
  publisher: site.company,
  category: "Lifestyle",
  keywords: [
    "Moonlight Manifest",
    "Moonlight manifestation app",
    "manifestation app",
    "manifestation stories",
    "daily affirmations",
    "affirmation app",
    "Whisper to Moonlight",
    "App Store",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      ru: "/ru",
      ar: "/ar",
      id: "/id",
      "x-default": "/en",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Moonlight Manifest",
    title: "Moonlight Manifest — Your daily manifestation space",
    description:
      "Stories, intentions and affirmations in one place. Now on the App Store.",
    url: site.url,
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Moonlight Manifest" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonlight Manifest — Your daily manifestation space",
    description:
      "Stories, intentions and affirmations in one place. Now on the App Store.",
    images: ["/twitter-image"],
  },
  appleWebApp: {
    capable: true,
    title: "Moonlight",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
      { url: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    shortcut: ["/icon"],
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${serif.variable} ${sans.variable} ${arabic.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="grain min-h-full text-ink">{children}</body>
    </html>
  );
}

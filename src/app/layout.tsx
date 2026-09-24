import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Noto_Naskh_Arabic } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://moonlightmanifest.app"),
  title: {
    default: "Moonlight — Your dreams deserve to be heard",
    template: "%s · Moonlight",
  },
  description:
    "Moonlight turns your dreams into personalized manifestation stories and affirmations you can listen to.",
  applicationName: "Moonlight",
  keywords: [
    "Moonlight manifestation app",
    "manifestation app",
    "manifestation stories",
    "AI manifestation app",
    "affirmation app",
    "personalized affirmations",
    "manifestation audio",
    "daily affirmations",
  ],
  openGraph: {
    type: "website",
    siteName: "Moonlight",
    title: "Moonlight — Give your dreams a voice",
    description:
      "Personalized manifestation stories and affirmations, narrated in a voice that feels right for you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonlight — Give your dreams a voice",
    description:
      "Personalized manifestation stories and affirmations, narrated in a voice that feels right for you.",
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
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

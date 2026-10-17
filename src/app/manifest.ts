import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Moonlight Manifest",
    short_name: "Moonlight",
    description:
      "Stories, intentions and affirmations in one place. Download Moonlight Manifest on the App Store.",
    start_url: "/en",
    display: "standalone",
    background_color: "#07040f",
    theme_color: "#07040f",
    lang: "en",
    categories: ["lifestyle", "health"],
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
    related_applications: [
      {
        platform: "itunes",
        url: site.store.appStore,
        id: "6812325317",
      },
    ],
  };
}

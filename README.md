# Moonlightmanifestapp

# Moonlight website

Premium multilingual landing site for the Moonlight manifestation app.

## Run locally

```bash
cd moonlight-web
npm install
powershell -File scripts/copy-screens.ps1
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). English is the default (`/en`). Other locales:

- `/ru` Russian
- `/ar` Arabic with full RTL
- `/id` Bahasa Indonesia

## What is included

- Cinematic landing page with real app screens
- Features, voices (including Tresnany), stories, affirmations, sharing, privacy, FAQ, download
- `/privacy` and `/terms` for every locale
- SEO metadata, Open Graph image, sitemap, and JSON-LD
- Placeholder testimonials and store links until real reviews and App Store / Google Play URLs exist

Set store and social URLs in `src/lib/site.ts`.

Legal pages use only product facts from the supplied brief: Wrapify Solutions, AI-assisted stories and affirmations, narration voices, private Whisper-style content, user-initiated sharing, premium features, no guaranteed outcomes, and no professional-advice claims. Replace them with counsel-reviewed documents if those differ.

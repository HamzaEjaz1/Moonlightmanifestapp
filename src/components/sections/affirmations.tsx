"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/en";
import { screens } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { Waveform } from "@/components/ui/waveform";

export function Affirmations({ dict }: { dict: Dictionary }) {
  const [active, setActive] = useState(dict.affirmations.categories[0]);
  const [listening, setListening] = useState<number | null>(null);

  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={dict.affirmations.eyebrow}
          title={dict.affirmations.headline}
          body={dict.affirmations.body}
        />
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {dict.affirmations.categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm ${
                active === cat ? "bg-lavender text-midnight" : "border border-white/12 text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <PhoneMockup src={screens.affirmation} alt={dict.affirmations.headline} />
          <div className="grid gap-4">
            {dict.affirmations.cards.map((card, i) => (
              <article key={card.text} className="rounded-3xl glass p-5">
                <p className="font-serif text-2xl leading-snug text-ink">{card.text}</p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.16em] text-muted">{card.category}</span>
                  <button
                    type="button"
                    className="rounded-full bg-white/8 px-4 py-2 text-sm text-ink"
                    onClick={() => setListening((v) => (v === i ? null : i))}
                  >
                    {dict.affirmations.listen}
                  </button>
                </div>
                {listening === i && <div className="mt-4"><Waveform playing /></div>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

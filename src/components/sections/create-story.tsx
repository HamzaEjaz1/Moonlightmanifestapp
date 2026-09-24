"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/en";
import { screens } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneMockup } from "@/components/ui/phone-mockup";

const images = [screens.home, screens.creating, screens.storyListen, screens.player];

export function CreateStory({ dict }: { dict: Dictionary }) {
  const [step, setStep] = useState(0);

  return (
    <section id="stories" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={dict.story.eyebrow} title={dict.story.headline} />
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            {dict.story.steps.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setStep(i)}
                className={`w-full rounded-3xl border p-5 text-start transition ${
                  step === i ? "border-lavender/40 bg-white/8" : "border-white/8 bg-white/3"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-lavender">0{i + 1}</p>
                <h3 className="mt-2 font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </button>
            ))}
          </div>
          <PhoneMockup src={images[step]} alt={dict.story.steps[step].title} />
        </div>
      </div>
    </section>
  );
}

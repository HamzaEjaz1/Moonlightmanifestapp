"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/en";
import { SectionHeading } from "@/components/ui/section-heading";
import { Waveform } from "@/components/ui/waveform";

export function Voices({ dict }: { dict: Dictionary }) {
  const [playing, setPlaying] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  const filters = useMemo(() => {
    const langs = Array.from(new Set(dict.voice.voices.map((v) => v.language)));
    return ["all", ...langs];
  }, [dict.voice.voices]);

  const visible =
    filter === "all"
      ? dict.voice.voices
      : dict.voice.voices.filter((v) => v.language === filter);

  return (
    <section id="voices" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={dict.voice.eyebrow} title={dict.voice.headline} body={dict.voice.sub} />
        <div className="mt-14 grid items-center gap-10 rounded-[2rem] glass p-6 sm:p-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex justify-center">
            <motion.div
              className="orb relative h-44 w-44 rounded-full sm:h-56 sm:w-56"
              animate={{ scale: playing ? [1, 1.06, 1] : 1 }}
              transition={{ duration: 2.4, repeat: playing ? Infinity : 0, ease: "easeInOut" }}
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-lavender/80">{dict.voice.featured}</p>
            <h3 className="mt-2 font-serif text-4xl text-ink">{dict.voice.featured}</h3>
            <p className="mt-2 text-sm text-lavender">{dict.voice.featuredMood}</p>
            <p className="mt-4 max-w-xl text-muted">{dict.voice.featuredBody}</p>
            <div className="mt-6">
              <Waveform playing={playing === "Tresnany"} bars={36} />
              <div className="mt-2 flex items-center justify-between text-xs text-muted">
                <span>{playing === "Tresnany" ? "00:08" : "00:00"}</span>
                <span>{dict.voice.duration}</span>
              </div>
            </div>
            <button
              type="button"
              className="mt-5 rounded-full bg-lavender px-5 py-2.5 text-sm font-medium text-midnight"
              onClick={() => setPlaying((p) => (p === "Tresnany" ? null : "Tresnany"))}
            >
              {playing === "Tresnany" ? dict.voice.pause : dict.voice.play}
            </button>
            <p className="mt-3 text-xs text-muted">{dict.voice.previewHint}</p>
          </div>
        </div>

        <h3 className="mt-20 text-center font-serif text-3xl text-ink sm:text-4xl">
          {dict.voice.libraryHeadline}
        </h3>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm ${
                filter === item ? "bg-lavender text-midnight" : "border border-white/12 text-ink"
              }`}
            >
              {item === "all" ? dict.voice.filterAll : item}
            </button>
          ))}
        </div>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
          {visible.map((voice) => (
            <article key={voice.name} className="min-w-[220px] flex-1 rounded-3xl glass p-5">
              <div className="orb mb-4 h-14 w-14 rounded-full" />
              <h4 className="font-serif text-2xl text-ink">{voice.name}</h4>
              <p className="mt-1 text-sm text-lavender">{voice.mood}</p>
              <p className="mt-1 text-xs text-muted">{voice.language}</p>
              <button
                type="button"
                className="mt-5 rounded-full border border-white/15 px-4 py-2 text-sm text-ink"
                onClick={() => setPlaying((p) => (p === voice.name ? null : voice.name))}
              >
                {playing === voice.name ? dict.voice.pause : dict.voice.play}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

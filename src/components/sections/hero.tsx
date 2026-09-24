"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/i18n/en";
import { screens } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { StoreBadges } from "@/components/ui/store-badges";
import { Waveform } from "@/components/ui/waveform";

export function Hero({ dict }: { dict: Dictionary }) {
  const reduce = useReducedMotion();
  const [dream, setDream] = useState(0);
  const [playing, setPlaying] = useState(true);

  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-12 sm:pt-20">
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-xs uppercase tracking-[0.28em] text-lavender/75"
          >
            Moonlight
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="max-w-xl font-serif text-5xl leading-[1.05] text-ink sm:text-7xl"
          >
            {dict.hero.headline}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7 }}
            className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg"
          >
            {dict.hero.body}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ButtonLink href="#download">{dict.hero.primary}</ButtonLink>
            <ButtonLink href="#whisper" variant="secondary">
              {dict.cta.whisper}
            </ButtonLink>
          </motion.div>
          <div className="mt-8">
            <StoreBadges appStore={dict.download.appStore} googlePlay={dict.download.googlePlay} />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[320px]">
          <button
            type="button"
            onClick={() => setDream((i) => (i + 1) % dict.hero.dreams.length)}
            className="absolute -start-3 top-10 z-10 hidden max-w-[200px] rounded-2xl border border-white/10 bg-[#0b0816]/80 px-4 py-3 text-start text-sm text-ink backdrop-blur sm:block"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={dream}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="block"
              >
                {dict.hero.dreams[dream]}
              </motion.span>
            </AnimatePresence>
          </button>
          <motion.div
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneMockup src={screens.storyListen} alt={dict.hero.storyTitle} priority />
          </motion.div>
          <div className="absolute inset-x-4 -bottom-3 rounded-2xl border border-white/10 bg-[#0b0816]/85 px-4 py-3 backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setPlaying((v) => !v)}
                className="text-start"
              >
                <p className="text-xs text-muted">{dict.hero.listen}</p>
                <p className="text-sm text-ink">{dict.hero.voice}</p>
              </button>
              <Waveform playing={playing} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

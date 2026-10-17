"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/i18n/en";
import { screens } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { PromoShot } from "@/components/ui/promo-shot";
import { StoreBadges } from "@/components/ui/store-badges";

export function Hero({ dict }: { dict: Dictionary }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:pt-16">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
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
            className="max-w-xl font-serif text-5xl leading-[1.05] text-ink sm:text-6xl"
          >
            {dict.hero.headline}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7 }}
            className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg"
          >
            {dict.hero.body}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <StoreBadges appStore={dict.download.appStore} googlePlay={dict.download.googlePlay} />
            <ButtonLink href="#features" variant="secondary">
              {dict.hero.secondary}
            </ButtonLink>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto w-full max-w-[380px]"
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <PromoShot src={screens.promoHome} alt={dict.hero.headline} priority />
        </motion.div>
      </div>
    </section>
  );
}

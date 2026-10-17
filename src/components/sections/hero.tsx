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
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
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
            transition={{ delay: 0.14, duration: 0.7 }}
            className="mt-4 max-w-lg text-lg leading-7 text-lavender/90"
          >
            {dict.hero.support}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="mt-4 max-w-lg text-base leading-7 text-muted"
          >
            {dict.hero.body}
          </motion.p>
          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {dict.hero.pills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs tracking-wide text-ink"
              >
                {pill}
              </li>
            ))}
          </motion.ul>
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.26 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <StoreBadges appStore={dict.download.appStore} googlePlay={dict.download.googlePlay} />
            <ButtonLink href="#features" variant="secondary">
              {dict.hero.secondary}
            </ButtonLink>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto w-full"
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <PromoShot src={screens.promoHome} alt={dict.hero.headline} size="lg" priority />
        </motion.div>
      </div>
    </section>
  );
}

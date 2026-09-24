"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/en";
import { Reveal } from "@/components/motion/reveal";

export function Features({ dict }: { dict: Dictionary }) {
  return (
    <section id="features" className="px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-center text-xs uppercase tracking-[0.22em] text-lavender/80">
            {dict.features.eyebrow}
          </p>
          <h2 className="text-center font-serif text-4xl text-ink sm:text-5xl">{dict.features.headline}</h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dict.features.items.map((item, i) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
              className="rounded-[1.7rem] border border-white/8 bg-white/[0.03] p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-lavender">0{i + 1}</p>
              <h3 className="mt-4 font-serif text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

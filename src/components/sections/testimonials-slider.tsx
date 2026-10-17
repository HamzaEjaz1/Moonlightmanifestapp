"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/i18n/en";
import { SectionHeading } from "@/components/ui/section-heading";

const portraits: Record<string, string> = {
  dewi: "/reviews/dewi.jpg",
  layla: "/reviews/layla.jpg",
  noor: "/reviews/noor.jpg",
  maya: "/reviews/maya.jpg",
  elena: "/reviews/elena.jpg",
};

function portraitFor(name: string) {
  return portraits[name.trim().toLowerCase()] ?? "/reviews/dewi.jpg";
}

export function TestimonialsSlider({ dict }: { dict: Dictionary }) {
  const items = dict.testimonials.items;
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused || items.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [items.length, paused, reduce]);

  const go = (next: number) => {
    setIndex((next + items.length) % items.length);
  };

  const active = items[index];

  return (
    <section id="testimonials" className="overflow-hidden px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={dict.testimonials.headline} body={dict.testimonials.body} />

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={active.name + index}
                initial={reduce ? false : { opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -48 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10"
              >
                <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-start">
                  <motion.div
                    initial={reduce ? false : { scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.08, duration: 0.4 }}
                    className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-lavender/30 shadow-[0_12px_40px_rgba(155,126,232,0.35)] sm:h-28 sm:w-28"
                  >
                    <Image
                      src={portraitFor(active.name)}
                      alt={active.name}
                      fill
                      unoptimized
                      sizes="112px"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-2xl leading-snug text-ink sm:text-[1.7rem]">
                      “{active.quote}”
                    </p>
                    <footer className="mt-6">
                      <p className="text-base text-ink">{active.name}</p>
                      <p className="mt-1 text-sm text-muted">{active.location}</p>
                    </footer>
                  </div>
                </div>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label={dict.common.prev}
              onClick={() => go(index - 1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-ink transition hover:bg-white/10"
            >
              <span aria-hidden>‹</span>
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label={dict.nav.testimonials}>
              {items.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${item.name}, ${item.location}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-lavender" : "w-2.5 bg-white/25 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label={dict.common.next}
              onClick={() => go(index + 1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-ink transition hover:bg-white/10"
            >
              <span aria-hidden>›</span>
            </button>
          </div>

          <div className="mt-10 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(i)}
                className={`group flex min-w-[200px] flex-1 items-center gap-3 rounded-2xl border px-4 py-3 text-start transition ${
                  i === index
                    ? "border-lavender/40 bg-lavender/10"
                    : "border-white/8 bg-white/[0.03] hover:border-white/16"
                }`}
              >
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={portraitFor(item.name)}
                    alt=""
                    fill
                    unoptimized
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm text-ink">{item.name}</span>
                  <span className="block truncate text-xs text-muted">{item.location}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

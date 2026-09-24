"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PhoneMockup } from "@/components/ui/phone-mockup";

export type PhoneSlide = {
  src: string;
  title: string;
  caption: string;
};

export function PhoneSlider({
  slides,
  className = "",
}: {
  slides: PhoneSlide[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [reduce, slides.length]);

  const current = slides[index];

  function go(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto max-w-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.src}
            initial={reduce ? false : { opacity: 0, x: 36, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, x: -36, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) go(index + 1);
              if (info.offset.x > 50) go(index - 1);
            }}
          >
            <PhoneMockup src={current.src} alt={current.title} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 text-center">
        <p className="font-serif text-2xl text-ink">{current.title}</p>
        <p className="mt-2 text-sm text-muted">{current.caption}</p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous screen"
          onClick={() => go(index - 1)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-ink hover:bg-white/8"
        >
          ‹
        </button>
        <div className="flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={slide.title}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-7 bg-lavender" : "w-2 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next screen"
          onClick={() => go(index + 1)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-ink hover:bg-white/8"
        >
          ›
        </button>
      </div>
    </div>
  );
}

"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/i18n/en";
import { screens } from "@/lib/site";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { Reveal } from "@/components/motion/reveal";

const LIMIT = 1500;

export function Whisper({ dict }: { dict: Dictionary }) {
  const reduce = useReducedMotion();
  const [text, setText] = useState("");
  const [posted, setPosted] = useState<{ id: number; text: string; date: string }[]>([]);
  const [pulse, setPulse] = useState(0);

  const samples = dict.whisper.samples;
  const count = text.length;
  const canPost = text.trim().length > 0 && count <= LIMIT;

  const dateLabel = useMemo(
    () =>
      new Date().toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    [],
  );

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!canPost) return;
    setPosted((items) => [{ id: Date.now(), text: text.trim(), date: dateLabel }, ...items].slice(0, 4));
    setText("");
    setPulse((n) => n + 1);
  }

  return (
    <section id="whisper" className="relative overflow-hidden px-5 py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute start-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-violet/10 blur-3xl rtl:translate-x-1/2" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-lavender/80">
            {dict.whisper.eyebrow}
          </p>
          <h2 className="mx-auto max-w-3xl text-center font-serif text-4xl leading-[1.12] text-ink sm:text-6xl">
            {dict.whisper.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-muted sm:text-lg">
            {dict.whisper.body}
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 sm:p-8">
              <p className="text-sm text-muted">{dict.whisper.prompt}</p>
              <label className="sr-only" htmlFor="whisper-input">
                {dict.whisper.placeholder}
              </label>
              <textarea
                id="whisper-input"
                value={text}
                maxLength={LIMIT}
                onChange={(e) => setText(e.target.value)}
                placeholder={dict.whisper.placeholder}
                rows={5}
                className="mt-4 w-full resize-none rounded-2xl border border-white/8 bg-[#0a0714] px-4 py-4 text-ink outline-none placeholder:text-muted/70 focus:border-lavender/40"
              />
              <div className="mt-3 flex items-center justify-between text-xs text-muted">
                <span>{dict.whisper.note}</span>
                <span>
                  {count}/{LIMIT}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-5 text-sm text-ink">
                  {dict.whisper.photo}
                </span>
                <button
                  type="submit"
                  disabled={!canPost}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-midnight disabled:opacity-40"
                >
                  {dict.whisper.post}
                  <span aria-hidden>↑</span>
                </button>
              </div>
            </form>

            <div className="relative mt-8">
              <AnimatePresence>
                {pulse > 0 && !reduce && (
                  <motion.span
                    key={pulse}
                    className="pointer-events-none absolute start-8 top-2 h-24 w-24 rounded-full border border-lavender/40"
                    initial={{ opacity: 0.6, scale: 0.4 }}
                    animate={{ opacity: 0, scale: 2.4 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>
              <p className="font-serif text-2xl text-ink">{dict.whisper.created}</p>
              <div className="mt-4 space-y-3">
                <AnimatePresence initial={false}>
                  {posted.length === 0 ? (
                    <p className="text-sm text-muted">{dict.whisper.empty}</p>
                  ) : (
                    posted.map((item) => (
                      <motion.article
                        key={item.id}
                        layout
                        initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="rounded-2xl border border-white/8 bg-white/[0.04] p-4"
                      >
                        <p className="text-sm leading-6 text-ink">{item.text}</p>
                        <p className="mt-3 text-xs text-muted">{item.date}</p>
                      </motion.article>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          <div className="relative mx-auto w-full max-w-[340px]">
            {samples.map((sample, i) => (
              <motion.p
                key={sample}
                className={`absolute hidden max-w-[190px] rounded-2xl border border-white/10 bg-[#0b0816]/80 px-4 py-3 text-sm text-ink backdrop-blur sm:block ${
                  i === 0 ? "-start-8 top-16" : i === 1 ? "-end-10 top-40" : "-start-4 bottom-24"
                }`}
                animate={reduce ? undefined : { y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
              >
                {sample}
              </motion.p>
            ))}
            <motion.div
              className="relative"
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup src={screens.whisper} alt={dict.whisper.headline} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

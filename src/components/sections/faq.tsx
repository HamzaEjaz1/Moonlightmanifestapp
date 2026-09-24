"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/en";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQ({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title={dict.faq.headline} />
        <div className="mt-12 divide-y divide-white/10 rounded-[2rem] glass">
          {dict.faq.items.map((item, i) => {
            const expanded = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start text-ink"
                    onClick={() => setOpen(expanded ? null : i)}
                  >
                    <span className="font-medium">{item.q}</span>
                    <span aria-hidden className="text-lavender">
                      {expanded ? "–" : "+"}
                    </span>
                  </button>
                </h3>
                {expanded && <p className="px-6 pb-5 text-sm leading-7 text-muted">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

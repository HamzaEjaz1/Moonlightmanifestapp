"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AmbientField() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-5%,rgba(216,200,245,0.2),transparent_46%),radial-gradient(ellipse_at_90%_30%,rgba(155,126,232,0.16),transparent_40%),radial-gradient(ellipse_at_8%_80%,rgba(91,58,168,0.22),transparent_42%)]" />
      <motion.div
        className="orb absolute left-1/2 top-[-8rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full opacity-50"
        animate={reduce ? undefined : { y: [0, 18, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="ripple absolute left-[18%] top-[38%] h-40 w-40" />
      <span className="ripple absolute right-[14%] top-[58%] h-52 w-52 [animation-delay:2.4s]" />
      {Array.from({ length: 16 }, (_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-lavender/70"
          style={{
            left: `${8 + ((i * 17) % 84)}%`,
            top: `${12 + ((i * 23) % 72)}%`,
          }}
          animate={reduce ? undefined : { opacity: [0.15, 0.7, 0.15], y: [0, -12, 0] }}
          transition={{ duration: 5 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </div>
  );
}

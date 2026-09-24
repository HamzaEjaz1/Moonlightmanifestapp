import Link from "next/link";

export function Logo({ locale, compact = false }: { locale: string; compact?: boolean }) {
  return (
    <Link
      href={`/${locale}`}
      className="group inline-flex items-center gap-2.5 text-ink focus-visible:outline-offset-4"
      aria-label="Moonlight"
    >
      <span className="relative grid h-9 w-9 place-items-center" aria-hidden>
        <span className="absolute inset-0 rounded-full bg-lavender/20 blur-md transition group-hover:bg-lavender/30" />
        <span className="relative h-7 w-7 rounded-full bg-gradient-to-br from-lavender via-violet to-[#4a2d8a] shadow-[0_0_20px_rgba(180,150,255,0.45)]" />
        <span className="absolute start-[11px] top-1.5 h-5 w-5 rounded-full bg-midnight" />
      </span>
      {!compact && (
        <span className="font-serif text-[1.65rem] leading-none tracking-tight text-lavender [text-shadow:0_0_18px_rgba(216,200,245,0.45)]">
          Moonlight
        </span>
      )}
    </Link>
  );
}

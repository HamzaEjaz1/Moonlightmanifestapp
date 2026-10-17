import Link from "next/link";

export function Logo({ locale, compact = false }: { locale: string; compact?: boolean }) {
  return (
    <Link
      href={`/${locale}`}
      className="inline-flex items-center text-white focus-visible:outline-offset-4"
      aria-label="Moonlight"
    >
      {!compact && (
        <span className="text-[1.35rem] font-bold leading-none tracking-tight text-white sm:text-[1.5rem]">
          Moonlight
        </span>
      )}
    </Link>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-gradient-to-r from-[#e8defc] via-[#d4c2f5] to-[#b79eec] text-[#1a1028] shadow-[0_10px_30px_rgba(155,126,232,0.28)] hover:brightness-105",
  secondary:
    "border border-white/15 bg-white/5 text-ink hover:bg-white/10",
  ghost: "text-lavender hover:text-ink",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: Props) {
  const isHash = href.startsWith("#") || href.startsWith("/");
  const cls = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition ${variants[variant]} ${className}`;
  if (isHash) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} rel="noreferrer">
      {children}
    </a>
  );
}

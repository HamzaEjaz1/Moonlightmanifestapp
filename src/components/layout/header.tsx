"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/i18n/en";
import type { Locale } from "@/i18n/config";
import { Logo } from "@/components/ui/logo";
import { LanguageSelect } from "@/components/ui/language-select";
import { ButtonLink } from "@/components/ui/button";

const links = [
  { href: "#features", key: "features" },
  { href: "#voices", key: "voices" },
  { href: "#whisper", key: "whisper" },
  { href: "#stories", key: "stories" },
  { href: "#faq", key: "faq" },
] as const;

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled || open ? "border-b border-white/8 bg-[#07040f]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-lavender focus:px-4 focus:py-2 focus:text-midnight">
        {dict.nav.skip}
      </a>
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5">
        <Logo locale={locale} />
        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex" aria-label="Primary">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink">
              {dict.nav[item.key]}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelect locale={locale} label={dict.nav.language} />
          <ButtonLink href="#download">{dict.nav.download}</ButtonLink>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? dict.nav.closeMenu : dict.nav.openMenu}</span>
          <span aria-hidden className="flex w-4 flex-col gap-1.5">
            <span className={`h-px bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="border-t border-white/8 bg-[#07040f]/95 px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4 text-lg text-ink" aria-label="Mobile">
            {links.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {dict.nav[item.key]}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <LanguageSelect locale={locale} label={dict.nav.language} />
            <ButtonLink href="#download" className="w-full">
              {dict.nav.download}
            </ButtonLink>
            <Link href={`/${locale}/privacy`} className="text-sm text-muted" onClick={() => setOpen(false)}>
              {dict.nav.privacy}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

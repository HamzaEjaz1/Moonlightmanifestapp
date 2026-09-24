import { site } from "@/lib/site";

export function StoreBadges({
  appStore,
  googlePlay,
}: {
  appStore: string;
  googlePlay: string;
}) {
  const appHref = site.store.appStore || "#download";
  const playHref = site.store.googlePlay || "#download";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <StoreBadge href={appHref} label={appStore} store="App Store" />
      <StoreBadge href={playHref} label={googlePlay} store="Google Play" />
    </div>
  );
}

function StoreBadge({
  href,
  label,
  store,
}: {
  href: string;
  label: string;
  store: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center gap-3 rounded-2xl border border-white/12 bg-black/40 px-4 py-2 text-start text-ink hover:bg-white/5"
    >
      {store === "App Store" ? <AppleIcon /> : <PlayIcon />}
      <span className="leading-tight">
        <span className="block text-[10px] uppercase tracking-[0.16em] text-muted">{label}</span>
        <span className="block text-sm font-medium">{store}</span>
      </span>
    </a>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor" aria-hidden>
      <path d="M14.7 11.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-1.9-1.5-.2-3 .9-3.8.9s-2-.9-3.3-.8C4.4 6 3 6.8 2 8.3c-2 3.5-.5 8.6 1.4 11.4.9 1.4 2 2.9 3.5 2.9 1.4 0 1.9-.9 3.5-.9s2.1.9 3.6.8c1.5 0 2.4-1.4 3.3-2.8.7-1.1 1-2.2 1-2.2s-2.7-1-2.6-5.7zM12.4 4.3c.8-1 1.3-2.3 1.1-3.7-1.1.1-2.4.8-3.2 1.7-.7.8-1.3 2.1-1.1 3.4 1.2.1 2.4-.6 3.2-1.4z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor" aria-hidden>
      <path d="M1 1.8v16.4c0 .7.8 1.1 1.4.7l14-8.2c.6-.4.6-1.3 0-1.6L2.4 1c-.6-.4-1.4 0-1.4.8z" />
    </svg>
  );
}

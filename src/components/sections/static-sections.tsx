import type { Dictionary } from "@/i18n/en";
import type { Locale } from "@/i18n/config";
import Link from "next/link";
import { screens } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { ButtonLink } from "@/components/ui/button";
import { StoreBadges } from "@/components/ui/store-badges";

export function Trust({ dict }: { dict: Dictionary }) {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-5xl border-y border-white/8 px-2 py-12">
        <SectionHeading title={dict.trust.headline} body={dict.trust.body} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.trust.items.map((item) => (
            <div key={item.value} className="text-center">
              <p className="font-serif text-3xl text-lavender">{item.value}</p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow={dict.about.eyebrow}
            title={dict.about.headline}
            align="start"
          />
          <div className="mt-6 space-y-4 text-base leading-7 text-muted">
            <p>{dict.about.p1}</p>
            <p>{dict.about.p2}</p>
            <p>{dict.about.p3}</p>
            <p>{dict.about.p4}</p>
            <p className="text-ink/90">{dict.about.founder}</p>
          </div>
        </div>
        <div className="relative mx-auto grid max-w-md grid-cols-2 gap-3">
          <div className="orb absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full rtl:left-auto rtl:right-1/2 rtl:translate-x-1/2" />
          {dict.about.cards.map((card) => (
            <article key={card.title} className="relative rounded-2xl glass p-4">
              <h3 className="font-serif text-xl text-ink">{card.title}</h3>
              <p className="mt-2 text-sm text-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


export function Sharing({ dict }: { dict: Dictionary }) {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading title={dict.sharing.headline} body={dict.sharing.body} align="start" />
          <p className="mt-4 text-sm text-lavender">{dict.sharing.note}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {dict.sharing.platforms.map((p) => (
              <span key={p} className="rounded-full border border-white/12 px-3 py-1.5 text-xs text-ink">
                {p}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/8 px-4 py-2 text-sm">{dict.sharing.share}</span>
            <span className="rounded-full bg-white/8 px-4 py-2 text-sm">{dict.sharing.save}</span>
            <span className="rounded-full bg-white/8 px-4 py-2 text-sm">{dict.sharing.another}</span>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <PhoneMockup src={screens.shareStory} alt={dict.sharing.example} />
          <PhoneMockup src={screens.shareWhisper} alt={dict.sharing.share} className="sm:mt-10" />
        </div>
      </div>
    </section>
  );
}

export function Daily({ dict }: { dict: Dictionary }) {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={dict.daily.headline} />
        <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
          <span className="pointer-events-none absolute start-[8%] top-8 hidden h-px w-[84%] bg-white/10 md:block" />
          {dict.daily.items.map((item) => (
            <li key={item.time} className="rounded-3xl glass p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-lavender">{item.time}</p>
              <h3 className="mt-3 font-serif text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PrivacyBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/8 bg-[#0c0718] px-6 py-14 sm:px-12">
        <SectionHeading title={dict.privacy.headline} body={dict.privacy.body} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.privacy.points.map((p) => (
            <article key={p.title} className="rounded-2xl bg-white/4 p-5">
              <h3 className="font-serif text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href={`/${locale}/privacy`} className="text-sm text-lavender underline-offset-4 hover:underline">
            {dict.privacy.link}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const shots = [screens.home, screens.creating, screens.player];
  return (
    <section id="how" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={dict.how.headline} />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {dict.how.steps.map((step, i) => (
            <article key={step.title}>
              <PhoneMockup src={shots[i]} alt={step.title} />
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-lavender">0{i + 1}</p>
              <h3 className="mt-2 font-serif text-2xl text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcase({ dict }: { dict: Dictionary }) {
  const shots = [
    screens.home,
    screens.whisper,
    screens.storyListen,
    screens.storyRead,
    screens.affirmation,
    screens.shareStory,
  ];
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={dict.showcase.headline} body={dict.showcase.body} />
        <div className="mt-12 flex gap-5 overflow-x-auto pb-6">
          {dict.showcase.screens.map((screen, i) => (
            <figure key={screen.title} className="min-w-[230px] max-w-[230px]">
              <PhoneMockup src={shots[i]} alt={screen.title} />
              <figcaption className="mt-4">
                <p className="font-serif text-xl text-ink">{screen.title}</p>
                <p className="mt-1 text-sm text-muted">{screen.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={dict.testimonials.headline} body={dict.testimonials.body} />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <blockquote key={i} className="rounded-3xl glass p-6">
              <p className="font-serif text-xl text-muted">{dict.testimonials.placeholder}</p>
              <footer className="mt-6 text-sm">
                <p className="text-ink">{dict.testimonials.name}</p>
                <p className="text-muted">{dict.testimonials.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Download({ dict }: { dict: Dictionary }) {
  return (
    <section id="download" className="px-5 py-24">
      <div className="mx-auto max-w-4xl rounded-[2rem] glass px-6 py-16 text-center sm:px-12">
        <h2 className="font-serif text-4xl text-ink sm:text-5xl">{dict.download.headline}</h2>
        <p className="mx-auto mt-5 max-w-xl text-muted">{dict.download.body}</p>
        <div className="mt-8 flex justify-center">
          <StoreBadges appStore={dict.download.appStore} googlePlay={dict.download.googlePlay} />
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <QrLabel label="App Store" hint={dict.download.qr} />
          <QrLabel label="Google Play" hint={dict.download.qr} />
        </div>
        <p className="mt-6 text-xs text-muted">{dict.download.pending}</p>
      </div>
    </section>
  );
}

function QrLabel({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="w-36 text-center">
      <div className="mx-auto grid h-28 w-28 place-items-center rounded-2xl bg-white p-2">
        <svg viewBox="0 0 29 29" className="h-full w-full text-midnight" aria-hidden>
          <rect width="29" height="29" fill="white" />
          <path fill="currentColor" d="M1 1h8v8H1zm2 2v4h4V3zm13-2h8v8h-8zm2 2v4h4V3zM1 16h8v8H1zm2 2v4h4v-4zm18-2h4v2h-2v2h2v2h-4v2h6v-8h-2v2h-2v-2zm-8 0h2v2h-2zm4 2h2v2h-2zm-4 2h2v2h-2zm4 2h2v2h-2zm-6 2h2v2h-2zm4 0h4v2h-4z" />
        </svg>
      </div>
      <p className="mt-2 text-xs text-muted">{label}</p>
      <p className="text-[10px] text-muted">{hint}</p>
    </div>
  );
}

export function FinalCta({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden px-5 py-32">
      <div className="pointer-events-none absolute inset-0 flex justify-center" aria-hidden>
        <div className="orb mt-4 h-72 w-72 rounded-full opacity-70" />
        <span className="ripple absolute top-16 h-80 w-80" />
      </div>
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl text-ink sm:text-6xl">{dict.final.headline}</h2>
        <p className="mt-5 font-serif text-2xl text-lavender">{dict.final.sub}</p>
        <div className="mt-8">
          <ButtonLink href="#download">{dict.final.cta}</ButtonLink>
        </div>
      </div>
    </section>
  );
}

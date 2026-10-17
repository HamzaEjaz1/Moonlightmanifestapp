import type { Dictionary } from "@/i18n/en";
import { screens } from "@/lib/site";
import { PromoShot } from "@/components/ui/promo-shot";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProductMoments({ dict }: { dict: Dictionary }) {
  const shots = [screens.promoListen, screens.promoAffirmation, screens.promoWhisper, screens.promoRead];

  return (
    <section id="features" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={dict.momentsIntro.eyebrow}
          title={dict.momentsIntro.headline}
          body={dict.momentsIntro.body}
        />
        <div className="mt-16 space-y-20">
          {dict.moments.map((moment, i) => (
            <Reveal key={moment.title}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-lavender">0{i + 1}</p>
                  <h3 className="mt-3 font-serif text-4xl text-ink sm:text-[2.6rem]">{moment.title}</h3>
                  <p className="mt-4 max-w-md text-lg leading-7 text-lavender/90">{moment.body}</p>
                  <p className="mt-4 max-w-lg text-base leading-7 text-muted">{moment.detail}</p>
                  <ul className="mt-6 space-y-2">
                    {moment.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-ink">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <PromoShot src={shots[i]} alt={moment.title} size="md" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

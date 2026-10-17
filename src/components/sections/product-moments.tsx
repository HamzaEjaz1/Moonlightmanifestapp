import type { Dictionary } from "@/i18n/en";
import { screens } from "@/lib/site";
import { PromoShot } from "@/components/ui/promo-shot";
import { Reveal } from "@/components/motion/reveal";

export function ProductMoments({ dict }: { dict: Dictionary }) {
  const shots = [screens.promoListen, screens.promoAffirmation, screens.promoWhisper, screens.promoRead];

  return (
    <section id="features" className="px-5 py-20">
      <div className="mx-auto max-w-6xl space-y-20">
        {dict.moments.map((moment, i) => (
          <Reveal key={moment.title}>
            <article className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-lavender">0{i + 1}</p>
                <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">{moment.title}</h2>
                <p className="mt-4 max-w-md text-base leading-7 text-muted">{moment.body}</p>
              </div>
              <PromoShot src={shots[i]} alt={moment.title} />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

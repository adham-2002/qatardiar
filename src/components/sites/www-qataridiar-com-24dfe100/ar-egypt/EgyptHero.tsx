import Image from "next/image";
import { HERO, HERO_BACKGROUND } from "./data";
import { LeadForm } from "./LeadForm";
import { ParallaxLayer } from "./ParallaxLayer";

export function EgyptHero() {
  return (
    <section className="relative isolate bg-qd-navy">
      <ParallaxLayer maxOffsetPx={24} className="absolute inset-0 -z-10">
        <Image
          src={HERO_BACKGROUND}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
      </ParallaxLayer>
      {/* Two scrims: a flat wash for overall legibility, plus a vertical ramp
          that darkens the top behind the header and blends into the stats strip. */}
      <div className="absolute inset-0 -z-10 bg-qd-navy/60" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-qd-navy/85 via-qd-navy/25 to-qd-navy"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-[60px] px-[40px] pt-[210px] pb-[110px] max-[767px]:px-[20px] max-[767px]:pt-[130px] max-[767px]:pb-[60px] lg:grid-cols-[1fr_minmax(400px,460px)] lg:gap-[80px]">
        <div>
          <p
            style={{ "--qd-enter-delay": "0ms" } as React.CSSProperties}
            className="qd-enter mb-[20px] flex items-center gap-[14px] text-[13px] font-bold tracking-[0.18em] text-qd-gold uppercase"
          >
            <span className="inline-block h-[2px] w-[36px] bg-qd-gold" aria-hidden="true" />
            {HERO.eyebrow}
          </p>

          <h1
            style={{ "--qd-enter-delay": "80ms" } as React.CSSProperties}
            className="qd-enter text-[104px] leading-[1] font-extrabold text-qd-gold max-[991px]:text-[68px] max-[767px]:text-[52px]"
          >
            {HERO.projectName}
          </h1>

          <div
            style={{ "--qd-enter-delay": "120ms" } as React.CSSProperties}
            className="qd-enter mt-[20px] mb-[20px] flex flex-wrap items-center gap-[10px]"
          >
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-[14px] py-[7px] text-[13px] font-bold text-white backdrop-blur-sm">
              {HERO.location}
            </span>
            <span className="inline-flex items-center gap-[8px] rounded-full border border-qd-gold/50 bg-qd-gold/15 px-[14px] py-[7px] text-[13px] font-bold text-qd-gold">
              <span className="h-[6px] w-[6px] rounded-full bg-qd-gold" aria-hidden="true" />
              {HERO.status}
            </span>
          </div>

          <p
            style={{ "--qd-enter-delay": "160ms" } as React.CSSProperties}
            className="qd-enter max-w-[28ch] text-[22px] leading-[32px] font-bold text-white max-[991px]:text-[19px] max-[991px]:leading-[28px] max-[767px]:text-[17px] max-[767px]:leading-[26px]"
          >
            {HERO.tagline}
          </p>

          <p
            style={{ "--qd-enter-delay": "200ms" } as React.CSSProperties}
            className="qd-enter mt-[20px] max-w-[52ch] text-[18px] leading-[32px] text-white/80 max-[767px]:text-[16px] max-[767px]:leading-[28px]"
          >
            {HERO.lede}
          </p>

          <ul
            style={{ "--qd-enter-delay": "240ms" } as React.CSSProperties}
            className="qd-enter mt-[36px] flex flex-wrap gap-x-[18px] gap-y-[10px] list-none lg:block lg:space-y-[16px]"
          >
            {HERO.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-center gap-[8px] text-[14px] leading-[22px] text-white/90 lg:items-start lg:gap-[14px] lg:text-[16px] lg:leading-[28px]"
              >
                <span
                  className="inline-block h-[6px] w-[6px] shrink-0 rotate-45 bg-qd-gold lg:mt-[10px] lg:h-[8px] lg:w-[8px]"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div
          id="lead-form"
          style={{ "--qd-enter-delay": "320ms" } as React.CSSProperties}
          className="qd-enter scroll-mt-[100px] lg:translate-y-[40px]"
        >
          <LeadForm variant="glass" />
        </div>
      </div>
    </section>
  );
}

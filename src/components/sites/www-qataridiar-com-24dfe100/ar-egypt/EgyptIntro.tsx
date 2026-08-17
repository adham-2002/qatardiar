import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionCurve } from "./SectionCurve";
import { INTRO, INTRO_BACKGROUND } from "./data";

export function EgyptIntro() {
  return (
    <section className="relative overflow-hidden bg-qd-cream py-[var(--qd-section-y)]">
      <Container variant="wide" className="max-[767px]:px-[20px]">
        <div className="grid grid-cols-1 items-center gap-[48px] lg:grid-cols-12 lg:gap-[64px]">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-[24px] flex items-center gap-[14px]">
                <span
                  className="inline-block h-[2px] w-[36px] bg-qd-gold"
                  aria-hidden="true"
                />
                <p className="text-[13px] font-bold tracking-[0.18em] text-qd-gold uppercase">
                  {INTRO.eyebrow}
                </p>
              </div>
              <h2 className="mb-[28px] text-[44px] leading-[56px] font-bold text-qd-navy max-[767px]:text-[30px] max-[767px]:leading-[42px]">
                {INTRO.title}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-[50ch] text-[17px] leading-[34px] text-qd-text max-[767px]:text-[15px] max-[767px]:leading-[30px]">
                {INTRO.paragraph}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <figure className="group relative aspect-[16/10] w-full overflow-hidden shadow-2xl shadow-qd-navy/10 ring-1 ring-qd-navy/10">
                <Image
                  src={INTRO_BACKGROUND}
                  alt="Alam Al Roum masterplan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span
                  className="pointer-events-none absolute top-[20px] right-[20px] h-[32px] w-[32px] border-t-2 border-r-2 border-qd-gold/80 transition-all duration-500 group-hover:top-[24px] group-hover:right-[24px] max-[767px]:top-[12px] max-[767px]:right-[12px] max-[767px]:h-[20px] max-[767px]:w-[20px]"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute bottom-[20px] left-[20px] h-[32px] w-[32px] border-b-2 border-l-2 border-qd-gold/80 transition-all duration-500 group-hover:bottom-[24px] group-hover:left-[24px] max-[767px]:bottom-[12px] max-[767px]:left-[12px] max-[767px]:h-[20px] max-[767px]:w-[20px]"
                  aria-hidden="true"
                />
                <figcaption className="absolute top-[20px] left-[20px] bg-qd-navy px-[14px] py-[8px] text-[11px] font-bold tracking-[0.18em] text-qd-gold uppercase max-[767px]:top-[12px] max-[767px]:left-[12px]">
                  Masterplan
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
      <SectionCurve fill="qd-navy" flip />
    </section>
  );
}

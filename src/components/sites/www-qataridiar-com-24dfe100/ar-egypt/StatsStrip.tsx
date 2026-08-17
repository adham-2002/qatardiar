import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionCurve } from "./SectionCurve";
import { STATS } from "./data";

export function StatsStrip() {
  return (
    <section className="relative bg-qd-navy py-[var(--qd-section-y)] max-[767px]:py-[50px]">
      <Container variant="wide" className="max-[767px]:px-[20px]">
        <dl className="grid -mt-[56px] grid-cols-2 gap-y-[36px] pt-[46px] lg:grid-cols-4 max-[767px]:-mt-[24px]">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className={`px-[24px] max-[767px]:px-[12px] ${
                i > 0 ? "border-r border-white/15 max-lg:even:border-r-0" : ""
              } ${i === 2 ? "lg:border-r max-lg:border-r-0" : ""}`}
            >
              <dt className="text-[34px] leading-[44px] font-bold text-qd-gold max-[767px]:text-[26px] max-[767px]:leading-[36px]">
                {stat.value}
              </dt>
              <dd className="mt-[6px] text-[14px] leading-[24px] text-white/70">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
      <SectionCurve fill="qd-cream" />
    </section>
  );
}

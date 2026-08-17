import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { VALUE_PROPS } from "./data";

export function ValueProps() {
  return (
    <section className="relative bg-qd-cream py-[var(--qd-section-y)]">
      <Container variant="wide" className="max-[767px]:px-[20px]">
        <Reveal>
          <h2 className="mb-[36px] text-[32px] leading-[42px] font-bold text-qd-navy max-[767px]:text-[24px] max-[767px]:leading-[34px]">
            لماذا تستثمر مع الديار القطرية في مصر
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
          {VALUE_PROPS.map((prop, i) => (
            <Reveal
              key={prop.title}
              delay={i * 100}
              className={`rounded-qd-float border-t-[3px] border-qd-gold bg-white p-[34px] shadow-qd-float max-[767px]:p-[26px] ${
                i === 1 ? "md:-mt-[28px]" : ""
              }`}
            >
              <h3 className="mb-[14px] text-[20px] leading-[30px] font-bold text-qd-navy">
                {prop.title}
              </h3>
              <p className="text-[15px] leading-[28px] text-qd-text">{prop.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

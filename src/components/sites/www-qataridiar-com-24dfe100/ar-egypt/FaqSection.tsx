import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionCurve } from "./SectionCurve";
import { FAQS } from "./data";

export function FaqSection() {
  return (
    <section className="relative bg-qd-cream py-[var(--qd-section-y)]">
      <Container variant="wide" className="max-[767px]:px-[20px]">
        <Reveal>
          <h2 className="mb-[36px] text-[32px] leading-[42px] font-bold text-qd-navy max-[767px]:text-[24px] max-[767px]:leading-[34px]">
            الأسئلة الشائعة
          </h2>
        </Reveal>
        <div className="mx-auto max-w-[860px] divide-y divide-qd-rule border-t border-b border-qd-rule">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 60}>
              <details className="group py-[20px]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-[20px] text-[17px] leading-[28px] font-bold text-qd-navy max-[767px]:text-[15px]">
                  {faq.question}
                  <span
                    className="shrink-0 text-[22px] leading-none text-qd-gold transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-[12px] text-[15px] leading-[28px] text-qd-text">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
      <SectionCurve fill="qd-navy" />
    </section>
  );
}

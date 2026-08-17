import { Reveal } from "@/components/motion/Reveal";
import { FINAL_CTA } from "./data";
import { LeadForm } from "./LeadForm";

const PATTERN =
  "/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/images/pattern-hero.svg";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="bg-qd-navy bg-no-repeat py-[var(--qd-section-y)]"
      style={{ backgroundImage: `url(${PATTERN})`, backgroundPosition: "100% 0%" }}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-[60px] px-[40px] max-[767px]:px-[20px] lg:grid-cols-[1fr_minmax(400px,460px)] lg:gap-[80px]">
        <Reveal>
          <p className="mb-[14px] text-[13px] font-bold tracking-[0.18em] text-qd-gold uppercase">
            {FINAL_CTA.eyebrow}
          </p>
          <h2 className="mb-[22px] max-w-[18ch] text-[44px] leading-[56px] font-bold text-white max-[767px]:text-[28px] max-[767px]:leading-[42px]">
            {FINAL_CTA.title}
          </h2>
          <p className="max-w-[54ch] text-[17px] leading-[32px] text-white/75 max-[767px]:text-[15px] max-[767px]:leading-[28px]">
            {FINAL_CTA.body}
          </p>
        </Reveal>

        <Reveal className="lg:-mt-[72px]">
          <LeadForm
            variant="solid"
            title="اطلب اتصالاً"
            subtitle="اترك اسمك ورقم هاتفك وسنعاود الاتصال بك."
            submitLabel="اطلب اتصالاً"
            className="shadow-qd-float"
          />
        </Reveal>
      </div>
    </section>
  );
}

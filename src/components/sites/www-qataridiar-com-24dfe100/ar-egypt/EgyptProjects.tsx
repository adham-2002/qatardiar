import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionCurve } from "./SectionCurve";
import { EGYPT_PROJECTS } from "./data";

const AR_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
const toArabicIndex = (n: number) =>
  String(n)
    .padStart(2, "0")
    .split("")
    .map((d) => AR_DIGITS[Number(d)])
    .join("");

export function EgyptProjects() {
  return (
    <section className="relative bg-qd-navy py-[var(--qd-section-y-lg)]">
      <Container variant="wide" className="max-[767px]:px-[20px]">
        <div className="mb-[70px] flex items-end justify-between gap-[20px] border-b border-white/10 pb-[32px] max-[767px]:mb-[44px] max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-[14px]">
          <div>
            <p className="mb-[14px] text-[13px] font-bold tracking-[0.18em] text-qd-gold uppercase">
              محفظتنا العقارية
            </p>
            <h2 className="text-[44px] leading-[56px] font-bold text-white max-[767px]:text-[30px] max-[767px]:leading-[42px]">
              مشاريعنا في مصر
            </h2>
          </div>
          <p className="text-[14px] text-white/40">
            {toArabicIndex(EGYPT_PROJECTS.length)} مشاريع نشطة
          </p>
        </div>

        <div>
          {EGYPT_PROJECTS.map((project, i) => (
            <Reveal
              key={project.slug}
              as="article"
              delay={i * 100}
              className="group grid grid-cols-1 items-center gap-x-[64px] gap-y-[30px] border-b border-white/10 py-[56px] first:pt-0 lg:grid-cols-12 max-[767px]:py-[36px]"
            >
              <div className="relative lg:col-span-7">
                <span
                  aria-hidden="true"
                  style={{ "--qd-reveal-delay": `${i * 100 + 300}ms` } as React.CSSProperties}
                  className="qd-reveal-child pointer-events-none absolute -top-[26px] right-0 text-[100px] leading-none font-extrabold text-white/[0.05] transition-colors duration-300 select-none group-hover:text-white/[0.08] max-[767px]:-top-[14px] max-[767px]:text-[64px]"
                >
                  {toArabicIndex(i + 1)}
                </span>

                <div className="relative z-10">
                  <span
                    className="mb-[16px] inline-block h-[2px] w-[36px] bg-qd-gold"
                    aria-hidden="true"
                  />
                  <h3 className="text-[32px] leading-[42px] font-bold text-white transition-colors duration-300 group-hover:text-qd-gold max-[767px]:text-[24px] max-[767px]:leading-[34px]">
                    <Link href={project.href}>{project.title}</Link>
                  </h3>
                  <p className="mt-[14px] flex items-center gap-[10px] text-[14px] text-white/55">
                    <span>{project.location}</span>
                    <span
                      className="h-[3px] w-[3px] shrink-0 rounded-full bg-qd-gold"
                      aria-hidden="true"
                    />
                    <span>{project.status}</span>
                  </p>

                  <Link
                    href="#lead-form"
                    className="group/cta mt-[28px] inline-flex items-center gap-[14px] text-[14px] font-bold text-qd-gold transition-colors hover:text-white"
                  >
                    سجّل اهتمامك بهذا المشروع
                    <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full border border-qd-gold transition-all duration-300 group-hover/cta:-translate-x-[4px] group-hover/cta:bg-qd-gold">
                      <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" aria-hidden="true">
                        <path
                          d="M17 12H7m0 0 4-4m-4 4 4 4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-qd-gold transition-colors group-hover/cta:text-qd-navy"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden ring-1 ring-white/10">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className="pointer-events-none absolute top-[10px] right-[10px] h-[18px] w-[18px] border-t-2 border-r-2 border-qd-gold/70"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute bottom-[10px] left-[10px] h-[18px] w-[18px] border-b-2 border-l-2 border-qd-gold/70"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
      <SectionCurve fill="qd-cream" />
    </section>
  );
}

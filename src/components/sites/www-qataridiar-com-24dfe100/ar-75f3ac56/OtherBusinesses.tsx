import Image from "next/image";
import { BUSINESS_HEADING, BUSINESS_LOGOS } from "./data";

export function OtherBusinesses() {
  return (
    <section className="qd-biz mx-auto mt-[90px] mb-[70px] max-w-[1230px] px-[15px]">
      <h2 className="qd-biz-title text-[35px] leading-[40px] font-bold text-qd-navy uppercase">
        {BUSINESS_HEADING}
      </h2>

      <div className="mx-[-15px] my-[40px] flex flex-wrap items-center justify-between">
        {BUSINESS_LOGOS.map((logo) => (
          <div
            key={logo.href}
            className="qd-biz-row mb-[25px] basis-1/6 p-0 text-center"
          >
            <a href={logo.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.image}
                alt={logo.alt}
                width={194}
                height={126}
                className="mx-auto h-auto w-full max-w-[120px]"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

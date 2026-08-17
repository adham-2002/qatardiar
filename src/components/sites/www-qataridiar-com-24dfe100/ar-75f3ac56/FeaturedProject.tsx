import Image from "next/image";
import Link from "next/link";
import { FEATURED_HEADING, FEATURED_PROJECT } from "./data";

export function FeaturedProject() {
  return (
    <section className="qd-featured-project relative mx-auto mb-[90px] flex max-w-[1230px] flex-wrap justify-between px-[15px] max-[991px]:px-[25px]">
      <div className="mb-[100px] w-full max-[767px]:mb-[53px]">
        <h2 className="max-w-[400px] text-[35px] leading-[40px] font-bold text-qd-navy uppercase max-[767px]:max-w-[240px] max-[767px]:text-[22px] max-[767px]:leading-[26px]">
          {FEATURED_HEADING}
        </h2>
      </div>

      <div className="relative w-full">
        <Link
          href={FEATURED_PROJECT.href}
          className="block max-w-[890px] max-[767px]:max-w-[calc(100%-50px)]"
        >
          <Image
            src={FEATURED_PROJECT.image}
            alt={FEATURED_PROJECT.imageAlt}
            width={900}
            height={508}
            className="h-auto w-full max-[767px]:min-h-[200px] max-[767px]:object-cover"
          />
        </Link>

        <div className="absolute bottom-[calc(50%-190px)] left-0 flex h-full max-h-[380px] w-full max-w-[410px] flex-wrap items-center justify-between bg-white p-[35px] max-[767px]:relative max-[767px]:bottom-0 max-[767px]:float-right max-[767px]:mt-[-30px] max-[767px]:max-w-[310px]">
          <Link
            href={FEATURED_PROJECT.href}
            className="relative block max-w-[230px] text-[30px] leading-[35px] font-bold text-qd-navy uppercase max-[767px]:text-[18px] max-[767px]:leading-[28px]"
          >
            {FEATURED_PROJECT.title}
          </Link>

          <hr className="m-0 my-[15px] h-px w-full border-none bg-qd-rule" />

          {FEATURED_PROJECT.details.map((detail) => (
            <div
              key={detail.label}
              className="relative w-[calc(50%-15px)] text-[17px] leading-[16px] text-qd-navy"
            >
              <span className="block text-[13px] leading-[14px] font-bold text-qd-lavender uppercase">
                {detail.label}
              </span>
              <br />
              {detail.value}
            </div>
          ))}

          <hr className="m-0 my-[15px] h-px w-full border-none bg-qd-rule" />

          <div className="w-full">
            <Link
              href={FEATURED_PROJECT.inquireHref}
              className="block bg-[url(/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/images/icon-arrow-circle.svg)] bg-right bg-no-repeat pt-[4px] pr-[40px] pb-[4px] pl-0 text-[14px] font-bold text-qd-gold uppercase transition-[color,background-position] duration-300 hover:bg-[position:calc(100%-5px)_center] hover:text-qd-navy"
            >
              {FEATURED_PROJECT.inquireLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

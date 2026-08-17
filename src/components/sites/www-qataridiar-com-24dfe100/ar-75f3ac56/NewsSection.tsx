import Image from "next/image";
import Link from "next/link";
import { NEWS_HEADING, NEWS_ITEMS, NEWS_LINK } from "./data";

export function NewsSection() {
  return (
    <section className="qd-news mx-auto my-[90px] max-w-[1230px] px-[15px]">
      <h2 className="qd-news-title text-[35px] leading-[40px] font-bold text-qd-navy uppercase">
        {NEWS_HEADING}
      </h2>

      <div className="relative">
        <div className="qd-news-header absolute top-[-70px] left-0">
          <p>
            <Link
              href={NEWS_LINK.href}
              className="qd-news-link block text-[14px] font-bold text-qd-gold uppercase"
            >
              {NEWS_LINK.label}
            </Link>
          </p>
        </div>

        <div className="qd-news-grid mt-[40px] flex flex-wrap justify-between">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.href}
              className="qd-news-row w-[calc(50%-15px)] border-b-4 border-solid border-qd-lavender pb-[15px] text-[14px] leading-[14px] font-bold text-[rgba(66,66,66,0.8)]"
            >
              <div className="mb-[15px] overflow-hidden">
                <Link href={item.href}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={900}
                    height={508}
                    className="qd-news-img h-auto w-full"
                  />
                </Link>
              </div>
              <Link
                href={item.href}
                className="qd-news-headline mb-[45px] block text-[20px] leading-[30px] font-bold text-qd-navy"
              >
                {item.title}
              </Link>
              {item.date}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

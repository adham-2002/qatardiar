import Image from "next/image";
import Link from "next/link";
import { img } from "@/components/sites/www-qataridiar-com-24dfe100/shared/assets";
import {
  FOOTER_COPYRIGHT,
  FOOTER_MENU,
  FOOTER_PRIVACY,
  SOCIAL_LINKS,
} from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/data";

export function SiteFooter() {
  return (
    <footer className="qd-footer bg-qd-navy pt-[90px]">
      <div className="mx-auto flex max-w-[1280px] justify-between px-[40px] pt-0 pb-[70px]">
        <div className="min-w-[190px] grow">
          <Link href="/">
            <Image
              src={img("logo-footer.png")}
              alt="الرئيسية"
              width={120}
              height={120}
            />
          </Link>
          <div className="qd-footer-social mt-[75px]">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-[20px] inline-block w-[20px]"
              >
                <Image
                  src={s.icon}
                  alt={s.label}
                  width={s.width}
                  height={s.height}
                  style={s.label === "Whatsapp" ? { marginBottom: -5 } : undefined}
                />
              </a>
            ))}
          </div>
        </div>

        <ul className="qd-footer-menu grid grow-[3] list-none grid-cols-[auto_auto_auto] content-start">
          {FOOTER_MENU.map((item) => (
            <li key={item.href} className="mb-[14px] basis-1/3">
              <Link href={item.href} className="font-normal text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-none border-t border-solid border-t-white pb-[20px] opacity-20" />

      <div className="qd-footer-bottom mx-auto flex max-w-[1280px] flex-wrap justify-start px-[40px] pt-0 pb-[20px]">
        <div className="qd-footer-copyright mr-[25px] w-[105px] self-center text-[12px] leading-[23px] text-white">
          {FOOTER_COPYRIGHT}
        </div>
        <ul className="qd-footer-legal flex w-[285px] list-none flex-nowrap content-start justify-start">
          <li className="mr-[25px]">
            <Link
              href={FOOTER_PRIVACY.href}
              className="text-[12px] font-normal text-white"
            >
              {FOOTER_PRIVACY.label}
            </Link>
          </li>
        </ul>
        <span className="qd-footer-credit w-[calc(100%-415px)] text-left text-[12px] leading-[25px] text-white" />
      </div>
    </footer>
  );
}

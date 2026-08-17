"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { img } from "@/components/sites/www-qataridiar-com-24dfe100/shared/assets";
import { MAIN_MENU, SECONDARY_MENU, SOCIAL_LINKS } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/data";

const PANEL_SOCIAL = SOCIAL_LINKS.filter((s) => s.label !== "Whatsapp");

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="absolute top-0 right-0 left-0 z-[97] flex w-full justify-between p-[40px] max-[767px]:p-[20px]">
        <div>
          <Link href="/" rel="home" className="inline-block">
            <Image
              src={img("logo.svg")}
              alt="الرئيسية"
              width={104}
              height={104}
              className="max-[767px]:max-w-[73px]"
              priority
            />
          </Link>
        </div>

        <button
          type="button"
          aria-label="القائمة"
          aria-expanded={open}
          data-open={open}
          onClick={() => setOpen(true)}
          className={`qd-trigger relative h-[45px] w-[45px] cursor-pointer bg-white/15 transition-[0.5s] ease-in-out max-[767px]:top-[20px] max-[767px]:bg-white ${
            open ? "hidden" : ""
          }`}
        >
          <span className="qd-bar qd-bar-1 top-[11px]" />
          <span className="qd-bar qd-bar-2 top-[22px]" />
          <span className="qd-bar qd-bar-3 top-[22px]" />
          <span className="qd-bar qd-bar-4 top-[33px]" />
        </button>
      </header>

      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[998] bg-black/50 ${open ? "block" : "hidden"}`}
      />

      <div
        data-open={open}
        className="qd-burger fixed top-[40px] bottom-0 left-0 z-[999] mt-[-40px] w-1/2 overflow-auto bg-qd-navy px-[55px] py-[30px] max-[991px]:w-full max-[767px]:p-[20px]"
      >
        <nav className="mb-[40px]">
          <ul className="list-none">
            {MAIN_MENU.map((item, i) => (
              <li
                key={item.href}
                className="qd-item"
                style={{ "--i": i } as React.CSSProperties}
              >
                <Link
                  href={item.href}
                  className="text-[32px] leading-[55px] font-normal text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="mb-[40px]">
          <ul className="list-none">
            {SECONDARY_MENU.map((item, i) => (
              <li
                key={item.href}
                className="qd-item"
                style={{ "--i": MAIN_MENU.length + i } as React.CSSProperties}
              >
                <Link
                  href={item.href}
                  className="text-[22px] leading-[45px] font-normal text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-[95px] max-[1520px]:mt-0">
          {PANEL_SOCIAL.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-[20px] inline-block w-[20px]"
            >
              <Image src={s.icon} alt={s.label} width={s.width} height={s.height} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

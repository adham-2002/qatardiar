"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  HERO_BACKGROUND_DEFAULT,
  HERO_BACKGROUNDS,
  HERO_BACKGROUNDS_MOBILE,
  HERO_LINK,
  HERO_TITLE,
} from "./data";

const pick = (pool: string[]) => pool[Math.floor(Math.random() * pool.length)];

// The source randomises both backgrounds on every page load. The picks are
// cached at module scope so each snapshot stays referentially stable, which
// lets the client diverge from the server render without a hydration mismatch.
let desktopPick: string | undefined;
let mobilePick: string | undefined;

const subscribe = () => () => {};
const getDesktop = () => (desktopPick ??= pick(HERO_BACKGROUNDS));
const getMobile = () => (mobilePick ??= pick(HERO_BACKGROUNDS_MOBILE));

export function Hero() {
  const desktopBg = useSyncExternalStore(
    subscribe,
    getDesktop,
    () => HERO_BACKGROUND_DEFAULT,
  );
  const mobileBg = useSyncExternalStore(
    subscribe,
    getMobile,
    () => HERO_BACKGROUNDS_MOBILE[0],
  );

  return (
    <section className="bg-qd-navy">
      <div className="qd-hero-wrap relative mx-auto flex flex-wrap justify-stretch">
        <div
          className="qd-hero-left max-h-full w-1/2"
          style={
            {
              backgroundImage: `url(${desktopBg})`,
              "--mobile-image": `url(${mobileBg})`,
            } as React.CSSProperties
          }
        />
        <span className="qd-hero-square" aria-hidden="true" />

        <div className="qd-hero-right flex w-1/2 flex-col justify-center">
          <h1 className="qd-hero-title mb-[60px] w-[65%] text-[45px] leading-[55px] font-bold text-white uppercase">
            {HERO_TITLE}
          </h1>
          <div className="qd-hero-list mr-0 mb-0 ml-[14vh] w-[65%] max-[991px]:mb-[30px] max-[991px]:ml-[95px]">
            <ul className="list-none">
              <li>
                <Link
                  href={HERO_LINK.href}
                  className="qd-hero-link mb-[25px] block h-[25px] text-[14px] leading-[25px] font-bold text-qd-gold uppercase"
                >
                  {HERO_LINK.label}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

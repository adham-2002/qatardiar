"use client";

import { useEffect, useState } from "react";

/** Mobile-only conversion bar — appears once the hero form has scrolled away. */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("lead-form");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[96] border-t border-white/15 bg-qd-navy p-[12px] transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#contact"
        className="block bg-qd-gold py-[14px] text-center text-[15px] font-bold text-qd-navy"
      >
        سجّل اهتمامك الآن
      </a>
    </div>
  );
}

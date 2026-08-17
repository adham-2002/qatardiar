"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Small scroll-linked vertical drift for a single background element,
 * capped at `maxOffsetPx`. Skips attaching any listener on touch devices
 * or when the user prefers reduced motion — on those, `style` stays a
 * static no-op transform.
 */
export function useParallax(maxOffsetPx = 24) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isCoarsePointer) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const progress = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1);
        setOffset(progress * maxOffsetPx);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [maxOffsetPx]);

  return {
    ref,
    style: { transform: `translateY(${offset}px)` } as React.CSSProperties,
  };
}

"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "smart-popup:shown";
const IDLE_DELAY_MS = 30_000;
const SCROLL_THRESHOLD = 0.5;

interface UseSmartPopupOptions {
  /** Minimum time on page (ms) before the scroll-based fallback can fire. */
  idleDelayMs?: number;
  /** Minimum scroll depth (0-1) required for the fallback trigger. */
  scrollThreshold?: number;
  /** sessionStorage key used to guarantee a once-per-session show. */
  storageKey?: string;
}

/**
 * Fires once per session on either desktop exit-intent (cursor leaving toward
 * the tab bar) or, as a mobile-safe fallback, once the visitor has spent
 * `idleDelayMs` on the page and scrolled past `scrollThreshold`.
 * Any element with `data-popup-suppress` cancels the popup for the session
 * when clicked, so visitors who already found their way to a contact link
 * aren't interrupted.
 */
export function useSmartPopup({
  idleDelayMs = IDLE_DELAY_MS,
  scrollThreshold = SCROLL_THRESHOLD,
  storageKey = STORAGE_KEY,
}: UseSmartPopupOptions = {}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(storageKey)) return;

    let fired = false;
    let timeElapsed = false;

    const scrollDepth = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? window.scrollY / max : 0;
    };

    const fire = () => {
      if (fired) return;
      fired = true;
      sessionStorage.setItem(storageKey, "1");
      setOpen(true);
      cleanup();
    };

    const suppress = () => {
      sessionStorage.setItem(storageKey, "1");
      cleanup();
    };

    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0 && !event.relatedTarget) fire();
    };

    const onScroll = () => {
      if (timeElapsed && scrollDepth() >= scrollThreshold) fire();
    };

    const onClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement | null)?.closest("[data-popup-suppress]")) {
        suppress();
      }
    };

    const timer = setTimeout(() => {
      timeElapsed = true;
      if (scrollDepth() >= scrollThreshold) fire();
    }, idleDelayMs);

    function cleanup() {
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    }

    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });

    return cleanup;
  }, [idleDelayMs, scrollThreshold, storageKey]);

  return [open, setOpen] as const;
}

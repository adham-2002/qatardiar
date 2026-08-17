"use client";

import { createElement, type JSX, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type RevealVariant = "up" | "fade" | "scale";

interface RevealProps {
  as?: keyof JSX.IntrinsicElements;
  variant?: RevealVariant;
  /** Delay in ms before the transition starts, once in view. */
  delay?: number;
  className?: string;
  children: ReactNode;
}

/**
 * Wraps children in a scroll-triggered reveal. Only this wrapper is a client
 * component — children render exactly as authored, so wrapping a Server
 * Component subtree does not force it to the client.
 */
export function Reveal({ as = "div", variant = "up", delay = 0, className, children }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return createElement(
    as,
    {
      ref,
      "data-variant": variant,
      "data-inview": inView || undefined,
      className: cn("qd-reveal", className),
      style: delay ? ({ "--qd-reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined,
    },
    children,
  );
}

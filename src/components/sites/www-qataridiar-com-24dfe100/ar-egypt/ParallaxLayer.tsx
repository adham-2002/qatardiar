"use client";

import { useParallax } from "@/hooks/use-parallax";

export function ParallaxLayer({
  maxOffsetPx = 24,
  className,
  children,
}: {
  maxOffsetPx?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const { ref, style } = useParallax(maxOffsetPx);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} style={style} className={className}>
      {children}
    </div>
  );
}

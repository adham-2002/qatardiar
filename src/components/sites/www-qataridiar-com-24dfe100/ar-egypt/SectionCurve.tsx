import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface SectionCurveProps {
  /** Fill color of the section below this seam — creates the illusion the boundary line is curved, not flat. */
  fill: "qd-cream" | "qd-navy";
  /** Mirrors the arc horizontally. Alternate true/false across consecutive uses so repeated seams don't look stamped. */
  flip?: boolean;
  className?: string;
}

const FILL_CLASS: Record<SectionCurveProps["fill"], string> = {
  "qd-cream": "fill-qd-cream",
  "qd-navy": "fill-qd-navy",
};

/**
 * Absolute-positioned SVG divider pinned to the bottom of a section, filled
 * with the *next* section's color so the flat navy/cream cut reads as a
 * soft curve instead of a hard line. Render as the last child of a
 * `relative` section.
 */
export function SectionCurve({ fill, flip = false, className }: SectionCurveProps) {
  return (
    <Reveal
      variant="fade"
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 h-[96px] max-[767px]:h-[56px]",
        flip && "-scale-x-100",
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path d="M0,90 C420,10 860,118 1440,50 L1440,120 L0,120 Z" className={FILL_CLASS[fill]} />
      </svg>
    </Reveal>
  );
}

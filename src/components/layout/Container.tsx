import { cn } from "@/lib/utils";

type ContainerVariant = "clone" | "wide";

/**
 * `clone` matches the 1230px/15px pattern used across the qataridiar.com
 * clone routes; `wide` matches the 1400px/40px pattern used on the Egypt
 * landing page (`/`). Deliberately not unified into one width — collapsing
 * the clone routes to 1400px would break pixel-fidelity with the source site.
 */
export function Container({
  variant = "clone",
  as: Tag = "div",
  className,
  children,
}: {
  variant?: ContainerVariant;
  as?: "div" | "section";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full",
        variant === "clone" ? "max-w-qd-clone px-[15px]" : "max-w-qd-wide px-[40px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

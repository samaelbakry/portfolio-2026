import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({children,className,muted = false,}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xl border px-3 py-1 text-xs font-medium",
        muted
          ? "border-border bg-bg-subtle text-text-muted"
          : "border-accent/30 bg-accent-soft text-accent-dark dark:text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}

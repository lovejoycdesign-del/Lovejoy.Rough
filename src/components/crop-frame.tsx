import type { ReactNode } from "react";
import { cn } from "cn";

function Mark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute h-3 w-3 border-foreground/45", className)}
    />
  );
}

export function CropFrame({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div className={cn("relative p-2 sm:p-3", className)}>
      <Mark className="-top-px -left-px border-t border-l" />
      <Mark className="-top-px -right-px border-t border-r" />
      <Mark className="-bottom-px -left-px border-b border-l" />
      <Mark className="-bottom-px -right-px border-b border-r" />
      <div
        className={cn(
          "relative overflow-hidden border border-foreground/15 bg-card shadow-[3px_4px_0_0_rgba(28,25,22,0.08)]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

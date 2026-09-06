import type { ReactNode } from "react";
import { cn } from "cn";

export function Stamp({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rotate-[-8deg] items-center border-2 border-[#c4452d] px-2.5 py-1 font-mono text-[10px] tracking-[0.28em] text-[#c4452d] uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "/", label: "Index" },
  { href: "/notes", label: "Notes" },
  { href: "/marks", label: "Marks" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/15 bg-[color:var(--background)]/90 backdrop-blur-[2px]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl leading-none tracking-tight">LJ</span>
          <span className="font-mono text-[10px] tracking-[0.28em] text-foreground/60">
            DESIGN ROUGH
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/" || pathname.startsWith("/work")
                : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-mono text-[11px] tracking-[0.22em] uppercase transition-colors",
                  active ? "text-foreground" : "text-foreground/50 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none sm:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="rounded-none bg-[color:var(--background)]">
            <SheetHeader>
              <SheetTitle className="font-serif text-2xl font-normal">LJ Design Rough</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-4 px-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-sm tracking-[0.22em] uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

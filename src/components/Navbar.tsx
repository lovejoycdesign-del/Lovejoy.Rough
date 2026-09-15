"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/data/content";

type NavbarProps = {
  active?: "HOME" | "ABOUT" | "WORK" | "SKILLS" | "RESUME" | "CONTACT";
};

export function Navbar({ active = "HOME" }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-[72px] md:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="inline-flex h-9 overflow-hidden text-[15px] font-extrabold leading-none tracking-tight"
            aria-label="LJ"
          >
            <span className="grid h-9 w-[18px] place-items-center bg-white text-black">L</span>
            <span className="grid h-9 w-[18px] place-items-center bg-accent text-white">J</span>
          </span>
          <span className="text-sm font-bold tracking-[0.22em] text-white md:text-[15px]">
            {site.lastName.toUpperCase()}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.label;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[12px] font-semibold tracking-[0.18em] transition-colors ${
                  isActive
                    ? "text-white underline decoration-accent decoration-2 underline-offset-8"
                    : "text-white/90 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-white/20 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-current transition ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-[1.5px] w-full bg-current transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-current transition ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-black px-5 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm font-semibold tracking-[0.18em] ${
                    active === link.label ? "text-accent" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { CropFrame } from "@/components/crop-frame";
import { Plate } from "@/components/plates";
import {
  mediumLabel,
  mediums,
  pieces,
  type Medium,
} from "@/lib/work";

export function WorkIndex() {
  const [medium, setMedium] = useState<Medium>("all");

  const visible = useMemo(
    () => (medium === "all" ? pieces : pieces.filter((piece) => piece.medium === medium)),
    [medium],
  );

  return (
    <section id="plates" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8 flex flex-col gap-4 border-b border-foreground/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-[0.28em] text-foreground/55 uppercase">
            Index · {String(visible.length).padStart(2, "0")} plates
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Working plates</h2>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {mediums.map((item) => (
            <Button
              key={item}
              type="button"
              size="sm"
              variant={medium === item ? "default" : "outline"}
              className={cn(
                "rounded-none font-mono text-[10px] tracking-[0.18em] uppercase",
                medium === item && "bg-foreground text-background",
              )}
              onClick={() => setMedium(item)}
            >
              {item === "all" ? "All" : mediumLabel[item]}
            </Button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="border border-dashed border-foreground/25 px-6 py-16 text-center">
          <p className="font-serif text-2xl">No plates in this drawer.</p>
          <p className="mt-2 font-mono text-[12px] text-foreground/55">
            Try another medium, or open the full index.
          </p>
          <Button
            className="mt-6 rounded-none"
            variant="outline"
            onClick={() => setMedium("all")}
          >
            Show all plates
          </Button>
        </div>
      ) : (
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((piece, i) => (
            <li key={piece.slug} className={cn(i % 5 === 2 && "sm:translate-y-4")}>
              <Link href={`/work/${piece.slug}`} className="group block">
                <CropFrame className="transition-transform duration-300 group-hover:-translate-y-1">
                  <Plate id={piece.plate} />
                </CropFrame>
                <div className="mt-3 flex items-start justify-between gap-3 px-2">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.22em] text-foreground/50">
                      {piece.job} · {mediumLabel[piece.medium]}
                    </p>
                    <h3 className="mt-1 font-serif text-xl leading-tight group-hover:underline group-hover:decoration-[#c4452d] group-hover:underline-offset-4">
                      {piece.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-foreground/40">
                    {piece.year}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

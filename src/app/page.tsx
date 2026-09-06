import Link from "next/link";
import { Stamp } from "@/components/stamp";
import { WorkIndex } from "@/components/work-index";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-foreground/15">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.32em] text-foreground/55 uppercase">
              Vol. 01 · Opened 2026 · Severn, MD
            </p>
            <h1 className="mt-5 font-serif text-[clamp(3.4rem,12vw,7.5rem)] leading-[0.86] tracking-tight">
              LJ Design
              <br />
              Rough
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              Working plates from Lovejoy Chirombo. Posters, type specimens, still
              lifes, a couple of identity experiments. The sheets that still have
              tape on them.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#plates"
                className="inline-flex h-10 items-center border border-foreground bg-foreground px-4 font-mono text-[11px] tracking-[0.2em] text-background uppercase"
              >
                Open the index
              </Link>
              <Link
                href="/notes"
                className="inline-flex h-10 items-center border border-foreground/30 px-4 font-mono text-[11px] tracking-[0.2em] uppercase hover:border-foreground"
              >
                Read the notes
              </Link>
            </div>
          </div>
          <div className="relative min-h-40">
            <Stamp className="absolute top-2 right-4 text-xs sm:right-8">
              Rough / Not final
            </Stamp>
            <div className="mt-16 border border-foreground/20 bg-card p-5 font-mono text-[11px] leading-relaxed tracking-[0.08em] text-foreground/70">
              <p>JOB TICKET</p>
              <p className="mt-3 text-foreground">Designer · Lovejoy Chirombo</p>
              <p>Medium · Graphic design</p>
              <p>Status · In progress</p>
              <p>Press · Achromatic</p>
              <p className="mt-4 text-[#c4452d]">Do not over-clean.</p>
            </div>
          </div>
        </div>
      </section>
      <WorkIndex />
    </>
  );
}

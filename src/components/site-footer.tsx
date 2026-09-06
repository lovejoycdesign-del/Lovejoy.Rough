import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-foreground/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-serif text-lg">Lovejoy Chirombo</p>
          <p className="mt-1 font-mono text-[11px] tracking-[0.18em] text-foreground/55">
            Graphic design · Severn, Maryland
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.18em] uppercase">
          <Link href="/marks" className="hover:text-[#c4452d]">
            Leave a mark
          </Link>
          <a
            href="https://www.behance.net/lovejoychirombo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#c4452d]"
          >
            Behance
          </a>
          <span className="text-foreground/45">Vol. 01 · Not final</span>
        </div>
      </div>
    </footer>
  );
}

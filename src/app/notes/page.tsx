import type { Metadata } from "next";
import Link from "next/link";
import { Stamp } from "@/components/stamp";

export const metadata: Metadata = {
  title: "Notes",
  description: "Who keeps this book, and why the work is still rough.",
};

export default function NotesPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="font-mono text-[11px] tracking-[0.28em] text-foreground/55 uppercase">
        Notes · About the book
      </p>
      <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
        Lovejoy Chirombo
      </h1>
      <p className="mt-3 font-mono text-[12px] tracking-[0.16em] text-foreground/60">
        Graphic designer · Severn, Maryland
      </p>
      <Stamp className="mt-8">Achromatic on purpose</Stamp>

      <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/80">
        <p>
          This is the working book. Not a case-study deck, not a Behance recap with
          the tape peeled off. The plates here are reconstructions of work I have
          already put into the world — posters, type specimens, still lifes, a
          small identity — drawn back onto paper so you can see how they sit as a
          set.
        </p>
        <p>
          I design in black, white, and the grays between. Color shows up as a
          correction mark. If a composition needs twelve hues to hold, it is not
          holding.
        </p>
        <p>
          I am based in Severn, Maryland, around Bowie State and the kind of
          government-adjacent digital work that wants everything clean. This book
          is the other half of the desk: concert sheets, movie titles, bottles,
          fruit, a no that has to be loud.
        </p>
      </div>

      <section className="mt-14 border-t border-foreground/15 pt-10">
        <h2 className="font-serif text-3xl">How the book is kept</h2>
        <ul className="mt-6 space-y-5">
          <li>
            <p className="font-mono text-[11px] tracking-[0.2em] text-[#c4452d] uppercase">
              Leave the mistake
            </p>
            <p className="mt-1 text-foreground/75">
              Tracking notes, open paths, the extra exclamation. If it taught the
              plate something, it stays.
            </p>
          </li>
          <li>
            <p className="font-mono text-[11px] tracking-[0.2em] text-[#c4452d] uppercase">
              Type before decoration
            </p>
            <p className="mt-1 text-foreground/75">
              Century and Gill get their own sheets because the letter is the
              picture.
            </p>
          </li>
          <li>
            <p className="font-mono text-[11px] tracking-[0.2em] text-[#c4452d] uppercase">
              Cheap paper
            </p>
            <p className="mt-1 text-foreground/75">
              Posters that look too expensive never get wheatpasted. Newsprint is a
              constraint, not a texture overlay.
            </p>
          </li>
        </ul>
      </section>

      <p className="mt-14 font-mono text-[12px] tracking-[0.12em] text-foreground/60">
        Originals live on{" "}
        <a
          href="https://www.behance.net/lovejoychirombo"
          className="text-foreground underline decoration-[#c4452d] underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          Behance
        </a>
        . To work together,{" "}
        <Link href="/marks" className="text-foreground underline decoration-[#c4452d] underline-offset-4">
          leave a mark
        </Link>
        .
      </p>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CropFrame } from "@/components/crop-frame";
import { Plate } from "@/components/plates";
import { Stamp } from "@/components/stamp";
import {
  getNeighbors,
  getPiece,
  mediumLabel,
  pieces,
  statusLabel,
} from "@/lib/work";

export function generateStaticParams() {
  return pieces.map((piece) => ({ slug: piece.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) return { title: "Missing plate" };
  return {
    title: piece.title,
    description: piece.caption,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) notFound();

  const { prev, next } = getNeighbors(slug);

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="font-mono text-[11px] tracking-[0.28em] text-foreground/55 uppercase">
        <Link href="/#plates" className="hover:text-foreground">
          Index
        </Link>
        <span className="mx-2">/</span>
        Job {piece.job}
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
        <CropFrame>
          <div className="min-h-[28rem] sm:min-h-[36rem]">
            <Plate id={piece.plate} className="h-full min-h-[28rem] sm:min-h-[36rem]" />
          </div>
        </CropFrame>

        <aside className="space-y-8 lg:sticky lg:top-20">
          <div>
            <Stamp>{statusLabel[piece.status]}</Stamp>
            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">{piece.title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">{piece.caption}</p>
          </div>

          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-y border-foreground/15 py-5 font-mono text-[11px] tracking-[0.14em] uppercase">
            <div>
              <dt className="text-foreground/45">Medium</dt>
              <dd className="mt-1">{mediumLabel[piece.medium]}</dd>
            </div>
            <div>
              <dt className="text-foreground/45">Year</dt>
              <dd className="mt-1">{piece.year}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-foreground/45">Tools</dt>
              <dd className="mt-1 normal-case tracking-[0.08em]">{piece.tools.join(" · ")}</dd>
            </div>
          </dl>

          <p className="text-[15px] leading-relaxed text-foreground/80">{piece.note}</p>

          {piece.behance ? (
            <a
              href={piece.behance}
              target="_blank"
              rel="noreferrer"
              className="inline-flex font-mono text-[11px] tracking-[0.2em] uppercase underline decoration-foreground/30 underline-offset-4 hover:decoration-[#c4452d]"
            >
              Behance original
            </a>
          ) : null}
        </aside>
      </div>

      <nav className="mt-14 flex items-start justify-between gap-6 border-t border-foreground/15 pt-6 font-mono text-[11px] tracking-[0.18em] uppercase">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="max-w-[45%] hover:text-[#c4452d]">
            <span className="block text-foreground/45">Previous</span>
            <span className="mt-1 block font-serif text-lg tracking-normal normal-case">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/work/${next.slug}`} className="max-w-[45%] text-right hover:text-[#c4452d]">
            <span className="block text-foreground/45">Next</span>
            <span className="mt-1 block font-serif text-lg tracking-normal normal-case">
              {next.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}

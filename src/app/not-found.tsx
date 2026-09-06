import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-24 text-center">
      <p className="font-mono text-[11px] tracking-[0.28em] text-[#c4452d] uppercase">
        Missing plate
      </p>
      <h1 className="mt-4 font-serif text-5xl">This sheet is not in the book.</h1>
      <p className="mt-4 text-foreground/70">
        The job number does not match anything on the index. It may have been
        pulled, or the URL is a sketch of a sketch.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-10 items-center justify-center self-center border border-foreground px-4 font-mono text-[11px] tracking-[0.2em] uppercase"
      >
        Return to the index
      </Link>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { PaintStroke } from "@/components/PaintStroke";
import { hero } from "@/data/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-1 flex-col justify-center pt-24 pb-6 md:pt-28 md:pb-8"
    >
      <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-8 px-5 md:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-4 lg:px-10 xl:gap-8">
        <div className="relative z-10 max-w-xl lg:max-w-none">
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(4.5rem,13vw,7.75rem)] leading-[0.86] tracking-[0.02em]">
            <span className="block text-white">{hero.titleLine1}</span>
            <span className="relative mt-1 block text-accent">
              {hero.titleLine2}
              <PaintStroke className="absolute -bottom-1 left-0 h-4 w-[min(100%,300px)] md:h-[18px]" />
            </span>
          </h1>

          <p className="mt-8 max-w-md text-[14px] leading-relaxed text-white/90 md:mt-9 md:max-w-[420px] md:text-[15px]">
            {hero.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-9 md:gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-[12px] font-bold tracking-[0.12em] text-black transition hover:bg-[#ffb84a]"
            >
              {hero.primaryCta}
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center border border-white/85 px-5 py-3 text-[12px] font-bold tracking-[0.12em] text-white transition hover:border-accent hover:text-accent"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[3/2] w-full max-w-[620px] lg:ml-auto">
            <Image
              src="/hero-portrait.png"
              alt="Painted portrait of Lovejoy Chirombo"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 768px) 94vw, 620px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpIcon,
  BrushIcon,
  ClapperIcon,
  CodeIcon,
  DollarIcon,
  HeartIcon,
  LightbulbIcon,
  PenIcon,
  PersonIcon,
  SparkIcon,
  TruckIcon,
} from "@/components/icons";
import { PaintStroke } from "@/components/PaintStroke";
import { SocialLinks } from "@/components/SocialLinks";
import { skillsPage } from "@/data/content";

const cardIconMap = {
  design: PenIcon,
  animation: ClapperIcon,
  development: CodeIcon,
  strategy: PersonIcon,
  art: BrushIcon,
  logistics: TruckIcon,
  financing: DollarIcon,
  problem: LightbulbIcon,
};

const valueIconMap = {
  creativity: LightbulbIcon,
  innovation: SparkIcon,
  purposeValue: HeartIcon,
  growthValue: ArrowUpIcon,
};

export function SkillsPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">
              {skillsPage.eyebrow}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-bebas)] text-[clamp(2.75rem,7vw,5rem)] leading-[0.92] tracking-wide">
              <span className="block text-white">{skillsPage.headingWhite}</span>
              <span className="mt-1 block text-accent">{skillsPage.headingAccent}</span>
            </h1>
            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-white/85 md:text-base">
              {skillsPage.intro}
            </p>
          </div>

          <div className="relative mx-auto aspect-[3/2] w-full max-w-[560px] lg:max-w-none">
            <Image
              src="/hero-portrait.png"
              alt="Painted portrait of Lovejoy Chirombo"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 1024px) 90vw, 560px"
            />
          </div>
        </div>
      </section>

      {/* What I do best */}
      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-accent/70" aria-hidden />
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(1.75rem,4vw,2.75rem)] tracking-wide text-white">
                {skillsPage.bestHeading}
              </h2>
              <span className="h-px w-10 bg-accent/70" aria-hidden />
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-white/65 md:text-[15px]">
              {skillsPage.bestIntro}
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {skillsPage.cards.map((card) => {
              const Icon = cardIconMap[card.icon];
              return (
                <li
                  key={card.title}
                  className="flex flex-col border border-white/10 bg-[#121212] p-5 md:p-6"
                >
                  <Icon size={28} className="text-accent" />
                  <h3 className="mt-4 text-[13px] font-bold tracking-[0.16em] text-white">
                    {card.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] text-white/65"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Tools */}
      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-accent/70" aria-hidden />
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(1.75rem,4vw,2.75rem)] tracking-wide text-white">
              {skillsPage.toolsHeading}
            </h2>
            <span className="h-px w-10 bg-accent/70" aria-hidden />
          </div>

          <ul className="mt-12 flex flex-wrap items-start justify-center gap-x-8 gap-y-8 md:gap-x-10">
            {skillsPage.tools.map((tool) => (
              <li key={tool.label} className="w-16 text-center sm:w-[4.5rem]">
                <span
                  className="mx-auto grid h-12 w-12 place-items-center rounded-xl text-[13px] font-extrabold tracking-tight shadow-sm"
                  style={{
                    backgroundColor: tool.color,
                    color: tool.dark ? "#111" : "#fff",
                  }}
                >
                  {tool.short}
                </span>
                <p className="mt-2.5 text-[11px] font-medium tracking-wide text-white/70">
                  {tool.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-white/10 bg-[#111] py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">
              {skillsPage.drivesEyebrow}
            </p>
            <h2 className="relative mt-3 inline-block font-[family-name:var(--font-bebas)] text-[clamp(2rem,4.5vw,3.25rem)] leading-none tracking-wide text-white">
              {skillsPage.drivesHeading}
              <PaintStroke className="absolute -bottom-1 left-0 h-3.5 w-[min(100%,280px)]" />
            </h2>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillsPage.values.map((value) => {
              const Icon = valueIconMap[value.icon];
              return (
                <li key={value.title}>
                  <Icon size={28} className="text-accent" />
                  <h3 className="mt-4 text-[13px] font-bold tracking-[0.14em] text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/65">{value.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="relative overflow-hidden border border-white/10 bg-[#121212] px-6 py-8 md:px-10 md:py-10">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-28 opacity-80"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse at 0% 50%, rgba(232,93,4,0.55), transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-28 opacity-80"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse at 100% 50%, rgba(193,18,31,0.45), transparent 70%)",
              }}
            />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-start gap-4 md:items-center">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-accent text-accent">
                  <PenIcon size={22} />
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-bebas)] text-[clamp(1.5rem,3vw,2.25rem)] tracking-wide text-white">
                    {skillsPage.ctaHeading}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-white/70">
                    {skillsPage.ctaBody}
                  </p>
                </div>
              </div>
              <Link
                href="/work"
                className="inline-flex shrink-0 items-center gap-2 border border-accent px-5 py-3 text-[12px] font-bold tracking-[0.12em] text-accent transition hover:bg-accent hover:text-black"
              >
                {skillsPage.ctaButton}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-5 sm:flex-row md:px-8 lg:px-10">
          <p className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-white md:text-4xl">
            LET&apos;S CONNECT
          </p>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}

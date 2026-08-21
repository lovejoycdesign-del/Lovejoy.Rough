import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpIcon,
  BasketballIcon,
  BookIcon,
  BrushIcon,
  CapIcon,
  ClapperIcon,
  CodeIcon,
  CommunityIcon,
  DollarIcon,
  HeartIcon,
  LightbulbIcon,
  MusicIcon,
  PenIcon,
  PersonIcon,
  PlaneIcon,
  QuoteIcon,
  RocketIcon,
  SparkIcon,
  StarIcon,
  TargetIcon,
  TruckIcon,
} from "@/components/icons";
import { SocialLinks } from "@/components/SocialLinks";
import { about } from "@/data/content";

const expertiseIconMap = {
  design: PenIcon,
  animation: ClapperIcon,
  development: CodeIcon,
  strategy: PersonIcon,
  art: BrushIcon,
  logistics: TruckIcon,
  financing: DollarIcon,
  problem: LightbulbIcon,
  passion: HeartIcon,
  growth: StarIcon,
};

const interestIconMap = {
  music: MusicIcon,
  basketball: BasketballIcon,
  reading: BookIcon,
  travel: PlaneIcon,
  community: CommunityIcon,
};

const journeyIconMap = {
  beginnings: PenIcon,
  education: CapIcon,
  exploring: RocketIcon,
  purpose: TargetIcon,
};

const valueIconMap = {
  creativity: LightbulbIcon,
  innovation: SparkIcon,
  purposeValue: HeartIcon,
  growthValue: ArrowUpIcon,
};

export function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">
              {about.eyebrow}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-bebas)] text-[clamp(2.75rem,7vw,5rem)] leading-[0.92] tracking-wide">
              <span className="block text-white">{about.headingWhite}</span>
              <span className="mt-1 block text-accent">{about.headingAccent}</span>
            </h1>
            <div className="mt-5 h-[3px] w-24 bg-accent" aria-hidden />
            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-white/85 md:text-base">
              {about.intro}
            </p>
            <a
              href="#connect"
              className="mt-8 inline-flex items-center gap-2 border border-accent px-5 py-3 text-[12px] font-bold tracking-[0.12em] text-accent transition hover:bg-accent hover:text-black"
            >
              {about.connectCta}
              <span aria-hidden>→</span>
            </a>
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

      {/* Skills */}
      <section id="skills" className="border-b border-white/10 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">
              {about.skillsEyebrow}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-[clamp(2.25rem,5vw,3.5rem)] leading-none tracking-wide text-white">
              {about.skillsHeading}
            </h2>
            <ul className="mt-8 space-y-2.5">
              {about.skillBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-white/85 md:text-[15px]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {about.expertise.map((item) => {
              const Icon = expertiseIconMap[item.icon];
              return (
                <li key={item.title} className="text-center">
                  <span className="mx-auto flex h-9 w-9 items-center justify-center text-accent">
                    <Icon size={32} className="text-accent" />
                  </span>
                  <p className="mt-3 text-[11px] font-bold tracking-[0.14em] text-white uppercase">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[10px] leading-snug text-white/50">{item.detail}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Interests */}
      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.25fr_0.9fr] lg:items-center lg:gap-10">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">
                {about.interestsEyebrow}
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-[clamp(2rem,4.5vw,3.25rem)] leading-none tracking-wide text-white">
                {about.interestsHeading}
              </h2>
              <p className="mt-5 text-[14px] leading-relaxed text-white/70">{about.interestsIntro}</p>
            </div>

            <ul className="flex flex-wrap items-start justify-center gap-6 sm:gap-8">
              {about.interests.map((item) => {
                const Icon = interestIconMap[item.icon];
                return (
                  <li key={item.title} className="w-[5.5rem] text-center sm:w-24">
                    <span className="mx-auto flex h-9 w-9 items-center justify-center text-accent">
                      <Icon size={32} className="text-accent" />
                    </span>
                    <p className="mt-2.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[10px] leading-snug text-white/50">{item.detail}</p>
                  </li>
                );
              })}
            </ul>

            <blockquote className="relative">
              <QuoteIcon size={32} className="text-accent" />
              <p className="mt-4 text-[14px] leading-relaxed text-white/85 md:text-[15px]">
                {about.interestsQuote}
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14 lg:px-10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">
              {about.journeyEyebrow}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-[clamp(2rem,4.5vw,3.25rem)] leading-none tracking-wide text-white">
              {about.journeyHeading}
            </h2>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/70">
              {about.journeyIntro}
            </p>
            <Link
              href="/work"
              className="mt-8 inline-flex items-center gap-2 border border-accent px-5 py-3 text-[12px] font-bold tracking-[0.12em] text-white transition hover:bg-accent hover:text-black"
            >
              {about.journeyCta}
              <span aria-hidden>→</span>
            </Link>
          </div>

          <ol className="relative grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            <div
              className="pointer-events-none absolute top-[22px] right-[10%] left-[10%] hidden h-px bg-accent/60 xl:block"
              aria-hidden
            />
            {about.journey.map((step) => {
              const Icon = journeyIconMap[step.icon];
              return (
                <li key={step.title} className="relative text-center xl:text-left">
                  <span className="relative z-10 mx-auto grid h-11 w-11 place-items-center rounded-full border border-accent bg-black text-accent xl:mx-0">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-[12px] font-bold tracking-[0.12em] text-white uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">
              {about.valuesHeading}
            </p>
            <ul className="mt-10 space-y-7">
              {about.values.map((value) => {
                const Icon = valueIconMap[value.icon];
                return (
                  <li key={value.title} className="flex gap-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center text-accent">
                      <Icon size={24} />
                    </span>
                    <div>
                      <h3 className="text-[13px] font-bold tracking-[0.14em] text-white uppercase">
                        {value.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-white/65">{value.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <aside className="relative flex min-h-[300px] flex-col justify-end overflow-hidden border border-white/10 bg-[#111] p-8 md:p-10">
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-80"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse at 80% 40%, rgba(232,93,4,0.55), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(193,18,31,0.4), transparent 55%)",
              }}
            />
            <div className="relative">
              <QuoteIcon size={32} className="text-accent" />
              <p className="mt-5 text-[16px] leading-relaxed text-white md:text-[17px]">
                {about.closingQuote}
              </p>
              <p className="mt-8 font-[family-name:var(--font-signature)] text-3xl text-accent md:text-4xl">
                {about.signature}
              </p>
              <p className="mt-1 text-[11px] font-semibold tracking-[0.22em] text-white/70">
                {about.signatureTitle}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer connect */}
      <footer id="connect" className="py-10 md:py-12">
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

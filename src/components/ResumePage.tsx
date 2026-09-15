import Image from "next/image";
import type { ComponentType, ReactNode } from "react";
import {
  BasketballIcon,
  BookIcon,
  BriefcaseIcon,
  BrushIcon,
  CapIcon,
  CheckIcon,
  ClapperIcon,
  CodeIcon,
  CommunityIcon,
  EmailIcon,
  GearIcon,
  HeartIcon,
  MonitorIcon,
  MusicIcon,
  PenIcon,
  PhoneMobileIcon,
  PlaneIcon,
  QuoteIcon,
  StarIcon,
  TrophyIcon,
} from "@/components/icons";
import { SocialLinks } from "@/components/SocialLinks";
import { contact, resumePage } from "@/data/content";

const interestIconMap = {
  music: MusicIcon,
  basketball: BasketballIcon,
  reading: BookIcon,
  travel: PlaneIcon,
  community: CommunityIcon,
};

const highlightIconMap = {
  art: BrushIcon,
  animation: ClapperIcon,
  design: PenIcon,
  development: CodeIcon,
  ui: PhoneMobileIcon,
};

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  children: ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-3 text-[13px] font-bold tracking-[0.18em] text-white">
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center text-accent">
        <Icon size={20} />
      </span>
      <span>{children}</span>
    </h2>
  );
}

export function ResumePage() {
  return (
    <div className="overflow-x-hidden bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">
              {resumePage.eyebrow}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[0.95] tracking-wide">
              <span className="block text-white">{resumePage.headingWhite}</span>
              <span className="mt-1 block text-accent">{resumePage.headingAccent}</span>
            </h1>
            <div className="mt-5 h-[3px] w-24 bg-accent" aria-hidden />
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/85">
              {resumePage.intro}
            </p>

            <ul className="mt-8 space-y-3 text-[14px] text-white/80">
              <li className="flex min-w-0 items-center gap-3">
                <span className="inline-flex h-5 w-5 shrink-0 text-accent">
                  <EmailIcon size={18} />
                </span>
                <a href={contact.emailHref} className="truncate hover:text-accent">
                  {contact.email}
                </a>
              </li>
            </ul>
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

      {/* Body */}
      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 md:px-8 lg:grid-cols-2 lg:gap-8 lg:px-10">
          {/* Left column */}
          <div className="min-w-0 space-y-10 border border-white/10 bg-[#111] p-6 md:p-8">
            <div>
              <SectionTitle icon={CapIcon}>EDUCATION</SectionTitle>
              <div className="mt-5">
                <p className="text-[15px] font-semibold text-white">{resumePage.education.degree}</p>
                <p className="mt-1 text-[14px] text-accent">{resumePage.education.field}</p>
                <p className="mt-2 text-[14px] text-white/75">{resumePage.education.school}</p>
              </div>
            </div>

            <div>
              <SectionTitle icon={GearIcon}>SKILLS SUMMARY</SectionTitle>
              <p className="mt-4 text-[13px] leading-relaxed text-white/65">
                {resumePage.skillsIntro}
              </p>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {resumePage.skillColumns.map((column) => (
                  <ul key={column[0]} className="space-y-2">
                    {column.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2 text-[13px] text-white/75"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle icon={MonitorIcon}>TOOLS & TECHNOLOGIES</SectionTitle>
              <ul className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-4">
                {resumePage.tools.map((tool) => (
                  <li key={tool.label} className="text-center">
                    <span
                      className="mx-auto grid h-11 w-11 place-items-center rounded-lg text-[12px] font-extrabold"
                      style={{
                        backgroundColor: tool.color,
                        color: tool.dark ? "#111" : "#fff",
                      }}
                    >
                      {tool.short}
                    </span>
                    <p className="mt-1.5 text-[10px] leading-tight text-white/60">{tool.label}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitle icon={HeartIcon}>INTERESTS</SectionTitle>
              <ul className="mt-5 flex flex-wrap gap-5">
                {resumePage.interests.map((item) => {
                  const Icon = interestIconMap[item.icon];
                  return (
                    <li key={item.title} className="w-16 text-center">
                      <span className="mx-auto flex h-7 w-7 items-center justify-center text-accent">
                        <Icon size={24} />
                      </span>
                      <p className="mt-1.5 text-[10px] font-semibold tracking-wide text-white/70 uppercase">
                        {item.title}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <blockquote className="border-t border-white/10 pt-6">
              <span className="inline-flex h-7 w-7 text-accent">
                <QuoteIcon size={24} />
              </span>
              <p className="mt-3 text-[14px] leading-relaxed text-accent italic">
                &ldquo;{resumePage.quote}&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right column */}
          <div className="min-w-0 space-y-8">
            <div className="border border-white/10 bg-[#111] p-6 md:p-8">
              <SectionTitle icon={BriefcaseIcon}>EXPERIENCE</SectionTitle>
              <ol className="relative mt-6 space-y-7 border-l border-accent/40 pl-6">
                {resumePage.experience.map((job) => (
                  <li key={job.title} className="relative">
                    <span className="absolute top-1.5 -left-[1.9375rem] h-3 w-3 rounded-full bg-accent" />
                    <h3 className="text-[15px] font-semibold text-white">{job.title}</h3>
                    <p className="mt-1 text-[12px] tracking-wide text-accent/90">{job.meta}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/65">{job.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-white/10 bg-[#111] p-6 md:p-8">
              <SectionTitle icon={StarIcon}>PROJECT HIGHLIGHTS</SectionTitle>
              <ul className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
                {resumePage.highlights.map((item) => {
                  const Icon = highlightIconMap[item.icon];
                  return (
                    <li key={item.title} className="text-center">
                      <span className="mx-auto flex h-8 w-8 items-center justify-center text-accent">
                        <Icon size={26} />
                      </span>
                      <p className="mt-2 text-[11px] font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-[10px] text-white/55">{item.detail}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border border-white/10 bg-[#111] p-6 md:p-8">
              <SectionTitle icon={TrophyIcon}>ACHIEVEMENTS</SectionTitle>
              <ul className="mt-5 space-y-3">
                {resumePage.achievements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-white/75">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 text-accent">
                      <CheckIcon size={20} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-white/10 py-12 md:py-14">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="relative overflow-hidden border border-white/10 bg-[#121212] px-6 py-8 md:flex md:items-center md:justify-between md:gap-8 md:px-10">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-24 opacity-80"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse at 0% 50%, rgba(232,93,4,0.5), transparent 70%)",
              }}
            />
            <div className="relative flex min-w-0 items-start gap-4 md:items-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-accent text-accent">
                <PenIcon size={22} />
              </span>
              <div className="min-w-0">
                <h3 className="font-[family-name:var(--font-bebas)] text-[clamp(1.5rem,3vw,2.25rem)] tracking-wide text-white">
                  {resumePage.ctaHeading}
                </h3>
                <p className="mt-2 text-[14px] text-white/70">{resumePage.ctaBody}</p>
              </div>
            </div>
            <a
              href={contact.emailHref}
              className="relative mt-6 inline-flex shrink-0 items-center gap-2 border border-accent px-5 py-3 text-[12px] font-bold tracking-[0.12em] text-accent transition hover:bg-accent hover:text-black md:mt-0"
            >
              {resumePage.ctaButton}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

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

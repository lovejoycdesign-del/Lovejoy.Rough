import Image from "next/image";
import {
  BasketballIcon,
  BookIcon,
  CommunityIcon,
  EmailIcon,
  LinkedInIcon,
  MusicIcon,
  PenIcon,
  PlaneIcon,
  QuoteIcon,
} from "@/components/icons";
import { contact, contactPage } from "@/data/content";

const inspireIconMap = {
  music: MusicIcon,
  basketball: BasketballIcon,
  reading: BookIcon,
  travel: PlaneIcon,
  community: CommunityIcon,
};

export function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">
              {contactPage.eyebrow}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[0.95] tracking-wide text-white">
              <span className="block">{contactPage.headingBefore}</span>
              <span className="mt-1 block font-[family-name:var(--font-signature)] text-[clamp(2.75rem,8vw,5.5rem)] font-normal normal-case tracking-normal text-accent">
                {contactPage.headingScript}
              </span>
              <span className="mt-1 block">{contactPage.headingAfter}</span>
            </h1>
            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-white/80 md:text-base">
              {contactPage.intro}
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

      {/* Contact details + topics */}
      <section className="border-b border-white/10 py-14 md:py-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
          <div className="space-y-4">
            <a
              href={contact.emailHref}
              className="flex items-center gap-4 border border-white/10 bg-[#121212] p-5 transition hover:border-accent/50"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-black text-accent">
                <EmailIcon size={22} />
              </span>
              <span>
                <span className="block text-[11px] font-semibold tracking-[0.2em] text-white/55">
                  EMAIL
                </span>
                <span className="mt-1 block text-[15px] text-white">{contact.email}</span>
              </span>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-white/10 bg-[#121212] p-5 transition hover:border-accent/50"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-black text-accent">
                <LinkedInIcon size={22} />
              </span>
              <span>
                <span className="block text-[11px] font-semibold tracking-[0.2em] text-white/55">
                  LINKEDIN
                </span>
                <span className="mt-1 block text-[15px] text-white">lj-chirombo</span>
              </span>
            </a>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">
              {contactPage.topicsHeading}
            </p>
            <ul className="mt-5 space-y-3">
              {contactPage.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-[15px] text-white/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {topic}
                </li>
              ))}
            </ul>
            <blockquote className="mt-8">
              <span className="inline-flex h-7 w-7 text-accent">
                <QuoteIcon size={24} />
              </span>
              <p className="mt-3 font-[family-name:var(--font-signature)] text-2xl leading-snug text-accent md:text-3xl">
                &ldquo;{contactPage.quote}&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Inspires */}
      <section className="border-b border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <p className="text-center text-[11px] font-semibold tracking-[0.28em] text-accent">
            {contactPage.inspireHeading}
          </p>
          <ul className="mt-10 flex flex-wrap items-start justify-center gap-8 md:gap-12">
            {contactPage.inspires.map((item) => {
              const Icon = inspireIconMap[item.icon];
              return (
                <li key={item.title} className="w-28 text-center sm:w-32">
                  <span className="mx-auto flex h-9 w-9 items-center justify-center text-accent">
                    <Icon size={32} />
                  </span>
                  <p className="mt-3 text-[12px] font-bold tracking-[0.14em] text-white uppercase">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[12px] leading-snug text-white/55">{item.detail}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-white/10 py-12 md:py-14">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          <div className="relative overflow-hidden border border-white/10 bg-[#121212] px-6 py-8 md:px-10">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-24 opacity-80"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse at 0% 50%, rgba(232,93,4,0.5), transparent 70%)",
              }}
            />
            <div className="relative flex items-start gap-4 md:items-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-accent text-accent">
                <PenIcon size={22} />
              </span>
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(1.5rem,3vw,2.25rem)] tracking-wide text-white">
                  {contactPage.ctaHeading}
                </h2>
                <p className="mt-2 max-w-2xl text-[14px] text-white/70">{contactPage.ctaBody}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center md:py-12">
        <p className="font-[family-name:var(--font-bebas)] text-[clamp(1.25rem,3vw,1.75rem)] tracking-[0.12em] text-white">
          {contactPage.taglineBefore}{" "}
          <span className="text-accent">{contactPage.taglineAccent}</span>{" "}
          {contactPage.taglineAfter}
        </p>
      </footer>
    </div>
  );
}

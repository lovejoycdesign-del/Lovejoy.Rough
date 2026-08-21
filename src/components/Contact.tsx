import { contact, site } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 lg:px-10">
        <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">CONTACT</p>
        <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-[clamp(2.75rem,6vw,4.5rem)] leading-none tracking-wide text-white">
          Let&apos;s Connect
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
          Interested in collaborating, reviewing work, or talking design? Reach out — I&apos;m always
          hungry to grow and create.
        </p>
        <div className="mt-8 flex flex-wrap gap-3" id="resume">
          <a
            href={contact.emailHref}
            className="inline-flex bg-accent px-5 py-3 text-[12px] font-bold tracking-[0.12em] text-black transition hover:bg-[#ffb84a]"
          >
            EMAIL {site.shortName}
          </a>
          <a
            href="/work"
            className="inline-flex border border-white/80 px-5 py-3 text-[12px] font-bold tracking-[0.12em] text-white transition hover:border-accent hover:text-accent"
          >
            BACK TO WORK
          </a>
        </div>
      </div>
    </section>
  );
}

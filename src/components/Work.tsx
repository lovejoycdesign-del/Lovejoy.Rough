import { works } from "@/data/content";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-white/10 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 lg:px-10">
        <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">SELECTED WORK</p>
        <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-[clamp(2.75rem,6vw,4.5rem)] leading-none tracking-wide text-white">
          Portfolio
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] text-white/70">
          Pieces from printmaking, traditional art, type posters, branding, and interface design.
        </p>

        <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {works.map((work, index) => (
            <li
              key={work.title}
              className="grid gap-3 py-7 transition hover:bg-white/[0.02] md:grid-cols-[72px_1.1fr_0.9fr] md:gap-8 md:py-8"
            >
              <span className="font-[family-name:var(--font-bebas)] text-2xl text-accent/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-wide text-white md:text-xl">
                  {work.title}
                  {work.year ? (
                    <span className="ml-2 text-sm font-medium text-white/45">({work.year})</span>
                  ) : null}
                </h3>
                <p className="mt-1 text-[12px] tracking-[0.08em] text-accent/90 uppercase">
                  {work.medium}
                  <span className="mx-2 text-white/30">·</span>
                  {work.size}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-white/65 md:pt-1">{work.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

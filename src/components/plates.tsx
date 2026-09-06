import type { ReactElement, ReactNode } from "react";
import { cn } from "cn";
import type { PlateId } from "@/lib/work";

function Field({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-56 w-full items-center justify-center overflow-hidden sm:min-h-72",
        className,
      )}
    >
      {children}
    </div>
  );
}

function PlateRapper() {
  return (
    <Field className="bg-[#161412] text-[#efe8d8]">
      <div className="absolute inset-0 opacity-30 mix-blend-overlay [background-image:radial-gradient(circle,_#efe8d8_0.7px,_transparent_0.8px)] [background-size:7px_7px]" />
      <div className="relative flex flex-col items-start px-6 py-8">
        <span className="font-mono text-[10px] tracking-[0.35em] text-[#efe8d8]/70">
          LIVE · ONE NIGHT
        </span>
        <p className="mt-3 font-serif text-[clamp(3.5rem,12vw,6.5rem)] leading-[0.78] tracking-tight">
          RAP
          <br />
          PER
        </p>
        <span className="mt-5 rotate-[-8deg] border border-[#c4452d] px-2 py-0.5 font-mono text-[10px] tracking-[0.28em] text-[#c4452d]">
          POSTER 01
        </span>
      </div>
    </Field>
  );
}

function PlateLine() {
  return (
    <Field className="bg-[#f4efe4]">
      <svg viewBox="0 0 240 280" className="h-[85%] w-[70%]" fill="none" aria-hidden>
        <path
          d="M118 38c18 8 38 32 32 62-4 22-28 32-28 54 0 18 16 28 14 48-14 6-40 8-58 2 2-22 18-30 12-50-8-24-36-28-34-58 2-32 28-52 62-58z"
          stroke="#1c1916"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <path
          d="M92 92c8 10 22 12 34 6M108 148c12 18 8 38-6 52"
          stroke="#1c1916"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <path
          d="M84 232c28 18 62 16 88-4"
          stroke="#1c1916"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute right-4 bottom-4 font-mono text-[10px] tracking-[0.2em] text-foreground/45">
        CONTOUR · NO LIFT
      </span>
    </Field>
  );
}

function PlateShiners() {
  return (
    <Field className="bg-[#1a1816] text-[#e8dfcf]">
      <div className="absolute top-0 bottom-0 left-3 flex flex-col justify-between py-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="h-3 w-2 rounded-[1px] bg-[#e8dfcf]/35" />
        ))}
      </div>
      <div className="absolute top-0 bottom-0 right-3 flex flex-col justify-between py-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={`r-${i}`} className="h-3 w-2 rounded-[1px] bg-[#e8dfcf]/35" />
        ))}
      </div>
      <div className="relative text-center">
        <p className="font-mono text-[10px] tracking-[0.45em] text-[#e8dfcf]/55">A FILM</p>
        <h3 className="mt-3 font-serif text-[clamp(2.6rem,8vw,4.4rem)] leading-none tracking-tight">
          SHINERS
        </h3>
        <div className="mx-auto mt-5 h-px w-16 bg-[#c4452d]" />
      </div>
    </Field>
  );
}

function PlateSteamLogo() {
  return (
    <Field className="bg-[#f7f1e4]">
      <svg
        viewBox="0 0 80 70"
        className="absolute top-8 right-10 h-16 w-16 text-foreground/70"
        fill="none"
        aria-hidden
      >
        <path d="M20 58c0-18 8-22 8-38" stroke="currentColor" strokeWidth="1.2" />
        <path d="M36 62c2-22-6-24 4-44" stroke="currentColor" strokeWidth="1.2" />
        <path d="M52 56c6-16 0-24 8-40" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <div className="relative text-center">
        <p className="font-serif text-5xl leading-none tracking-[0.18em] sm:text-6xl">STEAM</p>
        <p className="mt-2 font-mono text-sm tracking-[0.55em]">CARE</p>
      </div>
    </Field>
  );
}

function PlateSteamPromo() {
  return (
    <Field className="bg-[#efe8d8]">
      <div className="grid h-full w-full grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-between border-r border-foreground/15 p-6">
          <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/50">
            05 · PROMO
          </span>
          <div>
            <p className="font-serif text-4xl leading-[0.9] sm:text-5xl">Steam</p>
            <p className="font-serif text-4xl leading-[0.9] sm:text-5xl">Care</p>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-4 p-6">
          <p className="max-w-[12ch] font-mono text-[11px] leading-relaxed tracking-wide text-foreground/70">
            For the fabric of the day. Heat, not harsh.
          </p>
          <span className="w-fit border border-foreground px-2 py-1 font-mono text-[10px] tracking-[0.2em]">
            HANGTAG
          </span>
        </div>
      </div>
    </Field>
  );
}

function PlateHeart() {
  return (
    <Field className="bg-[#f3eee3]">
      <svg viewBox="0 0 200 180" className="h-[80%] w-[80%]" fill="none" aria-hidden>
        <path
          d="M40 90c0-28 22-46 50-28 8-20 38-28 52-8 18 26-8 52-52 86"
          stroke="#1c1916"
          strokeWidth="1.1"
          strokeDasharray="3 4"
        />
        <path
          d="M100 140c-36-28-58-52-40-78 12-16 32-8 40 8"
          stroke="#1c1916"
          strokeWidth="1.2"
        />
        <path d="M100 70c14-22 48-18 52 12 4 28-20 52-52 78" stroke="#c4452d" strokeWidth="1.3" />
        <circle cx="100" cy="86" r="2" fill="#1c1916" />
      </svg>
      <span className="absolute bottom-4 left-4 rotate-[-6deg] font-mono text-[10px] tracking-[0.18em] text-[#c4452d]">
        LEAVE THE PATH OPEN
      </span>
    </Field>
  );
}

function PlateCentury() {
  return (
    <Field className="items-stretch bg-[#f7f1e4] p-6">
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex items-baseline justify-between border-b border-foreground/20 pb-2 font-mono text-[10px] tracking-[0.25em]">
          <span>CENTURY</span>
          <span>SPECIMEN</span>
        </div>
        <p className="font-serif text-[clamp(3.4rem,10vw,5.5rem)] leading-none">Century</p>
        <p className="font-serif text-2xl tracking-wide">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p className="max-w-[36ch] font-serif text-sm leading-relaxed text-foreground/75">
          Bracketed serifs. A text face that still holds a headline. Tracking marked in red where
          it ran tight.
        </p>
        <span className="self-end font-mono text-[10px] tracking-widest text-[#c4452d] line-through">
          72pt / +20 → +12
        </span>
      </div>
    </Field>
  );
}

function PlateGill() {
  return (
    <Field className="bg-[#ece4d4]">
      <div className="relative px-6 text-center">
        <p className="font-mono text-[10px] tracking-[0.4em] text-foreground/55">
          HUMANIST GROTESQUE
        </p>
        <p
          className="mt-4 text-[clamp(4.2rem,14vw,7rem)] leading-none font-medium tracking-[-0.06em]"
          style={{
            fontFamily:
              '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
          }}
        >
          Gill
        </p>
        <p
          className="mt-1 text-[clamp(2rem,7vw,3.4rem)] tracking-[0.22em]"
          style={{
            fontFamily:
              '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
          }}
        >
          SANS
        </p>
        <p className="mt-6 font-mono text-[11px] tracking-[0.35em]">R · g · a · t · 2</p>
      </div>
    </Field>
  );
}

function PlateBottle() {
  return (
    <Field className="bg-[#f4efe4]">
      <div className="flex items-end gap-6">
        <svg viewBox="0 0 80 180" className="h-48 w-20" aria-hidden>
          <path
            d="M32 8h16v18c10 8 14 18 14 32v110c0 8-8 12-22 12s-22-4-22-12V58c0-14 4-24 14-32V8z"
            fill="none"
            stroke="#1c1916"
            strokeWidth="1.4"
          />
          <clipPath id="bottle">
            <path d="M32 8h16v18c10 8 14 18 14 32v110c0 8-8 12-22 12s-22-4-22-12V58c0-14 4-24 14-32V8z" />
          </clipPath>
          <g clipPath="url(#bottle)">
            <rect x="20" y="20" width="40" height="28" fill="#1c1916" />
            <rect x="20" y="48" width="40" height="32" fill="#5c564e" />
            <rect x="20" y="80" width="40" height="32" fill="#8a8378" />
            <rect x="20" y="112" width="40" height="28" fill="#c4bbaa" />
            <rect x="20" y="140" width="40" height="40" fill="#e8e0d2" />
          </g>
        </svg>
        <ul className="space-y-3 font-mono text-[10px] tracking-[0.2em] text-foreground/60">
          <li>N2</li>
          <li>N4</li>
          <li>N6</li>
          <li>N8</li>
          <li>N10</li>
        </ul>
      </div>
    </Field>
  );
}

function PlateBerries() {
  return (
    <Field className="bg-[#1f1c19] text-[#efe8d8]">
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        {[
          [30, 28, 18],
          [58, 22, 12],
          [72, 48, 22],
          [40, 60, 16],
          [22, 50, 10],
          [64, 70, 14],
          [48, 42, 9],
        ].map(([x, y, r], i) => (
          <span
            key={i}
            className="absolute rounded-full border border-[#efe8d8]/80"
            style={{ left: `${x}%`, top: `${y}%`, width: r * 4, height: r * 4 }}
          />
        ))}
      </div>
      <div className="relative text-center">
        <p className="font-sans text-[clamp(2.4rem,8vw,4rem)] leading-[0.85] font-medium tracking-tight">
          BOMB
          <br />
          BERRIES
        </p>
        <p className="mt-4 font-mono text-[10px] tracking-[0.35em] text-[#c4452d]">PROMO · ROUGH</p>
      </div>
    </Field>
  );
}

function PlateSayNo() {
  return (
    <Field className="bg-[#f1eadc]">
      <div className="relative text-center">
        <p className="font-mono text-sm tracking-[0.5em]">SAY</p>
        <p className="relative mt-2 font-serif text-[clamp(5rem,18vw,8rem)] leading-none">NO!</p>
        <span className="absolute top-1/2 left-1/2 h-1 w-[120%] -translate-x-1/2 -translate-y-1 rotate-[-12deg] bg-[#c4452d]" />
      </div>
    </Field>
  );
}

function PlateFruits() {
  return (
    <Field className="bg-[#e7ddc8]">
      <svg viewBox="0 0 260 180" className="h-[82%] w-[88%]" aria-hidden>
        <line x1="20" y1="150" x2="240" y2="150" stroke="#1c1916" strokeWidth="1.2" />
        <ellipse cx="96" cy="112" rx="38" ry="34" fill="#cfc3ab" stroke="#1c1916" strokeWidth="1.1" />
        <circle cx="148" cy="108" r="32" fill="#8d867a" stroke="#1c1916" strokeWidth="1.1" />
        <circle cx="178" cy="128" r="22" fill="#f4efe4" stroke="#1c1916" strokeWidth="1.1" />
        <ellipse cx="64" cy="130" rx="20" ry="16" fill="#5b564e" stroke="#1c1916" strokeWidth="1.1" />
        <path d="M148 76c4-10 12-14 18-12" stroke="#1c1916" strokeWidth="1.1" fill="none" />
      </svg>
      <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.25em] text-foreground/50">
        STILL LIFE 12
      </span>
    </Field>
  );
}

const plates: Record<PlateId, () => ReactElement> = {
  rapper: PlateRapper,
  line: PlateLine,
  shiners: PlateShiners,
  "steam-logo": PlateSteamLogo,
  "steam-promo": PlateSteamPromo,
  heart: PlateHeart,
  century: PlateCentury,
  gill: PlateGill,
  bottle: PlateBottle,
  berries: PlateBerries,
  "say-no": PlateSayNo,
  fruits: PlateFruits,
};

export function Plate({
  id,
  className,
}: {
  id: PlateId;
  className?: string;
}) {
  const View = plates[id];
  return (
    <div className={cn("h-full w-full", className)}>
      <View />
    </div>
  );
}

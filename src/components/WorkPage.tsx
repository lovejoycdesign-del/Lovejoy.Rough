"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { PenIcon } from "@/components/icons";
import { SocialLinks } from "@/components/SocialLinks";
import {
  contact,
  workFilters,
  workPage,
  works,
  type WorkCategory,
  type WorkItem,
} from "@/data/content";

type ViewMode = "grid" | "list";

function WorkImage({
  item,
  onOpen,
}: {
  item: WorkItem;
  onOpen: (item: WorkItem) => void;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[#1a1a1a]">
      {!failed ? (
        <button
          type="button"
          onClick={() => onOpen(item)}
          className="group absolute inset-0 cursor-zoom-in"
          aria-label={`Enlarge ${item.title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            onError={() => setFailed(true)}
          />
          <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
          <span className="pointer-events-none absolute right-3 bottom-3 rounded bg-black/70 px-2 py-1 text-[10px] font-semibold tracking-[0.14em] text-white/90 opacity-0 transition group-hover:opacity-100">
            CLICK TO ENLARGE
          </span>
        </button>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-white/10 bg-[#161616] px-4 text-center">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-accent">
            IMAGE COMING SOON
          </p>
          <p className="text-[10px] text-white/40">{item.image.replace("/work/", "")}</p>
        </div>
      )}
      <span className="pointer-events-none absolute top-3 left-3 z-10 font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-accent drop-shadow">
        {item.id}
      </span>
    </div>
  );
}

function WorkCard({
  item,
  view,
  onOpen,
}: {
  item: WorkItem;
  view: ViewMode;
  onOpen: (item: WorkItem) => void;
}) {
  if (view === "list") {
    return (
      <article className="grid gap-5 border border-white/10 bg-[#111] p-4 sm:grid-cols-[220px_1fr] md:gap-6 md:p-5">
        <WorkImage item={item} onOpen={onOpen} />
        <div className="min-w-0 self-center">
          <h3 className="text-[16px] font-semibold text-white md:text-lg">
            {item.title}
            {item.year ? (
              <span className="ml-2 text-sm font-medium text-white/40">({item.year})</span>
            ) : null}
          </h3>
          <p className="mt-1 text-[12px] tracking-wide text-accent">{item.medium}</p>
          <p className="mt-1 text-[12px] text-white/45">{item.size}</p>
          <p className="mt-3 text-[13px] leading-relaxed text-white/65 md:text-[14px]">
            {item.description}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group">
      <WorkImage item={item} onOpen={onOpen} />
      <h3 className="mt-3 text-[14px] font-semibold leading-snug text-white md:text-[15px]">
        {item.title}
        {item.year ? (
          <span className="ml-1.5 text-xs font-medium text-white/40">({item.year})</span>
        ) : null}
      </h3>
      <p className="mt-1 text-[11px] tracking-wide text-accent">{item.medium}</p>
      <p className="mt-0.5 text-[11px] text-white/45">{item.size}</p>
      <p className="mt-2 text-[12px] leading-relaxed text-white/60 line-clamp-3">
        {item.description}
      </p>
    </article>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: WorkItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center border border-white/30 text-white transition hover:border-accent hover:text-accent"
        aria-label="Close enlarged image"
      >
        ✕
      </button>

      <div
        className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[min(78vh,900px)] w-auto max-w-full object-contain"
        />
        <div className="mt-4 max-w-2xl text-center">
          <p className="font-[family-name:var(--font-bebas)] text-sm tracking-[0.2em] text-accent">
            {item.id}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white md:text-xl">{item.title}</h3>
          <p className="mt-1 text-[12px] text-accent">{item.medium}</p>
          <p className="mt-1 text-[12px] text-white/50">{item.size}</p>
        </div>
      </div>
    </div>
  );
}

function GridIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3.5"
        y="3.5"
        width="7"
        height="7"
        stroke="currentColor"
        strokeWidth="1.6"
        className={active ? "text-accent" : ""}
      />
      <rect x="13.5" y="3.5" width="7" height="7" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3.5" y="13.5" width="7" height="7" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.5" y="13.5" width="7" height="7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 7h12M8 12h12M8 17h12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="4.5" cy="7" r="1" fill="currentColor" />
      <circle cx="4.5" cy="12" r="1" fill="currentColor" />
      <circle cx="4.5" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

export function WorkPage() {
  const [filter, setFilter] = useState<WorkCategory>("all");
  const [view, setView] = useState<ViewMode>("grid");
  const [active, setActive] = useState<WorkItem | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return works;
    return works.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div className="overflow-x-hidden bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-accent">
              {workPage.eyebrow}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-bebas)] text-[clamp(4.5rem,14vw,8rem)] leading-[0.85] tracking-wide text-white">
              {workPage.heading}
            </h1>
            <div className="mt-4 h-[3px] w-24 bg-accent" aria-hidden />
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/80 md:text-base">
              {workPage.intro}
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

      {/* Filters */}
      <section className="border-b border-white/10 py-6">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {workFilters.map((item) => {
              const isActive = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  className={`border px-3 py-2 text-[10px] font-semibold tracking-[0.12em] transition sm:text-[11px] ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-white/20 text-white/75 hover:border-accent/60 hover:text-accent"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              type="button"
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              onClick={() => setView("grid")}
              className={`flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] transition ${
                view === "grid" ? "text-accent" : "text-white/55 hover:text-white"
              }`}
            >
              <GridIcon active={view === "grid"} />
              GRID VIEW
            </button>
            <button
              type="button"
              aria-label="List view"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
              className={`flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] transition ${
                view === "list" ? "text-accent" : "text-white/55 hover:text-white"
              }`}
            >
              <ListIcon />
              LIST VIEW
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-white/50">No projects in this category yet.</p>
          ) : view === "grid" ? (
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((item) => (
                <li key={item.id}>
                  <WorkCard item={item} view="grid" onOpen={setActive} />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-5">
              {filtered.map((item) => (
                <li key={item.id}>
                  <WorkCard item={item} view="list" onOpen={setActive} />
                </li>
              ))}
            </ul>
          )}
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
                <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(1.5rem,3vw,2.25rem)] tracking-wide text-white">
                  {workPage.ctaHeading}
                </h2>
                <p className="mt-2 text-[14px] text-white/70">{workPage.ctaBody}</p>
              </div>
            </div>
            <a
              href={contact.emailHref}
              className="relative mt-6 inline-flex shrink-0 items-center gap-2 border border-accent px-5 py-3 text-[12px] font-bold tracking-[0.12em] text-accent transition hover:bg-accent hover:text-black md:mt-0"
            >
              {workPage.ctaButton}
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

      {active ? <Lightbox item={active} onClose={() => setActive(null)} /> : null}
    </div>
  );
}

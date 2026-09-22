"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiGithub, FiMonitor, FiSmartphone, FiX } from "react-icons/fi";
import type { Project } from "../data/portfolio";
import Dialog from "./ui/Dialog";
import SwipeRail from "./ui/SwipeRail";

type Device = "desktop" | "mobile";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Case-study sheet: swipeable gallery (arrow keys on desktop), key features,
 * problem / solution, overview and stack. On phones the actions are pinned
 * to the bottom like a native detail screen.
 */
export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  // Keep the last project rendered while the exit animation plays.
  const [shown, setShown] = useState<Project | null>(project);
  const [[index, direction], setPage] = useState<[number, number]>([0, 0]);
  const [device, setDevice] = useState<Device>("desktop");
  const thumbsRef = useRef<HTMLDivElement>(null);
  const screensRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      setShown(project);
      setPage([0, 0]);
      setDevice("desktop");
    }
  }, [project]);

  const images = shown ? [shown.image, ...(shown.gallery ?? [])] : [];
  const screens = shown?.mobileGallery ?? [];
  const hasMobile = screens.length > 0;
  const isMobile = device === "mobile" && hasMobile;
  const count = images.length;
  const captions = shown?.captions ?? [];

  const switchDevice = (next: Device) => {
    if (next === device) return;
    setDevice(next);
    setPage([0, 0]);
  };

  // Mobile screens sit side by side, so paging moves the strip by one view.
  const scrollScreens = useCallback((dir: number) => {
    const rail = screensRef.current?.querySelector("ul");
    rail?.scrollBy({ left: dir * rail.clientWidth * 0.9, behavior: "smooth" });
  }, []);

  const go = useCallback(
    (delta: number) => setPage(([i]) => [(i + delta + count) % count, delta]),
    [count]
  );

  useEffect(() => {
    if (!project || (!isMobile && count < 2)) return;
    const step = isMobile ? scrollScreens : go;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [project, count, go, isMobile, scrollScreens]);

  // Keep the active thumbnail in view without scrolling the page.
  useEffect(() => {
    const rail = thumbsRef.current;
    const el = rail?.querySelector<HTMLElement>(`[data-thumb="${index}"]`);
    if (rail && el) {
      rail.scrollTo({ left: el.offsetLeft - rail.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
    }
  }, [index]);

  const onSwipe = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50 || info.velocity.x < -400) go(1);
    else if (info.offset.x > 50 || info.velocity.x > 400) go(-1);
  };

  return (
    <Dialog
      open={Boolean(project)}
      onClose={onClose}
      labelledBy="project-dialog-title"
      historyKey="project"
      historyUrl={project ? `#project-${project.slug}` : undefined}
      panelClassName="h-[92dvh] max-w-6xl sm:h-[90dvh]"
    >
      {shown && (
        <>
          <header className="flex shrink-0 items-center gap-3 border-b border-line px-5 pb-3 pt-1 sm:gap-4 sm:px-8 sm:py-4">
            <div className="min-w-0 flex-1">
              <p className="label-mono text-[0.64rem] text-subtle sm:text-[0.72rem]">{shown.category}</p>
              <h2 id="project-dialog-title" className="truncate text-lg font-medium tracking-[-0.02em] sm:text-2xl">
                {shown.title}
              </h2>
            </div>
            <a
              href={shown.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center gap-1.5 rounded-full bg-fg px-4 text-sm font-medium text-ink transition-colors hover:bg-accent sm:inline-flex"
            >
              Live site <FiArrowUpRight aria-hidden />
            </a>
            <a
              href={shown.code}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center gap-1.5 rounded-full border border-line-strong px-4 text-sm transition-colors hover:border-fg sm:inline-flex"
            >
              <FiGithub aria-hidden /> Code
            </a>
            <button
              type="button"
              data-autofocus
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/[0.06] text-muted transition-colors hover:text-fg sm:h-10 sm:w-10 sm:border sm:border-line-strong sm:bg-transparent"
            >
              <FiX aria-hidden />
            </button>
          </header>

          <div className="thin-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain">
            {/* Gallery */}
            <div className="border-b border-line bg-ink/60 px-4 py-4 sm:p-8">
              {hasMobile && (
                <div
                  role="tablist"
                  aria-label="Screen size"
                  className="mx-auto mb-4 flex w-fit rounded-full border border-line bg-ink/50 p-1"
                >
                  {(
                    [
                      ["desktop", "Desktop", FiMonitor, images.length],
                      ["mobile", "Mobile", FiSmartphone, screens.length],
                    ] as const
                  ).map(([id, label, Icon, total]) => {
                    const selected = device === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => switchDevice(id)}
                        className={`inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[0.78rem] font-medium transition-colors ${
                          selected ? "bg-fg text-ink" : "text-muted hover:text-fg"
                        }`}
                      >
                        <Icon aria-hidden className="h-3.5 w-3.5" />
                        {label}
                        <span className={`font-mono text-[0.66rem] tabular-nums ${selected ? "text-ink/60" : "text-subtle"}`}>
                          {total}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
              {isMobile ? (
                <div ref={screensRef} className="mx-auto max-w-5xl">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-[0.78rem] text-subtle">
                      {screens.length} screens · <span className="sm:hidden">swipe to browse</span>
                      <span className="hidden sm:inline">scroll or use ← → keys</span>
                    </p>
                    <div className="hidden gap-2 sm:flex">
                      <button
                        type="button"
                        onClick={() => scrollScreens(-1)}
                        aria-label="Previous screens"
                        className="grid h-9 w-9 place-items-center rounded-full border border-line-strong transition-colors hover:border-fg"
                      >
                        <FiChevronLeft aria-hidden />
                      </button>
                      <button
                        type="button"
                        onClick={() => scrollScreens(1)}
                        aria-label="Next screens"
                        className="grid h-9 w-9 place-items-center rounded-full border border-line-strong transition-colors hover:border-fg"
                      >
                        <FiChevronRight aria-hidden />
                      </button>
                    </div>
                  </div>
                  <SwipeRail label={`${shown.title} mobile screens`} className="scroll-px-1 gap-3 px-1 pb-1 sm:gap-4">
                    {screens.map((screen, i) => (
                      <li key={screen.label} className="w-[44%] shrink-0 snap-start sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]">
                        <figure>
                          <div className="relative aspect-[389/874] overflow-hidden rounded-[1.25rem] border border-line bg-surface-2">
                            <Image
                              src={screen.src}
                              alt={`${shown.title} mobile — ${screen.label}`}
                              fill
                              placeholder="blur"
                              sizes="(min-width: 1024px) 240px, (min-width: 640px) 30vw, 44vw"
                              className="object-cover object-top"
                            />
                          </div>
                          <figcaption className="mt-2.5 flex items-baseline gap-2 text-[0.8rem] text-fg/85">
                            <span className="font-mono text-[0.66rem] tabular-nums text-accent">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="truncate">{screen.label}</span>
                          </figcaption>
                        </figure>
                      </li>
                    ))}
                  </SwipeRail>
                </div>
              ) : (
                <>
                <div className="relative mx-auto aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-xl border border-line bg-surface-2 sm:aspect-[2/1] sm:rounded-lg">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={index}
                      custom={direction}
                      className="absolute inset-0 touch-pan-y"
                      initial={{ opacity: 0, x: direction * 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -40 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      drag={count > 1 ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.35}
                      onDragEnd={onSwipe}
                    >
                      <Image
                        src={images[index]}
                        alt={`${shown.title} screenshot ${index + 1} of ${count}`}
                        fill
                        draggable={false}
                        placeholder="blur"
                        sizes="(min-width: 1152px) 1024px, 100vw"
                        className="pointer-events-none select-none object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {count > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => go(-1)}
                        aria-label="Previous screenshot"
                        className="absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink/80 backdrop-blur-md transition-colors hover:border-fg sm:grid"
                      >
                        <FiChevronLeft aria-hidden />
                      </button>
                      <button
                        type="button"
                        onClick={() => go(1)}
                        aria-label="Next screenshot"
                        className="absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink/80 backdrop-blur-md transition-colors hover:border-fg sm:grid"
                      >
                        <FiChevronRight aria-hidden />
                      </button>
                    </>
                  )}
                </div>

                {(count > 1 || captions[index]) && (
                  <p className="mx-auto mt-3 flex max-w-5xl items-baseline justify-center gap-2 text-[0.85rem] sm:justify-start">
                    {count > 1 && (
                      <span className="font-mono text-[0.68rem] tabular-nums text-accent">
                        {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                      </span>
                    )}
                    {captions[index] && <span className="text-fg/85">{captions[index]}</span>}
                  </p>
                )}

                {count > 1 && (
                  <>
                    {/* Phones: page dots */}
                    <div className="mt-2.5 flex justify-center gap-1.5 sm:hidden" aria-hidden>
                      {images.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === index ? "w-4 bg-fg" : "w-1.5 bg-white/20"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-center text-[0.72rem] text-subtle sm:hidden">Swipe to browse screens</p>

                    <div
                      ref={thumbsRef}
                      className="no-scrollbar relative mx-auto mt-4 hidden max-w-5xl gap-2 overflow-x-auto pb-1 sm:flex"
                    >
                      {images.map((img, i) => (
                        <button
                          key={i}
                          type="button"
                          data-thumb={i}
                          onClick={() => setPage([i, i > index ? 1 : -1])}
                          aria-label={captions[i] ? `Show ${captions[i]}` : `Show screenshot ${i + 1}`}
                          aria-current={i === index ? "true" : undefined}
                          className={`shrink-0 text-left transition-opacity duration-300 ${captions.length ? "w-28" : "w-24"} ${
                            i === index ? "opacity-100" : "opacity-50 hover:opacity-90"
                          }`}
                        >
                          <span
                            className={`relative block aspect-[16/9] overflow-hidden rounded-md border ${
                              i === index ? "border-accent" : "border-line"
                            }`}
                          >
                            <Image src={img} alt="" fill sizes="112px" className="object-cover object-top" />
                          </span>
                          {captions[i] && (
                            <span className="mt-1.5 block truncate text-[0.7rem] text-muted">{captions[i]}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                </>
              )}
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 gap-8 px-5 py-6 sm:px-8 sm:py-10 lg:grid-cols-12 lg:gap-14">
              <div className="space-y-8 lg:order-2 lg:col-span-5 lg:space-y-10">
                <p className="text-pretty text-[1rem] leading-relaxed text-fg/90 lg:hidden">{shown.description}</p>
                <div>
                  <h3 className="label-mono mb-4 text-subtle">Key features</h3>
                  <ul className="space-y-3">
                    {shown.achievements.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.92rem] leading-snug text-fg/90">
                        <span aria-hidden className="mt-[0.55em] h-1 w-3 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="label-mono mb-4 text-subtle">Stack</h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {shown.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.72rem] text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7">
                {(shown.problem || shown.built) && (
                  <dl className="mb-8 grid gap-3 sm:grid-cols-2 sm:gap-6">
                    {shown.problem && (
                      <div className="rounded-2xl border border-line bg-ink/40 p-4 sm:p-5">
                        <dt className="label-mono mb-2 text-subtle">Problem</dt>
                        <dd className="text-[0.92rem] leading-relaxed text-muted">{shown.problem}</dd>
                      </div>
                    )}
                    {shown.built && (
                      <div className="rounded-2xl border border-line bg-ink/40 p-4 sm:p-5">
                        <dt className="label-mono mb-2 text-subtle">What I built</dt>
                        <dd className="text-[0.92rem] leading-relaxed text-muted">{shown.built}</dd>
                      </div>
                    )}
                  </dl>
                )}
                <h3 className="label-mono mb-4 text-subtle">Overview</h3>
                <p className="text-pretty text-[0.95rem] leading-relaxed text-muted">
                  {shown.longDescription ?? shown.description}
                </p>
              </div>
            </div>
          </div>

          {/* Phones: pinned actions */}
          <div className="flex shrink-0 gap-2.5 border-t border-line bg-surface px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden">
            <a
              href={shown.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 flex-1 items-center justify-center gap-1.5 rounded-full bg-fg text-[0.92rem] font-medium text-ink active:scale-[0.98]"
            >
              Open live site <FiArrowUpRight aria-hidden />
            </a>
            <a
              href={shown.code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Source code (opens in a new tab)"
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-full border border-line-strong px-5 text-[0.92rem]"
            >
              <FiGithub aria-hidden /> Code
            </a>
          </div>
        </>
      )}
    </Dialog>
  );
}

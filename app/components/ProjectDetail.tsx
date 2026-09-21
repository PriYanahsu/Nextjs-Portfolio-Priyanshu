"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiGithub, FiX } from "react-icons/fi";
import type { Project } from "../data/portfolio";
import Dialog from "./ui/Dialog";

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
  const thumbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      setShown(project);
      setPage([0, 0]);
    }
  }, [project]);

  const images = shown ? [shown.image, ...(shown.gallery ?? [])] : [];
  const count = images.length;

  const go = useCallback(
    (delta: number) => setPage(([i]) => [(i + delta + count) % count, delta]),
    [count]
  );

  useEffect(() => {
    if (!project || count < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [project, count, go]);

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
                    <span className="absolute bottom-2.5 right-2.5 rounded-full bg-ink/80 px-2 py-0.5 font-mono text-[0.64rem] tabular-nums text-muted backdrop-blur-md sm:bottom-3 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:px-2.5 sm:py-1 sm:text-[0.68rem]">
                      {index + 1} / {count}
                    </span>
                  </>
                )}
              </div>

              {count > 1 && (
                <>
                  {/* Phones: page dots */}
                  <div className="mt-3 flex justify-center gap-1.5 sm:hidden" aria-hidden>
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
                        aria-label={`Show screenshot ${i + 1}`}
                        aria-current={i === index ? "true" : undefined}
                        className={`relative aspect-[16/9] w-24 shrink-0 overflow-hidden rounded-md border transition-all duration-300 ${
                          i === index ? "border-accent opacity-100" : "border-line opacity-50 hover:opacity-90"
                        }`}
                      >
                        <Image src={img} alt="" fill sizes="96px" className="object-cover object-top" />
                      </button>
                    ))}
                  </div>
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

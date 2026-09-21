"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SwipeRail from "../ui/SwipeRail";

interface ProjectIndexProps {
  projects: Project[];
  startIndex: number;
  onOpen: (project: Project) => void;
}

/**
 * Secondary projects. Phones get a contained swipe rail; tablet and desktop get
 * a compact index where a screenshot preview follows the cursor.
 */
export default function ProjectIndex({ projects, startIndex, onOpen }: ProjectIndexProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div className="relative">
      {/* Phones: horizontal swipe rail. It scrolls inside itself; the page never moves sideways. */}
      <div className="md:hidden">
        <SwipeRail label="More projects" className="-mx-5 scroll-px-5 gap-3 px-5 pb-1 sm:-mx-8 sm:scroll-px-8 sm:px-8">
          {projects.map((project, i) => (
            <li key={project.slug} className="w-[80%] min-w-0 max-w-[20rem] shrink-0 snap-start sm:w-[46%]">
              <article className="flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-line bg-surface">
                <button
                  type="button"
                  onClick={() => onOpen(project)}
                  aria-label={`Open ${project.title} details`}
                  className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-ink"
                >
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 46vw, 80vw"
                    className="object-cover object-top"
                  />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-ink/80 px-2 py-0.5 font-mono text-[0.62rem] text-muted backdrop-blur-md">
                    {String(startIndex + i + 1).padStart(2, "0")}
                  </span>
                </button>
                <div className="flex min-w-0 flex-1 flex-col p-4">
                  <p className="label-mono truncate text-[0.62rem] text-subtle">{project.category}</p>
                  <h4 className="mt-1 truncate text-[1.05rem] font-medium tracking-[-0.02em]">{project.title}</h4>
                  <p className="mt-1.5 line-clamp-2 flex-1 text-[0.82rem] leading-snug text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpen(project)}
                      className="h-9 min-w-0 flex-1 rounded-full bg-white/[0.07] text-[0.8rem] font-medium text-fg active:bg-white/[0.12]"
                    >
                      Details
                    </button>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live site (opens in a new tab)`}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line-strong"
                    >
                      <FiArrowUpRight aria-hidden />
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code (opens in a new tab)`}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line-strong"
                    >
                      <FiGithub aria-hidden />
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </SwipeRail>
      </div>

      <ul
        ref={listRef}
        onPointerMove={onMove}
        onPointerLeave={() => setHovered(null)}
        className="relative hidden border-t border-line md:block"
      >
        {projects.map((project, i) => (
          <Reveal as="li" key={project.slug} delay={i * 0.04} y={16} className="relative border-b border-line">
            <div
              onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(i)}
              className="group relative grid grid-cols-12 items-center gap-6 py-7"
            >
              {/* Whole-row hit area opens the case study */}
              <button
                type="button"
                onClick={() => onOpen(project)}
                className="absolute inset-0 z-0 rounded-md"
                aria-label={`Open ${project.title} details`}
              />

              <div className="pointer-events-none col-span-5 flex min-w-0 items-baseline gap-6">
                <span className="label-mono text-subtle">
                  {String(startIndex + i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h4 className="truncate text-2xl font-medium tracking-[-0.02em] transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5">
                    {project.title}
                  </h4>
                </div>
              </div>

              <p className="pointer-events-none col-span-4 text-[0.9rem] leading-snug text-muted">
                {project.description}
              </p>

              <div className="relative z-10 col-span-3 flex items-center justify-end gap-4">
                <span className="label-mono pointer-events-none hidden text-subtle lg:inline">
                  {project.category}
                </span>
                <span className="flex items-center gap-1">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code (opens in a new tab)`}
                    className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-fg"
                  >
                    <FiGithub aria-hidden />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live site (opens in a new tab)`}
                    className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-accent"
                  >
                    <FiArrowUpRight aria-hidden className="h-[1.1rem] w-[1.1rem]" />
                  </a>
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      {/* Cursor-following preview (desktop, mouse only) */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            aria-hidden
            key="preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ left: sx, top: sy }}
            className="pointer-events-none absolute z-20 hidden w-[300px] -translate-x-1/2 -translate-y-[115%] overflow-hidden rounded-lg border border-line-strong bg-surface shadow-2xl md:block"
          >
            <div className="relative aspect-[16/9]">
              {projects.map((p, i) => (
                <Image
                  key={p.slug}
                  src={p.image}
                  alt=""
                  fill
                  sizes="300px"
                  className={`object-cover object-top transition-opacity duration-300 ${
                    i === hovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { FiLock, FiMaximize2 } from "react-icons/fi";
import { hostOf, type Project } from "../../data/portfolio";

interface ProjectShowcaseProps {
  project: Project;
  onOpen: () => void;
}

const CYCLE_MS = 1600;

/**
 * Screenshot inside a minimal browser frame. On hover it plays through the
 * gallery so visitors get a feel for the whole product without opening it;
 * images are mounted lazily one step ahead to keep the initial load light.
 */
export default function ProjectShowcase({ project, onOpen }: ProjectShowcaseProps) {
  const images = [project.image, ...(project.gallery ?? [])];
  const count = images.length;
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [mounted, setMounted] = useState<boolean[]>(() => images.map((_, i) => i === 0));
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!hovering || reduce || count < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [hovering, reduce, count]);

  // Keep the current and next frame mounted so each transition is preloaded.
  useEffect(() => {
    if (!hovering || count < 2) return;
    setMounted((prev) => {
      const next = (index + 1) % count;
      if (prev[index] && prev[next]) return prev;
      const copy = [...prev];
      copy[index] = true;
      copy[next] = true;
      return copy;
    });
  }, [index, hovering, count]);

  return (
    <div
      className="relative overflow-hidden bg-ink/40 p-3 pb-0 sm:p-5 sm:pb-0 md:rounded-2xl md:border md:border-line md:bg-surface md:p-6 lg:p-5 xl:p-6"
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
      onPointerLeave={() => {
        setHovering(false);
        setIndex(0);
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16] transition-opacity duration-700 group-hover/project:opacity-25"
        style={{
          background: `radial-gradient(70% 60% at 50% 100%, ${project.tint ?? "#ffffff"}, transparent 70%)`,
        }}
      />

      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${project.title} case study with ${count} screenshots`}
        className="group/frame relative block w-full overflow-hidden rounded-t-xl border border-b-0 border-line-strong bg-ink text-left md:rounded-lg md:border-b shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)] transition-transform duration-700 ease-out-expo hover:-translate-y-1"
      >
        {/* Browser chrome */}
        <span className="flex h-8 items-center gap-3 border-b border-line bg-surface-2 px-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
          </span>
          <span className="mx-auto flex min-w-0 items-center gap-1.5 truncate rounded-md bg-ink/60 px-3 py-0.5 font-mono text-[0.66rem] text-subtle">
            <FiLock aria-hidden className="h-2.5 w-2.5 shrink-0" />
            <span className="truncate">{hostOf(project.live)}</span>
          </span>
          <span className="font-mono text-[0.66rem] tabular-nums text-subtle" aria-hidden>
            {String(index + 1).padStart(2, "0")}/{String(count).padStart(2, "0")}
          </span>
        </span>

        <span className="relative block">
          {images.map((img, i) =>
            mounted[i] ? (
              <Image
                key={i}
                src={img}
                alt={i === 0 ? `${project.title} screenshot` : ""}
                placeholder="blur"
                sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
                className={
                  i === 0
                    ? "relative block h-auto w-full"
                    : `absolute inset-0 block h-full w-full object-cover object-top transition-opacity duration-500 ${
                        i === index ? "opacity-100" : "opacity-0"
                      }`
                }
              />
            ) : null
          )}

          <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink/80 px-2.5 py-1 text-[0.68rem] text-fg opacity-100 backdrop-blur-md transition-opacity duration-300 md:bottom-3 md:right-3 md:px-3 md:py-1.5 md:text-[0.72rem] md:opacity-0 md:group-hover/frame:opacity-100 md:group-focus-visible/frame:opacity-100">
            <FiMaximize2 aria-hidden className="h-3 w-3" />
            {count > 1 ? `View ${count} screens` : "View details"}
          </span>
        </span>
      </button>

      {count > 1 && (
        <div aria-hidden className="relative mt-5 hidden gap-1 md:flex">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-0.5 flex-1 rounded-full transition-colors duration-500 ${
                i === index ? "bg-fg" : "bg-white/10"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

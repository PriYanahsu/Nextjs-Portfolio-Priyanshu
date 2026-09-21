"use client";

import { FiArrowUpRight, FiChevronRight, FiGithub } from "react-icons/fi";
import type { Project } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import ProjectShowcase from "./ProjectShowcase";

interface FeaturedProjectProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

const MOBILE_CHIPS = 4;

export default function FeaturedProject({ project, index, onOpen }: FeaturedProjectProps) {
  const reverse = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");
  const extra = project.technologies.length - MOBILE_CHIPS;

  return (
    <Reveal
      as="article"
      y={32}
      className="group/project mb-5 overflow-hidden rounded-[1.6rem] border border-line bg-surface last:mb-0 md:mb-0 md:grid md:items-center md:gap-10 md:overflow-visible md:rounded-none md:border-0 md:border-t md:bg-transparent md:py-16 md:first:border-t-0 md:first:pt-0 lg:grid-cols-12 lg:gap-14 lg:py-20"
    >
      <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <ProjectShowcase project={project} onOpen={onOpen} />
      </div>

      <div className="p-5 pt-4 sm:p-6 md:mt-8 md:p-0 lg:col-span-5 lg:mt-0">
        <p className="label-mono flex flex-wrap items-center gap-x-3 gap-y-1 text-subtle">
          <span className="text-accent">{number}</span>
          <span>{project.category}</span>
          {project.year && <span>· {project.year}</span>}
        </p>

        <h3
          id={`project-${project.slug}`}
          className="mt-2 text-[1.75rem] font-medium tracking-[-0.035em] sm:text-4xl md:mt-4 lg:text-5xl"
        >
          {project.title}
        </h3>
        <p className="mt-2 text-pretty text-[0.95rem] leading-relaxed text-fg/85 md:mt-4 md:text-[1.05rem] md:text-fg/90">
          {project.description}
        </p>

        {/* Phones: compact chips; full case detail lives in the sheet */}
        <ul className="mt-4 flex flex-wrap gap-1.5 md:hidden">
          {project.technologies.slice(0, MOBILE_CHIPS).map((tech) => (
            <li key={tech} className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[0.68rem] text-muted">
              {tech}
            </li>
          ))}
          {extra > 0 && (
            <li className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[0.68rem] text-subtle">+{extra}</li>
          )}
        </ul>

        <dl className="mt-8 hidden space-y-5 border-t border-line pt-6 text-[0.92rem] leading-relaxed md:block">
          {project.problem && (
            <div className="grid grid-cols-[7rem_1fr] gap-4">
              <dt className="label-mono pt-0.5 text-subtle">Problem</dt>
              <dd className="text-muted">{project.problem}</dd>
            </div>
          )}
          {project.built && (
            <div className="grid grid-cols-[7rem_1fr] gap-4">
              <dt className="label-mono pt-0.5 text-subtle">What I built</dt>
              <dd className="text-muted">{project.built}</dd>
            </div>
          )}
          <div className="grid grid-cols-[7rem_1fr] gap-4">
            <dt className="label-mono pt-1 text-subtle">Stack</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        {/* Phones: app-style action row */}
        <div className="mt-5 flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-fg text-[0.88rem] font-medium text-ink active:scale-[0.98]"
          >
            View case study <FiChevronRight aria-hidden />
          </button>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live site (opens in a new tab)`}
            className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-fg active:bg-white/[0.06]"
          >
            <FiArrowUpRight aria-hidden className="h-[1.1rem] w-[1.1rem]" />
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code (opens in a new tab)`}
            className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-fg active:bg-white/[0.06]"
          >
            <FiGithub aria-hidden className="h-[1.05rem] w-[1.05rem]" />
          </a>
        </div>

        {/* Tablet & desktop actions */}
        <div className="mt-8 hidden flex-wrap items-center gap-x-6 gap-y-3 md:flex">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent"
          >
            Visit live site
            <FiArrowUpRight
              aria-hidden
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <FiGithub aria-hidden /> Source code
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 text-sm text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-fg hover:decoration-fg"
          >
            Full case study
          </button>
        </div>
      </div>
    </Reveal>
  );
}

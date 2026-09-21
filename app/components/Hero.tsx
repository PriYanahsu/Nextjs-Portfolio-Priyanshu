"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { profile, stats } from "../data/portfolio";
import TraceCard from "./TraceCard";
import Counter from "./ui/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

const headline: React.ReactNode[] = [
  "Full-stack engineer",
  "building products from",
  <>
    database to{" "}
    <em className="font-serif font-normal italic tracking-[-0.01em] text-accent">interface.</em>
  </>,
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  // Pointer spotlight over the dot grid (fine pointers only; no React re-renders).
  useEffect(() => {
    const section = sectionRef.current;
    const spot = spotRef.current;
    if (!section || !spot || !window.matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        spot.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        spot.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
      });
    };
    section.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-[8.25rem] sm:pt-36 md:pt-32 lg:pt-40"
    >
      <div aria-hidden className="dot-grid absolute inset-0 -z-10" />
      <div aria-hidden ref={spotRef} className="dot-grid-spot absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(60%_50%_at_70%_0%,rgb(255_122_61/0.08),transparent_70%)]"
      />

      <div className="container-page">
        {/* Identity row */}
        <motion.div {...fadeUp(0.05)} className="mb-10 flex flex-wrap items-center justify-between gap-4 lg:mb-14">
          <div className="flex items-center gap-3">
            <Image
              src={profile.portrait}
              alt=""
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-full object-cover object-top ring-1 ring-line-strong"
            />
            <div className="leading-tight">
              <p className="text-[0.95rem] font-medium">{profile.name}</p>
              <p className="font-mono text-[0.72rem] text-subtle">
                {profile.company.role} @ {profile.company.name}
              </p>
            </div>
          </div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[0.78rem] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </p>
        </motion.div>

        {/* Headline with line-mask reveal */}
        <h1
          id="hero-title"
          className="text-[clamp(1.75rem,8.6vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.045em]"
        >
          {headline.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.15 + i * 0.09 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <motion.div {...fadeUp(0.5)} className="lg:col-span-6 xl:col-span-5">
            <p className="max-w-xl text-pretty text-[1.02rem] leading-relaxed text-muted sm:text-lg">
              I design and ship web and mobile applications with{" "}
              <span className="text-fg">React, Next.js, Spring Boot</span> and{" "}
              <span className="text-fg">FastAPI</span>, owning features end to end from the schema and
              API to the interface people use. I also build products at{" "}
              <a
                href={profile.venture.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {profile.venture.name}
              </a>
              .
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#work"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-[0.92rem] font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                See selected work
                <FiArrowDown aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.resume}
                download="Priyanshu_Kumar_Resume.pdf"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line-strong px-6 text-[0.92rem] font-medium transition-colors duration-300 hover:border-fg"
              >
                Download résumé
                <FiDownload aria-hidden />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.65 }}
            className="lg:col-span-6 xl:col-span-5 xl:col-start-8"
          >
            <TraceCard />
          </motion.div>
        </div>

        {/* Proof strip */}
        <motion.dl
          {...fadeUp(0.8)}
          className="mt-16 grid grid-cols-2 border-t border-line md:mt-24 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 pr-4 md:py-8 ${i % 2 === 1 ? "border-l border-line pl-4" : ""} ${
                i >= 2 ? "border-t border-line md:border-t-0" : ""
              } ${i === 2 ? "md:border-l" : ""} ${i > 0 ? "md:pl-6" : ""}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                  <Counter to={stat.value} />
                  <span className="text-accent">{stat.suffix}</span>
                </span>
                <span aria-hidden className="mt-2 block max-w-[14rem] text-[0.82rem] leading-snug text-subtle">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

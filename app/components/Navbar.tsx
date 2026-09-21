"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { navLinks, profile, socials } from "../data/portfolio";
import useActiveSection, { scrollToSection } from "./ui/useActiveSection";

const EASE = [0.16, 1, 0.3, 1] as const;
const sections = [...navLinks, { label: "Contact", id: "contact" }];
/** Short labels so all six phone tabs fit the screen width without scrolling. */
const shortLabels: Record<string, string> = { experience: "Career", credentials: "Certs" };
const SECTION_IDS = sections.map((s) => s.id);

export default function Navbar() {
  const active = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  // Solid background once scrolled. On desktop the bar tucks away while reading downward;
  // on touch screens it stays put, and pinch-zoom (which also changes scrollY) never moves it.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    const zoomed = (window.visualViewport?.scale ?? 1) > 1.01;
    const desktop = window.matchMedia("(min-width: 768px) and (pointer: fine)").matches;
    if (zoomed || !desktop) {
      setHidden(false);
      return;
    }
    if (y < prev - 4) setHidden(false);
    else if (y > 480 && y > prev + 4) setHidden(true);
  });

  // Menu: scroll lock, Escape, focus, and the Back button closes it.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("button, a")?.focus({ preventScroll: true });
    let popped = false;
    window.history.pushState({ dialog: "menu" }, "", window.location.href);
    const onPop = () => {
      if (window.history.state?.dialog === "menu") return;
      popped = true;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("popstate", onPop);
    document.addEventListener("keydown", onKey);
    const toggle = toggleRef.current;
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("keydown", onKey);
      if (!popped && window.history.state?.dialog === "menu") window.history.back();
      toggle?.focus({ preventScroll: true });
    };
  }, [open]);

  // Close the menu if the viewport grows into the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goTo = (id: string) => {
    if (open) {
      setOpen(false);
      // Let the menu close and history settle before scrolling.
      window.setTimeout(() => scrollToSection(id), 320);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: hidden ? -96 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]"
      >
        <div
          className={`transition-[background-color,border-color] duration-500 ${
            scrolled || open
              ? "border-b border-line bg-ink/85 backdrop-blur-xl"
              : "border-b border-transparent bg-ink/60 backdrop-blur-md md:bg-transparent md:backdrop-blur-none"
          }`}
        >
          <nav aria-label="Primary" className="container-page flex h-14 items-center justify-between gap-4 md:h-16">
            <a href="#top" className="group flex min-w-0 items-center gap-3" aria-label={`${profile.name}, back to top`}>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line-strong font-mono text-[0.7rem] font-medium tracking-tight transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                PK
              </span>
              <span className="truncate text-sm font-medium tracking-tight">{profile.name}</span>
            </a>

            {/* Desktop pill nav */}
            <ul className="hidden items-center gap-1 rounded-full border border-line bg-surface/60 p-1 md:flex">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id} className="relative">
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/[0.08]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <a
                      href={`#${link.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block rounded-full px-3.5 py-1.5 text-[0.84rem] transition-colors duration-200 lg:px-4 ${
                        isActive ? "text-fg" : "text-muted hover:text-fg"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex shrink-0 items-center gap-2">
              <a
                href={profile.resume}
                download="Priyanshu_Kumar_Resume.pdf"
                className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-[0.84rem] text-muted transition-colors hover:text-fg lg:inline-flex"
              >
                Résumé <FiDownload aria-hidden className="h-3.5 w-3.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-9 items-center gap-1.5 rounded-full bg-fg px-3.5 text-[0.8rem] font-medium text-ink transition-colors duration-300 hover:bg-accent md:h-auto md:px-4 md:py-2 md:text-[0.84rem]"
              >
                <span className="md:hidden">Hire me</span>
                <span className="hidden md:inline">Let&apos;s talk</span>
                <FiArrowUpRight aria-hidden className="h-4 w-4" />
              </a>

              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="site-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="relative grid h-9 w-9 place-items-center rounded-full border border-line-strong md:hidden"
              >
                <motion.span
                  className="absolute h-[1.5px] w-4 rounded-full bg-fg"
                  animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3.5 }}
                  transition={{ duration: 0.35, ease: EASE }}
                />
                <motion.span
                  className="absolute h-[1.5px] w-4 rounded-full bg-fg"
                  animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 3.5 }}
                  transition={{ duration: 0.35, ease: EASE }}
                />
              </button>
            </div>
          </nav>

          {/* Phone section tabs */}
          <div className="md:hidden">
            <ul className="container-page grid grid-cols-6 gap-0.5 pb-2" aria-label="Sections">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id} className="min-w-0">
                    <button
                      type="button"
                      onClick={() => goTo(s.id)}
                      aria-label={s.label}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative w-full rounded-full py-1.5 text-[0.74rem] transition-colors duration-300 min-[380px]:text-[0.78rem] ${
                        isActive ? "text-ink" : "text-muted active:text-fg"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="tab-active"
                          className="absolute inset-0 rounded-full bg-fg"
                          transition={{ type: "spring", stiffness: 420, damping: 36 }}
                        />
                      )}
                      <span className="relative block truncate font-medium">{shortLabels[s.id] ?? s.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.header>

      {/* Phone menu: drops down smoothly from the header */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              aria-hidden
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="site-menu"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ clipPath: "inset(0 0 100% 0 round 0 0 28px 28px)", opacity: 0.6 }}
              animate={{ clipPath: "inset(0 0 0% 0 round 0 0 28px 28px)", opacity: 1 }}
              exit={{ clipPath: "inset(0 0 100% 0 round 0 0 28px 28px)", opacity: 0.6 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="fixed inset-x-0 top-0 z-[45] max-h-[100dvh] overflow-y-auto rounded-b-[28px] border-b border-line-strong bg-surface pb-6 pt-[calc(6.5rem+env(safe-area-inset-top))] shadow-2xl md:hidden"
            >
              <div className="container-page">
                <ul>
                  {sections.map((s, i) => (
                    <motion.li
                      key={s.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE, delay: 0.08 + i * 0.04 }}
                      className="border-b border-line"
                    >
                      <button
                        type="button"
                        onClick={() => goTo(s.id)}
                        className="flex w-full items-center gap-4 py-3.5 text-left active:opacity-70"
                      >
                        <span className="label-mono w-6 text-subtle">0{i + 1}</span>
                        <span
                          className={`flex-1 text-[1.6rem] font-medium leading-none tracking-[-0.03em] ${
                            active === s.id ? "text-accent" : "text-fg"
                          }`}
                        >
                          {s.label}
                        </span>
                        <FiArrowUpRight aria-hidden className="rotate-45 text-subtle" />
                      </button>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.32 }}
                >
                  <a
                    href={profile.resume}
                    download="Priyanshu_Kumar_Resume.pdf"
                    className="mt-6 flex h-12 items-center justify-center gap-2 rounded-full bg-fg text-[0.92rem] font-medium text-ink active:scale-[0.98]"
                  >
                    <FiDownload aria-hidden /> Download résumé
                  </a>
                  <ul className="mt-5 grid grid-cols-4 gap-2">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-1.5 rounded-2xl border border-line bg-ink/50 px-1 py-3 text-[0.66rem] text-muted active:bg-white/[0.05]"
                        >
                          <s.icon aria-hidden className="h-[1.1rem] w-[1.1rem] text-fg" />
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

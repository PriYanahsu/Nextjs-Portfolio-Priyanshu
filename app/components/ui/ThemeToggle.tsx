"use client";

import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { THEME_COLORS, THEME_KEY, type Theme } from "./theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
}

function savedTheme(): Theme | null {
  try {
    const t = localStorage.getItem(THEME_KEY);
    return t === "light" || t === "dark" ? t : null;
  } catch {
    return null;
  }
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  // Until the visitor picks a theme, follow the OS setting live.
  useEffect(() => {
    // The head script may run before Next renders <meta name="theme-color">; sync it now.
    applyTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => !savedTheme() && applyTheme(mq.matches ? "light" : "dark");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    const commit = () => {
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {}
    };

    // Circle reveal from the button where supported; instant swap otherwise.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduced) return commit();

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(commit).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className={`group relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border border-line-strong text-fg transition-colors duration-300 hover:border-fg ${className}`}
    >
      {/* Both icons render; CSS shows the one for the current theme, so SSR never mismatches */}
      <FiSun
        aria-hidden
        className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45 light:hidden"
      />
      <FiMoon
        aria-hidden
        className="hidden h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-rotate-12 light:block"
      />
    </button>
  );
}

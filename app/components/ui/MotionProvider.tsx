"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";

/**
 * Honors the OS "reduce motion" setting for every framer-motion animation, and
 * records the current input modality on <html data-input> so focus rings only
 * show for keyboard users, never after a tap or click.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const onPointer = () => root.setAttribute("data-input", "pointer");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab" || e.key.startsWith("Arrow") || e.key === "Enter" || e.key === " ") {
        root.setAttribute("data-input", "keyboard");
      }
    };
    root.setAttribute("data-input", "pointer");
    window.addEventListener("pointerdown", onPointer, { capture: true, passive: true });
    window.addEventListener("keydown", onKey, { capture: true });
    return () => {
      window.removeEventListener("pointerdown", onPointer, { capture: true });
      window.removeEventListener("keydown", onKey, { capture: true });
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // Clamp to 0–1: iOS rubber-band overscroll pushes progress past 1, which would
  // stretch this fixed bar beyond the screen and widen the page.
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true });
  const scaleX = useSpring(progress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-accent"
    />
  );
}

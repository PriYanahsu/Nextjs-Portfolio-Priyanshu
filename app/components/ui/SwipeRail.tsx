"use client";

import { useEffect, useRef, useState } from "react";

interface SwipeRailProps {
  children: React.ReactNode;
  /** Classes for the scrolling list (layout can switch to a grid at larger breakpoints). */
  className?: string;
  /** Classes for the progress indicator, e.g. "md:hidden" when the rail becomes a grid. */
  indicatorClassName?: string;
  label: string;
}

/**
 * Horizontal, snap-scrolling list for phones. The list is `relative` so absolutely
 * positioned descendants (e.g. sr-only labels) are clipped by the rail instead of
 * escaping it and widening the page. Swipes stay inside the rail
 * (overscroll is contained, so the page never shifts) and a slim progress
 * bar shows where you are in the collection.
 */
export default function SwipeRail({ children, className = "", indicatorClassName = "", label }: SwipeRailProps) {
  const ref = useRef<HTMLUListElement>(null);
  const [thumb, setThumb] = useState({ width: 100, left: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { scrollLeft, scrollWidth, clientWidth } = el;
        if (scrollWidth <= clientWidth) return setThumb({ width: 100, left: 0 });
        const width = (clientWidth / scrollWidth) * 100;
        const left = (scrollLeft / (scrollWidth - clientWidth)) * (100 - width);
        setThumb({ width, left });
      });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    // Clip here too, so a swipe can never spill the rail's content onto the page.
    <div className="min-w-0 overflow-x-hidden supports-[overflow:clip]:overflow-x-clip">
      <ul
        ref={ref}
        aria-label={label}
        className={`no-scrollbar relative flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain ${className}`}
      >
        {children}
      </ul>
      {thumb.width < 100 && (
        <div aria-hidden className={`mx-auto mt-4 h-[3px] w-24 overflow-hidden rounded-full bg-white/10 ${indicatorClassName}`}>
          <div
            className="h-full rounded-full bg-fg transition-[margin] duration-150 ease-out"
            style={{ width: `${thumb.width}%`, marginLeft: `${thumb.left}%` }}
          />
        </div>
      )}
    </div>
  );
}

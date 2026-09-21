"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";

/** Phone layout for the stack: segmented tabs, one group at a time as an icon grid. */
export default function StackTabs() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Skill groups"
        className="flex flex-wrap gap-1.5"
      >
        {skillGroups.map((g, i) => {
          const selected = i === active;
          return (
            <button
              key={g.title}
              type="button"
              role="tab"
              id={`stack-tab-${i}`}
              aria-selected={selected}
              aria-controls="stack-panel"
              onClick={() => setActive(i)}
              className={`relative rounded-full border px-3 py-1.5 text-[0.8rem] font-medium transition-colors duration-300 ${
                selected ? "border-transparent text-ink" : "border-line text-muted active:text-fg"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="stack-tab"
                  className="absolute inset-0 rounded-full bg-fg"
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                />
              )}
              <span className="relative">
                {g.title}
                <span className={`ml-1.5 font-mono text-[0.66rem] ${selected ? "text-ink/60" : "text-subtle"}`}>
                  {g.items.length}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="stack-panel"
        role="tabpanel"
        aria-labelledby={`stack-tab-${active}`}
        className="mt-4 min-h-[13.5rem]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={group.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-2 sm:grid-cols-4"
          >
            {group.items.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex aspect-[1/0.9] flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-surface px-2 text-center"
              >
                {Icon ? (
                  <Icon aria-hidden className="h-6 w-6 text-fg" />
                ) : (
                  <span aria-hidden className="grid h-6 w-6 place-items-center">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>
                )}
                <span className="text-[0.74rem] leading-tight text-muted">{name}</span>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}

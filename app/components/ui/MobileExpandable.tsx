"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

interface MobileExpandableProps {
  children: React.ReactNode;
  label: string;
  /** Stable DOM id (don't use `useId()` — it hydrates with a different value here). */
  id: string;
}

/**
 * Collapsed behind a toggle on phones (animated open/close); always expanded from md up.
 */
export default function MobileExpandable({ children, label, id }: MobileExpandableProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:block">{children}</div>

      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="mt-4 flex w-full items-center justify-between rounded-xl bg-white/[0.04] px-4 py-3 text-[0.86rem] text-fg active:bg-white/[0.07]"
        >
          {open ? "Hide" : "Show"} {label}
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <FiChevronDown aria-hidden />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={id}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

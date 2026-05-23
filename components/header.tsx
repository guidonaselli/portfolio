"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Outer Floating Pill Navigation Bar */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none liquid-glass shadow-sm sm:top-6 sm:h-[3.25rem] sm:w-[38rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.8rem] font-mono tracking-wider font-semibold uppercase sm:w-[initial] sm:flex-nowrap sm:gap-6">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 22,
              }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 text-zinc-500 hover:text-zinc-950 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-zinc-100",
                  {
                    "text-zinc-950 dark:text-zinc-100":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-zinc-200/60 rounded-full absolute inset-0 -z-10 dark:bg-zinc-800/80 border border-zinc-300/40 dark:border-zinc-700/40"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 26,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

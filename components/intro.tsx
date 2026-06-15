"use client";

import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import AsciiBits from "./ascii-bits";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [portraitHover, setPortraitHover] = React.useState(false);
  const [debugMode, setDebugMode] = React.useState(false);
  const [burst, setBurst] = React.useState(false);
  const [decoded, setDecoded] = React.useState(false);
  const [rawView, setRawView] = React.useState(false);
  const decodeTimer = React.useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  // Easter egg 1: a note for whoever opens DevTools.
  React.useEffect(() => {
    const head =
      "color:oklch(0.65 0.14 160);font:600 13px ui-monospace,monospace";
    const body = "color:#a1a1aa;font:12px ui-monospace,monospace";
    // eslint-disable-next-line no-console
    console.log("%c// GUIDO NASELLI — SYSTEMS ANALYST", head);
    // eslint-disable-next-line no-console
    console.log(
      "%cReading the source? Good instinct.\n" +
        "Let's build something → guidonaselli@gmail.com\n" +
        "ps: try ↑ ↑ ↓ ↓ ← → ← → B A",
      body
    );
  }, []);

  // Easter egg 2: Konami code → debug mode (portrait dissolves into bits).
  React.useEffect(() => {
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDebugMode(false);
        return;
      }
      const expected = KONAMI[i];
      if (e.key.toLowerCase() === expected.toLowerCase()) {
        i++;
        if (i === KONAMI.length) {
          i = 0;
          setBurst(true);
          setTimeout(() => setBurst(false), 1200);
          setDebugMode(true);
        }
      } else {
        i = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Easter egg 3: linger on the portrait for 3s to decode a hidden signal.
  const onPortraitEnter = () => {
    setPortraitHover(true);
    decodeTimer.current = setTimeout(() => setDecoded(true), 3000);
  };
  const onPortraitLeave = () => {
    setPortraitHover(false);
    setDecoded(false);
    clearTimeout(decodeTimer.current);
  };

  const bitsLevel = burst
    ? "burst"
    : portraitHover || debugMode
    ? "active"
    : "idle";

  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 md:mb-32 w-full max-w-[1200px] mx-auto pt-16 sm:pt-24 scroll-mt-[100rem] px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Left Column: Typographic Details & CTA */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          {/* Subtitle / Tech Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="mb-6 flex items-center gap-3 font-mono text-[0.75rem] uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Guido Naselli // Systems Analyst & Full Stack Developer
          </motion.div>

          {/* H1 Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-zinc-900 dark:text-zinc-50 mb-8"
          >
            Building high-agency <br />
            <span className="text-accent">software systems</span> and <br />
            refined digital architectures.
          </motion.h1>

          {/* Brief Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[55ch] mb-10"
          >
            Graduated Systems Analyst specializing in designing beautiful, robust solutions with clean code principles. Expert in React/Next.js, Tailwind v4, Spring Boot, and robust database systems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 text-sm font-medium"
          >
            <Link
              href="#contact"
              className="group bg-accent hover:bg-accent-hover text-zinc-950 font-semibold px-6 py-3.5 rounded-full flex items-center gap-2 transition-all duration-200 outline-none focus:scale-105 hover:scale-105 active:scale-[0.98] shadow-lg shadow-emerald-500/10 cursor-pointer border border-transparent"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              className="group bg-zinc-100 border border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 px-6 py-3.5 rounded-full flex items-center gap-2 transition-all duration-200 outline-none focus:scale-105 hover:scale-105 active:scale-[0.98] cursor-pointer"
              href="/Guido_Naselli_CV.pdf"
              download
            >
              Download CV
              <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <div className="flex items-center gap-2 ml-2">
              <a
                className="bg-zinc-100 border border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800 p-4 text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent hover:border-accent/40 dark:hover:border-accent/40 rounded-full transition-all duration-200 focus:scale-110 hover:scale-110 active:scale-[0.95] cursor-pointer"
                href="https://www.linkedin.com/in/guido-naselli-aa02a0171/"
                target="_blank"
                aria-label="LinkedIn Profile"
              >
                <BsLinkedin />
              </a>

              <a
                className="bg-zinc-100 border border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800 p-4 text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent hover:border-accent/40 dark:hover:border-accent/40 rounded-full transition-all duration-200 focus:scale-110 hover:scale-110 active:scale-[0.95] cursor-pointer text-[1.1rem]"
                href="https://github.com/guidonaselli"
                target="_blank"
                aria-label="GitHub Profile"
              >
                <FaGithubSquare />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-Agency Portrait Asset */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.2 }}
            className="relative"
          >
            {/* Fine Art Decorative Media Frame */}
            <div
              className="relative group max-w-[280px] sm:max-w-[320px]"
              onMouseEnter={onPortraitEnter}
              onMouseLeave={onPortraitLeave}
            >
              {/* Offset refraction outline */}
              <div className="absolute -inset-2 rounded-2xl border border-black/5 dark:border-white/10 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />

              <div className="relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-zinc-100/80 dark:bg-zinc-900/60 p-4 shadow-sm backdrop-blur-sm">
                {/* Liquid glass top reflection */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 dark:via-white/15 to-transparent" />
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className="relative"
                >
                  <Image
                    src="/CV_Image.png"
                    alt="Guido Naselli portrait rendered in ASCII"
                    width="400"
                    height="400"
                    priority={true}
                    className={`aspect-square w-full rounded-xl object-cover transition-all duration-500 shadow-inner ${
                      rawView ? "invert hue-rotate-180 contrast-125" : ""
                    } ${burst ? "opacity-20 blur-[1px]" : ""}`}
                  />
                  <AsciiBits level={bitsLevel} />

                  {/* Easter egg 3: decoded-signal caption after a long hover */}
                  <AnimatePresence>
                    {decoded && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-x-2 bottom-2 rounded-lg border border-black/5 dark:border-white/10 bg-zinc-50/80 dark:bg-zinc-950/70 px-3 py-1.5 font-mono text-[0.6rem] text-accent uppercase tracking-widest backdrop-blur-sm"
                      >
                        signal decoded // let&apos;s talk
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Easter egg 2: debug-mode terminal readout (Konami) */}
                <AnimatePresence>
                  {debugMode && (
                    <motion.pre
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 overflow-hidden rounded-lg border border-accent/30 bg-zinc-950/90 px-3 py-2.5 font-mono text-[0.6rem] leading-relaxed text-accent"
                    >
                      {`> debug --portrait
stack ···· react / next / spring
status ··· high-agency
since ···· 2019
coffee ··· ∞
[ esc to exit ]`}
                    </motion.pre>
                  )}
                </AnimatePresence>

                {/* Tech specifications tag */}
                <div className="mt-4 flex items-center justify-between font-mono text-[0.6rem] text-zinc-500 uppercase tracking-widest px-1">
                  {/* Easter egg 4: click the live dot to toggle raw-signal view */}
                  <button
                    type="button"
                    onClick={() => setRawView((v) => !v)}
                    aria-pressed={rawView}
                    aria-label="Toggle raw signal view"
                    className="flex items-center gap-1.5 rounded-full transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent cursor-pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    {rawView ? "RAW // SIGNAL" : "ASCII // 1:1"}
                  </button>
                  <span>VERIFIED // BUENOS AIRES</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

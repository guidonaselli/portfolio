"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

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
            <div className="relative group max-w-[280px] sm:max-w-[320px]">
              {/* Offset shadow outline */}
              <div className="absolute -inset-2 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              
              <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 p-4 shadow-sm">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/CV_Image.png"
                    alt="Guido Naselli portrait"
                    width="400"
                    height="400"
                    priority={true}
                    className="aspect-square w-full rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-inner"
                  />
                </motion.div>
                
                {/* Tech specifications tag */}
                <div className="mt-4 flex items-center justify-between font-mono text-[0.6rem] text-zinc-500 uppercase tracking-widest px-1">
                  <span>SCALE: 1:1</span>
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

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-24 md:mb-32 w-full max-w-[1200px] mx-auto scroll-mt-28 px-6 lg:px-8"
    >
      <SectionHeading>My skills</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 text-left">
        {/* Left Column: Index & Context Label */}
        <div className="md:col-span-4 flex flex-col justify-start gap-4">
          <div className="font-mono text-[0.7rem] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            [02] // ENGINE CAPABILITIES
          </div>
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Verified stack engineered for resilience, speed, and modern architectural standards.
          </h3>
          <div className="h-0.5 w-12 bg-accent mt-2" />
        </div>

        {/* Right Column: High-Agency Typographic Grid */}
        <div className="md:col-span-8">
          <motion.ul
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-2.5"
          >
            {skillsData.map((skill, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="font-mono text-[0.8rem] font-semibold uppercase px-4 py-2.5 bg-white border border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800/80 rounded-xl text-zinc-800 dark:text-zinc-200 shadow-sm cursor-pointer transition-all duration-200 hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent active:scale-95 flex items-center gap-2"
              >
                {/* Tech specifications index dot */}
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-colors duration-200 group-hover:bg-accent" />
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

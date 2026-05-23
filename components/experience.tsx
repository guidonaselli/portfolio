"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-24 md:mb-32 w-full max-w-[1200px] mx-auto px-6 lg:px-8"
    >
      <SectionHeading>My experience</SectionHeading>

      {/* Sleek Borderless Utilitarian List */}
      <div className="flex flex-col border-t border-zinc-200 dark:border-zinc-800/80">
        {experiencesData.map((item, index) => {
          // Parse title and company from the string e.g., "Full Stack Developer | GIA International"
          const parts = item.title.split(" | ");
          const role = parts[0];
          const company = parts[1] || "";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 100, damping: 20 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300 hover:bg-zinc-100/30 dark:hover:bg-zinc-900/10 px-2 rounded-lg"
            >
              {/* Monospace Metadata (Dates & Location) - Columns 1 to 3 */}
              <div className="md:col-span-3 flex flex-col justify-start md:text-left gap-1.5">
                <span className="font-mono text-[0.75rem] font-bold text-accent tracking-wider uppercase">
                  {item.date}
                </span>
                <span className="font-mono text-[0.7rem] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                  {item.location}
                </span>
              </div>

              {/* Work Details - Columns 4 to 12 */}
              <div className="md:col-span-9 flex flex-col text-left">
                <div className="flex items-center gap-3.5 mb-3 flex-wrap">
                  {/* SVG Icon */}
                  <span className="text-xl text-zinc-400 dark:text-zinc-500 group-hover:text-accent transition-colors duration-300">
                    {item.icon}
                  </span>
                  
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-none">
                    {role} {company && <span className="text-zinc-400 dark:text-zinc-500 font-normal">// {company}</span>}
                  </h3>
                </div>

                <p className="text-[0.92rem] text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[65ch]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

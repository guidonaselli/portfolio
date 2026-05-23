"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & {
  gridSpan: string;
  index: number;
};

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      delay: index * 0.05,
    },
  }),
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  gridSpan,
  index,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Format index as two digits e.g. "01"
  const formattedIndex = String(index + 1).padStart(2, "0");

  const CardWrapper = link ? motion.a : motion.div;
  const wrapperProps = link
    ? {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: `group flex flex-col justify-between bg-white border border-zinc-200/60 dark:bg-zinc-900/40 dark:border-zinc-800/80 rounded-[2rem] p-6 sm:p-8 hover:border-accent/40 dark:hover:border-accent/40 hover:border-zinc-300 dark:hover:border-zinc-700/60 transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.03)] cursor-pointer ${gridSpan}`,
      }
    : {
        className: `group flex flex-col justify-between bg-white border border-zinc-200/60 dark:bg-zinc-900/40 dark:border-zinc-800/80 rounded-[2rem] p-6 sm:p-8 hover:border-zinc-300 dark:hover:border-zinc-700/60 transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.03)] ${gridSpan}`,
      };

  return (
    <CardWrapper
      ref={ref as any}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-80px" }}
      custom={index}
      {...(wrapperProps as any)}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Card Header (Project Title & Index) */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[0.65rem] text-accent tracking-widest font-bold uppercase">
              PROJ // {formattedIndex}
            </span>
            <span className="font-mono text-[0.7rem] text-zinc-400 dark:text-zinc-500 tracking-wider flex items-center gap-1 group-hover:text-accent transition-colors duration-200">
              {link ? (
                <>
                  VISIT SITE <span className="text-[0.6rem] font-bold">↗</span>
                </>
              ) : (
                "VERIFIED RELEASE"
              )}
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2 leading-none">
            {title}
          </h3>
          
          <p className="text-[0.9rem] leading-relaxed text-zinc-500 dark:text-zinc-400 mb-6 max-w-[55ch]">
            {description}
          </p>
        </div>

        {/* Media Container (Project Image with hardware-accelerated scale on group hover) */}
        <div className="relative w-full h-[180px] sm:h-[220px] rounded-2xl overflow-hidden border border-zinc-200/40 dark:border-zinc-800/40 bg-zinc-50 dark:bg-zinc-950 mb-6 shadow-inner">
          <Image
            src={imageUrl}
            alt={`${title} project preview`}
            quality={90}
            fill
            className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out will-change-transform"
          />
        </div>

        {/* Card Footer (Tags list) */}
        <ul className="flex flex-wrap gap-1.5 mt-auto">
          {tags.map((tag, tagIndex) => {
            const isSpecialTag = tag.includes("!") || tag.toUpperCase() === "ON DEVELOPMENT!";
            return (
              <li
                className={`font-mono text-[0.65rem] tracking-wider uppercase px-2.5 py-1 rounded-lg border ${
                  isSpecialTag
                    ? "bg-accent/10 border-accent/20 text-accent font-semibold"
                    : "bg-zinc-100/50 border-zinc-200 dark:bg-zinc-800/50 dark:border-zinc-700/60 text-zinc-600 dark:text-zinc-400"
                }`}
                key={tagIndex}
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
    </CardWrapper>
  );
}

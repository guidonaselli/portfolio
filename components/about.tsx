"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-24 md:mb-32 w-full max-w-[1200px] mx-auto scroll-mt-28 px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, type: "spring", stiffness: 100, damping: 20 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 text-left">
        {/* Left Column: Context Tag & Core Focus */}
        <div className="md:col-span-4 flex flex-col justify-start gap-4">
          <div className="font-mono text-[0.7rem] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            [01] // BRIEF PROFILE
          </div>
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Fusing strict logical analysis with clean engineering execution.
          </h3>
          <div className="h-0.5 w-12 bg-accent mt-2" />
        </div>

        {/* Right Column: Narrative Biography */}
        <div className="md:col-span-8 flex flex-col gap-6 text-zinc-600 dark:text-zinc-400 text-[0.95rem] leading-relaxed max-w-[65ch]">
          <p>
            My first formal contact with programming was a{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">FullStack bootcamp</span> in 2021, 
            held by the Government of the City of Buenos Aires (Argentina), where I mainly learned frontend design 
            principles using VueJS and Vanilla CSS. I also learned a slight backend part with Spring boot. 
            Recognizing the importance of foundational theory, I enrolled in a career as a{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Systems Analyst</span>. 
            There I have learned in depth Java, Node.js, Vue.js, SQL, Kotlin, the principles of agile methodologies 
            (scrum and kanban) and good coding practices.
          </p>

          <p>
            To complement my analytical skillset, I am currently pursuing a{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Bachelor of Computer Science</span> at 
            Universidad de La Ciudad, complementing my practical experience with a deep theoretical background. 
            I also took specialized courses in Django, React, Firebase, and PostgreSQL.{" "}
            <span className="italic font-medium text-accent">
              My favorite part of programming is the problem-solving aspect and being in constant learning
            </span>
            —always researching new paradigms to elevate product quality.
          </p>

          <p>
            When I'm not coding, I enjoy playing video games, exercising, and watching movies or series. I also have 
            a strong interest in{" "}
            <span className="font-medium text-zinc-800 dark:text-zinc-200">learning economics</span> and{" "}
            <span className="font-medium text-zinc-800 dark:text-zinc-200">investing</span>, applying the same analytical 
            rigor to financial markets.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

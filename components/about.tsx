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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My first formal contact with programming was a{" "}
        <span className="font-bold">FullStack bootcamp</span> in 2021, held by
        the Government of the City of Buenos Aires (Argentina), where I mainly
        learned frontend design principles using VueJS and Vanilla CSS. I also
        learned a slight backend part with Spring boot. Then I enrolled in a
        career as a <span className="font-bold">Systems Analyst</span>. There I
        learned in depth Java, Node.js, Vue.js, SQL, Kotlin, the principles of
        agile methodologies (scrum and kanban) and good coding practices. I also
        took some courses to learn Django and React, and in them I also used
        Firebase and PostgreSQL.{" "}
        <span className="italic">
          My favorite part of programming is the problem-solving aspect and
          being in constantly learning
        </span>
        , I'm always researching what I could learn new.{" "}
        <span className="">
          I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a software
          developer.
        </span>
      </p>

      <p>
        <span className="italic">
          When I'm not coding, I enjoy playing video games, do some exercise and
          watching movies or series. I also enjoy{" "}
          <span className="font-medium">learning economics</span> and{" "}
          <span className="font-medium">investing</span>.
        </span>
      </p>
    </motion.section>
  );
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  // Bento layout grid spans for 5 projects to create high asymmetric interest
  const bentoGridSpans = [
    "md:col-span-7",  // Project 1: Wide main card
    "md:col-span-5",  // Project 2: Narrower card
    "md:col-span-5",  // Project 3: Narrower card
    "md:col-span-7",  // Project 4: Wide card
    "md:col-span-12", // Project 5: Full-width showpiece card
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-24 md:mb-32 w-full max-w-[1200px] mx-auto px-6 lg:px-8"
    >
      <SectionHeading>My projects</SectionHeading>

      {/* Bento Grid 2.0 System */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project
              {...project}
              gridSpan={bentoGridSpans[index] || "md:col-span-6"}
              index={index}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

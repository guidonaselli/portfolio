"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { Chrono } from "react-chrono";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6"
    >
      <SectionHeading>My experience</SectionHeading>
      <Chrono
        key={theme}
        theme={{
          primary: theme === "light" ? "#e5e7eb" : "#3c424f",
          secondary: theme === "light" ? "#e4e1fc" : "#4c4c72",
          cardBgColor: theme === "light" ? "white" : "#29303d",
          cardForeColor: theme === "light" ? "black" : "white",
          titleColor: theme === "light" ? "black" : "white",
        }}
        mode="VERTICAL_ALTERNATING"
        hideControls={true}
        timelinePointShape="diamond"
      >
        {experiencesData.map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {item.title}
            </h3>
            <span className="text-gray-600 dark:text-gray-300">
              {item.date} - {item.location}
            </span>
            <p>{item.description}</p>
            {item.icon && <span className="chrono-icon">{item.icon}</span>}
          </div>
        ))}
      </Chrono>
    </section>
  );
}

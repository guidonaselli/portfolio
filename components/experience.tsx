"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import dynamic from "next/dynamic";

// Importa Chrono de forma dinámica
const Chrono = dynamic(() => import("react-chrono").then((mod) => mod.Chrono), {
  loading: () => (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  ),
  ssr: false,
});

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
          secondary: theme === "light" ? "#e5e7eb" : "#3c424f",
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
            <h3 className="text-xl font-bold text-gray-800 dark:text-white flex justify-start items-center gap-7">
              <p>{item.icon}</p>
              <p>{item.title}</p>
            </h3>
            <span className="text-gray-600 dark:text-gray-300">
              {item.date} - {item.location}
            </span>
            <p>{item.description}</p>
          </div>
        ))}
      </Chrono>
    </section>
  );
}

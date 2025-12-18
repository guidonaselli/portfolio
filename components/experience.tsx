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
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>

      <div className="relative max-w-3xl mx-auto">
        {/* Línea vertical central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600" />

        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex items-center mb-8 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Contenido */}
            <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <span className="text-2xl text-indigo-600 dark:text-indigo-400">
                    {item.icon}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                  {item.date}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {item.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Punto central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full border-4 border-white dark:border-gray-900 shadow-md" />
            </div>

            {/* Espaciador */}
            <div className="w-5/12" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

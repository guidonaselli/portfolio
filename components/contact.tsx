"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-24 md:mb-32 w-full max-w-[1200px] mx-auto scroll-mt-28 px-6 lg:px-8 text-left"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        {/* Left Column: Brief details & Monospace specs */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="font-mono text-[0.7rem] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            [03] // DIRECT CORRESPONDENCE
          </div>
          
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let's build something exceptional together.
          </h3>

          <p className="text-[0.92rem] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-[32ch]">
            Reach out directly via email at{" "}
            <a 
              className="font-mono font-bold text-accent hover:underline break-all" 
              href="mailto:guidonaselli@gmail.com"
            >
              guidonaselli@gmail.com
            </a>{" "}
            or use this encrypted form.
          </p>

          <div className="h-px bg-zinc-200 dark:bg-zinc-800/80 w-full" />

          {/* Monospace tech support guidelines */}
          <div className="flex flex-col gap-2 font-mono text-[0.68rem] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            <div>ESTIMATED RESPONSE // &lt; 24 HOURS</div>
            <div>LOCATION // BUENOS AIRES (GMT-3)</div>
            <div>STATUS // ACTIVE CONVERSATIONS</div>
          </div>
        </div>

        {/* Right Column: Encrypted Form */}
        <div className="md:col-span-8">
          <form
            className="flex flex-col gap-6"
            onSubmit={async (event) => {
              event.preventDefault();
              setIsSubmitting(true);
              const formData = new FormData(event.target as HTMLFormElement);
              const result = await sendEmail(formData);

              setIsSubmitting(false);
              if ("error" in result) {
                toast.error(result.error);
              } else {
                toast.success("Email sent successfully!");
                (event.target as HTMLFormElement).reset();
              }
            }}
          >
            {/* Input Block: Sender Email */}
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="senderEmail" 
                className="font-mono text-[0.7rem] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
              >
                Sender Email Address <span className="text-accent">*</span>
              </label>
              <input
                id="senderEmail"
                className="h-12 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 text-zinc-900 dark:text-zinc-50 font-medium placeholder-zinc-400 dark:placeholder-zinc-600 focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="e.g. contact@company.com"
              />
            </div>

            {/* Input Block: Message */}
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="message" 
                className="font-mono text-[0.7rem] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
              >
                Your Message Content <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                className="h-44 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 text-zinc-900 dark:text-zinc-50 font-medium placeholder-zinc-400 dark:placeholder-zinc-600 focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200 resize-none"
                name="message"
                placeholder="Detail your project goals, timelines, or role expectations..."
                required
                maxLength={5000}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <SubmitBtn pending={isSubmitting} />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="colored" />
    </motion.section>
  );
}

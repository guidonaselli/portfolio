import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter leading-none mb-10 text-left text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
      {children}
    </h2>
  );
}

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";

type SubmitBtnProps = {
  pending: boolean;
};

export default function SubmitBtn({ pending }: SubmitBtnProps) {
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2.5 h-[3rem] w-[9rem] bg-accent hover:bg-accent-hover text-zinc-950 font-bold rounded-full outline-none transition-all duration-200 focus:scale-105 hover:scale-105 active:scale-[0.98] disabled:scale-100 disabled:bg-opacity-50 cursor-pointer border border-transparent shadow-md shadow-emerald-500/5"
      disabled={pending}
    >
      {pending ? (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-950 border-t-transparent" />
      ) : (
        <>
          <span className="font-mono text-xs uppercase tracking-wider">Send message</span>
          <FaPaperPlane className="text-[0.7rem] opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </>
      )}
    </button>
  );
}

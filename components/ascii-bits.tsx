"use client";

import React, { useEffect, useRef } from "react";

/**
 * AsciiBits — lightweight canvas overlay that renders flickering "bit" glyphs
 * over the ASCII portrait. Uses the same math/symbol set as the portrait so the
 * motion reads as the image quietly recomputing itself rather than a separate FX.
 *
 * - Capped at ~14fps and paused when offscreen (IntersectionObserver) to stay cheap.
 * - `level` drives density + opacity: idle hum, "active" wake on hover, and a
 *   "burst" used by the debug-mode easter egg where the portrait dissolves.
 */
const GLYPHS = "π√≈×÷#=+-:∞".split("");

type Level = "idle" | "active" | "burst";

export default function AsciiBits({ level }: { level: Level }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const levelRef = useRef(level);
  levelRef.current = level;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Pull the live design tokens so the FX tracks the theme + brief's mono face.
    const rootStyles = getComputedStyle(document.documentElement);
    const accent =
      rootStyles.getPropertyValue("--accent").trim() || "oklch(0.65 0.14 160)";
    const monoFont =
      rootStyles.getPropertyValue("--font-geist-mono").trim() || "monospace";

    const cell = 12; // px grid for glyphs
    let cols = 0;
    let rows = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      cols = Math.floor(rect.width / cell);
      rows = Math.floor(rect.height / cell);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${cell}px ${monoFont}, monospace`;
      ctx.textBaseline = "top";
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let visible = true;
    const io = new IntersectionObserver(
      ([e]) => (visible = e.isIntersecting),
      { threshold: 0 }
    );
    io.observe(canvas);

    let raf = 0;
    let last = 0;

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible || prefersReduced) return;
      const lvl = levelRef.current;
      const fps = lvl === "idle" ? 12 : lvl === "active" ? 20 : 30;
      if (t - last < 1000 / fps) return;
      last = t;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = accent;
      // density: fraction of cells that light up per frame
      const density = lvl === "idle" ? 0.018 : lvl === "active" ? 0.05 : 0.4;
      const count = Math.floor(cols * rows * density);
      for (let i = 0; i < count; i++) {
        const cx = Math.floor(Math.random() * cols) * cell;
        const cy = Math.floor(Math.random() * rows) * cell;
        const g = GLYPHS[(Math.random() * GLYPHS.length) | 0];
        // ~12% of bits run "hot" — brighter, to give the motion hierarchy
        const hot = Math.random() < (lvl === "burst" ? 0.4 : 0.12);
        const ceiling = lvl === "idle" ? 0.3 : 0.5;
        ctx.globalAlpha = hot
          ? 0.7 + Math.random() * 0.3
          : 0.12 + Math.random() * ceiling;
        ctx.fillText(g, cx, cy);
      }
      ctx.globalAlpha = 1;
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full rounded-xl"
    />
  );
}

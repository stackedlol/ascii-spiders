"use client";

import { useEffect, useRef } from "react";
import { SpiderEngine } from "./engine";
import type { SpiderSpec } from "./world";

/** Glyphs come from the canvas's font-family, so give it (or a parent) a monospace font. */
export function AsciiWebs({ className, spiders }: { className?: string; spiders?: SpiderSpec[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const engine = new SpiderEngine(canvas, spiders);
    return () => engine.destroy();
    // The roster is fixed for the life of the canvas.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`ascii-webs ${className ?? ""}`} />;
}

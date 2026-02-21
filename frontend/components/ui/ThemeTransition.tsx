"use client";

import React from "react";

type Corner = "top-right" | "top-left" | "bottom-right" | "bottom-left";

type Props = {
  active: boolean;
  nextTheme: "light" | "dark" | null;
  durationMs?: number;
  corner?: Corner;
};

export default function ThemeTransition({ active, nextTheme, durationMs = 400, corner = "top-right" }: Props) {
  if (!active || !nextTheme) return null;

  const bgClass = nextTheme === "dark" ? "bg-neutral-900" : "bg-white";

  const positionStyles: Record<Corner, React.CSSProperties> = {
    "top-right": { top: 0, right: 0 },
    "top-left": { top: 0, left: 0 },
    "bottom-right": { bottom: 0, right: 0 },
    "bottom-left": { bottom: 0, left: 0 },
  };

  const transformOrigin: Record<Corner, string> = {
    "top-right": "top right",
    "top-left": "top left",
    "bottom-right": "bottom right",
    "bottom-left": "bottom left",
  };

  return (
    <div aria-hidden className="fixed inset-0 z-[9998] pointer-events-none">
      <div
        className={`fixed ${bgClass} rounded-full theme-transition-blob opacity-30 mix-blend-difference`}
        style={{
          width: "120vmax",
          height: "120vmax",
          ...positionStyles[corner],
          transformOrigin: transformOrigin[corner],
          animationDuration: `${durationMs}ms`,
        }}
      />
    </div>
  );
}



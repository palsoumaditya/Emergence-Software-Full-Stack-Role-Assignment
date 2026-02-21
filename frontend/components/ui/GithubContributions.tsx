"use client";

import React, { useState, useEffect, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "@/components/theme-provider";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

export default function GithubContributions() {
  const { theme, resolvedTheme } = useTheme();
  // const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light"); // REMOVED
  const [selectedYear, setSelectedYear] = useState<number | "last">("last");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme directly for calendar, default to light if not mounted to match server
  const calendarTheme = mounted && resolvedTheme ? resolvedTheme : "light";

  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3];

  // --- DRAG TO SCROLL LOGIC ---
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // REMOVED manual useEffect for theme detection

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section 
      id="contributions" 
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-background text-foreground transition-colors duration-300"
    >
      {/* Signature Header */}
      <div className="flex flex-col items-center mb-10 relative">
        <h2 className={`${caveat.className} text-3xl md:text-5xl text-primary tracking-tight`}>
          Code Contributions
        </h2>
        <svg width="150" height="12" viewBox="0 0 140 12" fill="none" className="text-primary/40 mt-1">
          <path d="M5 7C30 5 110 5 135 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 2" />
        </svg>
      </div>

      <div className="relative flex flex-col items-center">
        
        {/* FIX APPLIED HERE:
           1. Removed 'flex justify-center' from the parent scroll container (caused the clipping).
           2. Added an inner wrapper with 'min-w-full w-fit mx-auto'.
              - This centers the chart if it fits.
              - But allows it to expand naturally to the right if it overflows.
        */}
        <div 
          ref={scrollContainerRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="w-full overflow-x-auto mb-8 pb-4 cursor-grab active:cursor-grabbing select-none"
        >
          {/* Inner wrapper to handle centering vs scrolling correctly */}
          <div className="min-w-full w-fit mx-auto flex justify-center pointer-events-none px-2">
             <GitHubCalendar
              username="palsoumaditya"
              year={selectedYear}
              colorScheme={calendarTheme as "light" | "dark"}
              blockSize={12} // Reduced slightly to fit better
              blockMargin={4}
              fontSize={12}  // Reduced font slightly to prevent label clipping
              style={{
                color: calendarTheme === "dark" ? "#e5e7eb" : "#1f2937",
              }}
            />
          </div>
        </div>

        {/* Handwritten Style Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 md:gap-8 ${caveat.className}`}>
          <button
            onClick={() => setSelectedYear("last")}
            className={`text-xl md:text-2xl transition-all duration-300 ${
              selectedYear === "last"
                ? "text-emerald-500 font-bold underline decoration-2 underline-offset-4"
                : "text-muted-foreground hover:text-primary hover:scale-105"
            }`}
          >
            Last 365 Days
          </button>
          
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`text-xl md:text-2xl transition-all duration-300 ${
                selectedYear === year
                  ? "text-emerald-500 font-bold underline decoration-2 underline-offset-4"
                  : "text-muted-foreground hover:text-primary hover:scale-105"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Small Annotation */}
        <div className={`absolute top-0 -left-6 md:-left-20 ${caveat.className} text-emerald-500/80 -rotate-12 hidden lg:flex flex-col items-center z-0 opacity-70`}>
           <span className="text-xl">Consistency!</span>
           <svg width="30" height="30" viewBox="0 0 50 40" fill="none" className="rotate-90 mt-1">
              <path d="M10,35 C15,15 35,10 42,15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M38,10 L42,15 L46,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>

      </div>
    </section>
  );
}
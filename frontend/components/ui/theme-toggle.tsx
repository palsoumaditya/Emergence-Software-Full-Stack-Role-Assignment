"use client";

import { useTheme } from "@/components/theme-provider";
import { useState, useEffect } from "react";
import ThemeTransition from "@/components/ui/ThemeTransition";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [nextTheme, setNextTheme] = useState<"light" | "dark" | null>(null);

  // Avoid hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = resolvedTheme === "dark";

  const handleToggle = () => {
    const isDarkMode = resolvedTheme === "dark";
    const target = isDarkMode ? "light" : "dark";
    setNextTheme(target);
    setTransitioning(true);
    // Delay applying the theme slightly so the overlay appears first
    window.setTimeout(() => {
      setTheme(target);
    }, 50);
    // End overlay after animation completes
    window.setTimeout(() => {
      setTransitioning(false);
      setNextTheme(null);
    }, 420);
  };

  return (
    <div className={className}>
      <ThemeTransition active={transitioning} nextTheme={nextTheme} corner="top-right" />
      <div
        className={`flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 ${
          isDarkMode ? 'bg-zinc-950 border border-zinc-800' : 'bg-white border border-zinc-200'
        }`}
        onClick={handleToggle}
        aria-label="Toggle theme"
      >
        <div className='flex justify-between items-center w-full'>
          <div
            className={`flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 ${
              isDarkMode ? 'transform translate-x-0 bg-zinc-800' : 'transform translate-x-8 bg-gray-200'
            }`}
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-neutral-900 dark:text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
              </svg>
            )}
          </div>
          <div
            className={`flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 ${
              isDarkMode ? 'bg-transparent' : 'transform -translate-x-8'
            }`}
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-black"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
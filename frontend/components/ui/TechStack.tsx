/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

interface Tech {
  name: string;
  url: string;
  logo: string;
}

interface TechStackProps {
  techStack: Tech[];
}

const TechStack: React.FC<TechStackProps> = ({ techStack = [] }) => {
  return (
    <section 
      id="tech-stack" 
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-32 md:pb-40 bg-background text-foreground"
    >
      <div className="flex flex-col items-center mb-12 relative">
        <h2 className={`${caveat.className} text-2xl md:text-4xl text-primary tracking-tight`}>
          Technical Arsenal
        </h2>
        <svg width="120" height="10" viewBox="0 0 140 12" fill="none" className="text-primary/30 mt-1">
          <path d="M5 7C30 5 110 5 135 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 2" />
        </svg>
      </div>

      <div className="relative">
        <div className="flex flex-wrap gap-2 md:gap-3 items-center justify-center bg-card/20 border border-border/30 p-5 md:p-8 rounded-[2rem]">
          {techStack && techStack.map((tech, index) => (
            <a
              key={`${tech.name}-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              href={tech.url}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/50 bg-muted/30 text-foreground text-xs md:text-sm font-semibold transition-all hover:border-primary/40 hover:bg-background hover:scale-105"
            >
              <div className="relative w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    ["Express JS", "Prisma", "GitHub", "AWS", "Next JS", "Vercel", "Nginx"].includes(tech.name) ? "dark:invert" : ""
                  }`}
                />
              </div>
              <span className="tracking-tight">{tech.name}</span>
            </a>
          ))}
        </div>

        {/* Annotation Hook Arrow */}
        <div className={`absolute -bottom-24 left-2 md:-left-4 ${caveat.className} text-indigo-500 -rotate-2 max-w-[240px] z-30 flex flex-col items-start scale-90 md:scale-100`}>
           <div className="ml-6 mb-1">
            <svg width="50" height="35" viewBox="0 0 60 40" fill="none" className="stroke-indigo-500/50 stroke-[3]">
              <path d="M10,35 C10,15 35,5 42,10" strokeLinecap="round" />
              <path d="M38,4 L42,10 L35,14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* Replaced & with &amp; for strict XML/HTML compliance */}
          <p className="text-xl md:text-2xl leading-tight font-bold text-left">
            Optimizing for scale &amp; <br/> production reliability
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
"use client";
import React from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pb-24 bg-background text-foreground transition-colors duration-300"
    >
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 relative">
        <h2 className={`${caveat.className} text-3xl md:text-5xl text-primary tracking-tight`}>
          Professional Experience
        </h2>
        <svg width="160" height="12" viewBox="0 0 140 12" fill="none" className="text-primary/40 mt-1">
          <path d="M5 7C30 5 110 5 135 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 2" />
        </svg>
      </div>

      <div className="relative">
        {/* Experience Card */}
        <div className="group relative flex flex-col md:flex-row items-start bg-card border border-border/40 rounded-3xl p-6 md:p-10 hover:border-primary/30 transition-all duration-300 shadow-xl z-10">
          
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm border border-border/10">
            <Image
              src="/me/LEGALCARE.png"
              alt="Legal Care - Full Stack Developer Intern Experience"
              fill
              className="object-contain p-3"
            />
          </div>

          <div className="flex-1 md:ml-10 mt-6 md:mt-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">Legal Care</h3>
                <p className="text-primary font-bold text-base md:text-lg italic uppercase tracking-wider">
                  Full Stack Developer Intern <span className="text-muted-foreground font-normal normal-case ml-2">— Remote</span>
                </p>
              </div>
              <span className={`text-lg md:text-xl ${caveat.className} text-muted-foreground whitespace-nowrap`}>
                Jun 2025 — Sep 2025
              </span>
            </div>

            <ul className="grid grid-cols-1 gap-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <li className="flex gap-3">
                <span className="text-primary font-bold text-lg">01 </span>
                <span>Architected <span className="text-foreground font-semibold">high-performance UIs</span> with React.js, focusing on complex workflows.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold text-lg">02 </span>
                <span>Developed and optimized <span className="text-foreground font-semibold">Node.js/Express APIs</span> for platform utility.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold text-lg">03 </span>
                <span>Executed <span className="text-foreground font-semibold">performance tuning</span> and debugging to improve load times.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold text-lg">04 </span>
                <span>Enforced <span className="text-foreground font-semibold">clean code standards</span> through rigorous peer reviews.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- FIXED BOTTOM ANNOTATION & ARROW --- */}
        <div className={`absolute -bottom-24 right-4 md:right-0 ${caveat.className} text-emerald-500 rotate-[-1deg] max-w-[240px] z-30 flex flex-col items-end`}>
          {/* Arrow pointing UP at the box corner */}
          <div className="mr-10">
            <svg width="60" height="45" viewBox="0 0 60 45" fill="none" className="stroke-emerald-500/60 stroke-[3]">
              {/* Organic swoop up */}
              <path d="M50,40 C50,20 20,10 12,18" strokeLinecap="round" />
              {/* Corrected arrowhead (< style) */}
              <path d="M8,12 L12,18 L18,12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          <p className="text-2xl md:text-3xl leading-tight font-bold text-right drop-shadow-md">
            Engineered production systems for legal-tech
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
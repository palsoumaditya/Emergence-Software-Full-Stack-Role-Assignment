"use client";
import React from "react";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { ArrowRight } from "lucide-react";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

export default function AboutSection() {
  return (
    <section 
      id="about-preview" 
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background text-foreground transition-colors duration-300"
    >
      {/* Signature Header */}
      <div className="flex flex-col items-center mb-12 relative">
        <h2 className={`${caveat.className} text-3xl md:text-5xl text-primary tracking-tight`}>
          The Engineer Behind
        </h2>
        <svg width="150" height="12" viewBox="0 0 140 12" fill="none" className="text-primary/40 mt-1">
          <path d="M5 7C30 5 110 5 135 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 2" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Narrative Text - Fixed unescaped entities */}
        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-light">
          As a <span className="text-foreground font-medium">Freelance Website Developer</span>, I don&apos;t just write code; I <span className="text-foreground font-medium">architect digital ecosystems</span>. 
          My work operates at the intersection of high-performance logic and intuitive design, transforming chaotic requirements into elegant, scalable engines. 
          I focus on the expensive problems—performance, reliability, and scale—building systems that don&apos;t just function, but thrive under pressure. 
          You&apos;ve seen the interface, but{" "}
          <Link 
            href="/about"
            className="group inline-flex items-baseline font-bold text-primary hover:text-emerald-500 transition-colors duration-300 cursor-pointer relative"
          >
            <span className="border-b-2 border-primary/30 group-hover:border-emerald-500 transition-colors">
              are you curious to see what drives the machine?
            </span>
            <ArrowRight className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform" />
            
            {/* Subtle highlight effect behind the link on hover */}
            <span className="absolute -inset-1 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </Link>
        </p>

        {/* Handwritten Annotation pointing to the inline link */}
        <div className={`absolute -bottom-12 right-0 md:-right-20 ${caveat.className} text-emerald-500 rotate-[-2deg] opacity-80 hidden md:block`}>
           <div className="flex flex-col items-end">
             {/* Arrow pointing UP and LEFT towards the text */}
             <svg width="60" height="45" viewBox="0 0 60 45" fill="none" className="mr-10 mb-1">
                <path d="M50,40 C40,20 20,25 5,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12,8 L5,10 L10,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
             <span className="text-xl md:text-2xl font-bold mr-4">Uncover the full story</span>
           </div>
        </div>
      </div>
    </section>
  );
}
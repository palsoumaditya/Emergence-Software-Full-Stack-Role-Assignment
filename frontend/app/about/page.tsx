import Image from "next/image";
import React from "react";
import { Caveat, Inter } from "next/font/google";
import type { Metadata } from "next";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Soumaditya Pal, a Computer Science Engineer and Full Stack Developer with a passion for scalable systems and digital ecosystems.",
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return (
    <section 
      id="about" 
      className={`${inter.className} w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-32 md:pb-40 bg-background text-foreground transition-colors duration-300`}
    >
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 relative">
        <h2 className={`${caveat.className} text-3xl md:text-5xl text-primary tracking-tight`}>
          The Builder Story
        </h2>
        <svg width="140" height="12" viewBox="0 0 140 12" fill="none" className="text-primary/40 mt-1">
          <path d="M5 7C30 5 110 5 135 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 2" />
        </svg>
      </div>

      <div className="relative">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Left: Profile Image with Professional Border */}
          <div className="relative group">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-[2.5rem] overflow-hidden border border-border bg-card shadow-2xl z-10 transition-all duration-500 group-hover:border-primary/50">
              <Image
                src="/me/soumaditya.jpg"
                alt="Soumaditya Pal"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            {/* Minimalist accent behind image */}
            <div className="absolute -inset-2 border border-primary/10 rounded-[2.8rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
          </div>

          {/* Right: Identity Content */}
          <div className="flex-1 text-center md:text-left">
            <p className={`${caveat.className} text-2xl text-primary mb-1`}>
              Full Stack Engineer
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-foreground">
              Soumaditya Pal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide mb-6">
              Specializing in Distributed Systems & Modern Web Architectures
            </p>
            
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                I am a <span className="text-foreground font-semibold">Final-year Computer Science Engineer</span> at NSHM Durgapur, currently operating as a <span className="text-foreground font-semibold">Full Stack Developer Intern at Legal Care.</span> My focus lies in bridging the gap between complex backend logic and high-performance user interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Deep Dive - Refined for Recruiters */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 bg-card/30 border border-border/40 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
          <div className="space-y-4">
            <h3 className="text-foreground font-bold text-xl tracking-tight">Technical Philosophy</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              I architect digital products with a focus on <span className="text-foreground font-medium">scalability and production reliability.</span> My expertise spans the complete lifecycle of an application—from designing schema architectures in <span className="text-foreground font-medium">PostgreSQL</span> to deploying containerized microservices.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Fluent in the <span className="text-foreground font-medium">React ecosystem</span> and server-side engineering with Node.js, I treat performance as a core feature, not an afterthought.
            </p>
          </div>
          
          <div className="space-y-4 md:border-l border-border/40 md:pl-10">
            <h3 className="text-foreground font-bold text-xl tracking-tight">Engineering Impact</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Beyond writing code, I am deeply involved in <span className="text-foreground font-medium">Systems Design</span> and DevOps. Whether it is optimizing CI/CD pipelines or experimenting with Web3 protocols, I strive to build software that is both maintainable and impactful.
            </p>
            {/* FIXED: The line below now uses &quot; and &apos; instead of " and ' */}
            <p className="text-primary font-bold text-sm md:text-base italic leading-relaxed pt-2">
              &quot;If you are looking for a developer who understands the business logic as clearly as the source code, let&apos;s connect.&quot;
            </p>
          </div>
        </div>

        {/* --- ANNOTATION: Bottom-Left with Hook Arrow --- */}
        <div className={`absolute -bottom-24 left-0 md:-left-8 ${caveat.className} text-indigo-500 -rotate-2 max-w-[280px] z-30 flex flex-col items-start`}>
           <div className="ml-10 mb-1">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="stroke-indigo-500/60 stroke-[3]">
              <path d="M10,35 C10,15 40,5 45,12" strokeLinecap="round" />
              <path d="M42,5 L45,12 L38,15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-2xl md:text-3xl leading-tight font-bold text-left drop-shadow-md">
            Turning caffeine into <br/>scalable architectures
          </p>
        </div>
      </div>
    </section>
  );
}
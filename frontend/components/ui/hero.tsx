"use client";
import Image from "next/image";
import { Caveat } from "next/font/google";
import { FileText } from "lucide-react";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

// Custom X (formerly Twitter) Logo Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center w-full px-4 py-4 bg-background text-foreground transition-colors duration-300 overflow-hidden"
    >
      {/* Annotated Image Container */}
      <div className="relative mb-6 md:mb-10 flex justify-center items-center scale-[0.75] xs:scale-[0.85] sm:scale-100">
        
        {/* --- LEFT SIDE ANNOTATIONS --- */}
        <div className={`absolute -left-28 -top-10 md:-left-64 md:-top-4 ${caveat.className} text-sky-500 dark:text-sky-400 -rotate-6 text-right`}>
          <p className="text-lg md:text-xl font-bold whitespace-nowrap">Frontend Architecture</p>
          <div className="flex justify-end mt-1">
            <svg width="50" height="25" viewBox="0 0 60 30" className="fill-none stroke-current opacity-60 stroke-[3]">
              <path d="M10,5 Q30,5 50,25" strokeLinecap="round" />
              <path d="M42,24 L50,25 L48,16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className={`absolute -left-32 top-24 md:-left-72 md:top-28 ${caveat.className} text-emerald-600 dark:text-emerald-400 rotate-2 text-right`}>
          <p className="text-lg md:text-xl font-bold whitespace-nowrap">Distributed Systems</p>
          <div className="flex justify-end mt-1">
            <svg width="50" height="25" viewBox="0 0 60 30" className="fill-none stroke-current opacity-60 stroke-[3]">
              <path d="M10,25 Q30,25 50,5" strokeLinecap="round" />
              <path d="M42,6 L50,5 L43,14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* --- CENTER IMAGE --- */}
        <div className="relative w-32 h-32 md:w-44 md:h-44 z-10">
          <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute inset-1.5 rounded-full overflow-hidden border border-primary/20 bg-muted">
            <Image
              src="/me/soumaditya.jpg"
              alt="Soumaditya"
              fill
              className="object-cover grayscale dark:brightness-90"
              priority
            />
          </div>
        </div>

        {/* --- RIGHT SIDE ANNOTATIONS --- */}
        <div className={`absolute -right-28 -top-10 md:-right-64 md:-top-4 ${caveat.className} text-indigo-600 dark:text-indigo-400 rotate-6 text-left`}>
          <p className="text-lg md:text-xl font-bold whitespace-nowrap">Scalable Backends</p>
          <div className="flex justify-start mt-1">
            <svg width="50" height="25" viewBox="0 0 60 30" className="fill-none stroke-current opacity-60 stroke-[3]">
              <path d="M50,5 Q30,5 10,25" strokeLinecap="round" />
              <path d="M18,24 L10,25 L12,16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className={`absolute -right-32 top-24 md:-right-72 md:top-28 ${caveat.className} text-orange-600 dark:text-orange-400 -rotate-2 text-left`}>
          <p className="text-lg md:text-xl font-bold whitespace-nowrap">Full-Cycle Engineering</p>
          <div className="flex justify-start mt-1">
            <svg width="50" height="25" viewBox="0 0 60 30" className="fill-none stroke-current opacity-60 stroke-[3]">
              <path d="M50,25 Q30,25 10,5" strokeLinecap="round" />
              <path d="M18,6 L10,5 L17,14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* --- MAIN TEXT CONTENT --- */}
      <div className="w-full max-w-3xl flex flex-col items-center text-center px-4">
        <h2 className={`mb-3 text-3xl md:text-5xl ${caveat.className} text-primary tracking-wide`}>
          Hi, I&apos;m Soumaditya
        </h2>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic leading-none">
          Full Stack <span className="text-primary">Engineer</span>
        </h1>
        
        <p className="text-sm md:text-lg text-muted-foreground max-w-md md:max-w-xl leading-relaxed mb-8">
          Building <span className="text-foreground font-medium">resilient systems</span> and 
          high-performance interfaces for the modern web.
        </p>
        
        <div className="flex flex-row gap-4">
          <a 
            href="https://drive.google.com/file/d/181WYd5PwA8iQGCR2Zje0ZNmwageZzThn/view?usp=drive_link" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-3 bg-foreground text-background rounded-full font-bold text-sm md:text-base hover:opacity-90 transition-all active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <FileText className="w-4 h-4 md:w-5 md:h-5" />
            <span>Resume</span>
          </a>
          
          <a 
            href="https://x.com/soumadityapal" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-3 border border-border bg-background text-foreground rounded-full font-bold text-sm md:text-base hover:bg-muted transition-all active:scale-95 flex items-center gap-2 hover:border-foreground/50"
          >
            {/* Using the new X Icon Component */}
            <XIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span>Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
}
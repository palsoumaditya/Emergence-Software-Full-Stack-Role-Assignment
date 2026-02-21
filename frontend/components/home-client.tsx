"use client";

import { useEffect, useMemo, useState } from "react";
import { Caveat } from "next/font/google";
import { useLoading } from "@/lib/loading-context";

import Hero from "@/components/ui/hero";
import Experience from "@/components/ui/Experience";
import Projects from "@/components/ui/Projects";
import TechStack from "@/components/ui/TechStack";
import Footer from "@/components/ui/Footer";
import GithubContributions from "@/components/ui/GithubContributions";
import AboutSection from "@/components/ui/AboutSection";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HomeClient() {
  const { setIsLoading } = useLoading();
  const [showIntro, setShowIntro] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(0);

  // Tech Stack Data
  const techStackData = [
    { name: "HTML", url: "https://developer.mozilla.org", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", url: "https://developer.mozilla.org", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", url: "https://developer.mozilla.org", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", url: "https://www.typescriptlang.org", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React JS", url: "https://reactjs.org", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next JS", url: "https://nextjs.org", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Redux", url: "https://redux.js.org", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Node JS", url: "https://nodejs.org", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express JS", url: "https://expressjs.com", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "REST API", url: "#", logo: "https://www.svgrepo.com/show/354262/rest-api.svg" },
    { name: "MongoDB", url: "https://www.mongodb.com", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Postgres", url: "https://www.postgresql.org", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Prisma", url: "https://www.prisma.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    { name: "Go Lang", url: "https://go.dev", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "C++", url: "https://isocpp.org", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Nginx", url: "https://www.nginx.com", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "AWS", url: "https://aws.amazon.com", logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
    { name: "GitHub", url: "https://github.com", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Vercel", url: "https://vercel.com", logo: "https://cdn.simpleicons.org/vercel/000000" }
  ];

  const greetings = useMemo(
    () => [
      "নমস্কার",
      "नमस्ते",
      "வணக்கம்",
      "નમસ્તે",
      "నమస్కారం",
      "ನಮಸ್ಕಾರ",
      "നമസ്കാരം",
      "नमस्कार",
      "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
    ],
    []
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const run = (index: number) => {
      if (index < greetings.length) {
        setCurrentLanguage(index);
        timeoutId = setTimeout(() => run(index + 1), 180);
      } else {
        timeoutId = setTimeout(() => {
          setShowIntro(false);
          setIsLoading(false);
        }, 300);
      }
    };

    run(0);

    return () => clearTimeout(timeoutId);
  }, [greetings, setIsLoading]);

  if (showIntro) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
        <div
          key={currentLanguage}
          className={`${caveat.className} text-6xl md:text-8xl font-bold text-primary animate-in fade-in zoom-in duration-200`}
        >
          {greetings[currentLanguage]}
        </div>

        <svg
          width="180"
          height="20"
          viewBox="0 0 140 12"
          fill="none"
          className="text-emerald-500 mt-6 opacity-70"
        >
          <path
            d="M5 7C30 5 110 5 135 8"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1 2"
            className="animate-pulse"
          />
        </svg>

        <p
          className={`${caveat.className} mt-8 text-xl md:text-2xl text-emerald-500 opacity-60`}
        >
          Engineering thoughtful digital experiences
        </p>
      </div>
    );
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start pt-8 overflow-x-hidden">
        <Hero />

        <div className="container mx-auto w-full max-w-4xl px-4 mt-10">
          <div className="flex flex-col gap-16">
            {/* Added AboutSection here, before GithubContributions */}
            <AboutSection />
            <GithubContributions />
            <Experience />
            <Projects />
            <TechStack techStack={techStackData} /> 
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";
import { ArrowUpRight, Globe, Github } from "lucide-react";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

// Tech stack map for easy icon retrieval
const techIcons: { [key: string]: string } = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Tailwind: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Prisma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Framer Motion": "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
  Zustand: "https://raw.githubusercontent.com/pmndrs/zustand/main/bear.png",
  Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  Clerk: "https://cdn.simpleicons.org/clerk/6C47FF",
  "TanStack Query": "https://cdn.simpleicons.org/reactquery/FF4154",
  "Radix UI": "https://cdn.simpleicons.org/radixui/161618",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Zod: "https://cdn.simpleicons.org/zod/3E67B1",
};

const projects = [
  {
    title: "Lyner",
    description: "A comprehensive link management tool designed to streamline your digital presence. Create, manage, and track your links with ease.",
    liveLink: "https://lyner.soumadityapal.in/",
    githubLink: "https://github.com/palsoumaditya/Lyner.git",
    status: "Live",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    image: "/project/Lyner.png",
  },
  {
    title: "FocusKaro",
    description: "A production-grade Focus Tracking Application built for high-performance time management. Using the Pomodoro technique, the system prioritizes data integrity and session persistence to prevent data loss. It offers precise, real-time minute tracking and detailed reports to help users optimize productivity.",
    liveLink: "https://focuskaro.soumadityapal.in/",
    githubLink: "https://github.com/palsoumaditya/Focuskaro.git",
    status: "Live",
    // Expanded tech stack based on user request
    technologies: [
      "Next.js", 
      "React", 
      "TypeScript", 
      "Tailwind", 
      "Clerk", 
      "TanStack Query", 
      "Radix UI", 
      "Framer Motion", 
      "Node", 
      "Express", 
      "PostgreSQL", 
      "Prisma", 
      "Redis", 
      "Zod"
    ],
    image: "/project/Focuskaro.png",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-12 md:pb-16 bg-background text-foreground transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center mb-10 relative">
        <h2 className={`${caveat.className} text-3xl md:text-5xl text-primary tracking-tight`}>
          Featured Works
        </h2>
        <svg
          width="140"
          height="12"
          viewBox="0 0 140 12"
          fill="none"
          className="text-primary/40 mt-1"
        >
          <path
            d="M5 7C30 5 110 5 135 8"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 2"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group relative flex flex-col md:flex-row bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden hover:border-primary/20 dark:hover:border-white/20 transition-all duration-300 shadow-xl dark:shadow-2xl"
          >
             {/* Thumbnail Area - Left Side on Desktop */}
            <div className="w-full md:w-5/12 h-56 md:h-auto relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 bg-gray-50 dark:bg-transparent">
                 <Image
                    src={project.image}
                    alt={`Preview of ${project.title} - ${project.description.substring(0, 50)}...`}
                    fill
                    className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 dark:to-[#111111]/10 md:to-white dark:md:to-[#111111] opacity-0 md:opacity-100 mix-blend-multiply transition-opacity"/>
            </div>

            {/* Content Area - Right Side on Desktop */}
            <div className="flex flex-col flex-grow p-5 md:p-6 space-y-4 md:w-7/12 relative">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {project.title}
                </h3>
                 <div className="flex gap-2">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                        <Globe size={20} />
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                        <Github size={20} />
                    </a>

                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-auto pt-2">
                <p className="text-xs font-medium text-gray-500 mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="relative w-6 h-6 hover:scale-110 transition-transform cursor-help"
                      title={tech}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={techIcons[tech] || ""}
                        alt={tech}
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 dark:invert-0"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Status & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5 mt-2">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.status === 'Live' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status === 'Live' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                    </span>
                    <span className={`text-xs font-medium ${project.status === 'Live' ? 'text-emerald-600 dark:text-emerald-500' : 'text-amber-600 dark:text-amber-500'} bg-${project.status === 'Live' ? 'emerald' : 'amber'}-500/10 px-2 py-0.5 rounded-full`}>
                        {project.status === 'Live' ? 'Operational' : 'Building'}
                    </span>
                </div>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white group-hover:translate-x-1 transition-all"
                >
                  View Details
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

       <div className="mt-12 flex justify-center">
            <a href="https://github.com/palsoumaditya" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-white/5 border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-sm font-medium transition-all text-gray-700 dark:text-white flex items-center gap-2">
                <Github size={18} />
                Show all projects
            </a>
       </div>
    </section>
  );
};

export default Projects;
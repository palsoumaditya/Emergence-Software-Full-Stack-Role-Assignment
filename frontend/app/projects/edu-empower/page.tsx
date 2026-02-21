import EduEmpowerDetails from "@/components/ui/EduEmpowerDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduEmpower - Educational Platform Project",
  description: "EduEmpower is an innovative educational platform built with React, Next.js, and modern web technologies. Explore this full-stack project showcasing advanced features like real-time collaboration, AI-powered learning, and comprehensive student management.",
  keywords: [
    "EduEmpower",
    "Educational Platform",
    "React Project",
    "Next.js Project",
    "Full Stack Project",
    "Educational Technology",
    "Student Management System",
    "Learning Management System",
    "Web Application",
    "Soumaditya Pal Projects",
    "Portfolio Project",
    "Educational Software"
  ],
  openGraph: {
    title: "EduEmpower - Educational Platform Project",
    description: "EduEmpower is an innovative educational platform built with React, Next.js, and modern web technologies. Explore this full-stack project showcasing advanced features like real-time collaboration, AI-powered learning, and comprehensive student management.",
    images: [
      {
        url: '/me/Edu-Empower.png',
        width: 1200,
        height: 630,
        alt: 'EduEmpower - Educational Platform Project',
      },
    ],
  },
  twitter: {
    title: "EduEmpower - Educational Platform Project",
    description: "EduEmpower is an innovative educational platform built with React, Next.js, and modern web technologies. Explore this full-stack project showcasing advanced features like real-time collaboration, AI-powered learning, and comprehensive student management.",
    images: ['/me/Edu-Empower.png'],
  },
  alternates: {
    canonical: '/projects/edu-empower',
  },
};

export default function EduEmpowerPage() {
  return <EduEmpowerDetails />;
} 
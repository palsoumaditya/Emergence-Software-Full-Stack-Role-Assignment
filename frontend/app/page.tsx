
import type { Metadata } from "next";
import HomeClient from "@/components/home-client";

export const metadata: Metadata = {
  title: "Soumaditya Pal - Full Stack Developer",
  description: "Welcome to the portfolio of Soumaditya Pal, a Full Stack Developer specializing in React, Next.js, and Node.js. Explore projects, skills, and experience.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomeClient />;
}
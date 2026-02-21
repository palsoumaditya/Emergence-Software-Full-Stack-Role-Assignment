import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Soumaditya Pal",
  description: "Learn more about Soumaditya Pal, a 21-year-old Full Stack Developer and Computer Science student at NSHM Durgapur. Currently interning at Legal Care, passionate about React, Next.js, and building innovative web applications.",
  keywords: [
    "About Soumaditya Pal",
    "Full Stack Developer Profile",
    "Computer Science Student",
    "NSHM Durgapur",
    "Legal Care Intern",
    "React Developer",
    "Next.js Developer",
    "Software Engineer Background",
    "Web Developer Portfolio",
    "Tech Enthusiast"
  ],
  openGraph: {
    title: "About Me - Soumaditya Pal",
    description: "Learn more about Soumaditya Pal, a 21-year-old Full Stack Developer and Computer Science student at NSHM Durgapur. Currently interning at Legal Care, passionate about React, Next.js, and building innovative web applications.",
    images: [
      {
        url: '/me/soumaditya.jpg',
        width: 1200,
        height: 630,
        alt: 'Soumaditya Pal - About Me',
      },
    ],
  },
  twitter: {
    title: "About Me - Soumaditya Pal",
    description: "Learn more about Soumaditya Pal, a 21-year-old Full Stack Developer and Computer Science student at NSHM Durgapur. Currently interning at Legal Care, passionate about React, Next.js, and building innovative web applications.",
    images: ['/me/soumaditya.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavbarWrapper from "@/components/ui/NavbarWrapper";
import ChatWidget from "@/components/ui/ChatWidget";
import { LoadingProvider } from "@/lib/loading-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Soumaditya Pal - Full Stack Developer | Website Developer | Freelancer",
    template: "%s | Soumaditya Pal - Full Stack Developer & Freelancer"
  },
  description: "Soumaditya Pal is a Full Stack Developer, Website Developer, and Freelancer specializing in React, Next.js, Node.js, and modern web technologies. Hire a professional for your web development needs.",
  keywords: [
    "Soumaditya Pal",
    "Full Stack Developer",
    "Website Developer",
    "Freelancer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Backend Developer",
    "Web Developer",
    "Frontend Developer",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Portfolio",
    "Computer Science",
    "NSHM Durgapur",
    "Legal Care",
    "Web3",
    "AI",
    "DevOps",
    "Hire Developer",
    "Freelance Web Developer"
  ],
  authors: [{ name: "Soumaditya Pal" }],
  creator: "Soumaditya Pal",
  publisher: "Soumaditya Pal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://soumadityapal.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://soumadityapal.in',
    title: 'Soumaditya Pal - Full Stack Developer | Website Developer | Freelancer',
    description: 'Soumaditya Pal is a Full Stack Developer, Website Developer, and Freelancer specializing in React, Next.js, Node.js, and modern web technologies.',
    siteName: 'Soumaditya Pal Portfolio',
    images: [
      {
        url: '/me/soumaditya.jpg',
        width: 1200,
        height: 630,
        alt: 'Soumaditya Pal - Full Stack Developer & Freelancer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumaditya Pal - Full Stack Developer | Website Developer | Freelancer',
    description: 'Soumaditya Pal is a Full Stack Developer, Website Developer, and Freelancer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['/me/soumaditya.jpg'],
    creator: '@soumaditya_pal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Soumaditya Pal",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Computer Science student passionate about building scalable applications and innovative solutions.",
              "url": "https://soumadityapal.in",
              "image": "https://soumadityapal.in/me/soumaditya.jpg",
              "sameAs": [
                "https://github.com/soumaditya-pal",
                "https://linkedin.com/in/soumaditya-pal",
                "https://twitter.com/soumaditya_pal"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "NSHM Knowledge Campus, Durgapur"
              },
              "worksFor": [
                {
                   "@type": "Organization",
                   "name": "Legal Care"
                },
                {
                   "@type": "Organization",
                   "name": "Freelance",
                   "description": "Freelance Website Developer & Full Stack Developer"
                }
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
                "Full Stack Development",
                "Web Development",
                "Software Engineering"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Durgapur",
                "addressRegion": "West Bengal",
                "addressCountry": "India"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Soumaditya Pal Portfolio",
              "url": "https://soumadityapal.in",
              "description": "Portfolio website of Soumaditya Pal, a Full Stack Developer and Computer Science student showcasing projects, skills, and experience.",
              "author": {
                "@type": "Person",
                "name": "Soumaditya Pal"
              },
              "potentialAction": {
                "@type": "SearchAction",
              "target": "https://soumadityapal.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LoadingProvider>
            <NavbarWrapper />
            {children}
            <ChatWidget />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

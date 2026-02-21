"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border/40 py-8 mt-12">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Top Branding - Handwriting Style with Organic Underline */}
        <div className="flex flex-col items-center mb-10 relative">
          <h2 className={`${caveat.className} text-3xl md:text-4xl text-primary tracking-tight`}>
            Let&apos;s build something great
          </h2>
          {/* Hand-drawn style SVG underline */}
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

        {/* Main Grid - Compact 2-column on mobile, 3-column on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 mb-10">
          
          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {['About', 'Experience', 'Projects'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm hover:text-primary transition-colors w-fit font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Connect */}
          <div className="space-y-3">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Connect</h3>
            <div className="flex gap-2.5">
              <a href="https://github.com/PalSoumaditya" target="_blank" className="p-2.5 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <FaGithub size={16} />
              </a>
              <a href="https://www.linkedin.com/in/soumaditya-pal-109029309/" target="_blank" className="p-2.5 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <FaLinkedin size={16} />
              </a>
              <a href="https://x.com/soumadityapal" target="_blank" className="p-2.5 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Contact - Spans 2 cols on mobile to keep height short */}
          <div className="col-span-2 md:col-span-1 space-y-3 pt-4 md:pt-0 border-t md:border-t-0 border-border/40">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Inquiries</h3>
            <a 
              href="mailto:soumaditya.pal23@gmail.com" 
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors group truncate"
            >
              <FaEnvelope className="text-primary opacity-70" />
              <span className="truncate">soumaditya.pal23@gmail.com</span>
            </a>
            <p className="text-[11px] text-muted-foreground">Kolkata, India • GMT +5:30</p>
          </div>
        </div>

        {/* Bottom Bar - Clean & Senior Branding */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-border/20 gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase">
              © 2025 Soumaditya Pal
            </p>
            <p className="text-[9px] text-muted-foreground/60 uppercase tracking-widest">
              Full Stack Engineer
            </p>
          </div>
          
          <p className={`${caveat.className} text-xl text-primary/70`}>
            Clean code, zero drama.
          </p>
        </div>
      </div>
    </footer>
  );
}
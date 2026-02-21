import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";


export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle touch events differently on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isMobile) {
      e.preventDefault(); // Prevent default touch behavior
      setIsActive(true);
    }
  };

  const handleTouchEnd = () => {
    // Add a small delay before deactivating on mobile
    if (isMobile) {
      setTimeout(() => setIsActive(false), 300);
    }
  };

  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-primary/20 bg-background p-2 px-6 text-center font-semibold transition-colors",
        isActive ? "bg-primary text-primary-foreground" : "",
        className,
      )}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className={`h-2 w-2 rounded-full bg-primary transition-all duration-300 ${isActive ? 'scale-[100.8]' : ''}`}></div>
        <span 
          className={`inline-block transition-all duration-400 ${isActive ? 'transform -translate-y-10 opacity-0' : 'transform translate-y-0 opacity-100'}`}
        >
          {children}
        </span>
      </div>
      <div 
        className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-400 ${isActive ? 'opacity-100' : 'opacity-0'}`}
      >
        <span>{children}</span>
        <ArrowRight className="ml-1" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

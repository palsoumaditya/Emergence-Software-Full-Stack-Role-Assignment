"use client"; 
import { cn } from "@/lib/utils"; 
import { IconMenu2, IconX, IconHome2 } from "@tabler/icons-react"; 
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useMotionValueEvent, 
} from "framer-motion";
import { Caveat } from "next/font/google"; // Import Caveat

import React, { useRef, useState } from "react"; 
import Link from "next/link"; // Add this import at the top with other imports

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
 
interface NavbarProps { 
  children: React.ReactNode; 
  className?: string; 
} 
 
interface NavBodyProps { 
  children: React.ReactNode; 
  className?: string; 
  visible?: boolean; 
} 
 
interface NavItemsProps { 
  items: { 
    name: string; 
    link: string; 
  }[]; 
  className?: string; 
  onItemClick?: () => void; 
} 
 
interface MobileNavProps { 
  children: React.ReactNode; 
  className?: string; 
  visible?: boolean; 
} 
 
interface MobileNavHeaderProps { 
  children: React.ReactNode; 
  className?: string; 
} 
 
interface MobileNavMenuProps { 
  children: React.ReactNode; 
  className?: string; 
  isOpen: boolean; 
} 

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

interface NavbarLogoProps {
  className?: string;
}

interface NavbarButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary";
  onClick?: () => void;
}
 
export const Navbar = ({ children, className }: NavbarProps) => { 
  const ref = useRef<HTMLDivElement>(null); 
  const { scrollY } = useScroll({ 
    target: ref, 
    offset: ["start start", "end start"], 
  }); 
  const [visible, setVisible] = useState<boolean>(false); 
 
  useMotionValueEvent(scrollY, "change", (latest) => { 
    if (latest > 100) { 
      setVisible(true); 
    } else { 
      setVisible(false); 
    } 
  }); 
 
  return ( 
    <motion.div 
      ref={ref} 
      className={cn("sticky inset-x-0 top-0 z-40 w-full", className)} 
    > 
      {React.Children.map(children, (child) => 
        React.isValidElement(child) 
          ? React.cloneElement( 
              child as React.ReactElement<{ visible?: boolean }>, 
              { visible }, 
            ) 
          : child, 
      )} 
    </motion.div> 
  ); 
}; 
 
export const NavBody = ({ children, className, visible }: NavBodyProps) => { 
  return ( 
    <motion.div 
      animate={{ 
        backdropFilter: visible ? "blur(10px)" : "none", 
        boxShadow: visible 
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset" 
          : "none", 
        width: visible ? "40%" : "100%", 
        y: visible ? 20 : 0, 
      }} 
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 50, 
      }} 
      style={{ 
        minWidth: "auto",
      }} 
      className={cn( 
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent", 
        visible && "bg-white/80 dark:bg-neutral-950/80", 
        className, 
      )} 
    > 
      {children} 
    </motion.div> 
  ); 
}; 
 
export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => { 
  const [hovered, setHovered] = useState<number | null>(null); 
 
  return ( 
    <motion.div 
      onMouseLeave={() => setHovered(null)} 
      className={cn( 
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-lg font-bold text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2 " + caveat.className, 
        className, 
      )} 
    > 
      {items.map((item, idx) => ( 
        <a 
          onMouseEnter={() => setHovered(idx)} 
          onClick={onItemClick} 
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300" 
          key={`link-${idx}`} 
          href={item.link} 
        > 
          {hovered === idx && ( 
            <motion.div 
              layoutId="hovered" 
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800" 
            /> 
          )} 
          <span className="relative z-20">{item.name}</span> 
        </a> 
      ))} 
    </motion.div> 
  ); 
}; 
 
export const MobileNav = ({ children, className, visible }: MobileNavProps) => { 
  return ( 
    <motion.div 
      animate={{ 
        backdropFilter: visible ? "blur(10px)" : "none", 
        boxShadow: visible 
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset" 
          : "none", 
        width: visible ? "90%" : "100%", 
        paddingRight: visible ? "12px" : "0px", 
        paddingLeft: visible ? "12px" : "0px", 
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0, 
      }} 
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 50, 
      }} 
      className={cn( 
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden", 
        visible && "bg-white/80 dark:bg-neutral-950/80", 
        className, 
      )} 
    > 
      {children} 
    </motion.div> 
  ); 
}; 
 
export const MobileNavHeader = ({ 
  children, 
  className, 
}: MobileNavHeaderProps) => { 
  return ( 
    <div 
      className={cn( 
        "flex w-full flex-row items-center justify-between", 
        className, 
      )} 
    > 
      {children} 
    </div> 
  ); 
}; 
 
export const MobileNavMenu = ({ 
  children, 
  className, 
  isOpen, 
}: MobileNavMenuProps) => { 
  return ( 
    <AnimatePresence> 
      {isOpen && ( 
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-center gap-4 rounded-2xl border border-neutral-800/70 bg-neutral-900/90 p-6 text-neutral-100 shadow-2xl backdrop-blur-[40px] dark:border-neutral-700/70 dark:bg-neutral-950/95",
            className,
          )}
        > 
          {children} 
        </motion.div> 
      )} 
    </AnimatePresence> 
  ); 
}; 

export const MobileNavToggle = ({ 
  isOpen, 
  onClick, 
  className, 
}: MobileNavToggleProps) => { 
  return ( 
    <button 
      onClick={onClick} 
      className={cn( 
        "flex h-10 w-10 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900", 
        className, 
      )} 
    > 
      {isOpen ? ( 
        <IconX className="h-5 w-5 text-neutral-600 dark:text-neutral-300" /> 
      ) : ( 
        <IconMenu2 className="h-5 w-5 text-neutral-600 dark:text-neutral-300" /> 
      )} 
    </button> 
  ); 
}; 

export const NavbarLogo = ({ className }: NavbarLogoProps) => {
  return (
    <Link href="/" className={cn("relative z-20 flex items-center", className)}>
      <IconHome2 className="h-6 w-6 text-neutral-700 dark:text-neutral-200 mr-2" />
      <span className={`text-xl font-bold text-neutral-700 dark:text-neutral-200 ${caveat.className}`}>Home</span>
    </Link>
  );
};

export const NavbarButton = ({ 
  children, 
  className, 
  variant = "default", 
  onClick, 
}: NavbarButtonProps) => { 
  return ( 
    <button 
      onClick={onClick} 
      className={cn( 
        "relative z-20 rounded-md px-4 py-2 text-sm font-medium transition-colors", 
        variant === "default" 
          ? "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200" 
          : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700", 
        className, 
      )} 
    > 
      {children} 
    </button> 
  ); 
};
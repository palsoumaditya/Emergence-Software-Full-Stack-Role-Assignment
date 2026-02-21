"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useState } from "react";
import Link from "next/link";
import { useLoading } from "@/lib/loading-context";

export default function NavbarWrapper() {
  const { isLoading } = useLoading(); // 👈 KEY LINE
  const [isOpen, setIsOpen] = useState(false);

  // ❌ Do NOT render navbar during intro loader
  if (isLoading) return null;

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/#projects" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="relative z-20 flex items-center justify-end gap-2">
          <ThemeToggle />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen}>
          {navItems.map((item, index) => (
            <Link
              key={`mobile-nav-${index}`}
              href={item.link}
              className="flex w-full items-center justify-center rounded-md px-3 py-2 text-sm text-center transition-colors hover:bg-neutral-800/70 dark:hover:bg-neutral-800/70"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

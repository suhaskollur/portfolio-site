"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              SK
            </span>
          </div>
          <span className="hidden sm:block text-lg font-semibold text-foreground">Suhas Kollur</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2.5 text-base font-semibold rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/30 shadow-sm"
                    : "text-foreground/80 hover:text-foreground hover:bg-accent/50 border border-transparent hover:border-primary/20"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="ml-4 pl-4 border-l border-border">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-primary/20 bg-background/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-base font-semibold rounded-lg transition-all",
                      isActive
                        ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/30"
                        : "text-foreground/80 hover:text-foreground hover:bg-accent/50 border border-transparent"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


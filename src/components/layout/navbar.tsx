
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Github,
  Menu,
  Linkedin,
  Mail,
  Brain,
  Shield,
  X,
} from "lucide-react";
import { NAVIGATION_ITEMS, PROFILE } from "@/lib/constants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <motion.div
              className="rounded-full bg-primary/10 p-1"
              animate={{
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Brain className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight">
              {PROFILE.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 mx-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3 py-2 text-sm font-medium ${
                  pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                } transition-colors hover:text-foreground`}
              >
                {item.label}
                {pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="navbar-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <motion.a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-muted/80 p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-white"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-muted/80 p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-white"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href={`mailto:${PROFILE.email}`}
              className="rounded-full bg-muted/80 p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-white"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </motion.a>
            <Link href="/contact" className="ml-1">
              <Button size="sm" className="group relative overflow-hidden">
                <span className="relative z-10">Contact</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-80">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                  <ul className="grid gap-5">
                    {NAVIGATION_ITEMS.map((item) => (
                      <motion.li 
                        key={item.path}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <Link
                          href={item.path}
                          className={`text-base font-medium ${pathname === item.path ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
                        >
                          {item.label}
                          {pathname === item.path && (
                            <motion.span
                              className="ml-2 inline-block h-1 w-1 rounded-full bg-primary"
                              layoutId="mobile-nav-dot"
                            />
                          )}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-10">
                  <div className="flex gap-4">
                    <motion.a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-muted/80 p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </motion.a>
                    <motion.a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-muted/80 p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </motion.a>
                    <motion.a
                      href={`mailto:${PROFILE.email}`}
                      className="rounded-full bg-muted/80 p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </motion.a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

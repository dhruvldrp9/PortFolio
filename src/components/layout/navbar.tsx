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
      className={`sticky top-0 z-40 w-full border-b ${scrolled ? 'border-border/40 bg-background/85 backdrop-blur-lg' : 'border-transparent bg-background/50 backdrop-blur-sm'} transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      <div className="container flex h-16 items-center px-4 sm:px-8">
        <Link href="/" className="mr-8 flex items-center">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-gradient-to-b from-primary to-accent/80">
              <motion.div
                animate={{
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Brain className="h-5 w-5 text-primary-foreground" />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, -10, 0],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Shield className="absolute h-4 w-4 text-primary-foreground opacity-40" />
              </motion.div>
            </div>
            <span className="text-lg font-bold">
              <span className="text-foreground">{PROFILE.name}</span>
            </span>
          </motion.div>
        </Link>
        <nav className="flex-1">
          <ul className="hidden md:flex gap-6">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`relative text-sm font-medium ${pathname === item.path ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
                >
                  {item.label}
                  {pathname === item.path && (
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-primary to-accent"
                      layoutId="navbar-underline"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:flex gap-4">
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
          </div>
          <Link href="/contact">
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
    </motion.header>
  );
}
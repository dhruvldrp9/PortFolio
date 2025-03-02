
"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Brain, Shield } from "lucide-react";
import { NAVIGATION_ITEMS, PROFILE } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm py-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Info */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative flex h-8 w-8 overflow-hidden items-center justify-center rounded-full bg-gradient-to-b from-primary to-accent/80">
                <Brain className="h-5 w-5 text-primary-foreground" />
                <Shield className="absolute h-4 w-4 text-primary-foreground opacity-40" />
              </div>
              <span className="text-lg font-bold text-foreground">
                {PROFILE.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mt-2 max-w-xs">
              Combining AI expertise with cybersecurity knowledge to build secure, intelligent systems
            </p>
            <div className="flex gap-3 pt-2">
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

          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="text-base font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-base font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <span className="block">{PROFILE.location}</span>
              </li>
              <li className="text-sm">
                <a 
                  href={`mailto:${PROFILE.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {PROFILE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {PROFILE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-3 sm:mt-0">
            AI Engineer & Cybersecurity Specialist
          </p>
        </div>
      </div>
    </footer>
  );
}

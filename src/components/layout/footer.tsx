"use client";
import { PROFILE } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Shield, Brain, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-[#181818] to-[#000000]">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Shield className="h-4 w-4 text-white opacity-40" />
                </motion.div>
                <Brain className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">{PROFILE.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              AI Engineer & Cybersecurity Specialist
            </p>
            <div className="flex space-x-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-foreground transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-muted-foreground text-sm">
              {PROFILE.location}
            </p>
            <p className="text-muted-foreground text-sm">
              {PROFILE.email}
            </p>
            <div className="pt-4">
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                <Code className="mr-2 h-4 w-4" />
                <span className="mr-1">Available for work</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
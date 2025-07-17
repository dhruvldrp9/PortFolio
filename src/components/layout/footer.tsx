"use client";
import { PROFILE } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Shield, Code, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Footer() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <footer className="bg-card/70 border-t border-border/50 backdrop-blur-sm pt-6 pb-2">
        <div className="flex flex-col items-center w-full gap-2">
          <Link href="/" className="flex flex-col items-center gap-1">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#181818] to-[#000000] overflow-hidden">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="h-5 w-5 text-white opacity-40" />
              </motion.div>
              <Image src="/ProfilePicBlack.jpeg" alt="DP Logo" width={36} height={36} className="rounded-full z-10 object-cover" />
            </div>
            <span className="text-base font-bold mt-1">{PROFILE.name}</span>
          </Link>
          <div className="flex flex-row items-center gap-4 mt-2">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <div className="flex flex-row items-center justify-center gap-6 mt-4">
            <Link href="/experience" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center">
              <Code className="h-5 w-5 mb-1" />
              <span className="text-xs">Exp</span>
            </Link>
            <Link href="/education" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center">
              <GraduationCap className="h-5 w-5 mb-1" />
              <span className="text-xs">Edu</span>
            </Link>
            <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center">
              <Code className="h-5 w-5 mb-1" />
              <span className="text-xs">Proj</span>
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center">
              <Shield className="h-5 w-5 mb-1" />
              <span className="text-xs">Blog</span>
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center">
              <Mail className="h-5 w-5 mb-1" />
              <span className="text-xs">Contact</span>
            </Link>
          </div>
        </div>
        <div className="mt-6 border-t border-border pt-3 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  // Desktop/laptop footer (unchanged)
  return (
    <footer className="bg-card/50 border-t border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Profile Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-[#181818] to-[#000000] overflow-hidden">
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
                <Image src="/ProfilePicBlack.jpeg" alt="DP Logo" width={28} height={28} className="rounded-full z-10 object-cover" />
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
                <Link href="/experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-foreground transition-colors">
                  Education
                </Link>
              </li>
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
              {PROFILE.email}
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 border-t border-border pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
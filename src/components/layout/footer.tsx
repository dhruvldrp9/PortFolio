/* eslint-disable react/no-unescaped-entities */
"use client";
import { PROFILE } from "@/lib/constants";
import { Github, Linkedin, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact Information */}
          <div className="space-y-4"> 
            <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="group flex items-center text-sm text-muted-foreground hover:text-accent"
                >
                  <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  <span className="break-all">{PROFILE.email}</span>
                </a>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4 shrink-0" />
                <span className="break-words">{PROFILE.location}</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-2 h-4 w-4 shrink-0" />
                IST (UTC+5:30)
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-sm text-muted-foreground hover:text-accent"
                >
                  <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-sm text-muted-foreground hover:text-accent"
                >
                  <Linkedin className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Projects", path: "/projects" },
                { label: "Blog", path: "/blog" },
                { label: "Education", path: "/education" },
                { label: "Certifications", path: "/certifications" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-sm text-muted-foreground hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <p className="text-sm text-muted-foreground">
              Looking for an AI/ML expert for your next project? Let's talk
              about how I can help.
            </p>
            <Link href="/contact">
              <Button className="w-full sm:w-auto">Contact Me</Button>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-accent"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-accent"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

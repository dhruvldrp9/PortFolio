import { PROFILE } from "@/lib/constants";
import { Github, Linkedin, Twitter, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="group flex items-center text-sm text-muted-foreground hover:text-accent"
                >
                  <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  {PROFILE.email}
                </a>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                San Francisco, CA
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-2 h-4 w-4" />
                PST (UTC-8)
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">Connect</h3>
            <ul className="mt-4 space-y-3">
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
              <li>
                <a
                  href={PROFILE.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-sm text-muted-foreground hover:text-accent"
                >
                  <Twitter className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Projects", path: "/projects" },
                { label: "Blog", path: "/blog" },
                { label: "Education", path: "/education" },
                { label: "Certifications", path: "/certifications" },
              ].map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <a className="text-sm text-muted-foreground hover:text-accent">
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">Get in Touch</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Looking for an AI/ML expert for your next project? Let's talk about how I can help.
            </p>
            <Link href="/contact">
              <Button className="mt-4 w-full sm:w-auto">Contact Me</Button>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy">
                <a className="text-sm text-muted-foreground hover:text-accent">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/terms">
                <a className="text-sm text-muted-foreground hover:text-accent">
                  Terms of Service
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
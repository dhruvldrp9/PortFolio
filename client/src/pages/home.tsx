import { PROFILE, STOCK_IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-bold md:text-6xl">{PROFILE.name}</h1>
            <h2 className="mt-4 text-2xl text-muted-foreground">{PROFILE.title}</h2>
            <p className="mt-6 text-lg">{PROFILE.bio}</p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact">
                <Button>Contact Me</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline">View Projects</Button>
              </Link>
            </div>
            <div className="mt-8 flex gap-4">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href={PROFILE.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <a href={`mailto:${PROFILE.email}`}>
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="relative aspect-square rounded-full">
            <img
              src={STOCK_IMAGES.profile}
              alt={PROFILE.name}
              className="absolute inset-0 h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Workspace Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">My Workspace</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            This is where the magic happens. A clean and organized workspace that promotes productivity and creativity.
          </p>
          <div className="mt-12">
            <img
              src={STOCK_IMAGES.workspace}
              alt="Developer Workspace"
              className="h-[400px] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

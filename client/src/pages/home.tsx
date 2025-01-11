import { PROFILE, STOCK_IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Linkedin, Twitter, Mail, Brain, Network, Database } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-32 md:py-40">
        {/* Neural network background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10" />
        </div>

        <div className="container relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                <Brain className="mr-2 h-4 w-4" />
                AI/ML Engineer
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {PROFILE.name}
              </h1>
              <h2 className="text-xl text-muted-foreground md:text-2xl">
                {PROFILE.title}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {PROFILE.bio}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Get in Touch
                    <Network className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                    View AI Projects
                    <Database className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary/20"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary/20"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={PROFILE.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary/20"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary/20"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-primary/10 blur-3xl" />
              <img
                src={STOCK_IMAGES.profile}
                alt={PROFILE.name}
                className="relative h-full w-full rounded-full border-8 border-background object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Workspace Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              AI Development Environment
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Equipped with high-performance GPUs and cutting-edge tools for training and deploying machine learning models.
            </p>
          </div>
          <div className="mt-16">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <img
                src={STOCK_IMAGES.workspace}
                alt="AI Development Workspace"
                className="h-[500px] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                  <Brain className="h-4 w-4" />
                  <span>Powered by NVIDIA GPUs & TensorFlow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
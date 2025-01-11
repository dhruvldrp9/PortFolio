import { PROFILE, STOCK_IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Linkedin, Twitter, Mail, Brain, Network, Database, Code } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Project, BlogPost } from "@db/schema";
import ProjectCard from "@/components/projects/project-card";
import BlogCard from "@/components/blog/blog-card";
import SkillMatrix from "@/components/skills/skill-matrix";

const SKILLS = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", proficiency: 90 },
      { name: "JavaScript", proficiency: 80 },
      { name: "TypeScript", proficiency: 75 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "TensorFlow", proficiency: 85 },
      { name: "PyTorch", proficiency: 80 },
      { name: "Scikit-learn", proficiency: 70 },
    ],
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "AWS", proficiency: 70 },
      { name: "GCP", proficiency: 60 },
      { name: "Azure", proficiency: 50 },
    ],
  },
];


export default function Home() {
  const { data: projects } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const { data: blogPosts } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Neural network background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-5" />
        </div>

        <div className="container relative z-10 flex min-h-screen items-center py-20">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div className="space-y-8 px-4 md:px-8">
              <div
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary"
              >
                <Brain className="mr-2 h-5 w-5" />
                AI/ML Engineer
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  {PROFILE.name}
                </h1>
                <h2 className="text-xl text-muted-foreground md:text-2xl">
                  {PROFILE.title}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {PROFILE.bio}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group w-full bg-primary/90 hover:bg-primary sm:w-auto"
                  >
                    Get in Touch
                    <Network className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group w-full border-primary/20 hover:bg-primary/10 sm:w-auto"
                  >
                    View AI Projects
                    <Database className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: PROFILE.github },
                  { icon: Linkedin, href: PROFILE.linkedin },
                  { icon: Twitter, href: PROFILE.twitter },
                  { icon: Mail, href: `mailto:${PROFILE.email}` },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary/10 p-3 transition-all hover:bg-primary/20 hover:scale-110"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-primary/30 opacity-30 blur-3xl" />
              <div className="animate-float relative rounded-full border-4 border-primary/20 p-2">
                <img
                  src={STOCK_IMAGES.profile}
                  alt={PROFILE.name}
                  className="relative h-full w-full rounded-full object-cover shadow-2xl ring-2 ring-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Technical Expertise
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Comprehensive skillset in AI/ML development, from model architecture to production deployment.
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <SkillMatrix
              skills={SKILLS.flatMap((category) =>
                category.skills.map((skill) => ({
                  ...skill,
                  category: category.category,
                }))
              )}
            />
          </div>
        </div>
      </section>

      {/* AI Workspace Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              AI Development Environment
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Equipped with high-performance GPUs and cutting-edge tools for training
              and deploying state-of-the-art machine learning models.
            </p>
          </div>
          <div className="mt-20">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              <img
                src={STOCK_IMAGES.workspace}
                alt="AI Development Workspace"
                className="h-[600px] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap justify-center gap-4">
                  {["TensorFlow", "PyTorch", "NVIDIA CUDA", "Python"].map((tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary"
                    >
                      <Code className="h-4 w-4" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Latest Highlights
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Check out my recent projects and articles in AI and machine learning.
            </p>
          </div>

          {/* Latest Projects */}
          <div className="space-y-16">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold">Featured Projects</h3>
                <Link href="/projects">
                  <Button variant="ghost" className="group">
                    View All Projects
                    <Code className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects?.slice(0, 3).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            {/* Recent Blog Posts */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold">Latest Articles</h3>
                <Link href="/blog">
                  <Button variant="ghost" className="group">
                    Read All Articles
                    <Code className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts?.slice(0, 3).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
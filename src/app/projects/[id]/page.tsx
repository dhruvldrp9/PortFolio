"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import PageBackground from "@/components/layout/page-background";
import { projects } from "../../../data/projects.json";
import ProjectCard from "@/components/projects/project-card";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      // Find the current project - handle both string and number IDs
      const currentProject = projects.find((p) => p.id.toString() === id.toString());
      if (currentProject) {
        setProject(currentProject);

        // Find related projects (same category, excluding current)
        const related = projects
          .filter(
            (p) =>
              p.id.toString() !== id.toString() && p.category === currentProject.category
          )
          .slice(0, 3);

        setRelatedProjects(related);
      }
    }
  }, [id]);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link href="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="container mx-auto px-4 py-16">
        <PageBackground title={project.title} subtitle={project.summary} />

        <div className="mt-16 space-y-12">
          {/* Back Button */}
          <Link href="/projects">
            <Button variant="ghost" className="mb-8 -ml-2 flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          {/* Project Image */}
          {project.image && (
            <Card className="overflow-hidden relative border border-border/50 rounded-lg bg-card/60 backdrop-blur-sm">
              <div className="aspect-video relative w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Card>
          )}

          {/* Project Content */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-8">
            <div className="space-y-8">
              {/* Description */}
              <section className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>{project.description}</p>
                </div>
              </section>

              {/* Features */}
              {project.features && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="grid gap-3 text-muted-foreground">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Challenges */}
              {project.challenges && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>{project.challenges}</p>
                  </div>
                </section>
              )}
            </div>

            <div className="space-y-8 relative z-10">
              {/* Project Details */}
              <section className="border border-border/50 rounded-lg p-6 bg-card/60 backdrop-blur-sm space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Project Category</h3>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    <Tag className="h-3.5 w-3.5 mr-1" />
                    {project.category}
                  </Badge>
                </div>

                {project.date && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Date</h3>
                    <p className="text-foreground">{project.date}</p>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies && (
                  <div className="relative">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, index: number) => (
                        <Badge key={index} variant="secondary" className="bg-muted/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Links */}
                <div className="space-y-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub Repository</span>
                      <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                      <ExternalLink className="h-3 w-3 ml-auto" />
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="pt-8 mt-16 border-t border-border/30">
              <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-0">
                {relatedProjects.map((related) => (
                  related && <div key={related.id}><ProjectCard project={related} /></div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
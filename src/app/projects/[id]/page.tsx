
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import PageBackground from "@/components/layout/page-background";
import { projects } from "../../../data/projects.json";
import ProjectCard from "@/components/projects/project-card";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      if (id) {
        // Find the current project - handle both string and number IDs
        const currentProject = projects.find((p) => p.id && p.id.toString() === id.toString());
        
        if (currentProject) {
          setProject(currentProject);
          
          // Find related projects (same category, excluding current)
          const related = projects
            .filter(
              (p) => 
                p.id && p.id.toString() !== id.toString() && 
                p.category === currentProject.category
            )
            .slice(0, 3);
            
          setRelatedProjects(related);
        }
      }
    } catch (error) {
      console.error("Error loading project:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4">Loading project details...</p>
        </div>
      </div>
    );
  }

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
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <PageBackground title={project.title || "Project Details"} subtitle={project.short_description || project.description || ""} />

        <div className="mt-12">
          <Link href="/projects">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all projects
            </Button>
          </Link>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* Main Content */}
              <div className="border border-border/50 rounded-lg overflow-hidden bg-card/60 backdrop-blur-sm">
                {project.image_url && (
                  <div className="relative aspect-video w-full">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6 space-y-8">
                  <div>
                    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
                      </a>
                    )}
                    {project.is_live_demo && project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>

                  {/* Key Features */}
                  {project.features && project.features.length > 0 && (
                    <section>
                      <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                      <ul className="grid gap-3 text-muted-foreground">
                        {project.features.map((feature, index) => (
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
              </div>
            </div>

            <div className="space-y-8 relative z-10">
              {/* Project Details */}
              <section className="border border-border/50 rounded-lg p-6 bg-card/60 backdrop-blur-sm space-y-6 sticky top-24">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Project Category</h3>
                  {project.category && (
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      <Tag className="h-3.5 w-3.5 mr-1" />
                      {project.category}
                    </Badge>
                  )}
                </div>

                {project.date && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Date</h3>
                    <p className="text-foreground">{project.date}</p>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {typeof project.technologies === 'string' 
                        ? project.technologies.split(',').map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-muted/50">
                              {tech.trim()}
                            </Badge>
                          ))
                        : Array.isArray(project.technologies) && project.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-muted/50">
                              {tech}
                            </Badge>
                          ))
                      }
                    </div>
                  </div>
                )}
              </section>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <section className="border border-border/50 rounded-lg p-6 bg-card/60 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-4">Related Projects</h3>
                  <div className="space-y-4">
                    {relatedProjects.map((relatedProject) => (
                      <Card key={relatedProject.id} className="overflow-hidden hover:bg-muted/20 transition-colors">
                        <Link href={`/projects/${relatedProject.id}`} className="block p-4">
                          <h4 className="font-medium">{relatedProject.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {relatedProject.short_description || relatedProject.description}
                          </p>
                        </Link>
                      </Card>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

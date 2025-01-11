import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, Globe, ArrowLeft } from "lucide-react";
import Heading from "@/components/ui/heading";
import type { Project } from "@db/schema";

export default function ProjectDetail() {
  const { id } = useParams();
  const { data: project, isLoading } = useQuery<Project>({
    queryKey: [`/api/projects/${id}`],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-8 w-32 mb-8" />
          <div className="grid lg:grid-cols-2 gap-8">
            <Skeleton className="aspect-video rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Project not found</h2>
            <p className="mt-2 text-muted-foreground">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/projects">
              <Button className="mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>

        <Heading>{project.title}</Heading>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - Image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative">
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full rounded-lg shadow-2xl object-cover aspect-video"
              />
            </div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              {project.technologies.split(",").map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary"
                  className="px-3 py-1 text-sm"
                >
                  {tech.trim()}
                </Badge>
              ))}
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="prose prose-gray dark:prose-invert">
                  <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
                  <p className="whitespace-pre-wrap text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              {project.github_url && (
                <a 
                  href={project.github_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full group">
                    <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    View on GitHub
                  </Button>
                </a>
              )}
              {project.live_url && (
                <a 
                  href={project.live_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" className="w-full group">
                    <Globe className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
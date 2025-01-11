import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, Globe, ArrowLeft } from "lucide-react";
import type { Project } from "@db/schema";

export default function ProjectDetail() {
  const { id } = useParams();
  const { data: project, isLoading } = useQuery<Project>({
    queryKey: [`/api/projects/${id}`],
  });

  if (isLoading) {
    return (
      <div className="container py-12">
        <Skeleton className="h-[400px] w-full rounded-lg" />
        <Skeleton className="mt-8 h-8 w-64" />
        <Skeleton className="mt-4 h-20 w-full" />
      </div>
    );
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link href="/projects">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>

      <img
        src={project.image_url}
        alt={project.title}
        className="aspect-video w-full rounded-lg object-cover"
      />

      <div className="mt-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.split(",").map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech.trim()}
            </Badge>
          ))}
        </div>
      </div>

      <Card className="mt-8">
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold">Project Description</h2>
          <p className="mt-4 whitespace-pre-wrap">{project.description}</p>
        </CardContent>
      </Card>

      <div className="mt-8 flex gap-4">
        {project.github_url && (
          <a href={project.github_url} target="_blank" rel="noopener noreferrer">
            <Button>
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </a>
        )}
        {project.live_url && (
          <a href={project.live_url} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <Globe className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}

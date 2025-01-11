import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import type { Project } from "@db/schema";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="group relative cursor-pointer overflow-hidden">
        <div className="relative">
          <CardHeader className="p-0">
            <img
              src={project.image_url}
              alt={project.title}
              className="aspect-video w-full rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay with description */}
            <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <p className="mt-auto text-sm text-card-foreground">
                {project.description}
              </p>
            </div>
          </CardHeader>
        </div>
        <CardContent className="p-4">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.split(",").map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech.trim()}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
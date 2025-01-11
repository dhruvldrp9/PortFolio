import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import type { Project } from "@db/schema";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="cursor-pointer transition-all hover:shadow-lg">
        <CardHeader>
          <img
            src={project.image_url}
            alt={project.title}
            className="aspect-video w-full rounded-lg object-cover"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription className="mt-2 line-clamp-2">
            {project.description}
          </CardDescription>
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

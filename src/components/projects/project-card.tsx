import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProjectCardProps {
  project: any;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm h-full flex flex-col group transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
      {project.image_url && (
        <div className="aspect-video w-full overflow-hidden border-b border-border/50">
          <img
            src={project.image_url}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <CardHeader className="p-5">
        <CardTitle className="line-clamp-1 text-xl font-bold">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-muted-foreground">
          {project.short_description || project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-5 py-0 flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {typeof project.technologies === 'string' 
            ? project.technologies.split(',').map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-muted/50">
                  {tech.trim()}
                </Badge>
              ))
            : Array.isArray(project.technologies) && project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-muted/50">
                  {tech}
                </Badge>
              ))
          }
        </div>
        {project.category && (
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            {project.category}
          </Badge>
        )}
      </CardContent>

      <CardFooter className="p-5 pt-0 flex justify-between items-center">
        <Link href={`/projects/${project.id}`} className="text-primary text-sm hover:underline">
          View Details
        </Link>

        <div className="flex gap-2">
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          )}
          {project.is_live_demo && project.live_url && (
            <a href={project.live_url} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
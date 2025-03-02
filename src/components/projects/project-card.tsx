
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BrainCircuit, Shield, Globe } from "lucide-react";

interface ProjectCardProps {
  project: any;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Function to get the icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI":
        return <BrainCircuit className="h-5 w-5" />;
      case "Cybersecurity":
        return <Shield className="h-5 w-5" />;
      case "Web":
        return <Globe className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm h-full flex flex-col group transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
        {project.image_url && (
          <div className="aspect-video w-full overflow-hidden border-b border-border/50 relative">
            <img
              src={project.image_url}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {project.category && (
              <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                {getCategoryIcon(project.category)}
              </div>
            )}
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

        <CardFooter className="p-5 pt-0 flex justify-end items-center">
          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
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
    </Link>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: any;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group h-full overflow-hidden rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm transition-colors hover:bg-card">
      <Link href={`/projects/${project.id}`} className="block">
        {project.image_url && (
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={project.image_url}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        )}
      </Link>
      <div className="p-4 md:p-5">
        <div className="flex justify-between mb-2">
          <Badge
            variant="outline"
            className="bg-primary/10 text-primary border-primary/20 text-xs md:text-sm"
          >
            {project.category}
          </Badge>
          {project.is_live_demo && (
            <Badge
              variant="secondary"
              className="bg-accent/10 text-accent border-accent/20 text-xs md:text-sm"
            >
              Live Demo
            </Badge>
          )}
        </div>
        <Link href={`/projects/${project.id}`} className="block">
          <h3 className="text-lg md:text-xl font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs md:text-sm text-muted-foreground">
            {project.short_description ||
              project.description.substring(0, 100) + "..."}
          </p>
        </Link>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex gap-2 flex-wrap">
            {typeof project.technologies === "string"
              ? project.technologies
                  .split(",")
                  .slice(0, 2)
                  .map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="inline-block text-xs text-muted-foreground px-2 py-1 bg-muted/30 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))
              : Array.isArray(project.technologies) &&
                project.technologies
                  .slice(0, 2)
                  .map((tech: any, index: string) => (
                    <span
                      key={index}
                      className="inline-block text-xs text-muted-foreground px-2 py-1 bg-muted/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
          </div>
          <Link
            href={`/projects/${project.id}`}
            className="text-primary hover:text-primary/80 text-xs md:text-sm font-medium inline-flex items-center transition-colors"
          >
            Details
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

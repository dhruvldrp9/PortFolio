/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, Globe, ArrowLeft, ExternalLink } from "lucide-react";
import Heading from "@/components/ui/heading";
import { useParams } from "next/navigation";
import Link from "next/link";
import { projects } from "../../../data/projects.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const isLoading = false;
  function getProject(id: any): any {
    return projects.find((p: any) => p.id == id);
  }
  const project = getProject(id);

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
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/projects">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Project Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Heading>{project.title}</Heading>
          </motion.div>

          <div className="mt-12 space-y-16">
            {/* Hero Section */}
            <motion.div
              className="relative group rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative aspect-video">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Project Details */}
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Technologies */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.split(",").map((tech: any) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="px-3 py-1 text-sm"
                        >
                          {tech.trim()}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="mt-6 space-y-4">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full group">
                        <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                        View on GitHub
                        <ExternalLink className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="outline" className="w-full group">
                        <Globe className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                        Live Demo
                        <ExternalLink className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Project Description */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <h2 className="text-xl font-semibold mb-4">
                        Project Overview
                      </h2>
                      <div className="mt-4 space-y-4">
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

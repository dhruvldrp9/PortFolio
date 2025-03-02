
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Github, 
  Globe, 
  ArrowLeft, 
  ExternalLink, 
  Calendar, 
  Tag, 
  Code, 
  Check, 
  Flag, 
  Star 
} from "lucide-react";
import Heading from "@/components/ui/heading";
import { useParams } from "next/navigation";
import Link from "next/link";
import { projects } from "../../../data/projects.json";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Project data
  function getProject(id: any): any {
    return projects.find((p: any) => p.id == id);
  }
  const project = getProject(id);
  
  useEffect(() => {
    // Simulate loading for a smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    // Scroll progress indicator
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min((window.scrollY / totalHeight) * 100, 100);
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="bg-background min-h-screen">
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 0.3, originX: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
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
                <div className="flex flex-wrap gap-2 mt-6">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center p-12 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mx-auto h-24 w-24 rounded-full bg-muted/30 flex items-center justify-center mb-6"
            >
              <Flag className="h-12 w-12 text-muted-foreground" />
            </motion.div>
            
            <h2 className="text-2xl font-bold mb-3">Project not found</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/projects">
              <Button className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollProgress / 100, transformOrigin: "left" }}
      />
    
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Project Title and Category */}
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-medium mb-4"
            >
              <Tag className="mr-2 h-4 w-4" />
              {project.category}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Heading>{project.title}</Heading>
            </motion.div>
          </div>

          <div className="mt-6 space-y-16">
            {/* Hero Section with enhanced animation */}
            <motion.div
              className="relative group rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl blur-xl group-hover:blur-2xl transition-all"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              <div className="relative aspect-video">
                <motion.img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay with key info */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.h2 
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-white/80 line-clamp-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description.substring(0, 120)}...
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Project Info Grid with enhanced sections */}
            <div className="grid gap-10 lg:grid-cols-3">
              {/* Main Project Details */}
              <motion.div
                className="lg:col-span-2 space-y-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Project Overview */}
                <Card className="overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center">
                      <Code className="mr-3 h-6 w-6 text-primary" />
                      Project Overview
                    </h2>
                    <div className="mt-4 space-y-6">
                      <motion.p 
                        className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-lg"
                        initial={{ opacity: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        {project.description}
                      </motion.p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Key Features */}
                <Card className="overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center">
                      <Star className="mr-3 h-6 w-6 text-primary" />
                      Key Features
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        "Responsive Design", 
                        "API Integration", 
                        "Data Visualization",
                        "Performance Optimized", 
                        "Secure Implementation", 
                        "User Authentication"
                      ].map((feature, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="mt-1 rounded-full bg-primary/10 p-1">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Implementation Details */}
                <Card className="overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center">
                      <Code className="mr-3 h-6 w-6 text-primary" />
                      Implementation Details
                    </h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-muted-foreground">
                        This project was implemented using a modern development workflow 
                        utilizing {project.technologies.split(",").join(", ")}. The architecture 
                        follows best practices for scalability and maintainability.
                      </p>
                      
                      <motion.div 
                        className="mt-6 relative overflow-hidden rounded-xl bg-muted/50 p-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        <pre className="text-sm overflow-x-auto">
                          <code className="language-javascript">
{`// Example implementation code
function ${project.title.replace(/[^a-zA-Z0-9]/g, '')}() {
  // Initialize core components
  const data = fetchProjectData();
  
  // Process and render
  return {
    title: "${project.title}",
    features: implementFeatures(data),
    render: () => createInterface()
  };
}`}
                          </code>
                        </pre>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Sidebar Info */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {/* Quick Info Card */}
                <Card className="overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm sticky top-24">
                  <CardContent className="p-6 space-y-6">
                    {/* Technologies Used */}
                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Technologies Used
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.split(",").map((tech: any) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="px-3 py-1 text-sm transition-all hover:scale-105 hover:bg-primary/20"
                          >
                            {tech.trim()}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="pt-4 border-t border-border/40">
                      <h3 className="text-lg font-medium mb-3">Project Info</h3>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Completed: October 2023</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Tag className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Category: {project.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="pt-4 space-y-3">
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button className="w-full group relative overflow-hidden">
                            <span className="relative z-10 flex items-center">
                              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                              View on GitHub
                            </span>
                            <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                            />
                            <ExternalLink className="ml-2 h-4 w-4 opacity-50 relative z-10" />
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
                  </CardContent>
                </Card>
                
                {/* Related Projects */}
                <Card className="overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Related Projects</h2>
                    <div className="space-y-4">
                      {projects.filter(p => p.id != id && p.category === project.category).slice(0, 3).map((relatedProject) => (
                        <motion.div 
                          key={relatedProject.id}
                          className="group"
                          whileHover={{ x: 5 }}
                        >
                          <Link href={`/projects/${relatedProject.id}`} className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                              <img 
                                src={relatedProject.image_url} 
                                alt={relatedProject.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div>
                              <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                                {relatedProject.title}
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                {relatedProject.technologies.split(',')[0].trim()}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            {/* Call to Action */}
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">Interested in similar projects?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                If you're interested in this project or would like to discuss a similar implementation,
                feel free to reach out.
              </p>
              <Link href="/contact">
                <Button size="lg" className="group">
                  Get in Touch
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

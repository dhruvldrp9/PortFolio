import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/projects/project-card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import Heading from "@/components/ui/heading";
import { Brain, Search } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@db/schema";

export default function Projects() {
  const [search, setSearch] = useState("");
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const filteredProjects = projects?.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.description.toLowerCase().includes(search.toLowerCase()) ||
    project.technologies.toLowerCase().includes(search.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-5" />
          </div>
          <div className="relative">
            <div className="flex items-center justify-between">
              <Heading>AI/ML Projects</Heading>
              <motion.div
                className="hidden md:flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Brain className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Showcasing Innovation in AI
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <motion.div 
          className="relative mb-12 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects by title, description, or technology..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-card border-primary/20"
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {isLoading ? (
            // Skeleton Loading State
            [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all" />
                <Skeleton className="relative h-[300px] rounded-lg" />
              </motion.div>
            ))
          ) : filteredProjects?.length === 0 ? (
            // No Results State
            <div className="col-span-full text-center py-12">
              <Brain className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">No projects found</h3>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your search terms
              </p>
            </div>
          ) : (
            // Projects List
            filteredProjects?.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all" />
                <div className="relative">
                  <ProjectCard project={project} />
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}
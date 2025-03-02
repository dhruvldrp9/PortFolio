"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBackground from "@/components/layout/page-background";
import ProjectCard from "@/components/projects/project-card";
import { projects } from "../../data/projects.json";
import { Button } from "@/components/ui/button";
import { Database, Filter, Search, Tag } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on category and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <PageBackground
          title="Projects Portfolio"
          subtitle="Explore my work in AI development and cybersecurity implementations"
        />

        <div className="mt-16">
          {/* Search and Filter Controls */}
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-full rounded-md border border-input bg-muted/50 pl-9 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["all", "AI", "Cybersecurity", "Web"].map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className="flex items-center gap-1"
                >
                  {category === "all" ? (
                    <Database className="h-4 w-4" />
                  ) : category === "AI" ? (
                    <Tag className="h-4 w-4" />
                  ) : (
                    <Filter className="h-4 w-4" />
                  )}
                  {category === "all" ? "All Projects" : category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
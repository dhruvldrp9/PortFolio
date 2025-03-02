"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBackground from "@/components/layout/page-background";
import ProjectCard from "@/components/projects/project-card";
import { projects } from "../../data/projects.json";
import { Button } from "@/components/ui/button";
import { Database, Filter, Search, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on category and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique categories for filter buttons
  const categories = ["all", ...new Set(projects.map(p => p.category))];

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
          subtitle="Explore my AI and cybersecurity projects"
        />

        <div className="mt-12 mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card/60 border-border/50 backdrop-blur-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-end">
              <span className="flex items-center text-sm text-muted-foreground mr-2">
                <Filter className="h-4 w-4 mr-1" />
                Filter:
              </span>
              {categories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className="capitalize"
                >
                  {category === "all" ? "All" : (
                    <>
                      <Tag className="h-3 w-3 mr-1" />
                      {category}
                    </>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  exit={{ opacity: 0, y: 20 }}
                  layout
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-full py-16 text-center" 
                variants={itemVariants}
              >
                <Database className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium">No projects found</h3>
                <p className="text-muted-foreground mt-2">
                  Try adjusting your search or filter criteria.
                </p>
                <Button 
                  className="mt-4" 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setFilter("all");
                  }}
                >
                  Reset filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
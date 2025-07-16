  "use client";
  import { useState, useMemo } from "react";
  import PageBackground from "@/components/layout/page-background";
  import projectsData from '../../data/projects.json';
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  import Link from "next/link";

  export default function Projects() {
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Flattened project list
    const allProjects: any[] = Array.isArray(projectsData.projects) ? projectsData.projects : (projectsData as any);

    // Filtered projects
    const filteredProjects = allProjects.filter((project: any) => {
      const matchesCategory = filter === "all" || project.category === filter;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Assign alternating sizes: large square and square only
    const tileSizes = useMemo(() => {
      const sizes = [
        "col-span-2 row-span-2", // large square
        "col-span-1 row-span-1", // square
      ];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return filteredProjects.map((_: any, i: number) => sizes[i % sizes.length]);
    }, [filteredProjects]);

    return (
      <div className="bg-background min-h-screen">
        <div className="container mx-auto px-2 md:px-8 py-16">
          <PageBackground
            title="Projects Gallery"
            subtitle="A visual wall of my work in AI, Cybersecurity, Blockchain, and more"
          />
          {/* Filters */}
          <div className="mb-8 md:mb-12 flex flex-col gap-4 md:grid md:grid-cols-[1fr_auto]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-full rounded-md border border-input bg-muted/50 pl-9 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              {["all", ...new Set(allProjects.map((p: any) => p.category))].map((category: string) => (
                <Button
                  key={category}
                  size="sm"
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`flex items-center gap-1 text-xs md:text-sm${filter === category ? ' text-black' : ''}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          {/* Masonry/Collage Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px] grid-flow-dense"
            style={{ minHeight: "60vh" }}
          >
            {filteredProjects.map((project: any, i: number) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={`relative group bg-card/70 border border-border/30 rounded-xl overflow-hidden shadow-lg flex flex-col cursor-pointer ${tileSizes[i]} transition-all duration-300 hover:shadow-2xl`}
                style={{ perspective: '1200px' }}
              >
                {/* Front: Image only */}
                <div className="absolute inset-0 w-full h-full z-10 group-hover:rotate-y-180 transition-transform duration-500 [transform-style:preserve-3d]">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: 0 }}
                  />
                </div>
                {/* Back: Details, shown on hover */}
                <div className="absolute inset-0 w-full h-full z-20 bg-card/90 p-4 flex flex-col gap-2 rounded-xl rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500 [transform-style:preserve-3d] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                  <div className="flex gap-2 items-center mb-1">
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-xs md:text-sm">
                      {project.category}
                    </Badge>
                    {project.is_live_demo && (
                      <Badge className="bg-accent/10 text-accent border-accent/20 text-xs md:text-sm">
                        Live Demo
                      </Badge>
                    )}
                  </div>
                  <h4 className="text-base md:text-lg font-bold line-clamp-2">{project.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                    {project.short_description || project.description.substring(0, 80) + "..."}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.technologies.split(",").map((tech: string) => (
                      <span key={tech} className="inline-block text-[10px] md:text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button asChild size="sm" variant="default" className="text-black">
                      <span>Details</span>
                    </Button>
                    {project.github_url && (
                      <Button asChild size="sm" variant="outline">
                        <span>GitHub</span>
                      </Button>
                    )}
                    {project.live_url && (
                      <Button asChild size="sm" variant="secondary">
                        <span>Live Demo</span>
                      </Button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="mt-12 text-center text-muted-foreground">No projects found matching your criteria.</div>
          )}
        </div>
      </div>
    );
  }
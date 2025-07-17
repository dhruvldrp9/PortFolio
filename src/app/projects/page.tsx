  "use client";
  import { useState, useMemo } from "react";
  import PageBackground from "@/components/layout/page-background";
  import projectsData from '../../data/projects.json';
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  import Link from "next/link";
  import Image from 'next/image';
  import { useIsMobile } from "@/hooks/use-mobile";

  type Project = {
    id: number;
    title: string;
    short_description?: string;
    description: string;
    technologies: string;
    image_url: string;
    github_url?: string;
    live_url?: string;
    category: string;
    is_live_demo?: boolean;
  };

  export default function Projects() {
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const isMobile = useIsMobile();

    // Flattened project list
    const allProjects: Project[] = Array.isArray(projectsData.projects) ? projectsData.projects : [];

    // Filtered projects
    const filteredProjects = allProjects.filter((project: Project) => {
      const matchesCategory = filter === "all" || project.category === filter;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Responsive tile sizes: only alternate on md+
    const tileSizes = useMemo(() => {
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        // mobile/tablet: all tiles same size
        return filteredProjects.map(() => 'col-span-1 row-span-1');
      }
      const sizes = [
        "col-span-2 row-span-2", // large square
        "col-span-1 row-span-1", // square
      ];
      return filteredProjects.map((_: Project, i: number) => sizes[i % sizes.length]);
    }, [filteredProjects]);

    // MOBILE LAYOUT
    if (isMobile) {
      return (
        <div className="bg-background min-h-screen">
          <div className="container mx-auto px-0 pt-8 pb-4">
            <PageBackground
              title="Projects Gallery"
              subtitle="A visual wall of my work in AI, Cybersecurity, Blockchain, and more"
            />
            {/* Compact Filters for Mobile */}
            <div className="mb-4 flex flex-col gap-2 px-2">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 w-full rounded-md border border-input bg-muted/50 px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <div className="flex flex-nowrap gap-2 overflow-x-auto scrollbar-hide py-1">
                {["all", ...new Set(allProjects.map((p: Project) => p.category))].map((category: string) => (
                  <Button
                    key={category}
                    size="sm"
                    variant={filter === category ? "default" : "outline"}
                    onClick={() => setFilter(category)}
                    className={`flex items-center gap-1 text-xs px-3 py-1${filter === category ? ' text-black' : ''}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            {/* Mobile Project List */}
            <div className="flex flex-col gap-4 px-0">
              {filteredProjects.map((project: Project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="block bg-card/80 border border-border/30 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl min-h-[180px] mx-2"
                  style={{ touchAction: 'manipulation' }}
                >
                  <div className="relative w-full aspect-[16/9] bg-background">
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                      sizes="100vw"
                      priority={false}
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <div className="flex gap-2 items-center flex-wrap mb-1">
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {project.category}
                      </Badge>
                      {project.is_live_demo && (
                        <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                          Live Demo
                        </Badge>
                      )}
                    </div>
                    <h4 className="text-lg font-bold line-clamp-2">{project.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {project.short_description || project.description.substring(0, 80) + "..."}
                    </p>
                    {/* Tech badges horizontal scroll if many */}
                    <div className="flex gap-1 mt-1 overflow-x-auto scrollbar-hide pb-1">
                      {project.technologies.split(",").map((tech: string) => (
                        <span key={tech} className="inline-block text-[11px] text-primary bg-primary/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <Button asChild size="sm" variant="default" className="text-black px-3 py-1 text-xs">
                        <span>Details</span>
                      </Button>
                      {project.github_url && (
                        <Button asChild size="sm" variant="outline" className="px-3 py-1 text-xs">
                          <span>GitHub</span>
                        </Button>
                      )}
                      {project.live_url && (
                        <Button asChild size="sm" variant="secondary" className="text-black px-3 py-1 text-xs">
                          <span>Live Demo</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
              {filteredProjects.length === 0 && (
                <div className="mt-12 text-center text-muted-foreground">No projects found matching your criteria.</div>
              )}
            </div>
          </div>
        </div>
      );
    }

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
              {["all", ...new Set(allProjects.map((p: Project) => p.category))].map((category: string) => (
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px] grid-flow-dense"
            style={{ minHeight: "60vh" }}
          >
            {filteredProjects.map((project: Project, i: number) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={`relative group bg-card/70 border border-border/30 rounded-xl overflow-hidden shadow-lg flex flex-col cursor-pointer ${tileSizes[i]} transition-all duration-300 hover:shadow-2xl min-h-[160px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[260px]`}
                style={{ perspective: '1200px' }}
              >
                {/* Responsive: Always show details on mobile/tablet, flip on desktop */}
                <div className="absolute inset-0 w-full h-full z-10 md:group-hover:rotate-y-180 transition-transform duration-500 [transform-style:preserve-3d]">
                  <Image
                    src={project.image_url}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    style={{ minHeight: 0 }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={i < 4}
                  />
                </div>
                {/* Details: always visible on mobile/tablet, flip on desktop */}
                <div className="absolute inset-0 w-full h-full z-20 bg-card/90 p-3 sm:p-4 flex flex-col gap-2 rounded-xl md:rotate-y-180 md:group-hover:rotate-y-0 transition-transform duration-500 [transform-style:preserve-3d] opacity-100 md:opacity-0 md:group-hover:opacity-100 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto">
                  <div className="flex gap-2 items-center mb-1 flex-wrap">
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
                      <span key={tech} className="inline-block text-[11px] md:text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <Button asChild size="sm" variant="default" className="text-black px-3 py-1 text-xs md:text-sm">
                      <span>Details</span>
                    </Button>
                    {project.github_url && (
                      <Button asChild size="sm" variant="outline" className="px-3 py-1 text-xs md:text-sm">
                        <span>GitHub</span>
                      </Button>
                    )}
                    {project.live_url && (
                      <Button asChild size="sm" variant="secondary" className="text-black px-3 py-1 text-xs md:text-sm">
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
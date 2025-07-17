"use client";
import { useEffect, useState } from "react";
import PageBackground from "@/components/layout/page-background";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from 'next/image';
import { useIsMobile } from "@/hooks/use-mobile";

type Experience = {
  id: number;
  role: string;
  company: string;
  company_logo?: string;
  location: string;
  start_date: string;
  end_date?: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export default function Experience() {
  const [experience, setExperience] = useState<Experience[]>([]);
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState<{ [id: number]: boolean }>({});
  // Remove showAllAchievements state and logic

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  // Remove toggleShowAllBadges and toggleShowAllTech functions

  useEffect(() => {
    import("@/data/experience.json").then((mod) => setExperience(mod.default || mod));
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-10 md:py-16">
        <PageBackground
          title="Professional Experience"
          subtitle="A showcase of my work in AI, cybersecurity, and technology."
        />
        <div className="mt-4 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 md:gap-16 relative">
          {experience.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} group`}
            >
              <Card className={`relative w-full max-w-full md:max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg md:shadow-2xl transition-all duration-300 group-hover:shadow-primary/10 group-hover:border-primary/40 p-3 sm:p-4 md:p-8 flex flex-col md:flex-row items-center md:items-stretch rounded-2xl ${idx % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                {/* Mobile Layout */}
                {isMobile ? (
                  <>
                    {/* Logo */}
                    <div className="flex flex-col items-center w-full mb-2">
                      {exp.company_logo && (exp.company_logo.startsWith('/') || exp.company_logo.startsWith('http')) ? (
                        <Image src={exp.company_logo} alt={exp.company} width={44} height={44} className="w-11 h-11 rounded-xl object-contain border border-border/20 bg-background mb-1" />
                      ) : (
                        <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-lg font-bold text-primary mb-1">
                          {exp.company[0]}
                        </div>
                      )}
                    </div>
                    {/* Meta */}
                    <div className="flex flex-col items-center w-full gap-0.5 mb-2">
                      <div className="text-base font-bold text-foreground text-center">{exp.role}</div>
                      <div className="text-xs text-muted-foreground font-medium text-center">{exp.company}</div>
                      <div className="text-[11px] text-muted-foreground text-center">{exp.location}</div>
                      <div className="text-[11px] text-muted-foreground text-center">{exp.start_date} - {exp.end_date || "Present"}</div>
                    </div>
                    {/* Description */}
                    <div className="w-full mb-2">
                      <p className={`text-xs text-muted-foreground text-center ${exp.description.length > 120 && !expanded[exp.id] ? 'line-clamp-2' : ''}`}>{exp.description}</p>
                      {exp.description.length > 120 && (
                        <button
                          className="text-primary text-xs mt-1 underline mx-auto block"
                          onClick={() => toggleExpand(exp.id)}
                        >
                          {expanded[exp.id] ? 'Show less' : 'Show more'}
                        </button>
                      )}
                    </div>
                    {/* Achievements as vertical list, no expand/collapse */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="w-full mb-2 flex flex-col items-center">
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-primary bg-primary/10 border border-primary/20 rounded-lg px-2 py-1 my-0.5 w-full max-w-xs">
                            <CheckCircle className="h-3 w-3 min-w-3 text-primary" />
                            <span className="flex-1">{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Technologies as chips (unchanged) */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex gap-1 overflow-x-auto pb-1 w-full scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} className="bg-background border border-primary/30 text-primary text-[10px] font-semibold px-2 py-0.5 whitespace-nowrap min-w-fit">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // Desktop/Laptop Layout (unchanged)
                  <>
                    {/* Left: Logo and meta */}
                    <div className="flex flex-col items-center md:items-start md:w-1/3 w-full gap-2">
                      {exp.company_logo && (exp.company_logo.startsWith('/') || exp.company_logo.startsWith('http')) ? (
                        <Image src={exp.company_logo} alt={exp.company} width={48} height={48} className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-contain border border-border/20 bg-background mb-2" />
                      ) : (
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-muted flex items-center justify-center text-lg sm:text-2xl font-bold text-primary mb-2">
                          {exp.company[0]}
                        </div>
                      )}
                      <div className="text-base sm:text-lg font-bold text-foreground mb-1 text-center md:text-left">{exp.role}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium text-center md:text-left">{exp.company}</div>
                      <div className="text-xs text-muted-foreground text-center md:text-left">{exp.location}</div>
                      <div className="text-xs text-muted-foreground mt-1 text-center md:text-left">{exp.start_date} - {exp.end_date || "Present"}</div>
                    </div>
                    {/* Right: Description, achievements, tech */}
                    <div className="flex-1 flex flex-col gap-2 sm:gap-4 w-full">
                      <p className="text-sm sm:text-base text-muted-foreground mb-2">{exp.description}</p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                        {exp.achievements && exp.achievements.map((ach, i) => (
                          <Badge key={i} className="flex items-center gap-1 bg-primary/10 text-primary border-primary/20 text-[10px] sm:text-xs px-2 sm:px-3 py-1">
                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                            {ach}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {exp.technologies && exp.technologies.map((tech, i) => (
                          <Badge key={i} className="bg-background border border-primary/30 text-primary text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
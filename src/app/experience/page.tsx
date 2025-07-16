"use client";
import { useEffect, useState } from "react";
import PageBackground from "@/components/layout/page-background";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Experience() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [experience, setExperience] = useState<any[]>([]);

  useEffect(() => {
    import("@/data/experience.json").then((mod) => setExperience(mod.default || mod));
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <PageBackground
          title="Professional Experience"
          subtitle="A showcase of my work in AI, cybersecurity, and technology."
        />
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          {experience.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative flex ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} group`}
            >
              <Card className={`relative w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl transition-all duration-300 group-hover:shadow-primary/10 group-hover:border-primary/40 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center ${idx % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                {/* Left: Logo and meta */}
                <div className="flex flex-col items-center md:items-start md:w-1/3 w-full gap-3">
                  {exp.company_logo ? (
                    <img src={exp.company_logo} alt={exp.company} className="w-16 h-16 rounded-xl object-contain border border-border/20 bg-background mb-2" />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center text-2xl font-bold text-primary mb-2">
                      {exp.company[0]}
                    </div>
                  )}
                  <div className="text-lg font-bold text-foreground mb-1">{exp.role}</div>
                  <div className="text-sm text-muted-foreground font-medium">{exp.company}</div>
                  <div className="text-xs text-muted-foreground">{exp.location}</div>
                  <div className="text-xs text-muted-foreground mt-1">{exp.start_date} - {exp.end_date || "Present"}</div>
                </div>
                {/* Right: Description, achievements, tech */}
                <div className="flex-1 flex flex-col gap-4 w-full">
                  <p className="text-base text-muted-foreground mb-2">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {exp.achievements && exp.achievements.map((ach: string, i: number) => (
                      <Badge key={i} className="flex items-center gap-1 bg-primary/10 text-primary border-primary/20 text-xs font-semibold px-3 py-1">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {ach}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies && exp.technologies.map((tech: string, i: number) => (
                      <Badge key={i} className="bg-background border border-primary/30 text-primary text-xs font-semibold px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
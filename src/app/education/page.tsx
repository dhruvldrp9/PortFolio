"use client";
import { motion } from "framer-motion";
import PageBackground from "@/components/layout/page-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Calendar, BookOpen, Award } from "lucide-react";
import { education } from "../../data/education.json";
import TimelineItem from "@/components/education/timeline-item";

export default function Education() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <PageBackground 
          title="Education & Learning Journey" 
          subtitle="Academic background and continuous learning in AI & Cybersecurity"
        />
        <div className="relative mt-24 flex flex-col items-center">
          {/* Vertical timeline line - always visible, behind cards */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/40 via-primary/80 to-primary/40 rounded-full shadow-lg z-0 border border-primary/30" style={{ transform: 'translateX(-50%)' }} />
          <div className="w-full max-w-9xl flex flex-col gap-20 z-10 px-2 md:px-8">
            {education.map((edu, idx) => (
              <div key={edu.id} className="relative flex min-h-[220px]">
                {/* Timeline dot - outside the card, aligned with card top */}
                <motion.div
                  className={`absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-20`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.2 }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary shadow-lg flex items-center justify-center ring-4 ring-background border-2 border-primary">
                    <School className="h-5 w-5 text-primary-foreground" />
                  </div>
                </motion.div>
                {/* Timeline card - offset left/right for alternating effect on desktop, centered on mobile */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'} z-10`}>
                  <TimelineItem
                    institution={edu.institution}
                    degree={edu.degree}
                    dates={edu.dates}
                    achievements={edu.achievements}
                    coursework={edu.coursework}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

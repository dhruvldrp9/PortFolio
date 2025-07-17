"use client";
import { motion } from "framer-motion";
import PageBackground from "@/components/layout/page-background";
import { School } from "lucide-react";
import educationData from '../../data/education.json';
const education = educationData.education;
import TimelineItem from "@/components/education/timeline-item";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Education() {
  const isMobile = useIsMobile();
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-2 sm:px-4 py-10 sm:py-16">
        <PageBackground 
          title="Education & Learning Journey" 
          subtitle="Academic background and continuous learning in AI & Cybersecurity"
        />
        <div className={`relative ${isMobile ? 'mt-6' : 'mt-12 sm:mt-24'} flex flex-col items-center`}>
          {/* Timeline visuals only on desktop/laptop */}
          {!isMobile && (
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/40 via-primary/80 to-primary/40 rounded-full shadow-lg z-0 border border-primary/30" style={{ transform: 'translateX(-50%)' }} />
          )}
          <div className={`w-full max-w-9xl flex flex-col gap-8 sm:gap-20 z-10 px-1 sm:px-2 md:px-8`}>
            {education.map((edu, idx) => (
              <div key={edu.id} className={`relative flex ${isMobile ? '' : 'min-h-[180px] sm:min-h-[220px]'}`}>
                {/* Timeline dot only on desktop/laptop */}
                {!isMobile && (
                  <motion.div
                    className={`absolute top-6 sm:top-8 md:top-12 left-1/2 -translate-x-1/2 z-20`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.2 }}
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary shadow-lg flex items-center justify-center ring-2 sm:ring-4 ring-background border border-primary">
                      <School className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                    </div>
                  </motion.div>
                )}
                {/* Timeline card - always full width, no offset on mobile */}
                <div className={`w-full md:w-1/2 ${!isMobile ? (idx % 2 === 0 ? 'md:ml-auto md:pl-8 sm:md:pl-16' : 'md:mr-auto md:pr-8 sm:md:pr-16') : ''} z-10`}> 
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


"use client";
import React from "react";
import { motion } from "framer-motion";
import { AutoCarousel, AutoCarouselItem } from "@/components/ui/auto-carousel";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Award, Star } from "lucide-react";

interface Highlight {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "award" | "achievement" | "project" | "publication";
  icon: React.ReactNode;
}

const highlights: Highlight[] = [
  {
    id: "1",
    title: "Latest AI Research Publication",
    description: "Published a paper on advanced LLM techniques for cybersecurity applications",
    date: "June 2023",
    type: "publication",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    id: "2",
    title: "Secure RAG System",
    description: "Developed a secure retrieval-augmented generation system with encrypted vector storage",
    date: "August 2023",
    type: "project",
    icon: <Star className="h-5 w-5" />,
  },
  {
    id: "3",
    title: "Excellence in Cybersecurity",
    description: "Recognized for innovations in AI-powered threat detection systems",
    date: "October 2023",
    type: "award",
    icon: <Award className="h-5 w-5" />,
  },
  {
    id: "4",
    title: "5,000+ GitHub Stars",
    description: "Open-source security toolkit reached milestone with global developer community",
    date: "January 2024",
    type: "achievement",
    icon: <Clock className="h-5 w-5" />,
  },
];

export default function HighlightsCarousel() {
  return (
    <AutoCarousel interval={4000} className="w-full">
      {highlights.map((highlight) => (
        <AutoCarouselItem key={highlight.id}>
          <motion.div 
            className="border border-border bg-card/80 backdrop-blur-sm rounded-lg p-6 h-full w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start justify-between mb-4">
              <Badge 
                variant={
                  highlight.type === "award" ? "default" : 
                  highlight.type === "achievement" ? "outline" :
                  highlight.type === "project" ? "secondary" : "destructive"
                }
                className="px-3 py-1"
              >
                {highlight.type.charAt(0).toUpperCase() + highlight.type.slice(1)}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center">
                {highlight.icon}
                <span className="ml-2">{highlight.date}</span>
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
            <p className="text-muted-foreground">{highlight.description}</p>
          </motion.div>
        </AutoCarouselItem>
      ))}
    </AutoCarousel>
  );
}

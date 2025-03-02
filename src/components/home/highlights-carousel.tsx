
"use client";
import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample highlights data
const highlights = [
  {
    id: 1,
    title: "Best AI Project Award",
    description: "Recognized for innovative use of generative AI in healthcare",
    date: "March 2024",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Machine Learning Conference Speaker",
    description: "Presented research on advanced language models",
    date: "February 2024",
    icon: "🎤",
  },
  {
    id: 3,
    title: "Open Source Contribution",
    description: "Major contribution to TensorFlow text processing library",
    date: "January 2024",
    icon: "🌟",
  },
  {
    id: 4,
    title: "Cybersecurity Certification",
    description: "Completed advanced penetration testing certification",
    date: "December 2023",
    icon: "🛡️",
  },
  {
    id: 5,
    title: "Research Publication",
    description: "Published paper on AI security vulnerabilities",
    date: "November 2023",
    icon: "📝",
  },
];

const HighlightsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });
  
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const startAutoplay = React.useCallback(() => {
    if (!emblaApi) return;
    
    // Clear existing interval if any
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    
    // Set new interval
    autoplayRef.current = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3000); // 3 seconds interval
  }, [emblaApi]);

  // Setup on mount
  useEffect(() => {
    if (!emblaApi) return;
    
    // Initial setup
    emblaApi.on("select", onSelect);
    startAutoplay();
    
    // Cleanup
    return () => {
      emblaApi.off("select", onSelect);
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, onSelect, startAutoplay]);

  // Restart autoplay after user interaction
  useEffect(() => {
    if (!emblaApi) return;
    
    const handlePointerDown = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
    
    const handlePointerUp = () => {
      startAutoplay();
    };
    
    emblaApi.on("pointerDown", handlePointerDown);
    emblaApi.on("pointerUp", handlePointerUp);
    
    return () => {
      emblaApi.off("pointerDown", handlePointerDown);
      emblaApi.off("pointerUp", handlePointerUp);
    };
  }, [emblaApi, startAutoplay]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {highlights.map((highlight) => (
            <div 
              key={highlight.id} 
              className="flex-shrink-0 flex-grow-0 pl-6 pr-6 w-full sm:w-[350px] md:w-[400px]"
            >
              <motion.div
                className="bg-card p-6 rounded-lg border border-border h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col space-y-3 h-full">
                  <div className="flex justify-between items-start">
                    <span className="text-3xl">{highlight.icon}</span>
                    <span className="text-sm text-muted-foreground">{highlight.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{highlight.title}</h3>
                  <p className="text-muted-foreground flex-grow">{highlight.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {highlights.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className="p-1 focus:outline-none"
            initial={{ opacity: 0.5 }}
            animate={{ 
              opacity: selectedIndex === i ? 1 : 0.5,
              scale: selectedIndex === i ? 1.2 : 1 
            }}
            transition={{ duration: 0.2 }}
          >
            <Circle 
              className={cn(
                "h-2 w-2", 
                selectedIndex === i ? "fill-primary text-primary" : "fill-muted text-muted"
              )} 
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default HighlightsCarousel;

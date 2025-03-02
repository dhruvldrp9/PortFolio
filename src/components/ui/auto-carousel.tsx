
"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";

type AutoCarouselProps = {
  className?: string;
  interval?: number;
  children: React.ReactNode;
};

export const AutoCarousel = ({
  className,
  interval = 5000,
  children,
}: AutoCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [slideCount, setSlideCount] = React.useState(0);

  // Set up auto-sliding
  React.useEffect(() => {
    if (!emblaApi) return;
    
    setSlideCount(emblaApi.slideNodes().length);
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    
    // Auto-sliding effect
    const autoplayTimer = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, interval);
    
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplayTimer);
    };
  }, [emblaApi, interval]);

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      
      {/* Dots indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: slideCount }).map((_, i) => (
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

export const AutoCarouselItem = ({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("min-w-0 flex-shrink-0 flex-grow-0 basis-full", className)}
      {...props}
    />
  );
};

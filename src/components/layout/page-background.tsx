
"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface PageBackgroundProps {
  title: string;
  subtitle?: string;
  imagePath?: string;
}

export default function PageBackground({ title, subtitle, imagePath }: PageBackgroundProps) {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the gradient
    controls.start({
      background: [
        "radial-gradient(circle at 30% 30%, rgba(0, 112, 243, 0.15), rgba(16, 185, 129, 0.05) 60%, transparent 70%)",
        "radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.15), rgba(0, 112, 243, 0.05) 60%, transparent 70%)",
        "radial-gradient(circle at 30% 30%, rgba(0, 112, 243, 0.15), rgba(16, 185, 129, 0.05) 60%, transparent 70%)",
      ],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }
    });
  }, [controls]);

  return (
    <div className="relative w-full">
      <div 
        ref={containerRef} 
        className="relative min-h-[20rem] w-full overflow-hidden rounded-lg mb-8 border border-border/30"
      >
        {/* Background Gradient Animation */}
        <motion.div 
          className="absolute inset-0 z-0" 
          animate={controls}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10" />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        
        {/* Optional Background Image */}
        {imagePath && (
          <div
            className="absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage: `url(${imagePath})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(8px)',
            }}
          />
        )}
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {/* Decorative Elements */}
          <motion.div
            className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full border border-primary/20 flex items-center justify-center opacity-60"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          
          <motion.div
            className="absolute -top-4 -left-4 h-16 w-16 rounded-full border border-accent/20 flex items-center justify-center opacity-60"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  );
}

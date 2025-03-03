"use client";
import { motion } from "framer-motion";
import React from "react";

interface PageBackgroundProps {
  title: string;
  subtitle?: string;
}

export default function PageBackground({ title, subtitle }: PageBackgroundProps) {
  return (
    <div className="relative z-10">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-neural-pattern opacity-10" />
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent px-2">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            {subtitle}
          </p>
        )}
      </motion.div>

      <motion.div
        className="absolute -bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </div>
  );
}
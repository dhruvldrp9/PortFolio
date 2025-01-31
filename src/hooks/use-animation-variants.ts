"use client";
import { useMemo } from "react";

export const useAnimationVariants = () => {
  const containerVariants = useMemo(() => {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    };
  }, []);

  const itemVariants = useMemo(() => {
    return {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
    };
  }, []);

  const itemVariantsWithDelay = (delay: number) => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: delay,
        },
      },
    },
  });

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };
  return {
    containerVariants,
    itemVariants,
    itemVariantsWithDelay,
    sectionVariants,
  };
};

/* eslint-disable @next/next/no-img-element */
"use client";
import { PROFILE, STOCK_IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Brain,
  Network,
  Database,
  Code,
  BrainCircuit,
  FileCode2,
  FileImage,
  Shield,
  ShieldAlert,
  Scale,
  Lock,
  Server,
  Terminal,
} from "lucide-react";
import ProjectCard from "@/components/projects/project-card";
import BlogCard from "@/components/blog/blog-card";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { projects } from "../data/projects.json";
import { posts as blogPosts } from "../data/blog-posts.json";
import Link from "next/link";
import HighlightsCarousel from "@/components/home/highlights-carousel";

export default function Home() {
  const [activeSection, setActiveSection] = useState("ai");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const scaleInVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const slideInVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const aiSkills = [
    {
      title: "Machine Learning",
      icon: BrainCircuit,
      skills: ["Pandas", "Numpy", "Scikit-learn"],
    },
    {
      title: "Deep Learning",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Transformers"],
    },
    {
      title: "Natural Language Processing",
      icon: FileCode2,
      skills: ["AI Agents", "RAG", "Custom Language Models"],
    },
    {
      title: "Computer Vision",
      icon: FileImage,
      skills: ["OpenCV", "Object Detection", "Image Processing"],
    },
  ];

  const cyberSkills = [
    {
      title: "Network Security",
      icon: Network,
      skills: ["Penetration Testing", "Firewall Config", "IDS/IPS"],
    },
    {
      title: "SOC Operations",
      icon: Terminal,
      skills: ["SIEM Tools", "Incident Response", "Threat Monitoring"],
    },
    {
      title: "Threat Intelligence",
      icon: ShieldAlert,
      skills: ["Malware Analysis", "Threat Hunting", "OSINT"],
    },
    {
      title: "Security Compliance",
      icon: Lock,
      skills: ["GDPR", "ISO 27001", "Security Audits"],
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background opacity-80" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-2">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0070f3" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="none" />
              <g fill="none" stroke="url(#grad)" strokeWidth="2">
                <circle cx="400" cy="400" r="200" />
                <circle cx="400" cy="400" r="150" />
                <circle cx="400" cy="400" r="100" />
                <circle cx="400" cy="400" r="50" />
              </g>
              <g fill="none" stroke="url(#grad)" strokeWidth="1">
                <path d="M100,400 L700,400" />
                <path d="M400,100 L400,700" />
                <path d="M150,150 L650,650" />
                <path d="M150,650 L650,150" />
              </g>
            </svg>
          </motion.div>
        </div>

        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-4 relative z-10">
              <motion.div
                className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BrainCircuit className="mr-2 h-5 w-5" />
                <span className="mr-2">{PROFILE.title}</span>
                <Shield className="h-4 w-4" />
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground my-10 py-2"
                  variants={itemVariants}
                >
                  <span className="inline-block text-foreground">
                    {PROFILE.name}
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-muted-foreground max-w-2xl"
                  variants={itemVariants}
                >
                  {PROFILE.bio}
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 relative z-20"
                variants={itemVariants}
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group w-full relative overflow-hidden"
                  >
                    <span className="relative z-10">Get in Touch</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <Network className="ml-2 relative z-10 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size="lg" variant="outline" className="group w-full">
                    View Projects
                    <Database className="ml-2 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div className="flex gap-4" variants={itemVariants}>
                {[
                  { icon: Github, href: PROFILE.github },
                  { icon: Linkedin, href: PROFILE.linkedin },
                  { icon: Mail, href: `mailto:${PROFILE.email}` },
                ].map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-3 text-foreground transition-colors hover:bg-primary hover:text-foreground"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="relative mx-auto w-full max-w-md aspect-square"
              variants={scaleInVariants}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-30 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="relative rounded-full border-4 border-primary/20 p-2 bg-muted/30 backdrop-blur-sm"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={STOCK_IMAGES.profile}
                  alt={PROFILE.name}
                  className="h-full w-full rounded-full object-cover"
                />

                {/* Animated Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                >
                  <Shield className="h-8 w-8 text-primary" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center"
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
                >
                  <Brain className="h-8 w-8 text-accent" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-4 inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Latest Highlights
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Recent achievements, awards, and notable updates
            </motion.p>
          </motion.div>

          {/* Auto-sliding carousel */}
          <div className="max-w-4xl mx-auto">
            <HighlightsCarousel />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-4 inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Dual Expertise in AI & Cybersecurity
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Specialized in developing cutting-edge AI solutions while ensuring
              robust security measures
            </motion.p>

            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                className={`px-6 py-2 rounded-full ${
                  activeSection === "ai"
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground"
                } transition-all duration-300`}
                onClick={() => setActiveSection("ai")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  <BrainCircuit className="mr-2 h-5 w-5" />
                  AI & ML
                </span>
              </motion.button>

              <motion.button
                className={`px-6 py-2 rounded-full ${
                  activeSection === "cyber"
                    ? "bg-accent text-white"
                    : "bg-muted text-muted-foreground"
                } transition-all duration-300`}
                onClick={() => setActiveSection("cyber")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Cybersecurity
                </span>
              </motion.button>
            </div>
          </motion.div>

          <AnimatePresence mode="sync">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {(activeSection === "ai" ? aiSkills : cyberSkills).map(
                (category, index) => (
                  <motion.div
                    key={category.title}
                    className="relative group perspective-1000"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ z: 30 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                    />

                    <motion.div
                      className="p-6 rounded-lg border border-border bg-card transform-style-3d"
                      whileHover={{
                        rotateX: 5,
                        rotateY: 10,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.2,
                        }}
                      >
                        <category.icon className="h-12 w-12 mb-4 text-primary" />
                      </motion.div>

                      <h3 className="text-xl font-semibold mb-4">
                        {category.title}
                      </h3>

                      <ul className="space-y-2">
                        {category.skills.map((skill, idx) => (
                          <motion.li
                            key={skill}
                            className="flex items-center text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                          >
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: idx * 0.3,
                              }}
                              className="mr-2 text-primary"
                            >
                              <Code className="h-4 w-4" />
                            </motion.span>
                            {skill}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                ),
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my latest projects and insights in AI and Cybersecurity
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Projects */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <motion.h3
                  className="text-2xl font-semibold"
                  variants={slideInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Recent Projects
                </motion.h3>
                <motion.div
                  variants={slideInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link href="/projects">
                    <Button variant="ghost" className="group">
                      View All
                      <Code className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
              
              {/* Projects Slider - Auto-scrolling Left to Right */}
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="carousel-container">
                  <motion.div
                    className="flex items-center py-4 px-2 pb-6 carousel-track"
                    animate={{ 
                      x: ["-50%", "0%"], 
                    }}
                    transition={{ 
                      x: {
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear"
                      }
                    }}
                  >
                    {/* First set of projects */}
                    {projects?.slice(0, 6).map((project, index) => (
                      <motion.div
                        key={`${project.id}-1-${index}`}
                        className="w-[300px] sm:w-[350px] mx-6 flex-shrink-0"
                        whileHover={{ 
                          scale: 1.03, 
                          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
                          transition: { duration: 0.2 } 
                        }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                    
                    {/* Duplicated set for continuous effect */}
                    {projects?.slice(0, 6).map((project, index) => (
                      <motion.div
                        key={`${project.id}-2-${index}`}
                        className="w-[300px] sm:w-[350px] mx-6 flex-shrink-0"
                        whileHover={{ 
                          scale: 1.03, 
                          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
                          transition: { duration: 0.2 } 
                        }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Blog Posts */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <motion.h3
                  className="text-2xl font-semibold"
                  variants={slideInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Latest Articles
                </motion.h3>
                <motion.div
                  variants={slideInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link href="/blog">
                    <Button variant="ghost" className="group">
                      Read More
                      <Code className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
              
              {/* Articles Slider - Auto-scrolling Right to Left */}
              <motion.div
                className="overflow-hidden rounded-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="carousel-container">
                  <motion.div
                    className="flex items-center py-4 px-2 pb-6 carousel-track"
                    animate={{ 
                      x: ["0%", "-50%"], 
                    }}
                    transition={{ 
                      x: {
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear"
                      } 
                    }}
                  >
                    {/* First set of articles */}
                    {blogPosts?.slice(0, 6).map((post, index) => (
                      <motion.div
                        key={`${post.id}-1-${index}`}
                        className="w-[300px] sm:w-[350px] mx-6 flex-shrink-0"
                        whileHover={{ 
                          scale: 1.03, 
                          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
                          transition: { duration: 0.2 } 
                        }}
                      >
                        <BlogCard post={post} />
                      </motion.div>
                    ))}
                    
                    {/* Duplicated set for continuous effect */}
                    {blogPosts?.slice(0, 6).map((post, index) => (
                      <motion.div
                        key={`${post.id}-2-${index}`}
                        className="w-[300px] sm:w-[350px] mx-6 flex-shrink-0"
                        whileHover={{ 
                          scale: 1.03, 
                          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
                          transition: { duration: 0.2 } 
                        }}
                      >
                        <BlogCard post={post} />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
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
} from "lucide-react";
import ProjectCard from "@/components/projects/project-card";
import BlogCard from "@/components/blog/blog-card";
import { motion } from "framer-motion";
import React from "react";
import { projects } from "../data/projects.json";
import { posts as blogPosts } from "../data/blog-posts.json";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-5" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center py-20">
          <motion.div
            className="grid gap-16 md:grid-cols-2 md:items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="space-y-8 relative z-10"
              variants={itemVariants}
            >
              <motion.div
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BrainCircuit className="mr-2 h-5 w-5" />
                {PROFILE.title}
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent"
                  variants={itemVariants}
                >
                  {PROFILE.name}
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
                  <Button size="lg" className="group w-full">
                    Get in Touch
                    <Network className="ml-2 transition-transform group-hover:scale-110" />
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
                    className="rounded-full bg-primary/10 p-3 text-primary transition-colors hover:bg-primary/20"
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
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-md aspect-square"
              variants={itemVariants}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-30 blur-3xl" />
              <motion.div
                className="relative rounded-full border-4 border-primary/20 p-2"
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
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">AI & ML Expertise</h2>
            <p className="text-muted-foreground max-w-2xl">
              Specialized in developing cutting-edge AI solutions with a focus
              on scalability and innovation
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Machine Learning",
                icon: Network,
                skills: ["TensorFlow", "PyTorch", "Scikit-learn"],
              },
              {
                title: "Deep Learning",
                icon: Brain,
                skills: ["Neural Networks", "CNN", "Transformers"],
              },
              {
                title: "Computer Vision",
                icon: Code,
                skills: ["OpenCV", "Object Detection", "Image Processing"],
              },
              {
                title: "MLOps",
                icon: Database,
                skills: ["CI/CD", "Model Monitoring", "Deployment"],
              },
              {
                title: "MLOps",
                icon: Database,
                skills: ["CI/CD", "Model Monitoring", "Deployment"],
              },
              {
                title: "MLOps",
                icon: Database,
                skills: ["CI/CD", "Model Monitoring", "Deployment"],
              },
              {
                title: "MLOps",
                icon: Database,
                skills: ["CI/CD", "Model Monitoring", "Deployment"],
              },
              {
                title: "MLOps",
                icon: Database,
                skills: ["CI/CD", "Model Monitoring", "Deployment"],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-6 rounded-lg border bg-card">
                  <category.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center text-muted-foreground"
                      >
                        <Code className="h-4 w-4 mr-2 text-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore my latest projects and insights in AI and machine learning
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Projects */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold">Recent Projects</h3>
                <Link href="/projects">
                  <Button variant="ghost" className="group">
                    View All
                    <Code className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects?.slice(0, 3).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Blog Posts */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold">Latest Articles</h3>
                <Link href="/blog">
                  <Button variant="ghost" className="group">
                    Read More
                    <Code className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts?.slice(0, 3).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import BlogCard from "@/components/blog/blog-card";
import ProjectCard from "@/components/projects/project-card";
import blogPostsData from "@/data/blog-posts.json";
import PageBackground from "@/components/layout/page-background";

export default function Home() {
  // Access blog posts data
  const blogPosts = Array.isArray(blogPostsData) ? blogPostsData : [];

  // Get latest 2 blog posts
  const latestBlogPosts = blogPosts.slice(0, 2);

  return (
    <div className="bg-background min-h-screen">
      <PageBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Cybersecurity Expert & AI Enthusiast
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              Specializing in securing digital infrastructures and leveraging AI 
              to solve complex security challenges.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects">
                <Button size="lg" className="rounded-md">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-md">
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
              <p className="text-muted-foreground">Insights and thoughts on cybersecurity and AI</p>
            </div>

            <Link href="/blog">
              <Button variant="ghost" className="group">
                View All
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestBlogPosts.length > 0 ? (
              latestBlogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12 bg-card/30 backdrop-blur-sm rounded-lg">
                <p>No blog posts available</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
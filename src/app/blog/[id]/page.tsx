/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageBackground from "@/components/layout/page-background";
import { motion } from "framer-motion";
import blogPostsData from "@/data/blog-posts.json";

export default function BlogPostPage({ params }: any) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the post with the matching ID from the imported data
    const postId = parseInt(params.id);
    const posts = Array.isArray(blogPostsData) ? blogPostsData : [];
    const foundPost = posts.find((p) => p.id === postId);

    if (foundPost) {
      setPost(foundPost);
    }

    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading article...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link href="/blog">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#181818] to-[#000000]">
      <PageBackground title={""} />

      <div className="container mx-auto pt-10 sm:pt-16 md:pt-24 pb-8 sm:pb-12 md:pb-16 px-2 sm:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 sm:mb-6 md:mb-8">
            <Link href="/blog">
              <Button
                variant="ghost"
                className="group mb-2 sm:mb-4 text-xs sm:text-sm md:text-base"
              >
                <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Button>
            </Link>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4 md:mb-6">
              <span className="flex items-center">
                <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                {post.created_at}
              </span>
              <span className="flex items-center">
                <Clock className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                {post.reading_time} min read
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6">
              {post.title}
            </h1>

            <div className="inline-block bg-primary/10 text-primary text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full mb-4 sm:mb-8">
              {post.category}
            </div>
          </div>

          <div className="prose prose-xs sm:prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-full text-gray-300">
            {post.content
              .split("\n\n")
              .map((paragraph: string, index: number) => (
                <p key={index} className="mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                  {paragraph}
                </p>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageBackground from "@/components/layout/page-background";
import { motion } from "framer-motion";
import blogPostsData from "@/data/blog-posts.json";

export default function BlogPostPage({ params }: { params: { id: string } }) {
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
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <PageBackground />

      <div className="container mx-auto pt-24 pb-16 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="group mb-4">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Button>
            </Link>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {post.created_at}
              </span>
              <span className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {post.reading_time} min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-8">
              {post.category}
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-full text-gray-400">
            {post.content
              .split("\n\n")
              .map((paragraph: string, index: number) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

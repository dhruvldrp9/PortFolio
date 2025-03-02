"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import PageBackground from "@/components/layout/page-background";
import { Button } from "@/components/ui/button";
import blogPosts from "@/data/blog-posts.json";
import Link from "next/link";

export default function BlogPostPage() {
  const params = useParams();
  const id = params.id as string;
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // Find the post with the matching ID
    const foundPost = blogPosts.find(post => post.id.toString() === id);
    setPost(foundPost);
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground relative flex items-center justify-center">
        <PageBackground />
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Loading article...</h1>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground relative flex items-center justify-center">
        <PageBackground />
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <PageBackground />

      <article className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Button>
            </Link>

            <div className="flex items-center mb-6 space-x-4">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary">
                <Tag className="w-4 h-4 mr-1" />
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="text-sm text-muted-foreground flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.reading_time} min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="mb-6 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
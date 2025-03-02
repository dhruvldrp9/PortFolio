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
          <h1 className="text-3xl font-bold mb-4">Loading blog post...</h1>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground relative flex items-center justify-center">
        <PageBackground />
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <div className="flex items-center mb-4 text-sm text-muted-foreground">
              <div className="flex items-center mr-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center mr-4">
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.reading_time} min read</span>
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-1" />
                <span>{post.category}</span>
              </div>
            </div>


            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="prose dark:prose-invert lg:prose-lg max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:my-6 prose-headings:text-foreground prose-a:text-primary">
              {post.content.split('\n\n').map((paragraph, idx) => {
                // Check if paragraph is a heading
                if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-2xl font-bold mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                // Check if paragraph is a subheading
                if (paragraph.startsWith('### ')) {
                  return <h3 key={idx} className="text-xl font-semibold mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
                }
                return <p key={idx} className="text-foreground/90">{paragraph}</p>;
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
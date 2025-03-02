"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import PageBackground from "@/components/layout/page-background";
import { Button } from "@/components/ui/button";
import blogPosts from "@/data/blog-posts.json";
import Link from "next/link";
import {useEffect, useState} from "react"; //Import from original file


export default function BlogPostPage() {
  const params = useParams();
  const id = params.id as string;

  const post = blogPosts.find(post => post.id === id);

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

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center">
                <Tag className="mr-1 h-3 w-3" />
                {post.category}
              </span>
              <span className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-sm flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {post.date}
              </span>
              <span className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-sm flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {post.readTime}
              </span>
            </div>

            {post.image && (
              <div className="mb-10 rounded-xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
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

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    reading_time: number;
    created_at: string;
    image?: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-neutral-900/80">
        <CardContent className="pt-6 px-6">
          <div className="flex items-center mb-3">
            <Tag className="w-4 h-4 mr-1 text-primary" />
            <span className="text-xs text-primary font-medium">{post.category}</span>
          </div>
          <h3 className="font-bold text-2xl mb-3 text-foreground">{post.title}</h3>
          <p className="text-foreground/90 line-clamp-4 text-base leading-relaxed">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between text-xs text-muted-foreground pt-0">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            <span>{post.reading_time} min read</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

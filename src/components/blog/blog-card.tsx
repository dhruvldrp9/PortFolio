
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
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
        <div className="overflow-hidden h-48">
          <img
            src={post.image || "/attached_assets/GoogleMeetBot.jpeg"}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="pt-6">
          <div className="flex items-center mb-2">
            <Tag className="w-4 h-4 mr-1 text-primary" />
            <span className="text-xs text-primary font-medium">{post.category}</span>
          </div>
          <h3 className="font-bold text-xl mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
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


import React from "react";
import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  created_at: string;
  reading_time: number;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group border-muted/60 bg-card/40 backdrop-blur-sm hover:bg-card/60">
        <CardContent className="p-6">
          <div className="flex items-center mb-3 gap-2">
            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs bg-primary/10 text-primary">
              <Tag className="w-3 h-3 mr-1" />
              {post.category}
            </span>
            <span className="text-sm text-muted-foreground flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {post.reading_time} min read
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {post.title}
            <ArrowUpRight className="w-4 h-4 inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
          
          <div className="mt-4 text-sm text-muted-foreground">
            <Calendar className="w-3 h-3 inline mr-1" />
            {new Date(post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

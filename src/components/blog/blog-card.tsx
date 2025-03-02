
import React from "react";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
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

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.id}`} className="block h-full">
      <Card className="overflow-hidden h-full border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded">
              {post.category}
            </span>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{post.created_at}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex justify-between items-center pt-3 border-t border-border/50">
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="w-3 h-3 mr-1" />
              <span>{post.reading_time} min read</span>
            </div>
            <motion.div 
              className="text-primary"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;

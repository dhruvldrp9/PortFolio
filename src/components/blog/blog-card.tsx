
import React from "react";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image?: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm h-full flex flex-col group transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
      <Link href={`/blog/${post.id}`} className="flex flex-col h-full">
        <div className="h-48 sm:h-56 w-full overflow-hidden rounded-t-lg">
          <img
            src={post.image || "/attached_assets/GoogleMeetBot.jpeg"}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="p-5">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {post.readTime}
            </div>
          </div>
          <CardTitle className="line-clamp-2 text-xl font-bold">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-3 mt-2">
            {post.excerpt}
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto p-5 pt-0">
          <span className="text-primary font-medium text-sm group-hover:underline">
            Read more
          </span>
        </CardFooter>
      </Link>
    </Card>
  );
}

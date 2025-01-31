/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  post: any;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge>{post.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              {post.reading_time} min read
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl">{post.title}</CardTitle>
          <CardDescription className="mt-2 line-clamp-3">
            {post.content}
          </CardDescription>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag: any) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

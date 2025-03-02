
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Tag } from "lucide-react";

interface BlogCardProps {
  post: any;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });

  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm h-full flex flex-col group transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
        <CardHeader className="p-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              {post.category}
            </Badge>
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              {post.reading_time} min read
            </div>
          </div>
          <CardTitle className="line-clamp-2 text-xl font-bold group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-5 py-0 flex-grow">
          <CardDescription className="line-clamp-3 text-muted-foreground">
            {post.content.substring(0, 150)}...
          </CardDescription>
        </CardContent>
        <CardFooter className="p-5 flex justify-between items-center">
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            {formattedDate}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 2).map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {post.tags.length > 2 && (
                <Badge variant="secondary" className="text-xs">
                  +{post.tags.length - 2}
                </Badge>
              )}
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}

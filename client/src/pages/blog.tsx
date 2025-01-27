import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/blog/blog-card";
import { Skeleton } from "@/components/ui/skeleton";
import Heading from "@/components/ui/heading";
import type { BlogPost } from "@db/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Heading>Blog</Heading>
      {isLoading ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-[300px] rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
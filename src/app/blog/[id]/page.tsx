
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageBackground from "@/components/layout/page-background";
import { posts } from "../../../data/blog-posts.json";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      if (id) {
        // Find the current post
        const currentPost = posts.find((p) => p.id && p.id.toString() === id.toString());
        
        if (currentPost) {
          setPost(currentPost);
          
          // Find related posts (same category, excluding current)
          const related = posts
            .filter(
              (p) => 
                p.id && p.id.toString() !== id.toString() && 
                p.category === currentPost.category
            )
            .slice(0, 3);
            
          setRelatedPosts(related);
        }
      }
    } catch (error) {
      console.error("Error loading post:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been removed.</p>
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

  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <PageBackground title={post.title} subtitle={`${post.category} • ${formattedDate}`} />

        <div className="mt-12">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Button>
          </Link>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* Main Content */}
              <div className="border border-border/50 rounded-lg overflow-hidden bg-card/60 backdrop-blur-sm">
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="mr-1 h-4 w-4" />
                      {post.reading_time} min read
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="mr-1 h-4 w-4" />
                      {formattedDate}
                    </div>
                  </div>

                  <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
                  
                  <div className="prose prose-lg prose-invert max-w-none">
                    {post.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4 text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border/40">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <section className="border border-border/50 rounded-lg p-6 bg-card/60 backdrop-blur-sm sticky top-24">
                  <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="border-b border-border/30 pb-4 last:border-0 last:pb-0">
                        <Link href={`/blog/${relatedPost.id}`} className="hover:text-primary transition-colors">
                          <h4 className="font-medium mb-1">{relatedPost.title}</h4>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Clock className="mr-1 h-3 w-3" />
                            {relatedPost.reading_time} min read
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

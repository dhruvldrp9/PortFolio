"use client";

import React, { useState } from "react";
import PageBackground from "@/components/layout/page-background";
import BlogCard from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, Filter, Search, Tag } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Import blog posts data
import blogPostsData from "@/data/blog-posts.json";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["AI", "Cybersecurity"]; // Placeholder category data

  // Access posts directly from blog-posts.json - it's an array
  const posts = Array.isArray(blogPostsData) ? blogPostsData : [];

  // Filter posts based on search and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <PageBackground />

      <div className="container mx-auto pt-24 pb-16 px-4 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-center md:text-left">Blog</h1>
          <p className="text-muted-foreground text-center md:text-left">
            Thoughts, insights, and perspectives on technology
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                className="pl-10 bg-background/50"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                <Filter className="w-4 h-4 mr-2" />
                All
              </Button>

              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2"> {/* Changed to use grid for mobile */}
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card/30 backdrop-blur-sm rounded-lg">
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
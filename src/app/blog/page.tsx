"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageBackground from "@/components/layout/page-background";
import BlogCard from "@/components/blog/blog-card";
import { Button, Input } from "@/components/ui/button"; // Assuming Button and Input are in the same directory. Adjust as needed.
import { Book, Filter, Search, Tag } from "lucide-react";

const categories = ["AI", "Cybersecurity"]; // Placeholder category data

const posts = [
  // Placeholder blog post data.  Replace with your actual data.
  { id: 1, title: "AI Ethics", category: "AI", content: "Sample AI Ethics content" },
  { id: 2, title: "Cybersecurity Threats", category: "Cybersecurity", content: "Sample Cybersecurity content" },
  { id: 3, title: "Machine Learning", category: "AI", content: "Sample Machine Learning content" },
  { id: 4, title: "Data Privacy", category: "Cybersecurity", content: "Sample Data Privacy content" }
];


export default function Blog() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = filter === "all" || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <PageBackground
          title="Articles & Insights"
          subtitle="Thoughts and explorations in AI, cybersecurity, and technology"
        />

        <div className="mt-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
            <div>
              <h2 className="text-3xl font-bold">Latest Articles</h2>
              <p className="text-muted-foreground mt-2">
                Explore my thoughts and insights on AI and Cybersecurity
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 w-full sm:w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
                className="rounded-full"
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <Book className="h-16 w-16 mx-auto text-muted-foreground opacity-30" />
              <h3 className="text-xl font-medium mt-4">No articles found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setFilter("all");
                  setSearchQuery("");
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
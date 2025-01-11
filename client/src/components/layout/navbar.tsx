import { Link, useLocation } from "wouter";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Brain, Cpu } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <motion.a 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="rounded-lg bg-accent/10 p-2 text-accent"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                backgroundColor: "rgb(0, 188, 212)",
                color: "#102235",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <Brain className="h-6 w-6" />
                <Cpu className="absolute -bottom-1 -right-1 h-4 w-4 text-foreground" />
              </div>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-accent via-foreground to-foreground/90 bg-clip-text text-transparent">
              AI Engineer
            </span>
          </motion.a>
        </Link>
        <div className="flex gap-6">
          {NAVIGATION_ITEMS.map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.a
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-foreground",
                  location === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {location === item.path && (
                  <motion.div
                    className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-accent"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", bounce: 0.25 }}
                  />
                )}
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
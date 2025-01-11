import { Link, useLocation } from "wouter";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/">
          <motion.a 
            className="mr-8 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl font-bold">Portfolio</span>
          </motion.a>
        </Link>
        <div className="flex gap-6">
          {NAVIGATION_ITEMS.map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.a
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  location === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {location === item.path && (
                  <motion.div
                    className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-primary"
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
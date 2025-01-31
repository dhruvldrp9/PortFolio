"use client";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Brain, Cpu, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 ml-4">
            <Link href="/">
              <Button variant="link" className="p-0">
                <motion.div
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
                </motion.div>
              </Button>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:ml-auto">
            <div className="flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item, index) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-foreground",
                    pathname === item.path
                      ? "text-foreground"
                      : "text-muted-foreground",
                    index === NAVIGATION_ITEMS.length - 1 ? "mr-4" : ""
                  )}
                >
                  <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                    {item.label}
                    {pathname === item.path && (
                      <motion.div
                        className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-accent"
                        layoutId="navbar-indicator"
                        transition={{ type: "spring", bounce: 0.25 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-lg font-medium",
                          pathname === item.path
                            ? "bg-accent/10 text-foreground"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

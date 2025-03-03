"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PageBackground from "@/components/layout/page-background";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, User, Github, Linkedin, ArrowRight, ExternalLink } from "lucide-react";
import { PROFILE } from "@/lib/constants";

export default function Contact() {
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send me an email directly",
      action: `mailto:${PROFILE.email}`,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me on LinkedIn",
      action: PROFILE.linkedin,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my projects and code",
      action: PROFILE.github,
      color: "text-gray-800 dark:text-gray-200",
      bgColor: "bg-gray-800/10 dark:bg-gray-200/10",
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <PageBackground
          title="Get in Touch"
          subtitle="Connect with me through any of these channels"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16"
        >
          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground">
              I'm always open to new opportunities, collaborations, or just a friendly chat about AI and cybersecurity.
              Feel free to reach out through any of the channels below.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Card className={`h-full border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-full ${method.bgColor} flex items-center justify-center mb-4`}>
                      <method.icon className={`h-6 w-6 ${method.color}`} />
                    </div>
                    <h3 className="text-xl font-medium mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{method.description}</p>
                    <a 
                      href={method.action} 
                      target={method.title !== "Email" ? "_blank" : undefined}
                      rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      Connect
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 max-w-3xl mx-auto text-center bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Response Time</h3>
            <p className="text-muted-foreground">
              I typically respond to messages within 24-48 hours. For urgent matters, 
              email is usually the fastest way to reach me.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
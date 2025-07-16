"use client";
import { motion } from "framer-motion";
import PageBackground from "@/components/layout/page-background";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
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
      color: "text-foreground",
      bgColor: "bg-muted",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me on LinkedIn",
      action: PROFILE.linkedin,
      color: "text-foreground",
      bgColor: "bg-muted",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my projects and code",
      action: PROFILE.github,
      color: "text-foreground",
      bgColor: "bg-muted",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-2 sm:px-4 py-10 sm:py-16">
        <PageBackground
          title="Get in Touch"
          subtitle="Connect with me through any of these channels"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 sm:mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">{`Let's Connect`}</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              {`I'm always open to new opportunities, collaborations, or just a
              friendly chat about AI and cybersecurity. Feel free to reach out
              through any of the channels below.`}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid gap-4 sm:gap-6 md:grid-cols-3 max-w-4xl mx-auto"
          >
            {contactMethods.map((method) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Card
                  className={`h-full border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div
                      className={`w-12 h-12 rounded-full ${method.bgColor} flex items-center justify-center mb-4`}
                    >
                      <method.icon className={`h-6 w-6 ${method.color}`} />
                    </div>
                    <h3 className="text-xl font-medium mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {method.description}
                    </p>
                    <a
                      href={method.action}
                      target={method.title !== "Email" ? "_blank" : undefined}
                      rel={
                        method.title !== "Email"
                          ? "noopener noreferrer"
                          : undefined
                      }
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
            className="mt-10 sm:mt-16 max-w-3xl mx-auto text-center bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-4 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Response Time</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              I typically respond to messages within 24-48 hours. For urgent
              matters, email is usually the fastest way to reach me.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

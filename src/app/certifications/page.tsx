"use client";
import { motion } from "framer-motion";
import PageBackground from "@/components/layout/page-background";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Shield, Brain } from "lucide-react";
import { certifications } from "../../data/certifications.json";

export default function Certifications() {
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
          title="Certifications & Credentials"
          subtitle="Professional qualifications in AI and cybersecurity"
        />

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {certifications.map((cert, index) => {
            const isAI = cert.name.toLowerCase().includes("ai") || 
                         cert.name.toLowerCase().includes("machine learning") || 
                         cert.name.toLowerCase().includes("data");

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader className="border-b border-border/50 bg-muted/30 flex items-center gap-3 p-4">
                    <div className={`rounded-full ${isAI ? "bg-primary/10" : "bg-accent/10"} p-2`}>
                      {isAI ? (
                        <Brain className="h-5 w-5 text-primary" />
                      ) : (
                        <Shield className="h-5 w-5 text-accent" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium line-clamp-1">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.organization}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5">
                    <p className="text-muted-foreground text-sm mb-3 flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {new Date(cert.date_achieved).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-3">{cert.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 border-t border-border/50 bg-muted/10">
                    <a href={cert.verification_url} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full group" size="sm">
                        <span>Verify</span>
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
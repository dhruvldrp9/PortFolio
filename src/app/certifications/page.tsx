"use client";
import { motion } from "framer-motion";
import PageBackground from "@/components/layout/page-background";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Calendar, 
  ExternalLink, 
  Shield, 
  Brain, 
  Database, 
  Globe 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CERTIFICATIONS = [
  {
    title: "AI Engineering and Large Language Models",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "/ai-cert.png",
    type: "AI",
    description: "Advanced concepts in LLM development, fine-tuning, and deployment strategies",
    link: "#"
  },
  {
    title: "TensorFlow Developer Certification",
    issuer: "Google",
    date: "2022",
    image: "/tensorflow-cert.png",
    type: "AI",
    description: "Building and deploying machine learning models using TensorFlow",
    link: "#"
  },
  {
    title: "Certified Information Systems Security Professional (CISSP)",
    issuer: "ISC²",
    date: "2023",
    image: "/cissp-cert.png",
    type: "Security",
    description: "Industry-leading certification for information security professionals",
    link: "#"
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2022",
    image: "/ceh-cert.png",
    type: "Security",
    description: "Advanced skills in ethical hacking, penetration testing, and security assessments",
    link: "#"
  },
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    image: "/azure-ai-cert.png",
    type: "AI",
    description: "AI concepts, Azure services for machine learning and cognitive services",
    link: "#"
  },
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2021",
    image: "/security-plus-cert.png",
    type: "Security",
    description: "Foundational cybersecurity skills with emphasis on hands-on practical security",
    link: "#"
  }
];

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
          subtitle="Professional qualifications and industry certifications"
        />

        <motion.div 
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants} 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardHeader className="relative pb-0">
                  <div className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium bg-muted/80 backdrop-blur-sm">
                    {cert.type === "AI" ? (
                      <span className="flex items-center text-primary">
                        <Brain className="mr-1 h-3 w-3" />
                        AI & ML
                      </span>
                    ) : (
                      <span className="flex items-center text-accent">
                        <Shield className="mr-1 h-3 w-3" />
                        Security
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center py-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {cert.type === "AI" ? (
                        <Brain className="h-8 w-8 text-primary" />
                      ) : (
                        <Shield className="h-8 w-8 text-accent" />
                      )}
                    </div>
                  </div>
                  <h3 className="text-center text-lg font-semibold leading-tight">{cert.title}</h3>
                  <div className="mt-2 flex items-center justify-center text-sm text-muted-foreground">
                    <Globe className="mr-2 h-4 w-4" />
                    {cert.issuer}
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  <div className="mt-4 inline-flex items-center text-xs text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    Issued: {cert.date}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full" size="sm">
                    <Link href={cert.link} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Credential
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
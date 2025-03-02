import CertCard from "@/components/certifications/cert-card";
import { Skeleton } from "@/components/ui/skeleton";
import Heading from "@/components/ui/heading";
import { certifications } from "../../data/certifications.json";

export default function Certifications() {
  const isLoading = false;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Heading>Certifications</Heading>
      {isLoading ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-[200px] rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications?.map((cert) => (
            <CertCard key={cert.id} certification={cert} />
          ))}
        </div>
      )}
    </div>
  );
}
"use client";
import { motion } from "framer-motion";
import PageBackground from "@/components/layout/page-background";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, CheckCircle, ExternalLink, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "AI Engineering Professional",
    issuer: "DeepLearning.AI",
    date: "2023",
    description: "Advanced course covering all aspects of developing and deploying AI systems at scale.",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    category: "AI",
    url: "#"
  },
  {
    id: 2,
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2022",
    description: "Professional certification for security professionals focusing on ethical hacking techniques.",
    skills: ["Penetration Testing", "Vulnerability Assessment", "Security Tools"],
    category: "Cybersecurity",
    url: "#"
  },
  {
    id: 3,
    title: "Offensive Security Certified Professional (OSCP)",
    issuer: "Offensive Security",
    date: "2022",
    description: "Hands-on penetration testing certification requiring demonstration of skills in a lab environment.",
    skills: ["Penetration Testing", "Exploit Development", "Network Security"],
    category: "Cybersecurity",
    url: "#"
  },
  {
    id: 4,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2021",
    description: "Certification validating expertise in using TensorFlow to solve deep learning problems.",
    skills: ["TensorFlow", "Neural Networks", "Computer Vision", "NLP"],
    category: "AI",
    url: "#"
  },
  {
    id: 5,
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2020",
    description: "Foundation-level security certification covering network security, compliance, and operation security.",
    skills: ["Network Security", "Threat Management", "Cryptography"],
    category: "Cybersecurity",
    url: "#"
  },
  {
    id: 6,
    title: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "2021",
    description: "Certification for designing and implementing AI solutions on Microsoft Azure.",
    skills: ["Azure Cognitive Services", "Machine Learning", "Bot Framework"],
    category: "AI",
    url: "#"
  },
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

  // Group certifications by category
  const groupedCertifications = CERTIFICATIONS.reduce((acc, cert) => {
    acc[cert.category] = acc[cert.category] || [];
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, typeof CERTIFICATIONS>);

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <PageBackground 
          title="Certifications & Achievements" 
          subtitle="Professional credentials validating expertise in AI and Cybersecurity"
        />
        
        <motion.div
          className="mt-16 space-y-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {Object.entries(groupedCertifications).map(([category, certifications]) => (
            <motion.div key={category} variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                {category === "AI" ? (
                  <Award className="mr-2 h-6 w-6 text-primary" />
                ) : (
                  <Shield className="mr-2 h-6 w-6 text-accent" />
                )}
                <span className={category === "AI" ? "text-primary" : "text-accent"}>
                  {category} Certifications
                </span>
              </h2>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    variants={itemVariants}
                  >
                    <Card className="h-full border border-border/50 bg-card/60 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="rounded-full bg-primary/10 p-2">
                            {category === "AI" ? (
                              <Award className="h-5 w-5 text-primary" />
                            ) : (
                              <Shield className="h-5 w-5 text-accent" />
                            )}
                          </div>
                          <Badge variant="outline" className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {cert.date}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-medium">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground mb-4">{cert.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {cert.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="flex items-center">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" asChild className="w-full">
                          <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            View Certificate
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

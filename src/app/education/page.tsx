"use client";
import { motion } from "framer-motion";
import PageBackground from "@/components/layout/page-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Calendar, BookOpen, Award } from "lucide-react";
import { education } from "../../data/education.json";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          title="Education & Learning Journey" 
          subtitle="Academic background and continuous learning in AI & Cybersecurity"
        />

        <motion.div
          className="mt-16 grid gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader className="flex flex-row items-center gap-4 border-b border-border/50 bg-muted/30">
                  <div className="rounded-full bg-primary/10 p-3">
                    <School className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{edu.institution}</CardTitle>
                    <p className="text-muted-foreground flex items-center mt-1">
                      <Calendar className="mr-2 h-4 w-4" />
                      {edu.dates}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-8 p-6 md:grid-cols-2">
                  <div>
                    <h3 className="flex items-center text-lg font-medium mb-4">
                      <BookOpen className="mr-2 h-5 w-5 text-primary" />
                      Degree
                    </h3>
                    <p className="text-muted-foreground">{edu.degree}</p>

                    <h3 className="flex items-center text-lg font-medium mb-4 mt-6">
                      <Award className="mr-2 h-5 w-5 text-primary" />
                      Achievements
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-primary">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="flex items-center text-lg font-medium mb-4">
                      <BookOpen className="mr-2 h-5 w-5 text-primary" />
                      Key Coursework
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {edu.coursework.map((course, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-primary">•</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
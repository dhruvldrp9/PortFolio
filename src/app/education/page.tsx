import { education } from "../../data/education.json";
import TimelineItem from "@/components/education/timeline-item";
import Heading from "@/components/ui/heading";

export default function Education() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <Heading>Education</Heading>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-8" />
          {education.map((item) => (
            <TimelineItem
              key={item.institution}
              institution={item.institution}
              degree={item.degree}
              dates={item.dates}
              achievements={item.achievements}
              coursework={item.coursework}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";
import { motion } from "framer-motion";
import PageBackground from "@/components/layout/page-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Calendar, Dices, Lightbulb, School, Trophy } from "lucide-react";

const EDUCATION = [
  {
    institution: "University of Technology",
    degree: "Master of Science in Artificial Intelligence",
    dates: "2018 - 2020",
    achievements: [
      "Published research on Deep Reinforcement Learning",
      "Best Thesis Award in AI Applications"
    ],
    coursework: [
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Reinforcement Learning"
    ]
  },
  {
    institution: "Tech College",
    degree: "Bachelor of Computer Science",
    dates: "2014 - 2018",
    achievements: [
      "AI/ML Research Assistant",
      "Published paper on Neural Networks"
    ],
    coursework: [
      "Machine Learning Fundamentals",
      "Statistical Learning",
      "Python for Data Science",
      "Mathematics for ML"
    ]
  }
];

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
          {EDUCATION.map((edu, index) => (
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
                      <Brain className="mr-2 h-5 w-5 text-primary" />
                      Degree
                    </h3>
                    <p className="text-foreground">{edu.degree}</p>
                    
                    <h3 className="flex items-center text-lg font-medium mt-6 mb-4">
                      <Trophy className="mr-2 h-5 w-5 text-accent" />
                      Achievements
                    </h3>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + 0.5 }}
                        >
                          <Lightbulb className="mr-2 h-5 w-5 text-accent/70 mt-0.5" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="flex items-center text-lg font-medium mb-4">
                      <Dices className="mr-2 h-5 w-5 text-primary" />
                      Key Coursework
                    </h3>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {edu.coursework.map((course, i) => (
                        <motion.div 
                          key={i}
                          className="flex items-center rounded-md bg-primary/5 px-3 py-2"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 + 0.5 }}
                          whileHover={{ scale: 1.03 }}
                        >
                          <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                          {course}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          {/* Continuous Learning Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Continuous Learning
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Self-Study",
                  description: "Keeping up with the latest research papers and developments in AI and cybersecurity through dedicated self-study."
                },
                {
                  title: "Professional Courses",
                  description: "Regularly completing courses on platforms like Coursera, edX and specialized training programs for continuous professional development."
                },
                {
                  title: "Workshops & Conferences",
                  description: "Attending industry workshops and conferences to network with peers and learn about emerging trends and technologies."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm p-6 transition-all hover:shadow-lg hover:shadow-primary/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

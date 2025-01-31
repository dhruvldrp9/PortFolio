/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import TiltCard from "@/components/ui/tilt-card";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <Link href={`/projects/${project.id}`}>
      <TiltCard>
        <Card className="group relative h-full cursor-pointer overflow-hidden">
          <div className="relative">
            <CardHeader className="p-0">
              <motion.div
                style={{ transformStyle: "preserve-3d" }}
                className="relative"
              >
                <motion.img
                  src={project.image_url}
                  alt={project.title}
                  className="aspect-video w-full rounded-t-lg object-cover"
                  style={{ transform: "translateZ(20px)" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <p className="absolute bottom-6 text-sm font-medium text-foreground">
                    {project.description}
                  </p>
                </motion.div>
              </motion.div>
            </CardHeader>
          </div>
          <CardContent className="p-6">
            <CardTitle className="text-xl font-semibold">
              {project.title}
            </CardTitle>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.split(",").map((tech: any) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="transform-gpu transition-transform hover:scale-110"
                >
                  {tech.trim()}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </TiltCard>
    </Link>
  );
}

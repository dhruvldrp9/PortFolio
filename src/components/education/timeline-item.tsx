import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  institution: string;
  degree: string;
  dates: string;
  achievements: string[];
  coursework: string[];
}

export default function TimelineItem({
  institution,
  degree,
  dates,
  achievements,
  coursework,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
      whileHover={{ scale: 1.025, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
      className="group"
    >
      <Card className="relative bg-white/10 backdrop-blur-lg border border-white/30 shadow-2xl transition-all duration-300 group-hover:shadow-primary/20 group-hover:border-primary/60 px-6 py-6 md:px-10 md:py-8">
        <CardHeader>
          <CardTitle className="text-2xl text-white/90 font-bold mb-1">
            {institution}
          </CardTitle>
          <CardDescription className="flex items-center text-primary/80 font-medium">
            {dates}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <span className="text-lg font-semibold text-primary/90">{degree}</span>
          </div>
          <div className="mb-4">
            <h5 className="font-medium text-white/80 mb-2">Achievements</h5>
            <div className="flex flex-wrap gap-2">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={achievement}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.08, type: "spring", stiffness: 200 }}
                >
                  <Badge className="bg-primary text-black px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-primary/70 hover:bg-primary/90 hover:text-white transition-all cursor-pointer">
                    {achievement}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-medium text-white/80 mb-2">Key Coursework</h5>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, idx) => (
                <motion.div
                  key={course}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.06, type: "spring", stiffness: 200 }}
                >
                  <Badge className="bg-background/80 border border-primary/40 text-primary px-3 py-1 rounded-full text-xs font-semibold shadow hover:bg-primary/10 hover:text-primary-foreground transition-all cursor-pointer">
                    {course}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

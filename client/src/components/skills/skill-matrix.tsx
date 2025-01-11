import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

interface SkillMatrixProps {
  skills: Skill[];
}

export default function SkillMatrix({ skills }: SkillMatrixProps) {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {categories.map((category) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold">{category}</h3>
          <div className="space-y-6">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <Progress value={skill.proficiency} className="h-2" />
                  </motion.div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

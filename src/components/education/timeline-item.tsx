import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

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
    <Card className="relative mb-8 ml-4 md:ml-8 ">
      <div className="absolute -left-4 top-4 h-8 w-8 rounded-full bg-primary md:-left-8">
        <GraduationCap className="m-1.5 h-5 w-5 text-primary-foreground" />
      </div>
      <CardHeader>
        <CardTitle>{institution}</CardTitle>
        <CardDescription className="flex items-center">
          {/* <Calendar className="mr-2 h-4 w-4" /> */}
          {dates}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold">{degree}</h4>
        <div className="mt-4">
          <h5 className="font-medium">Achievements</h5>
          <ul className="mt-2 list-inside list-disc">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h5 className="font-medium">Skills Gained</h5>
          <ul className="mt-2 list-inside list-disc">
            {coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

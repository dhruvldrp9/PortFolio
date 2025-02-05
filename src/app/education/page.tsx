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

import { EDUCATION } from "@/lib/constants";
import TimelineItem from "@/components/education/timeline-item";

export default function Education() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Education</h1>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-8" />
          {EDUCATION.map((item) => (
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

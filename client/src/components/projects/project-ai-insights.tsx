import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, ChevronDown, ChevronUp, RefreshCw } from "lucide-react";
import type { Project } from "@/types";

interface ProjectAIInsightsProps {
  project: Project;
}

export default function ProjectAIInsights({ project }: ProjectAIInsightsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { data: insights, isLoading } = useQuery({
    queryKey: [`/api/projects/${project.id}/insights`],
    enabled: isExpanded,
  });

  const { data: suggestions, isLoading: loadingSuggestions } = useQuery({
    queryKey: [`/api/projects/${project.id}/suggestions`],
    enabled: isExpanded,
  });

  return (
    <Card className="mt-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <CardTitle>AI Insights</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CardContent className="space-y-6">
              {isLoading || loadingSuggestions ? (
                <div className="flex items-center justify-center py-8">
                  <RefreshCw className="h-6 w-6 animate-spin text-primary" />
                </div>
              ) : (
                <>
                  {/* Technical Analysis */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technical Analysis</h3>
                    <p className="text-muted-foreground">{insights?.technicalAnalysis}</p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {insights?.keyFeatures.map((feature, index) => (
                        <Badge key={index} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Suggested Improvements */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Suggested Improvements</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {insights?.suggestedImprovements.map((improvement, index) => (
                        <li key={index}>{improvement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Similar Projects */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Similar Projects to Explore</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {insights?.similarProjects.map((project, index) => (
                        <li key={index}>{project}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Suggestions */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technical Suggestions</h3>
                    <div className="prose prose-gray dark:prose-invert">
                      <p className="whitespace-pre-wrap text-muted-foreground">
                        {suggestions}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { format } from "date-fns";
// import type { Certification } from "@db/schema";

export default function CertCard({ certification }: any) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">{certification.name}</CardTitle>
        <CardDescription>{certification.organization}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Achieved: {format(new Date(certification.date_achieved), "MMMM yyyy")}
        </p>
        <p className="mt-2">{certification.description}</p>
        {certification.verification_url && (
          <a
            href={certification.verification_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm text-primary hover:underline"
          >
            Verify Certificate
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </CardContent>
    </Card>
  );
}

import { useQuery } from "@tanstack/react-query";
import CertCard from "@/components/certifications/cert-card";
import { Skeleton } from "@/components/ui/skeleton";
import Heading from "@/components/ui/heading";
import type { Certification } from "@db/schema";

export default function Certifications() {
  const { data: certifications, isLoading } = useQuery<Certification[]>({
    queryKey: ["/api/certifications"],
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Heading>Certifications</Heading>
      {isLoading ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-[200px] rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications?.map((cert) => (
            <CertCard key={cert.id} certification={cert} />
          ))}
        </div>
      )}
    </div>
  );
}
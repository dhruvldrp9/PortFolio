import { useQuery } from "@tanstack/react-query";
import CertCard from "@/components/certifications/cert-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Certification } from "@db/schema";

export default function Certifications() {
  const { data: certifications, isLoading } = useQuery<Certification[]>({
    queryKey: ["/api/certifications"],
  });

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Certifications</h1>
      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-[200px] rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications?.map((cert) => (
            <CertCard key={cert.id} certification={cert} />
          ))}
        </div>
      )}
    </div>
  );
}

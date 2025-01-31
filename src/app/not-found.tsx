// app/not-found.tsx
"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import NotFound from "@/components/nopage/NotFound";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");
    if (redirect) {
      sessionStorage.removeItem("redirect");
      router.push(redirect);
    }
  }, [router]);
  return <NotFound />;
}

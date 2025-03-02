import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/layout/page-transition";
import NeuralNetwork from "@/components/ui/neural-network";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "AI/ML Professional Portfolio",
  description:
    "Professional portfolio showcasing AI and machine learning projects, certifications, and expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning={true} className="antialiased">
        <div className="relative min-h-screen">
          <NeuralNetwork />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}

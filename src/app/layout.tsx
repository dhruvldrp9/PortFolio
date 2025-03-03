import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/layout/page-transition";
import NeuralNetwork from "@/components/ui/neural-network";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Professional Portfolio | Dhruv Patel",
  description: "AI & cybersecurity expert building secure, intelligent systems with LLMs, NLP, and advanced machine learning.",
  keywords: ["artificial intelligence", "machine learning", "deep learning", "AI portfolio", "data science", "neural networks"],
  authors: [{ name: "Dhruv Patel", url: "https://www.dhruv.at/" }],
  creator: "Dhruv Patel",
  publisher: "Dhruv Patel",
  robots: "index, follow",
  
  // OpenGraph metadata
  openGraph: {
    type: "website",
    url: "https://www.dhruv.at/",
    title: "Professional Portfolio | Dhruv Patel",
    description: "AI & cybersecurity expert building secure, intelligent systems with LLMs, NLP, and advanced machine learning.",
    siteName: "Dhruv Patel | AI/ML Professional",
    images: [
      {
        url: "/attached_assets/Preview.png", // Path to your OG image
        width: 1200,
        height: 630,
        alt: "AI/ML Portfolio Preview",
      }
    ],
  },
  
  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Professional Portfolio | Dhruv Patel",
    description: "Explore my AI and ML projects, research, and technical expertise",
    images: ["/attached_assets/Preview.png"],
  },
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
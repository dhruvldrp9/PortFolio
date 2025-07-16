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
        url: "https://www.dhruv.at/attached_assets/Preview.png",
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
    description: "AI & cybersecurity expert building secure, intelligent systems with LLMs, NLP, and advanced machine learning.",
    images: ["https://www.dhruv.at/attached_assets/Preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/ProfilePicBlack.jpeg" />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dhruv.at/" />
        <meta property="og:title" content="Professional Portfolio | Dhruv Patel" />
        <meta property="og:description" content="AI & cybersecurity expert building secure, intelligent systems with LLMs, NLP, and advanced machine learning." />
        <meta property="og:image" content="https://www.dhruv.at/attached_assets/Preview.png" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.dhruv.at/" />
        <meta name="twitter:title" content="Professional Portfolio | Dhruv Patel" />
        <meta name="twitter:description" content="AI & cybersecurity expert building secure, intelligent systems with LLMs, NLP, and advanced machine learning." />
        <meta name="twitter:image" content="https://www.dhruv.at/attached_assets/Preview.png" />
      </head>
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
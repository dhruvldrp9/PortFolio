/* eslint-disable @next/next/no-img-element */
"use client";
import { PROFILE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Brain,
  Network,
  Database,
  Code,
  BrainCircuit,
  FileCode2,
  FileImage,
  Shield,
  ShieldAlert,
  Lock,
  Terminal,
} from "lucide-react";
import ProjectCard from "@/components/projects/project-card";
import BlogCard from "@/components/blog/blog-card";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import projects from "../data/projects.json";
import blogPosts from "../data/blog-posts.json";
import Link from "next/link";
import { AutoCarousel, AutoCarouselItem } from "@/components/ui/auto-carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import ParticlesBackground from "@/components/ui/particles";

export default function Home() {
  const [activeSection, setActiveSection] = useState("ai");
  const [isLoaded, setIsLoaded] = useState(false);

  // Responsive slidesToShow for carousel
  const [carouselSlides, setCarouselSlides] = useState(3);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setCarouselSlides(1);
      } else if (window.innerWidth < 1024) {
        setCarouselSlides(2);
      } else {
        setCarouselSlides(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const slideInVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const aiSkills = [
    {
      title: "Machine Learning",
      icon: BrainCircuit,
      skills: ["Pandas", "Numpy", "Scikit-learn"],
    },
    {
      title: "Deep Learning",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Transformers"],
    },
    {
      title: "Natural Language Processing",
      icon: FileCode2,
      skills: ["AI Agents", "RAG", "Custom Language Models"],
    },
    {
      title: "Computer Vision",
      icon: FileImage,
      skills: ["OpenCV", "Object Detection", "Image Processing"],
    },
  ];

  const cyberSkills = [
    {
      title: "Network Security",
      icon: Network,
      skills: ["Penetration Testing", "Firewall Config", "IDS/IPS"],
    },
    {
      title: "SOC Operations",
      icon: Terminal,
      skills: ["SIEM Tools", "Incident Response", "Threat Monitoring"],
    },
    {
      title: "Threat Intelligence",
      icon: ShieldAlert,
      skills: ["Malware Analysis", "Threat Hunting", "OSINT"],
    },
    {
      title: "Security Compliance",
      icon: Lock,
      skills: ["GDPR", "ISO 27001", "Security Audits"],
    },
  ];

  const isMobile = useIsMobile();

  return (
    <div className="bg-background min-h-screen">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181818] via-[#000000] to-[#181818] opacity-80" />
      </div>

      {/* Hero Section */}
      {isMobile ? (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-background" style={{ background: 'var(--background)' }}>
          <ParticlesBackground />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-16">
            <div className="flex flex-col items-center">
              <div className="w-28 h-18 rounded-full overflow-hidden border-4 border-primary shadow-lg animate-pulse -mt-32 mb-6" style={{ boxShadow: '0 0 24px 4px var(--primary)' }}>
                <img
                  src="/attached_assets/ProfilePicBlack.png"
                  alt={PROFILE.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-extrabold text-center text-foreground mb-1 drop-shadow-lg">{PROFILE.name}</h1>
              <span className="block text-base font-mono text-center text-primary/80 mb-2 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-primary pr-2" style={{ animation: 'typing 2.5s steps(30, end) infinite alternate' }}>{PROFILE.title}</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold animate-pulse mb-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-ping" />
                Available for Collaboration
              </span>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-row items-center justify-center gap-2 w-full max-w-xs mx-auto mt-4 mb-3">
              <a href="#projects" className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-full bg-primary text-black font-semibold text-sm shadow hover:bg-primary/80 transition-all duration-200">
                View Projects
              </a>
              <a href="#contact" className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted/30 transition-all duration-200">
                Get in Touch
              </a>
            </div>
            {/* Social Icons Row */}
            <div className="flex flex-row items-center justify-center gap-4 w-full max-w-xs mx-auto mt-0 mb-0">
              {[{
                icon: Github,
                href: PROFILE.github
              }, {
                icon: Linkedin,
                href: PROFILE.linkedin
              }, {
                icon: Mail,
                href: `mailto:${PROFILE.email}`
              }].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-muted/30 p-3 text-foreground hover:bg-muted/60 transition-all duration-200 shadow"
                  style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <style jsx global>{`
              @keyframes typing {
                from { width: 0 }
                to { width: 100% }
              }
            `}</style>
          </div>
        </section>
      ) : (
        // Original Hero section for laptop/desktop (no changes)
        <section className="relative overflow-hidden py-0 min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 -mt-8 md:-mt-10">
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 2 }}
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 800 800"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#181818" />
                    <stop offset="100%" stopColor="#000000" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="none" />
                <g fill="none" stroke="url(#grad)" strokeWidth="2">
                  <circle cx="400" cy="400" r="200" />
                  <circle cx="400" cy="400" r="150" />
                  <circle cx="400" cy="400" r="100" />
                  <circle cx="400" cy="400" r="50" />
                </g>
                <g fill="none" stroke="url(#grad)" strokeWidth="1">
                  <path d="M100,400 L700,400" />
                  <path d="M400,100 L400,700" />
                  <path d="M150,150 L650,650" />
                  <path d="M150,650 L650,150" />
                </g>
              </svg>
            </motion.div>
          </div>
          <motion.div
            className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col items-start justify-center max-w-xl w-full space-y-4 md:space-y-6 relative overflow-visible">
              {/* Animated Gradient Background */}
              <motion.div
                className="absolute -inset-8 z-0 rounded-3xl bg-gradient-to-br from-[#181818]/60 via-[#000]/80 to-[#181818]/60 blur-2xl opacity-70"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              {/* Animated Name */}
              <div className="w-full group">
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-2 inline-block cursor-pointer"
                  style={{ color: 'var(--foreground)' }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  whileHover={{ scale: 1.04, color: '#fff' }}
                >
                  {PROFILE.name}
                </motion.h1>
                <motion.p
                  className="text-base sm:text-lg md:text-xl font-medium mt-2 inline-block cursor-pointer"
                  style={{ color: 'var(--foreground)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                  whileHover={{ color: '#fff', textDecoration: 'underline' }}
                >
                  {PROFILE.title}
                </motion.p>
              </div>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full z-10">
                <motion.button
                  className="w-full sm:w-auto bg-muted border border-border px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 relative overflow-hidden group-hover:text-foreground text-foreground/30 hover:text-foreground transition-colors duration-300 shadow-lg"
                  whileHover={{ y: -4, boxShadow: "0 8px 32px 0 #18181844" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get in Touch
                  <motion.span
                    className="inline-block"
                    whileHover={{ rotate: 20, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Network className="ml-2 group-hover:text-foreground text-foreground/50 hover:text-foreground transition-colors duration-300" />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary group-hover:to-accent rounded-lg pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.button
                  className="w-full sm:w-auto border border-border px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 relative overflow-hidden group-hover:text-foreground text-foreground/30 hover:text-foreground transition-colors duration-300 bg-transparent"
                  whileHover={{ y: -4, boxShadow: "0 8px 32px 0 #18181844" }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Projects
                  <motion.span
                    className="inline-block"
                    whileHover={{ rotate: -20, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Database className="ml-2 group-hover:text-foreground text-foreground/50 hover:text-foreground transition-colors duration-300" />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary group-hover:to-accent rounded-lg pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
              {/* Social Icons */}
              <motion.div
                className="flex gap-3 sm:gap-4 mt-4 z-10"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12 } }
                }}
              >
                {[{
                  icon: Github,
                  href: PROFILE.github
                }, {
                  icon: Linkedin,
                  href: PROFILE.linkedin
                }, {
                  icon: Mail,
                  href: `mailto:${PROFILE.email}`
                }].map(({ icon: Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-3 group-hover:text-foreground text-foreground/50 hover:text-foreground transition-colors duration-300 shadow-lg"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                    }}
                    whileHover={{ scale: 1.15, rotate: href.includes('github') ? -10 : href.includes('linkedin') ? 10 : 0, boxShadow: "0 0 16px #fff8" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
            {/* Right: Profile Image */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative rounded-full border-4 border-primary/20 p-2 bg-muted/30 backdrop-blur-sm max-w-[140px] sm:max-w-xs w-full scale-110 sm:scale-150">
                <img
                  src="/attached_assets/ProfilePicBlack.png"
                  alt={PROFILE.name}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* About Me Section */}
      <section className="py-0 sm:py-20 relative overflow-hidden">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center w-full px-4 gap-6 sm:hidden">
          <motion.div
            className="rounded-full bg-muted/40 p-4 shadow-2xl flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="70" cy="56" r="36" fill="#fff" stroke="#181818" strokeWidth="3" />
              <rect x="54" y="92" width="32" height="40" rx="16" fill="#181818" />
              <rect x="24" y="92" width="24" height="10" rx="5" fill="#181818" />
              <motion.rect
                x="92"
                y="92"
                width="24"
                height="10"
                rx="5"
                fill="#181818"
                style={{ originX: 0.1, originY: 0.5 }}
                animate={{ rotate: [0, 25, -10, 25, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />
              <ellipse cx="60" cy="56" rx="5" ry="6" fill="#181818" />
              <ellipse cx="80" cy="56" rx="5" ry="6" fill="#181818" />
              <path d="M58 70 Q70 88 82 70" stroke="#181818" strokeWidth="3" fill="none" strokeLinecap="round" />
            </motion.svg>
          </motion.div>
          <motion.h2
            className="text-2xl font-bold mt-2 text-center text-foreground"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base leading-relaxed text-foreground/80 text-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {PROFILE.bio}
          </motion.p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: '0 2px 16px #10b98133' }}
              className="flex items-center text-primary-foreground bg-primary/10 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200"
            >
              <BrainCircuit className="w-4 h-4 mr-2" />
              AI Engineer
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: '0 2px 16px #6366f1aa' }}
              className="flex items-center text-accent-foreground bg-accent/10 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200"
            >
              <Shield className="w-4 h-4 mr-2" />
              Cybersecurity Specialist
            </motion.div>
          </div>
        </div>
        {/* Desktop/Laptop Layout (unchanged) */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 hidden sm:flex flex-col md:flex-row items-center gap-4 sm:gap-8 md:gap-12">
          {/* Left: Animated Icon */}
          <div className="flex-1 flex justify-center items-center min-w-0 sm:min-w-[320px] min-h-[120px] sm:min-h-[320px] mb-4 md:mb-0">
            <motion.div
              className="rounded-full bg-muted/40 p-4 sm:p-12 shadow-2xl flex items-center justify-center"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            >
              {/* Animated SVG Avatar with Bigger Smile and Eyes */}
              <motion.svg
                width="200"
                height="200"
                viewBox="0 0 140 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Head */}
                <circle cx="70" cy="56" r="36" fill="#fff" stroke="#181818" strokeWidth="3" />
                {/* Body */}
                <rect x="54" y="92" width="32" height="40" rx="16" fill="#181818" />
                {/* Left Arm (static) */}
                <rect x="24" y="92" width="24" height="10" rx="5" fill="#181818" />
                {/* Right Arm (waving) */}
                <motion.rect
                  x="92"
                  y="92"
                  width="24"
                  height="10"
                  rx="5"
                  fill="#181818"
                  style={{ originX: 0.1, originY: 0.5 }}
                  animate={{ rotate: [0, 25, -10, 25, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                />
                {/* Face (bigger eyes & smile) */}
                <ellipse cx="60" cy="56" rx="5" ry="6" fill="#181818" />
                <ellipse cx="80" cy="56" rx="5" ry="6" fill="#181818" />
                <path d="M58 70 Q70 88 82 70" stroke="#181818" strokeWidth="3" fill="none" strokeLinecap="round" />
              </motion.svg>
            </motion.div>
          </div>
          {/* Right: Bio and Chips - Make content box larger and bolder */}
          <div className="flex-1 flex flex-col items-start justify-center gap-4 sm:gap-8 max-w-2xl p-4 sm:p-8 bg-background/80 rounded-3xl shadow-2xl">
            <motion.h2
              className="text-xl sm:text-4xl font-bold mb-2 text-foreground"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-sm sm:text-xl leading-relaxed text-foreground/80 mb-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {PROFILE.bio.split(/(AI|cybersecurity|engineer|specialist|research|innovation|security|machine learning|deep learning|blockchain|automation|cloud|data|NFSU)/gi).map((word, _) =>
                [
                  'AI', 'cybersecurity', 'engineer', 'specialist', 'research', 'innovation', 'security', 'machine learning', 'deep learning', 'blockchain', 'automation', 'cloud', 'data', 'NFSU'
                ].includes(word) ? (
                  <motion.span
                    key={_}
                    className="font-semibold text-primary cursor-pointer hover:text-accent transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    {word}
                  </motion.span>
                ) : (
                  <span key={_}>{word}</span>
                )
              )}
            </motion.p>
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-2">
              <motion.div
                whileHover={{ scale: 1.08, boxShadow: '0 2px 16px #10b98133' }}
                className="flex items-center text-primary-foreground bg-primary/10 px-3 py-1.5 rounded-full text-xs sm:text-base font-medium cursor-pointer transition-all duration-200"
              >
                <BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                AI Engineer
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, boxShadow: '0 2px 16px #6366f1aa' }}
                className="flex items-center text-accent-foreground bg-accent/10 px-3 py-1.5 rounded-full text-xs sm:text-base font-medium cursor-pointer transition-all duration-200"
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Cybersecurity Specialist
              </motion.div>
            </div>
          </div>
        </div>
        {/* Section background pattern */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <svg width="100%" height="100%" className="opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-bg" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="#fff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-bg)" />
          </svg>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-8 sm:py-24 mt-24 sm:mt-0 relative overflow-hidden">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h2 className={`mb-1 sm:mb-2 text-foreground ${isMobile ? 'text-3xl font-extrabold' : 'text-xl sm:text-2xl font-bold'}`}>{isMobile ? 'Skills' : 'Expertise in AI & Cybersecurity'}</h2>
            <p className="text-foreground/70 text-xs sm:text-sm max-w-xs sm:max-w-md mx-auto">{isMobile ? 'AI, ML & Cybersecurity expertise' : 'Specialized in developing cutting-edge AI solutions while ensuring robust security measures'}</p>
            <div className="flex justify-center mt-4 space-x-2">
              <button
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${activeSection === "ai" ? "bg-primary text-background" : "bg-muted text-foreground"} transition-all duration-300`}
                onClick={() => setActiveSection("ai")}
              >
                <span className="flex items-center">
                  <BrainCircuit className="mr-1 h-4 w-4" />
                  AI & ML
                </span>
              </button>
              <button
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${activeSection === "cyber" ? "bg-primary text-background" : "bg-muted text-foreground"} transition-all duration-300`}
                onClick={() => setActiveSection("cyber")}
              >
                <span className="flex items-center">
                  <Shield className="mr-1 h-4 w-4" />
                  Cybersecurity
                </span>
              </button>
            </div>
          </div>
          {/* Mobile: horizontal scrollable cards */}
          {isMobile ? (
            <div className="mt-14">
              <AutoCarousel interval={3500} slidesToShow={1}>
                {(activeSection === "ai" ? aiSkills : cyberSkills).map((category) => (
                  <AutoCarouselItem key={category.title} className="flex justify-center items-center">
                    <div className="w-full max-w-xs mx-auto bg-card border border-border rounded-2xl p-6 flex flex-col items-center shadow-lg transition-all duration-300">
                      {React.createElement(category.icon, { className: "h-10 w-10 mb-3 text-primary" })}
                      <h3 className="text-lg font-bold mb-2 text-center truncate w-full">{category.title.length > 18 ? category.title.slice(0, 16) + '…' : category.title}</h3>
                      <ul className="flex flex-col gap-2 w-full">
                        {category.skills.map((skill) => (
                          <li key={skill} className="flex items-center font-semibold text-muted-foreground truncate">
                            <Code className="h-5 w-5 mr-2 text-primary" />
                            {skill.length > 18 ? skill.slice(0, 16) + '…' : skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AutoCarouselItem>
                ))}
              </AutoCarousel>
            </div>
          ) : (
            <AnimatePresence mode="sync">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch"
              >
                {(activeSection === "ai" ? aiSkills : cyberSkills).map(
                  (category) => (
                    <motion.div
                      key={category.title}
                      className="relative group perspective-1000"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: category.title === "Machine Learning" ? 0.1 : category.title === "Deep Learning" ? 0.2 : category.title === "Natural Language Processing" ? 0.3 : 0.4 }}
                      whileHover={{ z: 30 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.3 },
                        }}
                      />
                      <motion.div
                        className="p-6 rounded-lg border border-border bg-card transform-style-3d min-h-[300px] h-full flex flex-col"
                        whileHover={{
                          rotateX: 5,
                          rotateY: 10,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: category.title === "Machine Learning" ? 0.2 : category.title === "Deep Learning" ? 0.3 : category.title === "Natural Language Processing" ? 0.4 : 0.5,
                          }}
                        >
                          <category.icon className="h-12 w-12 mb-4 text-primary" />
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-4">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.skills.map((skill, _) => (
                            <motion.li
                              key={skill}
                              className="flex items-center text-muted-foreground"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: _ * 0.1 + _ * 0.05 }}
                            >
                              <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: _ * 0.3,
                                }}
                                className="mr-2 text-primary"
                              >
                                <Code className="h-4 w-4" />
                              </motion.span>
                              {skill}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.div>
                  )
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 inline-block text-foreground">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my latest projects and insights in AI and Cybersecurity
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Projects */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <motion.h3
                  className="text-2xl font-semibold"
                  variants={slideInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Recent Projects
                </motion.h3>
                <motion.div
                  variants={slideInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link href="/projects">
                    <Button variant="ghost" className="group">
                      View All
                      <Code className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Projects Grid - Fixed - Single Row */}
              <div className="mt-6">
                <AutoCarousel interval={3500} slidesToShow={carouselSlides}>
                  {projects.projects?.map((project) => (
                    <AutoCarouselItem key={project.id} className="px-2" slidesToShow={carouselSlides}>
                      <ProjectCard project={project} />
                    </AutoCarouselItem>
                  ))}
                </AutoCarousel>
              </div>
            </div>

            {/* Blog Posts */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <motion.h3
                  className="text-2xl font-semibold"
                  variants={slideInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Latest Articles
                </motion.h3>
                <motion.div
                  variants={slideInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link href="/blog">
                    <Button variant="ghost" className="group">
                      Read More
                      <Code className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Articles Grid - Fixed - Single Row */}
              <div className="mt-6">
                <AutoCarousel interval={3500} slidesToShow={carouselSlides}>
                  {blogPosts &&
                    blogPosts.map((post) => (
                      <AutoCarouselItem key={post.id} className="px-2" slidesToShow={carouselSlides}>
                        <BlogCard post={post} />
                      </AutoCarouselItem>
                    ))}
                </AutoCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

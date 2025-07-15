/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    // Generate random particles
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
    }));
    setParticles(newParticles);

    // Animate particles
    controls.start((i) => ({
      x: [
        particles[i]?.x ?? 0,
        (particles[i]?.x ?? 0) + (Math.random() - 0.5) * 100,
        particles[i]?.x ?? 0,
      ],
      y: [
        particles[i]?.y ?? 0,
        (particles[i]?.y ?? 0) + (Math.random() - 0.5) * 100,
        particles[i]?.y ?? 0,
      ],
      transition: {
        duration: 15 + Math.random() * 15,
        repeat: Infinity,
        ease: "linear",
      },
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#181818]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#181818]/10 to-[#000000]/40" />
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#ffffff]"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            opacity: 0.1,
          }}
          initial={{ opacity: 0 }}
          animate={controls}
          custom={index}
        />
      ))}
    </div>
  );
}

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
      size: Math.random() * 3 + 1,
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
        duration: 10 + Math.random() * 10,
        repeat: Infinity,
        ease: "linear",
      },
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/5"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          }}
          initial={{ opacity: 0 }}
          animate={controls}
          custom={index}
        />
      ))}
    </div>
  );
}

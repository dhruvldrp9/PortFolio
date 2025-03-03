/* eslint-disable react-hooks/exhaustive-deps */

"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const requestRef = useRef<number>(null);
  const controls = useAnimation();

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    // Initialize nodes
    const nodeCount = 80;
    const initialNodes: Node[] = Array.from({ length: nodeCount }, () => {
      const x = Math.random() * (dimensions.width || window.innerWidth);
      const y = Math.random() * (dimensions.height || window.innerHeight);
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        connections: [],
      };
    });

    // Establish connections between nodes
    initialNodes.forEach((node, i) => {
      // Connect to 1-3 other nodes
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionCount; j++) {
        // Ensure we don't connect to self and we don't connect to the same node twice
        let targetIndex;
        do {
          targetIndex = Math.floor(Math.random() * nodeCount);
        } while (targetIndex === i || node.connections.includes(targetIndex));

        node.connections.push(targetIndex);
      }
    });

    setNodes(initialNodes);

    // Start gradient animation
    controls.start({
      background: [
        "radial-gradient(circle at 30% 20%, rgba(0, 112, 243, 0.15), rgba(16, 185, 129, 0.05) 60%, transparent 70%)",
        "radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.15), rgba(0, 112, 243, 0.05) 60%, transparent 70%)",
        "radial-gradient(circle at 40% 80%, rgba(0, 112, 243, 0.15), rgba(16, 185, 129, 0.05) 60%, transparent 70%)",
        "radial-gradient(circle at 30% 20%, rgba(0, 112, 243, 0.15), rgba(16, 185, 129, 0.05) 60%, transparent 70%)",
      ],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    });

    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [dimensions.width, dimensions.height]);

  useEffect(() => {
    if (!canvasRef.current || nodes.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Update nodes position
      const updatedNodes = [...nodes];
      updatedNodes.forEach((node, i) => {
        // Update position based on velocity
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > dimensions.width) node.vx *= -1;
        if (node.y < 0 || node.y > dimensions.height) node.vy *= -1;

        // Draw connections
        ctx.strokeStyle = "rgba(16, 185, 129, 0.1)";
        node.connections.forEach((targetIndex) => {
          const target = updatedNodes[targetIndex];
          const distance = Math.sqrt(
            Math.pow(target.x - node.x, 2) + Math.pow(target.y - node.y, 2)
          );

          // Only draw connections within a certain distance
          if (distance < 200) {
            // Fade connections based on distance
            const opacity = 1 - distance / 200;
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.2})`;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        });

        // Draw nodes
        ctx.fillStyle =
          i % 3 === 0 ? "rgba(0, 112, 243, 0.5)" : "rgba(16, 185, 129, 0.5)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      setNodes(updatedNodes);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [nodes, dimensions]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div className="absolute inset-0" animate={controls} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10" />
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
    </div>
  );
}

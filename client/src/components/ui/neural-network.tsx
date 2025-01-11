import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Connection {
  from: Node;
  to: Node;
  opacity: number;
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  // Initialize nodes and connections
  useEffect(() => {
    const nodeCount = Math.floor(window.innerWidth * window.innerHeight / 40000);
    const newNodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 2,
    }));

    const newConnections: Connection[] = [];
    for (let i = 0; i < newNodes.length; i++) {
      for (let j = i + 1; j < newNodes.length; j++) {
        const dx = newNodes[i].x - newNodes[j].x;
        const dy = newNodes[i].y - newNodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          newConnections.push({
            from: newNodes[i],
            to: newNodes[j],
            opacity: 1 - distance / 150,
          });
        }
      }
    }

    setNodes(newNodes);
    setConnections(newConnections);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || nodes.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const animate = () => {
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections
      ctx.strokeStyle = "rgba(0, 188, 212, 0.15)";
      ctx.lineWidth = 1;

      connections.forEach((connection) => {
        const dx = connection.to.x - connection.from.x;
        const dy = connection.to.y - connection.from.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const opacity = Math.max(0, Math.min(0.15, 1 - distance / 150));

        ctx.beginPath();
        ctx.moveTo(connection.from.x, connection.from.y);
        ctx.lineTo(connection.to.x, connection.to.y);
        ctx.strokeStyle = `rgba(0, 188, 212, ${opacity})`;
        ctx.stroke();
      });

      // Update and draw nodes
      ctx.fillStyle = "rgba(26, 35, 126, 0.6)";
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Mouse interaction effect
      const mouseXValue = mouseX.get();
      const mouseYValue = mouseY.get();
      if (mouseXValue && mouseYValue) {
        ctx.beginPath();
        ctx.arc(mouseXValue, mouseYValue, 100, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(26, 35, 126, 0.1)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [nodes, connections]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ backgroundColor: "#102235" }}
    />
  );
}

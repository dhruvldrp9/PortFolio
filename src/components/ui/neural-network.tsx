/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";
import { useMotionValue } from "framer-motion";

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

const INITIAL_NODE_COUNT = 40000;
const MAX_DISTANCE = 150;
const NODE_COLOR = "rgba(26, 35, 126, 0.6)";
const CONNECTION_COLOR = "rgba(0, 188, 212, 0.15)";
const MOUSE_EFFECT_COLOR = "rgba(26, 35, 126, 0.1)";

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue<number | null>(null);
  const mouseY = useMotionValue<number | null>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  // Initialize nodes and connections
  useEffect(() => {
    const nodeCount = Math.floor(
      (window.innerWidth * window.innerHeight) / INITIAL_NODE_COUNT
    );

    const newNodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: getRandom(0, window.innerWidth),
      y: getRandom(0, window.innerHeight),
      vx: getRandom(-0.5, 0.5),
      vy: getRandom(-0.5, 0.5),
      radius: getRandom(2, 4),
    }));

    const newConnections: Connection[] = newNodes.flatMap((node, i) =>
      newNodes.slice(i + 1).reduce((acc, otherNode) => {
        const dx = node.x - otherNode.x;
        const dy = node.y - otherNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAX_DISTANCE) {
          acc.push({
            from: node,
            to: otherNode,
            opacity: 1 - distance / MAX_DISTANCE,
          });
        }
        return acc;
      }, [] as Connection[])
    );
    setNodes(newNodes);
    setConnections(newConnections);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const animate = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections
      ctx.strokeStyle = CONNECTION_COLOR;
      ctx.lineWidth = 1;

      connections.forEach((connection) => {
        const dx = connection.to.x - connection.from.x;
        const dy = connection.to.y - connection.from.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const opacity = Math.max(
          0,
          Math.min(0.15, 1 - distance / MAX_DISTANCE)
        );

        ctx.beginPath();
        ctx.moveTo(connection.from.x, connection.from.y);
        ctx.lineTo(connection.to.x, connection.to.y);
        ctx.strokeStyle = `rgba(0, 188, 212, ${opacity})`;
        ctx.stroke();
      });

      // Update and draw nodes
      ctx.fillStyle = NODE_COLOR;

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      // Mouse interaction effect
      const mouseXValue = mouseX.get();
      const mouseYValue = mouseY.get();

      if (mouseXValue != null && mouseYValue != null) {
        ctx.beginPath();
        ctx.arc(mouseXValue, mouseYValue, 100, 0, Math.PI * 2);
        ctx.fillStyle = MOUSE_EFFECT_COLOR;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [nodes, connections]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ backgroundColor: "#102235" }}
    />
  );
}

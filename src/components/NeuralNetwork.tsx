import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
}

interface Connection {
  from: number;
  to: number;
  flowProgress: number;
  flowSpeed: number;
  active: boolean;
}

export const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeNetwork();
    };

    const initializeNetwork = () => {
      const nodeCount = Math.floor((canvas.width * canvas.height) / 25000);
      nodesRef.current = [];
      connectionsRef.current = [];

      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1.5,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }

      // Create connections based on proximity
      updateConnections();
    };

    const updateConnections = () => {
      const maxDistance = 180;
      connectionsRef.current = [];

      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const dx = nodesRef.current[i].x - nodesRef.current[j].x;
          const dy = nodesRef.current[i].y - nodesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            connectionsRef.current.push({
              from: i,
              to: j,
              flowProgress: Math.random(),
              flowSpeed: 0.002 + Math.random() * 0.003,
              active: Math.random() > 0.6,
            });
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Update and draw connections
      connectionsRef.current.forEach((conn) => {
        const fromNode = nodesRef.current[conn.from];
        const toNode = nodesRef.current[conn.to];

        if (!fromNode || !toNode) return;

        const dx = toNode.x - fromNode.x;
        const dy = toNode.y - fromNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const opacity = Math.max(0, 1 - distance / 180) * 0.4;

        // Draw base connection line
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.3})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Draw flowing particle along connection
        if (conn.active) {
          conn.flowProgress += conn.flowSpeed;
          if (conn.flowProgress > 1) {
            conn.flowProgress = 0;
            conn.active = Math.random() > 0.3;
          }

          const particleX = fromNode.x + dx * conn.flowProgress;
          const particleY = fromNode.y + dy * conn.flowProgress;

          // Phosphorescent glow effect
          const gradient = ctx.createRadialGradient(
            particleX, particleY, 0,
            particleX, particleY, 8
          );
          gradient.addColorStop(0, `rgba(56, 189, 248, ${opacity * 1.5})`);
          gradient.addColorStop(0.5, `rgba(14, 165, 233, ${opacity * 0.8})`);
          gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');

          ctx.beginPath();
          ctx.arc(particleX, particleY, 8, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Bright core
          ctx.beginPath();
          ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(224, 242, 254, ${opacity * 2})`;
          ctx.fill();
        }
      });

      // Update and draw nodes
      nodesRef.current.forEach((node) => {
        // Move nodes gently
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Pulsing effect
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.3 + 0.7;

        // Draw node with phosphorescent glow
        const nodeGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 4
        );
        nodeGradient.addColorStop(0, `rgba(56, 189, 248, ${0.9 * pulse})`);
        nodeGradient.addColorStop(0.3, `rgba(14, 165, 233, ${0.5 * pulse})`);
        nodeGradient.addColorStop(0.6, `rgba(2, 132, 199, ${0.2 * pulse})`);
        nodeGradient.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = nodeGradient;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 242, 254, ${0.95 * pulse})`;
        ctx.fill();
      });

      // Periodically update connections
      if (Math.random() < 0.01) {
        updateConnections();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

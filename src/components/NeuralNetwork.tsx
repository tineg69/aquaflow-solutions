import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  baseY: number;
  y: number;
  radius: number;
  phaseOffset: number;
  waveSpeed: number;
  amplitude: number;
}

interface Connection {
  from: number;
  to: number;
  flowProgress: number;
  flowSpeed: number;
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
      nodesRef.current = [];
      connectionsRef.current = [];

      const rows = 8;
      const nodesPerRow = Math.floor(canvas.width / 80);
      const rowHeight = canvas.height / (rows + 1);

      // Create nodes in wave-like horizontal rows
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < nodesPerRow; col++) {
          const xSpacing = canvas.width / nodesPerRow;
          nodesRef.current.push({
            x: col * xSpacing + xSpacing / 2 + (Math.random() - 0.5) * 30,
            baseY: (row + 1) * rowHeight,
            y: (row + 1) * rowHeight,
            radius: Math.random() * 1.5 + 1,
            phaseOffset: col * 0.3 + row * 0.5,
            waveSpeed: 0.8 + Math.random() * 0.4,
            amplitude: 20 + Math.random() * 15,
          });
        }
      }

      // Create horizontal flowing connections
      for (let i = 0; i < nodesRef.current.length; i++) {
        const node = nodesRef.current[i];
        
        // Connect to nearby nodes (prefer horizontal)
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const other = nodesRef.current[j];
          const dx = Math.abs(node.x - other.x);
          const dy = Math.abs(node.baseY - other.baseY);
          
          // Prefer horizontal connections, allow some vertical
          if (dx < 120 && dy < 100 && (dx > dy * 0.5)) {
            connectionsRef.current.push({
              from: i,
              to: j,
              flowProgress: Math.random(),
              flowSpeed: 0.003 + Math.random() * 0.004,
            });
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Update node positions with wave motion
      nodesRef.current.forEach((node) => {
        node.y = node.baseY + Math.sin(time * node.waveSpeed + node.phaseOffset) * node.amplitude;
      });

      // Draw wave gradient layers in background
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        const layerOffset = layer * 0.8;
        const layerAmplitude = 30 + layer * 20;
        const layerY = canvas.height * (0.3 + layer * 0.2);
        
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = layerY + Math.sin((x * 0.005) + time * (0.5 + layer * 0.2) + layerOffset) * layerAmplitude;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        
        const gradient = ctx.createLinearGradient(0, layerY - 50, 0, canvas.height);
        gradient.addColorStop(0, `rgba(56, 189, 248, ${0.03 - layer * 0.008})`);
        gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Draw connections with flowing effect
      connectionsRef.current.forEach((conn) => {
        const fromNode = nodesRef.current[conn.from];
        const toNode = nodesRef.current[conn.to];

        if (!fromNode || !toNode) return;

        const dx = toNode.x - fromNode.x;
        const dy = toNode.y - fromNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const opacity = Math.max(0, 1 - distance / 150) * 0.5;

        // Draw curved connection line
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        
        // Create wave-like curve between nodes
        const midX = (fromNode.x + toNode.x) / 2;
        const midY = (fromNode.y + toNode.y) / 2 + Math.sin(time * 2 + conn.flowProgress * 10) * 10;
        ctx.quadraticCurveTo(midX, midY, toNode.x, toNode.y);
        
        ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.4})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Flowing particle
        conn.flowProgress += conn.flowSpeed;
        if (conn.flowProgress > 1) conn.flowProgress = 0;

        // Calculate position along curve
        const t = conn.flowProgress;
        const particleX = (1 - t) * (1 - t) * fromNode.x + 2 * (1 - t) * t * midX + t * t * toNode.x;
        const particleY = (1 - t) * (1 - t) * fromNode.y + 2 * (1 - t) * t * midY + t * t * toNode.y;

        // Phosphorescent glow
        const glowGradient = ctx.createRadialGradient(
          particleX, particleY, 0,
          particleX, particleY, 12
        );
        glowGradient.addColorStop(0, `rgba(56, 189, 248, ${opacity * 1.2})`);
        glowGradient.addColorStop(0.4, `rgba(14, 165, 233, ${opacity * 0.6})`);
        glowGradient.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.beginPath();
        ctx.arc(particleX, particleY, 12, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 242, 254, ${opacity * 1.5})`;
        ctx.fill();
      });

      // Draw nodes (static, no pulse)
      nodesRef.current.forEach((node) => {
        // Node glow
        const nodeGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 5
        );
        nodeGradient.addColorStop(0, 'rgba(56, 189, 248, 0.7)');
        nodeGradient.addColorStop(0.3, 'rgba(14, 165, 233, 0.35)');
        nodeGradient.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 5, 0, Math.PI * 2);
        ctx.fillStyle = nodeGradient;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(224, 242, 254, 0.85)';
        ctx.fill();
      });

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
      style={{ opacity: 0.7 }}
    />
  );
};

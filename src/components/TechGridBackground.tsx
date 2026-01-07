import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  baseOpacity: number;
  currentOpacity: number;
  pulsePhase: number;
}

interface DataPulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export const TechGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    let pulses: DataPulse[] = [];
    let connections: [number, number][] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initGrid();
    };

    const initGrid = () => {
      nodes = [];
      connections = [];
      
      const spacing = 60;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;
      const offsetX = (canvas.width - (cols - 1) * spacing) / 2;
      const offsetY = (canvas.height - (rows - 1) * spacing) / 2;

      // Create nodes
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          nodes.push({
            x: offsetX + col * spacing,
            y: offsetY + row * spacing,
            baseOpacity: 0.3 + Math.random() * 0.3,
            currentOpacity: 0.3 + Math.random() * 0.3,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }
      }

      // Create connections (horizontal and vertical neighbors)
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const idx = row * cols + col;
          if (col < cols - 1) {
            connections.push([idx, idx + 1]);
          }
          if (row < rows - 1) {
            connections.push([idx, idx + cols]);
          }
        }
      }
    };

    const spawnPulse = () => {
      if (connections.length === 0) return;
      
      const connectionIdx = Math.floor(Math.random() * connections.length);
      const [from, to] = connections[connectionIdx];
      
      // Randomly reverse direction
      const direction = Math.random() > 0.5;
      
      pulses.push({
        fromNode: direction ? from : to,
        toNode: direction ? to : from,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
      });
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node pulsing
      nodes.forEach((node, i) => {
        node.currentOpacity = node.baseOpacity + Math.sin(time * 0.001 + node.pulsePhase) * 0.15;
      });

      // Draw connections (subtle lines)
      ctx.strokeStyle = 'rgba(8, 143, 143, 0.08)';
      ctx.lineWidth = 1;
      connections.forEach(([from, to]) => {
        const nodeFrom = nodes[from];
        const nodeTo = nodes[to];
        if (nodeFrom && nodeTo) {
          ctx.beginPath();
          ctx.moveTo(nodeFrom.x, nodeFrom.y);
          ctx.lineTo(nodeTo.x, nodeTo.y);
          ctx.stroke();
        }
      });

      // Draw and update pulses
      pulses = pulses.filter(pulse => {
        pulse.progress += pulse.speed;
        
        if (pulse.progress >= 1) {
          // Brighten destination node
          if (nodes[pulse.toNode]) {
            nodes[pulse.toNode].currentOpacity = 1;
          }
          return false;
        }

        const fromNode = nodes[pulse.fromNode];
        const toNode = nodes[pulse.toNode];
        if (!fromNode || !toNode) return false;

        const x = fromNode.x + (toNode.x - fromNode.x) * pulse.progress;
        const y = fromNode.y + (toNode.y - fromNode.y) * pulse.progress;

        // Draw pulse glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
        gradient.addColorStop(0, 'rgba(8, 143, 143, 0.8)');
        gradient.addColorStop(0.5, 'rgba(8, 143, 143, 0.3)');
        gradient.addColorStop(1, 'rgba(8, 143, 143, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();

        // Draw pulse core
        ctx.fillStyle = 'rgba(8, 143, 143, 1)';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw trailing line
        const trailLength = 0.15;
        const trailStart = Math.max(0, pulse.progress - trailLength);
        const trailX = fromNode.x + (toNode.x - fromNode.x) * trailStart;
        const trailY = fromNode.y + (toNode.y - fromNode.y) * trailStart;
        
        const lineGradient = ctx.createLinearGradient(trailX, trailY, x, y);
        lineGradient.addColorStop(0, 'rgba(8, 143, 143, 0)');
        lineGradient.addColorStop(1, 'rgba(8, 143, 143, 0.6)');
        
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(trailX, trailY);
        ctx.lineTo(x, y);
        ctx.stroke();

        return true;
      });

      // Draw nodes
      nodes.forEach(node => {
        // Outer glow
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8);
        glowGradient.addColorStop(0, `rgba(8, 143, 143, ${node.currentOpacity * 0.5})`);
        glowGradient.addColorStop(1, 'rgba(8, 143, 143, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `rgba(8, 143, 143, ${node.currentOpacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Spawn new pulses randomly
      if (Math.random() < 0.08) {
        spawnPulse();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(animate);

    // Spawn initial pulses
    for (let i = 0; i < 15; i++) {
      spawnPulse();
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

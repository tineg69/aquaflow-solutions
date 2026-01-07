import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  angle: number;
  radius: number;
  speed: number;
  size: number;
  opacity: number;
  targetRadius: number;
  phase: number;
}

export const VortexBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = 400;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const minRadius = 80; // Minimum ring radius - stays open
      const maxRadius = Math.max(canvas.width, canvas.height) * 0.8;

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Start particles distributed across the full area
        const radius = minRadius + Math.random() * (maxRadius - minRadius);
        
        particles.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          angle,
          radius,
          speed: 0.002 + Math.random() * 0.004,
          size: 1 + Math.random() * 2,
          opacity: 0.3 + Math.random() * 0.7,
          targetRadius: minRadius + Math.random() * (maxRadius - minRadius), // Spread to edges
          phase: Math.random() * Math.PI * 2,
        });
      }
      return particles;
    };

    particlesRef.current = initParticles();

    const animate = () => {
      if (!ctx || !canvas) return;
      
      timeRef.current += 0.01;
      const time = timeRef.current;
      
      // Clear with fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const minRadius = 80;

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Orbital rotation
        particle.angle += particle.speed;
        
        // Gentle breathing motion - stays open, never closes to center
        const breathe = Math.sin(time * 0.2 + particle.phase) * 20;
        const currentRadius = particle.targetRadius + breathe;
        
        // Keep radius above minimum
        particle.radius = Math.max(minRadius, currentRadius);
        
        // Add some wave motion for organic feel
        const waveOffset = Math.sin(particle.angle * 3 + time) * 10;
        
        // Calculate position
        particle.x = centerX + Math.cos(particle.angle) * (particle.radius + waveOffset);
        particle.y = centerY + Math.sin(particle.angle) * (particle.radius + waveOffset * 0.5);
        
        // Adjust opacity based on radius (dimmer overall)
        const distanceFromCenter = particle.radius / (canvas.width * 0.4);
        const dynamicOpacity = particle.opacity * (1 - distanceFromCenter * 0.5) * 0.4;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${dynamicOpacity})`;
        ctx.fill();
        
        // Add subtle glow for some particles
        if (particle.size > 1.5) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${dynamicOpacity * 0.15})`;
          ctx.fill();
        }
      });

      // Draw very subtle center glow
      const centerGlow = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, 100
      );
      centerGlow.addColorStop(0, 'rgba(56, 189, 248, 0.04)');
      centerGlow.addColorStop(0.5, 'rgba(56, 189, 248, 0.01)');
      centerGlow.addColorStop(1, 'rgba(56, 189, 248, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
      ctx.fillStyle = centerGlow;
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

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
      style={{ background: 'transparent' }}
    />
  );
};

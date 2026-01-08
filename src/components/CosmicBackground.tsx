import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  hue: number;
}

export const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const nebulasRef = useRef<Nebula[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    const initParticles = () => {
      const particleCount = Math.min(200, Math.floor((canvas.width * canvas.height) / 8000));
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.6 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }

      // Initialize nebula-like areas
      const nebulaCount = 4;
      nebulasRef.current = [];
      for (let i = 0; i < nebulaCount; i++) {
        nebulasRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 200 + 100,
          opacity: Math.random() * 0.08 + 0.02,
          hue: 200 + Math.random() * 40, // Blue to cyan range
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      timeRef.current += 0.016;
      
      // Create deep navy/midnight blue gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.7
      );
      gradient.addColorStop(0, "hsl(220, 60%, 8%)");
      gradient.addColorStop(0.5, "hsl(220, 70%, 5%)");
      gradient.addColorStop(1, "hsl(220, 80%, 3%)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebula-like streaks
      nebulasRef.current.forEach((nebula) => {
        const nebulaGradient = ctx.createRadialGradient(
          nebula.x,
          nebula.y,
          0,
          nebula.x,
          nebula.y,
          nebula.radius
        );
        
        const pulsingOpacity = nebula.opacity * (0.5 + 0.5 * Math.sin(timeRef.current * 0.3 + nebula.x));
        
        nebulaGradient.addColorStop(0, `hsla(${nebula.hue}, 70%, 50%, ${pulsingOpacity})`);
        nebulaGradient.addColorStop(0.4, `hsla(${nebula.hue + 20}, 60%, 40%, ${pulsingOpacity * 0.5})`);
        nebulaGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = nebulaGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Slowly drift nebulas
        nebula.x += Math.sin(timeRef.current * 0.1) * 0.2;
        nebula.y += Math.cos(timeRef.current * 0.08) * 0.15;
        
        // Wrap around
        if (nebula.x < -nebula.radius) nebula.x = canvas.width + nebula.radius;
        if (nebula.x > canvas.width + nebula.radius) nebula.x = -nebula.radius;
        if (nebula.y < -nebula.radius) nebula.y = canvas.height + nebula.radius;
        if (nebula.y > canvas.height + nebula.radius) nebula.y = -nebula.radius;
      });

      // Draw particles (stars)
      particlesRef.current.forEach((particle) => {
        // Update position with slow drift
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulsing opacity
        const pulsingOpacity = particle.opacity * (0.6 + 0.4 * Math.sin(timeRef.current * particle.pulseSpeed * 60 + particle.pulsePhase));

        // Draw star with glow
        const starGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        
        // Blue/cyan color palette
        const hue = 190 + Math.sin(particle.pulsePhase) * 30; // 160-220 range (cyan to blue)
        starGradient.addColorStop(0, `hsla(${hue}, 80%, 80%, ${pulsingOpacity})`);
        starGradient.addColorStop(0.3, `hsla(${hue}, 70%, 60%, ${pulsingOpacity * 0.6})`);
        starGradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = starGradient;
        ctx.fill();

        // Core bright point
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 60%, 95%, ${pulsingOpacity})`;
        ctx.fill();
      });

      // Add occasional light flares
      if (Math.random() < 0.02) {
        const flareX = Math.random() * canvas.width;
        const flareY = Math.random() * canvas.height;
        const flareRadius = Math.random() * 30 + 10;
        
        const flareGradient = ctx.createRadialGradient(
          flareX, flareY, 0,
          flareX, flareY, flareRadius
        );
        flareGradient.addColorStop(0, "hsla(200, 100%, 80%, 0.3)");
        flareGradient.addColorStop(0.5, "hsla(210, 90%, 60%, 0.1)");
        flareGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = flareGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};

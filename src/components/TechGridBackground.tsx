import { useEffect, useRef } from 'react';

export const TechGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      time += 0.008;
      
      // Clear canvas
      ctx.fillStyle = 'rgba(10, 15, 20, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.4; // Vanishing point
      
      const gridSpacingX = 80;
      const gridSpacingY = 50;
      const gridCols = Math.ceil(canvas.width / gridSpacingX) + 10;
      const gridRows = Math.ceil(canvas.height / gridSpacingY) + 10;
      
      // Continuous scroll offset (loops seamlessly)
      const scrollOffset = (time * 40) % gridSpacingY;
      
      // Draw horizontal lines with wave effect
      for (let row = -gridRows; row <= gridRows; row++) {
        const baseY = centerY + row * gridSpacingY - scrollOffset;
        
        if (baseY < -50 || baseY > canvas.height + 50) continue;
        
        // Calculate distance from center for perspective effect
        const distFromCenter = Math.abs(baseY - centerY) / canvas.height;
        const perspectiveScale = 0.3 + distFromCenter * 0.7;
        const opacity = Math.max(0.1, 0.5 - distFromCenter * 0.3);
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(8, 143, 143, ${opacity})`;
        ctx.lineWidth = Math.max(0.5, (1 - distFromCenter) * 1.5);
        
        // Draw wavy horizontal line
        for (let x = 0; x <= canvas.width; x += 4) {
          const distX = (x - centerX) / canvas.width;
          const wave = Math.sin(distX * 8 + time * 2.5 + row * 0.2) * (3 + distFromCenter * 5);
          
          if (x === 0) {
            ctx.moveTo(x, baseY + wave);
          } else {
            ctx.lineTo(x, baseY + wave);
          }
        }
        ctx.stroke();
      }
      
      // Draw vertical lines with perspective convergence
      for (let col = -gridCols / 2; col <= gridCols / 2; col++) {
        const baseX = centerX + col * gridSpacingX;
        
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(8, 143, 143, 0.25)';
        ctx.lineWidth = 0.8;
        
        for (let y = 0; y <= canvas.height; y += 4) {
          const distFromCenterY = (y - centerY) / canvas.height;
          const perspectiveFactor = 1 - Math.abs(distFromCenterY) * 0.3;
          const x = centerX + (baseX - centerX) * perspectiveFactor;
          
          // Add wave distortion
          const wave = Math.sin(y * 0.02 + time * 2 + col * 0.3) * 2;
          
          if (y === 0) {
            ctx.moveTo(x + wave, y);
          } else {
            ctx.lineTo(x + wave, y);
          }
        }
        ctx.stroke();
      }
      
      // Draw grid intersection nodes
      for (let row = -gridRows; row <= gridRows; row++) {
        const baseY = centerY + row * gridSpacingY - scrollOffset;
        
        if (baseY < -20 || baseY > canvas.height + 20) continue;
        
        const distFromCenterY = Math.abs(baseY - centerY) / canvas.height;
        const perspectiveFactor = 1 - distFromCenterY * 0.3;
        
        for (let col = -gridCols / 2; col <= gridCols / 2; col += 1) {
          const baseX = centerX + col * gridSpacingX;
          const x = centerX + (baseX - centerX) * perspectiveFactor;
          
          // Wave distortion for nodes
          const waveX = Math.sin(baseY * 0.02 + time * 2 + col * 0.3) * 2;
          const waveY = Math.sin((x - centerX) / canvas.width * 8 + time * 2.5 + row * 0.2) * 3;
          
          const nodeX = x + waveX;
          const nodeY = baseY + waveY;
          
          const brightness = Math.sin(time * 2.5 + row * 0.4 + col * 0.25) * 0.3 + 0.5;
          const nodeOpacity = Math.max(0.15, (1 - distFromCenterY) * brightness * 0.7);
          const nodeSize = Math.max(1.5, (1 - distFromCenterY * 0.5) * 2.5);
          
          // Glow
          const gradient = ctx.createRadialGradient(nodeX, nodeY, 0, nodeX, nodeY, nodeSize * 4);
          gradient.addColorStop(0, `rgba(8, 143, 143, ${nodeOpacity * 0.6})`);
          gradient.addColorStop(0.5, `rgba(8, 143, 143, ${nodeOpacity * 0.2})`);
          gradient.addColorStop(1, 'rgba(8, 143, 143, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, nodeSize * 4, 0, Math.PI * 2);
          ctx.fill();
          
          // Core dot
          ctx.fillStyle = `rgba(8, 143, 143, ${nodeOpacity})`;
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, nodeSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Add traveling light pulses
      for (let i = 0; i < 12; i++) {
        const pulsePhase = (time * 0.4 + i * 0.35) % 2;
        const pulseY = centerY + (pulsePhase - 1) * canvas.height * 1.2;
        const pulseCol = Math.sin(i * 1.8 + time * 0.3) * gridCols / 4;
        
        const distFromCenterY = (pulseY - centerY) / canvas.height;
        const perspectiveFactor = 1 - Math.abs(distFromCenterY) * 0.3;
        const pulseX = centerX + pulseCol * gridSpacingX * perspectiveFactor;
        
        if (pulseY > -50 && pulseY < canvas.height + 50) {
          const pulseSize = 12 + Math.sin(time * 3 + i) * 4;
          
          const gradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, pulseSize);
          gradient.addColorStop(0, 'rgba(8, 200, 200, 0.8)');
          gradient.addColorStop(0.3, 'rgba(8, 143, 143, 0.4)');
          gradient.addColorStop(1, 'rgba(8, 143, 143, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, pulseSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Subtle center glow
      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.height * 0.6);
      centerGradient.addColorStop(0, 'rgba(8, 143, 143, 0.08)');
      centerGradient.addColorStop(0.5, 'rgba(8, 143, 143, 0.03)');
      centerGradient.addColorStop(1, 'rgba(8, 143, 143, 0)');
      
      ctx.fillStyle = centerGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

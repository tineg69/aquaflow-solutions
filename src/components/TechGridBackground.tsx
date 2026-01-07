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

    // Helper function to calculate wave distortion at any point
    const getWaveOffset = (x: number, y: number, centerX: number, centerY: number, t: number) => {
      const distX = (x - centerX) / canvas.width;
      const distY = (y - centerY) / canvas.height;
      
      const waveX = Math.sin(y * 0.025 + t * 2 + distX * 3) * 3;
      const waveY = Math.sin(distX * 8 + t * 2.5 + y * 0.015) * 4;
      
      return { waveX, waveY };
    };

    // Helper to get perspective-adjusted X position
    const getPerspectiveX = (baseX: number, y: number, centerX: number, centerY: number) => {
      const distFromCenterY = (y - centerY) / canvas.height;
      const perspectiveFactor = 1 - Math.abs(distFromCenterY) * 0.3;
      return centerX + (baseX - centerX) * perspectiveFactor;
    };

    const animate = () => {
      time += 0.008;
      
      ctx.fillStyle = 'rgba(10, 15, 20, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.4;
      
      const gridSpacingX = 80;
      const gridSpacingY = 50;
      const gridCols = Math.ceil(canvas.width / gridSpacingX) + 10;
      const gridRows = Math.ceil(canvas.height / gridSpacingY) + 10;
      
      const scrollOffset = (time * 40) % gridSpacingY;
      
      // Store intersection points for nodes
      const intersections: { x: number; y: number; distFromCenter: number; row: number; col: number }[] = [];
      
      // Draw horizontal lines with wave effect
      for (let row = -gridRows; row <= gridRows; row++) {
        const baseY = centerY + row * gridSpacingY - scrollOffset;
        
        if (baseY < -50 || baseY > canvas.height + 50) continue;
        
        const distFromCenter = Math.abs(baseY - centerY) / canvas.height;
        const opacity = Math.max(0.1, 0.5 - distFromCenter * 0.3);
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(8, 143, 143, ${opacity})`;
        ctx.lineWidth = Math.max(0.5, (1 - distFromCenter) * 1.5);
        
        for (let x = 0; x <= canvas.width; x += 4) {
          const { waveX, waveY } = getWaveOffset(x, baseY, centerX, centerY, time);
          const perspX = getPerspectiveX(x, baseY, centerX, centerY);
          
          if (x === 0) {
            ctx.moveTo(perspX + waveX, baseY + waveY);
          } else {
            ctx.lineTo(perspX + waveX, baseY + waveY);
          }
        }
        ctx.stroke();
      }
      
      // Draw vertical lines and calculate intersections
      for (let col = -gridCols / 2; col <= gridCols / 2; col++) {
        const baseX = centerX + col * gridSpacingX;
        
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(8, 143, 143, 0.25)';
        ctx.lineWidth = 0.8;
        
        for (let y = 0; y <= canvas.height; y += 4) {
          const perspX = getPerspectiveX(baseX, y, centerX, centerY);
          const { waveX, waveY } = getWaveOffset(perspX, y, centerX, centerY, time);
          
          if (y === 0) {
            ctx.moveTo(perspX + waveX, y + waveY);
          } else {
            ctx.lineTo(perspX + waveX, y + waveY);
          }
        }
        ctx.stroke();
        
        // Calculate intersection points with horizontal lines
        for (let row = -gridRows; row <= gridRows; row++) {
          const baseY = centerY + row * gridSpacingY - scrollOffset;
          
          if (baseY < -20 || baseY > canvas.height + 20) continue;
          
          const perspX = getPerspectiveX(baseX, baseY, centerX, centerY);
          const { waveX, waveY } = getWaveOffset(perspX, baseY, centerX, centerY, time);
          
          const distFromCenter = Math.abs(baseY - centerY) / canvas.height;
          
          intersections.push({
            x: perspX + waveX,
            y: baseY + waveY,
            distFromCenter,
            row,
            col
          });
        }
      }
      
      
      // Add traveling light pulses along grid lines
      for (let i = 0; i < 12; i++) {
        const pulsePhase = (time * 0.4 + i * 0.35) % 2;
        const pulseRow = Math.floor((pulsePhase - 1) * gridRows * 1.5);
        const pulseBaseY = centerY + pulseRow * gridSpacingY - scrollOffset;
        const pulseCol = Math.round(Math.sin(i * 1.8 + time * 0.3) * gridCols / 4);
        const pulseBaseX = centerX + pulseCol * gridSpacingX;
        
        const perspX = getPerspectiveX(pulseBaseX, pulseBaseY, centerX, centerY);
        const { waveX, waveY } = getWaveOffset(perspX, pulseBaseY, centerX, centerY, time);
        
        const pulseX = perspX + waveX;
        const pulseY = pulseBaseY + waveY;
        
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

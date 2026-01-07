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
      time += 0.015;
      
      // Clear canvas
      ctx.fillStyle = 'rgba(10, 15, 20, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const horizon = canvas.height * 0.35;
      const gridRows = 40;
      const gridCols = 60;
      
      // Perspective grid parameters
      const fov = 300;
      const viewerZ = 200;
      
      // Draw horizontal lines (receding into horizon)
      for (let row = 0; row <= gridRows; row++) {
        const z = row * 30 + (time * 60) % 30; // Moving towards viewer
        const perspectiveScale = fov / (z + viewerZ);
        const y = horizon + (canvas.height - horizon) * perspectiveScale * 2;
        
        if (y > horizon && y < canvas.height + 50) {
          const opacity = Math.max(0, Math.min(0.6, (1 - row / gridRows) * 0.6));
          
          // Add wave distortion
          const waveAmplitude = 3 * perspectiveScale;
          
          ctx.beginPath();
          ctx.strokeStyle = `rgba(8, 143, 143, ${opacity})`;
          ctx.lineWidth = Math.max(0.5, perspectiveScale * 2);
          
          // Draw wavy horizontal line
          for (let x = 0; x <= canvas.width; x += 5) {
            const distFromCenter = (x - centerX) / canvas.width;
            const wave = Math.sin(distFromCenter * 10 + time * 2 + row * 0.3) * waveAmplitude;
            
            if (x === 0) {
              ctx.moveTo(x, y + wave);
            } else {
              ctx.lineTo(x, y + wave);
            }
          }
          ctx.stroke();
        }
      }
      
      // Draw vertical lines (converging to center horizon)
      for (let col = -gridCols / 2; col <= gridCols / 2; col++) {
        const baseX = col * 80;
        
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(8, 143, 143, 0.3)';
        ctx.lineWidth = 0.8;
        
        let started = false;
        
        for (let row = 0; row <= gridRows; row++) {
          const z = row * 30 + (time * 60) % 30;
          const perspectiveScale = fov / (z + viewerZ);
          const y = horizon + (canvas.height - horizon) * perspectiveScale * 2;
          const x = centerX + baseX * perspectiveScale * 2;
          
          // Add wave distortion to vertical lines too
          const wave = Math.sin(row * 0.5 + time * 2 + col * 0.2) * 2 * perspectiveScale;
          
          if (y > horizon && y < canvas.height + 50) {
            if (!started) {
              ctx.moveTo(x + wave, y);
              started = true;
            } else {
              ctx.lineTo(x + wave, y);
            }
          }
        }
        ctx.stroke();
      }
      
      // Draw grid intersection points (nodes)
      for (let row = 0; row <= gridRows; row += 2) {
        const z = row * 30 + (time * 60) % 30;
        const perspectiveScale = fov / (z + viewerZ);
        const y = horizon + (canvas.height - horizon) * perspectiveScale * 2;
        
        if (y > horizon && y < canvas.height) {
          for (let col = -gridCols / 2; col <= gridCols / 2; col += 2) {
            const baseX = col * 80;
            const x = centerX + baseX * perspectiveScale * 2;
            
            // Wave distortion
            const waveX = Math.sin(row * 0.5 + time * 2 + col * 0.2) * 2 * perspectiveScale;
            const waveY = Math.sin((x - centerX) / canvas.width * 10 + time * 2 + row * 0.3) * 3 * perspectiveScale;
            
            const nodeX = x + waveX;
            const nodeY = y + waveY;
            
            const brightness = Math.sin(time * 3 + row * 0.5 + col * 0.3) * 0.3 + 0.5;
            const nodeOpacity = Math.max(0.2, (1 - row / gridRows) * brightness);
            const nodeSize = Math.max(1, perspectiveScale * 4);
            
            // Glow
            const gradient = ctx.createRadialGradient(nodeX, nodeY, 0, nodeX, nodeY, nodeSize * 3);
            gradient.addColorStop(0, `rgba(8, 143, 143, ${nodeOpacity * 0.8})`);
            gradient.addColorStop(0.5, `rgba(8, 143, 143, ${nodeOpacity * 0.3})`);
            gradient.addColorStop(1, 'rgba(8, 143, 143, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(nodeX, nodeY, nodeSize * 3, 0, Math.PI * 2);
            ctx.fill();
            
            // Core dot
            ctx.fillStyle = `rgba(8, 143, 143, ${nodeOpacity})`;
            ctx.beginPath();
            ctx.arc(nodeX, nodeY, nodeSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      
      // Add traveling light pulses on the grid
      for (let i = 0; i < 8; i++) {
        const pulseTime = (time * 0.5 + i * 0.4) % 3;
        const pulseRow = pulseTime * gridRows / 3;
        const pulseCol = Math.sin(i * 2.5) * gridCols / 3;
        
        const z = pulseRow * 30;
        const perspectiveScale = fov / (z + viewerZ);
        const y = horizon + (canvas.height - horizon) * perspectiveScale * 2;
        const x = centerX + pulseCol * 80 * perspectiveScale * 2;
        
        if (y > horizon && y < canvas.height) {
          const pulseSize = perspectiveScale * 15;
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, pulseSize);
          gradient.addColorStop(0, 'rgba(8, 200, 200, 0.9)');
          gradient.addColorStop(0.3, 'rgba(8, 143, 143, 0.5)');
          gradient.addColorStop(1, 'rgba(8, 143, 143, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Add horizon glow
      const horizonGradient = ctx.createLinearGradient(0, horizon - 50, 0, horizon + 100);
      horizonGradient.addColorStop(0, 'rgba(8, 143, 143, 0)');
      horizonGradient.addColorStop(0.5, 'rgba(8, 143, 143, 0.15)');
      horizonGradient.addColorStop(1, 'rgba(8, 143, 143, 0)');
      
      ctx.fillStyle = horizonGradient;
      ctx.fillRect(0, horizon - 50, canvas.width, 150);
      
      // Add scanline effect
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        ctx.fillRect(0, y, canvas.width, 2);
      }

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

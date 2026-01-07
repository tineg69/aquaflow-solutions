import { useEffect, useRef } from 'react';

interface Wave {
  amplitude: number;
  frequency: number;
  speed: number;
  phase: number;
  yOffset: number;
  opacity: number;
}

export const NeuralWaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);
  const wavesRef = useRef<Wave[]>([]);

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
      initWaves();
    };

    const initWaves = () => {
      const waves: Wave[] = [];
      const waveCount = 6;
      
      for (let i = 0; i < waveCount; i++) {
        waves.push({
          amplitude: 12 + Math.random() * 20,
          frequency: 0.004 + Math.random() * 0.005,
          speed: 0.08 + Math.random() * 0.1,
          phase: Math.random() * Math.PI * 2,
          yOffset: (canvas.height / (waveCount + 1)) * (i + 1),
          opacity: 0.08 + Math.random() * 0.08,
        });
      }
      wavesRef.current = waves;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!ctx || !canvas) return;
      
      timeRef.current += 0.016;
      const time = timeRef.current;
      
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each wave
      wavesRef.current.forEach((wave, waveIndex) => {
        ctx.beginPath();
        
        // Dynamic amplitude modulation for "firing" effect
        const amplitudeModulation = 1 + Math.sin(time * 0.5 + waveIndex) * 0.3;
        const currentAmplitude = wave.amplitude * amplitudeModulation;
        
        // Draw wave path
        for (let x = 0; x <= canvas.width; x += 2) {
          // Multiple sine waves combined for organic feel
          const y1 = Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * currentAmplitude;
          const y2 = Math.sin(x * wave.frequency * 1.5 + time * wave.speed * 0.7 + wave.phase) * (currentAmplitude * 0.4);
          const y3 = Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 1.3) * (currentAmplitude * 0.2);
          
          const y = wave.yOffset + y1 + y2 + y3;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        // Wave stroke style - grey color
        ctx.strokeStyle = `rgba(140, 150, 160, ${wave.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Add subtle glow effect with second stroke
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 2) {
          const y1 = Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * currentAmplitude;
          const y2 = Math.sin(x * wave.frequency * 1.5 + time * wave.speed * 0.7 + wave.phase) * (currentAmplitude * 0.4);
          const y3 = Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 1.3) * (currentAmplitude * 0.2);
          
          const y = wave.yOffset + y1 + y2 + y3;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = `rgba(140, 150, 160, ${wave.opacity * 0.2})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      });

      // Draw connecting pulses between waves - grey
      const pulseCount = 3;
      for (let i = 0; i < pulseCount; i++) {
        const pulseX = ((time * 80 + i * (canvas.width / pulseCount)) % (canvas.width + 100)) - 50;
        const pulseOpacity = 0.06 * (1 - Math.abs(pulseX - canvas.width / 2) / (canvas.width / 2));
        
        if (pulseOpacity > 0.01) {
          ctx.beginPath();
          ctx.moveTo(pulseX, 0);
          ctx.lineTo(pulseX, canvas.height);
          ctx.strokeStyle = `rgba(140, 150, 160, ${pulseOpacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

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

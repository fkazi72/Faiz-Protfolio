
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedGradientBlobsProps {
  mousePosition: { x: number; y: number };
  theme: 'light' | 'dark' | 'system';
}

interface Blob {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  colorIndex: number;
  fadeDirection: number;
  targetX: number;
  targetY: number;
  fadePhase: number;
}

const AnimatedGradientBlobs: React.FC<AnimatedGradientBlobsProps> = ({ mousePosition, theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef<Blob[]>([]);
  const animationFrameRef = useRef<number>();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  // Enhanced color palettes with more vibrant colors
  const colorPalettes = {
    dark: [
      { r: 75, g: 0, b: 130 },    // Indigo
      { r: 25, g: 25, b: 112 },   // Midnight Blue
      { r: 72, g: 61, b: 139 },   // Dark Slate Blue
      { r: 138, g: 43, b: 226 },  // Blue Violet
      { r: 65, g: 105, b: 225 },  // Royal Blue
      { r: 147, g: 0, b: 211 },   // Dark Violet
      { r: 148, g: 0, b: 211 },   // Dark Magenta
      { r: 30, g: 144, b: 255 },  // Dodger Blue
      { r: 123, g: 104, b: 238 }, // Medium Slate Blue
      { r: 106, g: 90, b: 205 },  // Slate Blue
      { r: 70, g: 130, b: 180 },  // Steel Blue
      { r: 186, g: 85, b: 211 },  // Medium Orchid
      { r: 153, g: 50, b: 204 },  // Dark Orchid
      { r: 102, g: 51, b: 153 },  // Rebecca Purple
      { r: 128, g: 0, b: 128 },   // Purple
      { r: 75, g: 0, b: 75 },     // Dark Purple
    ],
    light: [
      { r: 255, g: 182, b: 193 }, // Light Pink
      { r: 173, g: 216, b: 230 }, // Light Blue
      { r: 221, g: 160, b: 221 }, // Plum
      { r: 176, g: 196, b: 222 }, // Light Steel Blue
      { r: 255, g: 218, b: 185 }, // Peach Puff
      { r: 152, g: 251, b: 152 }, // Pale Green
      { r: 255, g: 228, b: 181 }, // Moccasin
      { r: 230, g: 230, b: 250 }, // Lavender
      { r: 255, g: 239, b: 213 }, // Papaya Whip
      { r: 255, g: 228, b: 225 }, // Misty Rose
      { r: 240, g: 248, b: 255 }, // Alice Blue
      { r: 248, g: 248, b: 255 }, // Ghost White
      { r: 255, g: 240, b: 245 }, // Lavender Blush
      { r: 255, g: 250, b: 240 }, // Floral White
      { r: 250, g: 235, b: 215 }, // Antique White
      { r: 255, g: 245, b: 238 }, // Seashell
    ]
  };

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setCurrentTheme(theme === 'system' ? systemTheme : theme);
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize blobs with smooth fade animation
    const initBlobs = () => {
      blobsRef.current = [];
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        blobsRef.current.push({
          id: i,
          x,
          y,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          size: Math.random() * 120 + 80,
          opacity: 0,
          colorIndex: Math.floor(Math.random() * colorPalettes[currentTheme].length),
          fadeDirection: 1,
          targetX: Math.random() * canvas.width,
          targetY: Math.random() * canvas.height,
          fadePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initBlobs();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobsRef.current.forEach((blob) => {
        // Smooth random target movement
        if (Math.random() < 0.003) {
          blob.targetX = Math.random() * canvas.width;
          blob.targetY = Math.random() * canvas.height;
        }

        // Move towards target with smooth interpolation
        const dx = blob.targetX - blob.x;
        const dy = blob.targetY - blob.y;
        blob.vx += dx * 0.00005;
        blob.vy += dy * 0.00005;

        // Update position
        blob.x += blob.vx * 0.3;
        blob.y += blob.vy * 0.3;

        // Damping
        blob.vx *= 0.999;
        blob.vy *= 0.999;

        // Boundary wrapping
        if (blob.x < -blob.size) blob.x = canvas.width + blob.size;
        if (blob.x > canvas.width + blob.size) blob.x = -blob.size;
        if (blob.y < -blob.size) blob.y = canvas.height + blob.size;
        if (blob.y > canvas.height + blob.size) blob.y = -blob.size;

        // Smooth fade animation using sine wave
        blob.fadePhase += 0.008;
        blob.opacity = (Math.sin(blob.fadePhase) + 1) * 0.1 + 0.05;

        // Change color occasionally
        if (Math.random() < 0.001) {
          blob.colorIndex = Math.floor(Math.random() * colorPalettes[currentTheme].length);
        }

        // Draw blob
        const color = colorPalettes[currentTheme][blob.colorIndex];
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.size
        );

        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${blob.opacity})`);
        gradient.addColorStop(0.7, `rgba(${color.r}, ${color.g}, ${color.b}, ${blob.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        filter: 'blur(2px)',
        mixBlendMode: currentTheme === 'dark' ? 'screen' : 'multiply'
      }}
    />
  );
};

export default AnimatedGradientBlobs;

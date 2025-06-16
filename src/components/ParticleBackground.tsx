
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

interface ParticleBackgroundProps {
  mousePosition: { x: number; y: number };
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ mousePosition }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Create engine
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    engine.world.gravity.y = 0;

    // Create renderer
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
        showAngleIndicator: false,
        showVelocity: false,
      },
    });
    renderRef.current = render;

    // Create gradient blob colors with opacity
    const gradients = [
      'radial-gradient(circle, rgba(255,107,107,0.6) 0%, rgba(255,107,107,0.2) 50%, rgba(255,107,107,0.05) 100%)',
      'radial-gradient(circle, rgba(78,205,196,0.6) 0%, rgba(78,205,196,0.2) 50%, rgba(78,205,196,0.05) 100%)',
      'radial-gradient(circle, rgba(69,183,209,0.6) 0%, rgba(69,183,209,0.2) 50%, rgba(69,183,209,0.05) 100%)',
      'radial-gradient(circle, rgba(150,206,180,0.6) 0%, rgba(150,206,180,0.2) 50%, rgba(150,206,180,0.05) 100%)',
      'radial-gradient(circle, rgba(221,160,221,0.6) 0%, rgba(221,160,221,0.2) 50%, rgba(221,160,221,0.05) 100%)',
      'radial-gradient(circle, rgba(152,216,200,0.6) 0%, rgba(152,216,200,0.2) 50%, rgba(152,216,200,0.05) 100%)',
      'radial-gradient(circle, rgba(187,143,206,0.6) 0%, rgba(187,143,206,0.2) 50%, rgba(187,143,206,0.05) 100%)',
      'radial-gradient(circle, rgba(133,193,233,0.6) 0%, rgba(133,193,233,0.2) 50%, rgba(133,193,233,0.05) 100%)',
    ];

    const blobs: Matter.Body[] = [];
    
    for (let i = 0; i < 25; i++) {
      const size = Math.random() * 80 + 40; // Larger blobs (40-120px)
      const blob = Matter.Bodies.circle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        size,
        {
          render: {
            fillStyle: 'transparent',
            strokeStyle: 'transparent',
          },
          frictionAir: 0.002,
          restitution: 0.95,
          density: 0.0005,
          inertia: Infinity, // Prevents rotation for smoother blob movement
        }
      );
      
      // Add random initial velocity for organic movement
      Matter.Body.setVelocity(blob, {
        x: (Math.random() - 0.5) * 1.5,
        y: (Math.random() - 0.5) * 1.5
      });
      
      // Store gradient info
      (blob as any).gradientIndex = i % gradients.length;
      (blob as any).originalSize = size;
      
      blobs.push(blob);
    }

    Matter.World.add(engine.world, blobs);

    // Custom renderer for gradient blobs
    const customRender = () => {
      const ctx = render.canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, render.canvas.width, render.canvas.height);
      
      blobs.forEach((blob) => {
        const pos = blob.position;
        const size = (blob as any).originalSize;
        const gradientIndex = (blob as any).gradientIndex;
        
        // Create radial gradient
        const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, size);
        
        // Different gradient stops for liquid effect
        switch (gradientIndex % 8) {
          case 0:
            gradient.addColorStop(0, 'rgba(255,107,107,0.8)');
            gradient.addColorStop(0.5, 'rgba(255,107,107,0.3)');
            gradient.addColorStop(1, 'rgba(255,107,107,0)');
            break;
          case 1:
            gradient.addColorStop(0, 'rgba(78,205,196,0.8)');
            gradient.addColorStop(0.5, 'rgba(78,205,196,0.3)');
            gradient.addColorStop(1, 'rgba(78,205,196,0)');
            break;
          case 2:
            gradient.addColorStop(0, 'rgba(69,183,209,0.8)');
            gradient.addColorStop(0.5, 'rgba(69,183,209,0.3)');
            gradient.addColorStop(1, 'rgba(69,183,209,0)');
            break;
          case 3:
            gradient.addColorStop(0, 'rgba(150,206,180,0.8)');
            gradient.addColorStop(0.5, 'rgba(150,206,180,0.3)');
            gradient.addColorStop(1, 'rgba(150,206,180,0)');
            break;
          case 4:
            gradient.addColorStop(0, 'rgba(221,160,221,0.8)');
            gradient.addColorStop(0.5, 'rgba(221,160,221,0.3)');
            gradient.addColorStop(1, 'rgba(221,160,221,0)');
            break;
          case 5:
            gradient.addColorStop(0, 'rgba(152,216,200,0.8)');
            gradient.addColorStop(0.5, 'rgba(152,216,200,0.3)');
            gradient.addColorStop(1, 'rgba(152,216,200,0)');
            break;
          case 6:
            gradient.addColorStop(0, 'rgba(187,143,206,0.8)');
            gradient.addColorStop(0.5, 'rgba(187,143,206,0.3)');
            gradient.addColorStop(1, 'rgba(187,143,206,0)');
            break;
          case 7:
            gradient.addColorStop(0, 'rgba(133,193,233,0.8)');
            gradient.addColorStop(0.5, 'rgba(133,193,233,0.3)');
            gradient.addColorStop(1, 'rgba(133,193,233,0)');
            break;
        }
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add blend mode for mixing effect
        ctx.globalCompositeOperation = 'multiply';
        ctx.globalCompositeOperation = 'source-over';
      });
    };

    // Screen boundary wrapping function
    const wrapBoundaries = () => {
      blobs.forEach((blob) => {
        const pos = blob.position;
        const size = (blob as any).originalSize;
        
        // Wrap horizontally
        if (pos.x < -size) {
          Matter.Body.setPosition(blob, { x: window.innerWidth + size, y: pos.y });
        } else if (pos.x > window.innerWidth + size) {
          Matter.Body.setPosition(blob, { x: -size, y: pos.y });
        }
        
        // Wrap vertically
        if (pos.y < -size) {
          Matter.Body.setPosition(blob, { x: pos.x, y: window.innerHeight + size });
        } else if (pos.y > window.innerHeight + size) {
          Matter.Body.setPosition(blob, { x: pos.x, y: -size });
        }
      });
    };

    // Add organic movement forces
    const addOrganicForces = () => {
      blobs.forEach((blob) => {
        const force = {
          x: (Math.random() - 0.5) * 0.00005,
          y: (Math.random() - 0.5) * 0.00005,
        };
        Matter.Body.applyForce(blob, blob.position, force);
      });
    };

    // Start the engine
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Custom animation loop
    const animate = () => {
      wrapBoundaries();
      addOrganicForces();
      customRender();
      requestAnimationFrame(animate);
    };
    animate();

    // Add movement interval for continuous organic motion
    const motionInterval = setInterval(addOrganicForces, 150);

    // Handle resize
    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(motionInterval);
      window.removeEventListener('resize', handleResize);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  // Enhanced mouse interaction for liquid mixing effect
  useEffect(() => {
    if (!engineRef.current) return;

    const bodies = Matter.Composite.allBodies(engineRef.current.world);
    bodies.forEach((body) => {
      if (body.label === 'Circle Body') {
        const distance = Math.sqrt(
          Math.pow(body.position.x - mousePosition.x, 2) +
          Math.pow(body.position.y - mousePosition.y, 2)
        );

        if (distance < 300) {
          // Gentle attraction/repulsion for liquid mixing effect
          const forceMagnitude = Math.max(0.00005, 0.0003 * (300 - distance) / 300);
          const angle = Math.atan2(
            body.position.y - mousePosition.y,
            body.position.x - mousePosition.x
          );
          
          // Alternating attraction/repulsion based on blob index for mixing
          const direction = (bodies.indexOf(body) % 2 === 0) ? 1 : -0.5;
          
          const force = {
            x: Math.cos(angle) * forceMagnitude * direction,
            y: Math.sin(angle) * forceMagnitude * direction,
          };
          Matter.Body.applyForce(body, body.position, force);
        }
      }
    });
  }, [mousePosition]);

  return (
    <div
      ref={sceneRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        filter: 'blur(3px)',
        background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.02), rgba(75, 0, 130, 0.02), rgba(25, 25, 112, 0.02))',
        mixBlendMode: 'multiply'
      }}
    />
  );
};

export default ParticleBackground;

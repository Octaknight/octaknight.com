import { useEffect, useRef } from 'react';

interface ParticleLogoProps {
  src: string;
  height?: number;
}

export default function ParticleLogo({ src, height = 400 }: ParticleLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    // Particle Class
    class Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      color: string;
      size: number;
      vx: number;
      vy: number;
      ease: number;
      friction: number;
      dx: number;
      dy: number;
      distance: number;
      force: number;
      angle: number;

      constructor(x: number, y: number, color: string) {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.originX = x;
        this.originY = y;
        this.color = color;
        this.size = Math.random() * 2 + 1; // Random size
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.1; // Speed of return
        this.friction = 0.95; // Damping
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
      }

      update() {
        this.dx = mouse.x - this.x;
        this.dy = mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -2000 / this.distance; // Repulsion strength

        if (this.distance < 20000) { // Interaction radius
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        this.x += (this.originX - this.x) * this.ease;
        this.y += (this.originY - this.y) * this.ease;

        this.x += this.vx;
        this.y += this.vy;

        this.vx *= this.friction;
        this.vy *= this.friction;
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    // Resize Handler
    const handleResize = () => {
        const parent = container.parentElement;
        if(parent) {
            const rect = parent.getBoundingClientRect();
            
            // Simple 1:1 sizing
            canvas.width = rect.width;
            canvas.height = height;
            
            // Re-init particles if image is loaded
            if (image.complete && image.naturalWidth > 0) {
                initParticles();
            }
        }
    };

    const initParticles = () => {
        const displayWidth = canvas.width;
        const displayHeight = canvas.height;
        
        if (displayWidth === 0 || displayHeight === 0) return;

        const scale = Math.min(displayWidth / image.width, displayHeight / image.height) * 0.8; 
        const w = image.width * scale;
        const h = image.height * scale;
        const x = (displayWidth - w) / 2;
        const y = (displayHeight - h) / 2;

        // Use a temporary offscreen canvas for sampling
        const offCanvas = document.createElement('canvas');
        offCanvas.width = displayWidth;
        offCanvas.height = displayHeight;
        const offCtx = offCanvas.getContext('2d');
        if (!offCtx) return;
        
        offCtx.drawImage(image, x, y, w, h);
        const pixels = offCtx.getImageData(0, 0, displayWidth, displayHeight).data;
        
        particles = [];
        const step = 4; // Sampling step
        for (let i = 0; i < displayHeight; i += step) {
            for (let j = 0; j < displayWidth; j += step) {
                const index = (Math.floor(i) * displayWidth + Math.floor(j)) * 4;
                if (index < pixels.length) {
                    const alpha = pixels[index + 3];
                    if (alpha > 0) {
                        const color = `rgba(228, 187, 59, ${alpha / 255})`;
                        particles.push(new Particle(j, i, color));
                    }
                }
            }
        }
    };

    const image = new Image();
    image.src = src;

    image.onload = () => {
        initParticles();
        if (!animationFrameId) {
            animate();
        }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Mouse Interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    
    // Initial Size
    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [src, height]);

  return (
    <div ref={containerRef} className="w-full flex justify-center items-center overflow-hidden">
      <canvas ref={canvasRef} className="max-w-full" />
    </div>
  );
}

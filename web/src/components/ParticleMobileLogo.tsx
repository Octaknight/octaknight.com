import { useEffect, useRef } from 'react';

interface ParticleMobileLogoProps {
  src: string;
  height?: number;
}

export default function ParticleMobileLogo({ src, height = 300 }: ParticleMobileLogoProps) {
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
    let isTouching = false;

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
      // For floating effect
      floatOffset: number;
      floatSpeed: number;

      constructor(x: number, y: number, color: string) {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.originX = x;
        this.originY = y;
        this.color = color;
        this.size = Math.random() * 2 + 1.5; 
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.ease = 0.08;
        this.friction = 0.90; 
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
        
        this.floatOffset = Math.random() * 100;
        this.floatSpeed = 0.01 + Math.random() * 0.02;
      }

      update() {
        this.dx = mouse.x - this.x;
        this.dy = mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        const repulsionRadius = isTouching ? 15000 : 8000;
        const repulsionStrength = isTouching ? -3000 : -1000;
        
        this.force = repulsionStrength / (this.distance || 1);

        if (this.distance < repulsionRadius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        // Add gentle floating motion
        const floatX = Math.sin(Date.now() * this.floatSpeed * 0.05 + this.floatOffset) * 0.5;
        const floatY = Math.cos(Date.now() * this.floatSpeed * 0.05 + this.floatOffset) * 0.5;

        // Return to origin with float
        const targetX = this.originX + floatX * 5; // Reduced float amplitude
        const targetY = this.originY + floatY * 5;

        this.x += (targetX - this.x) * this.ease;
        this.y += (targetY - this.y) * this.ease;

        this.x += this.vx;
        this.y += this.vy;

        this.vx *= this.friction;
        this.vy *= this.friction;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }
    }

    // Resize Handler
    const handleResize = () => {
        const parent = container.parentElement;
        if(parent) {
            const rect = parent.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            
            // Set display size (css pixels)
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${height}px`;
            
            // Set actual size in memory (scaled to account for extra pixel density)
            canvas.width = rect.width * dpr;
            canvas.height = height * dpr;
            
            // Scale context to ensure drawing operations use CSS pixels logic
            // BUT for particles, we want them to use the full resolution for crispness.
            // So we WON'T scale the context, but we will spawn particles across the full dpr-scaled width.
            
            if (image.complete && image.naturalWidth > 0) {
                initParticles();
            }
        }
    };

    const initParticles = () => {
        const displayWidth = canvas.width;
        const displayHeight = canvas.height;
        const dpr = window.devicePixelRatio || 1;
        
        if (displayWidth === 0 || displayHeight === 0) return;

        // Scale image to fit
        const scale = Math.min(displayWidth / image.width, displayHeight / image.height) * 0.75; 
        const w = image.width * scale;
        const h = image.height * scale;
        const x = (displayWidth - w) / 2;
        const y = (displayHeight - h) / 2;

        const offCanvas = document.createElement('canvas');
        offCanvas.width = displayWidth;
        offCanvas.height = displayHeight;
        const offCtx = offCanvas.getContext('2d');
        if (!offCtx) return;
        
        offCtx.drawImage(image, x, y, w, h);
        const pixels = offCtx.getImageData(0, 0, displayWidth, displayHeight).data;
        
        particles = [];
        const step = Math.floor(4 * dpr); 
        
        for (let i = 0; i < displayHeight; i += step) {
            for (let j = 0; j < displayWidth; j += step) {
                const index = (Math.floor(i) * displayWidth + Math.floor(j)) * 4;
                if (index < pixels.length) {
                    const alpha = pixels[index + 3];
                    if (alpha > 0) {
                        const opacity = (alpha / 255);
                        const color = `rgba(228, 187, 59, ${opacity})`;
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

    // Interaction Handlers
    const handleMove = (x: number, y: number) => {
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        // Map mouse coordinates to canvas coordinates
        mouse.x = (x - rect.left) * dpr;
        mouse.y = (y - rect.top) * dpr;
    };

    const handleMouseMove = (e: MouseEvent) => {
        isTouching = false;
        handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        isTouching = true;
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
    };

    const handleLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      isTouching = false;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleLeave);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchstart', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchstart', handleTouchMove);
      canvas.removeEventListener('touchend', handleLeave);
    };
  }, [src, height]);

  return (
    <div ref={containerRef} className="w-full flex justify-center items-center overflow-hidden touch-none">
      <canvas ref={canvasRef} className="max-w-full" />
    </div>
  );
}

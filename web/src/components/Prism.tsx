import React, { useEffect, useRef } from 'react';

type PrismProps = {
  className?: string;
  style?: React.CSSProperties;
};

const Prism: React.FC<PrismProps> = ({ className, style }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    let time = 0;
    
    // Wave Configuration
    const LINES = 45; 
    const SPEED = 0.0025; 
    const AMPLITUDE_Y = 50;
    
    // Particles Configuration
    const PARTICLE_COUNT = 35;
    let particles: Particle[] = [];
    
    let mouse = { x: 0, y: 0 };
    let targetMouse = { x: 0, y: 0 };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0) this.x = width;
        else if (this.x > width) this.x = 0;
        
        if (this.y < 0) this.y = height;
        else if (this.y > width) this.y = 0;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(228, 187, 59, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
       particles = [];
       for(let i=0; i<PARTICLE_COUNT; i++) {
         particles.push(new Particle());
       }
    };

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        time += SPEED; 
        
        // Mouse smoothing
        mouse.x += (targetMouse.x - mouse.x) * 0.05;
        mouse.y += (targetMouse.y - mouse.y) * 0.05;

        // Draw Particles first (background stars)
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        const centerY = height / 2;
        
        // Draw Waves
        for (let i = 0; i < LINES; i++) {
            ctx.beginPath();
            
            const t = i / LINES; 
            const phase = time * 2 + t * Math.PI * 2; 
            const currentAmp = AMPLITUDE_Y + Math.sin(time * 3 + t * 4) * 20;

            // Mouse interaction adds a slight bend/offset
            const mouseFactorY = (mouse.y / height - 0.5) * 40;
            const mouseFactorX = (mouse.x / width - 0.5) * 20;

            for (let x = 0; x <= width; x += 5) {
                // Complex ribbon wave calculation
                const y = centerY + mouseFactorY +
                          Math.sin(x * 0.003 + phase) * currentAmp * Math.sin(x * 0.001 + time) +
                          Math.cos(x * 0.002 - phase) * (currentAmp * 0.5);
                
                // Add parallax to X to simulate 3D rotation based on mouse X
                const dx = x + mouseFactorX * Math.sin(y * 0.01);

                if (x === 0) ctx.moveTo(dx, y);
                else ctx.lineTo(dx, y);
            }
            
            // Dynamic Shimmer Gradient
            // We shift the gradient stops over time to mimic light flowing along the metal
            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            
            // Base gold
            const g1 = `rgba(228, 187, 59, 0.1)`; 
            // Highlight - moves back and forth
            const highlightPos = 0.5 + Math.sin(time * 2 + t) * 0.3;
            // Highlight color
            const g2 = `rgba(255, 235, 180, ${0.4 + Math.sin(time*5)*0.2})`; 
            // End
            const g3 = `rgba(180, 140, 40, 0.1)`;

            gradient.addColorStop(0, g1);
            gradient.addColorStop(Math.max(0, Math.min(1, highlightPos)), g2);
            gradient.addColorStop(1, g3);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5; 
            // Add global composite operation for 'glow' feel
            // ctx.globalCompositeOperation = 'screen'; // Optional, can be heavy
            ctx.stroke();
            // ctx.globalCompositeOperation = 'source-over';
        }
        
        animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
        const rect = container.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        
        init();
    };

    const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        targetMouse.x = e.clientX - rect.left;
        targetMouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
       // Optional: center mouse on leave? 
       // targetMouse.x = width/2;
       // targetMouse.y = height/2;
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    handleResize(); // Initial setup
    animate();

    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
        ref={containerRef} 
        className={`relative w-full h-full overflow-hidden ${className || ''}`} 
        style={style}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default Prism;
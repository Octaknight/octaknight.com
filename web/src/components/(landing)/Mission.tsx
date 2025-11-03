import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Prism from "../Prism";

const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function Mission() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const css = getComputedStyle(document.documentElement);
    const gold = css.getPropertyValue("--color-primary-400").trim() || "#e4bb3b";
    const goldRGBA = (alpha = 1) => {
      try {
        const hex = gold.replace("#", "");
        if (hex.length === 6) {
          const r = parseInt(hex.slice(0, 2), 16);
          const g = parseInt(hex.slice(2, 4), 16);
          const b = parseInt(hex.slice(4, 6), 16);
          return `rgba(${r},${g},${b},${alpha})`;
        }
      } catch (e) {}
      return gold;
    };

    const PARTICLE_COUNT = 28;
    const MAX_LINK_DIST = 90;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }[] = [];

    const cursor = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width));
      canvas.height = Math.max(1, Math.floor(rect.height));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          r: 1.2 + Math.random() * 1.6,
        });
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      cursor.x = e.clientX - rect.left;
      cursor.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      cursor.x = -9999;
      cursor.y = -9999;
    };

    hero.addEventListener("pointermove", onMove, { passive: true });
    hero.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("resize", resize);

    resize();

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = cursor.x - p.x;
        const dy = cursor.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const factor = (120 - dist) / 120;
          p.vx -= (dx / 120) * factor * 0.02;
          p.vy -= (dy / 120) * factor * 0.02;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.995;
        p.vy *= 0.995;

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        ctx.beginPath();
        ctx.fillStyle = goldRGBA(0.14);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_LINK_DIST) {
            const alpha = 0.12 * (1 - d / MAX_LINK_DIST);
            ctx.strokeStyle = goldRGBA(alpha);
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (cursor.x > -500) {
        const grad = ctx.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, 80);
        grad.addColorStop(0, goldRGBA(0.08));
        grad.addColorStop(1, goldRGBA(0));
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, 80, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const timelineEvents = [
    {
      year: "2022",
      title: "Founded with a purpose",
      desc: "We started with a small team and a big idea: robotics that matter.",
    },
    {
      year: "2023",
      title: "Prototype to product",
      desc: "Our first mobility assistant proved robustness in real campuses.",
    },
    {
      year: "2024",
      title: "Scaling & integration",
      desc: "Expanding use-cases across logistics, campus mobility, and sustainability pilots.",
    },
    {
      year: "2025",
      title: "Towards collaborative intelligence",
      desc: "Focus on adaptive algorithms, low-power control, and human-first design.",
    },
  ];

  return (
    <section className="relative w-full overflow-x-hidden font-satoshi text-white">
      <div
        ref={heroRef}
        className="relative z-10 flex min-h-[72vh] flex-col items-center justify-center py-20 text-center"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{ zIndex: 0 }}
        />

        <div
          style={{
            width: "100%",
            height: "600px",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <Prism
            animationType="rotate"
            timeScale={0.2}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0.5}
            glow={1}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
              background:
                "linear-gradient(to bottom, #000 0%, transparent 25%, transparent 75%, #000 100%)",
            }}
          />
        </div>

        <div
          style={{ zIndex: 3 }}
          className="relative w-full max-w-5xl px-6 mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary-400)]"
          >
            About Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            We are driven by the vision of a{" "}
            <span className="text-[var(--color-primary-400)]">smarter</span>,{" "}
            <span className="text-[var(--color-primary-400)]">sustainable</span> future.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-5 mx-auto max-w-2xl text-sm md:text-base text-gray-300"
          >
            Our mission is to shape the future of robotics through intelligent,
            sustainable systems that empower people and communities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05 }}
            className="mt-8 flex justify-center"
          >
            <Link
              to={"/about"}
              className="cursor-pointer inline-flex items-center gap-3 rounded-full bg-[var(--color-primary-400)] px-7 py-3 text-sm font-medium text-black hover:bg-[var(--color-primary-300)] transition-all duration-300 shadow-lg shadow-[var(--color-primary-500)]/10"
            >
              <span className="whitespace-nowrap">Explore our story</span>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[var(--color-primary-400)]">
                <ArrowRight className="h-3 w-3 text-white" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      <section className="relative z-10 border-t border-white/6 px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-[var(--color-primary-800)]/50 p-8 text-left"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              Our <span className="text-[var(--color-primary-400)]">Mission</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-300">
              To build intelligent, adaptive robotic systems that blend seamlessly
              into human environments, augmenting our potential and empowering
              communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-[var(--color-primary-800)]/50 p-8 text-left"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              Our <span className="text-[var(--color-primary-400)]">Vision</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-300">
              A sustainable future where smart, human-first automation solves
              complex challenges, fosters equitable growth, and preserves our
              planet for generations to come.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-semibold"
          >
            Our <span className="text-[var(--color-primary-400)]">Journey</span>
          </motion.h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto max-w-2xl"
        >
          <div className="absolute left-4 top-2 h-full w-px -translate-x-1/2 bg-[var(--color-primary-800)]/50" />

          {timelineEvents.map((it, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative mb-10 pl-12 text-left"
            >
              <div className="absolute left-0 top-1 -translate-x-[calc(50%-0.5rem)]">
                <div className="rounded-full bg-[var(--color-primary-950)] border border-[var(--color-primary-800)] px-3 py-1 text-[var(--color-primary-500)] text-xs font-medium">
                  {it.year}
                </div>
              </div>
              <h4 className="text-[var(--color-primary-400)] font-semibold text-lg">
                {it.title}
              </h4>
              <p className="mt-2 text-sm text-gray-300">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </section>
  );
}
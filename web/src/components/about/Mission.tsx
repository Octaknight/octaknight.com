import { motion } from "framer-motion";

export default function Mission(){

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

    return(
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
    )
}
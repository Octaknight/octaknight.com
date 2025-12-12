import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background with Heavy Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/octaknight.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-[var(--color-primary-400)] font-satoshi font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4">
            Who We Are
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-sansation text-white leading-tight uppercase tracking-tight">
            Forging the <br className="hidden md:block" />
            <span className="text-white/90">Future of Automation</span>
          </h1>
          
          <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl mx-auto font-satoshi font-light tracking-wide">
            Pioneering intelligent robotics to seamlessly augment human potential and redefine industrial efficiency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-8 flex justify-center"
        >
          <div className="h-px w-24 bg-[var(--color-primary-400)]/50" />
        </motion.div>
      </div>
    </section>
  );
}

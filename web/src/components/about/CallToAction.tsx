// src/components/about/CallToAction.tsx

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <section className="py-24 bg-secondary">
      <motion.div
        className="container flex flex-col items-center max-w-5xl px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* THE FIX: Changed text-foreground to text-primary for guaranteed contrast */}
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Ready to Build the Future?
        </h2>
        
        <p className="max-w-2xl mt-4 text-lg text-muted-foreground">
          Whether you have a specific project in mind or just want to learn more
          about the potential of automation, we're here to talk.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-3 mt-8 font-semibold transition-colors duration-300 rounded-md shadow-lg text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Get in Touch
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;
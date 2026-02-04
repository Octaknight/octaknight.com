// src/components/about/CoreValues.tsx

import { motion, type Variants } from "framer-motion";
import { coreValues } from "@/data/coreValues";

const CoreValues = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // A subtle delay for each card
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    // Using `bg-secondary` to alternate the background color again
    <section className="py-24">
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The Principles <span className="text-[var(--color-primary-400)]">That Guide Us</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our values are the foundation of our company and the blueprint for our success.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 text-center rounded-lg bg-card"
              variants={itemVariants}
            >
              <div className="p-4 mb-4 rounded-full bg-primary/10">
                <value.Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
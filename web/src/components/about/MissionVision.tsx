import { motion, type Variants } from "framer-motion";

const MissionVision = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-secondary">
      <motion.div
        className="container grid max-w-5xl grid-cols-1 gap-12 px-4 mx-auto md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            To empower industries with intelligent, reliable, and efficient automation
            solutions that drive productivity and unlock human potential. We are
            committed to solving complex challenges with cutting-edge robotic
            technology.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Our Vision
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            To be a global leader in the robotics revolution, creating a future
            where autonomous systems work in seamless harmony with people, fostering
            unprecedented levels of innovation, safety, and progress across all
            sectors.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionVision;
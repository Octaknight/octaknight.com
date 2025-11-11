// src/components/about/Timeline.tsx

import { motion, type Variants } from "framer-motion";
import { timelineEvents } from "@/data/timeline";
import { Rocket } from "lucide-react"; // A fitting icon for milestones

const Timeline = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, // Each item will animate in 0.4s after the previous one
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const lineVariants: Variants = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 2, ease: "easeIn" } },
  };

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A history of innovation and growth.
          </p>
        </div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* The vertical line that connects the timeline events */}
          <motion.div
            className="absolute left-4 top-0 w-1 bg-border rounded-full"
            variants={lineVariants}
            style={{ originY: 0 }} // Animate from the top
          />

          {/* Mapping over the timeline events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="relative pl-12 mb-12 last:mb-0"
              variants={itemVariants}
            >
              {/* The dot on the timeline */}
              <div className="absolute left-4 top-1 w-1 h-1 transform -translate-x-1/2 bg-primary rounded-full">
                <div className="absolute w-6 h-6 bg-primary rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
                <Rocket className="absolute w-8 h-8 p-1 text-primary-foreground transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full" />
              </div>
              
              {/* The content of the timeline event */}
              <p className="font-semibold text-primary">{event.year}</p>
              <h3 className="mt-1 text-xl font-bold text-foreground">
                {event.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{event.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
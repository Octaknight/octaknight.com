// src/components/contact/ContactInfo.tsx
import { motion, type Variants } from "framer-motion";
import { contactInfoItems } from "@/data/contactInfo"; // Assuming you have a path alias setup for '@/'

const ContactInfo = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-foreground">
          Get in Touch Directly
        </h2>
        <p className="text-muted-foreground">
          Find us at our headquarters or contact us via phone or email.
        </p>
      </div>
      <div className="space-y-6">
        {contactInfoItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-4 p-4 rounded-lg bg-card"
          >
            <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
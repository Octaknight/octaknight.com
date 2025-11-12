// src/components/contact/ContactForm.tsx
import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      viewport={{ once: true, amount: 0.2 }}
      className="p-8 bg-card rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-semibold mb-6 text-card-foreground">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div variants={itemVariants}>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-background border border-secondary rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            required
          />
        </motion.div>
        {/* ... (repeat for other form fields) */}
        <motion.div variants={itemVariants}>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-background border border-secondary rounded-md focus:ring-2 focus:ring-primary focus:outline-none" required />
        </motion.div>
        <motion.div variants={itemVariants}>
          <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">Subject</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 bg-background border border-secondary rounded-md focus:ring-2 focus:ring-primary focus:outline-none" required />
        </motion.div>
        <motion.div variants={itemVariants}>
          <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
          <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 bg-background border border-secondary rounded-md focus:ring-2 focus:ring-primary focus:outline-none" required ></textarea>
        </motion.div>
        <motion.div variants={itemVariants}>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors duration-300"
          >
            Submit Message
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
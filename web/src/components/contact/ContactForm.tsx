import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const inputClasses = 
    "w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl " +
    "text-white placeholder:text-white/30 font-satoshi outline-none transition-all duration-300 " +
    "focus:border-primary-500/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-primary-500/50";

  const labelClasses = "block text-sm font-medium text-white/70 mb-2 font-sansation";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl -z-10" /> */}
      
      <div className="p-8 md:p-10 bg-[#121214] border border-white/5 rounded-3xl shadow-2xl backdrop-blur-sm">
        <h2 className="text-2xl font-sansation font-bold mb-8 text-white">
          Send a Message
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={labelClasses}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className={labelClasses}>Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project Inquiry..."
              value={formData.subject}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your project requirements..."
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 mt-4 rounded-xl font-sansation font-bold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
              isSubmitting
                ? "bg-white/10 text-white/50 cursor-wait"
                : "bg-[var(--color-primary-500)] text-[#0E0E10] hover:bg-[var(--color-primary-400)] hover:shadow-[0_0_20px_-5px_var(--color-primary-500)]"
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E10] relative overflow-hidden text-white selection:bg-primary-500/30">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-sansation font-bold tracking-tighter mb-6 text-white">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-satoshi max-w-2xl mx-auto leading-relaxed">
              Ready to automate your future? Reach out to our engineering team for inquiries about robotics, tooling, or IoT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
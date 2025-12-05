import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Navbar from "@/components/Navbar";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Contact = () => {
  return (
    <>
      <Navbar page="contact"/>
      <main className="min-h-screen bg-[#0E0E10] relative overflow-hidden text-white selection:bg-primary-500/30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-20"
          >
            {/* 
               UPDATED CONTAINER:
               - Reduced height from 20rem to 12rem max.
               - This ensures the text looks large and the container fits snugly.
            */}
            <div className="h-[8rem] sm:h-[10rem] md:h-[12rem] flex items-center justify-center w-full">
              <div className="w-full max-w-5xl h-full flex items-center justify-center px-4">
                <TextHoverEffect text="Get in Touch" />
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-white/60 font-satoshi max-w-2xl mx-auto leading-relaxed px-4 mt-6">
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
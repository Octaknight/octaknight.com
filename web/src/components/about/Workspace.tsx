import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from "./ImageModal";

const workspaceItems = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
    title: "Advanced R&D",
    desc: "Where prototypes come to life",
    className: "col-span-1 md:col-span-2 md:row-span-2 h-64 md:h-full",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop",
    title: "Precision Engineering",
    desc: "Micro-assembly stations",
    className: "col-span-1 md:col-span-1 md:row-span-1 h-64",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2606&auto=format&fit=crop",
    title: "AI Integration",
    desc: "Neural network training hub",
    className: "col-span-1 md:col-span-1 md:row-span-1 h-64",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    title: "Testing Facility",
    desc: "Rigorous quality assurance",
    className: "col-span-1 md:col-span-2 md:row-span-1 h-64",
  },
];

const Workspace = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="pt-24 pb-12 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-primary-900)_0%,_transparent_40%)] opacity-20" />
        
        <div className="container max-w-6xl px-4 mx-auto relative z-10">
          <div className="mb-16 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-satoshi tracking-tight text-white"
            >
              Inside the <span className="text-[var(--color-primary-400)]">Lab</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto font-satoshi"
            >
              A glimpse into the high-tech environment where we forge the future of automation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
            {workspaceItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-2xl cursor-pointer border border-white/5 ${item.className}`}
                onClick={() => setSelectedImage(item.url)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />
                
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="object-cover w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
                />

                <div className="absolute bottom-0 left-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-satoshi">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--color-primary-400)] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            imageUrl={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Workspace;
// src/components/about/Workspace.tsx

import { useState } from "react"; // 1. Import useState
import { motion, AnimatePresence, type Variants } from "framer-motion"; // 2. Import AnimatePresence
import ImageModal from "./ImageModal"; // 3. Import the new modal component

const imageUrls = [
  "/images/workspace/ws-1.jpg",
  "/images/workspace/ws-2.jpg",
  "/images/workspace/ws-3.jpg",
  "/images/workspace/ws-4.jpg",
];

const Workspace = () => {
  // 4. Add state to track the selected image URL
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // (The variant definitions remain the same)
  const containerVariants: Variants = { /* ... */ };
  const imageVariants: Variants = { /* ... */ };

  return (
    // Use a React Fragment `<>` to allow multiple top-level elements
    <>
      <section className="py-24 bg-background">
        <div className="container max-w-5xl px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A Glimpse Into Our Workspace
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Where ideas take shape and innovation comes to life.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {imageUrls.map((url, index) => (
              <motion.div
                key={index}
                className="relative h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer" // 5. Add cursor-pointer
                variants={imageVariants}
                style={index === 0 ? { gridColumn: "span 2 / span 2" } : {}}
                onClick={() => setSelectedImage(url)} // 6. Set the selected image on click
              >
                <img
                  src={url}
                  alt={`Workspace image ${index + 1}`}
                  className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Conditionally render the modal using AnimatePresence */}
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
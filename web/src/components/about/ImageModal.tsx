// src/components/about/ImageModal.tsx

import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void; // A function to handle closing the modal
}

const ImageModal = ({ imageUrl, onClose }: ImageModalProps) => {
  return (
    // The backdrop
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Close modal when clicking the backdrop
    >
      {/* The image container */}
      <motion.div
        className="relative"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
      >
        <img
          src={imageUrl}
          alt="Full screen view"
          className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
        />
      </motion.div>

      {/* The close button */}
      <motion.button
        className="absolute top-4 right-4 text-white/80 hover:text-white"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
        exit={{ opacity: 0 }}
      >
        <X size={32} />
      </motion.button>
    </motion.div>
  );
};

export default ImageModal;
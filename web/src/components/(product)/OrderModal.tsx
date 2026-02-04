import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, ExternalLink } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function OrderModal({ isOpen, onClose, productName }: OrderModalProps) {
  if (!productName) {
    productName = "OctaArm Series X";
  }
  const [message, setMessage] = useState(`I am interested in ordering the ${productName}. Please provide more details regarding pricing and availability.`);
  const handleOpenMail = () => {
    const email = "contact@octaknight.com";
    const subject = encodeURIComponent(`Inquiry: ${productName}`);
    const body = encodeURIComponent(message);
    
    // Use Gmail specific link for better UX on desktop, or fallback to mailto
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${subject}&body=${body}`;
    
    // Check if it's a mobile device to decide between mailto and gmail web
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    } else {
        window.open(gmailUrl, "_blank", "noopener,noreferrer");
    }
    
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#121214] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[var(--color-primary-500)]/10 rounded-full text-[var(--color-primary-500)]">
                  <Mail className="w-6 h-6" />
                </div>
                <button 
                  onClick={onClose}
                  className="text-white/40 hover:text-white transition-colors hover:cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl font-sansation font-bold text-white mb-2">
                Inquire about {productName}
              </h3>
              <p className="text-white/60 font-satoshi mb-6">
                Customize your inquiry message below. We'll get back to you shortly.
              </p>

              <div className="mb-6">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white font-satoshi focus:outline-none focus:border-[var(--color-primary-500)] focus:ring-1 focus:ring-[var(--color-primary-500)] transition-all resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 px-4 rounded-xl bg-white/5 text-white font-satoshi hover:bg-white/10 transition-colors hover:cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleOpenMail}
                  className="flex-1 py-3 px-4 rounded-xl bg-[var(--color-primary-500)] text-[#0E0E10] font-sansation font-bold hover:bg-[var(--color-primary-400)] transition-colors flex items-center justify-center gap-2 hover:cursor-pointer"
                >
                  Open in Mail <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Bottom Progress/Border Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-[var(--color-primary-500)] to-transparent" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

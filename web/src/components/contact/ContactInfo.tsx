import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactInfoItems } from "@/data/contactInfo";
import { Copy, X, ExternalLink, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export default function ContactInfo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ title: string; content: string; action: string; phones?: string[] } | null>(null);

  // Handle copying content to clipboard
  const handleCopy = (e: React.MouseEvent, content: string, _label: string) => {
    e.stopPropagation(); // Prevent card click
    navigator.clipboard.writeText(content);
    toast.success(`Copied to clipboard`, {
      style: {
        background: '#0E0E10',
        color: '#fff',
        borderColor: 'rgba(255,255,255,0.1)'
      }
    });
  };

  // Determine action type based on title
  const getActionType = (title: string) => {
    if (title.toLowerCase().includes("headquarters")) return "location";
    if (title.toLowerCase().includes("email")) return "email";
    if (title.toLowerCase().includes("call")) return "phone";
    return "none";
  };

  // Handle Card Click
  const handleCardClick = (item: any) => {
    const action = getActionType(item.title);
    if (action === "none") return;

    setSelectedItem({ ...item, action });
    setModalOpen(true);
  };

  // Execute the confirmed action
  const confirmAction = () => {
    if (!selectedItem) return;

    if (selectedItem.action === "location") {
      window.open(`https://maps.app.goo.gl/W3M3n2xad63EjWUc8`, "_blank");
    } 
    else if (selectedItem.action === "email") {
      const email = "contact@octaknight.com";

      const subject = encodeURIComponent("Contact Us");
      const body = encodeURIComponent("Hello, I am interested in your product/service");

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        email
      )}&su=${subject}&body=${body}`;

      // open Gmail compose in a new tab
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    }
    // Phone action is now handled by individual phone buttons in modal

    setModalOpen(false);
  };

  // Handle individual phone number action
  const handlePhoneAction = (phoneNumber: string) => {
    if (isMobileDevice()) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigator.clipboard.writeText(phoneNumber);
      toast.success("Phone number copied to clipboard", {
        style: {
          background: '#0E0E10',
          color: '#fff',
          borderColor: 'rgba(255,255,255,0.1)'
        }
      });
    }
    setModalOpen(false);
  };

  // Render the Modal Content based on action
  const renderModalContent = () => {
    if (!selectedItem) return null;

    const isMobile = isMobileDevice();

    switch (selectedItem.action) {
      case "location":
        return {
          title: "Open Google Maps?",
          desc: "You will be redirected to Google Maps to view our location.",
          btn: "Open Maps",
          icon: <MapPin className="w-5 h-5" />
        };
      case "email":
        return {
          title: "Open Email?",
          desc: `This will open Gmail to compose an email to ${selectedItem.content}.`,
          btn: "Open Mail",
          icon: <Mail className="w-5 h-5" />
        };
      case "phone":
        return {
          title: isMobile ? "Select a Line to Call" : "Select a Line to Copy",
          desc: isMobile 
            ? "Choose which number you'd like to call:" 
            : "Choose which number you'd like to copy to clipboard:",
          icon: <Phone className="w-5 h-5" />,
          showPhoneOptions: true
        };
      default:
        return null;
    }
  };

  const modalData = renderModalContent();

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="grid gap-6">
          {contactInfoItems.map((item, index) => {
            const action = getActionType(item.title);
            const isClickable = action !== "none";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleCardClick(item)}
                className={`group relative flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300
                  ${isClickable ? 'cursor-pointer hover:bg-white/[0.07] hover:border-[var(--color-primary-500)]/30' : 'cursor-default'}
                `}
              >
                {/* Icon Box */}
                <div className="flex-shrink-0 p-3 rounded-xl bg-[var(--color-primary-500)]/10 text-[var(--color-primary-500)] group-hover:bg-[var(--color-primary-500)] group-hover:text-[#0E0E10] transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                
                {/* Text Content */}
                <div className="flex-1 pr-10">
                  <h3 className="text-lg font-sansation font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  {action === "phone" && (item as any).phones ? (
                    <div className="space-y-1">
                      {(item as any).phones.map((phone: string, idx: number) => (
                        <p key={idx} className="text-white/60 font-satoshi group-hover:text-white/90 transition-colors">
                          {phone}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white/60 font-satoshi group-hover:text-white/90 transition-colors break-words">
                      {item.content}
                    </p>
                  )}
                </div>

                {/* Copy Button (Only for clickable items) */}
                {isClickable && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      // For phone items, copy only the first number
                      const contentToCopy = action === "phone" && (item as any).phones?.[0] 
                        ? (item as any).phones[0] 
                        : item.content;
                      handleCopy(e, contentToCopy, item.title);
                    }}
                    // CHANGED: Removed initial={{ opacity: 0 }}
                    // CHANGED: Added opacity-100 (mobile default) and lg:opacity-0 (desktop default)
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 text-white/50 hover:bg-[var(--color-primary-500)] hover:text-[#0E0E10] transition-all duration-200 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-4 h-4" />
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Box */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.5 }}
          className="p-6 mt-8 rounded-2xl bg-gradient-to-r from-[var(--color-primary-500)]/20 to-transparent border border-[var(--color-primary-500)]/20"
        >
           <h4 className="text-[var(--color-primary-400)] font-sansation font-bold mb-2">Looking for a custom solution?</h4>
           <p className="text-sm text-white/70 font-satoshi">Our engineers can build tailored automation systems for your specific needs.</p>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {modalOpen && modalData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#121214] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-[var(--color-primary-500)]/10 rounded-full text-[var(--color-primary-500)]">
                    {modalData.icon}
                  </div>
                  <button 
                    onClick={() => setModalOpen(false)}
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-xl font-sansation font-bold text-white mb-2">
                  {modalData.title}
                </h3>
                <p className="text-white/60 font-satoshi mb-6">
                  {modalData.desc}
                </p>


                {/* Action Buttons - Different layout for phone options */}
                {modalData.showPhoneOptions && selectedItem?.phones ? (
                  <div className="space-y-3">
                    {selectedItem.phones.map((phone, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handlePhoneAction(phone)}
                        className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[var(--color-primary-500)] text-white hover:text-[#0E0E10] font-satoshi transition-all duration-200 flex items-center justify-center gap-2 group"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="font-sansation font-bold">{phone}</span>
                      </motion.button>
                    ))}
                    <button
                      onClick={() => setModalOpen(false)}
                      className="w-full py-3 px-4 rounded-xl bg-white/5 text-white/60 font-satoshi hover:bg-white/10 hover:text-white transition-colors mt-2"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() => setModalOpen(false)}
                      className="flex-1 py-3 px-4 rounded-xl bg-white/5 text-white font-satoshi hover:bg-white/10 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmAction}
                      className="flex-1 py-3 px-4 rounded-xl bg-[var(--color-primary-500)] text-[#0E0E10] font-sansation font-bold hover:bg-[var(--color-primary-400)] transition-colors flex items-center justify-center gap-2"
                    >
                      {modalData.btn} <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
              
              {/* Bottom Progress/Border Accent */}
              <div className="h-1 w-full bg-gradient-to-r from-[var(--color-primary-500)] to-transparent" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
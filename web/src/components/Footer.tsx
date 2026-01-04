import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleLogo from './ParticleLogo';
import ParticleMobileLogo from './ParticleMobileLogo';
import { TextHoverEffect } from './ui/text-hover-effect';
import SolutionsMegaMenu from './SolutionsMegaMenu';

declare global {
  interface Window {
    footerMenuTimeout: any;
  }
}

export default function Footer() {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Tool Management");

  if (location.pathname === '/coming-soon' || location.pathname === '/coming-soon/') {
    return null;
  }

  return (
    <>
      <footer className="relative bg-black text-white overflow-hidden pt-10 md:pt-20 pb-10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-20">
            <div className="md:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium tracking-wider text-white/70 uppercase mb-4">
                <img src="/logo.png" alt="Logo" className="w-4 h-4 rounded-full" />
                Octaknight Pvt Ltd
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-4xl md:text-6xl font-sansation font-bold leading-tight mb-[-10px] md:mb-[-20px]">
                  Engineering the
                </h2>
                <div className="h-[60px] md:h-[100px] w-full mr-0 md:mr-[-60px] -ml-1 md:ml-0">
                  <TextHoverEffect text="future of automation" />
                </div>
              </div>
            </div>

            <div className="md:col-span-1"></div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:col-span-2 md:block md:space-y-6 mt-5">
               <div 
                  className="space-y-6 relative"
                  onMouseLeave={() => {
                    window.footerMenuTimeout = setTimeout(() => {
                      setShowMegaMenu(false);
                    }, 300);
                  }}
               >
                  <h3 className="text-sm font-bold tracking-widest text-[var(--color-primary-400)] uppercase cursor-pointer">Solutions & Products</h3>
                  <ul className="space-y-4">
                    <li 
                        onMouseEnter={() => {
                            if (window.footerMenuTimeout) clearTimeout(window.footerMenuTimeout);
                            setSelectedCategory("Tool Management");
                            setShowMegaMenu(true);
                        }}
                    >
                        <Link to="/tool-management" className="text-white/70 hover:text-[var(--color-primary-400)] transition-colors font-satoshi block py-1">Tool Management</Link>
                    </li>
                    <li
                        onMouseEnter={() => {
                            if (window.footerMenuTimeout) clearTimeout(window.footerMenuTimeout);
                            setSelectedCategory("Robotics");
                            setShowMegaMenu(true);
                        }}
                    >
                        <Link to="/coming-soon" className="text-white/70 hover:text-[var(--color-primary-400)] transition-colors font-satoshi block py-1">Robotics</Link>
                    </li>
                    <li
                        onMouseEnter={() => {
                            if (window.footerMenuTimeout) clearTimeout(window.footerMenuTimeout);
                            setSelectedCategory("IoT Devices");
                            setShowMegaMenu(true);
                        }}
                    >
                        <Link to="/coming-soon" className="text-white/70 hover:text-[var(--color-primary-400)] transition-colors font-satoshi block py-1">IoT Devices</Link>
                    </li>
                  </ul>

                  <AnimatePresence>
                    {showMegaMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-32 left-1/2 -translate-x-1/2 z-[100] hidden md:block"
                        onMouseEnter={() => {
                            if (window.footerMenuTimeout) clearTimeout(window.footerMenuTimeout);
                        }}
                        onMouseLeave={() => {
                            window.footerMenuTimeout = setTimeout(() => {
                              setShowMegaMenu(false);
                            }, 300);
                        }}
                      >
                        <SolutionsMegaMenu selectedCategory={selectedCategory} />
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:col-span-2 md:block md:space-y-6 mt-5">
              <div className="space-y-6">
                  <h3 className="text-sm font-bold tracking-widest text-[var(--color-primary-400)] uppercase">Company</h3>
                  <ul className="space-y-4">
                    <li><Link to="/" className="text-white/70 hover:text-[var(--color-primary-400)] transition-colors font-satoshi">Home</Link></li>
                    <li><Link to="/about" className="text-white/70 hover:text-[var(--color-primary-400)] transition-colors font-satoshi">About Us</Link></li>
                    <li><Link to="/contact" className="text-white/70 hover:text-[var(--color-primary-400)] transition-colors font-satoshi">Contact</Link></li>
                    <li><Link to="/coming-soon" className="text-white/70 hover:text-[var(--color-primary-400)] transition-colors font-satoshi">Documentation</Link></li>
                  </ul>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <h3 className="text-sm font-bold tracking-widest text-[var(--color-primary-400)] uppercase mt-5">Connect</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center gap-2 text-white/70 hover:text-[var(--color-primary-400)] transition-colors font-satoshi">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-white/70 hover:text-[var(--color-primary-400)] transition-colors font-satoshi">
                    <Twitter className="w-4 h-4" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-white/70 hover:text-[var(--color-primary-400)] transition-colors font-satoshi">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-white/70 hover:text-[var(--color-primary-400)] transition-colors font-satoshi">
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:flex relative w-full h-[600px] overflow-hidden justify-center items-end opacity-40 hover:opacity-100 transition-opacity duration-700">
          <ParticleLogo src="/logo.png" height={600} />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
        </div>

        <div className="flex md:hidden relative w-full h-[300px] overflow-hidden justify-center items-end opacity-60">
          <ParticleMobileLogo src="/logo.png" height={300} />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-mono">
            <p>© {currentYear} OctaKnight. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
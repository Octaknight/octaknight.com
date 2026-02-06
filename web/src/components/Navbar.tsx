import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import OrderModal from '@/components/(product)/OrderModal';

export default function Navbar({page}: {page: string}) {
    const [navState, setNavState] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isStickyAOTM, setIsStickyAOTM] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const isToolsPage = page.toLowerCase() === "tools" || page.toLowerCase() === "contact" || page.toLowerCase() === "about";
    const isAOTMPage = page.toLowerCase() === "aotm";

    useEffect(() => {
        if (isAOTMPage) {
            const handleAOTMScroll = () => {
                const heroHeight = window.innerHeight;
                setIsStickyAOTM(window.scrollY > heroHeight * 0.9);
            };

            window.addEventListener('scroll', handleAOTMScroll);
            return () => window.removeEventListener('scroll', handleAOTMScroll);
        }

        if (isToolsPage) {
            setNavState(0);
            setIsHidden(false);
            return;
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 50) {
                setNavState(0);
            } else if (currentScrollY >= 100 && currentScrollY < 2000) {
                setNavState(1); 
            } else {
                setNavState(2);
            }
            if (currentScrollY > 1500) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }    
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientY < 150) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isToolsPage, isAOTMPage]);

    const navBaseClasses = "fixed top-0 left-1/2 -translate-x-1/2 w-full flex items-center justify-between z-50";

    const navDynamicClasses: any = {
        0: "py-4 px-4 md:px-8",
        1: "py-4 px-4 md:py-3 md:px-6 md:mt-4 md:max-w-2xl bg-[#0E0E10]/90 backdrop-blur-md md:bg-[#0E0E10] md:rounded-full md:shadow-lg",
        2: "py-4 px-4 md:py-3 md:px-6 md:mt-4 md:max-w-3xl bg-[#0E0E10]/90 backdrop-blur-md md:bg-[#0E0E10] md:rounded-full md:shadow-lg",
        3: "py-4 px-4 md:px-8"
    };
    
    const primaryLinkContainerClasses = "flex items-center space-x-6 sm:space-x-8 text-sm sm:text-base font-satoshi";
    const solutionsLinkContainerClasses = "flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm font-satoshi text-[var(--color-primary-200)]";

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    };

    const shouldHide = isHidden && !isHovered;

    return (
        <>
            <motion.nav
                layout
                animate={{ 
                    y: shouldHide ? -100 : 0,
                    opacity: shouldHide ? 0 : 1
                }}
                transition={{ type: "spring", stiffness: 170, damping: 30, duration: 0.1 }}
                className={`${navBaseClasses} ${navDynamicClasses[navState]} ${isToolsPage || isAOTMPage ? 'backdrop-blur-md bg-black/20 border-b border-white/5' : ''}`}
            >
                <div className="flex items-center overflow-hidden">
                    <Link to="/" className="cursor-pointer flex items-center space-x-2 sm:space-x-4 z-10">
                        <motion.img
                            layout
                            src="/logo.png"
                            alt="Octaknight Labs Logo"
                            className={`${navState > 0 ? 'h-8 w-8 sm:h-10 sm:w-10' : 'h-7 w-7 sm:h-8 sm:w-8'}`}
                        />
                        <AnimatePresence>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="text-white/80 hover:text-white text-base sm:text-xl font-sansation whitespace-nowrap"
                                >
                                    OCTAKNIGHT LABS
                                </motion.span>
                        </AnimatePresence>
                    </Link>
                </div>

                {isAOTMPage && (
                <span
                    className={`fixed top-0 left-0 flex justify-center mt-20 lg:mt-1 right-0 transition-all duration-500 ${
                        isStickyAOTM
                            ? 'translate-y-0 opacity-100'
                            : '-translate-y-full opacity-0'
                    }`}
                >
                    <div className="flex items-center gap-4 md:gap-6 px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:border-white/20 transition-colors duration-500">
                        <div className="hidden md:flex items-center gap-3">
                            <span className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">
                                AOTM Series
                            </span>
                        </div>

                        <div className="hidden md:block w-px h-4 bg-white/10" />
                            
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}
                                className="cursor-pointer text-white/80 hover:text-white text-sm font-medium transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] whitespace-nowrap"
                            >
                                View Specs
                            </button>
                                
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="cursor-pointer group relative px-4 py-1.5 bg-[var(--color-primary-300)] text-black rounded-full font-bold text-sm hover:bg-[var(--color-primary-400)] transition-all duration-300 flex items-center gap-2 overflow-hidden"
                            >
                                <span className="relative z-10">Order Now</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                                
                                <div className="absolute inset-0 bg-[var(--color-primary-400)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </div>
                    </div>
                </span>
            )}

            <OrderModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                productName='AOTM Series'
            />

                <div className="relative h-6 hidden md:flex items-center justify-end">
                    <AnimatePresence mode="wait">
                        {isToolsPage ? (
                             <motion.div
                                key="tools-nav"
                                variants={linkVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.2 }}
                                className={primaryLinkContainerClasses}
                            >
                                <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                                <Link to="/about" className="text-white/60 hover:text-white transition-colors">About</Link>
                                <Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact us</Link>
                            </motion.div>
                        ) : navState < 2 ? (
                            <motion.div
                                key="primary"
                                variants={linkVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.2 }}
                                className={primaryLinkContainerClasses}
                            >
                                <Link to="/about" className="text-white/60 hover:text-white transition-colors">About</Link>
                                <Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact us</Link>
                                <Link to="/tool-management" className="text-white/60 hover:text-white transition-colors">Explore</Link>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="solutions"
                                variants={linkVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.2 }}
                                className={solutionsLinkContainerClasses}
                            >
                                <div 
                                    className="relative h-full flex items-center justify-center cursor-pointer group"
                                    onMouseEnter={() => setActiveCategory('robotics')}
                                    onMouseLeave={() => setActiveCategory(null)}
                                >
                                    <Link to="/coming-soon" className="text-white/60 hover:text-white transition-colors py-2">
                                        Robotics
                                    </Link>
                                    <AnimatePresence>
                                        {activeCategory === 'robotics' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 px-3 bg-[#0E0E10]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl min-w-[max-content]"
                                            >
                                                <span className="text-white/40 text-xs font-medium whitespace-nowrap block px-2 py-1">Coming Soon</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div 
                                    className="relative h-full flex items-center justify-center cursor-pointer group"
                                    onMouseEnter={() => setActiveCategory('tools')}
                                    onMouseLeave={() => setActiveCategory(null)}
                                >
                                    <Link to="/tool-management" className="text-white/60 hover:text-white transition-colors py-2 whitespace-nowrap">
                                        Tool Management
                                    </Link>
                                    <AnimatePresence>
                                        {activeCategory === 'tools' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-1.5 bg-[#0E0E10]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col gap-1 min-w-[140px]"
                                            >
                                                <Link 
                                                    to="/aotm" 
                                                    className="block px-3 py-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white text-sm transition-all whitespace-nowrap"
                                                >
                                                    AOTM I
                                                </Link>
                                                <Link 
                                                    to="/aotm" 
                                                    className="block px-3 py-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white text-sm transition-all whitespace-nowrap"
                                                >
                                                    AOTM XL
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div 
                                    className="relative h-full flex items-center justify-center cursor-pointer group"
                                    onMouseEnter={() => setActiveCategory('iot')}
                                    onMouseLeave={() => setActiveCategory(null)}
                                >
                                    <Link to="/coming-soon" className="text-white/60 hover:text-white transition-colors py-2">
                                        IoT devices
                                    </Link>
                                    <AnimatePresence>
                                        {activeCategory === 'iot' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 px-3 bg-[#0E0E10]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl min-w-[max-content]"
                                            >
                                                <span className="text-white/40 text-xs font-medium whitespace-nowrap block px-2 py-1">Coming Soon</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden z-50 p-2 text-white/60 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMobileMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 400 }}
                            className="fixed top-20 right-4 bg-[#0E0E10]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 z-50 md:hidden overflow-hidden"
                        >
                            <div className="flex flex-col p-6 space-y-4 font-satoshi min-w-[200px]">
                                {isToolsPage ? (
                                    <>
                                        <Link 
                                            to="/" 
                                            className="text-white/70 hover:text-white transition-colors text-base py-2 px-3 rounded-lg hover:bg-white/5"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Home
                                        </Link>
                                        <Link 
                                            to="/about" 
                                            className="text-white/70 hover:text-white transition-colors text-base py-2 px-3 rounded-lg hover:bg-white/5"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            About
                                        </Link>
                                        <Link 
                                            to="/contact" 
                                            className="text-white/70 hover:text-white transition-colors text-base py-2 px-3 rounded-lg hover:bg-white/5"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Contact us
                                        </Link>
                                    </>
                                ) : navState < 2 ? (
                                    <>
                                        <Link 
                                            to="/about" 
                                            className="text-white/70 hover:text-white transition-colors text-base py-2 px-3 rounded-lg hover:bg-white/5"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            About
                                        </Link>
                                        <Link 
                                            to="/contact" 
                                            className="text-white/70 hover:text-white transition-colors text-base py-2 px-3 rounded-lg hover:bg-white/5"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Contact us
                                        </Link>
                                        <Link 
                                            to="/tool-management" 
                                            className="text-white/70 hover:text-white transition-colors text-base py-2 px-3 rounded-lg hover:bg-white/5"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Explore
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex flex-col border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                            <button 
                                                className="text-white/70 hover:text-white transition-colors text-base py-3 px-3 rounded-lg hover:bg-white/5 text-left w-full flex justify-between items-center gap-4"
                                                onClick={() => setActiveCategory(activeCategory === 'robotics' ? null : 'robotics')}
                                            >
                                                <span>Robotics</span>
                                                <motion.span 
                                                    animate={{ rotate: activeCategory === 'robotics' ? 180 : 0 }}
                                                    className="opacity-50"
                                                >
                                                    <ChevronDown size={16} />
                                                </motion.span>
                                            </button>
                                            <AnimatePresence>
                                                {activeCategory === 'robotics' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden pl-4"
                                                    >
                                                        <span className="block text-white/40 text-sm py-2 italic">Coming Soon</span>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <div className="flex flex-col border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                            <button 
                                                className="text-white/70 hover:text-white transition-colors text-base py-3 px-3 rounded-lg hover:bg-white/5 text-left w-full flex justify-between items-center gap-4"
                                                onClick={() => setActiveCategory(activeCategory === 'tools' ? null : 'tools')}
                                            >
                                                <span>Tool Management</span>
                                                <motion.span 
                                                    animate={{ rotate: activeCategory === 'tools' ? 180 : 0 }}
                                                    className="opacity-50"
                                                >
                                                    <ChevronDown size={16} />
                                                </motion.span>
                                            </button>
                                            <AnimatePresence>
                                                {activeCategory === 'tools' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden pl-4 flex flex-col gap-2 pt-2"
                                                    >
                                                        <Link 
                                                            to="/aotm" 
                                                            className="text-white/60 hover:text-white py-2 px-2 rounded-md hover:bg-white/5 block text-sm transition-colors"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            AOTM I
                                                        </Link>
                                                        <Link 
                                                            to="/aotm" 
                                                            className="text-white/60 hover:text-white py-2 px-2 rounded-md hover:bg-white/5 block text-sm transition-colors"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            AOTM XL
                                                        </Link>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <div className="flex flex-col border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                            <button 
                                                className="text-white/70 hover:text-white transition-colors text-base py-3 px-3 rounded-lg hover:bg-white/5 text-left w-full flex justify-between items-center gap-4"
                                                onClick={() => setActiveCategory(activeCategory === 'iot' ? null : 'iot')}
                                            >
                                                <span>IoT devices</span>
                                                <motion.span 
                                                    animate={{ rotate: activeCategory === 'iot' ? 180 : 0 }}
                                                    className="opacity-50"
                                                >
                                                    <ChevronDown size={16} />
                                                </motion.span>
                                            </button>
                                            <AnimatePresence>
                                                {activeCategory === 'iot' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden pl-4"
                                                    >
                                                        <span className="block text-white/40 text-sm py-2 italic">Coming Soon</span>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
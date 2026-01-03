import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar({page}: {page: string}) {
    const [navState, setNavState] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isToolsPage = page.toLowerCase() === "tools" || page.toLowerCase() === "contact" || page.toLowerCase() === "about";

    useEffect(() => {
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
            if (e.clientY < 100) {
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
    }, [isToolsPage]);

    const navBaseClasses = "fixed top-0 left-1/2 -translate-x-1/2 w-full flex items-center justify-between z-50";

    const navDynamicClasses: any = {
        0: "py-4 px-4 md:px-8",
        1: "py-4 px-4 md:py-3 md:px-6 md:mt-4 md:max-w-2xl md:bg-[#0E0E10] md:rounded-full md:shadow-lg",
        2: "py-4 px-4 md:py-3 md:px-6 md:mt-4 md:max-w-3xl md:bg-[#0E0E10] md:rounded-full md:shadow-lg",
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
                className={`${navBaseClasses} ${navDynamicClasses[navState]} ${isToolsPage ? 'backdrop-blur-md bg-black/20 border-b border-white/5' : ''}`}
            >
                <div className="flex items-center overflow-hidden">
                    <Link to="/" className="cursor-pointer flex items-center space-x-2 sm:space-x-4">
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

                <div className="relative h-6 hidden md:flex items-center justify-end overflow-hidden">
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
                                <Link to="/coming-soon" className="text-white/60 hover:text-white transition-colors">Robotics</Link>
                                <Link to="/tool-management" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">Tool Management</Link>
                                <Link to="/coming-soon" className="text-white/60 hover:text-white transition-colors">IoT devices</Link>
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
                                        <a 
                                            href="/coming-soon" 
                                            className="text-white/70 hover:text-white transition-colors text-base py-2 px-3 rounded-lg hover:bg-white/5"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Robotics
                                        </a>
                                        <a 
                                            href="/tool-management" 
                                            className="text-white/70 hover:text-white transition-colors text-base py-2 px-3 rounded-lg hover:bg-white/5"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Tool Management
                                        </a>
                                        <a 
                                            href="/coming-soon" 
                                            className="text-white/70 hover:text-white transition-colors text-base py-2 px-3 rounded-lg hover:bg-white/5"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            IoT devices
                                        </a>
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
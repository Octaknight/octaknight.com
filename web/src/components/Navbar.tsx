import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * A responsive and animated navigation bar for Octaknight Labs, powered by Framer Motion.
 * It features three distinct states that change based on scroll position:
 * 1. Initial State (Top): Full-width, with the company name and primary links.
 * 2. Shrunk State (Scrolled down a bit): A smaller, pill-shaped bar with only the logo and primary links.
 * 3. Solutions State (Scrolled further): The pill-shaped bar shows solution-specific links.
 */
export default function Navbar() {
    // navState manages the navbar's appearance:
    // 0 = Initial (top of the page)
    // 1 = Shrunk (scrolled down slightly)
    // 2 = Solutions (scrolled down further)
    const [navState, setNavState] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < 50) {
                setNavState(0); // Initial state
            } else if (scrollY >= 100 && scrollY < 2000) {
                setNavState(1); // Shrunk state
            } else {
                setNavState(2); // Solutions state
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Base classes for the navbar container - removed CSS transitions to let Framer Motion handle it.
    const navBaseClasses = "fixed top-0 left-1/2 -translate-x-1/2 w-full flex items-center justify-between z-50";

    // Dynamic classes based on the navigation state
    const navDynamicClasses: any = {
        0: "py-4 px-8", // Initial state styling
        1: "py-3 px-6 mt-4 max-w-md sm:max-w-lg md:max-w-2xl bg-[#0E0E10] rounded-full shadow-lg", // Shrunk state
        2: "py-3 px-6 mt-4 max-w-lg sm:max-w-xl md:max-w-3xl bg-[#0E0E10] rounded-full shadow-lg", // Solutions state with more width
    };
    
    // Classes for link containers
    const primaryLinkContainerClasses = "flex items-center space-x-6 sm:space-x-8 text-sm sm:text-base font-satoshi";
    const solutionsLinkContainerClasses = "flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm font-satoshi text-[var(--color-primary-200)]";

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    };

    return (
        <motion.nav
            layout
            transition={{ type: "spring", stiffness: 170, damping: 30, duration: 0.4 }}
            className={`${navBaseClasses} ${navDynamicClasses[navState]}`}
        >
            <div className="flex items-center space-x-4 overflow-hidden">
                <motion.img
                    layout
                    src="/logo.png"
                    alt="Octaknight Labs Logo"
                    className={`${navState > 0 ? 'h-10 w-10' : 'h-8 w-8'}`}
                />
                <AnimatePresence>
                    {navState === 0 && (
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="text-white/80 hover:text-white text-xl font-sansation whitespace-nowrap"
                        >
                            OCTAKNIGHT LABS
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>

            <div className="relative h-6 flex items-center justify-end overflow-hidden">
                <AnimatePresence mode="wait">
                    {navState < 2 ? (
                        <motion.div
                            key="primary"
                            variants={linkVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.2 }}
                            className={primaryLinkContainerClasses}
                        >
                            <a href="#about" className="text-white/60 hover:text-white transition-colors">About</a>
                            <a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact us</a>
                            <a href="#explore" className="text-white/60 hover:text-white transition-colors">Explore</a>
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
                            <a href="#robotics" className="text-white/60 hover:text-white transition-colors">Robotics</a>
                            <a href="#tool-management" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">Tool Management</a>
                            <a href="#iot-devices" className="text-white/60 hover:text-white transition-colors">IoT devices</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}



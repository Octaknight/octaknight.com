import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Construction } from 'lucide-react';
import { products } from '../data/productInfo';

const solutions = ["Tool Management", "Robotics", "IoT Devices"];
const groupedProducts = solutions.reduce((acc, solution) => {
    acc[solution] = products.filter(p => p.solution === solution);
    return acc;
}, {} as Record<string, typeof products>);

interface SolutionsMegaMenuProps {
    selectedCategory: string;
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export default function SolutionsMegaMenu({ selectedCategory, className, onMouseEnter, onMouseLeave }: SolutionsMegaMenuProps) {
    const [hoveredProduct, setHoveredProduct] = useState<typeof products[0] | null>(null);

    useEffect(() => {
        setHoveredProduct(null);
    }, [selectedCategory]);

    const currentProducts = groupedProducts[selectedCategory] || [];
    const isComingSoon = selectedCategory !== "Tool Management";
    
    return (
        <div 
            className={`bg-[#0E0E10] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-6 z-50 ${className || ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {isComingSoon ? (
                <div className="h-full flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[350px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary-900)_0%,_transparent_70%)] opacity-10" />
                    
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-[var(--color-primary-500)]/20 rounded-full animate-pulse blur-xl"></div>
                        <div className="relative flex items-center justify-center w-full h-full border border-zinc-800 bg-zinc-900/80 rounded-full backdrop-blur-md">
                            <Construction className="w-8 h-8 text-[var(--color-primary-400)]" />
                        </div>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                        <span className="text-[var(--color-primary-400)]">{selectedCategory}</span>
                        <br />
                        Coming Soon
                    </h3>
                    <p className="text-white/40 text-sm max-w-xs mx-auto">
                        We are currently engineering this module. Check back soon for updates.
                    </p>
                    <div className="mt-4 text-xs font-mono text-white/20">
                        SYSTEM_STATUS: PENDING_DEPLOYMENT
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-9 gap-6 h-full min-h-[350px]">
                    <div className="col-span-4 border-r border-white/10 pr-4 space-y-2 overflow-y-auto custom-scrollbar">
                        <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4 px-3">Products</h3>
                        <div className="space-y-1">
                            {currentProducts.map((product) => (
                                <Link
                                    key={product.id}
                                    to="/aotm"
                                    onMouseEnter={() => setHoveredProduct(product)}
                                    className={`block px-3 py-2 rounded-lg transition-all duration-200 group ${
                                        hoveredProduct?.id === product.id 
                                            ? 'bg-white/5' 
                                            : 'hover:bg-white/5'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={`text-sm font-medium ${
                                            hoveredProduct?.id === product.id 
                                                ? 'text-white' 
                                                : 'text-white/70 group-hover:text-white'
                                        }`}>
                                            {product.name}
                                        </span>
                                        {hoveredProduct?.id === product.id && (
                                            <motion.span 
                                                layoutId="arrow"
                                                className="text-[var(--color-primary-400)]"
                                            >
                                                →
                                            </motion.span>
                                        )}
                                    </div>
                                    <p className="text-xs text-white/40 mt-0.5 truncate">{product.category}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-5 pl-2 relative">
                        <AnimatePresence mode="wait">
                            {hoveredProduct ? (
                                <motion.div
                                    key={hoveredProduct.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-full flex flex-col"
                                >
                                    <div className="relative flex-1 rounded-lg overflow-hidden border border-white/10 bg-black/20">
                                        <img 
                                            src={hoveredProduct.image} 
                                            alt={hoveredProduct.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                        
                                        <div className="absolute bottom-0 left-0 right-0 p-5">
                                            <div className="inline-block px-2 py-1 rounded-md bg-[var(--color-primary-500)]/20 text-[var(--color-primary-400)] text-xs font-bold mb-2 border border-[var(--color-primary-500)]/20 backdrop-blur-sm">
                                                {hoveredProduct.category}
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2 font-sansation">{hoveredProduct.name}</h4>
                                            <p className="text-sm text-white/70 line-clamp-3 font-satoshi leading-relaxed">{hoveredProduct.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="h-full flex items-center justify-center text-center p-6 border border-white/5 rounded-lg bg-white/5 border-dashed"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3">
                                            <svg className="w-6 h-6 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-white/40">Hover over a product to see details</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            )}
        </div>
    );
}

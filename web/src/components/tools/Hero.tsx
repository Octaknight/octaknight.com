import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { useState } from "react";
import { products } from "@/data/productInfo";

export default function Hero() {
  const [showAll, setShowAll] = useState(false);

  const displayedTools = showAll ? products : products.slice(0, 3);

  return (
    <section className="min-h-screen w-full bg-black text-white overflow-hidden flex flex-col pt-32 pb-10">
      <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-sansation tracking-tight leading-[0.9] max-w-4xl"
          >
            Optimize <br />
            Production. <br />
            <span className="text-[var(--color-primary-400)]">Master your tools.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xs space-y-6 mt-4"
          >
            <p className="text-neutral-400 font-satoshi text-sm leading-relaxed">
              Seamless Robotic Tool Management for Industry 4.0. 
              Located in the cloud, our platform is dedicated to crafting robust and renowned automation workflows.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-sansation font-bold"
          >
            Our Solutions
          </motion.h2>
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
          >
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-sm cursor-pointer text-neutral-400 hover:text-[var(--color-primary-400)] transition-colors flex items-center gap-1 font-satoshi font-medium group"
            >
              {showAll ? "Show Less" : "View All"}
              {showAll ? (
                  <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              ) : (
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </button>
          </motion.div>
        </div>

        <motion.div 
          layout
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`
            ${showAll 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8' 
                : 'flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory'
            }
            p-4 -m-4 /* Add padding and negative margin to prevent hover clipping */
          `}
        >
          <AnimatePresence mode="popLayout">
            {displayedTools.map((tool) => (
                <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={tool.id} 
                className={`
                    ${showAll ? 'w-full' : 'min-w-[300px] md:min-w-[400px] snap-start'}
                `}
                >
                <Link to={tool.link || "#"} className="block group cursor-pointer h-full">
                    <div className={`relative aspect-[4/5] ${tool.bgColor} rounded-3xl overflow-hidden mb-6 transition-all duration-500 ease-out group-hover:scale-[1.02] border border-white/5 group-hover:border-[var(--color-primary-500)]/30 shadow-2xl shadow-black/50`}>
                        <img 
                        src={tool.image} 
                        alt={tool.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                        
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
                            <div className="bg-[var(--color-primary-500)] p-3 rounded-full shadow-lg shadow-[var(--color-primary-500)]/20">
                                <ArrowUpRight className="w-5 h-5 text-black" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1 px-2">
                        <p className="text-xs text-[var(--color-primary-400)] font-mono uppercase tracking-wider">{tool.category}</p>
                        <div className="flex items-center gap-2">
                            <h3 className="text-2xl font-sansation font-bold text-white group-hover:text-[var(--color-primary-400)] transition-colors">
                            {tool.name}
                            </h3>
                            <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-[var(--color-primary-400)] transition-colors duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <p className="text-sm text-neutral-500 font-satoshi group-hover:text-neutral-400 transition-colors">{tool.date}</p>
                    </div>
                </Link>
                </motion.div>
            ))}
          </AnimatePresence>
          
          {!showAll && (
            <div className="min-w-[100px] flex items-center justify-center">
                <button 
                    onClick={() => setShowAll(true)}
                    className="w-16 h-16 cursor-pointer hover:bg-[var(--color-primary-500)] hover:border-[var(--color-primary-500)] rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-black transition-all duration-300 group"
                >  
                    <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </button>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
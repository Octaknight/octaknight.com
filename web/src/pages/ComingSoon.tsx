import { Link } from 'react-router-dom';
import { ArrowRight, Construction } from 'lucide-react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary-900)_0%,_transparent_70%)] opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full text-center space-y-8"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[var(--color-primary-500)]/20 rounded-full animate-pulse blur-xl"></div>
          <div className="relative flex items-center justify-center w-full h-full border border-zinc-800 bg-zinc-900/80 rounded-full backdrop-blur-md shadow-2xl shadow-[var(--color-primary-500)]/10">
            <Construction className="w-10 h-10 text-[var(--color-primary-400)]" />
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
              Under
            </span>
            <br />
            <span className="text-[var(--color-primary-400)]">
              Construction
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto leading-relaxed font-light"
          >
            We are currently engineering this module. 
            <br className="hidden md:block" />
            Check back soon for the next generation of industrial solutions.
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="pt-4 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Link to={"/"}>
            <button className= "px-8 py-3 cursor-pointer bg-white/5 border border-white/10 rounded-full font-satoshi text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all duration-300 h-[52px] flex items-center justify-center">
              Return to Base
            </button>
          </Link>
          <Link 
            to={"/tool-management"} 
            className="cursor-pointer px-6 py-3 bg-[var(--color-primary-400)] rounded-full font-satoshi text-[var(--secondary)] font-medium hover:bg-[var(--color-primary-300)] transition-all duration-300 shadow-lg shadow-yellow-500/10 flex items-center justify-center h-[52px]"
          >
            <span className="whitespace-nowrap mr-2 text-black">
                Explore Tool Management
            </span>
            <div
                className="flex items-center justify-center h-6 w-6 bg-black rounded-full text-[var(--color-primary-400)]"
            >
                <ArrowRight className="h-3 w-3 text-white" />
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 text-zinc-600 text-sm font-mono"
      >
        SYSTEM_STATUS: PENDING_DEPLOYMENT
      </motion.div>
    </div>
  );
};

export default ComingSoon;

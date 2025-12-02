import { motion } from "framer-motion";

export default function Info() {
  return (
    <section className="min-h-screen w-full text-white py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-30">
            Precision engineering <br /> <span className="text-[var(--color-primary-400)]">for the future</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)] cursor-pointer">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="col-span-1 md:col-span-1 row-span-2 bg-[var(--color-primary-500)] rounded-[32px] p-8 flex flex-col justify-end relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-50" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-black mb-2">Autonomous Reliability</h3>
              <p className="text-black/70 font-medium">Designed for 24/7 continuous operation in harsh industrial environments.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="col-span-1 md:col-span-1 bg-[#1C1C1E] rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex items-center -space-x-4 mb-8">
               {[1, 2, 3].map((i) => (
                 <div key={i} className={`w-12 h-12 rounded-full border-2 border-[#1C1C1E] bg-neutral-700 flex items-center justify-center overflow-hidden relative z-${10-i}`}>
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Operator" className="w-full h-full object-cover" />
                 </div>
               ))}
               <div className="w-12 h-12 rounded-full border-2 border-[#1C1C1E] bg-[var(--color-primary-500)] flex items-center justify-center text-black font-bold text-xs relative z-0">
                 +12
               </div>
            </div>
            <h3 className="text-xl font-medium text-white">Fleet Management</h3>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="col-span-1 md:col-span-1 bg-[#1C1C1E] rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden"
          >
             <div className="flex items-end justify-between h-24 mb-4 px-2">
                {[40, 70, 50, 90, 60, 80, 45].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="w-2 bg-gradient-to-t from-[var(--color-primary-500)] to-[var(--color-primary-400)] rounded-t-full opacity-80"
                  />
                ))}
             </div>
             <div>
                <h3 className="text-xl font-medium text-[var(--color-primary-500)] mb-1">Cycle Time</h3>
                <p className="text-neutral-400 text-sm">Optimized throughput metrics</p>
             </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="col-span-1 md:col-span-1 row-span-2 bg-[#1C1C1E] rounded-[32px] p-8 flex flex-col justify-end relative overflow-hidden"
          >
             <div className="absolute inset-0 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                   <motion.path 
                     d="M0,80 C20,70 40,90 60,50 S80,20 100,10"
                     fill="none"
                     stroke="var(--color-primary-500)"
                     strokeWidth="2"
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     transition={{ duration: 1.5, ease: "easeInOut" }}
                   />
                   <motion.path 
                     d="M0,80 C20,70 40,90 60,50 S80,20 100,10 L100,100 L0,100 Z"
                     fill="url(#gradient)"
                     opacity="0.2"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 0.2 }}
                     transition={{ duration: 1.5 }}
                   />
                   <defs>
                     <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                       <stop offset="0%" stopColor="var(--color-primary-500)" />
                       <stop offset="100%" stopColor="transparent" />
                     </linearGradient>
                   </defs>
                </svg>
                <motion.div 
                  className="absolute top-[10%] right-0 w-4 h-4 bg-[var(--color-primary-500)] rounded-full shadow-[0_0_20px_var(--color-primary-500)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.5, type: "spring" }}
                />
             </div>
             <div className="relative z-10 mt-32">
                <h3 className="text-2xl font-medium text-white mb-2">Torque Analysis</h3>
                <p className="text-neutral-400 text-sm">Real-time motor load monitoring to prevent overload.</p>
             </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="col-span-1 md:col-span-1 bg-[#1C1C1E] rounded-[32px] p-6 flex flex-col justify-center items-center relative overflow-hidden"
          >
             <div className="w-full bg-black/40 rounded-2xl p-4 mb-4 border border-white/5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-neutral-300 font-mono">SIGNAL_STABLE</span>
                   </div>
                   <span className="text-[10px] text-neutral-500">4ms</span>
                </div>
                <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                   <motion.div 
                     className="h-full bg-[var(--color-primary-500)]"
                     initial={{ width: "0%" }}
                     whileInView={{ width: "100%" }}
                     transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                   />
                </div>
             </div>
             <h3 className="text-lg font-medium text-white">Low Latency Link</h3>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="col-span-1 md:col-span-1 bg-[#1C1C1E] rounded-[32px] p-6 flex flex-col justify-end relative overflow-hidden"
          >
             <div className="w-full bg-black/40 rounded-xl p-3 mb-4 border border-white/5 font-mono text-[10px] text-neutral-400 leading-relaxed">
                <div className="flex gap-2">
                    <span className="text-[var(--color-primary-500)]">{">"}</span>
                    <span>Init_Sequence... OK</span>
                </div>
                <div className="flex gap-2">
                    <span className="text-[var(--color-primary-500)]">{">"}</span>
                    <span>Calibrating_Sensors...</span>
                </div>
                <div className="flex gap-2">
                    <span className="text-[var(--color-primary-500)]">{">"}</span>
                    <span className="text-white">Done (0.02s)</span>
                </div>
             </div>
             <h3 className="text-lg font-medium text-white">Smart Calibration</h3>
          </motion.div>

           <motion.div 
            whileHover={{ scale: 0.98 }}
            className="col-span-1 md:col-span-1 bg-[#1C1C1E] rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden"
          >
             <div className="grid grid-cols-3 gap-4 mb-6">
                {["ROS", "MQTT", "OPC", "TCP", "PLC", "API"].map((tech) => (
                   <div key={tech} className="aspect-square rounded-2xl bg-neutral-800 flex items-center justify-center border border-white/5 hover:bg-neutral-700 transition-colors">
                      <span className="text-[10px] font-mono text-neutral-400">{tech}</span>
                   </div>
                ))}
             </div>
             <div>
                <h3 className="text-xl font-medium text-white mb-1">Universal Connectivity</h3>
                <p className="text-neutral-400 text-sm">Native support for all major industrial protocols.</p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const tools = [
  {
    id: 1,
    name: "Robotic Gripper",
    category: "End Effectors",
    image: "/assets/tools/robotic_gripper.png",
    date: "24 Feb 2024",
    bgColor: "bg-[#1a1a1a]",
  },
  {
    id: 2,
    name: "Precision Sensor",
    category: "Sensing",
    image: "/assets/tools/precision_sensor.png",
    date: "22 Mar 2024",
    bgColor: "bg-[#2a2a2a]",
  },
  {
    id: 3,
    name: "Assembly Arm",
    category: "Robotics",
    image: "/assets/tools/assembly_arm.png",
    date: "24 Jan 2024",
    bgColor: "bg-[var(--color-primary-500)]",
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-black text-white overflow-hidden flex flex-col pt-32 pb-10">
      <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.9] max-w-4xl"
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
            <p className="text-neutral-400 text-sm leading-relaxed">
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
            className="text-2xl font-medium"
          >
            Our Solutions
          </motion.h2>
          <motion.button 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="text-sm cursor-pointer text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
          >
            View All
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory"
        >
          {tools.map((tool) => (
            <div 
              key={tool.id} 
              className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer"
            >
              <div className={`relative aspect-[4/5] ${tool.bgColor} rounded-3xl overflow-hidden mb-6 transition-transform duration-500 ease-out group-hover:scale-[1.02]`}>
                <img 
                  src={tool.image} 
                  alt={tool.name}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-full">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                </div>
              </div>

              <div className="space-y-1 px-2">
                <p className="text-xs text-neutral-500">{tool.date}</p>
                <h3 className="text-xl font-medium text-white group-hover:text-[var(--color-primary-500)] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-neutral-400">{tool.category}</p>
              </div>
            </div>
          ))}
          
          <div className="min-w-[100px] flex items-center justify-center">
             <div className="w-12 h-12 cursor-pointer hover:bg-[var(--color-primary-500)] rounded-full border border-neutral-400 flex items-center justify-center text-neutral-800 transition-colors">  
                <ArrowUpRight className="w-5 h-5" />
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
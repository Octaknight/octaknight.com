import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featuredTools = [
  {
    id: 1,
    name: "Robotic Gripper",
    category: "End Effectors",
    description: "High-precision adaptive gripping for delicate components. Designed for versatility in modern manufacturing lines.",
    image: "/assets/tools/robotic_gripper.png",
  },
  {
    id: 2,
    name: "Precision Sensor",
    category: "Sensing",
    description: "Nanometer-level accuracy for quality control automation. Ensure zero-defect production with real-time feedback.",
    image: "/assets/tools/precision_sensor.png",
  },
  {
    id: 3,
    name: "Assembly Arm",
    category: "Robotics",
    description: "6-axis articulated arm for complex assembly tasks. High speed, high payload, and collaborative safety features.",
    image: "/assets/tools/assembly_arm.png",
  },
];

export default function Featured() {
  const [activeTool, setActiveTool] = useState(featuredTools[0]);

  return (
    <section className="min-h-screen w-full bg-black text-white py-20 flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center h-full">
          
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-2 mb-8">
              <h2 className="text-sm font-mono text-[var(--color-primary-200)] uppercase tracking-wider">Featured Products</h2>
              <p className="text-neutral-400 text-sm max-w-md">
                Discover our flagship solutions designed to revolutionize your production line.
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              {featuredTools.map((tool) => (
                <div 
                  key={tool.id}
                  onMouseEnter={() => setActiveTool(tool)}
                  className="group cursor-pointer relative pl-6 transition-all duration-300"
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-300 ${activeTool.id === tool.id ? 'bg-[var(--color-primary-500)]' : 'bg-neutral-800 group-hover:bg-neutral-700'}`} />
                  
                  <h3 className={`text-3xl md:text-5xl font-medium transition-colors duration-300 ${activeTool.id === tool.id ? 'text-white' : 'text-neutral-600 group-hover:text-neutral-400'}`}>
                    {tool.name}
                  </h3>
                  
                  <AnimatePresence>
                    {activeTool.id === tool.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 space-y-4">
                          <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                            {tool.description}
                          </p>
                          <button className="flex items-center gap-2 text-[var(--color-primary-500)] text-sm font-medium hover:gap-3 transition-all">
                            See More <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[50vh] lg:h-[70vh] w-full rounded-3xl overflow-hidden bg-neutral-900">
            <div className="absolute inset-0 w-full h-full">
                <img 
                  src={activeTool.image} 
                  alt={activeTool.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8">
                   <p className="text-sm font-mono text-[var(--color-primary-500)] mb-2">{activeTool.category}</p>
                   <h4 className="text-2xl font-bold text-white">{activeTool.name}</h4>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
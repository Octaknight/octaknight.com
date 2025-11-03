import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import RoboticArm from '@/assets/icons/RoboticArm';
import IotIcon from '@/assets/icons/IotIcon';
import aotmuSvgUrl from '@/assets/AOTM.svg';

const solutions = [
  {
    title: 'Robotics',
    icon: <RoboticArm />,
    comingSoon: true,
  },
  {
    title: 'Tool Management',
    icon: aotmuSvgUrl,
    comingSoon: false,
    explore: true,
  },
  {
    title: 'IoT Devices',
    icon: <IotIcon />,
    comingSoon: true,
  },
];

export default function Solutions() {
  const [hovered, setHovered] = useState('Tool Management');

  const cardVariants = {
    initial: {
      flexGrow: 1,
    },
    hovered: {
      flexGrow: 2.5,
    },
    inactive: {
      flexGrow: 1,
    },
  };

  const textVariants = {
    initial: { color: 'rgb(161 161 170)' },
    hovered: { color: 'rgb(250 250 250)' },
  };

  const iconVariants = {
    initial: { color: 'rgb(113 113 122)' },
    hovered: { color: 'rgb(250 204 21)' },
  };

  return (
    <div className="h-[1000px] w-full bg-black text-white flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <h2 className="text-3xl md:text-5xl mt-30 font-bold mb-4 text-zinc-200 text-center">
        Explore Our Solutions
      </h2>
      <p className="text-lg text-zinc-400 mb-16 max-w-2xl text-center">
        Discover our ecosystem of advanced robotics and smart-factory solutions.
      </p>

      <div
        className="flex w-full max-w-7xl h-[700px] gap-4"
        onMouseLeave={() => setHovered('Tool Management')}
      >
        {solutions.map((sol:any) => {
          const isHovered = hovered === sol.title;
          return (
            <motion.div
              key={sol.title}
              className="relative h-full rounded-2xl border transition-colors duration-500 backdrop-blur-sm overflow-hidden cursor-pointer"
              onHoverStart={() => setHovered(sol.title)}
              variants={cardVariants}
              animate={isHovered ? 'hovered' : 'inactive'}
              transition={{ type: 'spring', stiffness: 400, damping: 30, duration: 0.5 }}
              style={{
                borderColor: isHovered
                  ? 'rgba(250, 204, 21, 0.4)' 
                  : 'rgba(63, 63, 70, 0.5)',
                background: isHovered
                  ? 'radial-gradient(circle at 50% 50%, rgba(202, 138, 4, 0.1), transparent 70%)'
                  : 'rgba(39, 39, 42, 0.3)',
              }}
            >
              {sol.comingSoon && (
                <span className="absolute top-4 left-4 border border-zinc-600/70 text-xs px-2 py-0.5 rounded-full text-[var(--color-primary-400)]">
                  Coming Soon
                </span>
              )}

              <div className="flex flex-col items-center justify-center h-full gap-6 p-6">
                
                {sol.title === 'Tool Management' ? (
                  <div
                    className={`w-32 h-32 md:w-40 md:h-40 transition-colors duration-500 ${
                      isHovered
                        ? 'bg-[var(--color-primary-500)]'
                        : 'bg-zinc-500'
                    }`}
                    style={{
                      maskImage: `url(${sol.icon})`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                ) : (
                  <motion.div
                    variants={iconVariants}
                    animate={isHovered ? 'hovered' : 'initial'}
                    transition={{ duration: 0.5 }}
                  >
                    {React.cloneElement(sol.icon, {
                      className: 'w-24 h-24 md:w-32 md:h-32',
                    })}
                  </motion.div>
                )}

                <motion.h3
                  className="text-xl md:text-2xl font-semibold"
                  variants={textVariants}
                  animate={isHovered ? 'hovered' : 'initial'}
                  transition={{ duration: 0.5 }}
                >
                  {sol.title}

                </motion.h3>
                  {sol.explore && (<div className="group flex items-center gap-2 font-medium text-amber-400 cursor-pointer">
                    <span className="relative">
                      Explore
                      <span className="absolute bottom-0 left-0 h-0.5 bg-amber-400 w-0 group-hover:w-full transition-all duration-300"></span>
                    </span>
                      <ArrowRightIcon className='h-4 w-4'/>
                  </div>)}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
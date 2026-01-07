import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import RoboticArm from '@/assets/icons/RoboticArm';
import iotSvgUrl from '@/assets/IOT.svg';
import aotmuSvgUrl from '@/assets/AOTM.svg';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'Robotics',
    icon: <RoboticArm />,
    comingSoon: true,
    id: "robotics",
  },
  {
    title: 'Tool Management',
    icon: aotmuSvgUrl,
    comingSoon: false,
    explore: true,
    id: "tool-management",
  },
  {
    title: 'IoT Devices',
    icon: iotSvgUrl,
    comingSoon: true,
    id: "iot-devices",
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
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <h2 className="text-3xl md:text-5xl mt-20 md:mt-30 font-bold mb-4 text-zinc-200 text-center">
        Explore Our Solutions
      </h2>
      <p className="text-lg text-zinc-400 mb-8 md:mb-16 max-w-2xl text-center">
        Discover our ecosystem of advanced robotics and smart-factory solutions.
      </p>


      <div
        className="flex flex-col md:flex-row w-full max-w-7xl h-auto md:h-[700px] gap-4"
        onMouseLeave={() => setHovered('Tool Management')}
      >
        {solutions.map((sol:any) => {
          const isHovered = hovered === sol.title;
          return (
            <Link
              key={sol.title}
              to={sol.title === 'Tool Management' ? '/tool-management' : '/coming-soon'}
              className="contents"
            >
            <motion.div
              layout
              key={sol.title}
              id={sol.id}
              className="relative h-[300px] md:h-full rounded-2xl border transition-colors duration-500 backdrop-blur-sm overflow-hidden cursor-pointer"
              onHoverStart={() => setHovered(sol.title)}
              variants={cardVariants}
              animate={isHovered ? 'hovered' : 'inactive'}
              transition={{ type: 'spring', stiffness: 400, damping: 30, duration: 0.5 }}
              style={{
                willChange: 'flex-grow',
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
                
                {typeof sol.icon === 'string' ? (
                  <div
                    className={`${
                      sol.title === 'IoT Devices' 
                        ? 'w-28 h-28 md:w-64 md:h-64 mb-6' 
                        : 'w-32 h-32 md:w-72 md:h-72'
                    } transition-colors duration-500 ${
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
                      className: 'w-24 h-24 md:w-48 md:h-48',
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
            </Link>
          );
        })}
      </div>

    </div>
  );
}
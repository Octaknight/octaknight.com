// src/components/about/Hero.tsx

import { motion } from "framer-motion";

// You will need to have your company logo available as an SVG or PNG.
// For this example, I'm assuming you have a `logo.svg` in your `public/images/` folder.
const LOGO_URL = "/images/The Octaknight Logo.svg";

const Hero = () => {
  return (
    // The main container for the hero section.
    // `relative`: Necessary for positioning the background logo.
    // `h-[60vh]`: Sets the height to 60% of the viewport height. Adjust as needed.
    // `flex items-center justify-center`: Centers the tagline text vertically and horizontally.
    // `overflow-hidden`: Ensures the animated logo doesn't spill out.
    <section className="relative flex h-[60vh] items-center justify-center overflow-hidden bg-background">
      {/* Background Logo */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center"
        // Animation properties from Framer Motion
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.img
          src={LOGO_URL}
          alt="Company Logo Background"
          className="h-auto w-3/5 max-w-lg text-foreground opacity-5" // `opacity-5` makes it very subtle
          // The slow-pulse animation
          animate={{
            opacity: [0.05, 0.08, 0.05], // Fades from 5% to 8% and back
          }}
          transition={{
            duration: 5,
            repeat: Infinity, // Loop the animation forever
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Foreground Tagline */}
      <motion.h1
        className="relative z-10 max-w-4xl text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        Engineering the Future of Automation, Today!
      </motion.h1>
    </section>
  );
};

export default Hero;
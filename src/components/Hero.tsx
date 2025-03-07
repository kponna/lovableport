
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  // Words to rotate through
  const rotatingWords = [
    "Intelligence",
    "🎯 Solutions",
    "Innovations",
    "Applications",
    "Intelligence"
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  useEffect(() => {
    // Set up interval to rotate words every 2 seconds
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000);
    
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Image column - takes 5/12 of the space on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end relative z-10 lg:col-span-5"
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <motion.div className="relative">
              <motion.div
                className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-[#5856D6]/30 shadow-2xl"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(175, 82, 222, 0.5)", 
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src="/lovable-uploads/cec3521b-2816-43e4-ad5d-a2b557e38f97.png"
                  alt="Krishnaveni Ponna"
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  animate={{ 
                    boxShadow: ["0 0 20px rgba(88, 86, 214, 0.5)", "0 0 30px rgba(88, 86, 214, 0.7)", "0 0 20px rgba(88, 86, 214, 0.5)"] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Text column - takes 7/12 of the space on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start z-10 lg:col-span-7 lg:pl-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#AF52DE] text-white px-6 py-2 rounded-full mb-4"
            >
              Hello!
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left"
            >
              I'm{" "}
              <span className="text-[#AF52DE] dark:text-[#AF52DE]">
                Krishnaveni
              </span>
              <br className="hidden md:block" />
              <span className="inline-block">Building{" "}</span>
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-[#5856D6] dark:text-[#5A29F8] inline-block whitespace-nowrap"
              >
                {rotatingWords[currentWordIndex]}
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="/resume.pdf"
                className="bg-[#AF52DE] hover:bg-[#5856D6] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg"
                download
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

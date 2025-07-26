'use client';

import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';

export default function Carousel() {
  const techStack = [
    { title: "React" },
    { title: "Nextjs" },
    { title: "Express" },
    { title: "Github" },
    { title: "Motion" },
    { title: "AWS" },
    { title: "Figma" },
    { title: "Python" },
    { title: "Pandas" },
    { title: "Matplotlib" },
    { title: "TensorFlow" }
  ];

  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <div className="relative w-full overflow-hidden text-neutral-500 py-8 bg-[#121212]">

      <motion.div 
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
      className="absolute left-0 top-0 bottom-0 w-55 z-10 bg-gradient-to-r from-[#121212] to-transparent" />      
      <motion.div
        className="flex items-center"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedTechStack.map((tech, index) => (
          <div key={`${tech.title}-${index}`} className="flex items-center">
            <span className="text-[10vw] font-bold uppercase tracking-wider px-8">
              {tech.title}
            </span>
            {index < duplicatedTechStack.length - 1 && (
              <Sparkle 
                className="mx-[1vw] md:w-[6vw] w-[10vw] h-[10vw] text-[#FFF93D] opacity-75" 
                
                fill={"#FFF93D"}
              />
            )}
          </div>
        ))}
      </motion.div>
      
      <div className="absolute right-0 top-0 bottom-0 w-55 z-10 bg-gradient-to-l from-[#121212] to-transparent" />
    </div>
  );
}
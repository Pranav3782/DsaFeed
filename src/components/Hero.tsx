import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ACTION_WORDS = ['simple.', 'fun.', 'easy.', 'intuitive.'];

interface HeroProps {
  onStartLearning: () => void;
  onAddXp?: (amount: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartLearning }) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ACTION_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden">
      {/* Decorative Background Blob Elements inspired by reference image */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 pointer-events-none -z-10 opacity-70">
        <div className="absolute top-6 left-8 w-16 h-16 rounded-full bg-[#F5C94A]/20 blur-xl animate-pulse" />
        <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-[#55C990]/20 blur-xl" />
        <div className="absolute bottom-4 left-1/3 w-32 h-32 rounded-full bg-[#3478E5]/15 blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center px-4">
        
        {/* Floating Playful Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFBEA]  border border-[#F5C94A]/40 rounded-full text-xs sm:text-sm font-extrabold text-[#101B3D]  mb-6 shadow-xs"
        >
          <Sparkles className="w-4 h-4 text-[#F5C94A] fill-[#F5C94A]" />
          <span>Master Algorithms Like a Game 🎮</span>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black text-[#101B3D] tracking-tight leading-[1.1] mb-6 flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4"
        >
          <span>DSA made</span>
          <span className="relative inline-flex text-[#3478E5] min-w-[240px] sm:min-w-[380px] lg:min-w-[440px] h-[1.1em] overflow-hidden text-left items-center pb-1">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={wordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute left-0 w-full whitespace-nowrap"
              >
                {ACTION_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="absolute left-0 bottom-1 w-full h-3 bg-[#F5C94A]/40 -z-10 rounded-full"></span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-xl text-[#111111]/75 max-w-2xl mx-auto font-medium leading-relaxed mb-8"
        >
          Master Data Structures and Algorithms without the stress. <br className="hidden md:block" />
          Interactive visualization, bite-sized lessons, and code games.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-row items-center justify-center gap-3"
        >
          <button
            onClick={onStartLearning}
            className="relative px-6 py-2.5 bg-[#101B3D] text-white rounded-xl text-sm font-extrabold shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group active:scale-98 overflow-hidden z-10"
          >
            {/* Smooth blue color sweep moving towards the right side on hover */}
            <span className="absolute inset-0 bg-[#3478E5] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10" />
            
            <span className="relative z-10">Start Learning</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button
            onClick={() => {
              const mythsSection = document.getElementById('dsa-myths');
              if (mythsSection) mythsSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 bg-white hover:bg-[#F7F5F0] text-[#101B3D] border border-[#EAEAEA] hover:border-[#3478E5]/40 rounded-xl text-sm font-extrabold transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 shadow-xs"
          >
            <HelpCircle className="w-4 h-4 text-[#F5C94A]" />
            About DSA Myths
          </button>
        </motion.div>

      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ACTION_WORDS = ['simple.', 'fun.', 'easy.', 'intuitive.'];

interface HeroProps {
  onStartLearning: () => void;
  onAddXp?: (amount: number) => void;
  isLoggedIn?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onStartLearning, isLoggedIn }) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ACTION_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden">
      {/* 2.5D Animated Campus Background */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EBF4FF]/30 to-transparent" />
        


      </div>

      <div className="max-w-4xl mx-auto text-center px-4">
        
        {/* Floating Playful Badges */}
        <motion.div 
          style={{ opacity: 0 }}
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
          style={{ opacity: 0 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-[2rem] sm:text-7xl lg:text-[5.5rem] font-black text-[#101B3D] tracking-tight leading-[1.1] mb-6 flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-4 w-full"
        >
          <span>DSA made</span>
          <span className="relative inline-flex text-[#3478E5] min-w-[160px] sm:min-w-[300px] lg:min-w-[370px] h-[1.1em] overflow-hidden text-left items-center">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={wordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-full flex items-center whitespace-nowrap"
              >
                {ACTION_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>

          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          style={{ opacity: 0 }}
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
          style={{ opacity: 0 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-row items-center justify-center gap-3"
        >
          {!isLoggedIn && (
            <button
              onClick={onStartLearning}
              className="relative px-6 py-2.5 bg-[#101B3D] text-white rounded-xl text-sm font-extrabold shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group active:scale-98 overflow-hidden z-10"
            >
              {/* Smooth blue color sweep moving towards the right side on hover */}
              <span className="absolute inset-0 bg-[#3478E5] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10" />

              <span className="relative z-10">Start Learning</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          )}

          <motion.a
            href="https://chat.whatsapp.com/LLVqm4Ph8Vr6qhy27LDOfY"
            target="_blank"
            rel="noopener noreferrer"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="px-6 py-2.5 bg-white hover:bg-[#F0FDF4] text-[#16A34A] border border-[#16A34A]/20 hover:border-[#16A34A]/50 rounded-xl text-sm font-extrabold transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 shadow-xs hover:shadow-md"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Join Community
          </motion.a>
        </motion.div>

      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface InitialLoaderProps {
  onComplete: () => void;
  authReady: boolean;
}

export const InitialLoader: React.FC<InitialLoaderProps> = ({ onComplete, authReady }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // If auth is not ready, stall at 90%
        if (prev >= 90 && !authReady) {
          return 90;
        }

        // Variable speed: faster at start, slower near end
        const increment = prev < 50 ? 8 : (prev < 80 ? 4 : 2);
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [authReady]);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 300); // Tiny pause at 100% before transitioning
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  // Bouncy text variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: [0, -15, 0], 
      opacity: 1,
      transition: {
        y: {
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      
      {/* Bouncy Logo Text */}
      <motion.div 
        className="flex mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {"DSAfeed".split('').map((char, index) => (
          <motion.span 
            key={index} 
            variants={letterVariants}
            className={`text-5xl md:text-7xl font-black ${char === 'D' || char === 'S' || char === 'A' ? 'text-[#3478E5]' : 'text-[#101B3D]'}`}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Loading Bar */}
      <div className="w-64 h-2 bg-[#EAEAEA] rounded-full overflow-hidden shadow-inner">
        <motion.div 
          className="h-full bg-[#3478E5] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>
      
      {/* Percentage Text */}
      <div className="mt-4 text-[#8C8C8C] font-bold text-sm tracking-widest">
        LOADING {progress}%
      </div>
    </div>
  );
};

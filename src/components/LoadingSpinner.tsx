import React from 'react';
import { motion } from 'motion/react';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  fullScreen = false,
  message = "Loading..."
}) => {
  const containerClasses = fullScreen
    ? "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFFDF9]/95 backdrop-blur-sm"
    : "w-full min-h-[400px] flex flex-col items-center justify-center bg-transparent";

  // Data Structure inspired animation: 3 glowing nodes that orbit and pulse
  const dotVariants = {
    initial: { y: 0, scale: 0.8 },
    animate: {
      y: [-20, 0, -20],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-10">
        
        {/* Motion Graphics: Orbiting Data Nodes */}
        <motion.div 
          variants={containerVariants}
          animate="animate"
          className="relative w-24 h-24 flex items-center justify-center"
        >
          {/* Node 1 */}
          <motion.div
            variants={dotVariants}
            initial="initial"
            animate="animate"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#3478E5] rounded-xl shadow-[0_0_20px_rgba(52,120,229,0.6)]"
          />
          
          {/* Node 2 */}
          <motion.div
            variants={dotVariants}
            initial="initial"
            animate="animate"
            className="absolute bottom-2 left-1 w-6 h-6 bg-[#F5C94A] rounded-xl shadow-[0_0_20px_rgba(245,201,74,0.6)]"
            style={{ animationDelay: '0.5s' }}
          />
          
          {/* Node 3 */}
          <motion.div
            variants={dotVariants}
            initial="initial"
            animate="animate"
            className="absolute bottom-2 right-1 w-6 h-6 bg-[#55C990] rounded-xl shadow-[0_0_20px_rgba(85,201,144,0.6)]"
            style={{ animationDelay: '1s' }}
          />
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full -z-10 opacity-30" viewBox="0 0 100 100">
            <motion.polygon 
              points="50,20 20,80 80,80" 
              fill="none" 
              stroke="#101B3D" 
              strokeWidth="2"
              strokeDasharray="10 5"
              animate={{ strokeDashoffset: [0, 30] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </svg>
        </motion.div>
        
        {/* Loading Text */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-base font-black text-[#101B3D] tracking-[0.2em] uppercase">
            {message}
          </p>
          <div className="flex gap-1">
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0 }}
              className="w-1.5 h-1.5 bg-[#3478E5] rounded-full"
            />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
              className="w-1.5 h-1.5 bg-[#F5C94A] rounded-full"
            />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
              className="w-1.5 h-1.5 bg-[#55C990] rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

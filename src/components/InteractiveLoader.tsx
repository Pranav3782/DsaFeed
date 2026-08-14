import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, List, Network, Database, Hexagon, Code2, Cpu } from 'lucide-react';

interface InteractiveLoaderProps {
  onComplete: () => void;
  // Optional topic context to show specific icon
  topicId?: string;
  // Fallback timeout in ms (default 2500)
  autoNavigateMs?: number;
}

const SIMPLE_PHRASES = [
  "DSA is not rocket science, it's just logic!",
  "Arrays are just numbered parking spots for your data.",
  "A Stack is exactly like a pile of heavy plates.",
  "Queues are just like waiting in line for a movie.",
  "You use algorithms every single day without even knowing it!",
  "Think of a Tree like your family tree—just webs of connections.",
  "Sorting is just putting things in order so you can find them fast.",
  "Big O just means 'how slow does this get when I have a lot of data?'",
  "Don't memorize code, understand the patterns!"
];

export const InteractiveLoader: React.FC<InteractiveLoaderProps> = ({ 
  onComplete, 
  topicId,
  autoNavigateMs = 2000 
}) => {
  const [fact] = useState(() => SIMPLE_PHRASES[Math.floor(Math.random() * SIMPLE_PHRASES.length)]);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  
  // Only use Stack (Layers) icon
  const IconComponent = Layers;

  useEffect(() => {
    const tickMs = 50;
    const increment = 100 / (autoNavigateMs / tickMs);

    const interval = setInterval(() => {
      progressRef.current = Math.min(progressRef.current + increment, 100);
      setProgress(progressRef.current);
      
      if (progressRef.current >= 100) {
        clearInterval(interval);
        onComplete();
      }
    }, tickMs);

    return () => clearInterval(interval);
  }, [autoNavigateMs, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 text-center select-none">
      
      {/* Fun Fact Area */}
      <div className="max-w-md space-y-4">
        <p className="text-[#101B3D] text-lg sm:text-xl font-medium leading-relaxed">
          "{fact}"
        </p>
      </div>

      {/* Interaction Hint */}
      <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-3">
        {/* Progress Bar */}
        <div className="w-48 h-1.5 bg-[#EAEAEA] rounded-full overflow-hidden">
          <motion.div 
            className="h-full rounded-full bg-[#3478E5]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
    </div>
  );
};

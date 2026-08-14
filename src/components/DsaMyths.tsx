import React, { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { ShieldAlert, ArrowRight, Lightbulb } from 'lucide-react';

const MYTHS = [
  { 
    id: 1, 
    title: "You need to be a math genius", 
    content: "While basic logic helps, DSA is more about pattern recognition than complex mathematics. Anyone can learn it with consistent practice.",
    color: "#3478E5" 
  },
  { 
    id: 2, 
    title: "You must memorize every algorithm", 
    content: "Memorization fails in interviews. Understanding the underlying pattern (like sliding window or two pointers) is far more important.",
    color: "#F5C94A" 
  },
  { 
    id: 3, 
    title: "DSA is only for passing interviews", 
    content: "Data structures form the foundation of efficient software. Understanding them helps you write faster, scalable code in your daily job.",
    color: "#55C990" 
  },
  { 
    id: 4, 
    title: "Learn 5 languages first", 
    content: "Language syntax is trivial. Pick one language you are comfortable with (like Python, C++, or JavaScript) and master DSA concepts using it.",
    color: "#F26B5B" 
  },
  { 
    id: 5, 
    title: "You must solve 1,000+ problems", 
    content: "Quality over quantity. Solving 150 problems deeply while understanding the core patterns is better than blindly grinding 1,000 solutions.",
    color: "#101B3D" 
  }
];

export const DsaMyths: React.FC = () => {
  const [cards, setCards] = useState(MYTHS);

  const moveToEnd = () => {
    setCards(prev => {
      const newArray = [...prev];
      const first = newArray.shift();
      if (first) newArray.push(first);
      return newArray;
    });
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // If dragged horizontally past a threshold, trigger the swipe
    if (Math.abs(info.offset.x) > 100) {
      moveToEnd();
    }
  };

  return (
    <div className="py-8 space-y-12 animate-in fade-in duration-200 flex flex-col items-center">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF5F4]  border border-[#F26B5B]/40 rounded-full text-xs font-black text-[#F26B5B] mb-2">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Busting Illusions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-[#101B3D] ">
          Top 5 DSA Myths
        </h2>
        <p className="text-sm sm:text-base text-[#111111]/70  font-medium mt-2">
          Swipe left or right to uncover the truth behind common misconceptions that hold developers back.
        </p>
      </div>

      {/* Card Stack Container */}
      <div className="relative w-full max-w-sm mx-auto h-[400px] flex items-center justify-center perspective-[1000px] mt-4">
        
        <AnimatePresence>
          {cards.map((card, index) => {
            // Calculate properties based on the card's position in the array
            const isFront = index === 0;
            const offset = index * 20;
            const scale = 1 - index * 0.05;
            const zIndex = cards.length - index;
            // Slightly darken cards in the back
            const opacity = 1 - index * 0.15;

            return (
              <motion.div
                key={card.id}
                className="absolute w-[300px] sm:w-[340px] h-[360px] rounded-3xl p-8 cursor-grab active:cursor-grabbing flex flex-col justify-between  bg-white border border-[#EAEAEA] "
                style={{
                  boxShadow: isFront ? '0 20px 40px -10px rgba(0,0,0,0.2)' : 'none',
                  zIndex
                }}
                animate={{
                  y: offset,
                  scale: scale,
                  opacity: opacity,
                  rotateZ: index % 2 === 0 && index !== 0 ? -2 : index !== 0 ? 2 : 0, // Slight fan effect for back cards
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  mass: 1
                }}
                drag={isFront ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={isFront ? handleDragEnd : undefined}
                whileDrag={{ scale: 1.05, rotateZ: 5 }}
              >
                {/* Decorative Accent */}
                <div 
                  className="w-16 h-2 rounded-full mb-6"
                  style={{ backgroundColor: card.color }}
                />
                
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${card.color}15`, color: card.color }}
                    >
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#101B3D]  leading-tight">
                      "{card.title}"
                    </h3>
                  </div>
                  
                  <p className="text-sm sm:text-base text-[#111111]/80  font-medium leading-relaxed mt-4">
                    {card.content}
                  </p>
                </div>

                {isFront && (
                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-[#EAEAEA] ">
                    <span className="text-xs font-bold text-[#8C8C8C] uppercase tracking-wider">
                      Swipe to next
                    </span>
                    <button 
                      onClick={moveToEnd}
                      className="w-10 h-10 bg-[#EEF4FF]  rounded-full flex items-center justify-center text-[#3478E5]  hover:bg-[#3478E5]  hover:text-white  transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
        
      </div>
    </div>
  );
};

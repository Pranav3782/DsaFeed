import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Trophy, Star, PartyPopper } from 'lucide-react';

export interface AchievementData {
  title: string;
  subtitle: string;
  xp?: number;
}

interface AchievementPopupProps {
  isOpen: boolean;
  data: AchievementData | null;
  onClose: () => void;
}

export const AchievementPopup: React.FC<AchievementPopupProps> = ({ isOpen, data, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Fire confetti when popup opens
      const duration = 2500;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#F5C94A', '#3478E5', '#55C990', '#F26B5B']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#F5C94A', '#3478E5', '#55C990', '#F26B5B']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      
      frame();

      // Auto close after 4 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && data && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
          {/* Subtle backdrop overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#101B3D]/20 backdrop-blur-sm pointer-events-auto"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0,
              transition: { type: "spring", bounce: 0.5, duration: 0.6 }
            }}
            exit={{ scale: 0.8, opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="relative bg-white rounded-3xl p-6 shadow-2xl border-4 border-[#101B3D] max-w-sm w-full text-center pointer-events-auto"
          >
            {/* Top decorative badge */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#F5C94A] w-20 h-20 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
              <PartyPopper className="w-10 h-10 text-[#101B3D]" />
            </div>

            <div className="mt-10 space-y-2">
              <h3 className="text-2xl font-black text-[#101B3D] uppercase tracking-tight">
                {data.title}
              </h3>
              <p className="text-[#8C8C8C] font-bold">
                {data.subtitle}
              </p>
            </div>

            {data.xp && (
              <div className="mt-6 inline-flex items-center gap-2 bg-[#EEF4FF] px-5 py-2.5 rounded-full border border-[#3478E5]/20">
                <Star className="w-5 h-5 text-[#3478E5] fill-[#3478E5]" />
                <span className="font-extrabold text-[#3478E5]">+{data.xp} XP</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="mt-6 w-full py-3 bg-[#101B3D] text-white rounded-xl font-bold hover:bg-[#1A2A5E] transition-colors active:scale-95"
            >
              Awesome!
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

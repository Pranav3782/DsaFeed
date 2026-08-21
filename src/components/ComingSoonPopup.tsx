import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ComingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export const ComingSoonPopup: React.FC<ComingSoonPopupProps> = ({ isOpen, onClose, title, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#101B3D]/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-[#EAEAEA] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3478E5]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F5C94A]/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 text-[#8C8C8C] hover:text-[#101B3D] hover:bg-[#F5F5F0] rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center mt-4">
              <div className="w-16 h-16 bg-[#EEF4FF] text-[#3478E5] rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-[#101B3D] mb-2">{title}</h3>
              <p className="text-[#111111]/70 font-medium mb-6 text-sm">{message}</p>
              
              <button
                onClick={onClose}
                className="w-full py-3 bg-[#101B3D] text-white font-bold rounded-xl hover:bg-[#1a2b60] transition-colors active:scale-98"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

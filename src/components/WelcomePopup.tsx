import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PartyPopper, X } from 'lucide-react';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  isFirstLogin?: boolean;
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ isOpen, onClose, userName, isFirstLogin = false }) => {
  // Auto-close after 5 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#101B3D]/60 backdrop-blur-sm animate-in fade-in">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
            className="relative w-full max-w-sm bg-white rounded-3xl p-8 shadow-2xl text-center overflow-hidden border-2 border-[#F5C94A]/40"
          >
            {/* Background Decorations */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#F5C94A]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#3478E5]/20 rounded-full blur-2xl"></div>
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-[#8C8C8C] hover:text-[#101B3D] hover:bg-[#F5F5F0] transition z-10"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 space-y-4">
              <motion.div 
                initial={{ rotate: -15, scale: 0.5 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", delay: 0.2, bounce: 0.6 }}
                className="mx-auto w-16 h-16 bg-[#FFFBEA] rounded-2xl flex items-center justify-center shadow-sm border border-[#F5C94A]/40 mb-2"
              >
                <PartyPopper className="w-8 h-8 text-[#F5C94A]" />
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-black text-[#101B3D] mb-1">
                  {isFirstLogin 
                    ? (userName ? `Thanks for joining, ${userName}!` : 'Thanks for joining!') 
                    : (userName ? `Welcome back, ${userName}!` : 'Welcome back!')}
                </h3>
                <p className="text-sm text-[#111111]/70 font-medium leading-relaxed">
                  {isFirstLogin
                    ? "We're thrilled to have you here. Ready to master some data structures?"
                    : "We're thrilled to see you again. Ready to master some data structures today? 🎉"}
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full mt-4 py-3.5 bg-[#101B3D] hover:bg-[#111111] text-white font-extrabold text-sm rounded-xl transition shadow-md active:scale-98"
              >
                Let's Go!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

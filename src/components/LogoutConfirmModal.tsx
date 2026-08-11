import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LogOut, X } from 'lucide-react';

interface LogoutConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const LogoutConfirmModal: React.FC<LogoutConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#101B3D]/60 backdrop-blur-sm animate-in fade-in">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl overflow-hidden border border-[#EAEAEA]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-[#8C8C8C] hover:text-[#101B3D] hover:bg-[#F5F5F0] transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col items-center text-center mt-2 space-y-4">
            <div className="w-12 h-12 bg-[#FFF1F0] rounded-full flex items-center justify-center mb-2">
              <LogOut className="w-6 h-6 text-[#F26B5B]" />
            </div>
            
            <div>
              <h3 className="text-xl font-black text-[#101B3D] mb-1">
                Sign Out
              </h3>
              <p className="text-sm text-[#111111]/70 font-medium">
                Are you sure you want to log out? Your progress is safely saved.
              </p>
            </div>

            <div className="flex w-full gap-3 pt-2">
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-[#F5F5F0] hover:bg-[#EAEAEA] text-[#101B3D] font-extrabold text-xs rounded-xl transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className="flex-1 py-3 bg-[#F26B5B] hover:bg-[#E65A4A] text-white font-extrabold text-xs rounded-xl transition shadow-md"
              >
                Yes, Sign Out
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

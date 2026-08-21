import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, AlertTriangle, ArrowLeft } from 'lucide-react';
import { playUISound } from '../utils/audio';

export const ErrorScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    playUISound();
    navigate('/');
  };

  const handleGoBack = () => {
    playUISound();
    navigate(-1);
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-xl mx-auto"
      >
        <AlertTriangle className="w-12 h-12 text-red-500" />
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-6xl font-black text-[#101B3D] mb-4"
      >
        404
      </motion.h1>

      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold text-[#101B3D] mb-2 max-w-md"
      >
        Oops! Looks like this node is disconnected from the graph.
      </motion.p>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[#8C8C8C] mb-10 max-w-sm"
      >
        The page you are looking for doesn't exist or has been moved to a new memory address.
      </motion.p>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <button 
          onClick={handleGoBack}
          className="px-6 py-3 bg-white border border-[#EAEAEA] hover:border-[#D0D0D0] text-[#101B3D] font-bold rounded-2xl shadow-sm transition flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back
        </button>
        <button 
          onClick={handleGoHome}
          className="px-6 py-3 bg-[#3478E5] hover:bg-[#2864C6] text-white font-bold rounded-2xl shadow-md transition flex items-center justify-center gap-2"
        >
          <Home className="w-5 h-5" />
          Return to Base
        </button>
      </motion.div>
    </div>
  );
};

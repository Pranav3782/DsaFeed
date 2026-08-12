import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Code2, Layers, Book, Search, Box, Map, List, Hash, Trophy, ArrowRight, X } from 'lucide-react';

interface OnboardingFlowProps {
  onComplete: () => void;
}

const SCREENS = [
  {
    title: "The Recipe",
    text: "Writing code is like writing a recipe. An Algorithm is simply the step-by-step instructions to bake the cake.",
    icon: Code2,
    color: "#3478E5"
  },
  {
    title: "The Containers",
    text: "But ingredients need to be stored properly. A Data Structure is just the container holding your data.",
    icon: Box,
    color: "#F5C94A"
  },
  {
    title: "The Problem",
    text: "Imagine finding a specific book in a library where millions of books are dumped on the floor. It would take forever.",
    icon: Search,
    color: "#F26B5B"
  },
  {
    title: "The Solution",
    text: "Now imagine the books are sorted on shelves alphabetically. You can find it instantly! That's what DSA does.",
    icon: Book,
    color: "#55C990"
  },
  {
    title: "Arrays",
    text: "An Array is like a parking lot. Every piece of data has a numbered parking spot, making it super easy to find.",
    icon: Layers,
    color: "#3478E5"
  },
  {
    title: "Linked Lists",
    text: "A Linked List is like a treasure hunt. Instead of numbered spots, each piece of data holds a map to the next piece.",
    icon: Map,
    color: "#F5C94A"
  },
  {
    title: "Stacks",
    text: "A Stack is like a pile of heavy plates. The last plate you put on top is the first one you have to take off.",
    icon: List,
    color: "#F26B5B"
  },
  {
    title: "Queues",
    text: "A Queue is exactly like waiting in line for a movie. The first person in line is the first person served.",
    icon: ArrowRight,
    color: "#55C990"
  },
  {
    title: "Hash Maps",
    text: "A Hash Map is like a dictionary. You instantly look up a 'word' to find its 'definition', without reading the book.",
    icon: Hash,
    color: "#3478E5"
  },
  {
    title: "The Secret Weapon",
    text: "Mastering DSA is the secret to building lightning-fast apps and landing jobs at top tech companies.",
    icon: Trophy,
    color: "#F5C94A"
  }
];

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [step, setStep] = useState<'prompt' | 'carousel' | 'hidden'>('carousel');
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleDismiss = () => {
    setStep('hidden');
    onComplete(); // Move to next step (signup) even if dismissed
  };

  const handleStartCarousel = () => {
    setStep('carousel');
  };

  const handleNextScreen = () => {
    if (currentScreen === SCREENS.length - 1) {
      setStep('hidden');
      onComplete();
    } else {
      setCurrentScreen(prev => prev + 1);
    }
  };

  if (step === 'hidden') return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#101B3D]/80 backdrop-blur-md"
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-md">
          {step === 'prompt' && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              className="bg-white rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[#3478E5]" />
              
              <div className="w-20 h-20 bg-[#EEF4FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-[#3478E5]" />
              </div>
              
              <h2 className="text-2xl font-black text-[#101B3D] mb-3">
                Are you completely new to Data Structures & Algorithms?
              </h2>
              <p className="text-sm text-[#111111]/70 mb-8 font-medium">
                Don't worry if you are! We have a quick 1-minute intro to help you understand what this is all about.
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={handleStartCarousel}
                  className="w-full py-3.5 bg-[#3478E5] hover:bg-[#2864C6] text-white rounded-xl font-bold transition shadow-md active:scale-[0.98]"
                >
                  Yes, show me what it is!
                </button>
                <button
                  onClick={handleDismiss}
                  className="w-full py-3.5 bg-transparent hover:bg-[#F5F5F0] text-[#8C8C8C] hover:text-[#111111] rounded-xl font-bold transition"
                >
                  No, I already know
                </button>
              </div>
            </motion.div>
          )}

          {step === 'carousel' && (
            <motion.div
              key="carousel"
              initial={{ scale: 0.9, opacity: 0, x: 50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0, x: -50 }}
              className="bg-white rounded-3xl h-[500px] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-[#EAEAEA]">
                <motion.div 
                  className="h-full bg-[#3478E5]"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentScreen + 1) / SCREENS.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Close Button */}
              <button 
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 text-[#8C8C8C] hover:text-[#111111] hover:bg-[#F5F5F0] rounded-full transition z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 flex flex-col p-8 items-center text-center justify-center relative">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScreen}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    {React.createElement(SCREENS[currentScreen].icon, {
                      className: "w-24 h-24 mb-8",
                      style: { color: SCREENS[currentScreen].color }
                    })}
                    
                    <h3 className="text-2xl font-black text-[#101B3D] mb-4">
                      {SCREENS[currentScreen].title}
                    </h3>
                    <p className="text-[#111111]/70 font-medium leading-relaxed">
                      {SCREENS[currentScreen].text}
                    </p>
                  </motion.div>
                </AnimatePresence>

              </div>

              <div className="p-6 border-t border-[#EAEAEA]">
                <button
                  onClick={handleNextScreen}
                  className="w-full py-4 bg-[#101B3D] hover:bg-[#101B3D]/90 text-white rounded-xl font-bold transition flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>{currentScreen === SCREENS.length - 1 ? "Start My Journey" : "Continue"}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </motion.div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

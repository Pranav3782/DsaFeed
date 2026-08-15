import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ChevronLeft, ChevronRight, Shuffle, Lock, Sparkles } from 'lucide-react';
import { FLASHCARDS } from '../data/flashcardsData';
import { UserProgress } from '../types';

interface FlashcardsPageProps {
  userProgress: UserProgress;
  onGoToConcepts: () => void;
}

export const FlashcardsPage: React.FC<FlashcardsPageProps> = ({ userProgress, onGoToConcepts }) => {
  // Filter flashcards based on completed topics
  const availableFlashcards = useMemo(() => {
    return FLASHCARDS.filter(card => userProgress.completedTopics.includes(card.topicId));
  }, [userProgress.completedTopics]);

  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState(availableFlashcards);
  const [completedCount, setCompletedCount] = useState(0);

  const totalCards = availableFlashcards.length;

  const handleGotIt = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCards(prev => prev.slice(1));
      setCompletedCount(prev => prev + 1);
    }, 150);
  };

  const handleNeedsRevision = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCards(prev => {
        const current = prev[0];
        return [...prev.slice(1), current];
      });
    }, 150);
  };

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      handleGotIt();
    } else if (info.offset.x < -threshold) {
      handleNeedsRevision();
    }
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setTimeout(() => {
      const shuffled = [...cards].sort(() => Math.random() - 0.5);
      setCards(shuffled);
    }, 150);
  };

  const handleReset = () => {
    setCards(availableFlashcards);
    setCompletedCount(0);
    setIsFlipped(false);
  };

  if (availableFlashcards.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-[#EEF4FF] rounded-full flex items-center justify-center mb-6 border-8 border-white shadow-xl">
          <Lock className="w-10 h-10 text-[#3478E5]" />
        </div>
        <h2 className="text-3xl font-black text-[#101B3D] mb-4">Flashcards Locked</h2>
        <p className="text-[#8C8C8C] max-w-md font-medium mb-8 leading-relaxed">
          Flashcards are magically generated as you learn! Complete your first DSA concept to unlock your personalized review deck.
        </p>
        <button
          onClick={onGoToConcepts}
          className="px-8 py-4 bg-[#3478E5] hover:bg-[#2864C6] text-white rounded-xl font-bold transition shadow-lg shadow-[#3478E5]/30 flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          Start Learning Concepts
        </button>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] py-12 px-4 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-[#EFFCF6] rounded-full flex items-center justify-center mb-6 border-8 border-white shadow-xl">
          <Sparkles className="w-10 h-10 text-[#55C990]" />
        </div>
        <h2 className="text-3xl font-black text-[#101B3D] mb-4">Deck Completed!</h2>
        <p className="text-[#8C8C8C] max-w-md font-medium mb-8 leading-relaxed">
          Awesome job! You've successfully reviewed all the flashcards in your deck.
        </p>
        <button
          onClick={handleReset}
          className="px-8 py-4 bg-[#3478E5] hover:bg-[#2864C6] text-white rounded-xl font-bold transition shadow-lg flex items-center gap-2"
        >
          <Shuffle className="w-5 h-5" />
          Review Again
        </button>
      </div>
    );
  }

  const currentCard = cards[0];

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-12 px-4 sm:px-6 relative overflow-hidden flex flex-col items-center">
      
      <div className="w-full max-w-3xl relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-10 w-full justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-[#EAEAEA]">
              <Layers className="w-6 h-6 text-[#3478E5]" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-[#101B3D]">Smart Review</h1>
              <p className="text-sm font-bold text-[#8C8C8C]">
                Mastered: {completedCount} / {totalCards}
              </p>
            </div>
          </div>
          <button
            onClick={handleShuffle}
            className="px-4 py-2 bg-white border border-[#EAEAEA] shadow-sm rounded-xl flex items-center gap-2 hover:border-[#3478E5] text-[#8C8C8C] hover:text-[#3478E5] font-bold transition-colors"
          >
            <Shuffle className="w-4 h-4" />
            <span className="hidden sm:inline">Shuffle Remaining</span>
          </button>
        </div>

        {/* 3D Flashcard Container */}
        <div className="w-full h-[400px] md:h-[450px] relative perspective-1000">
          <AnimatePresence>
            <motion.div
              key={currentCard.id}
              className="w-full h-full relative preserve-3d cursor-pointer touch-none"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front of Card (Question) */}
              <div className="absolute w-full h-full backface-hidden bg-white rounded-[32px] shadow-xl border border-[#EAEAEA] p-10 flex flex-col items-center justify-center text-center select-none">
                <span className="px-4 py-1.5 bg-[#EEF4FF] text-[#3478E5] rounded-full text-xs font-black uppercase tracking-wider mb-8">
                  Question
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#101B3D] leading-relaxed">
                  {currentCard.question}
                </h2>
                <p className="absolute bottom-8 text-sm text-[#8C8C8C] font-bold flex items-center gap-2 animate-pulse">
                  Tap to flip • Swipe left/right to answer
                </p>
              </div>

              {/* Back of Card (Answer) */}
              <div 
                className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#101B3D] to-[#2B4B99] rounded-[32px] shadow-xl border border-[#3478E5]/30 p-10 flex flex-col items-center justify-center text-center text-white select-none"
                style={{ transform: "rotateY(180deg)" }}
              >
                <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-black uppercase tracking-wider mb-8 border border-white/20">
                  Concept
                </span>
                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                  {currentCard.answer}
                </p>
                <p className="absolute bottom-8 text-sm text-white/50 font-bold">
                  Swipe Left: Needs Revision • Swipe Right: Got It
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-12 w-full max-w-md justify-between">
          <button
            onClick={(e) => { e.stopPropagation(); handleNeedsRevision(); }}
            className="flex-1 py-4 bg-white border-2 border-[#F26B5B] shadow-sm rounded-2xl flex items-center justify-center gap-2 text-[#F26B5B] font-black hover:bg-[#FFF1F0] transition-colors"
          >
            Needs Revision
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); handleGotIt(); }}
            className="flex-1 py-4 bg-[#55C990] shadow-lg shadow-[#55C990]/20 rounded-2xl flex items-center justify-center gap-2 text-white font-black hover:bg-[#43A475] transition-colors"
          >
            Got It!
          </button>
        </div>

      </div>
    </div>
  );
};

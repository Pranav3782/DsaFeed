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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState(availableFlashcards);

  // Reset flip state when changing cards
  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 150);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setTimeout(() => {
      const shuffled = [...cards].sort(() => Math.random() - 0.5);
      setCards(shuffled);
      setCurrentIndex(0);
    }, 150);
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

  const currentCard = cards[currentIndex];

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-12 px-4 sm:px-6 relative overflow-hidden flex flex-col items-center">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-[#EEF4FF] to-transparent pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#F5C94A]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="w-full max-w-3xl relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-3 bg-white rounded-xl shadow-sm border border-[#EAEAEA]">
            <Layers className="w-6 h-6 text-[#3478E5]" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#101B3D]">Smart Review</h1>
            <p className="text-sm font-bold text-[#8C8C8C]">
              Card {currentIndex + 1} of {cards.length}
            </p>
          </div>
        </div>

        {/* 3D Flashcard Container */}
        <div className="w-full h-[400px] md:h-[450px] relative perspective-1000">
          <motion.div
            className="w-full h-full relative preserve-3d cursor-pointer"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front of Card (Question) */}
            <div className="absolute w-full h-full backface-hidden bg-white rounded-[32px] shadow-2xl border border-[#EAEAEA] p-10 flex flex-col items-center justify-center text-center">
              <span className="px-4 py-1.5 bg-[#EEF4FF] text-[#3478E5] rounded-full text-xs font-black uppercase tracking-wider mb-8">
                Question
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#101B3D] leading-relaxed">
                {currentCard.question}
              </h2>
              <p className="absolute bottom-8 text-sm text-[#8C8C8C] font-bold flex items-center gap-2 animate-pulse">
                Click to reveal answer
              </p>
            </div>

            {/* Back of Card (Answer) */}
            <div 
              className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#101B3D] to-[#2B4B99] rounded-[32px] shadow-2xl border border-[#3478E5]/30 p-10 flex flex-col items-center justify-center text-center text-white"
              style={{ transform: "rotateY(180deg)" }}
            >
              <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-black uppercase tracking-wider mb-8 border border-white/20">
                Answer
              </span>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                {currentCard.answer}
              </p>
              <p className="absolute bottom-8 text-sm text-white/50 font-bold">
                Click to view question
              </p>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-12 w-full max-w-sm justify-between">
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-2xl bg-white border border-[#EAEAEA] shadow-sm flex items-center justify-center hover:border-[#101B3D] text-[#101B3D] transition-colors group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={handleShuffle}
            className="flex-1 py-4 bg-white border border-[#EAEAEA] shadow-sm rounded-2xl flex items-center justify-center gap-2 hover:border-[#3478E5] text-[#8C8C8C] hover:text-[#3478E5] font-bold transition-colors"
          >
            <Shuffle className="w-4 h-4" />
            Shuffle Deck
          </button>

          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-2xl bg-[#3478E5] shadow-lg shadow-[#3478E5]/20 flex items-center justify-center hover:bg-[#2864C6] text-white transition-colors group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};

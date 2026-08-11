import React, { useState, useEffect } from 'react';
import { CodeBlockExercise, CodeBlock } from '../types';
import { Code2, Bot, Check, RotateCcw, Lightbulb, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface CodeOrderingExerciseProps {
  exercises: CodeBlockExercise[];
  onCompleteExercise: (exerciseId: string) => void;
  onAddXp: (amount: number) => void;
}

export const CodeOrderingExercise: React.FC<CodeOrderingExerciseProps> = ({
  exercises,
  onCompleteExercise,
  onAddXp
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const exercise = exercises[currentIdx];

  const [activeSlots, setActiveSlots] = useState<(CodeBlock | null)[]>([]);
  const [bankBlocks, setBankBlocks] = useState<CodeBlock[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'incorrect'>('idle');

  // Shuffle blocks and initialize empty slots
  useEffect(() => {
    if (exercise) {
      const shuffled = [...exercise.blocks].sort(() => Math.random() - 0.5);
      setBankBlocks(shuffled);
      setActiveSlots(new Array(exercise.blocks.length).fill(null));
      setStatus('idle');
      setShowHint(false);
    }
  }, [currentIdx, exercise]);

  if (!exercise) return null;

  const handleSelectFromBank = (block: CodeBlock) => {
    if (status === 'success') return;
    
    const emptyIdx = activeSlots.findIndex(slot => slot === null);
    if (emptyIdx === -1) return; // No empty slots available

    const newSlots = [...activeSlots];
    newSlots[emptyIdx] = block;
    setActiveSlots(newSlots);

    setBankBlocks(prev => prev.filter(b => b.id !== block.id));
    setStatus('idle');
  };

  const handleDeselectFromSlot = (index: number) => {
    if (status === 'success') return;
    
    const block = activeSlots[index];
    if (!block) return;

    const newSlots = [...activeSlots];
    newSlots[index] = null;
    setActiveSlots(newSlots);

    setBankBlocks(prev => [...prev, block]);
    setStatus('idle');
  };

  const handleReset = () => {
    const shuffled = [...exercise.blocks].sort(() => Math.random() - 0.5);
    setBankBlocks(shuffled);
    setActiveSlots(new Array(exercise.blocks.length).fill(null));
    setStatus('idle');
    setShowHint(false);
  };

  const handleCheckOrder = () => {
    // Ensure all slots are filled before checking
    if (activeSlots.some(slot => slot === null)) {
      setStatus('incorrect');
      return;
    }

    const isCorrect = activeSlots.every((block, idx) => block?.correctIndex === idx);

    if (isCorrect) {
      setStatus('success');
      onCompleteExercise(exercise.id);
      onAddXp(40);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setStatus('incorrect');
    }
  };

  const handleNextExercise = () => {
    if (currentIdx + 1 < exercises.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setCurrentIdx(0); // Loop back
    }
  };

  const progressPercentage = ((currentIdx + 1) / exercises.length) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-24">
      
      {/* Top Header / Progress Bar */}
      <div className="flex items-center gap-4 px-2">
        <button className="text-[#8C8C8C] hover:text-[#101B3D] transition p-2">
          <X className="w-6 h-6" />
        </button>
        <div className="flex-1 h-3.5 bg-[#EAEAEA] rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#8B5CF6]" 
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="text-xs font-black text-[#8C8C8C] w-12 text-right">
          {currentIdx + 1} / {exercises.length}
        </div>
      </div>

      <div className="bg-white border border-[#EAEAEA] rounded-[2rem] p-6 sm:p-8 shadow-xs">
        
        {/* Scenario Prompts */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#101B3D] leading-tight mb-2">
            Let's build the solution step by step.
          </h2>
          <p className="text-base text-[#111111]/80 font-medium">
            {exercise.scenario}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 mb-4">
          <button
            onClick={() => setShowHint(!showHint)}
            className="px-4 py-2 text-xs font-bold text-[#101B3D] bg-[#FFFBEA] border border-[#F5C94A]/40 rounded-xl flex items-center gap-1.5 transition active:scale-95"
          >
            <Lightbulb className="w-4 h-4 text-[#F5C94A]" /> Hint
          </button>
          
          <button
            onClick={handleReset}
            className="px-4 py-2 text-xs font-bold text-[#8C8C8C] hover:text-[#101B3D] bg-[#FFFDF9] border border-[#EAEAEA] rounded-xl flex items-center gap-1.5 transition active:scale-95"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
        </div>

        {/* Hint Box */}
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-[#FFFBEA] border border-[#F5C94A]/50 rounded-2xl text-xs sm:text-sm font-semibold text-[#101B3D] mb-6 flex items-start gap-2.5"
          >
            <Lightbulb className="w-5 h-5 text-[#F5C94A] shrink-0 mt-0.5" />
            <span><strong>Hint:</strong> {exercise.hint}</span>
          </motion.div>
        )}

        {/* Code Frame with Slots */}
        <div className="bg-[#101B3D] text-white p-5 sm:p-6 rounded-3xl font-mono text-xs sm:text-sm shadow-inner space-y-3">
          <pre className="text-[#8C8C8C] overflow-x-auto">{exercise.codeContext.prefix}</pre>

          <div className="space-y-2 py-2 border-y border-white/10">
            {activeSlots.map((slot, idx) => (
              <div
                key={idx}
                onClick={() => handleDeselectFromSlot(idx)}
                className={`min-h-[44px] p-3 rounded-xl border-2 flex items-center transition-all ${
                  status !== 'success' && slot ? 'cursor-pointer hover:bg-white/20' : ''
                } ${
                  slot 
                    ? status === 'success' ? 'border-transparent bg-[#55C990]/20' : status === 'incorrect' ? 'border-[#F26B5B] bg-[#F26B5B]/10' : 'border-transparent bg-white/10'
                    : 'border-dashed border-white/20 bg-transparent'
                }`}
              >
                {slot ? (
                  <div className="flex items-center gap-3 w-full">
                    <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-black shrink-0 ${status === 'success' ? 'bg-[#55C990] text-white' : 'bg-white/20 text-white/50'}`}>
                      {idx + 1}
                    </span>
                    <pre className="text-white whitespace-pre font-mono overflow-x-auto">{slot.code}</pre>
                  </div>
                ) : (
                  <span className="text-white/30 text-xs italic">Tap a block below to fill line {idx + 1}...</span>
                )}
              </div>
            ))}
          </div>

          <pre className="text-[#8C8C8C] overflow-x-auto">{exercise.codeContext.suffix}</pre>
        </div>

        {/* Inline incorrect message removed */}

        {/* Word Bank */}
        <div className="mt-8 pt-6 border-t border-[#EAEAEA]">
          <h3 className="text-[11px] uppercase tracking-wider font-black text-[#8C8C8C] mb-4 text-center">Available Code Blocks</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {bankBlocks.length > 0 ? (
              bankBlocks.map(block => (
                <button
                  key={block.id}
                  onClick={() => handleSelectFromBank(block)}
                  className="px-5 py-3 bg-[#EEF4FF] hover:bg-[#D5E3FF] border border-[#3478E5]/20 text-[#101B3D] rounded-2xl font-mono text-xs sm:text-sm shadow-sm transition-transform active:scale-95 flex items-center"
                >
                  {block.code}
                </button>
              ))
            ) : (
              <div className="py-4 text-[#8C8C8C] text-sm font-bold">
                All blocks placed! Click "Check Answer" to verify.
              </div>
            )}
          </div>
        </div>

        {/* Check Button (Visible only when not success) */}
        {status !== 'success' && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleCheckOrder}
              disabled={activeSlots.some(s => s === null)}
              className="w-full max-w-sm px-8 py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] disabled:bg-[#EAEAEA] disabled:text-[#8C8C8C] disabled:cursor-not-allowed text-white rounded-[1.25rem] text-sm sm:text-base font-black shadow-md transition-all active:scale-95"
            >
              Check Answer
            </button>
          </div>
        )}

      </div>

      {/* Mimo-style Status Bottom Drawer */}
      <AnimatePresence>
        {(status === 'success' || status === 'incorrect') && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t p-6 sm:p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] ${
              status === 'success' ? 'border-[#EAEAEA]' : 'border-[#F26B5B]/30'
            }`}
          >
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-5 w-full sm:w-auto">
                {/* Mascot / Avatar */}
                <div className="relative shrink-0">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center ${
                    status === 'success' ? 'bg-[#EEF4FF]' : 'bg-[#FFF1F0]'
                  }`}>
                    <Bot className={`w-8 h-8 sm:w-10 sm:h-10 ${
                      status === 'success' ? 'text-[#3478E5]' : 'text-[#F26B5B]'
                    }`} />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-7 h-7 rounded-full border-[3px] border-white flex items-center justify-center text-white ${
                    status === 'success' ? 'bg-[#55C990]' : 'bg-[#F26B5B]'
                  }`}>
                    {status === 'success' ? (
                      <Check className="w-4 h-4" strokeWidth={4} />
                    ) : (
                      <X className="w-4 h-4" strokeWidth={4} />
                    )}
                  </div>
                </div>

                <div className="space-y-1 text-center sm:text-left w-full">
                  <h3 className={`text-2xl sm:text-3xl font-black ${
                    status === 'success' ? 'text-[#55C990]' : 'text-[#F26B5B]'
                  }`}>
                    {status === 'success' ? 'Great job!' : 'Not quite right'}
                  </h3>
                  <p className="text-sm font-bold text-[#8C8C8C]">
                    {status === 'success' ? "You earned +40 XP. Let's keep it going." : "Tap the incorrect lines to remove them and try a different order."}
                  </p>
                </div>
              </div>

              <button
                onClick={status === 'success' ? handleNextExercise : () => setStatus('idle')}
                className={`w-full sm:w-auto px-10 py-4 sm:py-5 text-white rounded-2xl text-base sm:text-lg font-black shadow-md transition-transform active:scale-95 ${
                  status === 'success' ? 'bg-[#8B5CF6] hover:bg-[#7C3AED]' : 'bg-[#F26B5B] hover:bg-[#D54D3F]'
                }`}
              >
                {status === 'success' ? 'Continue' : 'Got it'}
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

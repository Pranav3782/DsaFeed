import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, BookOpen, Code2, Brain, Trophy, ChevronRight } from 'lucide-react';

const STEPS = [
  { id: 'topic', label: '01 Learn' },
  { id: 'quiz', label: '02 Quiz' },
  { id: 'practice', label: '03 Practice' },
  { id: 'progress', label: '04 Progress' }
];

export const InteractiveDemo: React.FC = () => {
  const [animationState, setAnimationState] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const sequence = [
    { name: 'topic-intro', duration: 1500, step: 0 },
    { name: 'topic-hover', duration: 700, step: 0 },
    { name: 'quiz-intro', duration: 1500, step: 1 },
    { name: 'quiz-answer', duration: 1000, step: 1 },
    { name: 'exercise-intro', duration: 1500, step: 2 },
    { name: 'exercise-reorder', duration: 2000, step: 2 },
    { name: 'exercise-success', duration: 1000, step: 2 },
    { name: 'progress-intro', duration: 1000, step: 3 },
    { name: 'progress-done', duration: 2000, step: 3 },
  ];

  useEffect(() => {
    if (isHovered) return;

    const currentStep = sequence[animationState];
    const timer = setTimeout(() => {
      setAnimationState((prev) => (prev + 1) % sequence.length);
    }, currentStep.duration);

    return () => clearTimeout(timer);
  }, [animationState, isHovered, sequence]);

  const currentStateName = sequence[animationState].name;
  const activeStepIndex = sequence[animationState].step;

  // Code block initial and solved orders
  const initialCodeBlocks = [
    { id: '2', text: 'const first = numbers[0];' },
    { id: '1', text: 'const numbers = [1, 2, 3];' },
    { id: '3', text: 'console.log(first);' }
  ];
  
  const solvedCodeBlocks = [
    { id: '1', text: 'const numbers = [1, 2, 3];' },
    { id: '2', text: 'const first = numbers[0];' },
    { id: '3', text: 'console.log(first);' }
  ];

  const displayedCodeBlocks = currentStateName === 'exercise-intro' 
    ? initialCodeBlocks 
    : solvedCodeBlocks;

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#FFFDF9] flex justify-center">
      <div className="max-w-[950px] w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[#101B3D] mb-2">
            <motion.span 
              initial={{ backgroundSize: "0% 100%" }}
              whileInView={{ backgroundSize: "100% 100%" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="inline leading-relaxed"
              style={{
                backgroundImage: "linear-gradient(transparent 65%, rgba(245,201,74,0.5) 65%)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left top"
              }}
            >
              See how DSAfeed works
            </motion.span>
          </h2>
          <p className="text-sm sm:text-base text-[#111111]/70 font-medium">
            Learn, practice, and build your problem-solving skills — one step at a time.
          </p>
        </div>

        {/* Demo Container */}
        <div 
          className="relative bg-white border border-[#EAEAEA] shadow-sm rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[400px] flex flex-col"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top Bar / Progress indicator */}
          <div className="bg-[#FAFAFA] border-b border-[#EAEAEA] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {STEPS.map((step, idx) => (
                <React.Fragment key={step.id}>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                    activeStepIndex === idx 
                      ? 'bg-[#EEF4FF] text-[#3478E5]' 
                      : activeStepIndex > idx
                        ? 'text-[#111111]'
                        : 'text-[#8C8C8C]'
                  }`}>
                    {activeStepIndex > idx ? <Check className="w-3.5 h-3.5 text-[#55C990]" /> : null}
                    {step.label}
                  </div>
                  {idx < STEPS.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-[#EAEAEA] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
            {isHovered && (
              <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#8C8C8C] bg-black/5 px-3 py-1 rounded-full animate-in fade-in">
                Paused
              </div>
            )}
          </div>

          {/* Content Area */}
          <div className="flex-1 p-6 sm:p-10 flex items-center justify-center relative overflow-hidden bg-[#FAFAFA]/50">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: TOPIC */}
              {activeStepIndex === 0 && (
                <motion.div
                  key="step-topic"
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  className="w-full max-w-md bg-white border border-[#EAEAEA] rounded-2xl p-6 shadow-xs"
                >
                  <div className="w-12 h-12 bg-[#EEF4FF] rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-[#3478E5]" />
                  </div>
                  <h3 className="text-xl font-black text-[#101B3D] mb-2">Arrays</h3>
                  <p className="text-sm text-[#111111]/70 mb-6">
                    Learn the basics of storing and accessing data sequentially in memory.
                  </p>
                  <button 
                    className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                      currentStateName === 'topic-hover'
                        ? 'bg-[#101B3D] text-white shadow-md scale-[1.02]'
                        : 'bg-[#F7F5F0] text-[#101B3D]'
                    }`}
                  >
                    Start Quiz
                    <ArrowRight className={`w-4 h-4 ${currentStateName === 'topic-hover' ? 'translate-x-1 transition-transform' : ''}`} />
                  </button>
                </motion.div>
              )}

              {/* STEP 2: QUIZ */}
              {activeStepIndex === 1 && (
                <motion.div
                  key="step-quiz"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full max-w-md bg-white border border-[#EAEAEA] rounded-2xl p-6 shadow-xs"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFBEA] text-[#101B3D] text-xs font-bold rounded-full mb-4">
                    <Brain className="w-3.5 h-3.5 text-[#F5C94A]" />
                    Concept Check
                  </div>
                  <h3 className="text-lg font-bold text-[#101B3D] mb-4">
                    What is the index of the first element in an array?
                  </h3>
                  <div className="space-y-2">
                    {['1', '0', '-1', 'Depends on the array'].map((ans, i) => {
                      const isCorrect = ans === '0';
                      const isSelected = currentStateName === 'quiz-answer' && isCorrect;
                      return (
                        <div 
                          key={i}
                          className={`p-3 rounded-xl border-2 text-sm font-bold transition-all duration-300 flex justify-between items-center ${
                            isSelected 
                              ? 'border-[#55C990] bg-[#55C990]/10 text-[#101B3D]' 
                              : 'border-[#EAEAEA] text-[#111111]/70'
                          }`}
                        >
                          {ans}
                          {isSelected && <Check className="w-4 h-4 text-[#55C990]" />}
                        </div>
                      )
                    })}
                  </div>
                  
                  {/* Success Banner */}
                  <AnimatePresence>
                    {currentStateName === 'quiz-answer' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        className="bg-[#55C990]/10 text-[#55C990] px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-2 overflow-hidden"
                      >
                        <Check className="w-4 h-4" />
                        Correct!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* STEP 3: CODE EXERCISE */}
              {activeStepIndex === 2 && (
                <motion.div
                  key="step-exercise"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-lg bg-white border border-[#EAEAEA] rounded-2xl p-6 shadow-xs"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#101B3D] rounded-xl flex items-center justify-center shrink-0">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#101B3D]">Put the code in the correct order</h3>
                      <p className="text-xs text-[#111111]/60">Drag to reorder the blocks.</p>
                    </div>
                  </div>

                  <div className="space-y-2 relative">
                    {displayedCodeBlocks.map((block) => (
                      <motion.div
                        key={block.id}
                        layout
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="p-3.5 bg-[#F7F5F0] border border-[#EAEAEA] rounded-xl font-mono text-sm text-[#111111] shadow-xs cursor-default flex items-center gap-3"
                      >
                        <div className="w-4 h-4 flex flex-col justify-center gap-0.5 opacity-30">
                          <div className="h-0.5 bg-black rounded-full" />
                          <div className="h-0.5 bg-black rounded-full" />
                          <div className="h-0.5 bg-black rounded-full" />
                        </div>
                        {block.text}
                      </motion.div>
                    ))}
                  </div>

                  {/* Success state */}
                  <AnimatePresence>
                    {currentStateName === 'exercise-success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 flex items-center justify-center gap-2 text-[#55C990] font-bold text-sm"
                      >
                        <Check className="w-4 h-4" />
                        Nice! That's the right logic.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* STEP 4: PROGRESS */}
              {activeStepIndex === 3 && (
                <motion.div
                  key="step-progress"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-sm bg-white border border-[#EAEAEA] rounded-2xl p-6 shadow-xs text-center"
                >
                  <div className="w-16 h-16 bg-[#FFFBEA] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-[#F5C94A]" />
                  </div>
                  <h3 className="text-xl font-black text-[#101B3D] mb-1">Array basics complete!</h3>
                  <p className="text-sm text-[#111111]/70 mb-6">
                    You're getting better at DSA.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-bold text-[#101B3D] mb-2">
                      <span>Course Progress</span>
                      <span>10%</span>
                    </div>
                    <div className="w-full h-2 bg-[#F7F5F0] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: currentStateName === 'progress-done' ? '10%' : '0%' }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-[#55C990] rounded-full"
                      />
                    </div>
                  </div>

                  <button className="w-full py-3 bg-[#101B3D] text-white rounded-xl font-bold flex items-center justify-center gap-2">
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

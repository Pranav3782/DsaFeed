import React, { useState } from 'react';
import { QuizSet } from '../types';
import { X, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface QuizPlayerProps {
  quizSet: QuizSet | null;
  onClose: () => void;
  onCompleteQuiz: (quizId: string, score: number, total: number) => void;
  onAddXp: (amount: number) => void;
}

export const QuizPlayer: React.FC<QuizPlayerProps> = ({
  quizSet,
  onClose,
  onCompleteQuiz,
  onAddXp
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);

  if (!quizSet) return null;

  const currentQuestion = quizSet.questions[currentIndex];
  const totalQuestions = quizSet.questions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Quiz finished
      setQuizFinished(true);
      const finalScore = score + (selectedOption === currentQuestion.correctIndex ? 1 : 0);
      const earnedXp = Math.round((finalScore / totalQuestions) * 50) + 20;
      
      onCompleteQuiz(quizSet.id, finalScore, totalQuestions);
      onAddXp(earnedXp);

      // Always celebrate completing the quiz to encourage the learner!
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101B3D]/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#EAEAEA] my-8 overflow-hidden flex flex-col"
        >
          {/* Header Bar */}
          <div className="p-6 border-b border-[#EAEAEA] bg-[#FFFDF9] flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black uppercase text-[#3478E5] bg-[#EEF4FF] px-2.5 py-0.5 rounded-full">
                  {quizSet.title}
                </span>
                {!quizFinished && (
                  <span className="text-xs text-[#8C8C8C] font-bold">
                    Question {currentIndex + 1} of {totalQuestions}
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={() => !quizFinished ? setShowQuitConfirm(true) : onClose()}
              className="p-2 rounded-full bg-white hover:bg-[#EAEAEA]/50 text-[#101B3D] border border-[#EAEAEA] transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Top Progress Bar */}
          {!quizFinished && (
            <div className="w-full bg-[#EAEAEA] h-2">
              <motion.div 
                className="bg-[#3478E5] h-2 rounded-r-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          {/* Quiz Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {!quizFinished ? (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Question Statement */}
                <h3 className="text-xl sm:text-2xl font-black text-[#101B3D] leading-snug">
                  {currentQuestion.question}
                </h3>

                {/* Optional Code Snippet */}
                {currentQuestion.codeSnippet && (
                  <div className="bg-[#101B3D] text-white p-4 rounded-2xl font-mono text-xs sm:text-sm overflow-x-auto">
                    <pre>{currentQuestion.codeSnippet}</pre>
                  </div>
                )}

                {/* Answer Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQuestion.correctIndex;

                    let cardStyle = "bg-[#FFFDF9] border-[#EAEAEA] hover:border-[#3478E5] text-[#111111]";
                    
                    if (isAnswered) {
                      if (isCorrect) {
                        cardStyle = "bg-[#EFFCF6] border-[#55C990] text-[#101B3D] font-extrabold shadow-xs";
                      } else if (isSelected) {
                        cardStyle = "bg-[#FFF1F0] border-[#F26B5B] text-[#F26B5B] font-bold";
                      } else {
                        cardStyle = "bg-[#FFFDF9] border-[#EAEAEA] text-[#8C8C8C] opacity-60";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswered}
                        className={`w-full p-4 rounded-2xl border text-left text-sm sm:text-base font-bold transition flex items-center justify-between gap-3 ${cardStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-9 h-9 shrink-0 rounded-[14px] flex items-center justify-center text-sm font-black transition-colors ${
                            isAnswered && isCorrect ? 'bg-[#55C990] text-white shadow-inner' : 'bg-[#FAFAFA] border border-[#EAEAEA] text-[#101B3D]'
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{opt}</span>
                        </div>

                        {isAnswered && (
                          <div>
                            {isCorrect && <CheckCircle2 className="w-5 h-5 text-[#55C990]" />}
                            {!isCorrect && isSelected && <XCircle className="w-5 h-5 text-[#F26B5B]" />}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box when Answered */}
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-[#EEF4FF] border border-[#3478E5]/30 rounded-2xl space-y-1"
                  >
                    <div className="flex items-center gap-2 text-xs font-extrabold text-[#3478E5] uppercase tracking-wider">
                      <HelpCircle className="w-4 h-4" />
                      <span>Explanation</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#101B3D] font-medium leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </motion.div>
                )}
              </div>
            ) : (
              /* Quiz Finished Summary */
              <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-[#FFFBEA] border border-[#F5C94A]/50 flex items-center justify-center text-[#F5C94A]">
                  <Trophy className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs font-black uppercase text-[#3478E5] bg-[#EEF4FF] px-3 py-1 rounded-full">
                    Quiz Completed
                  </span>
                  <h3 className="text-3xl font-black text-[#101B3D] mt-2 mb-1">
                    {score / totalQuestions >= 0.7 ? 'Great Job!' : 'Keep Practicing!'}
                  </h3>
                  <p className="text-sm text-[#8C8C8C] font-semibold">
                    You scored {score} out of {totalQuestions} questions correctly.
                  </p>
                </div>

                {/* Stats Pill */}
                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                  <div className="p-4 bg-[#EFFCF6] border border-[#55C990]/30 rounded-2xl">
                    <p className="text-2xl font-black text-[#55C990]">
                      {Math.round((score / totalQuestions) * 100)}%
                    </p>
                    <p className="text-xs font-bold text-[#101B3D]">Accuracy</p>
                  </div>

                  <div className="p-4 bg-[#FFFBEA] border border-[#F5C94A]/40 rounded-2xl">
                    <p className="text-2xl font-black text-[#101B3D] flex items-center justify-center gap-1">
                      <Sparkles className="w-5 h-5 text-[#F5C94A] fill-[#F5C94A]" />
                      +{Math.round((score / totalQuestions) * 50) + 20}
                    </p>
                    <p className="text-xs font-bold text-[#101B3D]">XP Earned</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-[#FFFDF9] border-t border-[#EAEAEA] flex items-center justify-between">
            {!quizFinished ? (
              <div className="flex items-center justify-between w-full">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-extrabold text-[#8C8C8C] hover:text-[#101B3D]"
                >
                  Quit Quiz
                </button>

                <button
                  onClick={handleNextQuestion}
                  disabled={!isAnswered}
                  className={`px-6 py-3 rounded-2xl text-xs font-black shadow-xs transition flex items-center gap-2 ${
                    isAnswered
                      ? 'bg-[#3478E5] hover:bg-[#2864C6] text-white active:scale-98'
                      : 'bg-[#EAEAEA] text-[#8C8C8C] cursor-not-allowed'
                  }`}
                >
                  <span>{currentIndex + 1 === totalQuestions ? 'Finish Quiz' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3 w-full">
                <button
                  onClick={handleRestart}
                  className="px-5 py-3 bg-white border border-[#EAEAEA] hover:bg-[#EAEAEA]/30 text-[#101B3D] rounded-2xl text-xs font-extrabold transition flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Try Again</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#3478E5] hover:bg-[#2864C6] text-white rounded-2xl text-xs font-black shadow-xs transition"
                >
                  Back to Learning
                </button>
              </div>
            )}
          </div>

          {/* Confirm Quit Modal */}
          {showQuitConfirm && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#101B3D]/80 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full mx-4"
              >
                <h3 className="text-xl font-black text-[#101B3D] mb-2">Quit Quiz?</h3>
                <p className="text-[#8C8C8C] font-medium text-sm mb-6">
                  Are you sure you want to quit? Your progress in this quiz will be lost.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowQuitConfirm(false)}
                    className="flex-1 py-3 px-4 bg-[#F5C94A] hover:bg-[#F26B5B] hover:text-white text-[#101B3D] rounded-xl font-bold transition text-sm"
                  >
                    Continue
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 py-3 px-4 bg-[#FAFAFA] border border-[#EAEAEA] hover:border-[#101B3D] text-[#101B3D] rounded-xl font-bold transition text-sm"
                  >
                    Quit
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

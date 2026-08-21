import React from 'react';
import { QuizSet, UserProgress, DsaTopic } from '../types';
import { X, Play, CheckCircle2, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizLevelSelectorModalProps {
  topic: DsaTopic;
  quizSets: QuizSet[];
  userProgress: UserProgress;
  onClose: () => void;
  onSelectLevel: (quizSet: QuizSet) => void;
}

export const QuizLevelSelectorModal: React.FC<QuizLevelSelectorModalProps> = ({
  topic,
  quizSets,
  userProgress,
  onClose,
  onSelectLevel
}) => {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#101B3D]/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-5xl bg-[#F8FAFC] rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl border border-white my-auto overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between border-b border-[#EAEAEA] gap-4 bg-white sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center font-extrabold text-3xl"
                style={{ backgroundColor: topic.bgTint, color: topic.accentColor }}
              >
                {topic.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#101B3D] mb-1">
                  {topic.name} Quizzes
                </h2>
                <p className="text-sm font-bold text-[#8C8C8C]">
                  Select a difficulty level to test your knowledge.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:relative sm:top-auto sm:right-auto p-3 rounded-full bg-[#FFFDF9] border border-[#EAEAEA] hover:bg-[#EAEAEA]/50 text-[#101B3D] transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Grid Container */}
          <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
              {quizSets.map((quiz, index) => {
                const scoreData = userProgress.quizScores[quiz.id];
                const isCompleted = scoreData?.percentage === 100;
                const hasStarted = scoreData !== undefined;
                const levelNum = index + 1;

                // Difficulty aesthetics
                let diffColor = '';
                let diffBg = '';
                if (quiz.difficulty === 'Beginner') {
                  diffColor = 'text-[#55C990]';
                  diffBg = 'bg-[#EFFCF6] border-[#55C990]/20';
                } else if (quiz.difficulty === 'Intermediate') {
                  diffColor = 'text-[#F5C94A]';
                  diffBg = 'bg-[#FFFBEA] border-[#F5C94A]/20';
                } else {
                  diffColor = 'text-[#F26B5B]';
                  diffBg = 'bg-[#FFF1F0] border-[#F26B5B]/20';
                }

                return (
                  <motion.button
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectLevel(quiz)}
                    key={quiz.id}
                    className={`group relative p-5 rounded-[1.5rem] flex flex-col items-center justify-center text-center transition-all border-2 shadow-sm ${
                      isCompleted 
                        ? 'bg-white border-[#55C990] shadow-[#55C990]/10' 
                        : 'bg-white border-transparent hover:border-[#3478E5] hover:shadow-xl'
                    }`}
                  >
                    {/* Completion Badge */}
                    {isCompleted && (
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#55C990] text-white flex items-center justify-center shadow-md border-2 border-white">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    )}

                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 ${diffBg}`}>
                      {isCompleted ? (
                        <Star className={`w-7 h-7 ${diffColor}`} fill="currentColor" />
                      ) : (
                        <span className={`text-2xl font-black ${diffColor}`}>{levelNum}</span>
                      )}
                    </div>

                    <h3 className="text-sm font-black text-[#101B3D] mb-1">Level {levelNum}</h3>
                    <div className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${diffBg} ${diffColor}`}>
                      {quiz.difficulty}
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 w-full h-8 flex flex-col items-center justify-end">
                      {hasStarted ? (
                        <div className="flex flex-col items-center gap-1.5 w-full">
                          <div className="w-full bg-[#EAEAEA] h-1.5 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${isCompleted ? 'bg-[#55C990]' : 'bg-[#3478E5]'}`}
                              style={{ width: `${scoreData.percentage}%` }}
                            />
                          </div>
                          <span className="text-[10px] font-bold text-[#8C8C8C]">
                            {scoreData.score} / {scoreData.total} Correct
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-1.5 text-[#3478E5] opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-3 h-3 fill-current" />
                          <span className="text-[10px] font-black uppercase">Start</span>
                        </div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

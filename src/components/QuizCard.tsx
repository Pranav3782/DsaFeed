import React from 'react';
import { QuizSet } from '../types';
import { HelpCircle, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface QuizCardProps {
  quizSet: QuizSet;
  userScore?: { score: number; total: number; percentage: number };
  onStartQuiz: (quizSet: QuizSet) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  quizSet,
  userScore,
  onStartQuiz
}) => {
  const isCompleted = userScore && userScore.percentage >= 70;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-[#EAEAEA] hover:border-[#3478E5] rounded-3xl p-6 shadow-[0_4px_16px_rgba(16,27,61,0.04)] hover:shadow-[0_8px_24px_rgba(16,27,61,0.08)] transition-all flex flex-col justify-between"
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-2xl bg-[#FFFBEA] text-[#101B3D]">
              <HelpCircle className="w-5 h-5 text-[#F5C94A]" />
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-[#8C8C8C]">
              {quizSet.questionCount} Questions
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-[#FFFDF9] border border-[#EAEAEA] text-[#101B3D]">
              {quizSet.difficulty}
            </span>
            {isCompleted && (
              <span className="p-1 rounded-full bg-[#EFFCF6] text-[#55C990]" title="Passed!">
                <CheckCircle className="w-4 h-4 fill-[#55C990] text-white" />
              </span>
            )}
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-black text-[#101B3D] mb-2">
          {quizSet.title}
        </h3>

        <p className="text-sm text-[#111111]/70 font-medium leading-relaxed mb-6">
          {quizSet.subtitle}
        </p>
      </div>

      {/* Progress & Start CTA */}
      <div>
        {userScore ? (
          <div className="p-3 bg-[#FFFDF9] border border-[#EAEAEA] rounded-2xl mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#F5C94A]" />
              <span className="text-xs font-bold text-[#101B3D]">Best Score</span>
            </div>
            <span className={`text-xs font-black ${isCompleted ? 'text-[#55C990]' : 'text-[#3478E5]'}`}>
              {userScore.score}/{userScore.total} ({userScore.percentage}%)
            </span>
          </div>
        ) : (
          <div className="p-3 bg-[#FFFDF9] border border-[#EAEAEA] rounded-2xl mb-4 text-xs font-semibold text-[#8C8C8C] flex items-center justify-between">
            <span>Not attempted yet</span>
            <span className="text-[#3478E5] font-bold">+50 XP</span>
          </div>
        )}

        <button
          onClick={() => onStartQuiz(quizSet)}
          className="w-full py-3 px-5 bg-[#3478E5] hover:bg-[#2864C6] text-white rounded-2xl text-xs font-black shadow-xs transition flex items-center justify-center gap-2 active:scale-98"
        >
          <span>{userScore ? 'Retake Quiz' : 'Start Quiz'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

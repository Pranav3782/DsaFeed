import React from 'react';
import { ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
  onTakeQuiz: () => void;
  onAddXp?: (amount: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartLearning, onTakeQuiz }) => {

  return (
    <div className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 overflow-hidden">
      {/* Decorative Background Blob Elements inspired by reference image */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 pointer-events-none -z-10 opacity-70">
        <div className="absolute top-6 left-8 w-16 h-16 rounded-full bg-[#F5C94A]/20 blur-xl animate-pulse" />
        <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-[#55C990]/20 blur-xl" />
        <div className="absolute bottom-4 left-1/3 w-32 h-32 rounded-full bg-[#3478E5]/15 blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center px-4">
        
        {/* Floating Playful Badges */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFBEA] border border-[#F5C94A]/40 rounded-full text-xs sm:text-sm font-extrabold text-[#101B3D] mb-6 shadow-xs">
          <Sparkles className="w-4 h-4 text-[#F5C94A] fill-[#F5C94A]" />
          <span>Interactive, Duolingo-style Data Structures & Algorithms</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#101B3D] tracking-tight leading-[1.1] mb-6">
          DSA made <span className="relative inline-block text-[#3478E5]">
            simple.
            <span className="absolute left-0 bottom-1 w-full h-3 bg-[#F5C94A]/40 -z-10 rounded-full"></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-xl text-[#111111]/75 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
          Learn concepts, practice problems, and build problem-solving skills without getting overwhelmed. Simple explanations, interactive quizzes, and code ordering games.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartLearning}
            className="relative w-full sm:w-auto px-8 py-4 bg-[#101B3D] text-white rounded-2xl text-base font-extrabold shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group active:scale-98 overflow-hidden z-10"
          >
            {/* Smooth blue color sweep moving towards the right side on hover */}
            <span className="absolute inset-0 bg-[#3478E5] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10" />
            
            <span className="relative z-10">Start Learning</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          <button
            onClick={onTakeQuiz}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#F7F5F0] text-[#101B3D] border-2 border-[#EAEAEA] hover:border-[#3478E5]/40 rounded-2xl text-base font-extrabold transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 shadow-xs"
          >
            <HelpCircle className="w-5 h-5 text-[#F5C94A]" />
            <span>Take a Quiz</span>
          </button>
        </div>

      </div>
    </div>
  );
};

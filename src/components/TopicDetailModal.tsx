import React, { useState } from 'react';
import { DsaTopic } from '../types';
import { X, BookOpen, Code, Briefcase, CheckCircle2, ArrowRight, HelpCircle, Lightbulb, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TopicDetailModalProps {
  topic: DsaTopic | null;
  onClose: () => void;
  onStartQuiz: (topicId: string) => void;
  onStartPractice: (topicId: string) => void;
  onViewFlashcards: () => void;
  isCompleted: boolean;
  onToggleComplete: (topicId: string) => void;
}

export const TopicDetailModal: React.FC<TopicDetailModalProps> = ({
  topic,
  onClose,
  onStartQuiz,
  onStartPractice,
  onViewFlashcards,
  isCompleted,
  onToggleComplete
}) => {
  const [activeTab, setActiveTab] = useState<'simple' | 'code' | 'interview'>('simple');
  const [selectedLang, setSelectedLang] = useState<number>(0);

  if (!topic) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101B3D]/50 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#EAEAEA] my-8 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div 
            className="p-5 sm:p-8 flex flex-col sm:flex-row items-start justify-between border-b border-[#EAEAEA] gap-4"
            style={{ backgroundColor: topic.bgTint }}
          >
            <div className="flex items-start sm:items-center gap-4">
              <div 
                className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center font-extrabold text-2xl"
                style={{ color: topic.accentColor }}
              >
                {topic.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 text-[#101B3D] border border-black/5">
                    {topic.difficulty}
                  </span>
                  <span className="text-xs text-[#8C8C8C] font-bold">~{topic.estimatedMinutes} mins read</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#101B3D]">{topic.name}</h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:relative sm:top-auto sm:right-auto p-2 rounded-full hover:bg-black/5 transition"
            >
              <X className="w-5 h-5 opacity-50" />
            </button>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex border-b border-[#EAEAEA] bg-[#FFFDF9] px-6 sm:px-8 pt-3 gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('simple')}
              className={`flex items-center gap-2 pb-3 px-4 font-bold text-sm border-b-2 transition whitespace-nowrap ${
                activeTab === 'simple'
                  ? 'border-[#3478E5] text-[#3478E5]'
                  : 'border-transparent text-[#8C8C8C] hover:text-[#111111]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>In Simple Words</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 pb-3 px-4 font-bold text-sm border-b-2 transition whitespace-nowrap ${
                activeTab === 'code'
                  ? 'border-[#3478E5] text-[#3478E5]'
                  : 'border-transparent text-[#8C8C8C] hover:text-[#111111]'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Code Examples</span>
            </button>

            <button
              onClick={() => setActiveTab('interview')}
              className={`flex items-center gap-2 pb-3 px-4 font-bold text-sm border-b-2 transition whitespace-nowrap ${
                activeTab === 'interview'
                  ? 'border-[#3478E5] text-[#3478E5]'
                  : 'border-transparent text-[#8C8C8C] hover:text-[#111111]'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>For Interviews (Big-O)</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#111111]">
            {activeTab === 'simple' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Analogy Box */}
                <div className="p-5 bg-[#FFFBEA] border border-[#F5C94A]/40 rounded-2xl flex items-start gap-4">
                  <div className="p-2.5 bg-[#F5C94A] text-[#101B3D] rounded-xl font-bold">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#101B3D] uppercase tracking-wider mb-1">Visual Analogy</h4>
                    <p className="text-sm sm:text-base font-semibold text-[#101B3D]/90 leading-relaxed">
                      "{topic.simpleExplanation.analogy}"
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h3 className="text-lg font-extrabold text-[#101B3D] mb-2">Summary</h3>
                  <p className="text-base text-[#111111]/80 font-medium leading-relaxed">
                    {topic.simpleExplanation.summary}
                  </p>
                </div>

                {/* Key Points */}
                <div>
                  <h3 className="text-base font-extrabold text-[#101B3D] mb-3">Key Takeaways</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {topic.simpleExplanation.keyPoints.map((point, idx) => (
                      <div key={idx} className="p-3 bg-[#FFFDF9] border border-[#EAEAEA] rounded-xl flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#55C990] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-[#111111]">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* When to use */}
                <div>
                  <h3 className="text-base font-extrabold text-[#101B3D] mb-2">When should you use {topic.name}?</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm font-medium text-[#111111]/80 pl-1">
                    {topic.simpleExplanation.whenToUse.map((useCase, idx) => (
                      <li key={idx}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 mb-2">
                  {topic.codeExamples.map((ex, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedLang(idx)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                        selectedLang === idx
                          ? 'bg-[#101B3D] text-white'
                          : 'bg-[#FFFDF9] border border-[#EAEAEA] text-[#111111] hover:bg-[#EAEAEA]/40'
                      }`}
                    >
                      {ex.language}
                    </button>
                  ))}
                </div>

                <div className="relative bg-[#101B3D] text-white p-5 rounded-2xl font-mono text-xs sm:text-sm overflow-x-auto shadow-inner">
                  <pre>{topic.codeExamples[selectedLang]?.code}</pre>
                </div>

                <p className="text-xs text-[#8C8C8C] font-semibold italic">
                  Tip: Try rearranging these code blocks in the Practice tab to cement your understanding!
                </p>
              </div>
            )}

            {activeTab === 'interview' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Big O Grid */}
                <div>
                  <h3 className="text-base font-extrabold text-[#101B3D] mb-3">Time & Space Complexity</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 bg-[#EEF4FF] border border-[#3478E5]/20 rounded-2xl text-center">
                      <p className="text-[11px] font-black text-[#8C8C8C] uppercase">Access</p>
                      <p className="text-base sm:text-lg font-black text-[#3478E5]">{topic.interviewTips.timeComplexity.access}</p>
                    </div>
                    <div className="p-3 bg-[#EEF4FF] border border-[#3478E5]/20 rounded-2xl text-center">
                      <p className="text-[11px] font-black text-[#8C8C8C] uppercase">Search</p>
                      <p className="text-base sm:text-lg font-black text-[#3478E5]">{topic.interviewTips.timeComplexity.search}</p>
                    </div>
                    <div className="p-3 bg-[#EEF4FF] border border-[#3478E5]/20 rounded-2xl text-center">
                      <p className="text-[11px] font-black text-[#8C8C8C] uppercase">Insertion</p>
                      <p className="text-base sm:text-lg font-black text-[#3478E5]">{topic.interviewTips.timeComplexity.insertion}</p>
                    </div>
                    <div className="p-3 bg-[#EEF4FF] border border-[#3478E5]/20 rounded-2xl text-center">
                      <p className="text-[11px] font-black text-[#8C8C8C] uppercase">Deletion</p>
                      <p className="text-base sm:text-lg font-black text-[#3478E5]">{topic.interviewTips.timeComplexity.deletion}</p>
                    </div>
                  </div>
                </div>

                {/* Common Patterns */}
                <div>
                  <h3 className="text-base font-extrabold text-[#101B3D] mb-2">Common Interview Patterns</h3>
                  <div className="flex flex-wrap gap-2">
                    {topic.interviewTips.commonPatterns.map((pat, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-[#FFFBEA] border border-[#F5C94A]/40 text-[#101B3D] rounded-full text-xs font-bold">
                        ⚡ {pat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pro Tips */}
                <div>
                  <h3 className="text-base font-extrabold text-[#101B3D] mb-2">Pro Tips</h3>
                  <ul className="space-y-2">
                    {topic.interviewTips.proTips.map((tip, idx) => (
                      <li key={idx} className="p-3 bg-[#FFFDF9] border border-[#EAEAEA] rounded-xl text-xs sm:text-sm font-semibold text-[#101B3D] flex items-center gap-2">
                        <span>🎯</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-[#FFFDF9] border-t border-[#EAEAEA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                onClick={() => onToggleComplete(topic.id)}
                className={`w-full sm:w-auto px-5 py-3 rounded-2xl text-xs font-black transition flex items-center justify-center gap-2 ${
                  isCompleted
                    ? 'bg-[#EFFCF6] text-[#55C990] border border-[#55C990]/40'
                    : 'bg-white text-[#101B3D] border border-[#EAEAEA] hover:bg-[#EAEAEA]/30'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isCompleted ? 'Marked as Completed' : 'Mark as Completed'}</span>
              </button>

              {isCompleted && (
                <button
                  onClick={() => {
                    onClose();
                    onViewFlashcards();
                  }}
                  className="w-full sm:w-auto px-5 py-3 bg-[#EEF4FF] hover:bg-[#3478E5] text-[#3478E5] hover:text-white border border-[#3478E5]/20 rounded-2xl text-xs font-black transition flex items-center justify-center gap-2 group"
                >
                  <Layers className="w-4 h-4" />
                  <span>View Flashcards</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onStartQuiz(topic.id);
                }}
                className="flex-1 sm:flex-initial px-5 py-3 bg-[#FFFBEA] hover:bg-[#F5C94A]/30 text-[#101B3D] border border-[#F5C94A]/50 rounded-2xl text-xs font-black transition flex items-center justify-center gap-2"
              >
                <HelpCircle className="w-4 h-4 text-[#F5C94A]" />
                <span>Take Quiz</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onStartPractice(topic.id);
                }}
                className="flex-1 sm:flex-initial px-6 py-3 bg-[#3478E5] hover:bg-[#2864C6] text-white rounded-2xl text-xs font-black shadow-xs transition flex items-center justify-center gap-2"
              >
                <span>Code Practice</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

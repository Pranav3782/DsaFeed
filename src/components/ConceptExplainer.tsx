import React, { useState } from 'react';
import { DsaTopic } from '../types';
import { Search, BookOpen, Briefcase, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

interface ConceptExplainerProps {
  topics: DsaTopic[];
  onSelectTopic: (topic: DsaTopic) => void;
}

export const ConceptExplainer: React.FC<ConceptExplainerProps> = ({ topics, onSelectTopic }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(topics[0].id);
  const [activeView, setActiveView] = useState<'simple' | 'interview'>('simple');

  const filteredTopics = topics.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentTopic = topics.find(t => t.id === selectedTopicId) || topics[0];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Search Header */}
      <div className="bg-white border border-[#EAEAEA] rounded-3xl p-6 sm:p-8 shadow-[0_4px_16px_rgba(16,27,61,0.04)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-black uppercase text-[#3478E5] bg-[#EEF4FF] px-3 py-1 rounded-full">
            Concept Hub
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#101B3D] mt-2">
            DSA Concepts in Plain English
          </h2>
          <p className="text-sm text-[#111111]/70 font-medium">
            No dense textbook jargon. Read simple analogies or review interview complexity charts.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#8C8C8C] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search concepts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#FFFDF9] border border-[#EAEAEA] focus:border-[#3478E5] rounded-2xl text-xs sm:text-sm font-semibold outline-none transition"
          />
        </div>
      </div>

      {/* Main Grid: Topic Selector + Content View */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Topic Selector List */}
        <div className="md:col-span-4 space-y-2 max-h-64 md:max-h-[600px] overflow-y-auto pr-1">
          {filteredTopics.map((t) => {
            const isSelected = t.id === selectedTopicId;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTopicId(t.id)}
                className={`w-full p-4 rounded-2xl text-left border transition flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#101B3D] text-white border-[#101B3D] shadow-xs'
                    : 'bg-white text-[#111111] border-[#EAEAEA] hover:border-[#3478E5]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/20 text-current">
                      {t.difficulty}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold">{t.name}</h4>
                  <p className={`text-xs line-clamp-1 ${isSelected ? 'text-white/70' : 'text-[#8C8C8C]'}`}>
                    {t.shortDescription}
                  </p>
                </div>
                <ArrowRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#F5C94A]' : 'text-[#8C8C8C]'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Topic Detail View */}
        <div className="md:col-span-8 bg-white border border-[#EAEAEA] rounded-3xl p-5 sm:p-8 shadow-[0_4px_16px_rgba(16,27,61,0.04)] space-y-6">
          
          {/* Header & Mode Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EAEAEA] pb-4 gap-4">
            <div>
              <h3 className="text-2xl font-black text-[#101B3D]">{currentTopic.name}</h3>
              <p className="text-xs text-[#8C8C8C] font-bold">Estimated reading time: ~{currentTopic.estimatedMinutes} mins</p>
            </div>

            <div className="flex items-center bg-[#FFFDF9] border border-[#EAEAEA] p-1 rounded-2xl">
              <button
                onClick={() => setActiveView('simple')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
                  activeView === 'simple'
                    ? 'bg-[#3478E5] text-white shadow-xs'
                    : 'text-[#8C8C8C] hover:text-[#111111]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Simple Explanation</span>
              </button>

              <button
                onClick={() => setActiveView('interview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
                  activeView === 'interview'
                    ? 'bg-[#3478E5] text-white shadow-xs'
                    : 'text-[#8C8C8C] hover:text-[#111111]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>For Interviews</span>
              </button>
            </div>
          </div>

          {/* Simple Explanation Mode */}
          {activeView === 'simple' ? (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-4 bg-[#FFFBEA] border border-[#F5C94A]/40 rounded-2xl flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[#F5C94A] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-black text-[#101B3D] uppercase">Mental Model Analogy</h5>
                  <p className="text-sm font-semibold text-[#101B3D]/90 mt-0.5">
                    "{currentTopic.simpleExplanation.analogy}"
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-base font-extrabold text-[#101B3D] mb-2">Overview</h4>
                <p className="text-sm text-[#111111]/80 font-medium leading-relaxed">
                  {currentTopic.simpleExplanation.summary}
                </p>
              </div>

              <div>
                <h4 className="text-base font-extrabold text-[#101B3D] mb-3">Key Concepts</h4>
                <div className="space-y-2">
                  {currentTopic.simpleExplanation.keyPoints.map((point, idx) => (
                    <div key={idx} className="p-3 bg-[#FFFDF9] border border-[#EAEAEA] rounded-xl text-xs sm:text-sm font-semibold text-[#111111] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#55C990] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Interview Mode */
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-[#EEF4FF] border border-[#3478E5]/20 rounded-2xl text-center">
                  <span className="text-[10px] font-black text-[#8C8C8C] uppercase">Access</span>
                  <p className="text-base font-black text-[#3478E5]">{currentTopic.interviewTips.timeComplexity.access}</p>
                </div>
                <div className="p-3 bg-[#EEF4FF] border border-[#3478E5]/20 rounded-2xl text-center">
                  <span className="text-[10px] font-black text-[#8C8C8C] uppercase">Search</span>
                  <p className="text-base font-black text-[#3478E5]">{currentTopic.interviewTips.timeComplexity.search}</p>
                </div>
                <div className="p-3 bg-[#EEF4FF] border border-[#3478E5]/20 rounded-2xl text-center">
                  <span className="text-[10px] font-black text-[#8C8C8C] uppercase">Insert</span>
                  <p className="text-base font-black text-[#3478E5]">{currentTopic.interviewTips.timeComplexity.insertion}</p>
                </div>
                <div className="p-3 bg-[#EEF4FF] border border-[#3478E5]/20 rounded-2xl text-center">
                  <span className="text-[10px] font-black text-[#8C8C8C] uppercase">Delete</span>
                  <p className="text-base font-black text-[#3478E5]">{currentTopic.interviewTips.timeComplexity.deletion}</p>
                </div>
              </div>

              <div>
                <h4 className="text-base font-extrabold text-[#101B3D] mb-2">Common Interview Patterns</h4>
                <div className="flex flex-wrap gap-2">
                  {currentTopic.interviewTips.commonPatterns.map((pat, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#FFFBEA] border border-[#F5C94A]/40 text-[#101B3D] rounded-full text-xs font-bold">
                      ⚡ {pat}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-base font-extrabold text-[#101B3D] mb-2">Pro Tips for Coding Rounds</h4>
                <ul className="space-y-2">
                  {currentTopic.interviewTips.proTips.map((tip, idx) => (
                    <li key={idx} className="p-3 bg-[#FFFDF9] border border-[#EAEAEA] rounded-xl text-xs font-semibold text-[#101B3D]">
                      🎯 {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#EAEAEA] flex justify-end">
            <button
              onClick={() => onSelectTopic(currentTopic)}
              className="px-6 py-2.5 bg-[#3478E5] hover:bg-[#2864C6] text-white rounded-2xl text-xs font-black transition flex items-center gap-2"
            >
              <span>Full Topic View</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

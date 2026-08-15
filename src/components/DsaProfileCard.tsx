import React from 'react';
import { UserProfile, UserProgress, DsaTopic } from '../types';
import { Sparkles, Zap, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface DsaProfileCardProps {
  user: UserProfile | null;
  userProgress: UserProgress;
  topics: DsaTopic[];
}

export const DsaProfileCard: React.FC<DsaProfileCardProps> = ({ user, userProgress, topics }) => {
  const avatarUrl = user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200';
  const name = user?.name || 'DSA Learner';
  const bgColor = user?.customAvatarBg || '#b6e3f4';
  
  // Calculate stats
  const completedTopics = userProgress.completedTopics.length;
  let funFact = "Just starting out!";
  if (userProgress.streakDays > 5) {
    funFact = `Has coded for ${userProgress.streakDays} days straight!`;
  } else if (completedTopics > 0) {
    funFact = `Has mastered ${completedTopics} topics.`;
  } else if (userProgress.xp > 1000) {
    funFact = "Has earned over 1000 XP.";
  }

  // Find strongest topic
  let strength = "Curiosity";
  if (completedTopics > 0) {
    const lastTopicId = userProgress.completedTopics[userProgress.completedTopics.length - 1];
    const topic = topics.find(t => t.id === lastTopicId);
    if (topic) {
      strength = topic.title;
    }
  }

  // Signature move
  const signatureMoves = ["Late night debugging", "One-line solutions", "Console.log() everywhere", "Reading the docs", "Refactoring"];
  const signatureMove = signatureMoves[name.length % signatureMoves.length];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-[90vw] sm:max-w-sm mx-auto w-full bg-white rounded-3xl sm:rounded-[2rem] p-2.5 sm:p-3 shadow-xl border-4 sm:border-[6px]"
      style={{ borderColor: bgColor }}
    >
      <div className="bg-[#FFFDF9] rounded-[1.25rem] sm:rounded-2xl p-4 sm:p-5 h-full relative overflow-hidden flex flex-col items-center border border-[#EAEAEA]">
        
        {/* Background glow / effect */}
        <div 
          className="absolute inset-0 opacity-10 blur-3xl"
          style={{ backgroundColor: bgColor }}
        />

        {/* Top Tag */}
        <div className="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#EAEAEA] text-[10px] font-black text-[#101B3D] tracking-widest mb-8 z-10 self-start shadow-xs">
          ALGORITHM HERO
        </div>

        {/* Character / Avatar */}
        <div className="relative z-10 mb-6 sm:mb-8 mt-2">
          <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl sm:rounded-3xl border-4 sm:border-[6px] border-white shadow-md overflow-hidden transform rotate-[-2deg] transition-transform hover:rotate-0" style={{ backgroundColor: bgColor }}>
            <img 
              src={avatarUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Sparkles around avatar */}
          <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-[#F5C94A] animate-pulse" />
          <Star className="absolute -bottom-3 -left-3 w-6 h-6 text-[#3478E5] animate-bounce" />
        </div>

        {/* Name Plate */}
        <div className="bg-[#101B3D] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-2xl shadow-lg z-10 -mt-10 sm:-mt-14 mb-6 sm:mb-8 border-4 border-white transform rotate-[3deg]">
          <h2 className="text-lg sm:text-xl font-black tracking-widest uppercase truncate max-w-[200px]">{name}</h2>
        </div>

        {/* Stats Container */}
        <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl border border-[#EAEAEA] p-5 space-y-4 z-10 shadow-xs">
          
          {/* Fun Fact */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#8C8C8C]">
              <Sparkles className="w-4 h-4 text-[#F5C94A]" />
              <span className="text-[10px] font-black uppercase tracking-widest">Fun Fact</span>
            </div>
            <p className="text-sm font-bold text-[#101B3D] leading-tight">
              {funFact}
            </p>
          </div>

          <div className="h-px w-full bg-[#EAEAEA]" />

          {/* Strength */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#8C8C8C]">
              <Zap className="w-4 h-4 text-[#55C990]" />
              <span className="text-[10px] font-black uppercase tracking-widest">Strength</span>
            </div>
            <div className="px-3 py-1 rounded-xl text-xs font-black shadow-xs border border-white" style={{ backgroundColor: `${bgColor}40`, color: '#101B3D' }}>
              {strength}
            </div>
          </div>

          <div className="h-px w-full bg-[#EAEAEA]" />

          {/* Signature Move */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#8C8C8C]">
              <Star className="w-4 h-4 text-[#F26B5B]" />
              <span className="text-[10px] font-black uppercase tracking-widest">Signature Move</span>
            </div>
            <div className="text-sm font-bold text-[#101B3D] text-right">
              {signatureMove}
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
};

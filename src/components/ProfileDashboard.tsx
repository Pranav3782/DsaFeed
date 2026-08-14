import React, { useState } from 'react';
import { UserProgress, DsaTopic, UserBadge, UserProfile } from '../types';
import { 
  Flame, Zap, Trophy, CheckCircle2, RotateCcw, Award, 
  User, Edit3, Share2, Github, Settings, LogOut, Check, Sparkles, Copy, Calendar
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { generateCardImage, downloadCardImage } from '../utils/cardGenerator';
import { toggleUISound } from '../utils/audio';
import { AvatarBuilderModal } from './AvatarBuilderModal';
import { AlgorithmicAgenda } from './AlgorithmicAgenda';
import { DsaProfileCard } from './DsaProfileCard';

interface ProfileDashboardProps {
  user: UserProfile | null;
  onUpdateUser: (updated: UserProfile) => void;
  userProgress: UserProgress;
  topics: DsaTopic[];
  badges: UserBadge[];
  onSelectTopic: (topic: DsaTopic) => void;
  onResetProgress: () => void;
  onSignOut: () => void;
}

const PRESET_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
];

const PRESET_BG_COLORS = [
  '#3478E5', '#55C990', '#F26B5B', '#F5C94A', '#8B5CF6', '#EC4899', '#101B3D'
];

export const ProfileDashboard: React.FC<ProfileDashboardProps> = ({
  user,
  onUpdateUser,
  userProgress,
  topics,
  badges,
  onSelectTopic,
  onResetProgress,
  onSignOut,
}) => {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bioInput, setBioInput] = useState(user?.bio || 'Building problem-solving skills block by block with DSAfeed.');
  const [nameInput, setNameInput] = useState(user?.name || 'DSA Learner');
  const [isMuted, setIsMuted] = useState(() => localStorage.getItem('dsafeed_muted') === 'true');
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedCard, setCopiedCard] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(user?.avatar || PRESET_AVATARS[0]);
  const [selectedBgColor, setSelectedBgColor] = useState(user?.customAvatarBg || '#b6e3f4');
  const [showAllBadges, setShowAllBadges] = useState(false);
  const [isAvatarBuilderOpen, setIsAvatarBuilderOpen] = useState(false);

  const completedTopicsCount = userProgress.completedTopics.length;
  const totalTopics = topics.length;
  const overallPercentage = Math.round((completedTopicsCount / totalTopics) * 100);

  // Generate simulated GitHub activity grid (past 16 weeks, 7 days per week)
  const generateActivityGrid = () => {
    const grid = [];
    const today = new Date();
    for (let i = 111; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      
      // Seed activity density: high for recent active days
      let count = 0;
      if (i === 0 || i === 1 || i === 3 || i === 5 || i === 8 || i === 12 || i === 14 || i === 19 || i === 25 || i === 32) {
        count = Math.floor(Math.random() * 4) + 1;
      } else if (i % 3 === 0) {
        count = (i % 7) % 3;
      }
      grid.push({ date: dateStr, count });
    }
    return grid;
  };

  const activityData = generateActivityGrid();

  const handleSaveProfile = () => {
    if (!user) return;
    onUpdateUser({
      ...user,
      name: nameInput,
      bio: bioInput,
      avatar: selectedAvatar,
      customAvatarBg: selectedBgColor
    });
    setIsEditingBio(false);
  };

  const handleCopyCard = () => {
    setCopiedCard(true);
    setTimeout(() => setCopiedCard(false), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Profile Header Banner */}
      <div className="bg-white  border border-[#EAEAEA]  rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          <div className="flex items-center gap-5">
            {/* Avatar with Custom Background */}
            <div className="relative group flex flex-col items-center">
              <div 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg border-4 border-white  transition-transform group-hover:scale-105 flex items-center justify-center overflow-hidden relative"
                style={{ backgroundColor: selectedBgColor }}
              >
                {selectedAvatar ? (
                  <img
                    src={selectedAvatar}
                    alt={user?.name || 'User Avatar'}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <User className="w-10 h-10 text-[#101B3D]/50" />
                )}
                
                {/* Overlay edit button */}
                <button 
                  onClick={() => setIsAvatarBuilderOpen(true)}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                >
                  <Edit3 className="w-6 h-6 text-white" />
                </button>
              </div>
              <button 
                onClick={() => setIsAvatarBuilderOpen(true)}
                className="mt-3 text-[10px] font-bold text-[#8C8C8C] hover:text-[#3478E5]  uppercase tracking-wider bg-[#FAFAFA]  border border-[#EAEAEA]  px-2 py-1 rounded-full transition-colors"
              >
                Edit Avatar
              </button>
            </div>

            {/* Name & Bio */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-black text-[#101B3D] ">
                  {user?.name || 'DSA Learner'}
                </h2>
                <span className="px-2.5 py-0.5 bg-[#EEF4FF] border border-[#3478E5]/30 text-[#3478E5] font-extrabold text-[11px] rounded-full">
                  Level {Math.floor(userProgress.xp / 100) + 1}
                </span>
              </div>
              <p className="text-xs text-[#8C8C8C]  font-bold">
                {user?.email || 'learner@dsafeed.com'}
              </p>
              <p className="text-sm text-[#111111]/80  font-medium max-w-lg mt-1">
                {user?.bio || 'Building problem-solving skills block by block with DSAfeed.'}
              </p>
            </div>
          </div>

          {/* Edit Profile & Share Card Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 self-stretch sm:self-auto">
            <button
              onClick={() => setIsEditingBio(!isEditingBio)}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#FFFDF9]  border border-[#EAEAEA]  hover:border-[#3478E5]  text-[#101B3D]  text-xs font-extrabold rounded-2xl transition flex items-center justify-center gap-2 shadow-xs"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Profile</span>
            </button>

            <button
              onClick={() => setShowShareModal(true)}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#3478E5] hover:bg-[#2864C6] text-white text-xs font-extrabold rounded-2xl shadow-md transition flex items-center justify-center gap-2 active:scale-98"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>DSAfeed Card</span>
            </button>

            <button
              onClick={() => {
                const newMuted = !isMuted;
                setIsMuted(newMuted);
                toggleUISound(newMuted);
              }}
              className={`flex-1 sm:flex-initial px-4 py-2.5 border text-xs font-extrabold rounded-2xl transition flex items-center justify-center gap-2 shadow-xs ${
                isMuted 
                  ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' 
                  : 'bg-[#FFFDF9] border-[#EAEAEA] text-[#101B3D] hover:border-[#3478E5]'
              }`}
            >
              <span className="w-3.5 h-3.5 font-black text-center">{isMuted ? '🔇' : '🔊'}</span>
              <span>{isMuted ? 'Sound Off' : 'Sound On'}</span>
            </button>
          </div>

        </div>

        {/* Profile Customization Drawer */}
        <AnimatePresence>
          {isEditingBio && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-[#EAEAEA] pt-5 mt-6 space-y-4"
            >
              <h3 className="text-sm font-extrabold text-[#101B3D] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#F5C94A]" />
                <span>Customize Profile & Bio</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-black uppercase text-[#8C8C8C] mb-1">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full px-3.5 py-2 bg-[#FFFDF9] border border-[#EAEAEA] rounded-xl text-xs font-bold text-[#101B3D] focus:outline-none focus:border-[#3478E5]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase text-[#8C8C8C] mb-1">
                    Short Bio
                  </label>
                  <input
                    type="text"
                    value={bioInput}
                    onChange={(e) => setBioInput(e.target.value)}
                    placeholder="e.g. Aiming for Top 1% in Data Structures"
                    className="w-full px-3.5 py-2 bg-[#FFFDF9] border border-[#EAEAEA] rounded-xl text-xs font-bold text-[#101B3D] focus:outline-none focus:border-[#3478E5]"
                  />
                </div>
              </div>

              {/* Avatar Builder Trigger inside Edit Profile */}
              <div>
                <button
                  onClick={() => setIsAvatarBuilderOpen(true)}
                  className="px-4 py-2 bg-[#EEF4FF]  text-[#3478E5]  border border-[#3478E5]/30 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 hover:bg-[#3478E5] hover:text-white"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Open Avatar Builder</span>
                </button>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setIsEditingBio(false)}
                  className="px-4 py-2 text-xs font-bold text-[#8C8C8C] hover:text-[#101B3D]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProfile}
                  className="px-5 py-2 bg-[#101B3D] text-white text-xs font-black rounded-xl shadow-xs"
                >
                  Save Profile Changes
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: DSA Profile Card */}
        <div className="lg:col-span-1">
          <DsaProfileCard user={user} userProgress={userProgress} topics={topics} />
        </div>

        {/* Right Column: Other stats (Activity Matrix, etc) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* GitHub-style Activity Matrix */}
      <div className="bg-white border border-[#EAEAEA] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 text-[#101B3D]" />
            <h3 className="text-lg font-black text-[#101B3D]">
              Daily Practice Contribution Matrix
            </h3>
          </div>
          <span className="text-xs text-[#8C8C8C] font-bold flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> Past 16 Weeks
          </span>
        </div>

        {/* Matrix Grid */}
        <div className="bg-[#FFFDF9] border border-[#EAEAEA] p-4 rounded-2xl overflow-x-auto">
          <div className="inline-grid grid-rows-7 grid-flow-col gap-1.5 min-w-[600px]">
            {activityData.map((day, idx) => {
              let bgClass = 'bg-[#EAEAEA]'; // level 0
              if (day.count === 1) bgClass = 'bg-[#B6E2CE]';
              if (day.count === 2) bgClass = 'bg-[#70C9A0]';
              if (day.count === 3) bgClass = 'bg-[#55C990]';
              if (day.count >= 4) bgClass = 'bg-[#2A9A65]';

              return (
                <div
                  key={idx}
                  title={`${day.date}: ${day.count} DSA sessions completed`}
                  className={`w-3.5 h-3.5 rounded-xs ${bgClass} transition-transform hover:scale-125 cursor-pointer`}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#8C8C8C] font-semibold mt-3 pt-2 border-t border-[#EAEAEA]">
            <span>Submissions in the last year: <strong className="text-[#101B3D]">48 streak points</strong></span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-3 h-3 rounded-xs bg-[#EAEAEA]" />
              <div className="w-3 h-3 rounded-xs bg-[#B6E2CE]" />
              <div className="w-3 h-3 rounded-xs bg-[#55C990]" />
              <div className="w-3 h-3 rounded-xs bg-[#2A9A65]" />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      {/* Algorithmic Agenda */}
      <AlgorithmicAgenda />

      {/* Daily Tasks Section */}
      <div className="bg-white border border-[#EAEAEA] rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#F5C94A] fill-[#F5C94A]" />
            <h3 className="text-xl font-black text-[#101B3D]">Daily Tasks</h3>
          </div>
          <span className="text-xs font-bold bg-[#FFFBEA] text-[#F5C94A] px-3 py-1 rounded-full border border-[#F5C94A]/40">
            {userProgress.monthlyPoints} / 30 Monthly Points
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {userProgress.dailyTasks?.map((task) => {
            const isDone = task.completed;
            const progressPercent = Math.min(100, Math.round((task.progress / task.target) * 100));

            return (
              <div
                key={task.id}
                className={`p-4 rounded-2xl border transition flex flex-col justify-between h-32 ${
                  isDone
                    ? 'bg-[#EFFCF6] border-[#55C990] shadow-xs'
                    : 'bg-[#FFFDF9] border-[#EAEAEA]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <p className={`text-sm font-extrabold ${isDone ? 'text-[#101B3D]' : 'text-[#101B3D]'}`}>
                    {task.description}
                  </p>
                  {isDone && <CheckCircle2 className="w-5 h-5 text-[#55C990] shrink-0" />}
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex justify-between text-xs font-bold">
                    <span className={isDone ? 'text-[#55C990]' : 'text-[#8C8C8C]'}>
                      {task.progress >= task.target ? task.target : task.progress} / {task.target}
                    </span>
                    <span className={isDone ? 'text-[#55C990]' : 'text-[#8C8C8C]'}>
                      {progressPercent}%
                    </span>
                  </div>
                  <div className="w-full bg-[#EAEAEA] h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${progressPercent}%`,
                        backgroundColor: isDone ? '#55C990' : '#3478E5'
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hero Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Streak Card */}
        <div className="bg-white border border-[#EAEAEA] rounded-3xl p-6 shadow-xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#FFF1F0] flex items-center justify-center text-[#F26B5B]">
            <Flame className="w-7 h-7 fill-[#F26B5B]" />
          </div>
          <div>
            <p className="text-xs font-black text-[#8C8C8C] uppercase">Daily Streak</p>
            <p className="text-2xl font-black text-[#101B3D]">{userProgress.streakDays} Days Active</p>
            <p className="text-xs text-[#55C990] font-semibold">Consistency Champion!</p>
          </div>
        </div>

        {/* XP Card */}
        <div className="bg-white border border-[#EAEAEA] rounded-3xl p-6 shadow-xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#FFFBEA] flex items-center justify-center text-[#F5C94A]">
            <Zap className="w-7 h-7 fill-[#F5C94A]" />
          </div>
          <div>
            <p className="text-xs font-black text-[#8C8C8C] uppercase">Total XP</p>
            <p className="text-2xl font-black text-[#101B3D]">{userProgress.xp} XP</p>
            <p className="text-xs text-[#3478E5] font-semibold">Level {Math.floor(userProgress.xp / 100) + 1} Learner</p>
          </div>
        </div>

        {/* Topics Completed Card */}
        <div className="bg-white border border-[#EAEAEA] rounded-3xl p-6 shadow-xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#EFFCF6] flex items-center justify-center text-[#55C990]">
            <CheckCircle2 className="w-7 h-7 fill-[#55C990] text-white" />
          </div>
          <div>
            <p className="text-xs font-black text-[#8C8C8C] uppercase">Topics Mastered</p>
            <p className="text-2xl font-black text-[#101B3D]">{completedTopicsCount} / {totalTopics}</p>
            <p className="text-xs text-[#8C8C8C] font-semibold">{overallPercentage}% Curriculum Completed</p>
          </div>
        </div>

      </div>

      {/* Badges Section */}
      <div className="bg-white border border-[#EAEAEA] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#F5C94A]" />
          <h3 className="text-xl font-black text-[#101B3D]">Unlocked Badges</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(showAllBadges ? badges : badges.slice(0, 5)).map((b) => {
            const isUnlocked = userProgress.xp >= 50; // In a real app, logic would map to specific conditions
            const IconComp = (LucideIcons as any)[b.icon] || Award;
            
            return (
              <div
                key={b.id}
                className={`p-4 rounded-2xl border transition flex items-center gap-3.5 ${
                  isUnlocked
                    ? 'bg-[#FFFDF9] border-[#EAEAEA] shadow-xs'
                    : 'bg-[#F7F5F0]/50 border-dashed border-[#EAEAEA] opacity-60'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-xl ${
                  isUnlocked ? 'bg-[#FFFBEA] text-[#101B3D] border border-[#F5C94A]/40' : 'bg-gray-100 text-gray-400'
                }`}>
                  <IconComp className={`w-6 h-6 ${isUnlocked ? 'text-[#F5C94A]' : 'text-gray-400'}`} />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#101B3D]">{b.title}</h4>
                  <p className="text-xs text-[#8C8C8C] font-medium leading-snug">{b.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {badges.length > 5 && (
          <button 
            onClick={() => setShowAllBadges(!showAllBadges)}
            className="text-xs font-black text-[#3478E5] hover:text-[#2864C6] w-full text-center mt-2 p-2"
          >
            {showAllBadges ? 'Show Less' : `Show ${badges.length - 5} More Badges`}
          </button>
        )}
      </div>

      {/* Topics Progress Breakdown */}
      <div className="bg-white border border-[#EAEAEA] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <h3 className="text-xl font-black text-[#101B3D]">Topic Progress Breakdown</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topics.map((t) => {
            const isDone = userProgress.completedTopics.includes(t.id);
            const progressVal = userProgress.topicProgress[t.id] || (isDone ? 100 : 0);

            return (
              <div
                key={t.id}
                onClick={() => onSelectTopic(t)}
                className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#EAEAEA] hover:border-[#3478E5] transition cursor-pointer flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-extrabold text-[#101B3D]">{t.name}</span>
                  <span className={`text-xs font-black ${isDone ? 'text-[#55C990]' : 'text-[#8C8C8C]'}`}>
                    {progressVal}%
                  </span>
                </div>

                <div className="w-full bg-[#EAEAEA] h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${progressVal}%`,
                      backgroundColor: isDone ? '#55C990' : t.accentColor
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      </div>

      {/* Settings, Reset Data & Logout Bar */}
      <div className="bg-white border border-[#EAEAEA] rounded-3xl p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[#EEF4FF] text-[#3478E5] rounded-2xl">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-[#101B3D]">Account & App Settings</h4>
            <p className="text-xs text-[#8C8C8C] font-medium">Manage learning session state or clear local data.</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            onClick={onResetProgress}
            className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-extrabold text-[#8C8C8C] hover:text-[#F26B5B] bg-[#FFFDF9] border border-[#EAEAEA] rounded-2xl transition flex items-center justify-center gap-1.5 active:scale-98"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Progress
          </button>

          <button
            onClick={onSignOut}
            className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-extrabold text-[#F26B5B] hover:bg-[#FFF1F0] border border-[#F26B5B]/30 rounded-2xl transition flex items-center justify-center gap-1.5 active:scale-98"
          >
            <LogOut className="w-3.5 h-3.5" /> Log Out
          </button>
        </div>
      </div>

      {/* SHAREABLE DSAFEED CARD MODAL */}
      <AnimatePresence>
        {showShareModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101B3D]/70 backdrop-blur-md animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="relative w-full max-w-lg bg-[#101B3D] text-white border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Background Glow Accents */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#3478E5]/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#55C990]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 bg-[#FFFDF9] text-[#101B3D] rounded-xl font-black text-xs tracking-tight">
                      DSAfeed
                    </div>
                    <span className="text-xs text-slate-300 font-semibold">Official Learner Card</span>
                  </div>
                  <button
                    onClick={() => setShowShareModal(false)}
                    className="p-1.5 rounded-full text-slate-400 hover:text-white bg-white/10"
                  >
                    ✕
                  </button>
                </div>

                {/* Card Content Preview */}
                <div className="p-6 bg-gradient-to-br from-[#131F45] to-[#0D1530] border border-white/15 rounded-2xl space-y-5 shadow-xl">
                  
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-2xl p-0.5 flex items-center justify-center shadow-md overflow-hidden"
                      style={{ backgroundColor: selectedBgColor }}
                    >
                      <img src={selectedAvatar} alt="User" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white">{user?.name || 'DSA Learner'}</h3>
                      <p className="text-xs text-[#55C990] font-extrabold">{user?.bio || 'Problem solver in training'}</p>
                      <p className="text-[11px] text-slate-400 font-medium">dsafeed.com/learner/{user?.name?.toLowerCase().replace(/\s+/g, '') || 'alex'}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 p-3 bg-white/5 border border-white/10 rounded-xl text-center">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black">Streak</p>
                      <p className="text-lg font-black text-[#F26B5B] flex items-center justify-center gap-1">
                        <Flame className="w-4 h-4 fill-[#F26B5B]" /> {userProgress.streakDays}d
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black">Earned XP</p>
                      <p className="text-lg font-black text-[#F5C94A] flex items-center justify-center gap-1">
                        <Zap className="w-4 h-4 fill-[#F5C94A]" /> {userProgress.xp}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black">Topics</p>
                      <p className="text-lg font-black text-[#55C990]">
                        {completedTopicsCount}/10
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300 font-medium pt-1">
                    <span>Verified Learner Badge ⚡</span>
                    <span className="text-[#3478E5] font-extrabold">2026 DSAfeed Certified</span>
                  </div>

                </div>

                {/* Modal Action Footer */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <p className="text-xs text-slate-300 font-medium">
                    Share your card on Twitter/LinkedIn to showcase your streak!
                  </p>

                  <button
                    onClick={handleCopyCard}
                    className="px-5 py-3 bg-[#3478E5] hover:bg-[#2864C6] text-white text-xs font-black rounded-xl transition flex items-center gap-2 shrink-0 active:scale-95"
                  >
                    {copiedCard ? (
                      <>
                        <Check className="w-4 h-4 text-[#55C990]" />
                        <span>Copied Link!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Card Link</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AvatarBuilderModal
        isOpen={isAvatarBuilderOpen}
        onClose={() => setIsAvatarBuilderOpen(false)}
        onSave={(url, bg) => {
          setSelectedAvatar(url);
          setSelectedBgColor(bg);
          setIsAvatarBuilderOpen(false);
          // Auto-save the profile when avatar is updated
          if (user) {
            onUpdateUser({
              ...user,
              avatar: url,
              customAvatarBg: bg
            });
          }
        }}
        initialAvatarUrl={selectedAvatar}
        initialBgColor={selectedBgColor}
      />

    </div>
  );
};

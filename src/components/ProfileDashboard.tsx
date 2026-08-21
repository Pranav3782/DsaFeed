import React, { useState } from 'react';
import { UserProgress, DsaTopic, UserBadge, UserProfile } from '../types';
import { 
  Flame, Zap, Trophy, CheckCircle2, RotateCcw, Award, 
  User, Edit3, Share2, Github, Settings, LogOut, Check, Sparkles, Copy, Calendar, X, Trash2
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSessionState } from '../hooks/useSessionState';
import { toggleUISound } from '../utils/audio';
import { AvatarBuilderModal } from './AvatarBuilderModal';
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
  const [soundEnabled, setSoundEnabled] = useSessionState('soundEnabled', true);
  const [selectedAvatar, setSelectedAvatar] = useState(user?.avatar || PRESET_AVATARS[0]);
  const [selectedBgColor, setSelectedBgColor] = useState(user?.customAvatarBg || '#b6e3f4');
  const [showAllBadges, setShowAllBadges] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState<UserBadge | null>(null);
  const [isAvatarBuilderOpen, setIsAvatarBuilderOpen] = useSessionState('isAvatarBuilderOpen', false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const completedTopicsCount = userProgress.completedTopics.length;
  const totalTopics = topics.length;

  const unlockedBadgeIds = userProgress.unlockedBadges || [];
  const unlockedBadgesList = badges.filter(b => unlockedBadgeIds.includes(b.id));
  const lockedBadgesList = badges.filter(b => !unlockedBadgeIds.includes(b.id));
  const combinedBadges = [...unlockedBadgesList, ...lockedBadgesList];
  const overallPercentage = Math.round((completedTopicsCount / totalTopics) * 100);

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

  return (
    <>
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

            <button
              onClick={() => setIsSettingsOpen(true)}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#FFFDF9]  border border-[#EAEAEA]  hover:border-[#3478E5]  text-[#101B3D]  text-xs font-extrabold rounded-2xl transition flex items-center justify-center gap-2 shadow-xs"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Settings</span>
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

      <div className="max-w-4xl mx-auto w-full space-y-8">
          


      {/* Learning Agenda */}
      <div className="bg-white border border-[#EAEAEA] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <h3 className="text-xl font-black text-[#101B3D]">Learning Agenda</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topics.filter(t => !userProgress.completedTopics.includes(t.id)).length === 0 ? (
            <div className="col-span-full text-center p-6 text-[#8C8C8C] font-bold">
              All topics completed! Amazing job!
            </div>
          ) : (
            topics.filter(t => !userProgress.completedTopics.includes(t.id)).map(t => (
              <div 
                key={t.id} 
                onClick={() => onSelectTopic(t)} 
                className="p-4 rounded-2xl border border-[#EAEAEA] bg-[#F8F9FA] cursor-pointer hover:border-[#3478E5] transition"
              >
                <h4 className="font-bold text-[#101B3D]">{t.name}</h4>
                <p className="text-sm text-[#8C8C8C] mt-1 line-clamp-2">{t.description}</p>
              </div>
            ))
          )}
        </div>
      </div>

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
        <div className={`bg-white border border-[#EAEAEA] rounded-3xl p-6 shadow-xs flex items-center gap-4 transition-all duration-300 ${userProgress.streakDays >= 7 ? 'border-[#F26B5B]/30 shadow-[#F26B5B]/10' : ''}`}>
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${userProgress.streakDays >= 7 ? 'bg-[#FFF1F0] text-[#F26B5B]' : userProgress.streakDays >= 3 ? 'bg-[#FFFBEA] text-[#F5C94A]' : 'bg-[#F8F9FA] text-[#8C8C8C]'}`}>
            <Flame className={`w-7 h-7 ${userProgress.streakDays >= 3 ? 'fill-current' : ''}`} />
          </div>
          <div>
            <p className="text-xs font-black text-[#8C8C8C] uppercase">Daily Streak</p>
            <p className="text-2xl font-black text-[#101B3D]">{userProgress.streakDays} Days Active</p>
            <p className={`text-xs font-semibold ${userProgress.streakDays >= 7 ? 'text-[#F26B5B]' : userProgress.streakDays >= 3 ? 'text-[#F5C94A]' : 'text-[#8C8C8C]'}`}>
              {userProgress.streakDays >= 7 ? "On Fire! 🔥" : userProgress.streakDays >= 3 ? "Consistency Champion!" : "Keep it up!"}
            </p>
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
            <p className="text-xs text-[#F5C94A] font-semibold">Level {Math.floor(userProgress.xp / 100) + 1} Learner</p>
          </div>
        </div>

        {/* Topics Completed Card */}
        <div className="bg-white border border-[#EAEAEA] rounded-3xl p-6 shadow-xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#3478E5]">
            <LucideIcons.Activity className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-black text-[#8C8C8C] uppercase">Topics Mastered</p>
            <p className="text-2xl font-black text-[#101B3D]">{completedTopicsCount} / {totalTopics}</p>
            <p className="text-xs text-[#3478E5] font-semibold">{overallPercentage}% Curriculum Completed</p>
          </div>
        </div>

      </div>

      {/* Badges Section */}
      <div className="bg-white border border-[#EAEAEA] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#F5C94A]" />
          <h3 className="text-xl font-black text-[#101B3D]">Your Badges</h3>
        </div>

        {!showAllBadges ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {combinedBadges.slice(0, 3).map((b) => {
              const isUnlocked = unlockedBadgeIds.includes(b.id);
              const IconComp = (LucideIcons as any)[b.icon] || Award;
              return (
                <div
                  key={b.id}
                  onClick={() => setSelectedBadge(b)}
                  className={`p-4 rounded-2xl border transition flex items-center gap-3.5 cursor-pointer hover:-translate-y-1 ${
                    isUnlocked
                      ? 'bg-[#FFFDF9] border-[#EAEAEA] shadow-xs hover:border-[#F5C94A]'
                      : 'bg-[#F7F5F0]/50 border-dashed border-[#EAEAEA] opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center font-extrabold text-xl ${
                    isUnlocked ? 'bg-[#FFFBEA] text-[#101B3D] border border-[#F5C94A]/40' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <IconComp className={`w-6 h-6 ${isUnlocked ? 'text-[#F5C94A]' : 'text-gray-400'}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#101B3D]">{b.title}</h4>
                    <p className="text-xs text-[#8C8C8C] font-medium leading-snug line-clamp-1">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Unlocked Section */}
            {unlockedBadgesList.length > 0 && (
              <div>
                <h4 className="text-sm font-black text-[#101B3D] mb-3 uppercase tracking-wider">Unlocked</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {unlockedBadgesList.map((b) => {
                    const IconComp = (LucideIcons as any)[b.icon] || Award;
                    return (
                      <div
                        key={b.id}
                        onClick={() => setSelectedBadge(b)}
                        className="p-4 rounded-2xl border bg-[#FFFDF9] border-[#EAEAEA] shadow-xs hover:border-[#F5C94A] transition flex items-center gap-3.5 cursor-pointer hover:-translate-y-1"
                      >
                        <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center font-extrabold text-xl bg-[#FFFBEA] text-[#101B3D] border border-[#F5C94A]/40">
                          <IconComp className="w-6 h-6 text-[#F5C94A]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-extrabold text-[#101B3D]">{b.title}</h4>
                          <p className="text-xs text-[#8C8C8C] font-medium leading-snug line-clamp-1">{b.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* Locked Section */}
            {lockedBadgesList.length > 0 && (
              <div>
                <h4 className="text-sm font-black text-[#8C8C8C] mb-3 uppercase tracking-wider">Locked</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {lockedBadgesList.map((b) => {
                    const IconComp = (LucideIcons as any)[b.icon] || Award;
                    return (
                      <div
                        key={b.id}
                        onClick={() => setSelectedBadge(b)}
                        className="p-4 rounded-2xl border bg-[#F7F5F0]/50 border-dashed border-[#EAEAEA] opacity-60 hover:opacity-100 transition flex items-center gap-3.5 cursor-pointer hover:-translate-y-1"
                      >
                        <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center font-extrabold text-xl bg-gray-100 text-gray-400">
                          <IconComp className="w-6 h-6 text-gray-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-extrabold text-[#101B3D]">{b.title}</h4>
                          <p className="text-xs text-[#8C8C8C] font-medium leading-snug line-clamp-1">{b.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
        
        {badges.length > 3 && (
          <button 
            onClick={() => setShowAllBadges(!showAllBadges)}
            className="text-xs font-black text-[#3478E5] hover:text-[#2864C6] w-full text-center mt-2 p-2"
          >
            {showAllBadges ? 'Show Less' : `Show ${badges.length - 3} More Badges`}
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

      {/* Modals */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-xl border border-[#EAEAEA]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-[#101B3D]">Account Settings</h3>
              <button onClick={() => setIsSettingsOpen(false)} className="text-[#8C8C8C] hover:text-[#101B3D]">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-2xl border border-[#EAEAEA] bg-[#F8F9FA]">
                <div>
                  <h4 className="font-bold text-[#101B3D]">Theme</h4>
                  <p className="text-xs text-[#8C8C8C]">Dark mode is disabled for now</p>
                </div>
                <div className="w-10 h-6 bg-[#EAEAEA] rounded-full flex items-center p-1 cursor-not-allowed opacity-50">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 rounded-2xl border border-[#EAEAEA] bg-[#F8F9FA]">
                <div>
                  <h4 className="font-bold text-[#101B3D]">Notifications</h4>
                  <p className="text-xs text-[#8C8C8C]">Manage app alerts</p>
                </div>
                <button className="text-sm font-bold text-[#3478E5]">Edit</button>
              </div>

              <div className="flex justify-between items-center p-4 rounded-2xl border border-[#EAEAEA] bg-[#F8F9FA]">
                <div>
                  <h4 className="font-bold text-[#101B3D]">Privacy</h4>
                  <p className="text-xs text-[#8C8C8C]">Profile visibility</p>
                </div>
                <button className="text-sm font-bold text-[#3478E5]">Edit</button>
              </div>

              <button 
                onClick={onSignOut}
                className="w-full mt-4 p-4 rounded-2xl border border-red-200 bg-red-50 text-red-600 font-bold hover:bg-red-100 transition text-left flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>

              <button 
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete your account? This cannot be undone.')) {
                    onResetProgress();
                    onSignOut();
                  }
                }}
                className="w-full p-4 rounded-2xl text-[#8C8C8C] font-bold hover:text-red-600 hover:bg-red-50 transition text-left flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" /> Delete Account
              </button>
            </div>
          </div>
        </div>
      )}

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
                <div className="flex justify-center items-center py-4">
                  <DsaProfileCard user={user} userProgress={userProgress} topics={topics} />
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

      {/* Badge Detail Modal */}
      <AnimatePresence>
        {selectedBadge && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-[2rem] shadow-2xl max-w-sm w-full p-6 text-center relative border border-[#EAEAEA]"
            >
              <button 
                onClick={() => setSelectedBadge(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mx-auto w-20 h-20 bg-[#FFFBEA] border-2 border-[#F5C94A]/40 rounded-3xl flex items-center justify-center mb-4">
                {(() => {
                  const IconComp = (LucideIcons as any)[selectedBadge.icon] || Award;
                  return <IconComp className="w-10 h-10 text-[#F5C94A]" />;
                })()}
              </div>
              
              <h3 className="text-2xl font-black text-[#101B3D] mb-1">{selectedBadge.title}</h3>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full mb-4">
                <span className={`w-2 h-2 rounded-full ${
                  selectedBadge.difficulty === 'Simple' ? 'bg-[#55C990]' : 
                  selectedBadge.difficulty === 'Medium' ? 'bg-[#3478E5]' : 'bg-[#F26B5B]'
                }`}></span>
                <span className="text-xs font-bold text-[#8C8C8C]">{selectedBadge.difficulty} Level</span>
              </div>

              <div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl p-4 text-left">
                <p className="text-sm text-[#101B3D] font-bold mb-1">What is this?</p>
                <p className="text-sm text-[#111111]/70 font-medium mb-3">
                  {selectedBadge.description}
                </p>
                
                <p className="text-sm text-[#101B3D] font-bold mb-1">How to achieve it:</p>
                <p className="text-sm text-[#3478E5] font-semibold leading-relaxed">
                  {selectedBadge.howToAchieve}
                </p>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setSelectedBadge(null)}
                  className="w-full py-3 bg-[#101B3D] hover:bg-[#1a2b5e] text-white rounded-xl font-bold transition"
                >
                  Got it!
                </button>
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

    </>
  );
};

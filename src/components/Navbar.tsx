import React, { useState } from 'react';
import logoImage from '../assets/images/dsafeed_logo_1786289035045.jpg';
import { Flame, Zap, Menu, X, BookOpen, Code2, HelpCircle, User, LogOut, LogIn, Lock, Trophy, Sparkles } from 'lucide-react';
import { UserProgress, UserProfile, NavTab } from '../types';
import { DsaFeedLogo } from './DsaFeedLogo';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  userProgress: UserProgress;
  user?: UserProfile | null;
  onOpenAuth?: () => void;
  onSignOut?: () => void;
  onOpenStreakModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  userProgress,
  user,
  onOpenAuth,
  onSignOut,
  onOpenStreakModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLeaderboardToast, setShowLeaderboardToast] = useState(false);

  const navItems = [
    { id: 'home' as const, label: 'Home', icon: BookOpen },
    { id: 'practice' as const, label: 'Practice', icon: Code2 },
    { id: 'quiz' as const, label: 'Quizzes', icon: HelpCircle },
    { id: 'concepts' as const, label: 'Concepts', icon: Sparkles },
    { id: 'profile' as const, label: 'Profile', icon: User },
    { id: 'leaderboard' as const, label: 'Leaderboard', icon: Trophy, isLocked: true },
  ];

  const handleNavClick = (item: typeof navItems[number]) => {
    if (item.isLocked) {
      setShowLeaderboardToast(true);
      setTimeout(() => setShowLeaderboardToast(false), 3000);
      return;
    }
    setActiveTab(item.id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/90 backdrop-blur-md border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#3478E5] rounded-xl p-1 transition shrink-0"
          >
            <DsaFeedLogo className="h-7 sm:h-8 lg:h-9" textColor="#101B3D" accentColor="#3478E5" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-white px-2 lg:px-3 py-1.5 rounded-full border border-[#EAEAEA] shadow-xs shrink-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`relative flex items-center gap-1.5 px-2.5 lg:px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#101B3D] text-white shadow-xs'
                      : 'text-[#111111]/70 hover:text-[#111111] hover:bg-[#F5F5F0]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 lg:w-4 lg:h-4 ${isActive ? 'text-[#F5C94A]' : 'text-[#111111]/60'}`} />
                  <span>{item.label}</span>
                  {item.isLocked && (
                    <span className="flex items-center gap-0.5 ml-0.5 text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-600 px-1.5 py-0.5 rounded-full border border-amber-500/30">
                      <Lock className="w-2.5 h-2.5" />
                      <span className="hidden lg:inline">Locked</span>
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Status Pill, Streak, XP & Auth */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2.5 shrink-0">
            
            {/* Streak & XP Pills - ONLY SHOWN WHEN USER IS LOGGED IN */}
            {user?.isLoggedIn && (
              <>
                <button 
                  onClick={onOpenStreakModal}
                  title="Daily Learning Streak - Click to view calendar"
                  className="flex items-center gap-1 lg:gap-1.5 px-2.5 lg:px-3 py-1.5 bg-[#FFF1F0] hover:bg-[#FFE4E1] text-[#F26B5B] rounded-full text-xs sm:text-sm font-extrabold border border-[#F26B5B]/20 whitespace-nowrap transition active:scale-95 cursor-pointer"
                >
                  <Flame className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-[#F26B5B] animate-pulse shrink-0" />
                  <span>{userProgress.streakDays}d<span className="hidden lg:inline"> Streak</span></span>
                </button>

                <div 
                  title="Total Earned XP"
                  className="flex items-center gap-1 lg:gap-1.5 px-2.5 lg:px-3 py-1.5 bg-[#FFFBEA] text-[#101B3D] rounded-full text-xs sm:text-sm font-extrabold border border-[#F5C94A]/40 whitespace-nowrap"
                >
                  <Zap className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#F5C94A] fill-[#F5C94A] shrink-0" />
                  <span>{userProgress.xp}<span className="hidden lg:inline"> XP</span></span>
                </div>
              </>
            )}

            {/* User Profile / Auth State */}
            {user?.isLoggedIn ? (
              <div className="flex items-center gap-1 lg:gap-2 pl-1.5 lg:pl-2 border-l border-[#EAEAEA]">
                <button
                  onClick={() => setActiveTab('profile')}
                  className="flex items-center gap-1.5 lg:gap-2 bg-white border border-[#EAEAEA] p-1 lg:p-1.5 pr-2.5 lg:pr-3 rounded-full shadow-xs hover:border-[#3478E5] transition"
                >
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-6 h-6 lg:w-7 lg:h-7 rounded-full object-cover shrink-0" />
                  ) : (
                    <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-[#3478E5] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {user.name.charAt(0)}
                    </div>
                  )}
                  <span className="text-xs font-extrabold text-[#101B3D] max-w-[60px] lg:max-w-[100px] truncate">{user.name}</span>
                </button>
                <button
                  onClick={onSignOut}
                  title="Sign Out"
                  className="p-1.5 lg:p-2 text-[#8C8C8C] hover:text-[#F26B5B] hover:bg-[#FFF1F0] rounded-full transition"
                >
                  <LogOut className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-3.5 lg:px-4 py-2 bg-[#3478E5] hover:bg-[#2864C6] text-white rounded-full text-xs font-extrabold shadow-xs transition flex items-center gap-1.5 active:scale-98 whitespace-nowrap"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Log In</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            
            {/* Mobile streak pill - ONLY WHEN LOGGED IN */}
            {user?.isLoggedIn && (
              <button 
                onClick={onOpenStreakModal}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FFF1F0] hover:bg-[#FFE4E1] text-[#F26B5B] rounded-full text-xs font-bold border border-[#F26B5B]/20 transition active:scale-95"
              >
                <Flame className="w-3 h-3 fill-[#F26B5B] animate-pulse" />
                <span>{userProgress.streakDays}</span>
              </button>
            )}

            {!user?.isLoggedIn && (
              <button
                onClick={onOpenAuth}
                className="px-3 py-1.5 bg-[#3478E5] text-white rounded-full text-xs font-bold"
              >
                Log In
              </button>
            )}
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-white border border-[#EAEAEA] text-[#101B3D] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Locked Toast Notification */}
      {showLeaderboardToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#101B3D] text-white px-5 py-3 rounded-2xl shadow-xl border border-amber-400/40 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="p-1.5 bg-amber-400/20 text-amber-300 rounded-xl">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-amber-300">Leaderboard Locked 🔒</p>
            <p className="text-[11px] text-slate-300">Complete 3 quizzes and reach 200 XP to unlock global rankings!</p>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EAEAEA] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition ${
                  isActive
                    ? 'bg-[#101B3D] text-white'
                    : 'text-[#111111] hover:bg-[#FFFDF9]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#F5C94A]' : 'text-[#8C8C8C]'}`} />
                  <span>{item.label}</span>
                </div>
                {item.isLocked ? (
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">
                    <Lock className="w-3 h-3" /> Locked
                  </span>
                ) : isActive ? (
                  <div className="w-2 h-2 rounded-full bg-[#55C990]" />
                ) : null}
              </button>
            );
          })}

          {user?.isLoggedIn && (
            <div className="pt-3 border-t border-[#EAEAEA] flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#F5C94A] fill-[#F5C94A]" />
                <span className="text-sm font-bold text-[#101B3D]">{userProgress.xp} XP Accumulated</span>
              </div>

              <button
                onClick={() => {
                  if (onSignOut) onSignOut();
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-bold text-[#F26B5B] hover:underline flex items-center gap-1"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

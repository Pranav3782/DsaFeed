import React, { useState } from 'react';
import logoImage from '../assets/images/dsafeed_logo_1786289035045.jpg';
import { Flame, Zap, Menu, X, BookOpen, Code2, HelpCircle, User, LogOut, LogIn, Sparkles, ShieldAlert, MessageSquareHeart, CreditCard, Layers, Bell } from 'lucide-react';
import { UserProgress, UserProfile, NavTab, AppNotification } from '../types';
import { DsaFeedLogo } from './DsaFeedLogo';
import { NotificationsPanel } from './NotificationsPanel';
import { ComingSoonPopup } from './ComingSoonPopup';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  userProgress: UserProgress;
  user?: UserProfile | null;
  onOpenAuth?: () => void;
  onSignOut?: () => void;
  onOpenStreakModal?: () => void;
  notifications?: AppNotification[];
  onMarkAsRead?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  userProgress,
  user,
  onOpenAuth,
  onSignOut,
  onOpenStreakModal,
  notifications = [],
  onMarkAsRead = () => {}
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [comingSoonPopup, setComingSoonPopup] = useState({ isOpen: false, title: '', message: '' });

  const navItems = [
    { id: 'home' as const, label: 'Home', icon: BookOpen },
    { id: 'quiz' as const, label: 'Quizzes', icon: HelpCircle },
    { id: 'concepts' as const, label: 'Concepts', icon: Sparkles },

    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  const handleNavClick = (item: any) => {
    setActiveTab(item.id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFDF9]/90  backdrop-blur-md border-b border-[#EAEAEA] ">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#3478E5] rounded-xl p-1 transition shrink-0"
          >
            <DsaFeedLogo className="h-4 sm:h-5 lg:h-6 w-auto object-contain" textColor="#101B3D" accentColor="#3478E5" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-white px-2 py-1.5 rounded-full border border-[#EAEAEA] shadow-xs shrink-0 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs lg:text-sm font-bold transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#101B3D] text-white shadow-xs'
                      : 'text-[#111111]/70 hover:text-[#111111] hover:bg-[#F5F5F0]'
                  }`}
                  title={item.label}
                >
                  <Icon className={`w-3.5 h-3.5 lg:w-4 lg:h-4 ${isActive ? 'text-[#F5C94A]' : 'text-[#111111]/60'}`} />
                  <span className={`${isActive ? 'block' : 'hidden xl:block'}`}>{item.label}</span>
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
                  className="group relative flex items-center gap-1 lg:gap-1.5 px-2.5 lg:px-3 py-1.5 bg-[#FFF1F0] hover:bg-[#FFE4E1] text-[#F26B5B] rounded-full text-xs sm:text-sm font-extrabold border border-[#F26B5B]/20 transition active:scale-95 cursor-pointer"
                >
                  <Flame className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-[#F26B5B] animate-pulse shrink-0" />
                  <span>{userProgress.streakDays}</span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2 py-1 bg-[#101B3D] text-white text-[10px] rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 shadow-md">
                    {userProgress.streakDays} Day Streak
                  </div>
                </button>

                <div 
                  className="group relative flex items-center gap-1 lg:gap-1.5 px-2.5 lg:px-3 py-1.5 bg-[#FFFBEA] text-[#101B3D] rounded-full text-xs sm:text-sm font-extrabold border border-[#F5C94A]/40"
                >
                  <Zap className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#F5C94A] fill-[#F5C94A] shrink-0" />
                  <span>{userProgress.xp}</span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2 py-1 bg-[#101B3D] text-white text-[10px] rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 shadow-md">
                    {userProgress.xp} Total XP
                  </div>
                </div>
              </>
            )}

            {/* Feedback Button - SHOWN EVERYWHERE EXCEPT HOME */}
            {activeTab !== 'home' && (
              <button
                onClick={() => setActiveTab('feedback')}
                title="Give Feedback or Suggestions"
                className="p-1.5 lg:p-2 text-[#8C8C8C] hover:text-[#3478E5] hover:bg-[#EEF4FF]  rounded-full transition ml-1"
              >
                <MessageSquareHeart className="w-4 h-4 lg:w-4.5 lg:h-4.5" />
              </button>
            )}

            {/* Notifications Bell */}
            {user?.isLoggedIn && (
              <div className="relative ml-1">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-1.5 lg:p-2 text-[#8C8C8C] hover:text-[#3478E5] hover:bg-[#EEF4FF] rounded-full transition relative"
                >
                  <Bell className="w-4 h-4 lg:w-4.5 lg:h-4.5" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#F26B5B] rounded-full border-2 border-white"></span>
                  )}
                </button>
                <NotificationsPanel
                  isOpen={notificationsOpen}
                  onClose={() => setNotificationsOpen(false)}
                  notifications={notifications}
                  onMarkAsRead={onMarkAsRead}
                />
              </div>
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
            
            {/* Feedback Button Mobile - SHOWN EVERYWHERE EXCEPT HOME */}
            {activeTab !== 'home' && (
              <button
                onClick={() => setActiveTab('feedback')}
                title="Give Feedback"
                className="p-1.5 text-[#8C8C8C] hover:text-[#3478E5] hover:bg-[#EEF4FF] rounded-full transition"
              >
                <MessageSquareHeart className="w-5 h-5" />
              </button>
            )}

            {/* Notifications Bell Mobile */}
            {user?.isLoggedIn && (
              <div className="relative">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-1.5 text-[#8C8C8C] hover:text-[#3478E5] hover:bg-[#EEF4FF] rounded-full transition relative"
                >
                  <Bell className="w-5 h-5" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute top-1 right-1.5 w-2 h-2 bg-[#F26B5B] rounded-full border-2 border-white"></span>
                  )}
                </button>
                <NotificationsPanel
                  isOpen={notificationsOpen}
                  onClose={() => setNotificationsOpen(false)}
                  notifications={notifications}
                  onMarkAsRead={onMarkAsRead}
                />
              </div>
            )}
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

      {/* Coming Soon Popup */}
      <ComingSoonPopup
        isOpen={comingSoonPopup.isOpen}
        onClose={() => setComingSoonPopup({ ...comingSoonPopup, isOpen: false })}
        title={comingSoonPopup.title}
        message={comingSoonPopup.message}
      />

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
                {isActive ? (
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

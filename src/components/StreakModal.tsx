import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, X, Calendar as CalendarIcon, Zap, ShieldAlert, Sparkles } from 'lucide-react';

interface StreakModalProps {
  isOpen: boolean;
  onClose: () => void;
  streakDays: number;
  lastActiveDate: string;
  xp: number;
  onRefillStreak: () => void;
}

export const StreakModal: React.FC<StreakModalProps> = ({
  isOpen,
  onClose,
  streakDays,
  lastActiveDate,
  xp,
  onRefillStreak
}) => {
  if (!isOpen) return null;

  const REFILL_COST = 500;
  const canAffordRefill = xp >= REFILL_COST;

  // Generate 28-day calendar based on streakDays and lastActiveDate
  const generateCalendar = () => {
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastActive = new Date(lastActiveDate);
    lastActive.setHours(0, 0, 0, 0);
    
    // Calculate if the streak is broken (more than 1 day since last active)
    const msPerDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.floor((today.getTime() - lastActive.getTime()) / msPerDay);
    const isStreakBroken = diffDays > 1 && streakDays > 0;

    for (let i = 27; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      d.setHours(0, 0, 0, 0);
      
      let isActive = false;
      const diffFromLastActive = Math.floor((lastActive.getTime() - d.getTime()) / msPerDay);
      
      // If the day is on or before the last active date, and within the streak window
      if (diffFromLastActive >= 0 && diffFromLastActive < streakDays) {
        isActive = true;
      }

      days.push({
        date: d,
        isActive,
        isToday: i === 0,
        isBroken: isStreakBroken && i === 0
      });
    }
    return days;
  };

  const calendarDays = generateCalendar();
  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101B3D]/60 backdrop-blur-md animate-in fade-in duration-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-sm bg-white border border-[#EAEAEA] rounded-[2rem] p-6 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-black text-[#101B3D] flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-[#3478E5]" />
              Streak Calendar
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#8C8C8C] hover:text-[#101B3D] hover:bg-[#F5F5F0] transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Streak Status */}
          <div className="bg-[#FFF1F0] rounded-2xl p-5 flex items-center justify-between mb-6 border border-[#F26B5B]/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#F26B5B]">
                <Flame className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#F26B5B] uppercase tracking-wider">Current Streak</p>
                <p className="text-2xl font-black text-[#101B3D] leading-none">{streakDays} Days</p>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="mb-8">
            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {dayNames.map((day, idx) => (
                <div key={idx} className="text-center text-[10px] font-bold text-[#8C8C8C]">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Days */}
            <div className="grid grid-cols-7 gap-2">
              {/* Add empty slots for the first week to align with Sunday */}
              {Array.from({ length: calendarDays[0].date.getDay() }).map((_, idx) => (
                <div key={`empty-${idx}`} className="w-8 h-8" />
              ))}
              
              {calendarDays.map((day, idx) => (
                <div
                  key={idx}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                    day.isBroken
                      ? 'bg-[#F26B5B] text-white animate-pulse'
                      : day.isActive
                      ? 'bg-[#F5C94A] text-white shadow-sm'
                      : day.isToday
                      ? 'bg-white border-2 border-[#EAEAEA] text-[#101B3D]'
                      : 'bg-[#F5F5F0] text-[#8C8C8C]'
                  }`}
                >
                  {day.isActive ? <Flame className="w-4 h-4" /> : day.date.getDate()}
                </div>
              ))}
            </div>
          </div>

          {/* XP Refill Section */}
          <div className="border-t border-[#EAEAEA] pt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#EEF4FF] rounded-lg text-[#3478E5]">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#101B3D]">Streak Freeze</h4>
                <p className="text-xs text-[#8C8C8C] font-medium mt-0.5 leading-relaxed">
                  Lost your streak or need a break tomorrow? Spend 500 XP to refill your streak and keep the fire burning!
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (canAffordRefill) onRefillStreak();
              }}
              disabled={!canAffordRefill}
              className={`w-full py-3.5 rounded-xl text-sm font-black flex items-center justify-center gap-2 transition active:scale-95 ${
                canAffordRefill
                  ? 'bg-[#101B3D] hover:bg-[#111111] text-white shadow-md'
                  : 'bg-[#EAEAEA] text-[#8C8C8C] cursor-not-allowed'
              }`}
            >
              <Zap className="w-4 h-4" />
              Buy Refill for {REFILL_COST} XP
            </button>
            
            {!canAffordRefill && (
              <p className="text-[10px] font-bold text-center text-[#F26B5B]">
                You need {REFILL_COST - xp} more XP to buy a refill.
              </p>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

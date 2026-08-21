import React, { useEffect, useRef } from 'react';
import { AppNotification } from '../types';
import { Bell, Award, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: AppNotification[];
  onMarkAsRead: (notificationId: string) => void;
}

export const NotificationsPanel: React.FC<NotificationsPanelProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAsRead
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideInteraction = (event: Event) => {
      const target = event.target as Element;
      if (
        isOpen && 
        panelRef.current && 
        !panelRef.current.contains(target) &&
        !target.closest?.('#notification-bell-btn') &&
        !target.closest?.('#mobile-notification-bell-btn')
      ) {
        // Only close if we interact outside the panel and not on the bell button itself
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideInteraction);
    document.addEventListener('touchstart', handleOutsideInteraction, { passive: true });
    window.addEventListener('scroll', handleOutsideInteraction, { capture: true, passive: true });
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideInteraction);
      document.removeEventListener('touchstart', handleOutsideInteraction);
      window.removeEventListener('scroll', handleOutsideInteraction, { capture: true } as any);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop for mobile */}
      <div 
        className="fixed inset-0 z-40 bg-black/20 sm:hidden"
        onClick={onClose}
      />
      
      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        className="fixed inset-x-4 top-[72px] sm:inset-auto sm:absolute sm:top-12 sm:right-0 sm:w-96 bg-white border border-[#EAEAEA] rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[80vh] sm:max-h-[600px]"
      >
        <div className="p-4 border-b border-[#EAEAEA] bg-[#F8F9FA] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-[#101B3D]" />
            <h3 className="font-black text-[#101B3D] text-lg">Notifications</h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#3478E5] bg-[#EEF4FF] px-2 py-1 rounded-full">
              {notifications.filter(n => !n.read).length} New
            </span>
            <button 
              onClick={onClose}
              className="p-1 text-[#8C8C8C] hover:text-[#101B3D] hover:bg-[#EAEAEA] rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <AnimatePresence>
            {notifications.length === 0 ? (
              <div className="text-center p-8 text-[#8C8C8C]">
                <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="font-medium text-sm">All caught up!</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`p-3 rounded-2xl flex gap-3 transition-colors ${
                    notification.read ? 'bg-transparent' : 'bg-[#EEF4FF]/50'
                  }`}
                  onClick={() => !notification.read && onMarkAsRead(notification.id)}
                >
                  
                  {/* Icon / Avatar */}
                  <div className="shrink-0 pt-1">
                    {notification.type === 'badge_earned' ? (
                      <div className="w-10 h-10 rounded-full bg-[#FFFBEA] text-[#F5C94A] flex items-center justify-center">
                        <Award className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#F8F9FA] text-[#8C8C8C] flex items-center justify-center">
                        <Info className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#101B3D] mb-0.5">{notification.title}</p>
                    <p className="text-[13px] text-[#111111]/70 font-medium leading-snug">{notification.message}</p>
                    <p className="text-[10px] font-bold text-[#8C8C8C] mt-1.5">{notification.timestamp}</p>
                  </div>

                  {/* Unread dot */}
                  {!notification.read && (
                    <div className="w-2 h-2 rounded-full bg-[#3478E5] shrink-0 mt-2" />
                  )}

                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

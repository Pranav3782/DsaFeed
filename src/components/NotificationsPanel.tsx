import React from 'react';
import { AppNotification } from '../types';
import { Bell, UserPlus, CheckCircle2, Award, Info, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: AppNotification[];
  onAcceptRequest: (notificationId: string, senderId?: string) => void;
  onDeclineRequest: (notificationId: string) => void;
  onMarkAsRead: (notificationId: string) => void;
}

export const NotificationsPanel: React.FC<NotificationsPanelProps> = ({
  isOpen,
  onClose,
  notifications,
  onAcceptRequest,
  onDeclineRequest,
  onMarkAsRead
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop for mobile to click away */}
      <div 
        className="fixed inset-0 z-40 bg-black/20 md:bg-transparent"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        className="absolute top-14 sm:top-16 right-0 sm:right-4 w-full sm:w-96 bg-white border border-[#EAEAEA] sm:rounded-3xl shadow-xl z-50 overflow-hidden flex flex-col max-h-[80vh] sm:max-h-[600px]"
      >
        <div className="p-4 border-b border-[#EAEAEA] bg-[#F8F9FA] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-[#101B3D]" />
            <h3 className="font-black text-[#101B3D] text-lg">Notifications</h3>
          </div>
          <span className="text-xs font-bold text-[#3478E5] bg-[#EEF4FF] px-2 py-1 rounded-full">
            {notifications.filter(n => !n.read).length} New
          </span>
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
                    {notification.type === 'connection_request' && notification.senderAvatar ? (
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs">
                        <img src={notification.senderAvatar} alt={notification.senderName} className="w-full h-full object-cover" />
                      </div>
                    ) : notification.type === 'connection_accepted' ? (
                      <div className="w-10 h-10 rounded-full bg-[#EEF9F3] text-[#55C990] flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    ) : notification.type === 'badge_earned' ? (
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
                    
                    {/* Actions for Connection Request */}
                    {notification.type === 'connection_request' && (
                      <div className="flex items-center gap-2 mt-3">
                        <button 
                          onClick={(e) => { e.stopPropagation(); onAcceptRequest(notification.id, notification.senderId); }}
                          className="flex-1 bg-[#3478E5] hover:bg-[#2864C6] text-white text-xs font-bold py-2 rounded-xl transition flex items-center justify-center gap-1"
                        >
                          <Check className="w-3.5 h-3.5" /> Accept
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); onDeclineRequest(notification.id); }}
                          className="flex-1 bg-[#F8F9FA] hover:bg-[#EAEAEA] text-[#8C8C8C] text-xs font-bold py-2 rounded-xl transition flex items-center justify-center gap-1"
                        >
                          <X className="w-3.5 h-3.5" /> Decline
                        </button>
                      </div>
                    )}
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

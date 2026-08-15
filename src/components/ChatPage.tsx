import React, { useState } from 'react';
import { UserProfile, ChatMessage, ChatContact } from '../types';
import { Send, Search, Phone, Video, MoreVertical, ChevronLeft, UserPlus, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { playUISound } from '../utils/audio';

interface ChatPageProps {
  user: UserProfile | null;
}

const INITIAL_CONTACTS: ChatContact[] = [
  {
    id: 'user-101',
    name: 'Rakesh Nakrani',
    handle: '@rakesh_nakrani',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200',
    verified: true,
    status: 'accepted',
    lastMessage: 'Nice! The optimal substructure was tricky to find.',
    lastMessageTime: '10:35 AM'
  },
  {
    id: 'user-202',
    name: 'Sarah Chen',
    handle: '@sarah_codes',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    verified: false,
    status: 'pending',
    lastMessage: 'Waiting for peer to accept...',
    lastMessageTime: 'Yesterday'
  }
];

const INITIAL_MESSAGES: ChatMessage[] = [
  { id: 'm1', senderId: 'user-101', receiverId: 'me', content: 'Hey, did you figure out the DP problem?', timestamp: '10:30 AM' },
  { id: 'm2', senderId: 'me', receiverId: 'user-101', content: 'Yeah! Used memoization. Reduced time from O(2^n) to O(n) 🎉', timestamp: '10:32 AM' },
  { id: 'm3', senderId: 'user-101', receiverId: 'me', content: 'Nice! The optimal substructure was tricky to find.', timestamp: '10:35 AM' }
];

export const ChatPage: React.FC<ChatPageProps> = ({ user }) => {
  const [contacts, setContacts] = useState<ChatContact[]>(INITIAL_CONTACTS);
  const [activeContact, setActiveContact] = useState<ChatContact | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  
  // New Connection Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newConnectionId, setNewConnectionId] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeContact || activeContact.status !== 'accepted') return;
    
    playUISound();
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderId: 'me',
      receiverId: activeContact.id,
      content: inputText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setInputText('');
  };

  const handleAddConnection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newConnectionId.trim()) return;

    playUISound();
    const newContact: ChatContact = {
      id: `mock-${Date.now()}`,
      name: `User ${newConnectionId.substring(0, 8)}`,
      handle: `@peer_${newConnectionId.substring(1, 6).toLowerCase()}`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${newConnectionId}&backgroundColor=b6e3f4`,
      verified: false,
      status: 'pending',
      lastMessage: 'Connection request sent...',
      lastMessageTime: 'Just now'
    };

    setContacts([newContact, ...contacts]);
    setIsAddModalOpen(false);
    setNewConnectionId('');
  };

  return (
    <div className="max-w-6xl mx-auto w-full h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] p-0 sm:p-4 pt-0 sm:pt-4 animate-in fade-in duration-300">
      
      <div className="bg-white border-y sm:border border-[#EAEAEA] sm:rounded-3xl shadow-xs h-full flex overflow-hidden relative">
        
        {/* Sidebar - Contacts */}
        <div className={`w-full sm:w-80 lg:w-96 flex flex-col border-r border-[#EAEAEA] bg-[#FDFDFD] transition-transform ${activeContact ? 'hidden sm:flex' : 'flex'}`}>
          <div className="p-4 sm:p-5 border-b border-[#EAEAEA] bg-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-black text-[#101B3D]">Sockets</h2>
              <button 
                onClick={() => setIsAddModalOpen(true)}
                className="p-2 bg-[#EEF4FF] hover:bg-[#3478E5] text-[#3478E5] hover:text-white rounded-full transition-colors"
                title="New Socket Request"
              >
                <UserPlus className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8C8C]" />
              <input 
                type="text" 
                placeholder="Search connections..." 
                className="w-full bg-[#F8F9FA] border border-[#EAEAEA] rounded-xl pl-9 pr-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#3478E5]/20 focus:border-[#3478E5] transition"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <button 
                key={contact.id}
                onClick={() => { setActiveContact(contact); playUISound(); }}
                className={`w-full p-4 flex items-center gap-3 border-b border-[#EAEAEA]/50 transition-colors ${
                  activeContact?.id === contact.id ? 'bg-[#EEF4FF] border-[#3478E5]/20' : 'hover:bg-[#F8F9FA]'
                }`}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#EAEAEA] relative">
                  <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" />
                  {contact.status === 'pending' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[1px]">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex justify-between items-center mb-0.5">
                    <h4 className="font-bold text-[#101B3D] truncate">{contact.name}</h4>
                    <span className="text-[11px] font-bold text-[#8C8C8C]">{contact.lastMessageTime}</span>
                  </div>
                  <p className={`text-sm truncate font-medium ${
                    contact.status === 'pending' ? 'text-amber-500 italic' :
                    activeContact?.id === contact.id ? 'text-[#3478E5]' : 'text-[#8C8C8C]'
                  }`}>
                    {contact.lastMessage}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className={`flex-1 flex flex-col bg-white ${!activeContact ? 'hidden sm:flex' : 'flex'} absolute sm:relative inset-0 sm:inset-auto z-10 sm:z-auto`}>
          {activeContact ? (
            <>
              {/* Chat Header */}
              <div className="p-4 sm:p-5 border-b border-[#EAEAEA] bg-white flex items-center justify-between shadow-sm z-10">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setActiveContact(null)}
                    className="p-2 -ml-2 mr-1 sm:hidden text-[#101B3D] hover:bg-[#F8F9FA] rounded-full"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#EAEAEA]">
                    <img src={activeContact.avatar} alt={activeContact.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#101B3D]">{activeContact.name}</h3>
                    {activeContact.status === 'accepted' ? (
                      <p className="text-xs font-semibold text-[#55C990] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#55C990]"></span>
                        Socket Established
                      </p>
                    ) : (
                      <p className="text-xs font-semibold text-amber-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                        Pending Request
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-[#8C8C8C]">
                  {activeContact.status === 'accepted' && (
                    <>
                      <button className="p-2 hover:bg-[#EEF4FF] hover:text-[#3478E5] rounded-full transition"><Phone className="w-5 h-5" /></button>
                      <button className="p-2 hover:bg-[#EEF4FF] hover:text-[#3478E5] rounded-full transition"><Video className="w-5 h-5" /></button>
                    </>
                  )}
                  <button className="p-2 hover:bg-[#F8F9FA] hover:text-[#101B3D] rounded-full transition"><MoreVertical className="w-5 h-5" /></button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#FAFAFA]">
                {activeContact.status === 'pending' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-70">
                    <Clock className="w-12 h-12 text-[#8C8C8C] mb-4" />
                    <h3 className="text-lg font-bold text-[#101B3D]">Request Pending</h3>
                    <p className="text-sm font-medium text-[#8C8C8C] max-w-xs mt-1">
                      You cannot send packets until {activeContact.name} accepts your connection request.
                    </p>
                  </div>
                ) : (
                  <AnimatePresence>
                    {messages.map((msg) => {
                      const isMe = msg.senderId === 'me';
                      return (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          key={msg.id}
                          className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                        >
                          <div className={`max-w-[80%] sm:max-w-[70%] rounded-2xl px-4 py-2.5 ${
                            isMe 
                              ? 'bg-[#3478E5] text-white rounded-tr-sm shadow-md' 
                              : 'bg-white border border-[#EAEAEA] text-[#101B3D] rounded-tl-sm shadow-sm'
                          }`}>
                            <p className="text-[15px] font-medium leading-relaxed">{msg.content}</p>
                          </div>
                          <span className="text-[11px] font-bold text-[#8C8C8C] mt-1.5 mx-1">
                            {msg.timestamp}
                          </span>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-[#EAEAEA]">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input 
                    type="text" 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={activeContact.status === 'accepted' ? "Send a packet..." : "Wait for connection..."}
                    disabled={activeContact.status !== 'accepted'}
                    className="flex-1 bg-[#F8F9FA] border border-[#EAEAEA] rounded-full px-5 py-3 text-sm font-medium focus:ring-2 focus:ring-[#3478E5]/20 focus:border-[#3478E5] transition disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                  <button 
                    type="submit"
                    disabled={!inputText.trim() || activeContact.status !== 'accepted'}
                    className={`p-3 rounded-full shrink-0 transition flex items-center justify-center ${
                      inputText.trim() && activeContact.status === 'accepted'
                        ? 'bg-[#3478E5] text-white hover:bg-[#2864C6] shadow-md hover:shadow-lg' 
                        : 'bg-[#EAEAEA] text-[#8C8C8C] cursor-not-allowed'
                    }`}
                  >
                    <Send className="w-5 h-5 -ml-0.5" />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-[#FAFAFA]">
              <div className="w-20 h-20 bg-[#EEF4FF] rounded-full flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-[#3478E5] ml-1" />
              </div>
              <h2 className="text-2xl font-black text-[#101B3D] mb-2">Initialize Socket</h2>
              <p className="text-[#8C8C8C] font-medium max-w-sm">
                Select a peer from the left panel to establish a direct connection and start transmitting packets.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add Connection Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative"
            >
              <h2 className="text-2xl font-black text-[#101B3D] mb-2">New Socket Request</h2>
              <p className="text-sm font-medium text-[#8C8C8C] mb-6">
                Enter the unique connection ID (e.g., #DSA-ABCD) of the peer you want to connect with.
              </p>
              
              <form onSubmit={handleAddConnection}>
                <div className="mb-6">
                  <label className="block text-xs font-bold text-[#101B3D] uppercase tracking-wider mb-2">Peer Connection ID</label>
                  <input 
                    type="text" 
                    value={newConnectionId}
                    onChange={(e) => setNewConnectionId(e.target.value.toUpperCase())}
                    placeholder="#DSA-XXXX"
                    className="w-full bg-[#F8F9FA] border border-[#EAEAEA] rounded-xl px-4 py-3 font-medium focus:ring-2 focus:ring-[#3478E5]/20 focus:border-[#3478E5] transition"
                    autoFocus
                  />
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="flex-1 py-3 bg-[#F8F9FA] hover:bg-[#EAEAEA] text-[#8C8C8C] font-bold rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={!newConnectionId.trim()}
                    className="flex-1 py-3 bg-[#3478E5] hover:bg-[#2864C6] text-white font-bold rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <UserPlus className="w-4 h-4" /> Send Request
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUp, Bot, Sparkles, MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

const INITIAL_MESSAGE: Message = {
  id: 'msg-0',
  sender: 'bot',
  text: "Hey there! 👋 I'm Byte, your personal DSA sidekick. I'm designed to help simplify complex coding topics. What's your biggest burning question about Data Structures or Algorithms?"
};

// Friendly heuristic brain
const getBotResponse = (input: string): string => {
  const lower = input.toLowerCase();
  
  if (lower.includes('array')) return "An Array is just a parking lot for your data! Everything is parked in a numbered spot so you can find it instantly.";
  if (lower.includes('linked list')) return "A Linked List is a treasure hunt. Instead of numbered parking spots, each piece of data holds a map pointing to the exact location of the next one!";
  if (lower.includes('stack')) return "Think of a Stack like a pile of heavy plates. The last plate you put on top is the very first one you have to take off (LIFO).";
  if (lower.includes('queue')) return "A Queue is exactly like waiting in line for a movie. The first person in line gets served first (FIFO). No cutting!";
  if (lower.includes('tree') || lower.includes('graph')) return "Trees and Graphs are just webs of connected data! Think of a family tree, or how cities are connected by roads. Perfect for finding the shortest path.";
  if (lower.includes('hash map') || lower.includes('dictionary')) return "A Hash Map is a magical dictionary. You give it a 'word', and it instantly gives you the 'definition' without having to read the whole book.";
  if (lower.includes('big o') || lower.includes('complexity')) return "Big O notation is just a way to measure how a piece of code performs as it gets more data. Will it crash with 1 million users, or run smoothly? Big O tells you!";
  if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) return "Hello! Got any tricky DSA concepts you want me to explain simply?";
  if (lower.includes('thanks') || lower.includes('thank you')) return "You're very welcome! Keep practicing, you're going to crush it. 🚀";
  
  // Generic friendly fallback
  return "That's a fantastic question! Since I'm currently running as a lightweight, lightning-fast demonstration AI right in your browser, my knowledge is focused specifically on core DSA concepts. Try asking me to explain Arrays, Linked Lists, Big O, Trees, or Hash Maps!";
};

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when chatbot is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: inputValue.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate network/typing delay
    setTimeout(() => {
      const responseText = getBotResponse(userMsg.text);
      const botMsg: Message = {
        id: `msg-${Date.now() + 1}`,
        sender: 'bot',
        text: responseText
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Action Button (Theme Style) */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 px-6 py-3.5 rounded-full bg-[#3478E5] text-white shadow-xl font-bold flex items-center justify-center gap-2 transition-opacity ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <MessageSquare className="w-5 h-5" />
        Ask AI
      </motion.button>

      {/* Backdrop for focus */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[90] bg-[#101B3D]/20 backdrop-blur-sm cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed inset-x-0 bottom-0 sm:inset-auto sm:bottom-6 sm:right-6 z-[100] w-full sm:w-[420px] h-[85vh] sm:h-[700px] sm:max-h-[85vh] bg-white rounded-t-[32px] sm:rounded-[32px] shadow-2xl flex flex-col overflow-hidden text-[#101B3D] border-t sm:border border-[#EAEAEA]"
          >
            {/* Header (Theme colors) */}
            <div className="bg-[#101B3D] px-5 py-4 flex items-center justify-between shrink-0 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#3478E5] flex items-center justify-center text-white shadow-inner">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[17px]">Byte</h3>
                  <p className="text-white/70 text-xs flex items-center gap-1 font-medium">
                    <Sparkles className="w-3 h-3 text-[#F5C94A]" /> AI Sidekick
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition relative z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 hide-scrollbar flex flex-col bg-white">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'user' ? (
                    <div className="bg-[#3478E5] text-white px-5 py-3 rounded-[24px] rounded-tr-sm max-w-[85%] text-[15px] leading-relaxed shadow-sm">
                      {msg.text}
                    </div>
                  ) : (
                    <div className="text-[#101B3D] text-[15px] leading-relaxed max-w-[95%]">
                      {msg.text}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="text-[#8C8C8C] text-[15px] animate-pulse">Byte is thinking...</div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 shrink-0 bg-[#FAFAFA] border-t border-[#EAEAEA]">
              <div className="relative flex items-center bg-white rounded-[28px] overflow-hidden group border border-[#EAEAEA] focus-within:border-[#3478E5] transition-colors shadow-sm">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Byte anything about DSA..."
                  className="w-full bg-transparent text-[#101B3D] px-5 py-3.5 pr-14 outline-none placeholder:text-[#8C8C8C] text-[15px]"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className={`absolute right-2 p-[6px] rounded-full transition-all flex items-center justify-center ${
                    inputValue.trim() 
                      ? 'bg-[#3478E5] text-white hover:bg-[#2A65C7] shadow-md' 
                      : 'bg-[#EAEAEA] text-[#A0A0A0]'
                  }`}
                >
                  <ArrowUp className="w-[18px] h-[18px]" />
                </button>
              </div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

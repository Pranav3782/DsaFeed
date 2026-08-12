import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

const INITIAL_MESSAGE: Message = {
  id: 'msg-0',
  sender: 'bot',
  text: "Hey there! 👋 I'm Byte, your personal DSA sidekick. Think Data Structures are just boring math for passing interviews? Think again! I can explain any concept in 10 seconds or less. What's your biggest burning question about coding?"
};

// Simple heuristic brain for "Byte"
const getBotResponse = (input: string): string => {
  const lower = input.toLowerCase();
  
  if (lower.includes('array')) return "An Array is just a parking lot for your data! Everything is parked in a numbered spot so you can find it instantly.";
  if (lower.includes('linked list')) return "A Linked List is a treasure hunt. Instead of numbered parking spots, each piece of data holds a map pointing to the exact location of the next one!";
  if (lower.includes('stack')) return "Think of a Stack like a pile of heavy plates. The last plate you put on top is the very first one you have to take off (LIFO).";
  if (lower.includes('queue')) return "A Queue is exactly like waiting in line for a movie. The first person in line gets served first (FIFO). No cutting!";
  if (lower.includes('tree') || lower.includes('graph')) return "Trees and Graphs are just webs of connected data! Think of a family tree, or how cities are connected by roads. Perfect for finding the shortest path.";
  if (lower.includes('hash map') || lower.includes('dictionary')) return "A Hash Map is a magical dictionary. You give it a 'word', and it instantly gives you the 'definition' without having to read the whole book.";
  if (lower.includes('big o') || lower.includes('complexity')) return "Big O notation is just a way to measure how a piece of code performs as it gets more data. Will it crash with 1 million users, or run smoothly? Big O tells you!";
  if (lower.includes('hard') || lower.includes('difficult')) return "DSA has a scary reputation, but it's really just identifying patterns! Once you learn the ~15 core patterns, you can solve almost anything.";
  if (lower.includes('why') && (lower.includes('important') || lower.includes('learn'))) return "DSA teaches you how to think logically and optimize code. Plus, it's the standard way top companies (like Google/Amazon) test problem-solving skills!";
  if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) return "Hello! Got any tricky DSA concepts you want me to explain simply?";
  if (lower.includes('thanks') || lower.includes('thank you')) return "You're very welcome! Keep practicing, you're going to crush it. 🚀";

  // Fallback
  return "That's a great question! I'm still learning, but I highly recommend checking out our 'Concepts' tab to dive deeper into that. What else can I help simplify?";
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

    // Simulate network/typing delay based on message length
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
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#3478E5] text-white shadow-xl flex items-center justify-center transition-opacity ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Backdrop for focus */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[90] bg-[#101B3D]/10 backdrop-blur-sm sm:hidden"
          />
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-[100] w-full sm:w-[380px] h-full sm:h-[600px] sm:max-h-[80vh] bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#EAEAEA]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#101B3D] to-[#3478E5] px-4 py-3 flex items-center justify-between shrink-0 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-8 blur-2xl" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#3478E5] flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Byte</h3>
                  <p className="text-white/70 text-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#F5C94A]" /> AI Sidekick
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#FAFAFA] space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-br from-[#3478E5] to-[#2864C6] text-white rounded-br-sm shadow-md' 
                      : 'bg-white border border-[#EAEAEA] text-[#101B3D] rounded-bl-sm shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#EAEAEA] rounded-2xl rounded-bl-sm px-4 py-3 shadow-xs flex items-center gap-1">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-[#8C8C8C] rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#8C8C8C] rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#8C8C8C] rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-[#EAEAEA] shrink-0">
              <div className="flex items-center gap-2 bg-[#FAFAFA] border border-[#EAEAEA] rounded-full p-1 pl-4 focus-within:border-[#3478E5] focus-within:ring-2 focus-within:ring-[#3478E5]/20 transition-all">
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm text-[#101B3D]"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-8 h-8 rounded-full bg-[#3478E5] text-white flex items-center justify-center shrink-0 disabled:opacity-50 transition"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Send, CheckCircle2, MessageSquareHeart } from 'lucide-react';

interface FeedbackPageProps {
  onBack: () => void;
}

export const FeedbackPage: React.FC<FeedbackPageProps> = ({ onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    // Simulate sending the email
    // IMPORTANT: To make this real without a backend, 
    // you can swap this out with Web3Forms (https://web3forms.com/)
    // or EmailJS.
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setName('');
      setEmail('');
      setMessage('');

      // Randomly disappear the toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background decorations matching the theme */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#EEF4FF] to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3478E5]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* Top left Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#8C8C8C] hover:text-[#101B3D] transition-colors mb-8 group"
        >
          <div className="w-8 h-8 rounded-full bg-white border border-[#EAEAEA] flex items-center justify-center group-hover:border-[#101B3D] transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm">Back</span>
        </button>

        <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-xl border border-[#EAEAEA]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] flex items-center justify-center">
              <MessageSquareHeart className="w-7 h-7 text-[#3478E5]" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-[#101B3D]">Feedback & Suggestions</h1>
              <p className="text-[#111111]/70 font-medium mt-1">
                Help us improve the platform! We read every single message.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#101B3D]">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl focus:outline-none focus:border-[#3478E5] focus:ring-2 focus:ring-[#3478E5]/20 transition-all font-medium text-[#101B3D]"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#101B3D]">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl focus:outline-none focus:border-[#3478E5] focus:ring-2 focus:ring-[#3478E5]/20 transition-all font-medium text-[#101B3D]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#101B3D]">Your Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's on your mind? Found a bug? Have an idea for a new feature?"
                rows={5}
                className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl focus:outline-none focus:border-[#3478E5] focus:ring-2 focus:ring-[#3478E5]/20 transition-all font-medium text-[#101B3D] resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !name.trim() || !email.trim() || !message.trim()}
              className="w-full py-4 bg-[#101B3D] hover:bg-[#101B3D]/90 text-white rounded-xl font-bold transition flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Floating Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#101B3D] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 min-w-[300px] justify-center"
          >
            <div className="w-8 h-8 rounded-full bg-[#55C990]/20 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-[#55C990]" />
            </div>
            <span className="font-bold text-sm">Your message has been sent to our team!</span>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

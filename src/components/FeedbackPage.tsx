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
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/surya.nallagonda123@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _subject: "New Feedback from DSAFeed!"
      })
    })
      .then(response => response.json())
      .then(data => {
        setIsSubmitting(false);
        setIsSuccess(true);
      })
      .catch(error => {
        console.error("Error submitting form", error);
        setIsSubmitting(false);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] dark:bg-[#0A0A0A] py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* Top left Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#8C8C8C] dark:text-gray-400 hover:text-[#101B3D] dark:hover:text-[#F8FAFC] transition-colors mb-8 group"
        >
          <div className="w-8 h-8 rounded-full bg-white dark:bg-[#1A1A1A] border border-[#EAEAEA] dark:border-white/10 flex items-center justify-center group-hover:border-[#101B3D] dark:group-hover:border-[#F8FAFC] transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm">Back</span>
        </button>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ type: "spring", bounce: 0.5 }}
            className="bg-white dark:bg-[#151515] rounded-[32px] p-8 sm:p-12 shadow-xl border border-[#EAEAEA] dark:border-white/10 text-center"
          >
            <div className="w-24 h-24 bg-[#EFFCF6] dark:bg-[#55C990]/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-4 border-white dark:border-[#151515] ring-4 ring-[#55C990]/10">
              <CheckCircle2 className="w-12 h-12 text-[#55C990]" />
            </div>
            <h2 className="text-3xl font-black text-[#101B3D] dark:text-[#F8FAFC] mb-4 tracking-tight">You're Awesome! 🎉</h2>
            <p className="text-[#8C8C8C] dark:text-gray-400 font-semibold text-base sm:text-lg mb-8 max-w-sm mx-auto leading-relaxed">
              Thanks for filling out the form! Our team will review it shortly. Your ideas help make the platform better for everyone.
            </p>
            <button 
              onClick={onBack}
              className="px-8 py-4 bg-[#101B3D] dark:bg-[#3478E5] text-white rounded-xl font-bold hover:bg-[#1A2A5E] dark:hover:bg-[#2563EB] transition-colors shadow-lg active:scale-95 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Learning</span>
            </button>
          </motion.div>
        ) : (
          <div className="bg-white dark:bg-[#151515] rounded-[32px] p-6 sm:p-12 shadow-xl border border-[#EAEAEA] dark:border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] dark:bg-[#3478E5]/10 flex items-center justify-center">
                <MessageSquareHeart className="w-7 h-7 text-[#3478E5] dark:text-[#60A5FA]" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-[#101B3D] dark:text-[#F8FAFC]">Feedback & Suggestions</h1>
                <p className="text-[#111111]/70 dark:text-gray-400 font-medium mt-1">
                  Help us improve the platform! We read every single message.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#101B3D] dark:text-[#F8FAFC]">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[#FAFAFA] dark:bg-[#1A1A1A] border border-[#EAEAEA] dark:border-white/10 rounded-xl focus:outline-none focus:border-[#3478E5] dark:focus:border-[#60A5FA] focus:ring-2 focus:ring-[#3478E5]/20 dark:focus:ring-[#60A5FA]/20 transition-all font-medium text-[#101B3D] dark:text-[#F8FAFC]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#101B3D] dark:text-[#F8FAFC]">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-[#FAFAFA] dark:bg-[#1A1A1A] border border-[#EAEAEA] dark:border-white/10 rounded-xl focus:outline-none focus:border-[#3478E5] dark:focus:border-[#60A5FA] focus:ring-2 focus:ring-[#3478E5]/20 dark:focus:ring-[#60A5FA]/20 transition-all font-medium text-[#101B3D] dark:text-[#F8FAFC]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#101B3D] dark:text-[#F8FAFC]">Your Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's on your mind? Found a bug? Have an idea for a new feature?"
                  rows={5}
                  className="w-full px-4 py-3 bg-[#FAFAFA] dark:bg-[#1A1A1A] border border-[#EAEAEA] dark:border-white/10 rounded-xl focus:outline-none focus:border-[#3478E5] dark:focus:border-[#60A5FA] focus:ring-2 focus:ring-[#3478E5]/20 dark:focus:ring-[#60A5FA]/20 transition-all font-medium text-[#101B3D] dark:text-[#F8FAFC] resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !name.trim() || !email.trim() || !message.trim()}
                className="w-full py-4 bg-[#101B3D] dark:bg-[#3478E5] hover:bg-[#101B3D]/90 dark:hover:bg-[#2563EB] text-white rounded-xl font-bold transition flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
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
        )}
      </div>


      
    </div>
  );
};

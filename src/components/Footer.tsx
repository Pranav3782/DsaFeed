import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';
import { NavTab } from '../types';

import { Link, useNavigate } from 'react-router-dom';
import { UserProfile } from '../types';

interface FooterProps {
  user?: UserProfile | null;
}

export const Footer: React.FC<FooterProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleProtectedLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (!user?.isLoggedIn) {
      navigate('/signin');
      window.scrollTo({top: 0});
    } else {
      navigate(path);
      window.scrollTo({top: 0});
    }
  };
  return (
    <footer className="bg-[#101B3D] text-white pt-16 pb-8 border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12">
          
          {/* Left / Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="text-3xl font-black tracking-tight text-white flex items-center">
              DSAfeed<span className="text-[#F5C94A] ml-1">.</span>
            </div>
            
            <p className="text-[#AAB2C5] font-medium leading-relaxed max-w-sm">
              The minimal, friendly, interactive DSA learning platform designed to make Data Structures & Algorithms approachable for everyone.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#AAB2C5] hover:text-white hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#AAB2C5] hover:text-white hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#AAB2C5] hover:text-white hover:bg-white/10 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Learn & Practice Column */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-[11px] font-black tracking-wider text-[#F5C94A] uppercase">
              Learn & Practice
            </h4>
            <nav className="flex flex-col gap-4">
              <a href="/" onClick={(e) => handleProtectedLink(e, '/')} className="cursor-pointer text-[#AAB2C5] hover:text-white text-sm font-medium text-left transition-colors">
                10 Core Topics
              </a>
              <a href="/quiz" onClick={(e) => handleProtectedLink(e, '/quiz')} className="cursor-pointer text-[#AAB2C5] hover:text-white text-sm font-medium text-left transition-colors">
                Interactive Quizzes
              </a>
              <a href="/practice" onClick={(e) => handleProtectedLink(e, '/practice')} className="cursor-pointer text-[#AAB2C5] hover:text-white text-sm font-medium text-left transition-colors">
                Code Block Exercises
              </a>
              <a href="/concepts" onClick={(e) => handleProtectedLink(e, '/concepts')} className="cursor-pointer text-[#AAB2C5] hover:text-white text-sm font-medium text-left transition-colors">
                Concept Hub
              </a>
            </nav>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-[11px] font-black tracking-wider text-[#8B5CF6] uppercase">
              Legal
            </h4>
            <nav className="flex flex-col gap-4">
              <Link to="/privacy" onClick={() => window.scrollTo({top:0})} className="text-[#AAB2C5] hover:text-white text-sm font-medium text-left transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" onClick={() => window.scrollTo({top:0})} className="text-[#AAB2C5] hover:text-white text-sm font-medium text-left transition-colors">
                Terms & Conditions
              </Link>
            </nav>
          </div>

          {/* Your Progression Column */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-[11px] font-black tracking-wider text-[#55C990] uppercase">
              Your Progression
            </h4>
            <nav className="flex flex-col gap-4">
              <a href="/profile" onClick={(e) => handleProtectedLink(e, '/profile')} className="cursor-pointer text-[#AAB2C5] hover:text-white text-sm font-medium text-left transition-colors">
                Streak & XP Tracker
              </a>
              <a href="/profile" onClick={(e) => handleProtectedLink(e, '/profile')} className="cursor-pointer text-[#AAB2C5] hover:text-white text-sm font-medium text-left transition-colors">
                Unlocked Badges
              </a>
              <a href="/" onClick={(e) => handleProtectedLink(e, '/')} className="cursor-pointer text-[#AAB2C5] hover:text-white text-sm font-medium text-left transition-colors">
                Beginner Roadmaps
              </a>
            </nav>
          </div>

        </div>

        {/* Divider & Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-[#AAB2C5] text-center md:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6">
            <p>© 2026 DSAfeed. Built with simplicity for learners worldwide.</p>
          </div>
          <p className="mt-2 md:mt-0">
            Crafted with <span className="text-[#F26B5B]">❤️</span> for smooth learning
          </p>
        </div>

      </div>
    </footer>
  );
};

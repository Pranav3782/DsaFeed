import React from 'react';

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
              <a href="https://chat.whatsapp.com/LLVqm4Ph8Vr6qhy27LDOfY" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#AAB2C5] hover:text-white hover:bg-[#25D366] transition-colors" title="WhatsApp">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
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
            <a
              href="https://www.agenthunter.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AAB2C5] hover:text-white transition-colors"
            >
              Featured on AgentHunter
            </a>
          </div>
          <p className="mt-2 md:mt-0">
            Crafted with <span className="text-[#F26B5B]">❤️</span> for smooth learning
          </p>
        </div>

      </div>
    </footer>
  );
};

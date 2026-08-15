import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FeedPost } from './FeedPost';
import { MOCK_FEED_POSTS } from '../data/FeedData';
import { Filter, Send, Image as ImageIcon, Smile, Hash } from 'lucide-react';
import { UserProfile } from '../types';

interface FeedPageProps {
  user: UserProfile | null;
}

export const FeedPage: React.FC<FeedPageProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'NEWEST' | 'TRENDING' | 'FOLLOWING'>('NEWEST');
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState(MOCK_FEED_POSTS);

  const handlePost = () => {
    if (!postText.trim() || !user) return;
    
    const newPost = {
      id: `post-${Date.now()}`,
      author: {
        id: 'me',
        name: user.name || 'Anonymous Learner',
        handle: `@${user.name?.toLowerCase().replace(/\s+/g, '') || 'learner'}`,
        avatar: user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        verified: user.verified || false
      },
      content: postText,
      timestamp: 'Just now',
      likes: 0,
      replies: 0,
      reposts: 0,
      bookmarks: 0,
      isLikedByMe: false,
      isBookmarkedByMe: false
    };

    setPosts([newPost, ...posts]);
    setPostText('');
  };

  return (
    <div className="max-w-3xl mx-auto w-full pt-4 pb-24 sm:pb-8 px-4 animate-in fade-in duration-300">
      
      {/* Header & Tabs (Reference style) */}
      <div className="sticky top-[72px] sm:top-4 z-40 bg-[#FFFDF9]/90 backdrop-blur-md pb-4 mb-4 border-b border-[#EAEAEA]">
        <div className="flex items-center gap-3">
          <button className="p-2.5 bg-white border border-[#EAEAEA] rounded-full shadow-xs hover:bg-[#F8F9FA] transition">
            <Filter className="w-5 h-5 text-[#101B3D]" />
          </button>
          
          <div className="flex-1 bg-white border border-[#EAEAEA] p-1 rounded-full flex items-center shadow-xs">
            {['NEWEST', 'TRENDING', 'FOLLOWING'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 py-2 text-[13px] sm:text-sm font-black rounded-full transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-[#101B3D] text-white shadow-md' 
                    : 'text-[#8C8C8C] hover:text-[#101B3D]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Create Post Input */}
      {user?.isLoggedIn && (
        <div className="bg-white border border-[#EAEAEA] rounded-3xl p-5 mb-6 shadow-xs relative overflow-hidden">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full shrink-0 overflow-hidden border border-[#EAEAEA] bg-[#F8F9FA]">
              <img 
                src={user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'} 
                alt="User avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="What's your latest algorithmic discovery?"
                className="w-full bg-transparent border-none focus:ring-0 resize-none min-h-[80px] text-[#101B3D] placeholder-[#8C8C8C] text-lg font-medium p-0"
              />
              
              <div className="flex items-center justify-between mt-2 pt-3 border-t border-[#EAEAEA]">
                <div className="flex items-center gap-1 sm:gap-2">
                  <button className="p-2 text-[#3478E5] hover:bg-[#EEF4FF] rounded-full transition-colors">
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-[#3478E5] hover:bg-[#EEF4FF] rounded-full transition-colors">
                    <Hash className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-[#3478E5] hover:bg-[#EEF4FF] rounded-full transition-colors">
                    <Smile className="w-5 h-5" />
                  </button>
                </div>
                
                <button
                  onClick={handlePost}
                  disabled={!postText.trim()}
                  className={`px-5 py-2 rounded-full font-black text-sm flex items-center gap-2 transition-all ${
                    postText.trim() 
                      ? 'bg-[#3478E5] text-white hover:bg-[#2864C6] shadow-md hover:shadow-lg' 
                      : 'bg-[#EAEAEA] text-[#8C8C8C] cursor-not-allowed'
                  }`}
                >
                  <span>Commit</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feed Stream */}
      <div className="space-y-4 sm:space-y-6 relative">
        <AnimatePresence>
          {posts.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </AnimatePresence>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-black text-[#101B3D] mb-2">No Commits yet!</h3>
            <p className="text-[#8C8C8C] font-medium">Be the first to share a snippet in the {activeTab} loop.</p>
          </div>
        )}
      </div>

    </div>
  );
};

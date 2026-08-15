import React, { useState } from 'react';
import { FeedPostType } from '../types';
import { 
  MessageSquare, 
  Repeat2, 
  Heart, 
  Bookmark, 
  MoreHorizontal,
  BadgeCheck,
  Share
} from 'lucide-react';
import { motion } from 'motion/react';
import { playUISound } from '../utils/audio';

interface FeedPostProps {
  post: FeedPostType;
}

export const FeedPost: React.FC<FeedPostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLikedByMe || false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarkedByMe || false);
  const [bookmarksCount, setBookmarksCount] = useState(post.bookmarks);
  const [isReposted, setIsReposted] = useState(false);
  const [repostsCount, setRepostsCount] = useState(post.reposts);

  const handleLike = () => {
    playUISound();
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    playUISound();
    setIsBookmarked(!isBookmarked);
    setBookmarksCount(prev => isBookmarked ? prev - 1 : prev + 1);
  };

  const handleRepost = () => {
    playUISound();
    setIsReposted(!isReposted);
    setRepostsCount(prev => isReposted ? prev - 1 : prev + 1);
  };

  return (
    <motion.article 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-[#EAEAEA] rounded-3xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow cursor-pointer group"
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full shrink-0 overflow-hidden border border-[#EAEAEA] bg-[#F8F9FA]">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5 truncate">
              <h3 className="font-bold text-[#101B3D] truncate hover:underline">
                {post.author.name}
              </h3>
              {post.author.verified && (
                <BadgeCheck className="w-4 h-4 text-[#3478E5] shrink-0 fill-[#3478E5]/10" />
              )}
              <span className="text-sm text-[#8C8C8C] truncate hidden sm:inline-block">
                {post.author.handle}
              </span>
              <span className="text-sm text-[#8C8C8C] mx-1">·</span>
              <span className="text-sm text-[#8C8C8C] shrink-0">{post.timestamp}</span>
            </div>
            
            <button className="p-1.5 text-[#8C8C8C] hover:bg-[#F8F9FA] hover:text-[#101B3D] rounded-full transition-colors shrink-0">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="mt-2 mb-4">
            <p className="text-[#101B3D] text-[15px] sm:text-base leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>
          </div>

          {/* Interaction Bar */}
          <div className="flex items-center justify-between max-w-md text-[#8C8C8C] -ml-2">
            
            {/* Reply */}
            <button className="flex items-center gap-1.5 p-2 hover:text-[#3478E5] hover:bg-[#EEF4FF] rounded-full transition-colors group/btn">
              <div className="p-1.5 rounded-full group-hover/btn:bg-[#3478E5]/10">
                <MessageSquare className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </div>
              <span className="text-xs sm:text-sm font-medium">{post.replies > 0 ? post.replies : ''}</span>
            </button>

            {/* Repost / Fork */}
            <button 
              onClick={(e) => { e.stopPropagation(); handleRepost(); }}
              className={`flex items-center gap-1.5 p-2 hover:text-[#55C990] hover:bg-[#EEF9F3] rounded-full transition-colors group/btn ${isReposted ? 'text-[#55C990]' : ''}`}
            >
              <div className={`p-1.5 rounded-full group-hover/btn:bg-[#55C990]/10 ${isReposted ? 'bg-[#55C990]/10' : ''}`}>
                <Repeat2 className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </div>
              <span className="text-xs sm:text-sm font-medium">{repostsCount > 0 ? repostsCount : ''}</span>
            </button>

            {/* Like / Boost */}
            <button 
              onClick={(e) => { e.stopPropagation(); handleLike(); }}
              className={`flex items-center gap-1.5 p-2 hover:text-[#F26B5B] hover:bg-[#FFF1F0] rounded-full transition-colors group/btn ${isLiked ? 'text-[#F26B5B]' : ''}`}
            >
              <div className={`p-1.5 rounded-full group-hover/btn:bg-[#F26B5B]/10 ${isLiked ? 'bg-[#F26B5B]/10' : ''}`}>
                <Heart className={`w-4 h-4 sm:w-[18px] sm:h-[18px] ${isLiked ? 'fill-[#F26B5B]' : ''}`} />
              </div>
              <span className="text-xs sm:text-sm font-medium">{likesCount > 0 ? likesCount : ''}</span>
            </button>

            {/* Bookmark / Cache */}
            <button 
              onClick={(e) => { e.stopPropagation(); handleBookmark(); }}
              className={`flex items-center gap-1.5 p-2 hover:text-[#3478E5] hover:bg-[#EEF4FF] rounded-full transition-colors group/btn ${isBookmarked ? 'text-[#3478E5]' : ''}`}
            >
              <div className={`p-1.5 rounded-full group-hover/btn:bg-[#3478E5]/10 ${isBookmarked ? 'bg-[#3478E5]/10' : ''}`}>
                <Bookmark className={`w-4 h-4 sm:w-[18px] sm:h-[18px] ${isBookmarked ? 'fill-[#3478E5]' : ''}`} />
              </div>
              <span className="text-xs sm:text-sm font-medium">{bookmarksCount > 0 ? bookmarksCount : ''}</span>
            </button>
            
            {/* Share */}
            <button className="flex items-center gap-1.5 p-2 hover:text-[#101B3D] hover:bg-[#F8F9FA] rounded-full transition-colors group/btn hidden sm:flex">
              <div className="p-1.5 rounded-full group-hover/btn:bg-gray-200/50">
                <Share className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </div>
            </button>

          </div>
        </div>
      </div>
    </motion.article>
  );
};

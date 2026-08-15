import { FeedPostType } from '../types';

export const MOCK_FEED_POSTS: FeedPostType[] = [
  {
    id: 'post-1',
    author: {
      id: 'user-101',
      name: 'Rakesh Nakrani',
      handle: '@rakesh_nakrani',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200',
      verified: true
    },
    content: 'Just solved the "Reverse a Linked List" problem using O(1) space complexity! 🚀\n\nThe trick is to use three pointers: prev, curr, and next. Iterate through, swap the pointers, and you are done. So satisfying when the tests pass on the first try!',
    timestamp: '2 min',
    likes: 306,
    replies: 42,
    reposts: 12,
    bookmarks: 89,
    isLikedByMe: false,
    isBookmarkedByMe: false
  },
  {
    id: 'post-2',
    author: {
      id: 'user-202',
      name: 'Sarah Chen',
      handle: '@sarah_codes',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      verified: false
    },
    content: 'Dynamic Programming is finally clicking for me! 😭\n\nIf you\'re struggling with DP, stop trying to memorize the table. Instead, draw the decision tree first. Once you see the overlapping subproblems, adding memoization (the cache) is literally just 2 lines of code.',
    timestamp: '15 min',
    likes: 892,
    replies: 104,
    reposts: 56,
    bookmarks: 320,
    isLikedByMe: true,
    isBookmarkedByMe: true
  },
  {
    id: 'post-3',
    author: {
      id: 'user-303',
      name: 'Alex Developer',
      handle: '@alex_dev',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4',
      verified: true
    },
    content: 'Hot take: Arrays are the hardest data structure because the edge cases (off-by-one errors) are brutal compared to Trees where recursion handles most of the bounds checking for you.\n\nChange my mind. ☕️',
    timestamp: '1 hr',
    likes: 1205,
    replies: 340,
    reposts: 88,
    bookmarks: 45,
    isLikedByMe: false,
    isBookmarkedByMe: false
  },
  {
    id: 'post-4',
    author: {
      id: 'user-404',
      name: 'David Kim',
      handle: '@david_k',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      verified: false
    },
    content: 'My streak is currently at 14 days! Just finished the hash maps module and got my Code Architect badge! 🏆',
    timestamp: '3 hrs',
    likes: 45,
    replies: 5,
    reposts: 0,
    bookmarks: 2,
    isLikedByMe: false,
    isBookmarkedByMe: false
  }
];

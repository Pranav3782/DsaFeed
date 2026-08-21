import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TopicCard } from './components/TopicCard';
import { TopicDetailModal } from './components/TopicDetailModal';
import { QuizCard } from './components/QuizCard';
import { QuizPlayer } from './components/QuizPlayer';
import { ConceptExplainer } from './components/ConceptExplainer';
import { ProfileDashboard } from './components/ProfileDashboard';
import { DsaMyths } from './components/DsaMyths';
import { OnboardingFlow } from './components/OnboardingFlow';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Chatbot } from './components/Chatbot';
import { FeedbackPage } from './components/FeedbackPage';
import { FlashcardsPage } from './components/FlashcardsPage';
import { FaqSection } from './components/FaqSection';
import { PricingPage } from './components/PricingPage';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { InteractiveDemo } from './components/InteractiveDemo';
import { WelcomePopup } from './components/WelcomePopup';
import { LogoutConfirmModal } from './components/LogoutConfirmModal';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
import { StreakModal } from './components/StreakModal';
import { InteractiveLoader } from './components/InteractiveLoader';
import { InitialLoader } from './components/InitialLoader';
import { ErrorScreen } from './components/ErrorScreen';


import { QuizLevelSelectorModal } from './components/QuizLevelSelectorModal';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';

import { supabase } from './lib/supabase';
import { playUISound } from './utils/audio';

import { DSA_TOPICS, QUIZ_SETS, CODE_EXERCISES, USER_BADGES } from './data/dsaData';
import { DsaTopic, QuizSet, UserProgress, DsaCategory, UserProfile, NavTab, DailyTask, AppNotification } from './types';
import { Filter, BookOpen, Code2, HelpCircle, Sparkles, Layers } from 'lucide-react';
import { useSessionState } from './hooks/useSessionState';

const generateDailyTasks = (): DailyTask[] => {
  return [
    {
      id: 'task-time',
      description: 'Spend 7 minutes learning',
      type: 'time',
      target: 420,
      progress: 0,
      completed: false
    },
    {
      id: 'task-read',
      description: 'Read a DSA concept',
      type: 'read',
      target: 1,
      progress: 0,
      completed: false
    },
    {
      id: 'task-quiz',
      description: 'Complete a Quiz',
      type: 'quiz',
      target: 1,
      progress: 0,
      completed: false
    }
  ];
};

const DEMO_PROGRESS: UserProgress = {
  streakDays: 5,
  lastActiveDate: new Date().toISOString().split('T')[0],
  xp: 140,
  completedTopics: ['arrays'],
  quizScores: {
    'quiz-arrays': { score: 4, total: 4, percentage: 100 }
  },
  completedExercises: ['exercise-reverse-array'],
  topicProgress: {
    arrays: 100,
    strings: 30,
    'linked-lists': 0,
    stacks: 40,
    queues: 0,
    'hash-maps': 50,
    trees: 0,
    graphs: 0,
    sorting: 0,
    searching: 0
  },
  unlockedBadges: [
    'badge-first-step',
    'badge-perfect-score',
    'badge-streak-3',
    'badge-code-architect',
    'badge-array-master'
  ],
  dailyTasks: generateDailyTasks(),
  monthlyPoints: 12,
  lastTaskDate: new Date().toISOString().split('T')[0]
};

const EMPTY_PROGRESS: UserProgress = {
  streakDays: 0,
  lastActiveDate: new Date().toISOString().split('T')[0],
  xp: 0,
  completedTopics: [],
  quizScores: {},
  completedExercises: [],
  unlockedBadges: [],
  topicProgress: {},
  dailyTasks: generateDailyTasks(),
  monthlyPoints: 0,
  lastTaskDate: new Date().toISOString().split('T')[0]
};

const getPathFromTab = (tab: NavTab): string => {
  switch (tab) {
    case 'home': return '/';
    case 'quiz': return '/quiz';
    case 'concepts': return '/concepts';
    case 'profile': return '/profile';
    case 'privacy': return '/privacy';
    case 'terms': return '/terms';
    case 'feedback': return '/feedback';
    default: return '/';
  }
};

const getTabFromPath = (path: string): NavTab => {
  if (path === '/' || path === '') return 'home';
  if (path.startsWith('/quiz')) return 'quiz';
  if (path.startsWith('/concepts')) return 'concepts';
  if (path.startsWith('/profile')) return 'profile';
  if (path.startsWith('/privacy')) return 'privacy';
  if (path.startsWith('/terms')) return 'terms';
  if (path.startsWith('/feedback')) return 'feedback';
  return '404';
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation State
  const activeTab = getTabFromPath(location.pathname);
  const [previousTab, setPreviousTab] = useSessionState<NavTab>('previousTab', 'home');
  const [practiceView, setPracticeView] = useSessionState<'practice' | 'code'>('practiceView', 'practice');
  const [conceptView, setConceptView] = useSessionState<'concepts' | 'flashcards'>('conceptView', 'concepts');
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [authReady, setAuthReady] = useState(false);
  const [isTabLoading, setIsTabLoading] = useState(false);
  const [pendingTab, setPendingTab] = useState<NavTab | null>(null);
  
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [pendingTopic, setPendingTopic] = useState<DsaTopic | null>(null);
  const [quizTopicLevels, setQuizTopicLevels] = useSessionState<string | null>('quizTopicLevels', null);

  const handleTabChange = (tab: NavTab) => {
    if (tab === activeTab) return;
    if (tab === 'feedback') {
      setPreviousTab(activeTab);
    }
    
    setPendingTab(tab);
    setIsTabLoading(true);
  };

  const handleTabLoadingComplete = () => {
    if (pendingTab) {
      navigate(getPathFromTab(pendingTab));
      setPendingTab(null);
    }
    setIsTabLoading(false);
  };

  // Auth State
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('login');
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);
  
  // Notifications State
  const [notifications, setNotifications] = useState<AppNotification[]>([]);

  const addNotification = (title: string, message: string, type: 'info' | 'badge_earned' = 'badge_earned') => {
    const newNotif: AppNotification = {
      id: `notif-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      title,
      message,
      type,
      timestamp: 'Just now',
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const handleMarkAsRead = (notificationId: string) => {
    setNotifications(prev => prev.map(n => n.id === notificationId ? { ...n, read: true } : n));
  };

  // Topic & Quiz Selection State
  const [selectedTopic, setSelectedTopic] = useSessionState<DsaTopic | null>('selectedTopic', null);
  const [activeQuizSet, setActiveQuizSet] = useSessionState<QuizSet | null>('activeQuizSet', null);

  // Removed Dark Mode State per user request
  useEffect(() => {
    // Ensure dark mode is completely removed from the HTML element
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('dsafeed_theme');
  }, []);

  // Topic Filter State
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Beginner' | 'Intermediate'>('All');

  // User Local Progress State
  const [userProgress, setUserProgress] = useState<UserProgress>(DEMO_PROGRESS);
  const [isSyncing, setIsSyncing] = useState(false);

  // Global UI Sound Effect for clicks and interactions
  useEffect(() => {
    const handleInteraction = (e: Event) => {
      const target = e.target as HTMLElement;
      // Trigger sound on interactive elements
      if (
        target.closest('button') || 
        target.closest('a') || 
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        target.closest('input[type="submit"]')
      ) {
        playUISound();
      }
    };
    
    // Listen for both clicks and touches (swipes/taps)
    document.addEventListener('click', handleInteraction, { capture: true });
    return () => {
      document.removeEventListener('click', handleInteraction, { capture: true });
    };
  }, []);

  // Initialize Supabase Auth & Fetch Progress
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSession(session).finally(() => {
        setAuthReady(true);
      });
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      handleSession(session, event);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSession = async (session: any, event?: string) => {
    if (session?.user) {
      
      // Fetch profile first to get persistent avatar
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
        
      const defaultAvatar = 'https://api.dicebear.com/9.x/avataaars/svg?seed=Alex&skinColor=edb98a&top=shortFlat&hairColor=2c1b18&clothing=blazerAndShirt';

      const profile: UserProfile = {
        name: existingProfile?.full_name || session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'Learner',
        email: session.user.email || '',
        avatar: existingProfile?.avatar_url || session.user.user_metadata?.avatar_url || defaultAvatar,
        isLoggedIn: true
      };
      setUser(profile);
      setIsAuthModalOpen(false);
      
      // Save profile details to a profiles table
      await supabase.from('profiles').upsert({
        id: session.user.id,
        email: profile.email,
        full_name: profile.name,
        avatar_url: profile.avatar,
        updated_at: new Date().toISOString()
      });
      
      // Fetch user progress
      const { data: progress, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', session.user.id)
        .single();
        
      if (progress && !error) {
        // Load unlocked badges from localStorage as a fallback since it's not in Supabase schema
        let savedBadges: string[] = [];
        try {
          const stored = localStorage.getItem(`dsafeed_badges_${session.user.id}`);
          if (stored) savedBadges = JSON.parse(stored);
        } catch (e) {
          console.error(e);
        }
        
        setUserProgress({
          streakDays: progress.streak_days || 0,
          lastActiveDate: progress.last_active_date || new Date().toISOString().split('T')[0],
          xp: progress.xp || 0,
          completedTopics: progress.completed_topics || [],
          quizScores: progress.quiz_scores || {},
          completedExercises: progress.completed_exercises || [],
          topicProgress: progress.topic_progress || {},
          unlockedBadges: savedBadges,
          dailyTasks: progress.daily_tasks || generateDailyTasks(),
          monthlyPoints: progress.monthly_points || 0,
          lastTaskDate: progress.last_task_date || new Date().toISOString().split('T')[0]
        });
      } else {
        // Initialize for new user
        setUserProgress({ ...EMPTY_PROGRESS, unlockedBadges: [] });
        await supabase.from('user_progress').insert({
          user_id: session.user.id,
          streak_days: EMPTY_PROGRESS.streakDays,
          last_active_date: EMPTY_PROGRESS.lastActiveDate,
          xp: EMPTY_PROGRESS.xp,
          completed_topics: EMPTY_PROGRESS.completedTopics,
          quiz_scores: EMPTY_PROGRESS.quizScores,
          completed_exercises: EMPTY_PROGRESS.completedExercises,
          topic_progress: EMPTY_PROGRESS.topicProgress,
          updated_at: new Date().toISOString()
        });
      }

    } else {
      setUser(null);
      setUserProgress(DEMO_PROGRESS);
    }
  };

  const syncProgressToSupabase = async (newProgress: UserProgress) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) return;
    
    setIsSyncing(true);
    
    // Save badges to localStorage as fallback
    try {
      localStorage.setItem(`dsafeed_badges_${session.user.id}`, JSON.stringify(newProgress.unlockedBadges || []));
    } catch (e) {
      console.error(e);
    }

    const { error } = await supabase.from('user_progress').upsert({
      user_id: session.user.id,
      streak_days: newProgress.streakDays,
      last_active_date: newProgress.lastActiveDate,
      xp: newProgress.xp,
      completed_topics: newProgress.completedTopics,
      quiz_scores: newProgress.quizScores,
      completed_exercises: newProgress.completedExercises,
      topic_progress: newProgress.topicProgress,
      updated_at: new Date().toISOString()
    });
    if (error) {
      console.error('Supabase Upsert Error:', error);
    }
    setIsSyncing(false);
  };

  // Scroll to Master Topics Section
  const scrollToTopicsSection = () => {
    handleTabChange('home');
    setTimeout(() => {
      const element = document.getElementById('topics-grid');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Helper to mark a daily task as complete
  const markTaskProgress = (taskType: 'time' | 'read' | 'quiz', amount = 1) => {
    setUserProgress(prev => {
      const today = new Date().toISOString().split('T')[0];
      let tasks = prev.dailyTasks;
      let mPoints = prev.monthlyPoints;
      
      // Reset tasks if it's a new day
      if (prev.lastTaskDate !== today) {
        tasks = generateDailyTasks();
      }

      let allCompletedBefore = tasks.every(t => t.completed);
      let updated = false;

      const newTasks = tasks.map(t => {
        if (t.type === taskType && !t.completed) {
          const newProgress = Math.min(t.progress + amount, t.target);
          const completed = newProgress >= t.target;
          if (newProgress !== t.progress) updated = true;
          return { ...t, progress: newProgress, completed };
        }
        return t;
      });

      if (!updated && prev.lastTaskDate === today) return prev; // No changes

      // If all tasks are completed just now, add 1 monthly point
      const allCompletedNow = newTasks.every(t => t.completed);
      if (!allCompletedBefore && allCompletedNow) {
        mPoints += 1;
      }

      const next = {
        ...prev,
        dailyTasks: newTasks,
        monthlyPoints: mPoints,
        lastTaskDate: today
      };

      // Only sync to supabase under specific conditions for 'time' tasks to prevent spamming
      const isTimeTask = taskType === 'time';
      const timeTask = newTasks.find(t => t.type === 'time');
      const timeCompletedNow = timeTask?.completed && !tasks.find(t => t.type === 'time')?.completed;
      const hitMinuteMilestone = isTimeTask && (timeTask?.progress || 0) % 60 === 0;

      if (!isTimeTask || timeCompletedNow || hitMinuteMilestone) {
        syncProgressToSupabase(next);
      }

      return next;
    });
  };

  // Track daily time spent (7 min = 420 sec)
  useEffect(() => {
    if (!user?.isLoggedIn) return;
    const interval = setInterval(() => {
      markTaskProgress('time', 1); // 1 second
    }, 1000);
    return () => clearInterval(interval);
  }, [user]);

  // Handlers for Start Learning CTA
  const handleStartLearning = () => {
    if (user?.isLoggedIn) {
      navigate('/practice');
    } else {
      setShowOnboarding(true);
    }
  };

  const handleSelectTopic = (topic: DsaTopic) => {
    setPendingTopic(topic);
    setIsModalLoading(true);
  };

  const handleTopicLoadingComplete = () => {
    if (pendingTopic) {
      setSelectedTopic(pendingTopic);
      markTaskProgress('read');
      setPendingTopic(null);
    }
    setIsModalLoading(false);
  };

  const handleRefillStreak = () => {
    if (userProgress.xp < 500) return;
    
    // Save the streak by setting last active date to yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const newProgress = {
      ...userProgress,
      xp: userProgress.xp - 200,
      lastActiveDate: yesterdayStr
    };
    
    setUserProgress(newProgress);
    syncProgressToSupabase(newProgress);
    setIsStreakModalOpen(false);
  };

  // Handlers for Login / Sign Up success (Mainly for UI updates, auth state handled by listener)
  const handleLoginSuccess = (firstLogin: boolean) => {
    setIsAuthModalOpen(false);
    setIsFirstLogin(firstLogin);
    setShowWelcomePopup(true);
    navigate('/');
  };

  const handleUpdateUser = async (updatedProfile: UserProfile) => {
    setUser(updatedProfile);
    
    // Save profile details to profiles table
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      await supabase.from('profiles').upsert({
        id: session.user.id,
        email: updatedProfile.email,
        full_name: updatedProfile.name,
        avatar_url: updatedProfile.avatar,
        updated_at: new Date().toISOString()
      });
      
      // Update auth metadata
      await supabase.auth.updateUser({
        data: {
          full_name: updatedProfile.name,
          avatar_url: updatedProfile.avatar
        }
      });
    }
  };

  const handleSignOut = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
    setSelectedTopic(null);
    setActiveQuizSet(null);
  };

  // Handlers for XP & Progress Updates
  const handleAddXp = (amount: number) => {
    setUserProgress(prev => {
      const next = { ...prev, xp: prev.xp + amount };
      syncProgressToSupabase(next);
      return next;
    });
  };

  const handleToggleCompleteTopic = (topicId: DsaCategory) => {
    const isCompleted = userProgress.completedTopics.includes(topicId);
    if (!isCompleted) {
      addNotification('Topic Mastered!', 'Excellent work finishing this topic! You earned 50 XP.', 'badge_earned');
      handleAddXp(50);
    }
    
    setUserProgress(prev => {
      const isCurrentlyCompleted = prev.completedTopics.includes(topicId);
      const updatedTopics = isCurrentlyCompleted
        ? prev.completedTopics.filter(id => id !== topicId)
        : [...prev.completedTopics, topicId];

      const updatedTopicProgress = {
        ...prev.topicProgress,
        [topicId]: isCurrentlyCompleted ? 0 : 100
      };

      const next = {
        ...prev,
        completedTopics: updatedTopics,
        topicProgress: updatedTopicProgress
      };
      syncProgressToSupabase(next);
      return next;
    });
  };

  const handleQuizComplete = (quizId: string, score: number, total: number) => {
    const percentage = Math.round((score / total) * 100);
    
    // Show popup
    if (percentage >= 70) {
      addNotification('Quiz Mastered!', `You scored ${percentage}% on the quiz! You earned 30 XP.`, 'badge_earned');
      handleAddXp(30);
    }

    // Mark the daily quiz task as completed
    markTaskProgress('quiz');

    setUserProgress(prev => {
      const quizSet = QUIZ_SETS.find(q => q.id === quizId);
      const topicId = quizSet?.topicId;

      const newQuizScores = {
        ...prev.quizScores,
        [quizId]: { score, total, percentage }
      };

      let updatedTopics = prev.completedTopics;
      let updatedProgress = { ...prev.topicProgress };

      if (percentage >= 70 && topicId) {
        if (!updatedTopics.includes(topicId)) {
          updatedTopics = [...updatedTopics, topicId];
        }
        updatedProgress[topicId] = 100;
      }

      const next = {
        ...prev,
        quizScores: newQuizScores,
        completedTopics: updatedTopics,
        topicProgress: updatedProgress
      };
      syncProgressToSupabase(next);
      return next;
    });
  };

  const handleExerciseComplete = (exerciseId: string) => {
    const isCompleted = userProgress.completedExercises.includes(exerciseId);
    if (!isCompleted) {
      addNotification('Exercise Solved!', 'You reconstructed the code perfectly! You earned 20 XP.', 'badge_earned');
    }

    setUserProgress(prev => {
      if (prev.completedExercises.includes(exerciseId)) return prev;
      const next = {
        ...prev,
        completedExercises: [...prev.completedExercises, exerciseId]
      };
      syncProgressToSupabase(next);
      return next;
    });
  };

  const handleResetProgress = () => {
    if (window.confirm('Reset your learning streak, scores, and XP?')) {
      setUserProgress(EMPTY_PROGRESS);
      syncProgressToSupabase(EMPTY_PROGRESS);
    }
  };

  // Badge unlock monitor
  useEffect(() => {
    const prevUnlocked = userProgress.unlockedBadges || [];
    const newUnlocked = new Set(prevUnlocked);
    
    // Check conditions
    if (Object.keys(userProgress.quizScores).length >= 1 || userProgress.completedExercises.length >= 1) {
      newUnlocked.add('badge-first-step');
    }
    if (Object.values(userProgress.quizScores).some((q: any) => q.percentage === 100)) {
      newUnlocked.add('badge-perfect-score');
    }
    if (userProgress.streakDays >= 3) {
      newUnlocked.add('badge-streak-3');
    }
    if (userProgress.streakDays >= 7) {
      newUnlocked.add('badge-weekly-active');
    }
    if (userProgress.monthlyPoints >= 30) {
      newUnlocked.add('badge-monthly-scholar');
    }
    if (userProgress.completedExercises.length >= 1) {
      newUnlocked.add('badge-code-architect');
    }
    if (userProgress.xp >= 300) {
      newUnlocked.add('badge-dsa-champion');
    }
    if (userProgress.dailyTasks.length > 0 && userProgress.dailyTasks.every(t => t.completed)) {
      newUnlocked.add('badge-dedicated');
    }

    const arrayQuizzes = Object.keys(userProgress.quizScores).filter(k => k.includes('arrays'));
    if (arrayQuizzes.length > 0 && arrayQuizzes.every(k => userProgress.quizScores[k].percentage === 100)) {
      newUnlocked.add('badge-array-master');
    }

    if (newUnlocked.size > prevUnlocked.length) {
      const newlyUnlocked = Array.from(newUnlocked).filter(id => !prevUnlocked.includes(id));
      const newlyUnlockedBadges = newlyUnlocked.map(id => USER_BADGES.find(b => b.id === id)).filter(Boolean);
      
      // Prevent popups on initial data loads or retroactive batch unlocks
      const isRetroactiveBatch = newlyUnlocked.length > 2;
      
      if (newlyUnlockedBadges.length > 0 && !isInitialLoading && !isRetroactiveBatch) {
        // Show popup for the first newly unlocked badge
        const badge = newlyUnlockedBadges[0]!;
        addNotification('Badge Unlocked!', `You unlocked the ${badge.title} badge!`, 'badge_earned');
        handleAddXp(50);
      }

      setUserProgress(prev => {
        const next = { ...prev, unlockedBadges: Array.from(newUnlocked) };
        syncProgressToSupabase(next);
        return next;
      });
    }
  }, [
    userProgress.quizScores, 
    userProgress.completedExercises, 
    userProgress.streakDays, 
    userProgress.monthlyPoints, 
    userProgress.xp, 
    userProgress.dailyTasks,
    userProgress.unlockedBadges
  ]);

  // Topic filter logic
  const filteredTopics = DSA_TOPICS.filter(topic => {
    if (difficultyFilter === 'All') return true;
    return topic.difficulty === difficultyFilter;
  });

  if (isInitialLoading) {
    return (
      <InitialLoader 
        authReady={authReady} 
        onComplete={() => setIsInitialLoading(false)} 
      />
    );
  }

  if (isTabLoading) {
    return <InteractiveLoader onComplete={handleTabLoadingComplete} />;
  }

  // If topic is loading, we render it ABOVE the rest of the app or replace the whole screen?
  // User requested "while loading the page show any random logo". 
  // For topics, it should replace the screen until released.
  if (isModalLoading && pendingTopic) {
    return <InteractiveLoader topicId={pendingTopic.id} onComplete={handleTopicLoadingComplete} />;
  }

  // Handle Auth Pages
  if (location.pathname === '/signin' || location.pathname === '/signup') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FFFDF9]">
        <AuthModal 
          isOpen={true} 
          onClose={() => navigate('/')} 
          onLoginSuccess={(isFirst) => {
            setIsFirstLogin(isFirst);
            if (isFirst) setShowOnboarding(true);
            navigate('/');
          }}
          initialMode={location.pathname === '/signup' ? 'signup' : 'login'} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9]  text-[#111111]  antialiased relative transition-colors duration-200">
      
      {/* Top Navbar */}
      {user?.isLoggedIn && activeTab !== 'privacy' && activeTab !== 'terms' && (
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={handleTabChange} 
          userProgress={userProgress}
          user={user}
          onOpenAuth={() => {
            setAuthModalMode('login');
            setIsAuthModalOpen(true);
          }}
          onSignOut={handleSignOut}
          onOpenStreakModal={() => setIsStreakModalOpen(true)}
          notifications={notifications}
          onMarkAsRead={handleMarkAsRead}
        />
      )}

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.main 
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6"
        >
          
          {/* HOME TAB */}
          {activeTab === 'home' && (
                <div className="space-y-12">
                
                <Hero
                  onStartLearning={handleStartLearning}
                  onAddXp={handleAddXp}
                  isLoggedIn={!!user?.isLoggedIn}
                />


            {/* Interactive Demo */}
            <InteractiveDemo />

            {/* Myths Section moved to Home Page */}
            <section className="pt-12">
              <DsaMyths />
            </section>
          </div>
        )}





        {/* QUIZ TAB */}
        {activeTab === 'quiz' && (
          <div className="py-4 space-y-8 animate-in fade-in duration-200">
            <div className="text-center max-w-xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFBEA] border border-[#F5C94A]/40 rounded-full text-xs font-black text-[#101B3D] mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#F5C94A]" />
                <span>Bite-sized Quizzes</span>
              </div>
              <h2 className="text-3xl font-black text-[#101B3D]">
                Test Your Knowledge
              </h2>
              <p className="text-sm text-[#111111]/70 font-medium mt-1">
                Simple cards to test array lookups, linked list pointers, hash map lookups, and stack operations.
              </p>
            </div>

            {/* Topic Cards for Quizzes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DSA_TOPICS.map((topic) => {
                const topicQuizzes = QUIZ_SETS.filter(q => q.topicId === topic.id);
                const completedQuizzes = topicQuizzes.filter(q => userProgress.quizScores[q.id]?.percentage === 100).length;
                const totalQuizzes = topicQuizzes.length;
                
                return (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    onSelectTopic={(t) => setQuizTopicLevels(t.id)}
                    progressPercent={totalQuizzes > 0 ? Math.round((completedQuizzes / totalQuizzes) * 100) : 0}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* CONCEPTS & FLASHCARDS TAB */}
        {activeTab === 'concepts' && (
          <div className="py-4 space-y-6 animate-in fade-in duration-200">
            {/* Segmented Control */}
            <div className="flex justify-center mb-8">
              <div className="bg-white  border border-[#EAEAEA]  p-1 rounded-2xl shadow-sm inline-flex">
                <button
                  onClick={() => setConceptView('concepts')}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    conceptView === 'concepts' 
                      ? 'bg-[#101B3D]  text-white shadow-md' 
                      : 'text-[#8C8C8C] hover:text-[#111111] '
                  }`}
                >
                  <Sparkles className="w-4 h-4 inline-block mr-2" />
                  Visual Explanations
                </button>
                <button
                  onClick={() => setConceptView('flashcards')}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    conceptView === 'flashcards' 
                      ? 'bg-[#101B3D]  text-white shadow-md' 
                      : 'text-[#8C8C8C] hover:text-[#111111] '
                  }`}
                >
                  <Layers className="w-4 h-4 inline-block mr-2" />
                  Flashcards
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {conceptView === 'concepts' ? (
                <motion.div
                  key="concepts-view"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <ConceptExplainer
                    topics={DSA_TOPICS}
                    onSelectTopic={handleSelectTopic}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="flashcards-view"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <FlashcardsPage 
                    userProgress={userProgress} 
                    onGoToConcepts={() => setConceptView('concepts')} 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* PROFILE & PROGRESS TAB */}
        {activeTab === 'profile' && (
          <div className="py-4 animate-in fade-in duration-200">
            <ProfileDashboard
              user={user}
              onUpdateUser={handleUpdateUser}
              userProgress={userProgress}
              topics={DSA_TOPICS}
              badges={USER_BADGES}
              onSelectTopic={handleSelectTopic}
              onResetProgress={handleResetProgress}
              onSignOut={handleSignOut}
            />
          </div>
        )}

        {/* LEGAL TABS */}
        {activeTab === 'privacy' && <PrivacyPolicy onBack={() => handleTabChange('home')} />}
        {/* TERMS & CONDITIONS TAB */}
        {activeTab === 'terms' && (
          <TermsConditions onBack={() => handleTabChange('home')} />
        )}
        {/* FEEDBACK TAB */}
        {activeTab === 'feedback' && (
          <FeedbackPage onBack={() => handleTabChange(previousTab)} />
        )}

        {/* FAQ Section - ONLY RENDERED ON HOME PAGE */}
        {activeTab === 'home' && <FaqSection />}

        {/* 404 ERROR SCREEN */}
        {activeTab === '404' && <ErrorScreen />}
      </motion.main>
      </AnimatePresence>

      {/* Footer - RENDERED ON HOME AND LEGAL PAGES */}
      {['home', 'privacy', 'terms'].includes(activeTab) && <Footer user={user} />}

      {/* Floating Chatbot - RENDERED ON HOME PAGE */}
      {activeTab === 'home' && <Chatbot />}

      {/* Modals & Overlays */}
      {showOnboarding && !user?.isLoggedIn && (
        <OnboardingFlow onComplete={() => {
          setShowOnboarding(false);
          setAuthModalMode('signup');
          setIsAuthModalOpen(true);
        }} />
      )}
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        initialMode={authModalMode}
      />

      {selectedTopic && (
        <TopicDetailModal
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
          onStartQuiz={(topicId) => {
            setSelectedTopic(null);
            setQuizTopicLevels(topicId);
          }}
          onStartPractice={() => handleTabChange('practice')}
          isCompleted={userProgress.completedTopics.includes(selectedTopic.id)}
          onToggleComplete={handleToggleCompleteTopic}
        />
      )}

      {isModalLoading && <LoadingSpinner fullScreen />}


      {quizTopicLevels && (
        <QuizLevelSelectorModal
          topic={DSA_TOPICS.find(t => t.id === quizTopicLevels)!}
          quizSets={QUIZ_SETS.filter(q => q.topicId === quizTopicLevels)}
          userProgress={userProgress}
          onClose={() => setQuizTopicLevels(null)}
          onSelectLevel={(quizSet) => {
            setQuizTopicLevels(null);
            setActiveQuizSet(quizSet);
          }}
        />
      )}

      {activeQuizSet && (
        <QuizPlayer
          quizSet={activeQuizSet}
          onClose={() => setActiveQuizSet(null)}
          onCompleteQuiz={handleQuizComplete}
          onAddXp={handleAddXp}
        />
      )}

      <WelcomePopup 
        isOpen={showWelcomePopup}
        onClose={() => setShowWelcomePopup(false)}
        userName={user?.name?.split(' ')[0] || user?.name}
        isFirstLogin={isFirstLogin}
      />

      <LogoutConfirmModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={confirmSignOut}
      />

      <StreakModal
        isOpen={isStreakModalOpen}
        onClose={() => setIsStreakModalOpen(false)}
        streakDays={userProgress.streakDays}
        lastActiveDate={userProgress.lastActiveDate}
        xp={userProgress.xp}
        onRefillStreak={handleRefillStreak}
      />


    </div>
  );
}

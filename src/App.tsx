import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TopicCard } from './components/TopicCard';
import { TopicDetailModal } from './components/TopicDetailModal';
import { QuizCard } from './components/QuizCard';
import { QuizPlayer } from './components/QuizPlayer';
import { CodeOrderingExercise } from './components/CodeOrderingExercise';
import { ConceptExplainer } from './components/ConceptExplainer';
import { ProfileDashboard } from './components/ProfileDashboard';
import { DsaMyths } from './components/DsaMyths';
import { OnboardingFlow } from './components/OnboardingFlow';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { InteractiveDemo } from './components/InteractiveDemo';
import { WelcomePopup } from './components/WelcomePopup';
import { LogoutConfirmModal } from './components/LogoutConfirmModal';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
import { StreakModal } from './components/StreakModal';
import { LoadingSpinner } from './components/LoadingSpinner';

import { supabase } from './lib/supabase';

import { DSA_TOPICS, QUIZ_SETS, CODE_EXERCISES, USER_BADGES } from './data/dsaData';
import { DsaTopic, QuizSet, UserProgress, DsaCategory, UserProfile, NavTab, DailyTask } from './types';
import { Filter, BookOpen, Code2, HelpCircle } from 'lucide-react';

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
  topicProgress: {},
  dailyTasks: generateDailyTasks(),
  monthlyPoints: 0,
  lastTaskDate: new Date().toISOString().split('T')[0]
};


export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isTabLoading, setIsTabLoading] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);

  const handleTabChange = (tab: NavTab) => {
    if (tab === activeTab) return;
    setIsTabLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTabLoading(false);
    }, 1000);
  };

  // Auth State
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);

  // Topic & Quiz Selection State
  const [selectedTopic, setSelectedTopic] = useState<DsaTopic | null>(null);
  const [activeQuizSet, setActiveQuizSet] = useState<QuizSet | null>(null);

  // Topic Filter State
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Beginner' | 'Intermediate'>('All');

  // User Local Progress State
  const [userProgress, setUserProgress] = useState<UserProgress>(DEMO_PROGRESS);
  const [isSyncing, setIsSyncing] = useState(false);

  // Initialize Supabase Auth & Fetch Progress
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSession(session).finally(() => {
        setTimeout(() => setIsInitialLoading(false), 1000);
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
      const profile: UserProfile = {
        name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'Learner',
        email: session.user.email || '',
        avatar: session.user.user_metadata?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        isLoggedIn: true,
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
        setUserProgress({
          streakDays: progress.streak_days || 0,
          lastActiveDate: progress.last_active_date || new Date().toISOString().split('T')[0],
          xp: progress.xp || 0,
          completedTopics: progress.completed_topics || [],
          quizScores: progress.quiz_scores || {},
          completedExercises: progress.completed_exercises || [],
          topicProgress: progress.topic_progress || {},
          dailyTasks: progress.daily_tasks || generateDailyTasks(),
          monthlyPoints: progress.monthly_points || 0,
          lastTaskDate: progress.last_task_date || new Date().toISOString().split('T')[0]
        });
      } else {
        // Initialize for new user
        setUserProgress(EMPTY_PROGRESS);
        await supabase.from('user_progress').insert({
          user_id: session.user.id,
          streak_days: EMPTY_PROGRESS.streakDays,
          last_active_date: EMPTY_PROGRESS.lastActiveDate,
          xp: EMPTY_PROGRESS.xp,
          completed_topics: EMPTY_PROGRESS.completedTopics,
          quiz_scores: EMPTY_PROGRESS.quizScores,
          completed_exercises: EMPTY_PROGRESS.completedExercises,
          topic_progress: EMPTY_PROGRESS.topicProgress,
          daily_tasks: EMPTY_PROGRESS.dailyTasks,
          monthly_points: EMPTY_PROGRESS.monthlyPoints,
          last_task_date: EMPTY_PROGRESS.lastTaskDate,
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
    await supabase.from('user_progress').upsert({
      user_id: session.user.id,
      streak_days: newProgress.streakDays,
      last_active_date: newProgress.lastActiveDate,
      xp: newProgress.xp,
      completed_topics: newProgress.completedTopics,
      quiz_scores: newProgress.quizScores,
      completed_exercises: newProgress.completedExercises,
      topic_progress: newProgress.topicProgress,
      daily_tasks: newProgress.dailyTasks,
      monthly_points: newProgress.monthlyPoints,
      last_task_date: newProgress.lastTaskDate,
      updated_at: new Date().toISOString()
    });
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
      syncProgressToSupabase(next);
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
    if (!user?.isLoggedIn) {
      setIsAuthModalOpen(true);
    } else {
      scrollToTopicsSection();
    }
  };

  const handleSelectTopic = (topic: DsaTopic) => {
    setIsModalLoading(true);
    setTimeout(() => {
      setSelectedTopic(topic);
      markTaskProgress('read');
      setIsModalLoading(false);
    }, 1000);
  };

  const handleRefillStreak = () => {
    if (userProgress.xp < 500) return;
    
    // Save the streak by setting last active date to yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const newProgress = {
      ...userProgress,
      xp: userProgress.xp - 500,
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
    setActiveTab('practice');
  };

  const handleUpdateUser = (updatedProfile: UserProfile) => {
    // To fully support updating name/avatar, we would need to update supabase.auth.updateUser()
    setUser(updatedProfile);
  };

  const handleSignOut = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmSignOut = async () => {
    await supabase.auth.signOut();
    setActiveTab('home');
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
    setUserProgress(prev => {
      const isCompleted = prev.completedTopics.includes(topicId);
      const updatedTopics = isCompleted
        ? prev.completedTopics.filter(id => id !== topicId)
        : [...prev.completedTopics, topicId];

      const updatedTopicProgress = {
        ...prev.topicProgress,
        [topicId]: isCompleted ? 0 : 100
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

  // Topic filter logic
  const filteredTopics = DSA_TOPICS.filter(topic => {
    if (difficultyFilter === 'All') return true;
    return topic.difficulty === difficultyFilter;
  });

  if (isInitialLoading || isTabLoading) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#111111] antialiased relative transition-colors duration-200">
      
      {/* Top Navbar */}
      {user?.isLoggedIn && activeTab !== 'privacy' && activeTab !== 'terms' && (
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          userProgress={userProgress}
          user={user}
          onOpenAuth={() => setIsAuthModalOpen(true)}
          onSignOut={handleSignOut}
          onOpenStreakModal={() => setIsStreakModalOpen(true)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* HOME TAB */}
        {activeTab === 'home' && (
              <div className="space-y-12">
                
                {/* Hero Banner */}
                <Hero
                  onStartLearning={handleStartLearning}
                  onTakeQuiz={() => handleTabChange('quiz')}
                  onAddXp={handleAddXp}
            />

            {/* Interactive Demo */}
            <InteractiveDemo />

            {/* Learning Topics Grid Section */}
            <section id="topics-grid" className="pt-4 space-y-6 scroll-mt-24">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF4FF] border border-[#3478E5]/20 rounded-full text-xs font-black text-[#3478E5] mb-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Curriculum Topics</span>
                  </div>
                  <h2 className="text-3xl font-black text-[#101B3D]">
                    Master 10 Core Data Structures
                  </h2>
                  <p className="text-sm text-[#111111]/70 font-medium">
                    Pick a topic to view simple analogies, code snippets, and Big-O complexity guides.
                  </p>
                </div>

                {/* Difficulty Filter Pills */}
                <div className="flex items-center gap-1.5 bg-white border border-[#EAEAEA] p-1.5 rounded-2xl shadow-xs self-start sm:self-center">
                  <Filter className="w-3.5 h-3.5 text-[#8C8C8C] ml-2 mr-1" />
                  {(['All', 'Beginner', 'Intermediate'] as const).map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setDifficultyFilter(diff)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                        difficultyFilter === diff
                          ? 'bg-[#101B3D] text-[#FFFDF9] shadow-xs'
                          : 'text-[#8C8C8C] hover:text-[#111111]'
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTopics.map((topic) => {
                  const progressVal = userProgress.topicProgress[topic.id] || 0;
                  return (
                    <TopicCard
                      key={topic.id}
                      topic={topic}
                      progressPercent={progressVal}
                      onSelectTopic={handleSelectTopic}
                    />
                  );
                })}
              </div>

            </section>

          </div>
        )}

        {/* PRACTICE TAB */}
        {activeTab === 'practice' && (
          <div className="py-4 space-y-6 animate-in fade-in duration-200">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF4FF] border border-[#3478E5]/20 rounded-full text-xs font-black text-[#3478E5] mb-2">
                <Code2 className="w-3.5 h-3.5" />
                <span>Interactive Logic Game</span>
              </div>
              <h2 className="text-3xl font-black text-[#101B3D]">
                Code Block Reordering
              </h2>
              <p className="text-sm text-[#111111]/70 font-medium mt-1">
                Reconstruct the control flow of classic algorithm solutions by putting code blocks in order.
              </p>
            </div>

            <CodeOrderingExercise
              exercises={CODE_EXERCISES}
              onCompleteExercise={handleExerciseComplete}
              onAddXp={handleAddXp}
            />
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

            {/* Quiz Queue Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {QUIZ_SETS.map((quiz) => (
                <QuizCard
                  key={quiz.id}
                  quizSet={quiz}
                  userScore={userProgress.quizScores[quiz.id]}
                  onStartQuiz={(qs) => setActiveQuizSet(qs)}
                />
              ))}
            </div>
          </div>
        )}

        {/* CONCEPTS TAB */}
        {activeTab === 'concepts' && (
          <div className="py-4 animate-in fade-in duration-200">
            <ConceptExplainer
              topics={DSA_TOPICS}
              onSelectTopic={handleSelectTopic}
            />
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

        {/* MYTHS TAB */}
        {activeTab === 'myths' && (
          <div className="py-4 animate-in fade-in duration-200">
            <DsaMyths />
          </div>
        )}

        {/* LEGAL TABS */}
        {activeTab === 'privacy' && <PrivacyPolicy onBack={() => handleTabChange('home')} />}
        {/* TERMS & CONDITIONS TAB */}
        {activeTab === 'terms' && (
          <TermsConditions onBackToHome={() => handleTabChange('home')} />
        )}
        {/* FAQ Section - ONLY RENDERED ON HOME PAGE */}
        {activeTab === 'home' && <FaqSection />}
      </main>

      {/* Footer - RENDERED ON HOME AND LEGAL PAGES */}
      {['home', 'privacy', 'terms'].includes(activeTab) && <Footer onNavigate={(tab) => handleTabChange(tab)} />}

      {/* Modals & Overlays */}
      {!user?.isLoggedIn && (
        <OnboardingFlow onComplete={() => setIsAuthModalOpen(true)} />
      )}
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {selectedTopic && (
        <TopicDetailModal
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
          onStartQuiz={(topicId) => {
            const match = QUIZ_SETS.find(q => q.topicId === topicId) || QUIZ_SETS[0];
            setActiveQuizSet(match);
          }}
          onStartPractice={() => handleTabChange('practice')}
          isCompleted={userProgress.completedTopics.includes(selectedTopic.id)}
          onToggleComplete={handleToggleCompleteTopic}
        />
      )}

      {isModalLoading && <LoadingSpinner fullScreen />}


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

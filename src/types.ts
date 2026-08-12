export type DsaCategory = 
  | 'arrays'
  | 'strings'
  | 'linked-lists'
  | 'stacks'
  | 'queues'
  | 'hash-maps'
  | 'trees'
  | 'graphs'
  | 'sorting'
  | 'searching';

export type Difficulty = 'Beginner' | 'Intermediate';

export interface CodeExample {
  language: string;
  code: string;
}

export interface DsaTopic {
  id: DsaCategory;
  name: string;
  iconName: string;
  shortDescription: string;
  beginnerNote: string;
  accentColor: string; // Hex color for accents
  bgTint: string; // Light background tint
  difficulty: Difficulty;
  estimatedMinutes: number;
  simpleExplanation: {
    analogy: string;
    summary: string;
    keyPoints: string[];
    whenToUse: string[];
  };
  interviewTips: {
    timeComplexity: {
      access: string;
      search: string;
      insertion: string;
      deletion: string;
    };
    spaceComplexity: string;
    commonPatterns: string[];
    proTips: string[];
  };
  codeExamples: CodeExample[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizSet {
  id: string;
  topicId: DsaCategory;
  title: string;
  subtitle: string;
  questionCount: number;
  difficulty: Difficulty;
  questions: QuizQuestion[];
}

export interface CodeBlock {
  id: string;
  code: string;
  correctIndex: number;
}

export interface CodeBlockExercise {
  id: string;
  topicId: DsaCategory;
  title: string;
  scenario: string;
  language: 'javascript' | 'python';
  codeContext: {
    prefix: string;
    suffix: string;
  };
  blocks: CodeBlock[];
  hint: string;
  explanation: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  customAvatarBg?: string;
  customAvatarIcon?: string;
  isLoggedIn: boolean;
  activityHistory?: Record<string, number>; // date string YYYY-MM-DD -> level 1 to 4
}

export type NavTab = 'home' | 'practice' | 'quiz' | 'concepts' | 'profile' | 'leaderboard' | 'privacy' | 'terms' | 'myths' | 'feedback';

export interface UserBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface DailyTask {
  id: string;
  description: string;
  type: 'time' | 'read' | 'quiz';
  target: number;
  progress: number;
  completed: boolean;
}

export interface UserProgress {
  streakDays: number;
  lastActiveDate: string; // YYYY-MM-DD
  xp: number;
  completedTopics: DsaCategory[];
  quizScores: Record<string, { score: number; total: number; percentage: number }>;
  completedExercises: string[];
  topicProgress: Record<DsaCategory, number>; // 0 to 100
  dailyTasks: DailyTask[];
  monthlyPoints: number;
  lastTaskDate: string; // YYYY-MM-DD
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

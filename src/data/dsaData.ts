import { DsaTopic, QuizSet, CodeBlockExercise, FaqItem, UserBadge, DsaCategory } from '../types';
import { CONCEPT_CONTENT } from './conceptContent';
import { EXPANDED_QUIZ_SETS } from './expandedQuizData';

const BASE_TOPICS: Omit<DsaTopic, 'simpleExplanation'>[] = [
  {
    id: 'arrays',
    name: 'Arrays',
    iconName: 'LayoutGrid',
    shortDescription: 'Contiguous blocks of memory for storing items in order.',
    beginnerNote: 'Think of a row of numbered lockers side-by-side.',
    accentColor: '#3478E5',
    bgTint: '#EEF4FF',
    difficulty: 'Beginner',
    estimatedMinutes: 8,
    interviewTips: {
      timeComplexity: { access: 'O(1)', search: 'O(N)', insertion: 'O(N) [O(1) at end]', deletion: 'O(N) [O(1) at end]' },
      spaceComplexity: 'O(N) to store N elements.',
      commonPatterns: ['Two Pointers', 'Sliding Window', 'Prefix Sum'],
      proTips: ['Watch out for out-of-bounds errors.', 'Consider if sorting simplifies the solution.']
    },
    codeExamples: [
      { language: 'JavaScript', code: 'const arr = [10, 20, 30];\nconsole.log(arr[1]); // 20' },
      { language: 'Python', code: 'arr = [10, 20, 30]\nprint(arr[1]) # 20' }
    ]
  },
  {
    id: 'strings',
    name: 'Strings',
    iconName: 'Type',
    shortDescription: 'Sequences of characters used to store text and words.',
    beginnerNote: 'Strings are essentially arrays of characters.',
    accentColor: '#F5A9D5',
    bgTint: '#FDF2F8',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    interviewTips: {
      timeComplexity: { access: 'O(1)', search: 'O(N)', insertion: 'O(N)', deletion: 'O(N)' },
      spaceComplexity: 'O(N) for string copies.',
      commonPatterns: ['Frequency Map for anagrams', 'Two Pointers for Palindromes'],
      proTips: ['Building strings in a loop with + can lead to O(N²) time.']
    },
    codeExamples: [
      { language: 'JavaScript', code: 'const isPal = (s) => s === s.split(\'\').reverse().join(\'\');' },
      { language: 'Python', code: 'is_pal = lambda s: s == s[::-1]' }
    ]
  },
  {
    id: 'linked-lists',
    name: 'Linked Lists',
    iconName: 'Link',
    shortDescription: 'Chain of nodes connected by pointers.',
    beginnerNote: 'Think of a treasure hunt where each clue points to the next.',
    accentColor: '#55C990',
    bgTint: '#EFFCF6',
    difficulty: 'Intermediate',
    estimatedMinutes: 12,
    interviewTips: {
      timeComplexity: { access: 'O(N)', search: 'O(N)', insertion: 'O(1)', deletion: 'O(1)' },
      spaceComplexity: 'O(N) + pointer overhead.',
      commonPatterns: ['Fast and Slow Pointers (Cycle Detection)', 'Dummy Head Node', 'Reversing'],
      proTips: ['Always check for null pointers (node == null).']
    },
    codeExamples: [
      { language: 'JavaScript', code: 'class Node { constructor(v) { this.val = v; this.next = null; } }' },
      { language: 'Python', code: 'class Node:\n    def __init__(self, val=0): self.val = val; self.next = None' }
    ]
  },
  {
    id: 'stacks',
    name: 'Stacks',
    iconName: 'Layers',
    shortDescription: 'Last-In, First-Out (LIFO) stack of elements.',
    beginnerNote: 'Like a stack of cafeteria trays.',
    accentColor: '#F26B5B',
    bgTint: '#FFF1F0',
    difficulty: 'Beginner',
    estimatedMinutes: 8,
    interviewTips: {
      timeComplexity: { access: 'O(N)', search: 'O(N)', insertion: 'O(1)', deletion: 'O(1)' },
      spaceComplexity: 'O(N)',
      commonPatterns: ['Monotonic Stack', 'Valid Parentheses', 'DFS'],
      proTips: ['Always handle stack underflow.']
    },
    codeExamples: [
      { language: 'JavaScript', code: 'const stack = [];\nstack.push(1);\nstack.pop();' },
      { language: 'Python', code: 'stack = []\nstack.append(1)\nstack.pop()' }
    ]
  },
  {
    id: 'queues',
    name: 'Queues',
    iconName: 'ListOrdered',
    shortDescription: 'First-In, First-Out (FIFO) line of items.',
    beginnerNote: 'Like standing in line at a theater.',
    accentColor: '#F5C94A',
    bgTint: '#FFFBEA',
    difficulty: 'Beginner',
    estimatedMinutes: 8,
    interviewTips: {
      timeComplexity: { access: 'O(N)', search: 'O(N)', insertion: 'O(1)', deletion: 'O(1)' },
      spaceComplexity: 'O(N)',
      commonPatterns: ['BFS level-order traversal', 'Sliding Window Maximum'],
      proTips: ['In JS, array.shift() is O(N). Use a real Queue for O(1).']
    },
    codeExamples: [
      { language: 'JavaScript', code: 'const queue = [];\nqueue.push(1);\nqueue.shift();' },
      { language: 'Python', code: 'from collections import deque\nq = deque()\nq.append(1)\nq.popleft()' }
    ]
  },
  {
    id: 'hash-maps',
    name: 'Hash Maps',
    iconName: 'Database',
    shortDescription: 'Key-value pairs enabling lightning-fast O(1) lookups.',
    beginnerNote: 'Like a dictionary.',
    accentColor: '#101B3D',
    bgTint: '#F0F3FA',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    interviewTips: {
      timeComplexity: { access: 'O(1) avg', search: 'O(1) avg', insertion: 'O(1) avg', deletion: 'O(1) avg' },
      spaceComplexity: 'O(N)',
      commonPatterns: ['Frequency Map', 'Complement lookup (Two Sum)'],
      proTips: ['Worst-case is O(N) if there are many collisions.']
    },
    codeExamples: [
      { language: 'JavaScript', code: 'const map = new Map();\nmap.set(\'a\', 1);\nmap.get(\'a\');' },
      { language: 'Python', code: 'd = {\'a\': 1}\nprint(d[\'a\'])' }
    ]
  },
  {
    id: 'trees',
    name: 'Trees',
    iconName: 'GitBranch',
    shortDescription: 'Hierarchical structure with root, parent, child, and leaf nodes.',
    beginnerNote: 'Like a family tree.',
    accentColor: '#55C990',
    bgTint: '#EFFCF6',
    difficulty: 'Intermediate',
    estimatedMinutes: 15,
    interviewTips: {
      timeComplexity: { access: 'O(log N) BST', search: 'O(log N) BST', insertion: 'O(log N)', deletion: 'O(log N)' },
      spaceComplexity: 'O(H) recursion stack.',
      commonPatterns: ['DFS Traversals (In/Pre/Post)', 'BFS Level-Order', 'LCA'],
      proTips: ['In-order traversal on a BST produces sorted numbers!']
    },
    codeExamples: [
      { language: 'JavaScript', code: 'class TreeNode { constructor(v) { this.val = v; this.left = this.right = null; } }' },
      { language: 'Python', code: 'class TreeNode:\n    def __init__(self, val=0): self.val = val; self.left = self.right = None' }
    ]
  },
  {
    id: 'graphs',
    name: 'Graphs',
    iconName: 'Network',
    shortDescription: 'Networks of vertices (nodes) connected by edges.',
    beginnerNote: 'Like social networks or maps.',
    accentColor: '#3478E5',
    bgTint: '#EEF4FF',
    difficulty: 'Intermediate',
    estimatedMinutes: 15,
    interviewTips: {
      timeComplexity: { access: 'O(V+E)', search: 'O(V+E)', insertion: 'O(1)', deletion: 'O(V+E)' },
      spaceComplexity: 'O(V+E)',
      commonPatterns: ['BFS for Shortest Path', 'DFS for Connected Components', 'Topological Sort'],
      proTips: ['Always keep a `visited` set to avoid infinite loops!']
    },
    codeExamples: [
      { language: 'JavaScript', code: 'const adjList = { \'A\': [\'B\'] };' },
      { language: 'Python', code: 'adj_list = {\'A\': [\'B\']}' }
    ]
  },
  {
    id: 'sorting',
    name: 'Sorting',
    iconName: 'ArrowUpDown',
    shortDescription: 'Algorithms to arrange data in order.',
    beginnerNote: 'Organizing a messy hand of playing cards.',
    accentColor: '#F5A9D5',
    bgTint: '#FDF2F8',
    difficulty: 'Intermediate',
    estimatedMinutes: 12,
    interviewTips: {
      timeComplexity: { access: 'N/A', search: 'N/A', insertion: 'O(N log N)', deletion: 'O(N log N)' },
      spaceComplexity: 'O(1) to O(N)',
      commonPatterns: ['Merge Sort', 'Custom Comparators', 'Bucket Sort'],
      proTips: ['Most built-in sorts are O(N log N).']
    },
    codeExamples: [
      { language: 'JavaScript', code: '[3, 1, 2].sort((a, b) => a - b);' },
      { language: 'Python', code: 'sorted([3, 1, 2])' }
    ]
  },
  {
    id: 'searching',
    name: 'Searching',
    iconName: 'Search',
    shortDescription: 'Finding an item inside a collection efficiently.',
    beginnerNote: 'Binary search cuts the search area in half!',
    accentColor: '#F26B5B',
    bgTint: '#FFF1F0',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    interviewTips: {
      timeComplexity: { access: 'O(log N)', search: 'O(log N)', insertion: 'N/A', deletion: 'N/A' },
      spaceComplexity: 'O(1)',
      commonPatterns: ['Binary Search on Answer Space'],
      proTips: ['mid = low + Math.floor((high - low) / 2)']
    },
    codeExamples: [
      { language: 'JavaScript', code: '// Binary Search requires sorted array' },
      { language: 'Python', code: '# Binary Search requires sorted array' }
    ]
  },
  {
    id: 'dp',
    name: 'Dynamic Programming',
    iconName: 'Brain',
    shortDescription: 'Optimizing recursive problems by storing previous results.',
    beginnerNote: 'Remembering past answers instead of recalculating.',
    accentColor: '#3478E5',
    bgTint: '#EEF4FF',
    difficulty: 'Advanced',
    estimatedMinutes: 25,
    interviewTips: {
      timeComplexity: { access: 'O(1)', search: 'O(1)', insertion: 'N/A', deletion: 'N/A' },
      spaceComplexity: 'O(N) or O(N^2) for memo tables.',
      commonPatterns: ['0/1 Knapsack', 'Fibonacci Sequence', 'Longest Common Subsequence'],
      proTips: ['If you can solve it recursively with overlapping subproblems, you can DP it.']
    },
    codeExamples: [
      { language: 'JavaScript', code: 'const memo = {};\nif (n in memo) return memo[n];' },
      { language: 'Python', code: '@cache\ndef dp(n): ...' }
    ]
  },
  {
    id: 'backtracking',
    name: 'Backtracking',
    iconName: 'Undo2',
    shortDescription: 'Building a solution incrementally and undoing dead ends.',
    beginnerNote: 'Navigating a maze and reversing when you hit a wall.',
    accentColor: '#F5C94A',
    bgTint: '#FFFBEA',
    difficulty: 'Advanced',
    estimatedMinutes: 20,
    interviewTips: {
      timeComplexity: { access: 'O(N!)', search: 'O(2^N)', insertion: 'N/A', deletion: 'N/A' },
      spaceComplexity: 'O(N) recursion stack.',
      commonPatterns: ['Permutations', 'Combinations', 'Sudoku Solver'],
      proTips: ['Always undo your state (e.g. pop from list) after the recursive call returns!']
    },
    codeExamples: [
      { language: 'JavaScript', code: 'path.push(choice);\nbacktrack();\npath.pop(); // undo' },
      { language: 'Python', code: 'path.append(choice)\nbacktrack()\npath.pop()' }
    ]
  },
  {
    id: 'greedy',
    name: 'Greedy Algorithms',
    iconName: 'TrendingUp',
    shortDescription: 'Making the locally optimal choice at each step.',
    beginnerNote: 'Taking the biggest coin possible when making change.',
    accentColor: '#55C990',
    bgTint: '#EFFCF6',
    difficulty: 'Intermediate',
    estimatedMinutes: 15,
    interviewTips: {
      timeComplexity: { access: 'O(1)', search: 'O(N log N) usually', insertion: 'N/A', deletion: 'N/A' },
      spaceComplexity: 'O(1) to O(N)',
      commonPatterns: ['Activity Selection', 'Fractional Knapsack', 'Huffman Coding'],
      proTips: ['Sorting the input is almost always the first step in a greedy solution.']
    },
    codeExamples: [
      { language: 'JavaScript', code: 'items.sort((a, b) => b.value - a.value);' },
      { language: 'Python', code: 'items.sort(key=lambda x: x.value, reverse=True)' }
    ]
  }
];

export const DSA_TOPICS: DsaTopic[] = BASE_TOPICS.map(topic => ({
  ...topic,
  simpleExplanation: CONCEPT_CONTENT[topic.id]
}));

export const QUIZ_SETS: QuizSet[] = EXPANDED_QUIZ_SETS;

export const CODE_EXERCISES: CodeBlockExercise[] = [
  {
    id: 'exercise-reverse-array',
    topicId: 'arrays',
    title: 'Reverse an Array in Place',
    scenario: 'Reconstruct the Two-Pointer logic to reverse an array without extra memory.',
    language: 'javascript',
    codeContext: {
      prefix: 'function reverseArray(arr) {\n  let left = 0;\n  let right = arr.length - 1;\n',
      suffix: '  return arr;\n}'
    },
    blocks: [
      { id: 'b1', code: 'while (left < right) {', correctIndex: 0 },
      { id: 'b2', code: '  const temp = arr[left];', correctIndex: 1 },
      { id: 'b3', code: '  arr[left] = arr[right];', correctIndex: 2 },
      { id: 'b4', code: '  arr[right] = temp;', correctIndex: 3 },
      { id: 'b5', code: '  left++; right--;\n}', correctIndex: 4 }
    ],
    hint: 'Start the loop condition `left < right`, perform the swap with a temp variable, then move both pointers towards center.',
    explanation: 'By swapping items at `left` and `right` indices and moving inwards, we reverse the array in O(N) time and O(1) space!'
  },
  {
    id: 'exercise-binary-search',
    topicId: 'searching',
    title: 'Binary Search Implementation',
    scenario: 'Order the statements inside the binary search while loop.',
    language: 'javascript',
    codeContext: {
      prefix: 'function binarySearch(arr, target) {\n  let low = 0, high = arr.length - 1;\n',
      suffix: '  return -1;\n}'
    },
    blocks: [
      { id: 'bs1', code: 'while (low <= high) {', correctIndex: 0 },
      { id: 'bs2', code: '  const mid = Math.floor((low + high) / 2);', correctIndex: 1 },
      { id: 'bs3', code: '  if (arr[mid] === target) return mid;', correctIndex: 2 },
      { id: 'bs4', code: '  if (arr[mid] < target) low = mid + 1;', correctIndex: 3 },
      { id: 'bs5', code: '  else high = mid - 1;\n}', correctIndex: 4 }
    ],
    hint: 'First check equality at `mid`. If target is larger, search right half (`low = mid + 1`). Otherwise search left half.',
    explanation: 'Binary search halves the remaining elements each step, taking O(log N) time.'
  },
  {
    id: 'exercise-stack-valid-parens',
    topicId: 'stacks',
    title: 'Valid Parentheses Checker',
    scenario: 'Assemble the stack check for closing brackets.',
    language: 'javascript',
    codeContext: {
      prefix: 'function isValid(s) {\n  const stack = [];\n  for (let char of s) {\n',
      suffix: '  }\n  return stack.length === 0;\n}'
    },
    blocks: [
      { id: 'vp1', code: '    if (char === "(" || char === "{" || char === "[") {', correctIndex: 0 },
      { id: 'vp2', code: '      stack.push(char);', correctIndex: 1 },
      { id: 'vp3', code: '    } else {', correctIndex: 2 },
      { id: 'vp4', code: '      const top = stack.pop();', correctIndex: 3 },
      { id: 'vp5', code: '      if (!matches(top, char)) return false;\n    }', correctIndex: 4 }
    ],
    hint: 'Push open brackets onto the stack. When encountering a close bracket, pop from stack and check if it matches.',
    explanation: 'Stacks naturally keep track of the most recently opened bracket, making LIFO matching ideal!'
  }
];

export const USER_BADGES: UserBadge[] = [
  {
    id: 'badge-first-step',
    title: 'First Step',
    description: 'Complete your first DSA topic or quiz.',
    howToAchieve: 'Navigate to any topic or quiz and complete it to earn this foundational badge.',
    difficulty: 'Simple',
    icon: 'Footprints'
  },
  {
    id: 'badge-array-master',
    title: 'Array Apprentice',
    description: 'Complete the Array topic & quiz with 100% score.',
    howToAchieve: 'Go to the Arrays topic and answer every question correctly in the quiz.',
    difficulty: 'Medium',
    icon: 'LayoutGrid'
  },
  {
    id: 'badge-streak-3',
    title: '3-Day Streak',
    description: 'Practice 3 days in a row.',
    howToAchieve: 'Log in and complete at least one daily task for 3 consecutive days.',
    difficulty: 'Medium',
    icon: 'Flame'
  },
  {
    id: 'badge-weekly-active',
    title: 'Weekly Active',
    description: 'Maintain a 7-day learning streak.',
    howToAchieve: 'Keep your momentum going! Complete a daily task for 7 consecutive days.',
    difficulty: 'Hard',
    icon: 'CalendarDays'
  },
  {
    id: 'badge-monthly-scholar',
    title: 'Monthly Scholar',
    description: 'Earn 30 monthly points by completing daily tasks.',
    howToAchieve: 'Consistently complete your daily tasks over the course of a month to reach 30 points.',
    difficulty: 'Hard',
    icon: 'Star'
  },
  {
    id: 'badge-code-architect',
    title: 'Code Architect',
    description: 'Complete an interactive code ordering exercise.',
    howToAchieve: 'Go to the Practice tab and successfully complete a code ordering exercise.',
    difficulty: 'Medium',
    icon: 'Code'
  },
  {
    id: 'badge-dsa-champion',
    title: 'DSA Champion',
    description: 'Earn 300+ total XP on DSAfeed.',
    howToAchieve: 'Earn XP by completing topics, quizzes, and tasks until you hit 300 XP.',
    difficulty: 'Hard',
    icon: 'Trophy'
  },
  {
    id: 'badge-perfect-score',
    title: 'Flawless Victory',
    description: 'Get a perfect score on any quiz.',
    howToAchieve: 'Answer all questions correctly in any 7-question quiz set.',
    difficulty: 'Medium',
    icon: 'CheckCircle2'
  },
  {
    id: 'badge-dedicated',
    title: 'Dedicated Learner',
    description: 'Complete all 3 daily tasks in a single day.',
    howToAchieve: 'Check your daily tasks on the Home tab and complete all three before midnight.',
    difficulty: 'Medium',
    icon: 'Zap'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What should I learn first as a complete beginner?',
    answer: 'Start with Arrays and Strings! They are the building blocks of almost all computer memory and programming languages. Once comfortable, move to Hash Maps and Stacks.',
    category: 'Getting Started'
  },
  {
    id: 'faq-2',
    question: 'Is DSAfeed suitable for complete beginners?',
    answer: 'Yes! DSAfeed was created specifically to replace dense textbook jargon with friendly analogies, bite-sized quizzes, visual cards, and interactive code exercises.',
    category: 'General'
  },
  {
    id: 'faq-3',
    question: 'Can I use DSAfeed to prepare for technical interviews?',
    answer: 'Absolutely. Every topic includes a "For Interviews" section highlighting Big-O time & space complexities, common interview patterns, and pro-tips asked at top tech companies.',
    category: 'Interviews'
  },
  {
    id: 'faq-4',
    question: 'How does the interactive code ordering practice work?',
    answer: 'Instead of typing full syntax from memory, you arrange rounded code blocks in the correct logical sequence. It builds mental muscle memory for algorithm control flow!',
    category: 'Practice'
  },
  {
    id: 'faq-5',
    question: 'Which DSA topics are currently covered on DSAfeed?',
    answer: 'We cover 10 core topics: Arrays, Strings, Linked Lists, Stacks, Queues, Hash Maps, Trees, Graphs, Sorting, and Searching.',
    category: 'Curriculum'
  },
  {
    id: 'faq-6',
    question: 'What is Big-O notation and why is it important?',
    answer: 'Big-O notation describes how an algorithm\'s execution time or memory space scales as input size increases. It helps developers write scalable and performant code.',
    category: 'Concepts'
  },
  {
    id: 'faq-7',
    question: 'Do I need advanced math skills before learning Data Structures?',
    answer: 'No advanced math degree is required! Basic arithmetic and logical thinking are all you need to start understanding data structures and algorithm logic.',
    category: 'Getting Started'
  }
];

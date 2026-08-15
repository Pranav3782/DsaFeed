import { DsaTopic, QuizSet, CodeBlockExercise, FaqItem, UserBadge } from '../types';
import { EXPANDED_QUIZ_SETS } from './expandedQuizData';

export const DSA_TOPICS: DsaTopic[] = [
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
    simpleExplanation: {
      analogy: 'Imagine an egg carton or a row of numbered mailboxes (0, 1, 2, 3...). Every item has a fixed position number called an index.',
      summary: 'Arrays store elements in sequential order in memory. Because elements sit right next to each other, accessing any element by its index is instant (O(1)).',
      keyPoints: [
        '0-indexed: The first element is at index 0.',
        'Instant Access: Reading `arr[3]` is lightning fast.',
        'Fixed size or dynamic resizing behind the scenes.',
        'Inserting/deleting at the beginning requires shifting all other items.'
      ],
      whenToUse: [
        'When you need fast lookups by index.',
        'When you know the list size in advance or iteration is frequent.',
        'As the base for other structures like Stacks and Queues.'
      ],
      mediaUrl: '/images/array.jpg'
    },
    interviewTips: {
      timeComplexity: {
        access: 'O(1)',
        search: 'O(N)',
        insertion: 'O(N) [O(1) at end]',
        deletion: 'O(N) [O(1) at end]'
      },
      spaceComplexity: 'O(N) to store N elements.',
      commonPatterns: [
        'Two Pointers (Left and Right converging)',
        'Sliding Window for sub-array problems',
        'Prefix Sum for range queries'
      ],
      proTips: [
        'Watch out for out-of-bounds errors when looping.',
        'Consider if sorting the array first simplifies the solution.'
      ]
    },
    codeExamples: [
      {
        language: 'JavaScript',
        code: `// Array lookup and insertion
const fruits = ["Apple", "Banana", "Cherry"];

// Instant lookup O(1)
console.log(fruits[0]); // "Apple"

// Append to end O(1)
fruits.push("Date");`
      },
      {
        language: 'Python',
        code: `# Array (List in Python)
fruits = ["Apple", "Banana", "Cherry"]

# Instant lookup O(1)
print(fruits[0]) # "Apple"

# Append to end O(1)
fruits.append("Date")`
      }
    ]
  },
  {
    id: 'strings',
    name: 'Strings',
    iconName: 'Type',
    shortDescription: 'Sequences of characters used to store text and words.',
    beginnerNote: 'Strings are essentially arrays of characters with special helpers.',
    accentColor: '#F5A9D5',
    bgTint: '#FDF2F8',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    simpleExplanation: {
      analogy: 'Think of a beaded necklace where each bead has a single letter printed on it.',
      summary: 'In computer science, strings are sequences of text. In many languages like Java or Python, strings are immutable (cannot be changed in-place).',
      keyPoints: [
        'Characters can be accessed by index just like arrays.',
        'String manipulation often creates new strings.',
        'Common operations include substring, concatenation, and character frequency counting.'
      ],
      whenToUse: [
        'Text processing, parsing, palindrome checks, anagram validation.',
        'Pattern searching and regex matching.'
      ]
    },
    interviewTips: {
      timeComplexity: {
        access: 'O(1)',
        search: 'O(N)',
        insertion: 'O(N)',
        deletion: 'O(N)'
      },
      spaceComplexity: 'O(N) for string copies.',
      commonPatterns: [
        'Frequency Map / ASCII array for anagrams',
        'Two Pointers for Palindromes',
        'StringBuilder / Array join to avoid O(N²) string concatenation'
      ],
      proTips: [
        'Remember case sensitivity and whitespace handling.',
        'Building strings in a loop with + can lead to O(N²) time. Use an array join instead!'
      ]
    },
    codeExamples: [
      {
        language: 'JavaScript',
        code: `// Check if string is Palindrome
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}`
      },
      {
        language: 'Python',
        code: `# Check if string is Palindrome
def is_palindrome(s: str) -> bool:
    clean = ''.join(c.lower() for c in s if c.isalnum())
    return clean == clean[::-1]`
      }
    ]
  },
  {
    id: 'linked-lists',
    name: 'Linked Lists',
    iconName: 'Link',
    shortDescription: 'Chain of nodes connected by pointers pointing to the next node.',
    beginnerNote: 'Think of a treasure hunt where each clue gives the location of the next clue.',
    accentColor: '#55C990',
    bgTint: '#EFFCF6',
    difficulty: 'Intermediate',
    estimatedMinutes: 12,
    simpleExplanation: {
      analogy: 'A train where each car is hooked to the car behind it. You start at the engine (Head) and follow the hitches to the last caboose (Tail).',
      summary: 'Unlike arrays, linked list nodes do not sit next to each other in memory. Each node holds its data and a memory address (next pointer) pointing to the next item.',
      keyPoints: [
        'Head: The starting node.',
        'Next pointer: Reference to the subsequent node.',
        'Inserting at the beginning or middle is O(1) if you already have the pointer!',
        'No random access: To get the 5th item, you must walk through items 1 to 4.'
      ],
      whenToUse: [
        'When frequent insertions and deletions at the head/tail are needed.',
        'When memory is fragmented or exact list size is unpredictable.'
      ]
    },
    interviewTips: {
      timeComplexity: {
        access: 'O(N)',
        search: 'O(N)',
        insertion: 'O(1) [with node pointer]',
        deletion: 'O(1) [with node pointer]'
      },
      spaceComplexity: 'O(N) + pointer overhead.',
      commonPatterns: [
        'Fast and Slow Pointers (Floyds Cycle Detection / Middle Node)',
        'Dummy Head Node to simplify boundary edge cases',
        'Reversing a Linked List'
      ],
      proTips: [
        'Always check for null pointers (e.g., node == null or node.next == null).',
        'Draw the pointers on paper first!'
      ]
    },
    codeExamples: [
      {
        language: 'JavaScript',
        code: `class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Creating a 2-node list: 10 -> 20
const head = new Node(10);
head.next = new Node(20);`
      },
      {
        language: 'Python',
        code: `class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Creating 10 -> 20
head = Node(10, Node(20))`
      }
    ]
  },
  {
    id: 'stacks',
    name: 'Stacks',
    iconName: 'Layers',
    shortDescription: 'Last-In, First-Out (LIFO) stack of elements.',
    beginnerNote: 'Like a stack of cafeteria trays: the last tray put on top is the first one taken off.',
    accentColor: '#F26B5B',
    bgTint: '#FFF1F0',
    difficulty: 'Beginner',
    estimatedMinutes: 8,
    simpleExplanation: {
      analogy: 'Think of arranging plates in a stack. The last plate you put on top is the first one you take off.',
      summary: 'A Stack follows the LIFO rule (Last-In, First-Out). Elements are added (pushed) to the top and removed (popped) from the top.',
      keyPoints: [
        'Push: Add item to top.',
        'Pop: Remove item from top.',
        'Peek: Look at top item without removing.',
        'All core operations take O(1) constant time.'
      ],
      whenToUse: [
        'Undo/Redo history, browser navigation, call stack execution, matching parentheses () [] {}.'
      ],
      mediaUrl: '/images/stack.jpg'
    },
    interviewTips: {
      timeComplexity: {
        access: 'O(N)',
        search: 'O(N)',
        insertion: 'O(1)',
        deletion: 'O(1)'
      },
      spaceComplexity: 'O(N)',
      commonPatterns: [
        'Monotonic Stack for next greater element',
        'Valid Parentheses string evaluation',
        'DFS implementation using stack'
      ],
      proTips: [
        'Always handle the stack underflow case (popping from empty stack).'
      ]
    },
    codeExamples: [
      {
        language: 'JavaScript',
        code: `const stack = [];

stack.push(1); // [1]
stack.push(2); // [1, 2]

const topItem = stack.pop(); // returns 2`
      },
      {
        language: 'Python',
        code: `stack = []

stack.append(1) # [1]
stack.append(2) # [1, 2]

top_item = stack.pop() # returns 2`
      }
    ]
  },
  {
    id: 'queues',
    name: 'Queues',
    iconName: 'ListOrdered',
    shortDescription: 'First-In, First-Out (FIFO) line of items.',
    beginnerNote: 'Just like standing in line at a movie theater ticket counter.',
    accentColor: '#F5C94A',
    bgTint: '#FFFBEA',
    difficulty: 'Beginner',
    estimatedMinutes: 8,
    simpleExplanation: {
      analogy: 'Standing in a queue line. The first person to join the line is the first one to be served!',
      summary: 'A Queue follows FIFO (First-In, First-Out). Items are added at the back (Enqueue) and removed from the front (Dequeue).',
      keyPoints: [
        'Enqueue: Join back of queue.',
        'Dequeue: Leave front of queue.',
        'Fair ordering based on arrival time.'
      ],
      whenToUse: [
        'Print jobs, task scheduling, Breadth-First Search (BFS) in trees and graphs.'
      ],
      mediaUrl: '/images/queue.jpg'
    },
    interviewTips: {
      timeComplexity: {
        access: 'O(N)',
        search: 'O(N)',
        insertion: 'O(1)',
        deletion: 'O(1)'
      },
      spaceComplexity: 'O(N)',
      commonPatterns: [
        'Breadth-First Search (BFS) level-order traversal',
        'Sliding Window Maximum (Monotonic Queue)'
      ],
      proTips: [
        'In JavaScript, `array.shift()` is O(N). Use a dedicated Queue pointer or linked list for O(1) dequeue!'
      ]
    },
    codeExamples: [
      {
        language: 'JavaScript',
        code: `// Simple Queue conceptual demo
const queue = [];
queue.push("Alice"); // Enqueue
queue.push("Bob");

const firstOut = queue.shift(); // "Alice"`
      },
      {
        language: 'Python',
        code: `from collections import deque

queue = deque()
queue.append("Alice") # Enqueue
queue.append("Bob")

first_out = queue.popleft() # "Alice"`
      }
    ]
  },
  {
    id: 'hash-maps',
    name: 'Hash Maps',
    iconName: 'Database',
    shortDescription: 'Key-value pairs enabling lightning-fast O(1) lookups.',
    beginnerNote: 'Like a dictionary where you look up a word to instantly get its definition.',
    accentColor: '#101B3D',
    bgTint: '#F0F3FA',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    simpleExplanation: {
      analogy: 'Coat check at a club: You hand over your coat, get a ticket number (Key), and later present the ticket to instantly get your coat (Value).',
      summary: 'Hash Maps (also called objects, dicts, or hash tables) convert a Key into an array index using a Hash Function. This lets you store and fetch values in average O(1) time!',
      keyPoints: [
        'Keys must be unique.',
        'Instant O(1) lookup, insert, and delete on average.',
        'Hash Collisions happen when two keys hash to the same spot (handled internally).'
      ],
      whenToUse: [
        'Frequency counting, Two Sum problem, caching (memoization), instant lookups.'
      ]
    },
    interviewTips: {
      timeComplexity: {
        access: 'O(1) avg',
        search: 'O(1) avg',
        insertion: 'O(1) avg',
        deletion: 'O(1) avg'
      },
      spaceComplexity: 'O(N)',
      commonPatterns: [
        'Count frequencies of characters or numbers',
        'Complement lookup (Target - CurrentValue) in Two Sum',
        'Group Anagrams by sorted key'
      ],
      proTips: [
        'Remember that worst-case time complexity is O(N) if many collisions occur, though rare in modern runtimes.'
      ]
    },
    codeExamples: [
      {
        language: 'JavaScript',
        code: `const userAges = new Map();

userAges.set("Alex", 25);
userAges.set("Sam", 30);

// Instant lookup
console.log(userAges.get("Alex")); // 25`
      },
      {
        language: 'Python',
        code: `user_ages = {}

user_ages["Alex"] = 25
user_ages["Sam"] = 30

# Instant lookup
print(user_ages["Alex"]) # 25`
      }
    ]
  },
  {
    id: 'trees',
    name: 'Trees',
    iconName: 'GitBranch',
    shortDescription: 'Hierarchical structure with root, parent, child, and leaf nodes.',
    beginnerNote: 'Think of a family tree or folder directories on your computer.',
    accentColor: '#55C990',
    bgTint: '#EFFCF6',
    difficulty: 'Intermediate',
    estimatedMinutes: 15,
    simpleExplanation: {
      analogy: 'A real tree turned upside down: the Root is at the top, branching out into children, down to the Leaves at the bottom.',
      summary: 'Trees are non-linear data structures. A Binary Tree has at most 2 children per node (Left and Right). A Binary Search Tree (BST) keeps left children smaller and right children larger.',
      keyPoints: [
        'Root: Top node with no parent.',
        'Leaf: Bottom node with no children.',
        'Height: Longest path from root to leaf.',
        'BST property: Left < Root < Right.'
      ],
      whenToUse: [
        'File systems, DOM trees in web browsers, database indexing, auto-complete.'
      ]
    },
    interviewTips: {
      timeComplexity: {
        access: 'O(log N) for BST',
        search: 'O(log N) for BST',
        insertion: 'O(log N)',
        deletion: 'O(log N)'
      },
      spaceComplexity: 'O(H) recursion stack height.',
      commonPatterns: [
        'DFS Traversals: In-Order (Left, Root, Right), Pre-Order, Post-Order',
        'BFS / Level-Order Traversal using Queue',
        'Lowest Common Ancestor (LCA)'
      ],
      proTips: [
        'In-order traversal on a BST produces sorted numbers!'
      ]
    },
    codeExamples: [
      {
        language: 'JavaScript',
        code: `class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);`
      },
      {
        language: 'Python',
        code: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

root = TreeNode(10, TreeNode(5), TreeNode(15))`
      }
    ]
  },
  {
    id: 'graphs',
    name: 'Graphs',
    iconName: 'Network',
    shortDescription: 'Networks of vertices (nodes) connected by edges (links).',
    beginnerNote: 'Like social networks (friends) or flight maps between cities.',
    accentColor: '#3478E5',
    bgTint: '#EEF4FF',
    difficulty: 'Intermediate',
    estimatedMinutes: 15,
    simpleExplanation: {
      analogy: 'Google Maps showing cities (Vertices) and highways connecting them (Edges).',
      summary: 'Graphs consist of Vertices (V) and Edges (E). They can be Directed (one-way street) or Undirected (two-way street), Weighted or Unweighted.',
      keyPoints: [
        'Represented via Adjacency List or Matrix.',
        'DFS uses Stack / Recursion to go deep.',
        'BFS uses Queue to explore level by level (shortest path in unweighted graph).'
      ],
      whenToUse: [
        'Social network friends, road navigation, network routing, dependency resolution.'
      ]
    },
    interviewTips: {
      timeComplexity: {
        access: 'O(V + E)',
        search: 'O(V + E)',
        insertion: 'O(1)',
        deletion: 'O(V + E)'
      },
      spaceComplexity: 'O(V + E)',
      commonPatterns: [
        'BFS for Shortest Path',
        'DFS for Island Counting / Connected Components',
        'Topological Sort for Task Dependencies'
      ],
      proTips: [
        'Always keep a `visited` set to avoid infinite loops in cyclic graphs!'
      ]
    },
    codeExamples: [
      {
        language: 'JavaScript',
        code: `// Adjacency List representation
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A'],
  'D': ['B']
};`
      },
      {
        language: 'Python',
        code: `# Adjacency List representation
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A'],
    'D': ['B']
}`
      }
    ]
  },
  {
    id: 'sorting',
    name: 'Sorting',
    iconName: 'ArrowUpDown',
    shortDescription: 'Algorithms to arrange data in numerical or alphabetical order.',
    beginnerNote: 'Like organizing a hand of playing cards from lowest to highest.',
    accentColor: '#F5A9D5',
    bgTint: '#FDF2F8',
    difficulty: 'Intermediate',
    estimatedMinutes: 12,
    simpleExplanation: {
      analogy: 'Sorting books on a shelf by publication year or organizing coins by size.',
      summary: 'Sorting puts items in ascending or descending order. Simple algorithms like Bubble/Insertion Sort are O(N²), while Merge Sort and Quick Sort achieve O(N log N).',
      keyPoints: [
        'Merge Sort: Divide and conquer (O(N log N) time, O(N) space).',
        'Quick Sort: Partition around pivot (O(N log N) avg time, in-place).',
        'Bubble Sort: Repeatedly swap adjacent pairs if out of order (O(N²)).'
      ],
      whenToUse: [
        'When data must be displayed in order or to enable Binary Search.'
      ]
    },
    interviewTips: {
      timeComplexity: {
        access: 'N/A',
        search: 'N/A',
        insertion: 'O(N log N)',
        deletion: 'O(N log N)'
      },
      spaceComplexity: 'O(1) to O(N) depending on algorithm.',
      commonPatterns: [
        'Merge Sort recursion',
        'Custom Comparators for sorting objects',
        'Counting Sort / Bucket Sort for bounded integer ranges'
      ],
      proTips: [
        'Most built-in language `.sort()` functions use Timsort or IntroSort (O(N log N)).'
      ]
    },
    codeExamples: [
      {
        language: 'JavaScript',
        code: `// JavaScript built-in sort (numeric)
const nums = [40, 100, 1, 5, 25];
nums.sort((a, b) => a - b);
// [1, 5, 25, 40, 100]`
      },
      {
        language: 'Python',
        code: `# Python built-in sort
nums = [40, 100, 1, 5, 25]
nums.sort()
# [1, 5, 25, 40, 100]`
      }
    ]
  },
  {
    id: 'searching',
    name: 'Searching',
    iconName: 'Search',
    shortDescription: 'Finding an item inside a collection efficiently.',
    beginnerNote: 'Linear search checks item-by-item; Binary search cuts the search area in half!',
    accentColor: '#F26B5B',
    bgTint: '#FFF1F0',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    simpleExplanation: {
      analogy: 'Finding a name in a telephone directory: you open halfway, see if your name comes before or after, and discard half the pages!',
      summary: 'Linear search scans element by element (O(N)). Binary search works on SORTED arrays and repeatedly divides the search interval in half (O(log N)).',
      keyPoints: [
        'Binary Search REQUIREMENT: Array MUST be sorted!',
        'Speed difference: In 1,000,000 items, Linear search takes up to 1,000,000 steps; Binary search takes at most 20 steps!'
      ],
      whenToUse: [
        'Finding target values, range limits, or finding square roots / threshold values.'
      ]
    },
    interviewTips: {
      timeComplexity: {
        access: 'O(log N) for Binary Search',
        search: 'O(log N)',
        insertion: 'N/A',
        deletion: 'N/A'
      },
      spaceComplexity: 'O(1) iterative, O(log N) recursive.',
      commonPatterns: [
        'Standard Binary Search (Low, High, Mid)',
        'Binary Search on Answer / Solution Space'
      ],
      proTips: [
        'Calculate `mid = low + Math.floor((high - low) / 2)` to avoid integer overflow!'
      ]
    },
    codeExamples: [
      {
        language: 'JavaScript',
        code: `function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}`
      },
      {
        language: 'Python',
        code: `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`
      }
    ]
  }
];

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

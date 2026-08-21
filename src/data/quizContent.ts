import { DsaCategory, QuizSet, QuizQuestion, Difficulty } from '../types';

/**
 * Update this file to add/modify quiz questions!
 * Each topic supports up to 20 levels. 
 * If you provide fewer than 20, the rest will be auto-filled with placeholders so the UI works.
 * Levels 1-6 = Beginner | Levels 7-14 = Intermediate | Levels 15-20 = Advanced
 */

// --- ARRAYS QUIZ CONTENT ---
const arraysLevel1: QuizQuestion[] = [
  {
    id: 'arr-L1-Q1',
    question: 'What is the time complexity of accessing an element in an array by its index?',
    options: ['O(1)', 'O(N)', 'O(log N)', 'O(N^2)'],
    correctIndex: 0,
    explanation: 'Arrays are stored in contiguous memory blocks. The computer calculates the exact memory address instantly using the index.'
  },
  {
    id: 'arr-L1-Q2',
    question: 'If you have an array `arr = [10, 20, 30, 40]`, what is `arr[2]`?',
    options: ['10', '20', '30', '40'],
    correctIndex: 2,
    explanation: 'Arrays are 0-indexed. arr[0] is 10, arr[1] is 20, and arr[2] is 30.'
  },
  {
    id: 'arr-L1-Q3',
    question: 'Which operation is generally the slowest on a standard array?',
    options: ['Reading the first element', 'Reading the last element', 'Updating an element by index', 'Inserting an element at the beginning (index 0)'],
    correctIndex: 3,
    explanation: 'Inserting at the beginning requires shifting every single existing element one position to the right, taking O(N) time.'
  },
  {
    id: 'arr-L1-Q4',
    question: 'What is the space complexity of an array containing N elements?',
    options: ['O(1)', 'O(N)', 'O(log N)', 'O(N^2)'],
    correctIndex: 1,
    explanation: 'An array must allocate memory for each of its N elements, resulting in O(N) space complexity.'
  },
  {
    id: 'arr-L1-Q5',
    question: 'Which of these is a valid reason to choose an Array over a Linked List?',
    options: ['You need to frequently insert elements at the beginning', 'You don\'t know the total number of elements in advance', 'You need fast random access to elements by index', 'You have limited fragmented memory'],
    correctIndex: 2,
    explanation: 'Arrays provide O(1) random access by index, whereas Linked Lists require O(N) time to traverse to a specific index.'
  },
  {
    id: 'arr-L1-Q6',
    question: 'In JavaScript/Python, what happens if you try to push an element into an array that is "full"?',
    options: ['The program crashes', 'The array automatically resizes itself under the hood', 'It overwrites the last element', 'It ignores the new element'],
    correctIndex: 1,
    explanation: 'Dynamic arrays (like Lists in Python or Arrays in JS) automatically allocate a larger block of memory and copy elements over when they run out of space.'
  },
  {
    id: 'arr-L1-Q7',
    question: 'How do you find the length of an array in JavaScript?',
    options: ['arr.length()', 'arr.size', 'arr.length', 'len(arr)'],
    correctIndex: 2,
    explanation: 'In JavaScript, length is a property (not a method), accessed via `arr.length`.'
  }
];

const arraysLevel7: QuizQuestion[] = [
  {
    id: 'arr-L7-Q1',
    question: 'In the Two-Pointer technique used on a sorted array, where do the pointers usually start?',
    options: ['Both at the beginning', 'One at index 0, one at index 1', 'One at the beginning, one at the end', 'Both at the end'],
    correctIndex: 2,
    explanation: 'A common Two-Pointer approach for sorted arrays places `left` at 0 and `right` at `length - 1`, moving them inward based on conditions (e.g. finding a target sum).'
  },
  {
    id: 'arr-L7-Q2',
    question: 'What is the optimal time complexity for finding if two numbers in a sorted array sum to a target?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N^2)'],
    correctIndex: 2,
    explanation: 'Using the Two-Pointer technique from opposite ends allows you to find the pair in a single pass, which is O(N).'
  },
  {
    id: 'arr-L7-Q3',
    question: 'Which problem pattern is best suited for finding the maximum sum of any contiguous subarray of size K?',
    options: ['Two Pointers', 'Sliding Window', 'Prefix Sum', 'Binary Search'],
    correctIndex: 1,
    explanation: 'The Sliding Window technique is perfect for finding fixed-size contiguous subarray properties. You maintain a window of size K and slide it by 1 element each step.'
  },
  {
    id: 'arr-L7-Q4',
    question: 'What is a Prefix Sum array?',
    options: ['An array containing only positive numbers', 'An array where each element at index `i` is the sum of all elements from index 0 to `i`', 'An array sorted in descending order', 'An array that stores string prefixes'],
    correctIndex: 1,
    explanation: 'Prefix sum allows you to quickly calculate the sum of any subarray range `[i, j]` in O(1) time by taking `prefix[j] - prefix[i-1]`.'
  },
  {
    id: 'arr-L7-Q5',
    question: 'To reverse an array in-place, what is the space complexity?',
    options: ['O(1)', 'O(N)', 'O(log N)', 'O(N^2)'],
    correctIndex: 0,
    explanation: 'In-place algorithms modify the original array by swapping elements (e.g., using two pointers), requiring no extra memory aside from a temporary swap variable.'
  },
  {
    id: 'arr-L7-Q6',
    question: 'If you use a Hash Map to solve the "Two Sum" problem on an unsorted array, what is the trade-off compared to sorting it first?',
    options: ['It takes more time but less space', 'It takes less time but more space', 'It takes less time and less space', 'It takes more time and more space'],
    correctIndex: 1,
    explanation: 'The Hash Map approach takes O(N) time and O(N) space. Sorting first takes O(N log N) time but can use O(1) space with two pointers.'
  },
  {
    id: 'arr-L7-Q7',
    question: 'When asked to move all zeros in an array to the end while maintaining the relative order of non-zeros, what pattern works best?',
    options: ['Binary Search', 'Prefix Sum', 'Two Pointers (Fast/Slow)', 'Sliding Window'],
    correctIndex: 2,
    explanation: 'You use a slow pointer to keep track of the next available slot for a non-zero element, and a fast pointer to iterate through the array.'
  }
];

const arraysLevel15: QuizQuestion[] = [
  {
    id: 'arr-L15-Q1',
    question: 'What is Kadane\'s Algorithm used for?',
    options: ['Sorting an array', 'Finding the maximum contiguous subarray sum in O(N) time', 'Finding duplicate numbers', 'Finding the longest increasing subsequence'],
    correctIndex: 1,
    explanation: 'Kadane\'s algorithm calculates the maximum subarray sum in a single pass O(N) by keeping track of the current maximum sum ending at each position.'
  },
  {
    id: 'arr-L15-Q2',
    question: 'In the "Merge Intervals" problem, what is the necessary first step before merging?',
    options: ['Reverse the array', 'Sort the intervals based on their start times', 'Find the maximum end time', 'Convert to a Hash Map'],
    correctIndex: 1,
    explanation: 'Sorting intervals by their start times ensures that overlapping intervals are adjacent in the array, making them easy to merge in one pass.'
  },
  {
    id: 'arr-L15-Q3',
    question: 'What is the optimal time complexity to find the median of two sorted arrays of sizes M and N?',
    options: ['O(M + N)', 'O(log(M + N))', 'O(M * N)', 'O(log(min(M, N)))'],
    correctIndex: 3,
    explanation: 'By using Binary Search on the smaller array to find the correct partition point, you can achieve O(log(min(M, N))) time.'
  },
  {
    id: 'arr-L15-Q4',
    question: 'How do you solve the "Trapping Rain Water" problem in O(1) space?',
    options: ['Use a stack', 'Use Dynamic Programming arrays', 'Use Two Pointers converging from left and right', 'Use a Priority Queue'],
    correctIndex: 2,
    explanation: 'While DP arrays (leftMax and rightMax) take O(N) space, the Two Pointer approach maintains the max heights on the fly, reducing space to O(1).'
  },
  {
    id: 'arr-L15-Q5',
    question: 'What is Boyer-Moore Majority Vote Algorithm used for?',
    options: ['Finding an element that appears more than ⌊N/2⌋ times in O(N) time and O(1) space', 'Sorting votes', 'Finding the k-th largest element', 'Detecting cycles'],
    correctIndex: 0,
    explanation: 'It keeps a candidate and a counter, incrementing/decrementing as it iterates, finding the majority element efficiently without a hash map.'
  },
  {
    id: 'arr-L15-Q6',
    question: 'To find the longest consecutive sequence in an unsorted array in O(N) time, which data structure is strictly necessary?',
    options: ['Array', 'Hash Set', 'Binary Search Tree', 'Heap'],
    correctIndex: 1,
    explanation: 'A Hash Set allows O(1) lookups. You can find sequence starts by checking if `num - 1` exists, then count upwards in O(N) total time.'
  },
  {
    id: 'arr-L15-Q7',
    question: 'In a 2D Array (Matrix), what is the time complexity of a standard Binary Search if the matrix is completely sorted row by row?',
    options: ['O(R * C)', 'O(R + C)', 'O(log(R * C))', 'O(R * log C)'],
    correctIndex: 2,
    explanation: 'You can treat the 2D matrix as a flat 1D array using division and modulo for indices, allowing a pure binary search in O(log(Rows * Cols)).'
  }
];

// Map your custom quiz levels here! 
// Key is the topic ID, Value is an array of QuizQuestion arrays (each array is a level).
export const USER_PROVIDED_QUIZZES: Partial<Record<DsaCategory, QuizQuestion[][]>> = {
  arrays: [
    arraysLevel1, // Level 1
    [], // Level 2
    [], // Level 3
    [], // Level 4
    [], // Level 5
    [], // Level 6
    arraysLevel7, // Level 7
    [], // Level 8
    [], // Level 9
    [], // Level 10
    [], // Level 11
    [], // Level 12
    [], // Level 13
    [], // Level 14
    arraysLevel15, // Level 15
    // You can add up to 20 levels!
  ]
};

// --- SYSTEM GENERATOR (DO NOT EDIT) ---

const generatePlaceholderQuestions = (topicId: string, levelNum: number, diff: string): QuizQuestion[] => {
  return Array.from({ length: 7 }, (_, i) => ({
    id: `placeholder-${topicId}-L${levelNum}-Q${i+1}`,
    question: `[${diff}] ${topicId.toUpperCase()} Level ${levelNum} Question ${i + 1}. Update quizContent.ts to replace this placeholder.`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctIndex: 0,
    explanation: 'This is a placeholder explanation.'
  }));
};

const getDifficulty = (level: number): Difficulty => {
  if (level <= 6) return 'Beginner';
  if (level <= 14) return 'Intermediate';
  return 'Advanced';
};

const formatTopicName = (topic: string) => {
  return topic.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};

/**
 * Builds the final array of exactly 20 QuizSets per topic.
 */
export const buildQuizSetsForTopic = (topicId: DsaCategory): QuizSet[] => {
  const sets: QuizSet[] = [];
  const userLevels = USER_PROVIDED_QUIZZES[topicId] || [];

  for (let i = 1; i <= 20; i++) {
    const diff = getDifficulty(i);
    let questions = userLevels[i - 1];
    
    // If user didn't provide a valid level (array of 7 questions), use placeholders
    if (!questions || questions.length === 0) {
      questions = generatePlaceholderQuestions(topicId, i, diff);
    }

    sets.push({
      id: `${topicId}-quiz-L${i}`,
      topicId: topicId,
      title: `${formatTopicName(topicId)} Level ${i}`,
      subtitle: `${diff} Level • 7 Questions`,
      questionCount: questions.length,
      difficulty: diff,
      questions: questions
    });
  }

  return sets;
};

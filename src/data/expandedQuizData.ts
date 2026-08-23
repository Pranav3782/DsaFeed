import { QuizSet } from '../types';

export const EXPANDED_QUIZ_SETS: QuizSet[] = [
  {
    "id": "quiz-arrays-set-1",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 1",
    "subtitle": "Beginner questions for Arrays (Set 1/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-arrays-set-1-q1",
        "question": "What is an array?",
        "options": [
          "A collection of elements stored in an ordered structure",
          "A structure that can only store one value",
          "A tree where every node has two children",
          "A collection that always stores key-value pairs"
        ],
        "correctIndex": 0,
        "explanation": "An array stores multiple elements in an ordered sequence, usually allowing access by index."
      },
      {
        "id": "quiz-arrays-set-1-q2",
        "question": "In a zero-indexed array, what is the index of the first element?",
        "options": [
          "1",
          "-1",
          "0",
          "2"
        ],
        "correctIndex": 2,
        "explanation": "Zero-indexed arrays begin counting positions from 0."
      },
      {
        "id": "quiz-arrays-set-1-q3",
        "question": "Which of these is an array of integers?",
        "options": [
          "\"10, 20, 30\"",
          "[10, 20, 30]",
          "{10, 20, 30}",
          "(10, 20, 30)"
        ],
        "correctIndex": 1,
        "explanation": "[10, 20, 30] represents an array in many programming languages."
      },
      {
        "id": "quiz-arrays-set-1-q4",
        "question": "If an array has 5 elements and uses zero-based indexing, what is the last valid index?",
        "options": [
          "5",
          "4",
          "3",
          "6"
        ],
        "correctIndex": 1,
        "explanation": "The last index is always length - 1 for a zero-indexed array."
      },
      {
        "id": "quiz-arrays-set-1-q5",
        "question": "What does array indexing allow you to do?",
        "options": [
          "Access an element using its position",
          "Automatically sort the array",
          "Delete the entire array",
          "Convert the array into a graph"
        ],
        "correctIndex": 0,
        "explanation": "An index identifies the position of an element so it can be accessed directly."
      },
      {
        "id": "quiz-arrays-set-1-q6",
        "question": "Which value is stored at index 2 in [5, 8, 12, 20]?",
        "options": [
          "5",
          "8",
          "20",
          "12"
        ],
        "correctIndex": 3,
        "explanation": "The indexes are 0→5, 1→8, 2→12, and 3→20."
      },
      {
        "id": "quiz-arrays-set-1-q7",
        "question": "What is the length of [3, 7, 9, 11]?",
        "options": [
          "3",
          "4",
          "5",
          "2"
        ],
        "correctIndex": 1,
        "explanation": "There are four elements in the array."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-2",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 2",
    "subtitle": "Beginner questions for Arrays (Set 2/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-arrays-set-2-q1",
        "question": "Which operation usually takes O(1) time in an array?",
        "options": [
          "Searching for an unknown value",
          "Sorting the array",
          "Accessing an element by index",
          "Finding the maximum without extra information"
        ],
        "correctIndex": 2,
        "explanation": "Array indexing directly calculates the element's memory position, making access O(1)."
      },
      {
        "id": "quiz-arrays-set-2-q2",
        "question": "What is the result of [2, 4, 6][1] in a zero-indexed array?",
        "options": [
          "2",
          "4",
          "6",
          "1"
        ],
        "correctIndex": 1,
        "explanation": "Index 1 refers to the second element, which is 4."
      },
      {
        "id": "quiz-arrays-set-2-q3",
        "question": "What does traversing an array mean?",
        "options": [
          "Visiting its elements one by one",
          "Deleting every element",
          "Only accessing the last element",
          "Sorting it automatically"
        ],
        "correctIndex": 0,
        "explanation": "Traversal means processing each element of the array, usually from beginning to end."
      },
      {
        "id": "quiz-arrays-set-2-q4",
        "question": "Which loop is commonly suitable for traversing an array?",
        "options": [
          "A loop that never changes its condition",
          "A loop that visits each valid index",
          "A loop that only runs once",
          "A loop that accesses random memory only"
        ],
        "correctIndex": 1,
        "explanation": "A loop can iterate from index 0 through the last valid index."
      },
      {
        "id": "quiz-arrays-set-2-q5",
        "question": "What happens when you access an index outside an array's valid range?",
        "options": [
          "The array automatically grows in every language",
          "The first element is returned",
          "An out-of-bounds error or invalid access can occur",
          "The array is automatically sorted"
        ],
        "correctIndex": 2,
        "explanation": "Accessing an invalid index can cause an error or undefined behavior depending on the language."
      },
      {
        "id": "quiz-arrays-set-2-q6",
        "question": "What is the sum of [2, 5, 3]?",
        "options": [
          "8",
          "10",
          "12",
          "7"
        ],
        "correctIndex": 1,
        "explanation": "2 + 5 + 3 = 10."
      },
      {
        "id": "quiz-arrays-set-2-q7",
        "question": "Which operation generally requires visiting all elements to calculate the sum?",
        "options": [
          "Index access",
          "Array declaration",
          "Summation",
          "Reading the length"
        ],
        "correctIndex": 2,
        "explanation": "To calculate a sum, each element normally needs to be processed."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-3",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 3",
    "subtitle": "Beginner questions for Arrays (Set 3/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-arrays-set-3-q1",
        "question": "What is the time complexity of finding a specific value by scanning an unsorted array of n elements?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(1)",
          "O(n log n)"
        ],
        "correctIndex": 1,
        "explanation": "In the worst case, every element must be checked, giving O(n)."
      },
      {
        "id": "quiz-arrays-set-3-q2",
        "question": "What is the maximum value in [4, 9, 2, 7]?",
        "options": [
          "7",
          "2",
          "9",
          "4"
        ],
        "correctIndex": 2,
        "explanation": "9 is larger than every other element in the array."
      },
      {
        "id": "quiz-arrays-set-3-q3",
        "question": "Which approach can find the minimum value in an unsorted array?",
        "options": [
          "Initialize the minimum and scan all elements",
          "Only inspect the last element",
          "Always choose the middle element",
          "Use binary search without sorting"
        ],
        "correctIndex": 0,
        "explanation": "A linear scan keeps track of the smallest value encountered."
      },
      {
        "id": "quiz-arrays-set-3-q4",
        "question": "What is the time complexity of finding the maximum element by scanning an array?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n²)"
        ],
        "correctIndex": 0,
        "explanation": "Every element may need to be examined, so the operation is O(n)."
      },
      {
        "id": "quiz-arrays-set-3-q5",
        "question": "What is the result of reversing [1, 2, 3]?",
        "options": [
          "[1, 3, 2]",
          "[2, 1, 3]",
          "[3, 2, 1]",
          "[3, 1, 2]"
        ],
        "correctIndex": 2,
        "explanation": "Reversing changes the order from first-to-last into last-to-first."
      },
      {
        "id": "quiz-arrays-set-3-q6",
        "question": "Which technique can reverse an array in place?",
        "options": [
          "Use two pointers from opposite ends",
          "Use binary search",
          "Only inspect the middle element",
          "Use a frequency table"
        ],
        "correctIndex": 0,
        "explanation": "Two pointers can swap corresponding elements while moving toward the center."
      },
      {
        "id": "quiz-arrays-set-3-q7",
        "question": "What does an in-place array operation generally mean?",
        "options": [
          "It modifies the array using little or no additional array-sized storage",
          "It always creates a second full array",
          "It only reads the array",
          "It sorts the array automatically"
        ],
        "correctIndex": 0,
        "explanation": "In-place algorithms modify the existing structure while keeping extra memory small."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-4",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 4",
    "subtitle": "Beginner questions for Arrays (Set 4/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-arrays-set-4-q1",
        "question": "What is the result of inserting an element at the beginning of a typical fixed-size array when space is available?",
        "options": [
          "Existing elements may need to shift right",
          "Nothing needs to move",
          "Only the last element moves to index 0",
          "The array automatically becomes sorted"
        ],
        "correctIndex": 0,
        "explanation": "Elements after the insertion position generally need to shift right to create space."
      },
      {
        "id": "quiz-arrays-set-4-q2",
        "question": "What is the typical time complexity of inserting at the beginning of an array of n elements?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(1)",
          "O(n log n)"
        ],
        "correctIndex": 1,
        "explanation": "Up to n existing elements may need to be shifted."
      },
      {
        "id": "quiz-arrays-set-4-q3",
        "question": "What is the typical time complexity of appending to a dynamic array when resizing is not required?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n²)"
        ],
        "correctIndex": 2,
        "explanation": "If unused capacity exists, the new element can usually be placed directly at the end."
      },
      {
        "id": "quiz-arrays-set-4-q4",
        "question": "Why can dynamic arrays occasionally require O(n) time for append?",
        "options": [
          "They may need to resize and copy elements",
          "They always search for the largest value",
          "They sort themselves",
          "They always reverse before appending"
        ],
        "correctIndex": 0,
        "explanation": "When capacity is exhausted, a larger memory block may be allocated and existing elements copied."
      },
      {
        "id": "quiz-arrays-set-4-q5",
        "question": "What is the main difference between a fixed-size array and a dynamic array?",
        "options": [
          "A dynamic array can grow when necessary",
          "A fixed-size array cannot store numbers",
          "A dynamic array cannot be indexed",
          "A fixed-size array is always sorted"
        ],
        "correctIndex": 0,
        "explanation": "Dynamic arrays can resize their underlying storage when capacity is exceeded."
      },
      {
        "id": "quiz-arrays-set-4-q6",
        "question": "Which operation is usually expensive in an array when performed near the beginning?",
        "options": [
          "Accessing index 0",
          "Reading its length",
          "Inserting an element",
          "Reading index 1"
        ],
        "correctIndex": 2,
        "explanation": "Insertion near the beginning requires shifting many existing elements."
      },
      {
        "id": "quiz-arrays-set-4-q7",
        "question": "What is a common advantage of arrays over linked lists?",
        "options": [
          "Fast random access by index",
          "Constant-time insertion everywhere",
          "No memory allocation is required",
          "They never need resizing"
        ],
        "correctIndex": 0,
        "explanation": "Arrays provide O(1) indexed access, while linked-list access generally requires traversal."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-5",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 5",
    "subtitle": "Beginner questions for Arrays (Set 5/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-arrays-set-5-q1",
        "question": "Which condition describes an array sorted in ascending order?",
        "options": [
          "Every element is greater than the next",
          "Each element is less than or equal to the next",
          "Only the first element is smallest",
          "Elements must alternate between high and low"
        ],
        "correctIndex": 1,
        "explanation": "In ascending order, each element is less than or equal to the element after it."
      },
      {
        "id": "quiz-arrays-set-5-q2",
        "question": "Which array is sorted in ascending order?",
        "options": [
          "[9, 7, 5, 3]",
          "[1, 4, 4, 8]",
          "[5, 2, 7, 9]",
          "[8, 3, 4, 1]"
        ],
        "correctIndex": 1,
        "explanation": "1 ≤ 4 ≤ 4 ≤ 8, so the array is sorted in ascending order."
      },
      {
        "id": "quiz-arrays-set-5-q3",
        "question": "What does removing an element from the middle of an array usually require?",
        "options": [
          "Shifting later elements left",
          "Shifting earlier elements right only",
          "Sorting the entire array",
          "Creating a graph"
        ],
        "correctIndex": 0,
        "explanation": "After removal, later elements commonly shift left to fill the empty position."
      },
      {
        "id": "quiz-arrays-set-5-q4",
        "question": "What is the time complexity of removing an element from the beginning of an array of n elements?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "correctIndex": 2,
        "explanation": "Most or all remaining elements may need to shift left."
      },
      {
        "id": "quiz-arrays-set-5-q5",
        "question": "Which method can find duplicate values in an array?",
        "options": [
          "Use a set or frequency structure",
          "Only inspect the first element",
          "Use binary search on an unsorted array",
          "Always reverse the array"
        ],
        "correctIndex": 0,
        "explanation": "A set can record previously seen values and identify repetitions."
      },
      {
        "id": "quiz-arrays-set-5-q6",
        "question": "What does a set provide that is useful for duplicate detection?",
        "options": [
          "Tracking whether a value has already appeared",
          "Automatically finding the median in every language",
          "Guaranteeing sorted array storage",
          "Constant-time sorting"
        ],
        "correctIndex": 0,
        "explanation": "A set stores unique values and can quickly test whether a value has been seen."
      },
      {
        "id": "quiz-arrays-set-5-q7",
        "question": "Which array contains a duplicate?",
        "options": [
          "[1, 2, 3, 4]",
          "[5, 6, 7, 8]",
          "[2, 4, 2, 9]",
          "[10, 11, 12, 13]"
        ],
        "correctIndex": 2,
        "explanation": "The value 2 occurs twice."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-6",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 6",
    "subtitle": "Beginner questions for Arrays (Set 6/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-arrays-set-6-q1",
        "question": "What is the prefix sum at index i typically defined as?",
        "options": [
          "The sum of elements from index 0 through i",
          "Only the value at index i",
          "The largest element before i",
          "The number of elements after i"
        ],
        "correctIndex": 0,
        "explanation": "A prefix sum stores cumulative sums from the beginning through each position."
      },
      {
        "id": "quiz-arrays-set-6-q2",
        "question": "For [2, 3, 5], what is the prefix sum array?",
        "options": [
          "[2, 5, 10]",
          "[2, 3, 5]",
          "[10, 8, 5]",
          "[0, 2, 5]"
        ],
        "correctIndex": 0,
        "explanation": "The cumulative sums are 2, 2+3=5, and 2+3+5=10."
      },
      {
        "id": "quiz-arrays-set-6-q3",
        "question": "What is a common use of prefix sums?",
        "options": [
          "Answering range-sum queries efficiently",
          "Sorting an array in O(1)",
          "Finding a graph's shortest path",
          "Building a linked list"
        ],
        "correctIndex": 0,
        "explanation": "Prefix sums allow a range sum to be calculated using subtraction of cumulative sums."
      },
      {
        "id": "quiz-arrays-set-6-q4",
        "question": "If prefix[i] stores the sum from 0 through i, how can the sum from l through r be calculated when l > 0?",
        "options": [
          "prefix[r] - prefix[l - 1]",
          "prefix[l] + prefix[r]",
          "prefix[l - 1] - prefix[r]",
          "prefix[r] / prefix[l]"
        ],
        "correctIndex": 0,
        "explanation": "Subtracting the sum before l removes all elements outside the desired range."
      },
      {
        "id": "quiz-arrays-set-6-q5",
        "question": "What is the result of rotating [1,2,3,4] right by one position?",
        "options": [
          "[4,1,2,3]",
          "[2,3,4,1]",
          "[1,4,3,2]",
          "[3,4,1,2]"
        ],
        "correctIndex": 0,
        "explanation": "The last element moves to the front while all others shift right."
      },
      {
        "id": "quiz-arrays-set-6-q6",
        "question": "Which technique can rotate an array in place using reversals?",
        "options": [
          "Reverse-based rotation",
          "Binary search",
          "Frequency counting only",
          "Tree traversal"
        ],
        "correctIndex": 0,
        "explanation": "Array rotation can be performed in place by applying a sequence of reversals."
      },
      {
        "id": "quiz-arrays-set-6-q7",
        "question": "What is the main benefit of using two pointers on an array?",
        "options": [
          "It can solve certain problems with O(1) extra space",
          "It always sorts the array",
          "It makes every problem O(1)",
          "It removes the need for indexing"
        ],
        "correctIndex": 0,
        "explanation": "Two-pointer methods often process arrays efficiently without creating additional arrays."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-7",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 7",
    "subtitle": "Intermediate questions for Arrays (Set 7/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-arrays-set-7-q1",
        "question": "What is the time complexity of binary search on a sorted array?",
        "options": [
          "O(n)",
          "O(n²)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 2,
        "explanation": "Binary search repeatedly halves the search interval, resulting in O(log n) time."
      },
      {
        "id": "quiz-arrays-set-7-q2",
        "question": "Why does binary search require a sorted array?",
        "options": [
          "It uses ordering to decide which half can be discarded",
          "It cannot access array indexes",
          "Sorting makes every access O(1)",
          "It only works with even-sized arrays"
        ],
        "correctIndex": 0,
        "explanation": "The sorted order tells binary search whether to continue on the left or right side."
      },
      {
        "id": "quiz-arrays-set-7-q3",
        "question": "What is a common safe formula for calculating the midpoint between low and high?",
        "options": [
          "(low + high) / 2",
          "low + (high - low) / 2",
          "high + (low - high)",
          "low * high / 2"
        ],
        "correctIndex": 1,
        "explanation": "low + (high - low) / 2 avoids potential integer overflow from low + high."
      },
      {
        "id": "quiz-arrays-set-7-q4",
        "question": "In binary search, what should happen when array[mid] equals the target?",
        "options": [
          "Continue searching left only",
          "Continue searching right only",
          "The target has been found",
          "Discard the entire array"
        ],
        "correctIndex": 2,
        "explanation": "When the middle value equals the target, the search succeeds."
      },
      {
        "id": "quiz-arrays-set-7-q5",
        "question": "For sorted array [1,3,5,7,9], which element is examined first using standard binary search?",
        "options": [
          "1",
          "3",
          "5",
          "9"
        ],
        "correctIndex": 2,
        "explanation": "The middle element is 5."
      },
      {
        "id": "quiz-arrays-set-7-q6",
        "question": "What is the worst-case number of binary-search iterations approximately related to?",
        "options": [
          "n",
          "log₂(n)",
          "n²",
          "2n"
        ],
        "correctIndex": 1,
        "explanation": "Each iteration halves the search space, so the number of iterations grows logarithmically."
      },
      {
        "id": "quiz-arrays-set-7-q7",
        "question": "What happens if binary search is applied incorrectly to an unsorted array?",
        "options": [
          "It may return an incorrect result",
          "It automatically sorts the array",
          "It becomes O(1)",
          "It always finds the target"
        ],
        "correctIndex": 0,
        "explanation": "Without sorted order, the half-discarding logic is not valid."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-8",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 8",
    "subtitle": "Intermediate questions for Arrays (Set 8/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-arrays-set-8-q1",
        "question": "What is the main idea behind the Kadane's algorithm?",
        "options": [
          "Find a maximum-sum contiguous subarray",
          "Find a minimum spanning tree",
          "Sort an array using a heap",
          "Find duplicate strings"
        ],
        "correctIndex": 0,
        "explanation": "Kadane's algorithm finds the maximum sum among all contiguous subarrays."
      },
      {
        "id": "quiz-arrays-set-8-q2",
        "question": "What is the maximum subarray sum of [-2,1,-3,4,-1,2,1,-5,4]?",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "correctIndex": 2,
        "explanation": "The subarray [4,-1,2,1] has the maximum sum of 6."
      },
      {
        "id": "quiz-arrays-set-8-q3",
        "question": "What key decision does Kadane's algorithm make at each element?",
        "options": [
          "Whether to extend the current subarray or start a new one",
          "Whether to sort the remaining elements",
          "Whether to use binary search",
          "Whether to reverse the entire array"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm compares continuing the current sum with starting fresh at the current element."
      },
      {
        "id": "quiz-arrays-set-8-q4",
        "question": "What is the time complexity of Kadane's algorithm?",
        "options": [
          "O(n²)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "correctIndex": 2,
        "explanation": "Kadane's algorithm scans the array once."
      },
      {
        "id": "quiz-arrays-set-8-q5",
        "question": "What extra space does the basic Kadane's algorithm require?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n²)"
        ],
        "correctIndex": 2,
        "explanation": "Only a few running variables are needed."
      },
      {
        "id": "quiz-arrays-set-8-q6",
        "question": "For an array containing only negative numbers, what should a correct maximum-subarray algorithm generally return?",
        "options": [
          "Always zero",
          "The largest negative element",
          "The smallest negative element",
          "The array length"
        ],
        "correctIndex": 1,
        "explanation": "If non-empty subarrays are required, the best choice is the least negative element."
      },
      {
        "id": "quiz-arrays-set-8-q7",
        "question": "Which problem is most directly related to Kadane's algorithm?",
        "options": [
          "Maximum sum contiguous subarray",
          "Find the kth smallest element using a heap",
          "Detect a cycle in a graph",
          "Build a trie"
        ],
        "correctIndex": 0,
        "explanation": "Kadane's algorithm is specifically associated with the maximum subarray problem."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-9",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 9",
    "subtitle": "Intermediate questions for Arrays (Set 9/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-arrays-set-9-q1",
        "question": "What is the two-pointer solution commonly used for the Two Sum problem when the array is sorted?",
        "options": [
          "Start at both ends and move based on the current sum",
          "Always use the middle element",
          "Sort repeatedly inside the loop",
          "Use recursion for every pair"
        ],
        "correctIndex": 0,
        "explanation": "If the sum is too small, move the left pointer right; if too large, move the right pointer left."
      },
      {
        "id": "quiz-arrays-set-9-q2",
        "question": "What is the expected time complexity of Two Sum using a hash map?",
        "options": [
          "O(n²)",
          "O(n)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 1,
        "explanation": "Each value can be checked against a stored complement in expected O(1) time."
      },
      {
        "id": "quiz-arrays-set-9-q3",
        "question": "What is the main trade-off of using a hash map for Two Sum instead of sorting and using two pointers?",
        "options": [
          "The hash-map method typically uses O(n) extra space",
          "The hash-map method cannot find pairs",
          "Sorting always takes O(1)",
          "Two pointers require O(n²) space"
        ],
        "correctIndex": 0,
        "explanation": "The hash map provides faster expected lookup but requires additional storage."
      },
      {
        "id": "quiz-arrays-set-9-q4",
        "question": "Which problem asks for the product of all elements except the current index without using division?",
        "options": [
          "Product of Array Except Self",
          "Maximum Subarray",
          "Binary Search",
          "Merge Intervals"
        ],
        "correctIndex": 0,
        "explanation": "Product of Array Except Self combines prefix and suffix products."
      },
      {
        "id": "quiz-arrays-set-9-q5",
        "question": "What is the typical time complexity of an optimal Product of Array Except Self solution?",
        "options": [
          "O(n)",
          "O(n²)",
          "O(log n)",
          "O(2ⁿ)"
        ],
        "correctIndex": 0,
        "explanation": "Prefix and suffix products can be computed using a constant number of linear passes."
      },
      {
        "id": "quiz-arrays-set-9-q6",
        "question": "Which technique can solve the Dutch National Flag problem in one pass with constant extra space?",
        "options": [
          "Three pointers",
          "Binary search",
          "Dynamic programming table",
          "Hash map only"
        ],
        "correctIndex": 0,
        "explanation": "Three pointers partition the array into regions for the three values."
      },
      {
        "id": "quiz-arrays-set-9-q7",
        "question": "What is the goal of the Dutch National Flag problem?",
        "options": [
          "Partition an array containing three categories into grouped regions",
          "Find a shortest path",
          "Find the longest increasing subsequence",
          "Build a binary search tree"
        ],
        "correctIndex": 0,
        "explanation": "The classic problem partitions 0s, 1s, and 2s without using a general-purpose sorting algorithm."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-10",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 10",
    "subtitle": "Intermediate questions for Arrays (Set 10/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-arrays-set-10-q1",
        "question": "What is the key idea behind the majority element problem when using Boyer-Moore voting?",
        "options": [
          "Maintain a candidate and cancel opposing elements",
          "Sort the array after every comparison",
          "Use binary search for each value",
          "Store every possible subarray"
        ],
        "correctIndex": 0,
        "explanation": "Boyer-Moore maintains a candidate and a counter, effectively canceling different elements."
      },
      {
        "id": "quiz-arrays-set-10-q2",
        "question": "What is the extra space complexity of Boyer-Moore majority voting?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n²)"
        ],
        "correctIndex": 2,
        "explanation": "Only a candidate and count are required."
      },
      {
        "id": "quiz-arrays-set-10-q3",
        "question": "A majority element is usually defined as an element appearing more than what fraction of the array?",
        "options": [
          "One-third",
          "One-half",
          "One-fourth",
          "Two-thirds"
        ],
        "correctIndex": 1,
        "explanation": "A majority element appears more than n/2 times."
      },
      {
        "id": "quiz-arrays-set-10-q4",
        "question": "Which technique is commonly used to merge overlapping intervals after sorting them?",
        "options": [
          "Scan intervals while tracking the current merged interval",
          "Binary search each endpoint independently",
          "Use DFS on every interval",
          "Reverse every interval"
        ],
        "correctIndex": 0,
        "explanation": "After sorting by start time, a single scan can merge overlapping ranges."
      },
      {
        "id": "quiz-arrays-set-10-q5",
        "question": "For intervals [1,3] and [2,6], what is their merged interval?",
        "options": [
          "[1,2]",
          "[2,3]",
          "[1,6]",
          "[3,6]"
        ],
        "correctIndex": 2,
        "explanation": "Because the intervals overlap, they combine into [1,6]."
      },
      {
        "id": "quiz-arrays-set-10-q6",
        "question": "What is the dominant time complexity of merging intervals when sorting is required?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(log n)",
          "O(n²)"
        ],
        "correctIndex": 1,
        "explanation": "Sorting n intervals generally costs O(n log n), followed by an O(n) scan."
      },
      {
        "id": "quiz-arrays-set-10-q7",
        "question": "Which array pattern is especially suited to prefix/suffix reasoning?",
        "options": [
          "Finding products or sums excluding the current position",
          "Accessing one known index",
          "Reading the array length",
          "Declaring an empty array"
        ],
        "correctIndex": 0,
        "explanation": "Prefix and suffix information lets each position incorporate information from both sides efficiently."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-11",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 11",
    "subtitle": "Intermediate questions for Arrays (Set 11/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-arrays-set-11-q1",
        "question": "What is the purpose of a monotonic stack in array problems?",
        "options": [
          "Maintain elements in increasing or decreasing order to answer directional queries",
          "Always sort the entire array",
          "Store only duplicate values",
          "Perform binary search"
        ],
        "correctIndex": 0,
        "explanation": "Monotonic stacks efficiently solve problems such as next greater element."
      },
      {
        "id": "quiz-arrays-set-11-q2",
        "question": "What problem asks for the next element to the right that is greater than each current element?",
        "options": [
          "Next Greater Element",
          "Maximum Subarray",
          "Two Sum",
          "Product Except Self"
        ],
        "correctIndex": 0,
        "explanation": "Next Greater Element is a classic monotonic-stack problem."
      },
      {
        "id": "quiz-arrays-set-11-q3",
        "question": "What is the typical time complexity of solving Next Greater Element using a monotonic stack?",
        "options": [
          "O(n²)",
          "O(log n)",
          "O(n)",
          "O(2ⁿ)"
        ],
        "correctIndex": 2,
        "explanation": "Each element is pushed and popped at most once, resulting in O(n)."
      },
      {
        "id": "quiz-arrays-set-11-q4",
        "question": "In a monotonic decreasing stack for Next Greater Element, when should elements be popped?",
        "options": [
          "When the current element is greater than the stack's top",
          "When the current element is smaller than every array element",
          "Only at the end",
          "Never"
        ],
        "correctIndex": 0,
        "explanation": "A larger current element resolves the next-greater relationship for smaller elements on the stack."
      },
      {
        "id": "quiz-arrays-set-11-q5",
        "question": "Which technique is commonly used to solve the Sliding Window Maximum efficiently?",
        "options": [
          "Deque",
          "Binary search tree only",
          "Union-Find",
          "Recursion without state"
        ],
        "correctIndex": 0,
        "explanation": "A monotonic deque keeps potential maximum candidates for the current window."
      },
      {
        "id": "quiz-arrays-set-11-q6",
        "question": "What is the time complexity of an optimal Sliding Window Maximum solution using a deque?",
        "options": [
          "O(n²)",
          "O(n log n)",
          "O(n)",
          "O(log n)"
        ],
        "correctIndex": 2,
        "explanation": "Each element enters and leaves the deque at most once."
      },
      {
        "id": "quiz-arrays-set-11-q7",
        "question": "Why does a monotonic deque remove smaller elements from the back when processing a larger new value?",
        "options": [
          "Those smaller elements can never become the maximum while the larger value remains in the window",
          "They are always duplicates",
          "The deque cannot contain more than two elements",
          "Smaller values are invalid array elements"
        ],
        "correctIndex": 0,
        "explanation": "A larger newer value dominates smaller values behind it for all relevant future windows."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-12",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 12",
    "subtitle": "Intermediate questions for Arrays (Set 12/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-arrays-set-12-q1",
        "question": "What is the key idea of finding the longest consecutive sequence in an unsorted array in expected O(n) time?",
        "options": [
          "Use a hash set to identify sequence starts",
          "Sort after every insertion",
          "Use binary search without sorting",
          "Use a stack for every number"
        ],
        "correctIndex": 0,
        "explanation": "A set enables constant-expected-time membership checks and lets us start counting only at sequence beginnings."
      },
      {
        "id": "quiz-arrays-set-12-q2",
        "question": "For [100,4,200,1,3,2], what is the longest consecutive sequence length?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctIndex": 2,
        "explanation": "The sequence 1,2,3,4 has length 4."
      },
      {
        "id": "quiz-arrays-set-12-q3",
        "question": "How can you identify whether a number starts a consecutive sequence in the hash-set approach?",
        "options": [
          "Check whether num - 1 is absent",
          "Check whether num + 2 is absent",
          "Check whether num is the maximum",
          "Check whether num is at index 0"
        ],
        "correctIndex": 0,
        "explanation": "If num-1 is absent, num is the beginning of a possible consecutive sequence."
      },
      {
        "id": "quiz-arrays-set-12-q4",
        "question": "What problem involves finding the kth largest element without necessarily sorting the entire array?",
        "options": [
          "Kth Largest Element",
          "Longest Consecutive Sequence",
          "Maximum Subarray",
          "Rotate Array"
        ],
        "correctIndex": 0,
        "explanation": "The kth largest problem can be solved using approaches such as a heap or quickselect."
      },
      {
        "id": "quiz-arrays-set-12-q5",
        "question": "What is the average expected time complexity of Quickselect for finding the kth smallest element?",
        "options": [
          "O(n)",
          "O(n²) always",
          "O(log n)",
          "O(n log² n)"
        ],
        "correctIndex": 0,
        "explanation": "Quickselect has expected linear time, although its worst case can be quadratic."
      },
      {
        "id": "quiz-arrays-set-12-q6",
        "question": "What is the worst-case time complexity of basic Quickselect?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n²)",
          "O(1)"
        ],
        "correctIndex": 2,
        "explanation": "Poor pivot choices can leave highly unbalanced partitions repeatedly, resulting in O(n²)."
      },
      {
        "id": "quiz-arrays-set-12-q7",
        "question": "What is a key advantage of Quickselect over sorting for finding one order statistic?",
        "options": [
          "It can avoid fully sorting all elements",
          "It always has O(1) runtime",
          "It requires a binary tree",
          "It guarantees O(log n) time"
        ],
        "correctIndex": 0,
        "explanation": "Quickselect partitions only as needed to locate the desired position."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-13",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 13",
    "subtitle": "Intermediate questions for Arrays (Set 13/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-arrays-set-13-q1",
        "question": "What is the main idea behind the trapping rain water problem?",
        "options": [
          "Calculate water held between bars based on the maximum heights on both sides",
          "Sort the heights and add them",
          "Find the array's median",
          "Multiply all heights"
        ],
        "correctIndex": 0,
        "explanation": "Water above a position depends on the smaller of the highest bars to its left and right."
      },
      {
        "id": "quiz-arrays-set-13-q2",
        "question": "Which approach can solve Trapping Rain Water in O(n) time and O(1) extra space?",
        "options": [
          "Two pointers",
          "Sorting",
          "Nested loops only",
          "Binary search"
        ],
        "correctIndex": 0,
        "explanation": "Two pointers maintain left and right maximum heights while scanning inward."
      },
      {
        "id": "quiz-arrays-set-13-q3",
        "question": "In the two-pointer rainwater approach, why can the side with the smaller current height be processed?",
        "options": [
          "Its trapped water is determined by the smaller boundary once the opposite side is sufficiently high",
          "The smaller side is always the global maximum",
          "It never needs a maximum value",
          "The array is guaranteed sorted"
        ],
        "correctIndex": 0,
        "explanation": "The lower boundary limits the water level, allowing that side's contribution to be finalized."
      },
      {
        "id": "quiz-arrays-set-13-q4",
        "question": "What is the maximum area problem in an array of heights asking you to find?",
        "options": [
          "Two lines that form a container holding the maximum amount of water",
          "The largest single height",
          "The longest increasing sequence",
          "The smallest pair of values"
        ],
        "correctIndex": 0,
        "explanation": "The area is determined by the distance between two lines and the smaller of their heights."
      },
      {
        "id": "quiz-arrays-set-13-q5",
        "question": "Which technique solves Container With Most Water in O(n)?",
        "options": [
          "Two pointers",
          "Dynamic programming table",
          "Merge sort",
          "Depth-first search"
        ],
        "correctIndex": 0,
        "explanation": "Starting from both ends and moving the shorter side produces a linear solution."
      },
      {
        "id": "quiz-arrays-set-13-q6",
        "question": "In Container With Most Water, why is the shorter line moved inward?",
        "options": [
          "Moving the taller line cannot improve the limiting height while width decreases",
          "The shorter line is always the final answer",
          "The taller line cannot be accessed",
          "Moving either pointer gives exactly the same result"
        ],
        "correctIndex": 0,
        "explanation": "The shorter height limits the area, so keeping it while reducing width cannot improve the current area."
      },
      {
        "id": "quiz-arrays-set-13-q7",
        "question": "What is the time complexity of the two-pointer solution for Container With Most Water?",
        "options": [
          "O(n²)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "correctIndex": 2,
        "explanation": "Each pointer moves inward at most n times, giving O(n)."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-14",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 14",
    "subtitle": "Advanced questions for Arrays (Set 14/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-arrays-set-14-q1",
        "question": "What is the key challenge in finding the median of two sorted arrays efficiently?",
        "options": [
          "Finding a partition without fully merging the arrays",
          "Sorting both arrays repeatedly",
          "Finding the maximum of only the first array",
          "Counting only odd values"
        ],
        "correctIndex": 0,
        "explanation": "The optimal approach partitions the two arrays so that left and right halves contain the correct number of elements."
      },
      {
        "id": "quiz-arrays-set-14-q2",
        "question": "What is the target time complexity for the classic median of two sorted arrays problem?",
        "options": [
          "O(m+n)",
          "O(m log n)",
          "O(log(min(m,n)))",
          "O(mn)"
        ],
        "correctIndex": 2,
        "explanation": "The optimal binary-partition solution runs in logarithmic time based on the smaller array."
      },
      {
        "id": "quiz-arrays-set-14-q3",
        "question": "Why is binary search performed on the smaller array in the median partition approach?",
        "options": [
          "It minimizes the search range and simplifies boundary handling",
          "The larger array cannot be indexed",
          "The smaller array is always sorted more strongly",
          "Binary search only works on arrays with fewer than 10 elements"
        ],
        "correctIndex": 0,
        "explanation": "Searching the smaller array gives the best logarithmic bound and reduces partition complexity."
      },
      {
        "id": "quiz-arrays-set-14-q4",
        "question": "What is the purpose of checking the partition boundary values in the two-array median algorithm?",
        "options": [
          "To ensure every left-side element is less than or equal to every right-side element",
          "To sort both arrays",
          "To count duplicates",
          "To find the largest array"
        ],
        "correctIndex": 0,
        "explanation": "Correct partitioning requires max(left side) ≤ min(right side)."
      },
      {
        "id": "quiz-arrays-set-14-q5",
        "question": "Which technique is commonly used to solve 4Sum more efficiently than checking every quadruple?",
        "options": [
          "Sorting plus nested two-pointer searches",
          "Binary search on an unsorted array",
          "DFS over every integer",
          "Only checking adjacent values"
        ],
        "correctIndex": 0,
        "explanation": "Sorting enables duplicate handling and two-pointer searches after fixing two elements."
      },
      {
        "id": "quiz-arrays-set-14-q6",
        "question": "What is a common way to avoid duplicate quadruplets in 4Sum?",
        "options": [
          "Skip equal values at the same decision level",
          "Never sort the array",
          "Always use the first four elements",
          "Remove all negative numbers"
        ],
        "correctIndex": 0,
        "explanation": "Skipping repeated values after sorting prevents generating identical quadruplets."
      },
      {
        "id": "quiz-arrays-set-14-q7",
        "question": "Why can sorting be useful before solving many k-sum array problems?",
        "options": [
          "It enables two pointers, pruning, and systematic duplicate handling",
          "It makes every operation O(1)",
          "It removes the need for memory",
          "It guarantees there are no duplicates"
        ],
        "correctIndex": 0,
        "explanation": "Sorted order enables directional pointer movement and useful pruning conditions."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-15",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 15",
    "subtitle": "Advanced questions for Arrays (Set 15/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-arrays-set-15-q1",
        "question": "What is the core idea behind the maximum product subarray problem?",
        "options": [
          "Track both maximum and minimum products because a negative value can swap their roles",
          "Track only the maximum sum",
          "Sort the array and multiply the middle values",
          "Ignore negative values"
        ],
        "correctIndex": 0,
        "explanation": "A negative number can turn the smallest negative product into the largest positive product."
      },
      {
        "id": "quiz-arrays-set-15-q2",
        "question": "Why must both current maximum and minimum products be tracked?",
        "options": [
          "A negative element can turn a large negative product into a large positive product",
          "Arrays require two variables by definition",
          "The minimum is always the final answer",
          "It avoids reading the array"
        ],
        "correctIndex": 0,
        "explanation": "The sign-changing effect of negative numbers makes the minimum product important."
      },
      {
        "id": "quiz-arrays-set-15-q3",
        "question": "What happens to the running product state when encountering zero in Maximum Product Subarray?",
        "options": [
          "The current product chain effectively resets",
          "Zero is ignored completely",
          "The entire array is sorted",
          "The maximum is permanently set to zero"
        ],
        "correctIndex": 0,
        "explanation": "A zero makes a product zero and separates possible subarrays on either side."
      },
      {
        "id": "quiz-arrays-set-15-q4",
        "question": "Which problem can be solved using a prefix-product and suffix-product comparison?",
        "options": [
          "Maximum product subarray",
          "Binary search",
          "Array traversal",
          "Finding the array length"
        ],
        "correctIndex": 0,
        "explanation": "Product relationships can be reasoned about through prefix and suffix products, although the standard maximum-product solution uses running states."
      },
      {
        "id": "quiz-arrays-set-15-q5",
        "question": "What is the main idea behind finding the longest increasing subsequence using an O(n log n) approach?",
        "options": [
          "Maintain the smallest possible tail value for subsequences of different lengths",
          "Enumerate every subsequence",
          "Sort the entire array and return its length",
          "Use only the maximum element"
        ],
        "correctIndex": 0,
        "explanation": "The tails array maintains optimal ending values and uses binary search to update them."
      },
      {
        "id": "quiz-arrays-set-15-q6",
        "question": "What does the tails array represent in the O(n log n) LIS algorithm?",
        "options": [
          "The smallest possible ending value for an increasing subsequence of each length",
          "The original array sorted completely",
          "The maximum value seen at each index",
          "All subsequences explicitly"
        ],
        "correctIndex": 0,
        "explanation": "For each subsequence length, tails stores the best smallest ending value found so far."
      },
      {
        "id": "quiz-arrays-set-15-q7",
        "question": "What is the time complexity of the optimized LIS length algorithm?",
        "options": [
          "O(n²)",
          "O(n log n)",
          "O(log n)",
          "O(2ⁿ)"
        ],
        "correctIndex": 1,
        "explanation": "Each element uses binary search to update the tails array, resulting in O(n log n)."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-16",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 16",
    "subtitle": "Advanced questions for Arrays (Set 16/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-arrays-set-16-q1",
        "question": "What is the main challenge in the Maximum Sum Circular Subarray problem?",
        "options": [
          "The optimal subarray may wrap from the end to the beginning",
          "The array must always be sorted",
          "Only positive values are allowed",
          "The array contains strings"
        ],
        "correctIndex": 0,
        "explanation": "Circular structure means the best subarray can cross the boundary between the last and first elements."
      },
      {
        "id": "quiz-arrays-set-16-q2",
        "question": "How can the circular maximum subarray problem be related to the minimum subarray?",
        "options": [
          "Maximum circular sum can be total sum minus minimum subarray sum",
          "Minimum sum is always the answer",
          "Maximum sum equals minimum sum",
          "Minimum subarray is irrelevant"
        ],
        "correctIndex": 0,
        "explanation": "Removing the minimum middle segment leaves the best wrapping prefix-plus-suffix segment."
      },
      {
        "id": "quiz-arrays-set-16-q3",
        "question": "What special case must be handled in Maximum Sum Circular Subarray?",
        "options": [
          "When all elements are negative",
          "When the array contains exactly one positive value",
          "When the array length is even",
          "When values are already sorted"
        ],
        "correctIndex": 0,
        "explanation": "Using total - minimum would incorrectly produce zero for an all-negative array, so the normal maximum must be returned."
      },
      {
        "id": "quiz-arrays-set-16-q4",
        "question": "What problem involves finding the shortest contiguous subarray whose sum is at least a target when all values are positive?",
        "options": [
          "Minimum Size Subarray Sum",
          "Longest Increasing Subsequence",
          "Median of Two Arrays",
          "Maximum Product Subarray"
        ],
        "correctIndex": 0,
        "explanation": "Positive values allow a sliding-window approach for this problem."
      },
      {
        "id": "quiz-arrays-set-16-q5",
        "question": "Why does the sliding-window solution for Minimum Size Subarray Sum work efficiently when all numbers are positive?",
        "options": [
          "Expanding increases the sum and shrinking decreases it predictably",
          "Negative values cancel automatically",
          "The array is sorted",
          "Every window has the same sum"
        ],
        "correctIndex": 0,
        "explanation": "Positive values provide the monotonic behavior required for two-pointer shrinking and expansion."
      },
      {
        "id": "quiz-arrays-set-16-q6",
        "question": "What changes if negative numbers are allowed in a subarray-sum-at-least-target problem?",
        "options": [
          "A simple sliding window may no longer work",
          "The problem becomes O(1)",
          "Sorting solves every case directly",
          "The target becomes irrelevant"
        ],
        "correctIndex": 0,
        "explanation": "Negative values can decrease the sum when the window expands, breaking the required monotonic property."
      },
      {
        "id": "quiz-arrays-set-16-q7",
        "question": "Which data structure is useful for shortest subarray with sum at least K when negative numbers are allowed?",
        "options": [
          "Monotonic deque with prefix sums",
          "Simple stack only",
          "Binary search without prefix sums",
          "Frequency array only"
        ],
        "correctIndex": 0,
        "explanation": "Prefix sums combined with a monotonic deque can solve the problem in linear time."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-17",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 17",
    "subtitle": "Advanced questions for Arrays (Set 17/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-arrays-set-17-q1",
        "question": "What is the main idea behind the maximum XOR pair problem?",
        "options": [
          "Choose two numbers whose bitwise XOR is maximized",
          "Find the maximum arithmetic sum",
          "Sort numbers numerically and multiply them",
          "Find the longest increasing sequence"
        ],
        "correctIndex": 0,
        "explanation": "The objective is to maximize the bitwise XOR value of a pair."
      },
      {
        "id": "quiz-arrays-set-17-q2",
        "question": "Which data structure can efficiently solve maximum XOR queries using bit prefixes?",
        "options": [
          "Binary trie",
          "Queue",
          "Linked list",
          "Min-heap only"
        ],
        "correctIndex": 0,
        "explanation": "A binary trie stores numbers by bits and allows choosing opposite bits greedily."
      },
      {
        "id": "quiz-arrays-set-17-q3",
        "question": "Why does the maximum-XOR trie approach prefer the opposite bit at each position?",
        "options": [
          "Different bits produce 1 in XOR, and higher bits have greater value",
          "Equal bits always produce larger XOR",
          "Lower bits are ignored",
          "Opposite bits always represent smaller numbers"
        ],
        "correctIndex": 0,
        "explanation": "XOR becomes 1 when bits differ, and setting a higher-order XOR bit to 1 is more valuable."
      },
      {
        "id": "quiz-arrays-set-17-q4",
        "question": "What is the time complexity of inserting n numbers into a binary trie with B bits each?",
        "options": [
          "O(nB)",
          "O(n²)",
          "O(log n)",
          "O(B²)"
        ],
        "correctIndex": 0,
        "explanation": "Each number traverses B bit levels, giving O(nB)."
      },
      {
        "id": "quiz-arrays-set-17-q5",
        "question": "What is a common challenge when solving subarray XOR problems?",
        "options": [
          "Recognizing that prefix XOR can transform subarray XOR into a relationship between two prefixes",
          "XOR cannot be computed incrementally",
          "All XOR values must be sorted",
          "Negative numbers make XOR undefined"
        ],
        "correctIndex": 0,
        "explanation": "Prefix XOR has a cancellation property similar to prefix sums."
      },
      {
        "id": "quiz-arrays-set-17-q6",
        "question": "If prefixXor[r] XOR prefixXor[l-1] is computed, what does it represent?",
        "options": [
          "The XOR of elements from l through r",
          "The sum from l through r",
          "The maximum value from l through r",
          "The number of elements from l through r"
        ],
        "correctIndex": 0,
        "explanation": "XORing the two prefixes cancels the elements before l."
      },
      {
        "id": "quiz-arrays-set-17-q7",
        "question": "Which property makes prefix XOR useful?",
        "options": [
          "x XOR x equals 0",
          "x XOR x always equals x",
          "XOR always produces the larger operand",
          "XOR is equivalent to addition"
        ],
        "correctIndex": 0,
        "explanation": "Identical values cancel under XOR, enabling prefix-based range calculations."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-18",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 18",
    "subtitle": "Advanced questions for Arrays (Set 18/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-arrays-set-18-q1",
        "question": "What is the core idea of the Floyd cycle detection approach when applied to certain array-as-function problems?",
        "options": [
          "Treat values as pointers and use slow and fast movement",
          "Sort the array repeatedly",
          "Use a queue for every element",
          "Always compare adjacent values"
        ],
        "correctIndex": 0,
        "explanation": "Some array problems can be modeled as a linked structure where each value points to another index."
      },
      {
        "id": "quiz-arrays-set-18-q2",
        "question": "Which classic array problem can be modeled as cycle detection when values point to indexes?",
        "options": [
          "Find the duplicate number",
          "Maximum subarray",
          "Rotate array",
          "Merge intervals"
        ],
        "correctIndex": 0,
        "explanation": "Under the problem's constraints, duplicate values create a cycle in the implicit functional graph."
      },
      {
        "id": "quiz-arrays-set-18-q3",
        "question": "What is the key advantage of Floyd's cycle detection for Find the Duplicate Number?",
        "options": [
          "O(n) time and O(1) extra space",
          "O(n²) time and O(n) space",
          "O(log n) time always",
          "It requires sorting"
        ],
        "correctIndex": 0,
        "explanation": "The technique detects the implicit cycle without modifying the array or using a set."
      },
      {
        "id": "quiz-arrays-set-18-q4",
        "question": "In Floyd's algorithm, what is the movement speed of the slow pointer relative to the fast pointer?",
        "options": [
          "Slow moves one step and fast moves two",
          "Both move one step",
          "Slow moves two and fast moves one",
          "Fast moves three and slow moves zero"
        ],
        "correctIndex": 0,
        "explanation": "The two pointers move at different speeds so that the fast pointer eventually catches the slow pointer inside a cycle."
      },
      {
        "id": "quiz-arrays-set-18-q5",
        "question": "What is the purpose of the second phase of Floyd's algorithm for finding the duplicate?",
        "options": [
          "Find the cycle entrance",
          "Sort the array",
          "Find the maximum value",
          "Count all elements"
        ],
        "correctIndex": 0,
        "explanation": "After detecting a meeting point, resetting one pointer allows the cycle entrance to be located."
      },
      {
        "id": "quiz-arrays-set-18-q6",
        "question": "Which condition is essential for modeling Find the Duplicate Number as a cycle?",
        "options": [
          "Each value can be interpreted as a valid next index",
          "The array must be sorted",
          "All values must be unique",
          "The array must contain strings"
        ],
        "correctIndex": 0,
        "explanation": "The mapping from index to value must define valid transitions through the array."
      },
      {
        "id": "quiz-arrays-set-18-q7",
        "question": "Why is modifying the input array not necessary in Floyd's duplicate-number solution?",
        "options": [
          "The duplicate is discovered through the implicit cycle structure",
          "The duplicate is always at index zero",
          "Sorting happens automatically",
          "The array is copied into a second array"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm uses pointer movement rather than marking or changing array elements."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-19",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 19",
    "subtitle": "Advanced questions for Arrays (Set 19/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-arrays-set-19-q1",
        "question": "What is the main challenge in solving a range-update problem efficiently when many updates affect intervals?",
        "options": [
          "Applying each update individually may lead to O(nq), so a difference-array technique can be used",
          "Arrays cannot support updates",
          "Sorting solves all range updates",
          "Binary search automatically applies updates"
        ],
        "correctIndex": 0,
        "explanation": "A difference array can record boundary changes and reconstruct final values in linear time after all updates."
      },
      {
        "id": "quiz-arrays-set-19-q2",
        "question": "For a range update adding x to every element from l through r, what is typically added at l in a difference array?",
        "options": [
          "x",
          "-x",
          "0",
          "The current maximum"
        ],
        "correctIndex": 0,
        "explanation": "Adding x at l starts the effect of the range update."
      },
      {
        "id": "quiz-arrays-set-19-q3",
        "question": "What is typically added at r+1 for a difference-array range update when that position exists?",
        "options": [
          "-x",
          "x",
          "2x",
          "0 only"
        ],
        "correctIndex": 0,
        "explanation": "Adding -x at r+1 ends the update's effect after index r."
      },
      {
        "id": "quiz-arrays-set-19-q4",
        "question": "How are the final values reconstructed from a difference array?",
        "options": [
          "Take a prefix sum of the difference array",
          "Sort the difference array",
          "Take a suffix product",
          "Use binary search"
        ],
        "correctIndex": 0,
        "explanation": "The cumulative sum reconstructs the effect of all range updates."
      },
      {
        "id": "quiz-arrays-set-19-q5",
        "question": "What is the time complexity of applying q range updates using a difference array and then reconstructing n final values?",
        "options": [
          "O(n + q)",
          "O(nq)",
          "O(log(nq))",
          "O(q²)"
        ],
        "correctIndex": 0,
        "explanation": "Each update takes O(1) to record and the final reconstruction takes O(n)."
      },
      {
        "id": "quiz-arrays-set-19-q6",
        "question": "When would a Fenwick tree or segment tree be preferable to a simple difference array?",
        "options": [
          "When updates and queries need to be interleaved dynamically",
          "When there are no queries",
          "When only one final update exists",
          "When the array has exactly two elements"
        ],
        "correctIndex": 0,
        "explanation": "Fenwick and segment trees support dynamic updates and queries without requiring all updates to be processed first."
      },
      {
        "id": "quiz-arrays-set-19-q7",
        "question": "What is the main advantage of a segment tree over a prefix-sum array for dynamic range-sum queries?",
        "options": [
          "It can support both updates and range queries efficiently",
          "It uses no memory",
          "It always has O(1) queries",
          "It automatically sorts values"
        ],
        "correctIndex": 0,
        "explanation": "Segment trees support updates and range queries in logarithmic time."
      }
    ]
  },
  {
    "id": "quiz-arrays-set-20",
    "topicId": "arrays",
    "title": "Arrays Quiz - Level 20",
    "subtitle": "Advanced questions for Arrays (Set 20/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-arrays-set-20-q1",
        "question": "What is the core idea behind the O(n log n) solution to the Count of Smaller Numbers After Self problem using a Fenwick tree?",
        "options": [
          "Coordinate-compress values and query frequencies while processing from right to left",
          "Sort the original array and discard indexes",
          "Use only Kadane's algorithm",
          "Perform binary search independently for every possible value"
        ],
        "correctIndex": 0,
        "explanation": "Processing from right to left lets a Fenwick tree store seen values and answer how many are smaller."
      },
      {
        "id": "quiz-arrays-set-20-q2",
        "question": "Why is coordinate compression useful when array values are extremely large or sparse?",
        "options": [
          "It maps relevant values to a compact rank range suitable for indexed structures",
          "It changes all values to zero",
          "It removes duplicates permanently",
          "It guarantees O(1) sorting"
        ],
        "correctIndex": 0,
        "explanation": "Compression preserves relative ordering while allowing efficient indexing over a smaller domain."
      },
      {
        "id": "quiz-arrays-set-20-q3",
        "question": "Which data structure can support point updates and prefix queries in O(log n)?",
        "options": [
          "Fenwick tree",
          "Stack",
          "Queue",
          "Unsorted linked list"
        ],
        "correctIndex": 0,
        "explanation": "A Fenwick tree, also called a Binary Indexed Tree, supports both operations in logarithmic time."
      },
      {
        "id": "quiz-arrays-set-20-q4",
        "question": "Which data structure is generally more flexible than a Fenwick tree for arbitrary associative range queries and range updates?",
        "options": [
          "Segment tree",
          "Stack",
          "Simple array",
          "Queue"
        ],
        "correctIndex": 0,
        "explanation": "Segment trees support a broader range of query and update combinations, often with lazy propagation."
      },
      {
        "id": "quiz-arrays-set-20-q5",
        "question": "What is lazy propagation used for in a segment tree?",
        "options": [
          "Defer range updates until the affected nodes need to be pushed down",
          "Sort the entire array lazily",
          "Remove all leaf nodes",
          "Convert a tree into a linked list"
        ],
        "correctIndex": 0,
        "explanation": "Lazy propagation stores pending range updates so large ranges can be updated without visiting every element immediately."
      },
      {
        "id": "quiz-arrays-set-20-q6",
        "question": "What is the typical complexity of a range update and range query with lazy propagation in a segment tree?",
        "options": [
          "O(log n) per operation",
          "O(n²) per operation",
          "O(1) for every possible query",
          "O(n log n) per operation"
        ],
        "correctIndex": 0,
        "explanation": "Lazy propagation allows relevant segment-tree nodes to be updated or queried in logarithmic time."
      },
      {
        "id": "quiz-arrays-set-20-q7",
        "question": "When choosing between a simple array, prefix sums, Fenwick tree, and segment tree, what should primarily guide the decision?",
        "options": [
          "The exact combination of updates, queries, constraints, and required operations",
          "Always choose the segment tree",
          "Always choose the simplest syntax",
          "Always choose the structure with the most memory usage"
        ],
        "correctIndex": 0,
        "explanation": "The best structure depends on whether the problem needs static queries, point updates, range updates, ordering, or other operations."
      }
    ]
  },
  {
    "id": "quiz-strings-set-1",
    "topicId": "strings",
    "title": "Strings Quiz - Level 1",
    "subtitle": "Beginner questions for Strings (Set 1/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-strings-set-1-q1",
        "question": "What is a string?",
        "options": [
          "A sequence of characters",
          "A collection of only integers",
          "A binary tree",
          "A key-value data structure"
        ],
        "correctIndex": 0,
        "explanation": "A string is an ordered sequence of characters used to represent text."
      },
      {
        "id": "quiz-strings-set-1-q2",
        "question": "Which of the following is a string?",
        "options": [
          "42",
          "true",
          "\"42\"",
          "[4, 2]"
        ],
        "correctIndex": 2,
        "explanation": "\"42\" represents text, while 42 is a numeric value."
      },
      {
        "id": "quiz-strings-set-1-q3",
        "question": "In most programming languages, what is the index of the first character in a string?",
        "options": [
          "1",
          "0",
          "-1",
          "2"
        ],
        "correctIndex": 1,
        "explanation": "Most commonly used programming languages use zero-based indexing."
      },
      {
        "id": "quiz-strings-set-1-q4",
        "question": "What is the length of the string \"HELLO\"?",
        "options": [
          "4",
          "6",
          "3",
          "5"
        ],
        "correctIndex": 3,
        "explanation": "\"HELLO\" contains five characters."
      },
      {
        "id": "quiz-strings-set-1-q5",
        "question": "What character is at index 2 in \"HELLO\"?",
        "options": [
          "E",
          "L",
          "O",
          "H"
        ],
        "correctIndex": 1,
        "explanation": "The indexes are H=0, E=1, L=2, L=3, O=4."
      },
      {
        "id": "quiz-strings-set-1-q6",
        "question": "What is an empty string?",
        "options": [
          "\" \"",
          "\"0\"",
          "\"\"",
          "null"
        ],
        "correctIndex": 2,
        "explanation": "An empty string contains zero characters and is commonly represented as \"\"."
      },
      {
        "id": "quiz-strings-set-1-q7",
        "question": "What does string concatenation mean?",
        "options": [
          "Sorting characters",
          "Joining strings together",
          "Deleting characters",
          "Counting vowels"
        ],
        "correctIndex": 1,
        "explanation": "Concatenation combines two or more strings into a single string."
      }
    ]
  },
  {
    "id": "quiz-strings-set-2",
    "topicId": "strings",
    "title": "Strings Quiz - Level 2",
    "subtitle": "Beginner questions for Strings (Set 2/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-strings-set-2-q1",
        "question": "What is the last valid index of a string with length n?",
        "options": [
          "n",
          "n + 1",
          "n - 1",
          "n / 2"
        ],
        "correctIndex": 2,
        "explanation": "With zero-based indexing, the final position is length minus one."
      },
      {
        "id": "quiz-strings-set-2-q2",
        "question": "What is the result of concatenating \"Hello\" and \"World\" without a space?",
        "options": [
          "\"HelloWorld\"",
          "\"Hello World\"",
          "\"WorldHello\"",
          "\"Hello-World\""
        ],
        "correctIndex": 0,
        "explanation": "Concatenation directly joins the characters of the two strings."
      },
      {
        "id": "quiz-strings-set-2-q3",
        "question": "Which of these is a character rather than a multi-character string?",
        "options": [
          "\"AB\"",
          "\"Hello\"",
          "\"A\"",
          "\"123\""
        ],
        "correctIndex": 2,
        "explanation": "\"A\" contains exactly one character."
      },
      {
        "id": "quiz-strings-set-2-q4",
        "question": "What does traversing a string mean?",
        "options": [
          "Visiting its characters one by one",
          "Deleting every character",
          "Sorting the string automatically",
          "Changing every character to a number"
        ],
        "correctIndex": 0,
        "explanation": "Traversal means processing the characters sequentially."
      },
      {
        "id": "quiz-strings-set-2-q5",
        "question": "What is the reverse of \"CAT\"?",
        "options": [
          "\"ACT\"",
          "\"TAC\"",
          "\"CTA\"",
          "\"CAT\""
        ],
        "correctIndex": 1,
        "explanation": "Reading the characters from right to left gives \"TAC\"."
      },
      {
        "id": "quiz-strings-set-2-q6",
        "question": "Which operation checks whether two strings contain exactly the same characters in the same order?",
        "options": [
          "String equality",
          "String reversal",
          "String splitting",
          "String sorting"
        ],
        "correctIndex": 0,
        "explanation": "String equality compares corresponding characters and their order."
      },
      {
        "id": "quiz-strings-set-2-q7",
        "question": "Which pair contains exactly equal strings?",
        "options": [
          "\"cat\" and \"Cat\"",
          "\"hello\" and \"Hello\"",
          "\"dog\" and \"dog\"",
          "\"abc\" and \"abd\""
        ],
        "correctIndex": 2,
        "explanation": "The two strings are identical in both characters and case."
      }
    ]
  },
  {
    "id": "quiz-strings-set-3",
    "topicId": "strings",
    "title": "Strings Quiz - Level 3",
    "subtitle": "Beginner questions for Strings (Set 3/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-strings-set-3-q1",
        "question": "What is a substring?",
        "options": [
          "A contiguous sequence of characters from a string",
          "A character that does not exist",
          "A sorted string",
          "A completely separate string"
        ],
        "correctIndex": 0,
        "explanation": "A substring consists of consecutive characters from the original string."
      },
      {
        "id": "quiz-strings-set-3-q2",
        "question": "Which is a substring of \"HELLO\"?",
        "options": [
          "\"HL\"",
          "\"EL\"",
          "\"EO\"",
          "\"HO\""
        ],
        "correctIndex": 1,
        "explanation": "\"EL\" appears consecutively in \"HELLO\"."
      },
      {
        "id": "quiz-strings-set-3-q3",
        "question": "What is a prefix of a string?",
        "options": [
          "A sequence that starts at the first character",
          "A sequence that ends at the last character",
          "A random collection of characters",
          "A reversed sequence"
        ],
        "correctIndex": 0,
        "explanation": "A prefix begins at the first character of the string."
      },
      {
        "id": "quiz-strings-set-3-q4",
        "question": "Which is a prefix of \"PROGRAM\"?",
        "options": [
          "\"GRAM\"",
          "\"RAM\"",
          "\"PRO\"",
          "\"OG\""
        ],
        "correctIndex": 2,
        "explanation": "\"PRO\" consists of the first three characters."
      },
      {
        "id": "quiz-strings-set-3-q5",
        "question": "What is a suffix?",
        "options": [
          "A sequence that starts at index 0",
          "A sequence that ends at the final character",
          "A sequence containing only vowels",
          "A reversed prefix"
        ],
        "correctIndex": 1,
        "explanation": "A suffix is a substring that ends at the last character."
      },
      {
        "id": "quiz-strings-set-3-q6",
        "question": "Which is a suffix of \"CODING\"?",
        "options": [
          "\"COD\"",
          "\"DIN\"",
          "\"ING\"",
          "\"CO\""
        ],
        "correctIndex": 2,
        "explanation": "\"ING\" ends at the final character of \"CODING\"."
      },
      {
        "id": "quiz-strings-set-3-q7",
        "question": "Which operation can separate \"apple,banana,orange\" using commas?",
        "options": [
          "Splitting",
          "Reversing",
          "Hashing",
          "Indexing"
        ],
        "correctIndex": 0,
        "explanation": "Splitting a string using a delimiter separates it into smaller strings."
      }
    ]
  },
  {
    "id": "quiz-strings-set-4",
    "topicId": "strings",
    "title": "Strings Quiz - Level 4",
    "subtitle": "Beginner questions for Strings (Set 4/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-strings-set-4-q1",
        "question": "Which string is a palindrome?",
        "options": [
          "\"hello\"",
          "\"level\"",
          "\"coding\"",
          "\"world\""
        ],
        "correctIndex": 1,
        "explanation": "\"level\" reads the same from left to right and right to left."
      },
      {
        "id": "quiz-strings-set-4-q2",
        "question": "How many vowels are in \"APPLE\"?",
        "options": [
          "1",
          "3",
          "2",
          "4"
        ],
        "correctIndex": 2,
        "explanation": "The vowels are A and E, giving a total of two."
      },
      {
        "id": "quiz-strings-set-4-q3",
        "question": "Which approach can count vowels in a string?",
        "options": [
          "Check every character against a set of vowels",
          "Check only the first character",
          "Sort the string first",
          "Check only the string length"
        ],
        "correctIndex": 0,
        "explanation": "Traversing the string and checking each character allows every vowel to be counted."
      },
      {
        "id": "quiz-strings-set-4-q4",
        "question": "What does converting a string to lowercase generally do?",
        "options": [
          "Removes spaces",
          "Reverses the string",
          "Changes uppercase letters to lowercase",
          "Sorts the characters"
        ],
        "correctIndex": 2,
        "explanation": "Lowercase conversion changes letters such as A, B, and C into a, b, and c."
      },
      {
        "id": "quiz-strings-set-4-q5",
        "question": "Which is the lowercase form of \"HELLO\"?",
        "options": [
          "\"Hello\"",
          "\"hello\"",
          "\"HELLO\"",
          "\"hELLO\""
        ],
        "correctIndex": 1,
        "explanation": "All five letters are converted to lowercase."
      },
      {
        "id": "quiz-strings-set-4-q6",
        "question": "What is the most direct way to check whether a string is a palindrome?",
        "options": [
          "Compare characters from both ends toward the center",
          "Sort the characters",
          "Count its vowels",
          "Compare only its first and last characters"
        ],
        "correctIndex": 0,
        "explanation": "Two pointers can compare corresponding characters from opposite ends."
      },
      {
        "id": "quiz-strings-set-4-q7",
        "question": "What should happen when matching characters are found at both ends during a palindrome check?",
        "options": [
          "Move both pointers toward the center",
          "Stop immediately",
          "Sort the remaining characters",
          "Restart from index zero"
        ],
        "correctIndex": 0,
        "explanation": "Matching outer characters allow the two pointers to move inward."
      }
    ]
  },
  {
    "id": "quiz-strings-set-5",
    "topicId": "strings",
    "title": "Strings Quiz - Level 5",
    "subtitle": "Beginner questions for Strings (Set 5/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-strings-set-5-q1",
        "question": "What is an anagram?",
        "options": [
          "A string formed by rearranging the characters of another string",
          "A string with all unique characters",
          "A string containing only vowels",
          "A reversed substring"
        ],
        "correctIndex": 0,
        "explanation": "Anagrams contain the same characters with the same frequencies but potentially different ordering."
      },
      {
        "id": "quiz-strings-set-5-q2",
        "question": "Which is an anagram of \"listen\"?",
        "options": [
          "\"silent\"",
          "\"listed\"",
          "\"linear\"",
          "\"little\""
        ],
        "correctIndex": 0,
        "explanation": "\"listen\" and \"silent\" contain exactly the same six characters."
      },
      {
        "id": "quiz-strings-set-5-q3",
        "question": "Which technique can efficiently compare character frequencies between two strings?",
        "options": [
          "Hash map or frequency array",
          "Binary search",
          "Stack reversal",
          "Tree traversal"
        ],
        "correctIndex": 0,
        "explanation": "A frequency structure stores how many times each character occurs."
      },
      {
        "id": "quiz-strings-set-5-q4",
        "question": "How many times does the character 'a' occur in \"banana\"?",
        "options": [
          "2",
          "4",
          "3",
          "1"
        ],
        "correctIndex": 2,
        "explanation": "The letter a appears three times in \"banana\"."
      },
      {
        "id": "quiz-strings-set-5-q5",
        "question": "What is the main purpose of a character frequency map?",
        "options": [
          "Count how many times each character appears",
          "Reverse the string",
          "Sort the characters automatically",
          "Find the string's memory address"
        ],
        "correctIndex": 0,
        "explanation": "A frequency map associates each character with its number of occurrences."
      },
      {
        "id": "quiz-strings-set-5-q6",
        "question": "If two strings have different lengths, can they be exact anagrams?",
        "options": [
          "Yes, always",
          "Only if they have the same first character",
          "No",
          "Only if they are sorted"
        ],
        "correctIndex": 2,
        "explanation": "Anagrams must contain exactly the same number of characters."
      },
      {
        "id": "quiz-strings-set-5-q7",
        "question": "Which pair is NOT an anagram pair?",
        "options": [
          "\"eat\" and \"tea\"",
          "\"race\" and \"care\"",
          "\"listen\" and \"silent\"",
          "\"cat\" and \"car\""
        ],
        "correctIndex": 3,
        "explanation": "\"cat\" and \"car\" differ because one contains t while the other contains r."
      }
    ]
  },
  {
    "id": "quiz-strings-set-6",
    "topicId": "strings",
    "title": "Strings Quiz - Level 6",
    "subtitle": "Beginner questions for Strings (Set 6/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-strings-set-6-q1",
        "question": "What is the time complexity of traversing a string of length n once?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n²)"
        ],
        "correctIndex": 0,
        "explanation": "Each of the n characters is processed once."
      },
      {
        "id": "quiz-strings-set-6-q2",
        "question": "What is the typical time complexity of accessing a character by index?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n²)"
        ],
        "correctIndex": 2,
        "explanation": "Indexed character access is generally constant time in common string representations."
      },
      {
        "id": "quiz-strings-set-6-q3",
        "question": "What is the worst-case time complexity of searching for a character in an unsorted string?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "correctIndex": 2,
        "explanation": "The character may occur at the end or not exist, requiring a full scan."
      },
      {
        "id": "quiz-strings-set-6-q4",
        "question": "What does string immutability mean?",
        "options": [
          "The existing string cannot be changed directly",
          "The string cannot contain numbers",
          "The string cannot be copied",
          "The string cannot be compared"
        ],
        "correctIndex": 0,
        "explanation": "An immutable string cannot have its existing characters modified in place."
      },
      {
        "id": "quiz-strings-set-6-q5",
        "question": "Why can repeated concatenation inside a loop be inefficient for immutable strings?",
        "options": [
          "A new string may be created after each concatenation",
          "Strings cannot be concatenated",
          "Loops cannot process strings",
          "Concatenation always performs sorting"
        ],
        "correctIndex": 0,
        "explanation": "Repeated creation and copying of strings can cause significant extra work."
      },
      {
        "id": "quiz-strings-set-6-q6",
        "question": "Which data structure is useful for counting characters when the character set is unknown or large?",
        "options": [
          "Hash map",
          "Stack",
          "Queue",
          "Binary heap"
        ],
        "correctIndex": 0,
        "explanation": "A hash map can dynamically store only the characters that occur."
      },
      {
        "id": "quiz-strings-set-6-q7",
        "question": "What is the extra space complexity of counting lowercase English letters using a fixed array of size 26?",
        "options": [
          "O(n)",
          "O(26), which is O(1)",
          "O(log n)",
          "O(n²)"
        ],
        "correctIndex": 1,
        "explanation": "The array always has 26 entries regardless of input length, so its auxiliary space is constant."
      }
    ]
  },
  {
    "id": "quiz-strings-set-7",
    "topicId": "strings",
    "title": "Strings Quiz - Level 7",
    "subtitle": "Intermediate questions for Strings (Set 7/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-strings-set-7-q1",
        "question": "What is the worst-case time complexity of naive pattern matching for a text of length n and pattern of length m?",
        "options": [
          "O(n + m)",
          "O(nm)",
          "O(log n)",
          "O(m)"
        ],
        "correctIndex": 1,
        "explanation": "The pattern can be compared at many positions, with up to m comparisons per position."
      },
      {
        "id": "quiz-strings-set-7-q2",
        "question": "Which algorithm uses an LPS array to efficiently search for a pattern?",
        "options": [
          "KMP",
          "Dijkstra",
          "Merge Sort",
          "Kruskal"
        ],
        "correctIndex": 0,
        "explanation": "Knuth-Morris-Pratt uses the longest-prefix-suffix information to skip unnecessary comparisons."
      },
      {
        "id": "quiz-strings-set-7-q3",
        "question": "What does LPS stand for in KMP?",
        "options": [
          "Longest Prefix which is also a Suffix",
          "Largest Pattern Sequence",
          "Longest Palindrome Search",
          "Lowest Position String"
        ],
        "correctIndex": 0,
        "explanation": "The LPS array stores the length of the longest proper prefix that is also a suffix."
      },
      {
        "id": "quiz-strings-set-7-q4",
        "question": "What is the time complexity of KMP string matching?",
        "options": [
          "O(nm)",
          "O(n²)",
          "O(n + m)",
          "O(log n)"
        ],
        "correctIndex": 2,
        "explanation": "Pattern preprocessing takes O(m) and matching takes O(n)."
      },
      {
        "id": "quiz-strings-set-7-q5",
        "question": "Why does KMP avoid restarting the pattern from the beginning after a mismatch?",
        "options": [
          "The LPS array contains information about reusable matched prefixes",
          "KMP ignores mismatches",
          "The text is automatically sorted",
          "KMP compares only the final character"
        ],
        "correctIndex": 0,
        "explanation": "LPS identifies how much of the previous match can still be useful."
      },
      {
        "id": "quiz-strings-set-7-q6",
        "question": "Which algorithm uses hashing to search for a pattern?",
        "options": [
          "Rabin-Karp",
          "KMP",
          "Heap Sort",
          "Prim"
        ],
        "correctIndex": 0,
        "explanation": "Rabin-Karp compares hash values of the pattern and text windows."
      },
      {
        "id": "quiz-strings-set-7-q7",
        "question": "What is the main issue with relying on a single hash for exact string matching?",
        "options": [
          "Hash collisions can occur",
          "Hashing cannot process strings",
          "Hash values are always sorted",
          "Hashing requires a binary tree"
        ],
        "correctIndex": 0,
        "explanation": "Different strings can theoretically produce the same hash value."
      }
    ]
  },
  {
    "id": "quiz-strings-set-8",
    "topicId": "strings",
    "title": "Strings Quiz - Level 8",
    "subtitle": "Intermediate questions for Strings (Set 8/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-strings-set-8-q1",
        "question": "What is the main idea behind the sliding-window technique for strings?",
        "options": [
          "Maintain a changing substring while moving left and right boundaries",
          "Always examine the entire string repeatedly",
          "Sort every substring",
          "Use recursion for every character"
        ],
        "correctIndex": 0,
        "explanation": "A sliding window efficiently maintains a contiguous region while processing the string."
      },
      {
        "id": "quiz-strings-set-8-q2",
        "question": "Which problem is a classic sliding-window problem?",
        "options": [
          "Longest Substring Without Repeating Characters",
          "Binary Tree Traversal",
          "Minimum Spanning Tree",
          "Merge Sort"
        ],
        "correctIndex": 0,
        "explanation": "The problem maintains a window whose characters must remain unique."
      },
      {
        "id": "quiz-strings-set-8-q3",
        "question": "For \"abcabcbb\", what is the length of the longest substring without repeating characters?",
        "options": [
          "2",
          "4",
          "3",
          "5"
        ],
        "correctIndex": 2,
        "explanation": "\"abc\" is the longest substring containing no repeated character."
      },
      {
        "id": "quiz-strings-set-8-q4",
        "question": "What data structure is commonly used to track character frequencies in a sliding window?",
        "options": [
          "Hash map",
          "Binary heap",
          "Stack only",
          "Disjoint set"
        ],
        "correctIndex": 0,
        "explanation": "A hash map can store the current frequency of each character in the window."
      },
      {
        "id": "quiz-strings-set-8-q5",
        "question": "When a sliding window violates its condition, what is commonly done?",
        "options": [
          "Move the left boundary forward",
          "Restart the entire algorithm",
          "Sort the entire string",
          "Delete the right boundary permanently"
        ],
        "correctIndex": 0,
        "explanation": "Moving the left pointer shrinks the window until the constraint is satisfied again."
      },
      {
        "id": "quiz-strings-set-8-q6",
        "question": "Why can a well-designed sliding-window solution run in O(n)?",
        "options": [
          "Each pointer usually moves forward at most n times",
          "The string is always sorted",
          "Only one character is processed",
          "Hash maps make all algorithms constant time"
        ],
        "correctIndex": 0,
        "explanation": "Although two pointers are used, their total movement remains linear."
      },
      {
        "id": "quiz-strings-set-8-q7",
        "question": "What is the longest substring without repeating characters in \"pwwkew\"?",
        "options": [
          "\"pw\"",
          "\"wke\"",
          "\"kew\"",
          "\"ww\""
        ],
        "correctIndex": 2,
        "explanation": "\"kew\" has three unique characters and is one of the longest valid substrings."
      }
    ]
  },
  {
    "id": "quiz-strings-set-9",
    "topicId": "strings",
    "title": "Strings Quiz - Level 9",
    "subtitle": "Intermediate questions for Strings (Set 9/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-strings-set-9-q1",
        "question": "What is the key idea behind grouping anagrams efficiently?",
        "options": [
          "Create a common representation for strings with identical character frequencies",
          "Use only the first character",
          "Reverse every string",
          "Compare only string lengths"
        ],
        "correctIndex": 0,
        "explanation": "Frequency signatures or sorted-character representations can identify anagram groups."
      },
      {
        "id": "quiz-strings-set-9-q2",
        "question": "Which representation can be used as a key for lowercase-English anagram grouping?",
        "options": [
          "A 26-character frequency signature",
          "The first character only",
          "The last character only",
          "The string length only"
        ],
        "correctIndex": 0,
        "explanation": "A fixed frequency signature uniquely represents the character counts."
      },
      {
        "id": "quiz-strings-set-9-q3",
        "question": "What is a subsequence?",
        "options": [
          "Characters selected while preserving relative order but not necessarily adjacency",
          "Only consecutive characters",
          "A reversed string",
          "A sorted string"
        ],
        "correctIndex": 0,
        "explanation": "A subsequence may skip characters as long as the remaining characters retain their original order."
      },
      {
        "id": "quiz-strings-set-9-q4",
        "question": "Which is a subsequence of \"ABCDE\"?",
        "options": [
          "\"AEC\"",
          "\"ACE\"",
          "\"CEA\"",
          "\"ECA\""
        ],
        "correctIndex": 1,
        "explanation": "A, C, and E appear in that order in the original string."
      },
      {
        "id": "quiz-strings-set-9-q5",
        "question": "Which technique can check whether one string is a subsequence of another?",
        "options": [
          "Two pointers",
          "Heapify",
          "Union-Find",
          "Binary tree rotation"
        ],
        "correctIndex": 0,
        "explanation": "Two pointers can scan both strings while preserving relative order."
      },
      {
        "id": "quiz-strings-set-9-q6",
        "question": "What is the time complexity of checking whether string A of length m is a subsequence of string B of length n?",
        "options": [
          "O(mn)",
          "O(log n)",
          "O(m+n)",
          "O(1)"
        ],
        "correctIndex": 2,
        "explanation": "Both strings can be scanned at most once."
      },
      {
        "id": "quiz-strings-set-9-q7",
        "question": "Which statement correctly distinguishes a substring from a subsequence?",
        "options": [
          "A substring must be contiguous, while a subsequence does not have to be",
          "A subsequence must be contiguous, while a substring does not",
          "They are always identical concepts",
          "A substring cannot contain repeated characters"
        ],
        "correctIndex": 0,
        "explanation": "Contiguity is required for substrings but not for subsequences."
      }
    ]
  },
  {
    "id": "quiz-strings-set-10",
    "topicId": "strings",
    "title": "Strings Quiz - Level 10",
    "subtitle": "Intermediate questions for Strings (Set 10/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-strings-set-10-q1",
        "question": "What is the goal of the Minimum Window Substring problem?",
        "options": [
          "Find the smallest substring containing all required characters",
          "Find the longest palindrome",
          "Find the most frequent character",
          "Sort all substrings"
        ],
        "correctIndex": 0,
        "explanation": "The goal is to find the shortest window satisfying all character requirements."
      },
      {
        "id": "quiz-strings-set-10-q2",
        "question": "What information is usually tracked in Minimum Window Substring?",
        "options": [
          "Required and current character frequencies",
          "Only the current window length",
          "Only the first character",
          "Only the number of vowels"
        ],
        "correctIndex": 0,
        "explanation": "Frequency requirements determine whether the current window is valid."
      },
      {
        "id": "quiz-strings-set-10-q3",
        "question": "When a window becomes valid in Minimum Window Substring, what should the algorithm try to do?",
        "options": [
          "Shrink it from the left while keeping it valid",
          "Immediately discard it",
          "Sort it",
          "Move both pointers to zero"
        ],
        "correctIndex": 0,
        "explanation": "Shrinking a valid window helps find the minimum possible window."
      },
      {
        "id": "quiz-strings-set-10-q4",
        "question": "What is the typical time complexity of an optimized Minimum Window Substring solution?",
        "options": [
          "O(n²)",
          "O(n)",
          "O(log n)",
          "O(2ⁿ)"
        ],
        "correctIndex": 1,
        "explanation": "Each character enters and leaves the sliding window at most once."
      },
      {
        "id": "quiz-strings-set-10-q5",
        "question": "Which problem asks whether two strings can be made equal by deleting at most one character from one side?",
        "options": [
          "Valid Palindrome II",
          "Group Anagrams",
          "KMP",
          "Longest Common Prefix"
        ],
        "correctIndex": 0,
        "explanation": "Valid Palindrome II allows one deletion while checking palindrome validity."
      },
      {
        "id": "quiz-strings-set-10-q6",
        "question": "In a palindrome-with-one-deletion problem, what is a useful strategy after finding the first mismatch?",
        "options": [
          "Try skipping either the left or right mismatching character",
          "Sort the string",
          "Delete every character",
          "Restart from the middle"
        ],
        "correctIndex": 0,
        "explanation": "Only one deletion is allowed, so the two possible deletions at the mismatch need to be considered."
      },
      {
        "id": "quiz-strings-set-10-q7",
        "question": "Which string can become a palindrome after deleting one character?",
        "options": [
          "\"abc\"",
          "\"abca\"",
          "\"abcd\"",
          "\"abcdef\""
        ],
        "correctIndex": 1,
        "explanation": "Deleting c from \"abca\" gives \"aba\", which is a palindrome."
      }
    ]
  },
  {
    "id": "quiz-strings-set-11",
    "topicId": "strings",
    "title": "Strings Quiz - Level 11",
    "subtitle": "Intermediate questions for Strings (Set 11/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-strings-set-11-q1",
        "question": "What does the Longest Common Prefix problem ask for?",
        "options": [
          "The longest starting sequence shared by all given strings",
          "The longest substring in one string",
          "The most frequent character overall",
          "The shortest suffix"
        ],
        "correctIndex": 0,
        "explanation": "The common prefix must appear at the beginning of every string."
      },
      {
        "id": "quiz-strings-set-11-q2",
        "question": "What is the longest common prefix of [\"flower\", \"flow\", \"flight\"]?",
        "options": [
          "\"fl\"",
          "\"flo\"",
          "\"flow\"",
          "\"f\""
        ],
        "correctIndex": 0,
        "explanation": "All three strings begin with \"fl\", but differ after that."
      },
      {
        "id": "quiz-strings-set-11-q3",
        "question": "Which approach can find the longest common prefix?",
        "options": [
          "Compare characters position by position across all strings",
          "Sort only the first string",
          "Count vowels",
          "Reverse every string"
        ],
        "correctIndex": 0,
        "explanation": "Character-by-character comparison stops at the first mismatch."
      },
      {
        "id": "quiz-strings-set-11-q4",
        "question": "What is the Longest Common Subsequence problem?",
        "options": [
          "Finding the longest sequence common to two strings while preserving order",
          "Finding the longest contiguous substring only",
          "Finding the most frequent character",
          "Finding the shortest prefix"
        ],
        "correctIndex": 0,
        "explanation": "LCS preserves relative order but does not require characters to be contiguous."
      },
      {
        "id": "quiz-strings-set-11-q5",
        "question": "Which technique is commonly used for LCS?",
        "options": [
          "Dynamic programming",
          "Binary search",
          "Greedy sorting only",
          "Union-Find"
        ],
        "correctIndex": 0,
        "explanation": "Dynamic programming avoids repeatedly solving the same prefix-subproblems."
      },
      {
        "id": "quiz-strings-set-11-q6",
        "question": "What is the typical time complexity of the classic LCS dynamic programming solution for strings of lengths m and n?",
        "options": [
          "O(m+n)",
          "O(mn)",
          "O(log(m+n))",
          "O(n²m²)"
        ],
        "correctIndex": 1,
        "explanation": "The DP table has m×n states, each requiring constant work."
      },
      {
        "id": "quiz-strings-set-11-q7",
        "question": "If the current characters match in an LCS DP table, what is usually done?",
        "options": [
          "Take the diagonal result and add 1",
          "Take the maximum of the entire table",
          "Reset the state to zero",
          "Ignore both characters"
        ],
        "correctIndex": 0,
        "explanation": "Matching characters can extend the LCS by one."
      }
    ]
  },
  {
    "id": "quiz-strings-set-12",
    "topicId": "strings",
    "title": "Strings Quiz - Level 12",
    "subtitle": "Intermediate questions for Strings (Set 12/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-strings-set-12-q1",
        "question": "What does edit distance measure?",
        "options": [
          "The minimum edits needed to transform one string into another",
          "The number of vowels in a string",
          "The number of substrings",
          "The length of the longest palindrome"
        ],
        "correctIndex": 0,
        "explanation": "Edit distance commonly counts insertions, deletions, and substitutions."
      },
      {
        "id": "quiz-strings-set-12-q2",
        "question": "Which technique is commonly used to solve Levenshtein edit distance?",
        "options": [
          "Dynamic programming",
          "Binary search",
          "BFS only",
          "Greedy sorting"
        ],
        "correctIndex": 0,
        "explanation": "Dynamic programming stores minimum edit costs for prefixes of both strings."
      },
      {
        "id": "quiz-strings-set-12-q3",
        "question": "What is the edit distance between \"cat\" and \"cat\"?",
        "options": [
          "1",
          "3",
          "0",
          "2"
        ],
        "correctIndex": 2,
        "explanation": "The strings are already identical, so zero edits are required."
      },
      {
        "id": "quiz-strings-set-12-q4",
        "question": "What is the edit distance between \"cat\" and \"cut\" if substitution costs one?",
        "options": [
          "0",
          "2",
          "1",
          "3"
        ],
        "correctIndex": 2,
        "explanation": "Only a single substitution, a to u, is required."
      },
      {
        "id": "quiz-strings-set-12-q5",
        "question": "What is the usual time complexity of the standard edit-distance DP for lengths m and n?",
        "options": [
          "O(m+n)",
          "O(mn)",
          "O(log n)",
          "O(n)"
        ],
        "correctIndex": 1,
        "explanation": "The DP table contains O(mn) states."
      },
      {
        "id": "quiz-strings-set-12-q6",
        "question": "If the last characters of two prefixes are equal in edit-distance DP, what is the additional cost?",
        "options": [
          "1",
          "2",
          "0",
          "The length of the string"
        ],
        "correctIndex": 2,
        "explanation": "Matching characters require no insertion, deletion, or substitution for that pair."
      },
      {
        "id": "quiz-strings-set-12-q7",
        "question": "Which three operations are normally allowed in Levenshtein distance?",
        "options": [
          "Insertion, deletion, substitution",
          "Sorting, reversing, hashing",
          "Rotation, sorting, merging",
          "Swapping, reversing, searching"
        ],
        "correctIndex": 0,
        "explanation": "Levenshtein distance uses insertion, deletion, and substitution."
      }
    ]
  },
  {
    "id": "quiz-strings-set-13",
    "topicId": "strings",
    "title": "Strings Quiz - Level 13",
    "subtitle": "Intermediate questions for Strings (Set 13/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-strings-set-13-q1",
        "question": "Which data structure is especially useful for storing many strings by shared prefixes?",
        "options": [
          "Trie",
          "Stack",
          "Heap",
          "Queue"
        ],
        "correctIndex": 0,
        "explanation": "A trie organizes strings character by character and naturally shares common prefixes."
      },
      {
        "id": "quiz-strings-set-13-q2",
        "question": "What is a major advantage of a trie for prefix queries?",
        "options": [
          "It can follow the prefix characters directly",
          "It automatically sorts all possible strings",
          "It stores only the longest string",
          "It eliminates memory usage"
        ],
        "correctIndex": 0,
        "explanation": "Each character corresponds to a path, making prefix traversal efficient."
      },
      {
        "id": "quiz-strings-set-13-q3",
        "question": "What is the typical search complexity for a trie storing strings, where L is the query length?",
        "options": [
          "O(L)",
          "O(n²)",
          "O(log n) regardless of L",
          "O(2^L)"
        ],
        "correctIndex": 0,
        "explanation": "The search follows at most one trie edge per character."
      },
      {
        "id": "quiz-strings-set-13-q4",
        "question": "What is the purpose of an end-of-word marker in a trie?",
        "options": [
          "Indicate that a complete stored word ends at that node",
          "Store the largest character",
          "Sort children",
          "Delete the node"
        ],
        "correctIndex": 0,
        "explanation": "A prefix can also be another word, so the marker distinguishes complete words."
      },
      {
        "id": "quiz-strings-set-13-q5",
        "question": "If \"app\" and \"apple\" are stored in a trie, what relationship exists between their paths?",
        "options": [
          "The path for \"app\" is a prefix of the path for \"apple\"",
          "They cannot share nodes",
          "Their paths must be completely separate",
          "The shorter word is deleted"
        ],
        "correctIndex": 0,
        "explanation": "Both words share the characters a-p-p before \"apple\" continues with l-e."
      },
      {
        "id": "quiz-strings-set-13-q6",
        "question": "What is one disadvantage of tries?",
        "options": [
          "They can use significant memory for child pointers",
          "They cannot perform prefix searches",
          "They cannot store strings",
          "They always take O(n²) search time"
        ],
        "correctIndex": 0,
        "explanation": "Nodes may contain many child references, causing substantial memory usage."
      },
      {
        "id": "quiz-strings-set-13-q7",
        "question": "Which problem is particularly suitable for a trie?",
        "options": [
          "Autocomplete",
          "Maximum subarray sum",
          "Minimum spanning tree",
          "Heap construction"
        ],
        "correctIndex": 0,
        "explanation": "Autocomplete relies heavily on finding all words sharing a given prefix."
      }
    ]
  },
  {
    "id": "quiz-strings-set-14",
    "topicId": "strings",
    "title": "Strings Quiz - Level 14",
    "subtitle": "Advanced questions for Strings (Set 14/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-strings-set-14-q1",
        "question": "What is the purpose of a rolling hash in string algorithms?",
        "options": [
          "Compute and update substring hash values efficiently",
          "Sort characters automatically",
          "Reverse strings in constant time",
          "Build a binary tree"
        ],
        "correctIndex": 0,
        "explanation": "Rolling hashes allow hashes of neighboring windows to be updated efficiently."
      },
      {
        "id": "quiz-strings-set-14-q2",
        "question": "Which algorithm commonly uses rolling hash?",
        "options": [
          "Rabin-Karp",
          "Kruskal",
          "Dijkstra",
          "Heap Sort"
        ],
        "correctIndex": 0,
        "explanation": "Rabin-Karp uses rolling hashes to compare pattern and text windows."
      },
      {
        "id": "quiz-strings-set-14-q3",
        "question": "What is a hash collision?",
        "options": [
          "Two different strings producing the same hash value",
          "Two identical strings having different lengths",
          "A string containing two equal characters",
          "A failed binary search"
        ],
        "correctIndex": 0,
        "explanation": "A collision occurs when distinct inputs map to the same hash."
      },
      {
        "id": "quiz-strings-set-14-q4",
        "question": "How can collision probability be reduced in rolling-hash algorithms?",
        "options": [
          "Use multiple independent hash functions",
          "Use only one character",
          "Avoid modular arithmetic completely",
          "Sort every substring"
        ],
        "correctIndex": 0,
        "explanation": "Multiple hashes make accidental collisions significantly less likely."
      },
      {
        "id": "quiz-strings-set-14-q5",
        "question": "What is the Z-array of a string used for?",
        "options": [
          "Store the length of the longest substring starting at each position that matches the prefix",
          "Store character frequencies only",
          "Store suffix lengths only",
          "Sort the string"
        ],
        "correctIndex": 0,
        "explanation": "Z[i] gives the length of the longest prefix match beginning at position i."
      },
      {
        "id": "quiz-strings-set-14-q6",
        "question": "What is the time complexity of the standard Z-algorithm?",
        "options": [
          "O(n²)",
          "O(n)",
          "O(log n)",
          "O(n log² n)"
        ],
        "correctIndex": 1,
        "explanation": "The Z-algorithm maintains a matching interval to avoid redundant comparisons."
      },
      {
        "id": "quiz-strings-set-14-q7",
        "question": "How can the Z-algorithm be used for pattern matching?",
        "options": [
          "Build a combined pattern, separator, and text string and inspect Z values",
          "Sort the pattern and text separately",
          "Reverse only the pattern",
          "Use binary search on character values"
        ],
        "correctIndex": 0,
        "explanation": "A Z value equal to the pattern length identifies an occurrence of the pattern in the text."
      }
    ]
  },
  {
    "id": "quiz-strings-set-15",
    "topicId": "strings",
    "title": "Strings Quiz - Level 15",
    "subtitle": "Advanced questions for Strings (Set 15/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-strings-set-15-q1",
        "question": "What is the key idea behind finding the longest palindromic substring using center expansion?",
        "options": [
          "Treat each character or gap as a potential palindrome center and expand outward",
          "Sort the string",
          "Use only the first and last characters",
          "Build a hash map of every substring"
        ],
        "correctIndex": 0,
        "explanation": "Every palindrome has a center, which can be a character or a gap between characters."
      },
      {
        "id": "quiz-strings-set-15-q2",
        "question": "Why must both odd-length and even-length centers be considered?",
        "options": [
          "Odd palindromes have one center character while even palindromes have a center gap",
          "Even strings cannot contain palindromes",
          "Odd strings cannot contain palindromes",
          "Both cases are mathematically identical"
        ],
        "correctIndex": 0,
        "explanation": "\"racecar\" has an odd center while \"abba\" has a gap between the two b characters."
      },
      {
        "id": "quiz-strings-set-15-q3",
        "question": "What is the worst-case time complexity of center expansion for Longest Palindromic Substring?",
        "options": [
          "O(n)",
          "O(n²)",
          "O(log n)",
          "O(2^n)"
        ],
        "correctIndex": 1,
        "explanation": "There can be O(n) centers, and each expansion can take O(n)."
      },
      {
        "id": "quiz-strings-set-15-q4",
        "question": "Which algorithm solves Longest Palindromic Substring in O(n) time?",
        "options": [
          "Manacher's algorithm",
          "KMP",
          "Rabin-Karp",
          "Binary search"
        ],
        "correctIndex": 0,
        "explanation": "Manacher's algorithm uses palindrome symmetry to achieve linear time."
      },
      {
        "id": "quiz-strings-set-15-q5",
        "question": "What is the main optimization used by Manacher's algorithm?",
        "options": [
          "Reuse palindrome information from previously processed positions",
          "Sort all characters first",
          "Use a hash map for every substring",
          "Check every pair independently"
        ],
        "correctIndex": 0,
        "explanation": "Manacher's algorithm uses the known palindrome radius around a center to avoid redundant expansion."
      },
      {
        "id": "quiz-strings-set-15-q6",
        "question": "What is the main trade-off of using a dynamic-programming table for palindromic substrings?",
        "options": [
          "It can use O(n²) memory",
          "It cannot identify palindromes",
          "It always takes O(1) time",
          "It requires a trie"
        ],
        "correctIndex": 0,
        "explanation": "A DP table can store whether every substring is a palindrome, requiring quadratic space."
      },
      {
        "id": "quiz-strings-set-15-q7",
        "question": "Which string has \"abba\" as its longest palindromic substring?",
        "options": [
          "\"zabbaq\"",
          "\"abcdef\"",
          "\"abcabc\"",
          "\"coding\""
        ],
        "correctIndex": 0,
        "explanation": "\"abba\" is a palindrome and appears as the central substring of \"zabbaq\"."
      }
    ]
  },
  {
    "id": "quiz-strings-set-16",
    "topicId": "strings",
    "title": "Strings Quiz - Level 16",
    "subtitle": "Advanced questions for Strings (Set 16/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-strings-set-16-q1",
        "question": "What is the main idea behind Word Break using dynamic programming?",
        "options": [
          "Determine whether prefixes of the string can be segmented into dictionary words",
          "Sort the dictionary alphabetically",
          "Reverse the input repeatedly",
          "Count vowels in each word"
        ],
        "correctIndex": 0,
        "explanation": "DP records which prefixes can be successfully formed from dictionary words."
      },
      {
        "id": "quiz-strings-set-16-q2",
        "question": "What does dp[i] commonly represent in a Word Break solution?",
        "options": [
          "Whether the prefix ending before or at position i can be segmented",
          "The number of vowels before i",
          "The largest dictionary word",
          "The alphabetic rank of character i"
        ],
        "correctIndex": 0,
        "explanation": "The DP state tracks whether a prefix can be constructed from dictionary words."
      },
      {
        "id": "quiz-strings-set-16-q3",
        "question": "Which condition can make a transition to dp[i] valid in Word Break?",
        "options": [
          "An earlier position is reachable and the substring between it and i is in the dictionary",
          "The current character is always a vowel",
          "The whole string is sorted",
          "The string length is prime"
        ],
        "correctIndex": 0,
        "explanation": "A reachable prefix followed by a dictionary word creates another reachable prefix."
      },
      {
        "id": "quiz-strings-set-16-q4",
        "question": "What is a major challenge in Word Break II compared with Word Break I?",
        "options": [
          "It must generate all valid sentences rather than only decide existence",
          "It cannot use a dictionary",
          "It only works for one-character words",
          "It requires sorting numbers"
        ],
        "correctIndex": 0,
        "explanation": "Word Break II requires enumerating every valid segmentation."
      },
      {
        "id": "quiz-strings-set-16-q5",
        "question": "Which technique is commonly combined with memoization to solve Word Break II?",
        "options": [
          "backtracking",
          "Binary search",
          "Heap sort",
          "Union-Find"
        ],
        "correctIndex": 0,
        "explanation": "Backtracking explores possible dictionary words while memoization avoids repeating the same suffix computation."
      },
      {
        "id": "quiz-strings-set-16-q6",
        "question": "Why can Word Break II have very large output even when the input is moderate?",
        "options": [
          "There can be exponentially many valid segmentations",
          "Every character creates a new array",
          "The dictionary must always contain one million words",
          "Sorting is exponential"
        ],
        "correctIndex": 0,
        "explanation": "The number of valid sentences itself can be exponential, so output size can dominate runtime."
      },
      {
        "id": "quiz-strings-set-16-q7",
        "question": "What is memoization useful for in recursive string segmentation?",
        "options": [
          "Caching results for previously solved suffixes or positions",
          "Sorting all dictionary words",
          "Removing all recursion",
          "Converting strings to integers"
        ],
        "correctIndex": 0,
        "explanation": "Caching prevents the same subproblem from being solved repeatedly."
      }
    ]
  },
  {
    "id": "quiz-strings-set-17",
    "topicId": "strings",
    "title": "Strings Quiz - Level 17",
    "subtitle": "Advanced questions for Strings (Set 17/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-strings-set-17-q1",
        "question": "What is the key challenge in finding the longest duplicate substring?",
        "options": [
          "Find the longest substring that occurs at least twice",
          "Find the longest prefix only",
          "Find the most frequent character",
          "Sort every character independently"
        ],
        "correctIndex": 0,
        "explanation": "The problem searches for the longest repeated substring, potentially with overlapping occurrences."
      },
      {
        "id": "quiz-strings-set-17-q2",
        "question": "Which combination can solve Longest Duplicate Substring efficiently using binary search on length?",
        "options": [
          "Binary search plus rolling hash",
          "DFS plus union-find",
          "Heap sort plus BFS",
          "Kruskal plus prefix sums"
        ],
        "correctIndex": 0,
        "explanation": "A candidate length can be tested by hashing all substrings of that length."
      },
      {
        "id": "quiz-strings-set-17-q3",
        "question": "Why can binary search be applied to the candidate substring length in this problem?",
        "options": [
          "If a duplicate substring exists at length L, a duplicate exists for shorter lengths",
          "Every longer substring is automatically duplicated",
          "All substring lengths are equal",
          "The string is always sorted"
        ],
        "correctIndex": 0,
        "explanation": "The existence property is monotonic: a repeated substring implies repeated shorter prefixes."
      },
      {
        "id": "quiz-strings-set-17-q4",
        "question": "What is the major correctness concern when using rolling hash for duplicate substring detection?",
        "options": [
          "Hash collisions",
          "Array indexing",
          "Palindrome centers",
          "Stack overflow only"
        ],
        "correctIndex": 0,
        "explanation": "Two different substrings can theoretically share a hash."
      },
      {
        "id": "quiz-strings-set-17-q5",
        "question": "What is the suffix array used for?",
        "options": [
          "Represent the sorted order of all suffixes of a string",
          "Store character frequencies only",
          "Store only prefixes",
          "Reverse a string in place"
        ],
        "correctIndex": 0,
        "explanation": "A suffix array contains the starting positions of suffixes arranged lexicographically."
      },
      {
        "id": "quiz-strings-set-17-q6",
        "question": "What structure is commonly used with suffix arrays to compute longest common prefixes between adjacent suffixes?",
        "options": [
          "LCP array",
          "Frequency array",
          "Heap array",
          "Difference array"
        ],
        "correctIndex": 0,
        "explanation": "The LCP array stores common-prefix lengths between neighboring suffixes in sorted order."
      },
      {
        "id": "quiz-strings-set-17-q7",
        "question": "Why are suffix arrays useful for advanced string problems?",
        "options": [
          "They provide a sorted representation of suffixes that supports substring-related queries",
          "They always use O(1) memory",
          "They eliminate all comparisons",
          "They work only for palindromes"
        ],
        "correctIndex": 0,
        "explanation": "Sorted suffixes allow many substring and lexicographic queries to be reduced to structured searches."
      }
    ]
  },
  {
    "id": "quiz-strings-set-18",
    "topicId": "strings",
    "title": "Strings Quiz - Level 18",
    "subtitle": "Advanced questions for Strings (Set 18/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-strings-set-18-q1",
        "question": "What is the main purpose of a suffix automaton?",
        "options": [
          "Represent all substrings of a string compactly",
          "Sort all characters",
          "Store only prefixes",
          "Check one palindrome"
        ],
        "correctIndex": 0,
        "explanation": "A suffix automaton compactly represents the set of substrings of a string."
      },
      {
        "id": "quiz-strings-set-18-q2",
        "question": "What is an important property of a suffix automaton built for a string of length n?",
        "options": [
          "It has O(n) states",
          "It always has O(n²) states",
          "It has exactly one state",
          "It has one state per possible alphabet string"
        ],
        "correctIndex": 0,
        "explanation": "A suffix automaton can be constructed with a linear number of states."
      },
      {
        "id": "quiz-strings-set-18-q3",
        "question": "What does each transition in a suffix automaton represent?",
        "options": [
          "Appending a character to a recognized substring",
          "Removing a character from the original string",
          "Sorting two characters",
          "Reversing the entire string"
        ],
        "correctIndex": 0,
        "explanation": "Transitions represent how recognized substrings extend by characters."
      },
      {
        "id": "quiz-strings-set-18-q4",
        "question": "What is the role of suffix links in a suffix automaton?",
        "options": [
          "They connect states to relevant suffix-related states",
          "They store the original string",
          "They sort transitions",
          "They remove duplicate characters"
        ],
        "correctIndex": 0,
        "explanation": "Suffix links connect each state to a state representing a relevant suffix class."
      },
      {
        "id": "quiz-strings-set-18-q5",
        "question": "Which problem can be solved using a suffix automaton by tracking occurrence counts?",
        "options": [
          "Finding frequently occurring substrings",
          "Sorting an integer array",
          "Finding a minimum spanning tree",
          "Balancing a heap"
        ],
        "correctIndex": 0,
        "explanation": "Occurrence information can be propagated through suffix-link relationships."
      },
      {
        "id": "quiz-strings-set-18-q6",
        "question": "Why is suffix automaton considered memory-efficient compared with explicitly storing every substring?",
        "options": [
          "It represents many substrings through shared states and transitions",
          "It stores no transitions",
          "It deletes repeated substrings",
          "It stores only one character"
        ],
        "correctIndex": 0,
        "explanation": "The automaton shares structural information among many substrings."
      },
      {
        "id": "quiz-strings-set-18-q7",
        "question": "Which advanced string structure is designed around suffix equivalence classes?",
        "options": [
          "Suffix automaton",
          "Simple stack",
          "Binary heap",
          "Fenwick tree"
        ],
        "correctIndex": 0,
        "explanation": "Suffix automata merge substrings that share equivalent sets of ending positions."
      }
    ]
  },
  {
    "id": "quiz-strings-set-19",
    "topicId": "strings",
    "title": "Strings Quiz - Level 19",
    "subtitle": "Advanced questions for Strings (Set 19/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-strings-set-19-q1",
        "question": "What is the main idea behind finding the number of distinct substrings using a suffix array and LCP array?",
        "options": [
          "Count all suffix lengths and subtract common prefixes between adjacent suffixes",
          "Count only unique characters",
          "Multiply the string length by its alphabet size",
          "Use binary search on every character"
        ],
        "correctIndex": 0,
        "explanation": "Each suffix contributes its length minus the LCP with the previous suffix."
      },
      {
        "id": "quiz-strings-set-19-q2",
        "question": "If a suffix has length L and its LCP with the previous suffix is k, how many new distinct substrings does it contribute?",
        "options": [
          "L",
          "k",
          "L - k",
          "L + k"
        ],
        "correctIndex": 2,
        "explanation": "The first k prefixes are already represented, leaving L-k new prefixes."
      },
      {
        "id": "quiz-strings-set-19-q3",
        "question": "Why does the suffix-array approach avoid counting the same substring repeatedly?",
        "options": [
          "Lexicographically adjacent suffixes expose their shared prefixes through the LCP",
          "Suffix arrays remove all duplicate characters",
          "Only one suffix is stored",
          "Every substring has a unique length"
        ],
        "correctIndex": 0,
        "explanation": "The LCP captures the overlap with the previously processed suffix."
      },
      {
        "id": "quiz-strings-set-19-q4",
        "question": "What is the total number of substrings, including duplicates by position, in a string of length n?",
        "options": [
          "n",
          "n²",
          "n(n+1)/2",
          "2n"
        ],
        "correctIndex": 2,
        "explanation": "There are n choices for the start and decreasing choices for the end, giving n(n+1)/2."
      },
      {
        "id": "quiz-strings-set-19-q5",
        "question": "What is the difference between total substrings and distinct substrings?",
        "options": [
          "Total substrings count occurrences by position, while distinct substrings count unique text values",
          "They are always equal",
          "Distinct substrings include only prefixes",
          "Total substrings include only palindromes"
        ],
        "correctIndex": 0,
        "explanation": "The same text can occur at multiple positions but contributes only once to the distinct-substring count."
      },
      {
        "id": "quiz-strings-set-19-q6",
        "question": "Which advanced structure can also be used to count distinct substrings efficiently?",
        "options": [
          "Suffix automaton",
          "Simple queue",
          "Binary heap",
          "Stack"
        ],
        "correctIndex": 0,
        "explanation": "The number of distinct substrings can be derived from the lengths associated with suffix-automaton states."
      },
      {
        "id": "quiz-strings-set-19-q7",
        "question": "Why can explicitly generating every substring be infeasible for large n?",
        "options": [
          "There can be O(n²) substring occurrences",
          "Strings cannot be copied",
          "Every substring is always unique",
          "The alphabet becomes empty"
        ],
        "correctIndex": 0,
        "explanation": "A string of length n has n(n+1)/2 substring occurrences, which is quadratic."
      }
    ]
  },
  {
    "id": "quiz-strings-set-20",
    "topicId": "strings",
    "title": "Strings Quiz - Level 20",
    "subtitle": "Advanced questions for Strings (Set 20/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-strings-set-20-q1",
        "question": "Which algorithm is specifically designed to find all palindromic substrings in linear time?",
        "options": [
          "Manacher's algorithm",
          "Rabin-Karp",
          "KMP",
          "Dijkstra"
        ],
        "correctIndex": 0,
        "explanation": "Manacher's algorithm computes palindrome radii around transformed string positions in O(n)."
      },
      {
        "id": "quiz-strings-set-20-q2",
        "question": "What is the primary optimization that allows Manacher's algorithm to achieve O(n)?",
        "options": [
          "It mirrors palindrome information around a known center to avoid redundant expansion",
          "It sorts the string first",
          "It hashes every substring independently",
          "It compares every pair of characters"
        ],
        "correctIndex": 0,
        "explanation": "Previously computed palindrome information is reused through symmetry."
      },
      {
        "id": "quiz-strings-set-20-q3",
        "question": "Which structure provides an O(n)-state representation of all substrings of a string?",
        "options": [
          "Suffix automaton",
          "Binary heap",
          "Fenwick tree",
          "Simple queue"
        ],
        "correctIndex": 0,
        "explanation": "A suffix automaton compactly represents all substrings using a linear number of states."
      },
      {
        "id": "quiz-strings-set-20-q4",
        "question": "Which combination is particularly powerful for advanced substring queries involving lexicographic order?",
        "options": [
          "Suffix array and LCP array",
          "Stack and queue",
          "Heap and union-find",
          "Prefix sum and binary tree"
        ],
        "correctIndex": 0,
        "explanation": "Suffix arrays order suffixes lexicographically, while LCP values describe their shared prefixes."
      },
      {
        "id": "quiz-strings-set-20-q5",
        "question": "Why can double rolling hash be preferred over a single rolling hash in collision-sensitive applications?",
        "options": [
          "Two independent hashes greatly reduce the probability of an accidental collision",
          "It makes every string sorted",
          "It eliminates all memory usage",
          "It guarantees O(1) construction regardless of string length"
        ],
        "correctIndex": 0,
        "explanation": "An accidental collision must occur under both hash functions, making it much less likely."
      },
      {
        "id": "quiz-strings-set-20-q6",
        "question": "Which statement best describes the trade-off between suffix arrays and suffix automata?",
        "options": [
          "Suffix arrays are strong for ordered suffix-based queries, while suffix automata compactly represent substring structure",
          "They are exactly the same data structure",
          "Suffix automata cannot process substrings",
          "Suffix arrays always use O(1) memory"
        ],
        "correctIndex": 0,
        "explanation": "The structures encode different forms of string information and are useful for different query types."
      },
      {
        "id": "quiz-strings-set-20-q7",
        "question": "When choosing an advanced string algorithm, what should primarily determine the choice?",
        "options": [
          "The exact query, input constraints, alphabet, required guarantees, and memory limits",
          "Always choose KMP",
          "Always choose a trie",
          "Always choose the algorithm with the most code"
        ],
        "correctIndex": 0,
        "explanation": "Different problems favor different structures such as KMP, tries, rolling hashes, suffix arrays, or suffix automata."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-1",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 1",
    "subtitle": "Beginner questions for Linked Lists (Set 1/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-linked-lists-set-1-q1",
        "question": "What is a linked list?",
        "options": [
          "A collection of nodes connected through links",
          "A fixed-size collection stored only in contiguous memory",
          "A tree with exactly two children per node",
          "A collection of key-value pairs"
        ],
        "correctIndex": 0,
        "explanation": "A linked list consists of nodes where each node stores data and one or more links to other nodes."
      },
      {
        "id": "quiz-linked-lists-set-1-q2",
        "question": "What does a basic singly linked-list node usually contain?",
        "options": [
          "Only a data value",
          "A data value and a reference to the next node",
          "Two arrays",
          "A key and a value only"
        ],
        "correctIndex": 1,
        "explanation": "A singly linked-list node normally stores its data and a reference to the next node."
      },
      {
        "id": "quiz-linked-lists-set-1-q3",
        "question": "What does the head of a linked list represent?",
        "options": [
          "The last node",
          "The largest node",
          "The first node",
          "The middle node"
        ],
        "correctIndex": 2,
        "explanation": "The head is the reference to the first node in the linked list."
      },
      {
        "id": "quiz-linked-lists-set-1-q4",
        "question": "What does the next pointer of the last node in a typical singly linked list contain?",
        "options": [
          "The head node",
          "A null reference",
          "The previous node",
          "The largest value"
        ],
        "correctIndex": 1,
        "explanation": "The last node has no next node, so its next reference is usually null."
      },
      {
        "id": "quiz-linked-lists-set-1-q5",
        "question": "Which data structure is commonly represented as a sequence of nodes connected by next pointers?",
        "options": [
          "Array",
          "Heap",
          "Singly linked list",
          "Hash table"
        ],
        "correctIndex": 2,
        "explanation": "A singly linked list connects each node to the next node using a pointer or reference."
      },
      {
        "id": "quiz-linked-lists-set-1-q6",
        "question": "Which linked list has pointers in both forward and backward directions?",
        "options": [
          "Singly linked list",
          "Doubly linked list",
          "Circular singly linked list",
          "Static array"
        ],
        "correctIndex": 1,
        "explanation": "A doubly linked list has both next and previous references."
      },
      {
        "id": "quiz-linked-lists-set-1-q7",
        "question": "What does an empty linked list usually have as its head?",
        "options": [
          "The first node",
          "0",
          "The last node",
          "null"
        ],
        "correctIndex": 3,
        "explanation": "An empty list contains no nodes, so its head reference is usually null."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-2",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 2",
    "subtitle": "Beginner questions for Linked Lists (Set 2/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-linked-lists-set-2-q1",
        "question": "What is the main advantage of a linked list over an array?",
        "options": [
          "Constant-time random access",
          "Easy insertion and deletion when the relevant node position is known",
          "Elements are always stored contiguously",
          "It requires no extra memory for links"
        ],
        "correctIndex": 1,
        "explanation": "Linked lists can insert or remove nodes without shifting many elements when the relevant pointer is already available."
      },
      {
        "id": "quiz-linked-lists-set-2-q2",
        "question": "What is the typical time complexity of accessing the kth element of a singly linked list?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(k), which can be O(n)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "You must follow links from the head until reaching the kth node."
      },
      {
        "id": "quiz-linked-lists-set-2-q3",
        "question": "What is the typical time complexity of inserting a node at the head of a singly linked list?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "Only the new node's next pointer and the head reference need to be updated."
      },
      {
        "id": "quiz-linked-lists-set-2-q4",
        "question": "What must be updated when inserting a new node at the beginning of a singly linked list?",
        "options": [
          "The new node's next pointer and the head",
          "Every node in the list",
          "Only the tail",
          "Only the last node"
        ],
        "correctIndex": 0,
        "explanation": "The new node points to the old head, and the head becomes the new node."
      },
      {
        "id": "quiz-linked-lists-set-2-q5",
        "question": "What is traversal in a linked list?",
        "options": [
          "Visiting nodes one by one by following their links",
          "Sorting all nodes",
          "Deleting the head only",
          "Accessing every node by index in O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Traversal follows pointers from one node to the next until the end."
      },
      {
        "id": "quiz-linked-lists-set-2-q6",
        "question": "Which pointer usually starts a traversal of a singly linked list?",
        "options": [
          "tail",
          "head",
          "middle",
          "null"
        ],
        "correctIndex": 1,
        "explanation": "The head provides access to the first node and therefore the rest of the list."
      },
      {
        "id": "quiz-linked-lists-set-2-q7",
        "question": "What is the time complexity of traversing all n nodes of a linked list?",
        "options": [
          "O(log n)",
          "O(1)",
          "O(n)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "Every node must be visited once, giving O(n) time."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-3",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 3",
    "subtitle": "Beginner questions for Linked Lists (Set 3/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-linked-lists-set-3-q1",
        "question": "How do you usually delete the head node of a singly linked list?",
        "options": [
          "Set head to head.next",
          "Set head to the tail",
          "Sort the list",
          "Set every pointer to null"
        ],
        "correctIndex": 0,
        "explanation": "Moving head to the second node effectively removes the old first node from the list."
      },
      {
        "id": "quiz-linked-lists-set-3-q2",
        "question": "What is the time complexity of deleting the head node when the head pointer is available?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 1,
        "explanation": "Only the head reference needs to be changed."
      },
      {
        "id": "quiz-linked-lists-set-3-q3",
        "question": "What is generally required to delete a node from the middle of a singly linked list?",
        "options": [
          "Access to the node before the target",
          "Only the tail pointer",
          "Sorting the list first",
          "The array index of the node"
        ],
        "correctIndex": 0,
        "explanation": "The previous node's next pointer usually needs to skip over the node being deleted."
      },
      {
        "id": "quiz-linked-lists-set-3-q4",
        "question": "If a node A points to B and B points to C, how can B be removed from a singly linked list?",
        "options": [
          "Set A.next to B.next",
          "Set C.next to A",
          "Set A to null",
          "Set head to B"
        ],
        "correctIndex": 0,
        "explanation": "A.next becomes C, so B is bypassed."
      },
      {
        "id": "quiz-linked-lists-set-3-q5",
        "question": "What happens if you lose the head pointer of a singly linked list and have no other reference to it?",
        "options": [
          "The list can no longer be reached through that reference",
          "The list automatically recreates itself",
          "The tail becomes the head automatically",
          "The nodes become an array"
        ],
        "correctIndex": 0,
        "explanation": "Without a reference to the first reachable node, the linked structure cannot normally be traversed."
      },
      {
        "id": "quiz-linked-lists-set-3-q6",
        "question": "Which operation can be O(1) in a doubly linked list if the target node itself is already known?",
        "options": [
          "Deleting that node",
          "Finding that node by value",
          "Finding the middle node",
          "Searching the entire list"
        ],
        "correctIndex": 0,
        "explanation": "With previous and next pointers available, the neighboring nodes can be connected directly."
      },
      {
        "id": "quiz-linked-lists-set-3-q7",
        "question": "Why can deletion from a linked list be more efficient than deletion from an array?",
        "options": [
          "Linked lists do not require shifting all later elements",
          "Linked lists always provide random access",
          "Arrays cannot delete elements",
          "Linked lists use contiguous memory"
        ],
        "correctIndex": 0,
        "explanation": "Linked-list deletion changes links rather than physically shifting subsequent elements."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-4",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 4",
    "subtitle": "Beginner questions for Linked Lists (Set 4/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-linked-lists-set-4-q1",
        "question": "What is a doubly linked list?",
        "options": [
          "A list where each node has next and previous references",
          "A list containing exactly two nodes",
          "A list with two heads and no tail",
          "An array containing linked lists"
        ],
        "correctIndex": 0,
        "explanation": "Each node in a doubly linked list usually stores links to both its next and previous nodes."
      },
      {
        "id": "quiz-linked-lists-set-4-q2",
        "question": "What is a major advantage of a doubly linked list?",
        "options": [
          "It supports traversal in both directions",
          "It provides O(1) random access",
          "It uses less memory than a singly linked list",
          "It never needs pointer updates"
        ],
        "correctIndex": 0,
        "explanation": "The previous pointer allows movement backward through the list."
      },
      {
        "id": "quiz-linked-lists-set-4-q3",
        "question": "What is the main disadvantage of a doubly linked list compared with a singly linked list?",
        "options": [
          "Each node requires an additional pointer",
          "It cannot be traversed",
          "It cannot delete nodes",
          "It always requires contiguous memory"
        ],
        "correctIndex": 0,
        "explanation": "The previous reference increases memory usage and pointer-management complexity."
      },
      {
        "id": "quiz-linked-lists-set-4-q4",
        "question": "When inserting a node between A and B in a doubly linked list, which relationships must be updated?",
        "options": [
          "The next and previous links around A, the new node, and B",
          "Only A.next",
          "Only B.prev",
          "Only the head"
        ],
        "correctIndex": 0,
        "explanation": "Both directions must remain consistent after insertion."
      },
      {
        "id": "quiz-linked-lists-set-4-q5",
        "question": "In a correct doubly linked list, if node B follows node A, what should be true?",
        "options": [
          "A.next == B and B.prev == A",
          "A.prev == B and B.next == A",
          "A.next == null and B.prev == null",
          "A and B cannot reference each other"
        ],
        "correctIndex": 0,
        "explanation": "The forward and backward links should consistently point to each other."
      },
      {
        "id": "quiz-linked-lists-set-4-q6",
        "question": "What should the previous pointer of the head node usually contain?",
        "options": [
          "The tail",
          "The second node",
          "null",
          "The middle node"
        ],
        "correctIndex": 2,
        "explanation": "The head has no node before it, so its previous pointer is typically null."
      },
      {
        "id": "quiz-linked-lists-set-4-q7",
        "question": "What should the next pointer of the tail node usually contain in a non-circular doubly linked list?",
        "options": [
          "The head",
          "The previous node",
          "null",
          "The middle node"
        ],
        "correctIndex": 2,
        "explanation": "The tail has no node after it, so its next pointer is normally null."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-5",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 5",
    "subtitle": "Beginner questions for Linked Lists (Set 5/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-linked-lists-set-5-q1",
        "question": "What is a circular linked list?",
        "options": [
          "A linked list where the final node points back to an earlier node, commonly the head",
          "A list stored in a circular array",
          "A list containing only one node",
          "A doubly linked list with no pointers"
        ],
        "correctIndex": 0,
        "explanation": "In a circular list, traversal can continue from the final node back to the beginning."
      },
      {
        "id": "quiz-linked-lists-set-5-q2",
        "question": "In a circular singly linked list, what does the last node's next pointer usually reference?",
        "options": [
          "null",
          "The previous node",
          "The head",
          "The middle node"
        ],
        "correctIndex": 2,
        "explanation": "The last node points back to the head, forming a cycle."
      },
      {
        "id": "quiz-linked-lists-set-5-q3",
        "question": "Why can a normal while(current != null) traversal fail on a circular linked list?",
        "options": [
          "current may never become null",
          "The list contains no nodes",
          "Circular lists cannot be traversed",
          "The head is always null"
        ],
        "correctIndex": 0,
        "explanation": "Because the final node points back into the list, current may cycle forever."
      },
      {
        "id": "quiz-linked-lists-set-5-q4",
        "question": "What is a safe way to traverse a circular linked list when starting from head?",
        "options": [
          "Stop when you reach the head again",
          "Stop only when current becomes null",
          "Always traverse exactly one node",
          "Sort the nodes first"
        ],
        "correctIndex": 0,
        "explanation": "Returning to the starting node indicates that the complete cycle has been traversed."
      },
      {
        "id": "quiz-linked-lists-set-5-q5",
        "question": "Which application can naturally use a circular linked list?",
        "options": [
          "Round-robin scheduling",
          "Binary search",
          "Prefix sums",
          "Static matrix multiplication"
        ],
        "correctIndex": 0,
        "explanation": "Round-robin scheduling repeatedly cycles through participants, matching the circular structure."
      },
      {
        "id": "quiz-linked-lists-set-5-q6",
        "question": "What is one advantage of a circular linked list?",
        "options": [
          "It can move from the end directly back to the beginning",
          "It provides random access",
          "It always uses less memory",
          "It removes the need for nodes"
        ],
        "correctIndex": 0,
        "explanation": "The circular connection makes repeated cyclic traversal natural."
      },
      {
        "id": "quiz-linked-lists-set-5-q7",
        "question": "Which linked-list type can naturally support traversal in both directions and circular movement?",
        "options": [
          "Circular doubly linked list",
          "Singly linked list",
          "Static array",
          "Binary tree"
        ],
        "correctIndex": 0,
        "explanation": "A circular doubly linked list has both next and previous links and connects its ends."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-6",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 6",
    "subtitle": "Beginner questions for Linked Lists (Set 6/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-linked-lists-set-6-q1",
        "question": "Which technique is commonly used to find the middle of a singly linked list in one traversal?",
        "options": [
          "Slow and fast pointers",
          "Binary search",
          "Sorting",
          "Hashing every node"
        ],
        "correctIndex": 0,
        "explanation": "The slow pointer moves one step while the fast pointer moves two steps."
      },
      {
        "id": "quiz-linked-lists-set-6-q2",
        "question": "When the fast pointer reaches the end of a linked list, where is the slow pointer usually located?",
        "options": [
          "Near the middle",
          "At the head",
          "Always at the tail",
          "Outside the list"
        ],
        "correctIndex": 0,
        "explanation": "Because slow moves half as fast as fast, it reaches the middle when fast reaches the end."
      },
      {
        "id": "quiz-linked-lists-set-6-q3",
        "question": "What is the time complexity of finding the middle using slow and fast pointers?",
        "options": [
          "O(n2)",
          "O(log n)",
          "O(n)",
          "O(1)"
        ],
        "correctIndex": 2,
        "explanation": "The list is traversed a constant number of times, resulting in O(n)."
      },
      {
        "id": "quiz-linked-lists-set-6-q4",
        "question": "What extra space does the slow-and-fast-pointer approach require?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "Only a few pointer variables are needed."
      },
      {
        "id": "quiz-linked-lists-set-6-q5",
        "question": "What is the key idea behind reversing a singly linked list iteratively?",
        "options": [
          "Reverse each node's next pointer while maintaining the next node safely",
          "Sort the nodes",
          "Copy every node into an array",
          "Move only the head"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm maintains previous, current, and next references while reversing links."
      },
      {
        "id": "quiz-linked-lists-set-6-q6",
        "question": "During iterative list reversal, why must the next node be saved before changing current.next?",
        "options": [
          "Otherwise the remaining list could become unreachable",
          "It makes the list sorted",
          "The head would automatically become null",
          "It reduces memory usage to zero"
        ],
        "correctIndex": 0,
        "explanation": "Changing current.next before saving the original next pointer can lose access to the rest of the list."
      },
      {
        "id": "quiz-linked-lists-set-6-q7",
        "question": "What is the time complexity of reversing a singly linked list iteratively?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Each node's pointer is changed once."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-7",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 7",
    "subtitle": "Intermediate questions for Linked Lists (Set 7/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-linked-lists-set-7-q1",
        "question": "How can a cycle in a linked list be detected using O(1) extra space?",
        "options": [
          "Floyd's slow-and-fast pointer algorithm",
          "Sort the nodes",
          "Use binary search",
          "Copy all nodes into an array"
        ],
        "correctIndex": 0,
        "explanation": "Floyd's algorithm uses two pointers moving at different speeds to detect a cycle."
      },
      {
        "id": "quiz-linked-lists-set-7-q2",
        "question": "What happens if slow and fast pointers meet in Floyd's cycle detection?",
        "options": [
          "A cycle exists",
          "The list is definitely empty",
          "The list is sorted",
          "The head is corrupted"
        ],
        "correctIndex": 0,
        "explanation": "If the fast pointer catches the slow pointer, both are traveling inside a cycle."
      },
      {
        "id": "quiz-linked-lists-set-7-q3",
        "question": "What is the time complexity of Floyd's cycle detection algorithm?",
        "options": [
          "O(n2)",
          "O(log n)",
          "O(n)",
          "O(1)"
        ],
        "correctIndex": 2,
        "explanation": "The pointers traverse the list a bounded number of times, resulting in linear time."
      },
      {
        "id": "quiz-linked-lists-set-7-q4",
        "question": "What is the extra space complexity of Floyd's cycle detection algorithm?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 1,
        "explanation": "Only the slow and fast pointers are required."
      },
      {
        "id": "quiz-linked-lists-set-7-q5",
        "question": "What is the purpose of the second phase of Floyd's algorithm for finding a cycle's entrance?",
        "options": [
          "Reset one pointer to the head and move both one step at a time",
          "Sort the cycle",
          "Delete the cycle",
          "Move both pointers two steps"
        ],
        "correctIndex": 0,
        "explanation": "After a meeting point is found, resetting one pointer allows the two pointers to meet at the cycle entrance."
      },
      {
        "id": "quiz-linked-lists-set-7-q6",
        "question": "If a linked list has no cycle, what eventually happens to the fast pointer?",
        "options": [
          "It becomes null or reaches a null next reference",
          "It always meets slow",
          "It becomes the head",
          "It reverses direction"
        ],
        "correctIndex": 0,
        "explanation": "Without a cycle, the fast pointer eventually reaches the end of the list."
      },
      {
        "id": "quiz-linked-lists-set-7-q7",
        "question": "Which scenario can cause an infinite traversal if cycle detection is not used?",
        "options": [
          "A linked list whose tail points back to an earlier node",
          "A normal list ending in null",
          "A one-node list pointing to null",
          "An empty list"
        ],
        "correctIndex": 0,
        "explanation": "The traversal repeatedly follows nodes inside the cycle and never reaches null."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-8",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 8",
    "subtitle": "Intermediate questions for Linked Lists (Set 8/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-linked-lists-set-8-q1",
        "question": "What is the purpose of a dummy node in linked-list algorithms?",
        "options": [
          "Simplify edge cases involving the head",
          "Store the largest value",
          "Make random access O(1)",
          "Automatically detect cycles"
        ],
        "correctIndex": 0,
        "explanation": "A dummy node gives the list a stable predecessor before the real head."
      },
      {
        "id": "quiz-linked-lists-set-8-q2",
        "question": "Which operation is often easier to implement using a dummy head node?",
        "options": [
          "Removing nodes based on a condition",
          "Binary searching the list",
          "Sorting in O(1)",
          "Accessing index 100 directly"
        ],
        "correctIndex": 0,
        "explanation": "A dummy node removes special handling when the actual head must be deleted."
      },
      {
        "id": "quiz-linked-lists-set-8-q3",
        "question": "What is the result of reversing [1,2,3,4]?",
        "options": [
          "[2,1,4,3]",
          "[4,3,2,1]",
          "[1,4,3,2]",
          "[3,4,1,2]"
        ],
        "correctIndex": 1,
        "explanation": "Reversal changes the node order from 1 to 2 to 3 to 4 into 4 to 3 to 2 to 1."
      },
      {
        "id": "quiz-linked-lists-set-8-q4",
        "question": "Which approach can reverse a linked list recursively?",
        "options": [
          "Reverse the rest of the list and then place the current node after it",
          "Sort the list first",
          "Copy only the head",
          "Use binary search"
        ],
        "correctIndex": 0,
        "explanation": "The recursive solution reverses the suffix and then adjusts the current node's links."
      },
      {
        "id": "quiz-linked-lists-set-8-q5",
        "question": "What is the auxiliary space complexity of a recursive linked-list reversal due to the call stack?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "The recursion can create one call frame per node."
      },
      {
        "id": "quiz-linked-lists-set-8-q6",
        "question": "What is the advantage of the iterative reversal over recursive reversal regarding auxiliary space?",
        "options": [
          "It can use O(1) extra space",
          "It always uses O(n) extra arrays",
          "It requires a stack of all nodes",
          "It cannot reverse long lists"
        ],
        "correctIndex": 0,
        "explanation": "The iterative method uses a constant number of pointers."
      },
      {
        "id": "quiz-linked-lists-set-8-q7",
        "question": "What is the time complexity of both standard iterative and recursive linked-list reversal?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Each node must be processed once."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-9",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 9",
    "subtitle": "Intermediate questions for Linked Lists (Set 9/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-linked-lists-set-9-q1",
        "question": "How can two sorted linked lists be merged efficiently?",
        "options": [
          "Use two pointers and repeatedly attach the smaller current node",
          "Concatenate them and use binary search",
          "Reverse both lists first",
          "Convert both to trees"
        ],
        "correctIndex": 0,
        "explanation": "Two pointers exploit the sorted order to merge the lists in linear time."
      },
      {
        "id": "quiz-linked-lists-set-9-q2",
        "question": "What is the time complexity of merging two sorted linked lists containing m and n nodes?",
        "options": [
          "O(mn)",
          "O(m+n)",
          "O(log(m+n))",
          "O(1)"
        ],
        "correctIndex": 1,
        "explanation": "Each node is processed once during the merge."
      },
      {
        "id": "quiz-linked-lists-set-9-q3",
        "question": "What happens after one sorted list is completely consumed during a merge?",
        "options": [
          "Attach the remaining nodes of the other list",
          "Discard the remaining nodes",
          "Restart the merge",
          "Sort the remaining list again"
        ],
        "correctIndex": 0,
        "explanation": "The remaining portion is already sorted and can be attached directly."
      },
      {
        "id": "quiz-linked-lists-set-9-q4",
        "question": "Which technique can merge k sorted linked lists efficiently?",
        "options": [
          "A min-heap",
          "A stack only",
          "Binary search on node values",
          "DFS"
        ],
        "correctIndex": 0,
        "explanation": "A min-heap keeps the smallest current node among the k lists accessible."
      },
      {
        "id": "quiz-linked-lists-set-9-q5",
        "question": "What is the typical complexity of merging k sorted linked lists containing N total nodes using a min-heap?",
        "options": [
          "O(N log k)",
          "O(N2)",
          "O(log N)",
          "O(k2)"
        ],
        "correctIndex": 0,
        "explanation": "Each node is inserted and removed from a heap of size at most k."
      },
      {
        "id": "quiz-linked-lists-set-9-q6",
        "question": "What is another efficient approach for merging k sorted linked lists?",
        "options": [
          "Divide and conquer pairwise merging",
          "Bubble sort every list repeatedly",
          "Reverse all lists",
          "Use binary search for every node"
        ],
        "correctIndex": 0,
        "explanation": "Pairwise merging reduces the number of lists at each level, similar to merge sort."
      },
      {
        "id": "quiz-linked-lists-set-9-q7",
        "question": "Why is a heap useful when merging k sorted lists?",
        "options": [
          "It quickly identifies the smallest available node among the lists",
          "It stores every node in sorted order permanently",
          "It eliminates all pointers",
          "It makes the total number of nodes constant"
        ],
        "correctIndex": 0,
        "explanation": "The heap provides efficient access to the smallest current candidate."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-10",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 10",
    "subtitle": "Intermediate questions for Linked Lists (Set 10/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-linked-lists-set-10-q1",
        "question": "What is the key idea behind removing the nth node from the end of a linked list in one pass?",
        "options": [
          "Maintain two pointers separated by n positions",
          "Sort the list",
          "Use binary search",
          "Reverse the list twice"
        ],
        "correctIndex": 0,
        "explanation": "Keeping a fixed gap lets the first pointer reach the end while the second reaches the node before the target."
      },
      {
        "id": "quiz-linked-lists-set-10-q2",
        "question": "Why is a dummy node useful when removing the nth node from the end?",
        "options": [
          "It handles the case where the head itself must be removed",
          "It makes traversal unnecessary",
          "It sorts the list",
          "It detects duplicate values"
        ],
        "correctIndex": 0,
        "explanation": "The dummy node gives the head a predecessor, simplifying deletion logic."
      },
      {
        "id": "quiz-linked-lists-set-10-q3",
        "question": "What is the time complexity of the optimal one-pass nth-node removal algorithm?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "The pointers traverse the list a constant number of times."
      },
      {
        "id": "quiz-linked-lists-set-10-q4",
        "question": "What does it mean to partition a linked list around a value x?",
        "options": [
          "Place nodes smaller than x before nodes greater than or equal to x",
          "Sort every node exactly",
          "Remove every value equal to x",
          "Reverse the list around x"
        ],
        "correctIndex": 0,
        "explanation": "Partitioning separates nodes according to their relationship with x."
      },
      {
        "id": "quiz-linked-lists-set-10-q5",
        "question": "Which technique can preserve the relative order within the two partitions?",
        "options": [
          "Build separate before and after chains and connect them",
          "Sort the entire list",
          "Reverse both halves",
          "Use binary search"
        ],
        "correctIndex": 0,
        "explanation": "Maintaining tail pointers for two chains preserves the original order within each group."
      },
      {
        "id": "quiz-linked-lists-set-10-q6",
        "question": "What is the time complexity of partitioning a linked list around x with a single traversal?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n2)",
          "O(1)"
        ],
        "correctIndex": 1,
        "explanation": "Each node is visited once."
      },
      {
        "id": "quiz-linked-lists-set-10-q7",
        "question": "What is a common pointer mistake when rearranging a linked list?",
        "options": [
          "Losing the reference to the remaining nodes",
          "Using too few comparisons",
          "Sorting before traversal",
          "Using a head pointer"
        ],
        "correctIndex": 0,
        "explanation": "Changing a next pointer before saving the original next node can disconnect part of the list."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-11",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 11",
    "subtitle": "Intermediate questions for Linked Lists (Set 11/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-linked-lists-set-11-q1",
        "question": "What is the key challenge in copying a linked list with random pointers?",
        "options": [
          "Each node can point to an arbitrary node in addition to the next node",
          "Nodes cannot store data",
          "The list must be sorted",
          "Random pointers always point backward"
        ],
        "correctIndex": 0,
        "explanation": "The arbitrary random references must point to the corresponding copied nodes."
      },
      {
        "id": "quiz-linked-lists-set-11-q2",
        "question": "Which structure can map each original node to its cloned node?",
        "options": [
          "Hash map",
          "Stack only",
          "Queue only",
          "Binary search tree"
        ],
        "correctIndex": 0,
        "explanation": "A hash map provides a direct mapping from each original node to its clone."
      },
      {
        "id": "quiz-linked-lists-set-11-q3",
        "question": "What is the main advantage of the interleaving technique for cloning a random-pointer list?",
        "options": [
          "It can avoid an O(n) hash map by placing cloned nodes alongside originals",
          "It sorts the list",
          "It removes random pointers",
          "It makes the list circular"
        ],
        "correctIndex": 0,
        "explanation": "Each clone is inserted after its original, allowing random-pointer relationships to be established without a separate map."
      },
      {
        "id": "quiz-linked-lists-set-11-q4",
        "question": "What is the typical time complexity of cloning a random-pointer linked list?",
        "options": [
          "O(n2)",
          "O(log n)",
          "O(n)",
          "O(1)"
        ],
        "correctIndex": 2,
        "explanation": "The standard hash-map or interleaving solutions require linear time."
      },
      {
        "id": "quiz-linked-lists-set-11-q5",
        "question": "What is the auxiliary space complexity of the hash-map cloning approach?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "The map stores a reference for every original node."
      },
      {
        "id": "quiz-linked-lists-set-11-q6",
        "question": "Why can the interleaving clone approach use O(1) auxiliary space?",
        "options": [
          "Clones are temporarily stored within the original list structure",
          "No clone nodes are created",
          "Random pointers are ignored",
          "The input list is converted to an array"
        ],
        "correctIndex": 0,
        "explanation": "The original and cloned nodes are interwoven, allowing direct correspondence without an external map."
      },
      {
        "id": "quiz-linked-lists-set-11-q7",
        "question": "After cloning with interleaving, what must eventually be done?",
        "options": [
          "Separate the cloned nodes from the original nodes",
          "Delete all cloned nodes",
          "Sort the cloned list",
          "Make every random pointer null"
        ],
        "correctIndex": 0,
        "explanation": "The interwoven structure must be restored into two independent lists."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-12",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 12",
    "subtitle": "Intermediate questions for Linked Lists (Set 12/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-linked-lists-set-12-q1",
        "question": "What is the key idea behind sorting a linked list using merge sort?",
        "options": [
          "Split the list, recursively sort each half, then merge them",
          "Use random access to perform quicksort directly",
          "Insert every node into a stack",
          "Use binary search on node positions"
        ],
        "correctIndex": 0,
        "explanation": "Merge sort works well with linked lists because merging can be done by changing pointers."
      },
      {
        "id": "quiz-linked-lists-set-12-q2",
        "question": "How can a linked list be split approximately in half efficiently?",
        "options": [
          "Use slow and fast pointers",
          "Use binary search",
          "Count every node repeatedly",
          "Sort the list first"
        ],
        "correctIndex": 0,
        "explanation": "When fast moves twice as quickly as slow, slow reaches the midpoint."
      },
      {
        "id": "quiz-linked-lists-set-12-q3",
        "question": "What is the time complexity of merge sort on a linked list?",
        "options": [
          "O(n log n)",
          "O(n2) always",
          "O(log n)",
          "O(n)"
        ],
        "correctIndex": 0,
        "explanation": "There are O(log n) levels of splitting and O(n) work per level."
      },
      {
        "id": "quiz-linked-lists-set-12-q4",
        "question": "Why is merge sort particularly suitable for linked lists?",
        "options": [
          "Merging can be performed by changing links without requiring random access",
          "Linked lists have constant-time random access",
          "It never uses recursion",
          "It requires contiguous memory"
        ],
        "correctIndex": 0,
        "explanation": "The merge operation naturally works with sequential pointer traversal."
      },
      {
        "id": "quiz-linked-lists-set-12-q5",
        "question": "What is the usual space consideration for a recursive merge sort on a linked list?",
        "options": [
          "O(log n) recursion stack space",
          "O(n2) array space",
          "O(1) total space in every implementation",
          "O(n) sorting table"
        ],
        "correctIndex": 0,
        "explanation": "Recursive splitting creates a logarithmic call stack."
      },
      {
        "id": "quiz-linked-lists-set-12-q6",
        "question": "Which sorting algorithm is generally less naturally suited to linked lists because it relies heavily on random access?",
        "options": [
          "Heap sort",
          "Merge sort",
          "Insertion sort",
          "Bubble sort"
        ],
        "correctIndex": 0,
        "explanation": "Heap operations rely on efficient indexed access, which linked lists do not provide."
      },
      {
        "id": "quiz-linked-lists-set-12-q7",
        "question": "What is an advantage of insertion sort on a nearly sorted linked list?",
        "options": [
          "It can perform well when only a few nodes are out of order",
          "It always runs in O(log n)",
          "It requires random access",
          "It cannot preserve node links"
        ],
        "correctIndex": 0,
        "explanation": "Insertion sort can be efficient when elements require only a small number of adjustments."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-13",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 13",
    "subtitle": "Intermediate questions for Linked Lists (Set 13/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-linked-lists-set-13-q1",
        "question": "What is the goal of reversing a linked list in groups of k?",
        "options": [
          "Reverse every complete group of k nodes while preserving the group order",
          "Reverse only the first k nodes",
          "Sort every group",
          "Delete every kth node"
        ],
        "correctIndex": 0,
        "explanation": "The classic problem reverses nodes group by group while maintaining the overall group sequence."
      },
      {
        "id": "quiz-linked-lists-set-13-q2",
        "question": "What should typically happen to a final group containing fewer than k nodes?",
        "options": [
          "Leave it unchanged",
          "Always reverse it",
          "Delete it",
          "Sort it"
        ],
        "correctIndex": 0,
        "explanation": "In the standard problem, only complete groups of k are reversed."
      },
      {
        "id": "quiz-linked-lists-set-13-q3",
        "question": "Which pointer technique is useful for reversing a group of k nodes?",
        "options": [
          "Maintain previous, current, and next references",
          "Use binary search",
          "Use only the tail pointer",
          "Use a frequency map"
        ],
        "correctIndex": 0,
        "explanation": "These pointers allow each next link in the group to be safely reversed."
      },
      {
        "id": "quiz-linked-lists-set-13-q4",
        "question": "What is the time complexity of reversing a linked list in groups of k?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(k log n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Each node is visited and its pointer is changed a constant number of times."
      },
      {
        "id": "quiz-linked-lists-set-13-q5",
        "question": "What is the auxiliary space complexity of an iterative k-group reversal?",
        "options": [
          "O(n)",
          "O(k)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "An iterative implementation can use a constant number of pointers."
      },
      {
        "id": "quiz-linked-lists-set-13-q6",
        "question": "Why is a dummy node especially helpful in k-group reversal?",
        "options": [
          "It provides a stable predecessor for the first reversed group",
          "It stores k nodes",
          "It automatically detects the last group",
          "It sorts the list"
        ],
        "correctIndex": 0,
        "explanation": "The dummy node simplifies reconnecting the first group and subsequent groups."
      },
      {
        "id": "quiz-linked-lists-set-13-q7",
        "question": "What is a common bug when reversing nodes in groups?",
        "options": [
          "Failing to reconnect the reversed group to the remaining list",
          "Using a head pointer",
          "Checking group size",
          "Saving the next pointer"
        ],
        "correctIndex": 0,
        "explanation": "After reversal, the group must be correctly connected to both the previous group and the remaining nodes."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-14",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 14",
    "subtitle": "Advanced questions for Linked Lists (Set 14/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-linked-lists-set-14-q1",
        "question": "What is the main idea of the intersection-of-two-linked-lists technique using two pointers?",
        "options": [
          "Each pointer switches to the other list after reaching the end",
          "Both pointers always move two steps",
          "The lists are sorted first",
          "Each pointer stays in its original list"
        ],
        "correctIndex": 0,
        "explanation": "Switching heads causes both pointers to travel the same combined distance, aligning them at the intersection."
      },
      {
        "id": "quiz-linked-lists-set-14-q2",
        "question": "Why does the two-pointer intersection method work even when the lists have different lengths?",
        "options": [
          "Each pointer traverses the length of both lists",
          "The shorter list is automatically padded",
          "The longer list is deleted",
          "Both lists must have equal lengths"
        ],
        "correctIndex": 0,
        "explanation": "After switching lists, each pointer covers the same total distance."
      },
      {
        "id": "quiz-linked-lists-set-14-q3",
        "question": "What does it mean for two linked lists to intersect?",
        "options": [
          "They share the same actual node reference from some point onward",
          "They contain equal values",
          "They have the same length",
          "They contain the same number of nodes"
        ],
        "correctIndex": 0,
        "explanation": "Intersection is based on node identity, not merely equal data values."
      },
      {
        "id": "quiz-linked-lists-set-14-q4",
        "question": "If two lists have the same value 5 but different node objects, do they necessarily intersect?",
        "options": [
          "Yes",
          "Only if both are sorted",
          "No",
          "Only if they have equal lengths"
        ],
        "correctIndex": 2,
        "explanation": "Intersection requires the same node object/reference, not merely equal values."
      },
      {
        "id": "quiz-linked-lists-set-14-q5",
        "question": "What is the time complexity of the two-pointer intersection algorithm?",
        "options": [
          "O(mn)",
          "O(m+n)",
          "O(log(m+n))",
          "O(1)"
        ],
        "correctIndex": 1,
        "explanation": "Each pointer traverses each list at most once."
      },
      {
        "id": "quiz-linked-lists-set-14-q6",
        "question": "What is the extra space complexity of the two-pointer intersection algorithm?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(m+n)"
        ],
        "correctIndex": 2,
        "explanation": "Only two pointers are needed."
      },
      {
        "id": "quiz-linked-lists-set-14-q7",
        "question": "If two lists do not intersect, what will the two-pointer algorithm eventually return?",
        "options": [
          "The head of the longer list",
          "The tail",
          "null",
          "The middle node"
        ],
        "correctIndex": 2,
        "explanation": "Both pointers eventually reach null after traversing both lists."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-15",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 15",
    "subtitle": "Advanced questions for Linked Lists (Set 15/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-linked-lists-set-15-q1",
        "question": "What is the key challenge in reversing a sublist from position left to right?",
        "options": [
          "Reverse only the specified portion while correctly reconnecting both ends",
          "Reverse the entire list",
          "Sort the sublist",
          "Delete nodes outside the range"
        ],
        "correctIndex": 0,
        "explanation": "The selected segment must be reversed without breaking its connection to the rest of the list."
      },
      {
        "id": "quiz-linked-lists-set-15-q2",
        "question": "Why can a dummy node simplify reversing a sublist that starts at position 1?",
        "options": [
          "It gives the first node a predecessor",
          "It stores the entire list",
          "It prevents all pointer changes",
          "It makes traversal unnecessary"
        ],
        "correctIndex": 0,
        "explanation": "The dummy acts as a stable node before the head, simplifying reconnection."
      },
      {
        "id": "quiz-linked-lists-set-15-q3",
        "question": "What is the time complexity of reversing a linked-list sublist of length k?",
        "options": [
          "O(n2)",
          "O(k)",
          "O(log k)",
          "O(1)"
        ],
        "correctIndex": 1,
        "explanation": "Only the nodes in the selected segment need to be processed."
      },
      {
        "id": "quiz-linked-lists-set-15-q4",
        "question": "What is the main idea behind checking whether a linked list is a palindrome using O(1) extra space?",
        "options": [
          "Find the middle, reverse the second half, and compare both halves",
          "Copy every value into a hash map",
          "Sort the list",
          "Use binary search"
        ],
        "correctIndex": 0,
        "explanation": "The second half can be reversed in place and compared with the first half."
      },
      {
        "id": "quiz-linked-lists-set-15-q5",
        "question": "Why is the second half reversed for an O(1)-space palindrome check?",
        "options": [
          "It allows corresponding values to be compared from opposite directions",
          "It sorts the list",
          "It removes duplicate values",
          "It detects cycles automatically"
        ],
        "correctIndex": 0,
        "explanation": "Reversing aligns the second half with the first half for a forward comparison."
      },
      {
        "id": "quiz-linked-lists-set-15-q6",
        "question": "What should be considered after comparing the halves of a palindrome list?",
        "options": [
          "Optionally restore the reversed half if the input must remain unchanged",
          "Delete the second half",
          "Sort the entire list",
          "Convert it to an array"
        ],
        "correctIndex": 0,
        "explanation": "Restoring the list preserves the original input structure."
      },
      {
        "id": "quiz-linked-lists-set-15-q7",
        "question": "What is the time complexity of the O(1)-space linked-list palindrome algorithm?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Finding the middle, reversing half, and comparing require linear total work."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-16",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 16",
    "subtitle": "Advanced questions for Linked Lists (Set 16/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-linked-lists-set-16-q1",
        "question": "What is the key idea behind flattening a multilevel linked list?",
        "options": [
          "Connect nodes from nested levels into one sequential list while preserving the required order",
          "Sort all nodes numerically",
          "Delete every child pointer",
          "Convert every node into an array"
        ],
        "correctIndex": 0,
        "explanation": "Flattening transforms nested linked structures into a single-level sequence."
      },
      {
        "id": "quiz-linked-lists-set-16-q2",
        "question": "Which technique can be used to flatten nested linked structures when depth is unknown?",
        "options": [
          "Stack or recursion",
          "Binary search",
          "Prefix sum",
          "Heapify"
        ],
        "correctIndex": 0,
        "explanation": "A stack or recursion can remember nodes that must be processed after a child list."
      },
      {
        "id": "quiz-linked-lists-set-16-q3",
        "question": "What is a common purpose of a stack during iterative linked-list flattening?",
        "options": [
          "Remember nodes whose remaining next portions must be processed later",
          "Sort all nodes",
          "Store only duplicate values",
          "Replace all pointers with indexes"
        ],
        "correctIndex": 0,
        "explanation": "The stack preserves deferred next nodes while processing nested child structures."
      },
      {
        "id": "quiz-linked-lists-set-16-q4",
        "question": "What is the key challenge in cloning a linked list with both next and random pointers?",
        "options": [
          "Preserving arbitrary random references between corresponding cloned nodes",
          "Sorting nodes by value",
          "Finding the largest node",
          "Removing the next pointers"
        ],
        "correctIndex": 0,
        "explanation": "Each random pointer must refer to the corresponding clone rather than the original node."
      },
      {
        "id": "quiz-linked-lists-set-16-q5",
        "question": "Which property must be preserved when cloning a random-pointer list?",
        "options": [
          "The structural relationships between corresponding nodes",
          "The original memory addresses",
          "The exact physical memory layout",
          "The original pointer objects themselves"
        ],
        "correctIndex": 0,
        "explanation": "The clone must have equivalent relationships while being composed of separate node objects."
      },
      {
        "id": "quiz-linked-lists-set-16-q6",
        "question": "What is a common optimization when implementing an LRU cache with a linked list?",
        "options": [
          "Use a doubly linked list with a hash map",
          "Use only a singly linked list",
          "Use an array without indexes",
          "Use binary search"
        ],
        "correctIndex": 0,
        "explanation": "The hash map provides O(1) lookup while the doubly linked list supports O(1) removal and insertion."
      },
      {
        "id": "quiz-linked-lists-set-16-q7",
        "question": "Why is a doubly linked list preferred in a standard LRU cache?",
        "options": [
          "A known node can be removed from the middle in O(1)",
          "It provides random access",
          "It uses less memory",
          "It automatically stores keys"
        ],
        "correctIndex": 0,
        "explanation": "Previous and next pointers allow direct removal without searching for the predecessor."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-17",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 17",
    "subtitle": "Advanced questions for Linked Lists (Set 17/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-linked-lists-set-17-q1",
        "question": "What is the standard data-structure combination for an O(1) average-time LRU cache?",
        "options": [
          "Hash map and doubly linked list",
          "Stack and queue",
          "Binary tree and array",
          "Trie and heap"
        ],
        "correctIndex": 0,
        "explanation": "The hash map locates entries quickly and the doubly linked list maintains usage order."
      },
      {
        "id": "quiz-linked-lists-set-17-q2",
        "question": "In an LRU cache, what does LRU stand for?",
        "options": [
          "Least Recently Used",
          "Last Random Update",
          "Longest Running User",
          "Least Required Unit"
        ],
        "correctIndex": 0,
        "explanation": "LRU means the item that has been unused for the longest time is removed first."
      },
      {
        "id": "quiz-linked-lists-set-17-q3",
        "question": "When an LRU cache item is accessed, where should it usually move?",
        "options": [
          "To the most-recently-used position",
          "To the least-recently-used position",
          "It should be deleted",
          "It should remain permanently fixed"
        ],
        "correctIndex": 0,
        "explanation": "Accessing an item makes it recently used, so it moves to the front or equivalent MRU position."
      },
      {
        "id": "quiz-linked-lists-set-17-q4",
        "question": "When an LRU cache exceeds capacity, which item should be removed?",
        "options": [
          "The least recently used item",
          "The most recently used item",
          "The largest key",
          "The smallest value"
        ],
        "correctIndex": 0,
        "explanation": "The cache evicts the item that has been unused for the longest time."
      },
      {
        "id": "quiz-linked-lists-set-17-q5",
        "question": "Why are dummy head and tail nodes useful in an LRU cache's doubly linked list?",
        "options": [
          "They simplify insertion and removal at both ends",
          "They store cache values",
          "They eliminate the hash map",
          "They provide random access"
        ],
        "correctIndex": 0,
        "explanation": "Dummy boundaries avoid special cases for empty lists and edge-node operations."
      },
      {
        "id": "quiz-linked-lists-set-17-q6",
        "question": "What is the expected time complexity of both get and put in a properly implemented LRU cache?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n log n)"
        ],
        "correctIndex": 2,
        "explanation": "Hash-map lookup and doubly linked-list updates are both O(1) on average."
      },
      {
        "id": "quiz-linked-lists-set-17-q7",
        "question": "What can go wrong if an LRU cache updates the hash map but forgets to update the linked list?",
        "options": [
          "The stored usage order can become inconsistent with the map",
          "The cache automatically becomes sorted",
          "All lookups become O(1) guaranteed",
          "The cache capacity doubles"
        ],
        "correctIndex": 0,
        "explanation": "Both structures must remain synchronized to correctly represent cache membership and recency."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-18",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 18",
    "subtitle": "Advanced questions for Linked Lists (Set 18/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-linked-lists-set-18-q1",
        "question": "What is the main challenge in implementing an LFU cache compared with an LRU cache?",
        "options": [
          "It must track both access frequency and recency among equally frequent items",
          "It cannot use a hash map",
          "It requires sorting all values after every operation",
          "It only supports insertion"
        ],
        "correctIndex": 0,
        "explanation": "LFU eviction considers frequency first and typically recency as a tie-breaker."
      },
      {
        "id": "quiz-linked-lists-set-18-q2",
        "question": "What does LFU stand for?",
        "options": [
          "Least Frequently Used",
          "Last Fixed Update",
          "Largest Frequency Unit",
          "Linked Frequency Utility"
        ],
        "correctIndex": 0,
        "explanation": "LFU caches evict items with the lowest access frequency."
      },
      {
        "id": "quiz-linked-lists-set-18-q3",
        "question": "What linked-list structure is useful for maintaining recency among items with the same frequency?",
        "options": [
          "Doubly linked list",
          "Singly linked list only",
          "Binary search tree",
          "Static array"
        ],
        "correctIndex": 0,
        "explanation": "A doubly linked list allows efficient movement and removal of items within a frequency group."
      },
      {
        "id": "quiz-linked-lists-set-18-q4",
        "question": "What mapping is commonly needed in an O(1)-average LFU cache design?",
        "options": [
          "Key-to-node and frequency-to-list mappings",
          "Only key-to-value",
          "Only value-to-key",
          "Only node-to-index"
        ],
        "correctIndex": 0,
        "explanation": "One mapping locates entries while another tracks the linked list for each frequency."
      },
      {
        "id": "quiz-linked-lists-set-18-q5",
        "question": "Why is a frequency-to-doubly-linked-list mapping useful in LFU?",
        "options": [
          "It allows efficient movement of nodes between frequency groups",
          "It stores every possible key",
          "It sorts all frequencies in O(1)",
          "It removes the need for nodes"
        ],
        "correctIndex": 0,
        "explanation": "When an item's frequency changes, it can be removed from one list and added to another efficiently."
      },
      {
        "id": "quiz-linked-lists-set-18-q6",
        "question": "If two LFU items have the same minimum frequency, what tie-breaker is commonly used?",
        "options": [
          "Least recently used among those items",
          "Largest key",
          "Smallest value",
          "First item alphabetically"
        ],
        "correctIndex": 0,
        "explanation": "LRU is commonly used as the tie-breaker when frequencies are equal."
      },
      {
        "id": "quiz-linked-lists-set-18-q7",
        "question": "What is the typical target complexity for get and put in an optimized LFU cache?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1) average",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "With appropriate hash maps and doubly linked lists, both operations can be implemented in O(1) average time."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-19",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 19",
    "subtitle": "Advanced questions for Linked Lists (Set 19/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-linked-lists-set-19-q1",
        "question": "What is the main idea behind sorting a linked list with O(1) auxiliary pointer space using bottom-up merge sort?",
        "options": [
          "Iteratively merge sorted runs of increasing size",
          "Use recursion for every node",
          "Convert the list to an array",
          "Use binary search on each node"
        ],
        "correctIndex": 0,
        "explanation": "Bottom-up merge sort avoids recursive call-stack growth by iteratively merging runs."
      },
      {
        "id": "quiz-linked-lists-set-19-q2",
        "question": "What is the time complexity of bottom-up merge sort on a linked list?",
        "options": [
          "O(n2)",
          "O(n log n)",
          "O(log n)",
          "O(n)"
        ],
        "correctIndex": 1,
        "explanation": "The list undergoes O(log n) rounds of merging with O(n) work per round."
      },
      {
        "id": "quiz-linked-lists-set-19-q3",
        "question": "Why can linked lists be sorted without allocating an array of node values?",
        "options": [
          "Nodes can be reordered by changing their next pointers",
          "Linked lists are always sorted",
          "Pointers automatically sort nodes",
          "Sorting is unnecessary"
        ],
        "correctIndex": 0,
        "explanation": "The nodes themselves can be rearranged by modifying links."
      },
      {
        "id": "quiz-linked-lists-set-19-q4",
        "question": "What is the key invariant when manipulating a linked list in place?",
        "options": [
          "Every required node must remain reachable unless intentionally removed",
          "The list must remain sorted after every pointer change",
          "Every node must point to the head",
          "The tail must always point to null"
        ],
        "correctIndex": 0,
        "explanation": "Careful pointer management prevents accidentally disconnecting parts of the list."
      },
      {
        "id": "quiz-linked-lists-set-19-q5",
        "question": "What is a common debugging strategy for complex linked-list pointer manipulation?",
        "options": [
          "Draw the nodes and arrows and track each pointer update",
          "Randomly change pointer assignments",
          "Sort the list after every operation",
          "Ignore edge cases"
        ],
        "correctIndex": 0,
        "explanation": "Visualizing node relationships makes pointer changes and lost references easier to identify."
      },
      {
        "id": "quiz-linked-lists-set-19-q6",
        "question": "Which edge case should be explicitly considered when reversing or modifying a linked list?",
        "options": [
          "Empty list and single-node list",
          "Only lists with exactly 100 nodes",
          "Only sorted lists",
          "Only lists containing positive values"
        ],
        "correctIndex": 0,
        "explanation": "Empty and single-node lists often require special handling or careful boundary conditions."
      },
      {
        "id": "quiz-linked-lists-set-19-q7",
        "question": "What can happen if a pointer is changed before saving the node it originally referenced?",
        "options": [
          "The remaining portion of the list may become inaccessible",
          "The list becomes automatically sorted",
          "The list gains a new node",
          "The operation becomes O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Overwriting a link without preserving its target can permanently lose access to that part of the structure."
      }
    ]
  },
  {
    "id": "quiz-linked-lists-set-20",
    "topicId": "linked-lists",
    "title": "Linked Lists Quiz - Level 20",
    "subtitle": "Advanced questions for Linked Lists (Set 20/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-linked-lists-set-20-q1",
        "question": "Which combination best represents the advanced linked-list patterns that repeatedly appear in interview problems?",
        "options": [
          "Two pointers, dummy nodes, reversal, merging, and careful pointer reconnection",
          "Only binary search and sorting",
          "Only recursion and arrays",
          "Only hash maps"
        ],
        "correctIndex": 0,
        "explanation": "These techniques form the foundation for many difficult linked-list problems."
      },
      {
        "id": "quiz-linked-lists-set-20-q2",
        "question": "What is the most important reason for saving current.next before modifying current.next during reversal?",
        "options": [
          "To preserve access to the unreversed portion of the list",
          "To make the list sorted",
          "To reduce the number of nodes",
          "To detect whether the list is circular"
        ],
        "correctIndex": 0,
        "explanation": "The original next node is needed to continue traversal after the link is reversed."
      },
      {
        "id": "quiz-linked-lists-set-20-q3",
        "question": "Which approach can achieve O(1) extra space for detecting a cycle and locating its entrance?",
        "options": [
          "Floyd's tortoise-and-hare algorithm",
          "Hashing every node",
          "Sorting node values",
          "Converting the list into an array"
        ],
        "correctIndex": 0,
        "explanation": "Floyd's algorithm uses only a constant number of pointers."
      },
      {
        "id": "quiz-linked-lists-set-20-q4",
        "question": "Which data structure combination can provide O(1) average lookup and O(1) node removal for an LRU cache?",
        "options": [
          "Hash map and doubly linked list",
          "Array and singly linked list",
          "Queue and binary tree",
          "Stack and heap"
        ],
        "correctIndex": 0,
        "explanation": "The hash map locates nodes while the doubly linked list supports direct removal and insertion."
      },
      {
        "id": "quiz-linked-lists-set-20-q5",
        "question": "Why is merge sort generally preferred over quicksort for linked-list sorting?",
        "options": [
          "It works naturally with sequential pointer access and can merge by changing links",
          "Linked lists cannot contain pivot values",
          "Quicksort cannot compare values",
          "Merge sort always uses O(1) total memory"
        ],
        "correctIndex": 0,
        "explanation": "Merge sort does not depend on random access and can efficiently rearrange nodes through pointers."
      },
      {
        "id": "quiz-linked-lists-set-20-q6",
        "question": "What is the key distinction between node equality and value equality in linked-list problems?",
        "options": [
          "Node equality refers to the same object/reference, while value equality compares stored data",
          "They are always identical",
          "Node equality compares only values",
          "Value equality requires the same memory address"
        ],
        "correctIndex": 0,
        "explanation": "Problems such as linked-list intersection often depend on actual node identity rather than equal values."
      },
      {
        "id": "quiz-linked-lists-set-20-q7",
        "question": "When solving a complex linked-list problem, what should you prioritize before writing pointer updates?",
        "options": [
          "Identify invariants, draw the pointer relationships, handle edge cases, and preserve reachability",
          "Write all pointer assignments immediately",
          "Sort the list first regardless of the problem",
          "Use recursion for every problem"
        ],
        "correctIndex": 0,
        "explanation": "Careful planning prevents lost nodes, incorrect reconnections, and failures on empty or boundary cases."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-1",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 1",
    "subtitle": "Beginner questions for Stacks (Set 1/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-stacks-set-1-q1",
        "question": "What is a stack in data structures?",
        "options": [
          "A collection that follows LIFO order",
          "A collection that follows FIFO order",
          "A tree where every node has two children",
          "A key-value collection"
        ],
        "correctIndex": 0,
        "explanation": "A stack follows Last In, First Out (LIFO), meaning the most recently added item is removed first."
      },
      {
        "id": "quiz-stacks-set-1-q2",
        "question": "What does LIFO stand for?",
        "options": [
          "Last In, First Out",
          "Last Index, First Output",
          "Least In, First Out",
          "Linear Input, Fixed Output"
        ],
        "correctIndex": 0,
        "explanation": "LIFO means the last element inserted is the first element removed."
      },
      {
        "id": "quiz-stacks-set-1-q3",
        "question": "Which real-world example best represents a stack?",
        "options": [
          "A queue at a ticket counter",
          "A stack of plates",
          "A dictionary",
          "A classroom seating chart"
        ],
        "correctIndex": 1,
        "explanation": "In a stack of plates, the last plate placed on top is normally the first one removed."
      },
      {
        "id": "quiz-stacks-set-1-q4",
        "question": "Which operation adds an element to a stack?",
        "options": [
          "Pop",
          "Peek",
          "Push",
          "Delete"
        ],
        "correctIndex": 2,
        "explanation": "Push inserts a new element at the top of the stack."
      },
      {
        "id": "quiz-stacks-set-1-q5",
        "question": "Which operation removes the top element from a stack?",
        "options": [
          "Push",
          "Pop",
          "Peek",
          "Search"
        ],
        "correctIndex": 1,
        "explanation": "Pop removes and usually returns the element currently at the top."
      },
      {
        "id": "quiz-stacks-set-1-q6",
        "question": "Which operation looks at the top element without removing it?",
        "options": [
          "Push",
          "Pop",
          "Peek",
          "Clear"
        ],
        "correctIndex": 2,
        "explanation": "Peek or top reads the current top element without modifying the stack."
      },
      {
        "id": "quiz-stacks-set-1-q7",
        "question": "What is an empty stack?",
        "options": [
          "A stack containing one element",
          "A stack containing no elements",
          "A stack with duplicate elements",
          "A stack whose top is the bottom"
        ],
        "correctIndex": 1,
        "explanation": "An empty stack contains zero elements."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-2",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 2",
    "subtitle": "Beginner questions for Stacks (Set 2/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-stacks-set-2-q1",
        "question": "If we push 10, then 20, then 30 onto an empty stack, which element is on top?",
        "options": [
          "10",
          "20",
          "30",
          "The stack has no top"
        ],
        "correctIndex": 2,
        "explanation": "30 was inserted last, so it becomes the top element."
      },
      {
        "id": "quiz-stacks-set-2-q2",
        "question": "After pushing A, B, C and performing one pop, which element is removed?",
        "options": [
          "A",
          "C",
          "B",
          "None"
        ],
        "correctIndex": 1,
        "explanation": "C is the most recently pushed element, so it is removed first."
      },
      {
        "id": "quiz-stacks-set-2-q3",
        "question": "Which element is at the top after push(1), push(2), pop(), push(3)?",
        "options": [
          "1",
          "2",
          "3",
          "The stack is empty"
        ],
        "correctIndex": 2,
        "explanation": "2 is removed by pop, then 3 is pushed and becomes the top."
      },
      {
        "id": "quiz-stacks-set-2-q4",
        "question": "What happens when pop is performed on an empty stack?",
        "options": [
          "The stack automatically adds an element",
          "It causes an underflow condition",
          "It returns the bottom element",
          "It reverses the stack"
        ],
        "correctIndex": 1,
        "explanation": "Trying to remove an element from an empty stack results in stack underflow."
      },
      {
        "id": "quiz-stacks-set-2-q5",
        "question": "What is stack overflow?",
        "options": [
          "Trying to push into a full fixed-capacity stack",
          "Trying to pop from an empty stack",
          "Reading the top element",
          "Reversing a stack"
        ],
        "correctIndex": 0,
        "explanation": "Overflow occurs when an insertion is attempted but the stack has reached its capacity."
      },
      {
        "id": "quiz-stacks-set-2-q6",
        "question": "Which end of a stack is used for both insertion and removal?",
        "options": [
          "The middle",
          "The bottom",
          "The top",
          "A random position"
        ],
        "correctIndex": 2,
        "explanation": "Push and pop both operate at the top of a standard stack."
      },
      {
        "id": "quiz-stacks-set-2-q7",
        "question": "Which sequence represents valid LIFO removal after pushing 1, 2, 3?",
        "options": [
          "1, 2, 3",
          "2, 3, 1",
          "3, 2, 1",
          "1, 3, 2"
        ],
        "correctIndex": 2,
        "explanation": "The most recently pushed element must be removed first, producing 3, 2, 1."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-3",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 3",
    "subtitle": "Beginner questions for Stacks (Set 3/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-stacks-set-3-q1",
        "question": "What is the typical time complexity of push in a stack?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 1,
        "explanation": "Push normally inserts directly at the top, requiring constant time."
      },
      {
        "id": "quiz-stacks-set-3-q2",
        "question": "What is the typical time complexity of pop in a stack?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "Removing the top element requires only a constant number of operations."
      },
      {
        "id": "quiz-stacks-set-3-q3",
        "question": "What is the typical time complexity of peek?",
        "options": [
          "O(n)",
          "O(1)",
          "O(n log n)",
          "O(log n)"
        ],
        "correctIndex": 1,
        "explanation": "The top element can be accessed directly."
      },
      {
        "id": "quiz-stacks-set-3-q4",
        "question": "Which data structure can be used to implement a stack?",
        "options": [
          "Array",
          "Graph only",
          "Binary tree only",
          "Hash function"
        ],
        "correctIndex": 0,
        "explanation": "An array can implement a stack by treating one end as the top."
      },
      {
        "id": "quiz-stacks-set-3-q5",
        "question": "What is one advantage of implementing a stack with a linked list?",
        "options": [
          "The stack can grow dynamically without a fixed array capacity",
          "It provides random access",
          "It requires contiguous memory",
          "It eliminates pointer usage"
        ],
        "correctIndex": 0,
        "explanation": "A linked-list implementation can allocate nodes as needed, subject to available memory."
      },
      {
        "id": "quiz-stacks-set-3-q6",
        "question": "Where should the top of a stack usually be maintained when using a singly linked list?",
        "options": [
          "At the head",
          "At the middle",
          "At the tail only",
          "At a random node"
        ],
        "correctIndex": 0,
        "explanation": "Using the head allows push and pop to be performed in O(1) time."
      },
      {
        "id": "quiz-stacks-set-3-q7",
        "question": "What is the space complexity of storing n elements in a stack?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "The stack needs storage for all n elements."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-4",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 4",
    "subtitle": "Beginner questions for Stacks (Set 4/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-stacks-set-4-q1",
        "question": "Which problem is naturally solved using a stack?",
        "options": [
          "Checking balanced parentheses",
          "Finding the minimum spanning tree",
          "Binary search in a sorted array",
          "Finding shortest paths in a weighted graph"
        ],
        "correctIndex": 0,
        "explanation": "Opening brackets can be pushed and matched when their corresponding closing brackets appear."
      },
      {
        "id": "quiz-stacks-set-4-q2",
        "question": "What should happen when an opening parenthesis '(' is encountered while checking balanced brackets?",
        "options": [
          "Push it onto the stack",
          "Immediately remove it",
          "Ignore it",
          "Sort it"
        ],
        "correctIndex": 0,
        "explanation": "Opening brackets are stored so they can later be matched with closing brackets."
      },
      {
        "id": "quiz-stacks-set-4-q3",
        "question": "When a closing bracket ')' is encountered, what should be checked?",
        "options": [
          "Whether the stack contains the matching opening bracket on top",
          "Whether the queue is empty",
          "Whether the string is sorted",
          "Whether the bracket is the first character"
        ],
        "correctIndex": 0,
        "explanation": "The most recent unmatched opening bracket must match the current closing bracket."
      },
      {
        "id": "quiz-stacks-set-4-q4",
        "question": "Which string is correctly balanced?",
        "options": [
          "([{}])",
          "([)]",
          "((]",
          "{[}"
        ],
        "correctIndex": 0,
        "explanation": "Each opening bracket is correctly closed in reverse order."
      },
      {
        "id": "quiz-stacks-set-4-q5",
        "question": "What should happen if a closing bracket appears when the stack is empty?",
        "options": [
          "The expression is invalid",
          "Push the closing bracket",
          "Ignore the bracket",
          "The expression is automatically valid"
        ],
        "correctIndex": 0,
        "explanation": "There is no opening bracket available to match the closing bracket."
      },
      {
        "id": "quiz-stacks-set-4-q6",
        "question": "After processing all characters in a balanced-brackets problem, what should the stack contain?",
        "options": [
          "All closing brackets",
          "Exactly one opening bracket",
          "Nothing",
          "Every character"
        ],
        "correctIndex": 2,
        "explanation": "All opening brackets should have been matched and removed."
      },
      {
        "id": "quiz-stacks-set-4-q7",
        "question": "What is the time complexity of checking balanced brackets in a string of length n?",
        "options": [
          "O(n2)",
          "O(log n)",
          "O(n)",
          "O(1)"
        ],
        "correctIndex": 2,
        "explanation": "Each character is processed once."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-5",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 5",
    "subtitle": "Beginner questions for Stacks (Set 5/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-stacks-set-5-q1",
        "question": "What is a common use of a stack in expression evaluation?",
        "options": [
          "Managing operators and operands",
          "Storing graph edges permanently",
          "Performing binary search",
          "Maintaining sorted arrays automatically"
        ],
        "correctIndex": 0,
        "explanation": "Stacks are fundamental to parsing and evaluating arithmetic expressions."
      },
      {
        "id": "quiz-stacks-set-5-q2",
        "question": "Which notation places operators between operands?",
        "options": [
          "Postfix",
          "Prefix",
          "Infix",
          "Reverse Polish notation"
        ],
        "correctIndex": 2,
        "explanation": "Infix notation writes expressions such as A + B."
      },
      {
        "id": "quiz-stacks-set-5-q3",
        "question": "Which notation represents A + B as AB+?",
        "options": [
          "Prefix",
          "Infix",
          "Postfix",
          "Binary notation"
        ],
        "correctIndex": 2,
        "explanation": "In postfix notation, the operator comes after its operands."
      },
      {
        "id": "quiz-stacks-set-5-q4",
        "question": "Which notation represents A + B as +AB?",
        "options": [
          "Infix",
          "Prefix",
          "Postfix",
          "Suffix array notation"
        ],
        "correctIndex": 1,
        "explanation": "Prefix notation places the operator before its operands."
      },
      {
        "id": "quiz-stacks-set-5-q5",
        "question": "Why are stacks useful for converting infix expressions to postfix?",
        "options": [
          "They temporarily hold operators according to precedence and associativity",
          "They sort operands numerically",
          "They remove all operators",
          "They provide random access to every operator"
        ],
        "correctIndex": 0,
        "explanation": "Operators can be held on a stack until they should appear in the postfix expression."
      },
      {
        "id": "quiz-stacks-set-5-q6",
        "question": "In postfix evaluation, what is typically done when an operand is encountered?",
        "options": [
          "Push it onto the stack",
          "Pop two values",
          "Discard it",
          "Move it to a queue"
        ],
        "correctIndex": 0,
        "explanation": "Operands are stored until an operator requires them."
      },
      {
        "id": "quiz-stacks-set-5-q7",
        "question": "In postfix evaluation, what usually happens when an operator is encountered?",
        "options": [
          "Pop the required operands, apply the operator, and push the result",
          "Push the operator only",
          "Ignore the operator",
          "Reverse the entire stack"
        ],
        "correctIndex": 0,
        "explanation": "The operator consumes the required top operands and places the calculated result back on the stack."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-6",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 6",
    "subtitle": "Beginner questions for Stacks (Set 6/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-stacks-set-6-q1",
        "question": "What is a monotonic stack?",
        "options": [
          "A stack maintained so its elements follow a monotonic increasing or decreasing property",
          "A stack that can only contain one element",
          "A stack that never performs pop",
          "A stack implemented only with a linked list"
        ],
        "correctIndex": 0,
        "explanation": "A monotonic stack maintains elements in increasing or decreasing order according to the problem."
      },
      {
        "id": "quiz-stacks-set-6-q2",
        "question": "Which problem is a classic application of a monotonic stack?",
        "options": [
          "Next Greater Element",
          "Merge Sort",
          "Binary Tree Height",
          "Dijkstra's Algorithm"
        ],
        "correctIndex": 0,
        "explanation": "A monotonic stack efficiently finds the next greater or smaller element."
      },
      {
        "id": "quiz-stacks-set-6-q3",
        "question": "For the array [2,1,3], what is the next greater element for 1?",
        "options": [
          "2",
          "1",
          "3",
          "-1"
        ],
        "correctIndex": 2,
        "explanation": "3 is the first element to the right of 1 that is greater than 1."
      },
      {
        "id": "quiz-stacks-set-6-q4",
        "question": "Why can a monotonic stack solve Next Greater Element in O(n)?",
        "options": [
          "Each element is pushed and popped at most once",
          "The array is always sorted",
          "Each element is examined exactly n times",
          "The stack stores only one element"
        ],
        "correctIndex": 0,
        "explanation": "Although there are nested-looking operations, each element enters and leaves the stack at most once."
      },
      {
        "id": "quiz-stacks-set-6-q5",
        "question": "In a decreasing monotonic stack, when processing a new value, what often happens?",
        "options": [
          "Smaller elements can be popped until the required property is restored",
          "All elements are pushed without comparison",
          "The stack is cleared every time",
          "The new value is always discarded"
        ],
        "correctIndex": 0,
        "explanation": "Popping smaller elements maintains the decreasing-stack invariant."
      },
      {
        "id": "quiz-stacks-set-6-q6",
        "question": "What is the auxiliary space complexity of a monotonic stack algorithm in the worst case?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "In the worst case, all n elements may remain in the stack."
      },
      {
        "id": "quiz-stacks-set-6-q7",
        "question": "Which sequence can cause a decreasing monotonic stack to contain many elements?",
        "options": [
          "[5,4,3,2,1]",
          "[1,2,3,4,5]",
          "[3,3,3,3]",
          "[1]"
        ],
        "correctIndex": 0,
        "explanation": "A decreasing sequence naturally maintains many elements in a decreasing stack."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-7",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 7",
    "subtitle": "Intermediate questions for Stacks (Set 7/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-stacks-set-7-q1",
        "question": "What is the result of applying the postfix expression 2 3 + 4 *?",
        "options": [
          "14",
          "20",
          "9",
          "24"
        ],
        "correctIndex": 1,
        "explanation": "First calculate 2+3=5, then multiply by 4 to get 20."
      },
      {
        "id": "quiz-stacks-set-7-q2",
        "question": "What is the postfix representation of A * (B + C)?",
        "options": [
          "ABC+*",
          "AB*C+",
          "A*BC+",
          "AB+C*"
        ],
        "correctIndex": 0,
        "explanation": "B+C is evaluated first as BC+, then A is multiplied by the result."
      },
      {
        "id": "quiz-stacks-set-7-q3",
        "question": "Which operator generally has higher precedence than addition?",
        "options": [
          "+",
          "*",
          "-",
          "="
        ],
        "correctIndex": 1,
        "explanation": "Multiplication has higher precedence than addition in standard arithmetic."
      },
      {
        "id": "quiz-stacks-set-7-q4",
        "question": "What does operator associativity determine?",
        "options": [
          "The direction in which operators of the same precedence are evaluated",
          "The number of operands",
          "The size of the stack",
          "Whether an operator is valid"
        ],
        "correctIndex": 0,
        "explanation": "Associativity determines whether same-precedence operations group from left to right or right to left."
      },
      {
        "id": "quiz-stacks-set-7-q5",
        "question": "Which operator is typically right-associative?",
        "options": [
          "+",
          "*",
          "^",
          "-"
        ],
        "correctIndex": 2,
        "explanation": "Exponentiation is commonly treated as right-associative in expression parsing."
      },
      {
        "id": "quiz-stacks-set-7-q6",
        "question": "During infix-to-postfix conversion, what should happen when a closing parenthesis is encountered?",
        "options": [
          "Pop operators until the matching opening parenthesis is found",
          "Push the closing parenthesis permanently",
          "Discard all operators",
          "Reverse the expression"
        ],
        "correctIndex": 0,
        "explanation": "Operators inside the parentheses must be output before the opening parenthesis is removed."
      },
      {
        "id": "quiz-stacks-set-7-q7",
        "question": "Why should parentheses generally not appear in the final postfix expression?",
        "options": [
          "Postfix ordering already encodes the grouping",
          "Postfix expressions cannot contain numbers",
          "Parentheses are always invalid syntax",
          "They are replaced by multiplication"
        ],
        "correctIndex": 0,
        "explanation": "The operator order in postfix notation makes explicit parentheses unnecessary."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-8",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 8",
    "subtitle": "Intermediate questions for Stacks (Set 8/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-stacks-set-8-q1",
        "question": "What is the key idea of the Daily Temperatures problem?",
        "options": [
          "Find how many days until a warmer temperature for each day",
          "Find the average temperature",
          "Sort temperatures",
          "Find the coldest day only"
        ],
        "correctIndex": 0,
        "explanation": "For every day, the task is to find the distance to the next greater temperature."
      },
      {
        "id": "quiz-stacks-set-8-q2",
        "question": "Which structure efficiently solves Daily Temperatures?",
        "options": [
          "Monotonic decreasing stack of indices",
          "Queue of sorted values",
          "Binary search tree only",
          "Hash map of temperatures only"
        ],
        "correctIndex": 0,
        "explanation": "A decreasing stack of indices keeps unresolved temperatures until a warmer day appears."
      },
      {
        "id": "quiz-stacks-set-8-q3",
        "question": "Why are indices stored rather than only temperatures in Daily Temperatures?",
        "options": [
          "The answer requires the distance between days",
          "Temperatures cannot be compared",
          "Indices use no memory",
          "The stack cannot store values"
        ],
        "correctIndex": 0,
        "explanation": "The index difference gives the number of days until the warmer temperature."
      },
      {
        "id": "quiz-stacks-set-8-q4",
        "question": "When a current temperature is warmer than the temperature at the stack's top index, what should happen?",
        "options": [
          "Pop the colder index and calculate its waiting distance",
          "Discard the current temperature",
          "Push the current temperature without comparison",
          "Clear the entire stack"
        ],
        "correctIndex": 0,
        "explanation": "The current day resolves the next-warmer-day answer for the colder top index."
      },
      {
        "id": "quiz-stacks-set-8-q5",
        "question": "What is the time complexity of the monotonic-stack solution for Daily Temperatures?",
        "options": [
          "O(n2)",
          "O(n)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 1,
        "explanation": "Each index is pushed and popped at most once."
      },
      {
        "id": "quiz-stacks-set-8-q6",
        "question": "What happens to indices remaining in the stack after processing all temperatures?",
        "options": [
          "They have no warmer day later, so their answers remain 0",
          "They are automatically assigned 1",
          "They are reversed",
          "They are deleted from the result"
        ],
        "correctIndex": 0,
        "explanation": "No later temperature is warmer for those unresolved indices."
      },
      {
        "id": "quiz-stacks-set-8-q7",
        "question": "Which input causes every answer in Daily Temperatures to be 0?",
        "options": [
          "[5,4,3,2,1]",
          "[1,2,3,4,5]",
          "[2,3,1]",
          "[1,1,2]"
        ],
        "correctIndex": 0,
        "explanation": "Every temperature is followed only by smaller temperatures, so no warmer day exists."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-9",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 9",
    "subtitle": "Intermediate questions for Stacks (Set 9/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-stacks-set-9-q1",
        "question": "What problem does the Largest Rectangle in Histogram ask you to solve?",
        "options": [
          "Find the largest rectangular area that can be formed using consecutive histogram bars",
          "Find the tallest bar only",
          "Sort all bar heights",
          "Find the average bar height"
        ],
        "correctIndex": 0,
        "explanation": "The goal is to maximize width multiplied by height for a contiguous range of bars."
      },
      {
        "id": "quiz-stacks-set-9-q2",
        "question": "Which structure is commonly used for an O(n) solution to Largest Rectangle in Histogram?",
        "options": [
          "Monotonic increasing stack",
          "Queue",
          "Hash map only",
          "Binary heap only"
        ],
        "correctIndex": 0,
        "explanation": "An increasing stack helps identify the boundaries where each bar can extend."
      },
      {
        "id": "quiz-stacks-set-9-q3",
        "question": "What does a bar's height need to determine in the histogram problem?",
        "options": [
          "How far it can extend left and right while remaining the limiting height",
          "Its alphabetical position",
          "Its binary representation",
          "Its distance from zero only"
        ],
        "correctIndex": 0,
        "explanation": "The maximal rectangle for a bar depends on the nearest smaller bars on both sides."
      },
      {
        "id": "quiz-stacks-set-9-q4",
        "question": "When a shorter bar is encountered in an increasing-stack solution, what can happen?",
        "options": [
          "Taller bars can be popped and their maximum areas calculated",
          "The entire histogram is sorted",
          "The shorter bar is always discarded",
          "Nothing can be calculated"
        ],
        "correctIndex": 0,
        "explanation": "The shorter bar establishes the right boundary for taller bars currently in the stack."
      },
      {
        "id": "quiz-stacks-set-9-q5",
        "question": "What is the time complexity of the monotonic-stack solution for Largest Rectangle in Histogram?",
        "options": [
          "O(n2)",
          "O(n)",
          "O(log n)",
          "O(n log n)"
        ],
        "correctIndex": 1,
        "explanation": "Each bar is pushed and popped at most once."
      },
      {
        "id": "quiz-stacks-set-9-q6",
        "question": "For histogram [2,1,5,6,2,3], what is the largest rectangle area?",
        "options": [
          "8",
          "10",
          "12",
          "6"
        ],
        "correctIndex": 1,
        "explanation": "The bars with heights 5 and 6 form a rectangle of height 5 and width 2, giving area 10."
      },
      {
        "id": "quiz-stacks-set-9-q7",
        "question": "Why is a sentinel value sometimes added to the end of the histogram?",
        "options": [
          "To force all remaining stack elements to be processed",
          "To increase the maximum area",
          "To sort the histogram",
          "To remove the smallest bar"
        ],
        "correctIndex": 0,
        "explanation": "A final small value triggers the popping and area calculation for bars remaining in the stack."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-10",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 10",
    "subtitle": "Intermediate questions for Stacks (Set 10/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-stacks-set-10-q1",
        "question": "How can two stacks be used to implement a queue?",
        "options": [
          "Use one stack for incoming elements and another for outgoing elements",
          "Put all elements in one stack and ignore order",
          "Use both stacks only for sorting",
          "Push every element into both stacks"
        ],
        "correctIndex": 0,
        "explanation": "One stack receives new elements while the other reverses their order for FIFO behavior."
      },
      {
        "id": "quiz-stacks-set-10-q2",
        "question": "Why does moving elements between two stacks help create FIFO behavior?",
        "options": [
          "The second stack reverses the order of elements from the first stack",
          "Both stacks remove from the bottom",
          "Stacks naturally follow FIFO",
          "The elements become sorted"
        ],
        "correctIndex": 0,
        "explanation": "Two reversals effectively restore the original insertion order for queue removal."
      },
      {
        "id": "quiz-stacks-set-10-q3",
        "question": "In the two-stack queue, when should elements usually be transferred from the input stack to the output stack?",
        "options": [
          "When the output stack is empty and an element is needed",
          "After every push",
          "Before every push",
          "Only when the queue is full"
        ],
        "correctIndex": 0,
        "explanation": "Transferring only when necessary provides efficient amortized performance."
      },
      {
        "id": "quiz-stacks-set-10-q4",
        "question": "What is the amortized complexity of enqueue and dequeue in the two-stack queue?",
        "options": [
          "O(n) per operation",
          "O(1) amortized",
          "O(log n) amortized",
          "O(n2)"
        ],
        "correctIndex": 1,
        "explanation": "Each element moves between stacks only a constant number of times."
      },
      {
        "id": "quiz-stacks-set-10-q5",
        "question": "Which stack operation is useful for implementing an undo feature?",
        "options": [
          "Push each new action and pop it when undoing",
          "Peek only and never modify",
          "Sort actions after every change",
          "Remove the bottom action first"
        ],
        "correctIndex": 0,
        "explanation": "Undo naturally follows LIFO because the most recent action is undone first."
      },
      {
        "id": "quiz-stacks-set-10-q6",
        "question": "Which real-world system naturally follows stack-like undo behavior?",
        "options": [
          "Undoing recent edits in a text editor",
          "Customers waiting in line",
          "Printing documents in arrival order",
          "Processing packets by priority only"
        ],
        "correctIndex": 0,
        "explanation": "The latest edit is generally the first one removed when undo is performed."
      },
      {
        "id": "quiz-stacks-set-10-q7",
        "question": "What is a common way to support both undo and redo?",
        "options": [
          "Use two stacks",
          "Use only one queue",
          "Use binary search",
          "Use a single pointer"
        ],
        "correctIndex": 0,
        "explanation": "One stack can hold undoable actions while another holds actions that can be redone."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-11",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 11",
    "subtitle": "Intermediate questions for Stacks (Set 11/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-stacks-set-11-q1",
        "question": "What is the Next Smaller Element problem?",
        "options": [
          "Find the first smaller element to the right or left according to the problem definition",
          "Find the smallest element in the entire array",
          "Sort the array",
          "Find the largest subarray"
        ],
        "correctIndex": 0,
        "explanation": "The problem asks for the nearest element satisfying a smaller-value condition."
      },
      {
        "id": "quiz-stacks-set-11-q2",
        "question": "Which structure efficiently solves Next Smaller Element?",
        "options": [
          "Monotonic stack",
          "Queue",
          "Binary tree only",
          "Hash set only"
        ],
        "correctIndex": 0,
        "explanation": "A monotonic stack maintains candidates whose next smaller element has not yet been found."
      },
      {
        "id": "quiz-stacks-set-11-q3",
        "question": "For [4,5,2,10], what is the next smaller element to the right of 5?",
        "options": [
          "4",
          "2",
          "10",
          "-1"
        ],
        "correctIndex": 1,
        "explanation": "2 is the first element to the right of 5 that is smaller."
      },
      {
        "id": "quiz-stacks-set-11-q4",
        "question": "What is the typical time complexity of a monotonic-stack solution for Next Smaller Element?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Each element is pushed and popped at most once."
      },
      {
        "id": "quiz-stacks-set-11-q5",
        "question": "What is a circular-array variation of Next Greater Element?",
        "options": [
          "Treat the array as if it wraps around to its beginning",
          "Sort the array twice",
          "Remove the first element",
          "Reverse the array permanently"
        ],
        "correctIndex": 0,
        "explanation": "Elements at the end can have greater elements among elements at the beginning."
      },
      {
        "id": "quiz-stacks-set-11-q6",
        "question": "How can a circular Next Greater Element problem be handled using a stack?",
        "options": [
          "Process the array conceptually twice using modulo indexing",
          "Only process the first half",
          "Sort the array first",
          "Use a queue instead"
        ],
        "correctIndex": 0,
        "explanation": "Two passes or equivalent modulo indexing provide access to the wrapped portion."
      },
      {
        "id": "quiz-stacks-set-11-q7",
        "question": "What should the answer be when no greater element exists in a Next Greater Element problem?",
        "options": [
          "0",
          "-1",
          "The current value",
          "The largest value"
        ],
        "correctIndex": 1,
        "explanation": "A common convention is to use -1 to indicate that no greater element exists."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-12",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 12",
    "subtitle": "Intermediate questions for Stacks (Set 12/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-stacks-set-12-q1",
        "question": "What is a Min Stack?",
        "options": [
          "A stack that supports retrieving the minimum element efficiently",
          "A stack that stores only negative values",
          "A stack sorted permanently after every operation",
          "A stack with a minimum capacity of one"
        ],
        "correctIndex": 0,
        "explanation": "A Min Stack supports normal stack operations plus efficient retrieval of the minimum value."
      },
      {
        "id": "quiz-stacks-set-12-q2",
        "question": "What time complexity is typically targeted for getMin in a Min Stack?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "The minimum can be tracked so that retrieving it requires constant time."
      },
      {
        "id": "quiz-stacks-set-12-q3",
        "question": "Which technique can implement a Min Stack using two stacks?",
        "options": [
          "Use one stack for values and another for minimum values",
          "Use two queues and sort them",
          "Store only the minimum value",
          "Use binary search"
        ],
        "correctIndex": 0,
        "explanation": "The second stack tracks the minimum corresponding to each relevant stack state."
      },
      {
        "id": "quiz-stacks-set-12-q4",
        "question": "When pushing a new value x into a two-stack Min Stack, when might x be pushed onto the minimum stack?",
        "options": [
          "When the minimum stack is empty or x is no greater than its current minimum",
          "Only when x is the largest value",
          "Never",
          "Only after popping"
        ],
        "correctIndex": 0,
        "explanation": "A new value becomes the minimum if it is less than or equal to the current minimum."
      },
      {
        "id": "quiz-stacks-set-12-q5",
        "question": "What should happen to the minimum-tracking structure when its corresponding minimum value is popped?",
        "options": [
          "Update or pop the minimum tracking state accordingly",
          "Leave it unchanged forever",
          "Sort the entire stack",
          "Clear the value stack"
        ],
        "correctIndex": 0,
        "explanation": "The minimum structure must remain synchronized with the main stack."
      },
      {
        "id": "quiz-stacks-set-12-q6",
        "question": "What is the extra space complexity of a simple two-stack Min Stack implementation?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "The auxiliary minimum stack can contain up to n elements."
      },
      {
        "id": "quiz-stacks-set-12-q7",
        "question": "Can a Min Stack preserve normal LIFO behavior while supporting getMin in O(1)?",
        "options": [
          "Yes",
          "No",
          "Only for sorted inputs",
          "Only when there are two elements"
        ],
        "correctIndex": 0,
        "explanation": "Additional tracking allows minimum retrieval without changing normal stack behavior."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-13",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 13",
    "subtitle": "Intermediate questions for Stacks (Set 13/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-stacks-set-13-q1",
        "question": "What is the largest rectangle in a binary matrix problem typically solved using?",
        "options": [
          "Histogram transformation combined with a monotonic stack",
          "Binary search only",
          "BFS only",
          "A hash set"
        ],
        "correctIndex": 0,
        "explanation": "Each matrix row can be treated as the base of a histogram, then the largest rectangle algorithm is applied."
      },
      {
        "id": "quiz-stacks-set-13-q2",
        "question": "When processing a binary matrix row, what happens to a column height when the current cell contains 1?",
        "options": [
          "Its height increases by one",
          "Its height becomes zero",
          "Its height is deleted",
          "Its height becomes the row index"
        ],
        "correctIndex": 0,
        "explanation": "Consecutive 1s vertically contribute to the histogram height."
      },
      {
        "id": "quiz-stacks-set-13-q3",
        "question": "What happens to a histogram height when the current cell contains 0?",
        "options": [
          "It resets to zero",
          "It increases by one",
          "It remains unchanged",
          "It becomes negative"
        ],
        "correctIndex": 0,
        "explanation": "A zero breaks the consecutive sequence of 1s."
      },
      {
        "id": "quiz-stacks-set-13-q4",
        "question": "What is the target time complexity for the maximal rectangle problem in an m*n binary matrix using histogram stacks?",
        "options": [
          "O(mn)",
          "O(m2n2)",
          "O(m+n)",
          "O(log(mn))"
        ],
        "correctIndex": 0,
        "explanation": "Each row produces an O(n) histogram computation, resulting in O(mn)."
      },
      {
        "id": "quiz-stacks-set-13-q5",
        "question": "Which stack invariant is useful for largest-rectangle histogram calculations?",
        "options": [
          "Maintain indices whose corresponding heights are monotonic",
          "Maintain all indices in arbitrary order",
          "Store only the largest height",
          "Store only zero-height bars"
        ],
        "correctIndex": 0,
        "explanation": "Monotonic ordering allows boundaries for rectangle widths to be found efficiently."
      },
      {
        "id": "quiz-stacks-set-13-q6",
        "question": "Why are indices rather than only heights usually stored in the histogram stack?",
        "options": [
          "The indices are needed to calculate rectangle width",
          "Heights cannot be compared",
          "Indices require no memory",
          "The stack can only store indexes"
        ],
        "correctIndex": 0,
        "explanation": "The width is determined from the positions of the current and boundary bars."
      },
      {
        "id": "quiz-stacks-set-13-q7",
        "question": "What happens when the current histogram height is smaller than the stack-top height?",
        "options": [
          "Higher bars are popped and their possible rectangle areas are calculated",
          "The current height is ignored",
          "The entire matrix is sorted",
          "The stack becomes a queue"
        ],
        "correctIndex": 0,
        "explanation": "The current smaller height establishes a right boundary for taller bars."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-14",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 14",
    "subtitle": "Advanced questions for Stacks (Set 14/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-stacks-set-14-q1",
        "question": "What is the purpose of a monotonic deque compared with a monotonic stack?",
        "options": [
          "It can efficiently maintain candidates from both ends",
          "It cannot remove elements",
          "It always sorts the entire array",
          "It follows strict LIFO behavior only"
        ],
        "correctIndex": 0,
        "explanation": "A deque supports both front and back operations, making it useful for sliding-window problems."
      },
      {
        "id": "quiz-stacks-set-14-q2",
        "question": "Which problem commonly uses a monotonic deque rather than a stack?",
        "options": [
          "Sliding Window Maximum",
          "Balanced Parentheses",
          "Postfix Evaluation",
          "Infix Conversion"
        ],
        "correctIndex": 0,
        "explanation": "A deque maintains useful maximum candidates while elements enter and leave the window."
      },
      {
        "id": "quiz-stacks-set-14-q3",
        "question": "In Sliding Window Maximum, what does a decreasing deque usually store?",
        "options": [
          "Indices whose values are candidates for the maximum",
          "All values in sorted order permanently",
          "Only the smallest values",
          "Random indices"
        ],
        "correctIndex": 0,
        "explanation": "The front holds the index of the largest current candidate."
      },
      {
        "id": "quiz-stacks-set-14-q4",
        "question": "Why are indices useful in a sliding-window maximum?",
        "options": [
          "They determine whether an element has moved outside the current window",
          "They automatically store maximum values",
          "They eliminate comparisons",
          "They make all values equal"
        ],
        "correctIndex": 0,
        "explanation": "An index tells us whether its corresponding element is still inside the window."
      },
      {
        "id": "quiz-stacks-set-14-q5",
        "question": "What is the time complexity of the standard monotonic-deque Sliding Window Maximum algorithm?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(k2)"
        ],
        "correctIndex": 0,
        "explanation": "Each element enters and leaves the deque at most once."
      },
      {
        "id": "quiz-stacks-set-14-q6",
        "question": "What should happen when the deque front index is outside the current window?",
        "options": [
          "Remove it from the front",
          "Move it to the back",
          "Duplicate it",
          "Ignore the window"
        ],
        "correctIndex": 0,
        "explanation": "Expired indices cannot contribute to the maximum of the current window."
      },
      {
        "id": "quiz-stacks-set-14-q7",
        "question": "What should happen to smaller values at the back of a decreasing deque when a larger current value arrives?",
        "options": [
          "Remove them because they can no longer become the maximum while the larger value remains",
          "Move them to the front",
          "Duplicate them",
          "Sort the entire deque"
        ],
        "correctIndex": 0,
        "explanation": "A larger newer value dominates smaller older values for future windows containing both."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-15",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 15",
    "subtitle": "Advanced questions for Stacks (Set 15/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-stacks-set-15-q1",
        "question": "What is the key idea behind the asteroid collision problem?",
        "options": [
          "Use a stack to keep unresolved asteroids and simulate collisions with the current asteroid",
          "Sort asteroids by size",
          "Use a queue to process both directions equally",
          "Ignore negative values"
        ],
        "correctIndex": 0,
        "explanation": "A stack preserves asteroids moving forward until a potential collision occurs."
      },
      {
        "id": "quiz-stacks-set-15-q2",
        "question": "When can two asteroids collide in the standard asteroid collision problem?",
        "options": [
          "When the stack top moves right and the current asteroid moves left",
          "Whenever both move right",
          "Whenever both move left",
          "Only when their sizes are equal"
        ],
        "correctIndex": 0,
        "explanation": "A right-moving asteroid followed by a left-moving asteroid creates a possible collision."
      },
      {
        "id": "quiz-stacks-set-15-q3",
        "question": "If two colliding asteroids have equal absolute sizes, what happens?",
        "options": [
          "Both are destroyed",
          "The left asteroid survives",
          "The right asteroid survives",
          "They merge"
        ],
        "correctIndex": 0,
        "explanation": "Equal-sized opposing asteroids destroy each other."
      },
      {
        "id": "quiz-stacks-set-15-q4",
        "question": "If the stack top asteroid is smaller than an incoming left-moving asteroid, what happens?",
        "options": [
          "The stack top is destroyed and another collision may need to be checked",
          "The incoming asteroid is always destroyed",
          "Both remain unchanged",
          "The list is sorted"
        ],
        "correctIndex": 0,
        "explanation": "The larger incoming asteroid destroys the smaller stack-top asteroid and may continue colliding."
      },
      {
        "id": "quiz-stacks-set-15-q5",
        "question": "What is the worst-case time complexity of the stack-based asteroid collision solution?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(2n)"
        ],
        "correctIndex": 0,
        "explanation": "Each asteroid can be pushed and popped only a bounded number of times."
      },
      {
        "id": "quiz-stacks-set-15-q6",
        "question": "What happens if an incoming asteroid survives all possible collisions?",
        "options": [
          "It is pushed onto the stack",
          "It is discarded",
          "It becomes the first asteroid",
          "It is sorted"
        ],
        "correctIndex": 0,
        "explanation": "A surviving asteroid becomes part of the unresolved sequence."
      },
      {
        "id": "quiz-stacks-set-15-q7",
        "question": "Which sequence demonstrates a collision between adjacent asteroids?",
        "options": [
          "[5, -3]",
          "[-5, -3]",
          "[3, 5]",
          "[-3, -5]"
        ],
        "correctIndex": 0,
        "explanation": "5 moves right and -3 moves left, so they move toward each other."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-16",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 16",
    "subtitle": "Advanced questions for Stacks (Set 16/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-stacks-set-16-q1",
        "question": "What is a frequency stack designed to do?",
        "options": [
          "Pop the most frequent element, breaking ties by recency",
          "Always pop the smallest element",
          "Always pop the oldest element",
          "Sort all elements after every push"
        ],
        "correctIndex": 0,
        "explanation": "A frequency stack prioritizes frequency first and recency second."
      },
      {
        "id": "quiz-stacks-set-16-q2",
        "question": "What information must a frequency stack maintain?",
        "options": [
          "Frequency of each value and groups of values by frequency",
          "Only the minimum value",
          "Only insertion order",
          "Only the largest value"
        ],
        "correctIndex": 0,
        "explanation": "Tracking frequencies and stacks for each frequency enables efficient pop operations."
      },
      {
        "id": "quiz-stacks-set-16-q3",
        "question": "If 5 appears three times and 7 appears twice, which should a frequency stack pop first?",
        "options": [
          "5",
          "7",
          "Whichever was inserted first",
          "The smaller value"
        ],
        "correctIndex": 0,
        "explanation": "5 has the highest frequency, so it has priority."
      },
      {
        "id": "quiz-stacks-set-16-q4",
        "question": "If two values have the same highest frequency, how is the tie usually resolved?",
        "options": [
          "Pop the value pushed most recently",
          "Pop the smaller value",
          "Pop the larger value",
          "Pop the oldest value"
        ],
        "correctIndex": 0,
        "explanation": "Recency acts as the tie-breaker among equally frequent values."
      },
      {
        "id": "quiz-stacks-set-16-q5",
        "question": "What data structure can represent the values belonging to each frequency?",
        "options": [
          "A stack for each frequency",
          "A binary search tree only",
          "A queue shared by every frequency",
          "A single integer"
        ],
        "correctIndex": 0,
        "explanation": "A stack per frequency preserves recency among values with equal frequency."
      },
      {
        "id": "quiz-stacks-set-16-q6",
        "question": "What is the target average time complexity for push and pop in an optimized frequency stack?",
        "options": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "Hash maps and frequency stacks allow both operations to be performed in constant average time."
      },
      {
        "id": "quiz-stacks-set-16-q7",
        "question": "Why can't a simple ordinary stack solve the frequency-stack problem directly?",
        "options": [
          "Ordinary LIFO considers only recency, not frequency",
          "Ordinary stacks cannot store integers",
          "Ordinary stacks cannot pop",
          "Ordinary stacks are always sorted"
        ],
        "correctIndex": 0,
        "explanation": "The frequency requirement needs additional bookkeeping beyond simple insertion order."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-17",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 17",
    "subtitle": "Advanced questions for Stacks (Set 17/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-stacks-set-17-q1",
        "question": "What is the purpose of using a stack for iterative depth-first search?",
        "options": [
          "It stores nodes that need to be explored next",
          "It guarantees breadth-first traversal",
          "It sorts graph vertices",
          "It calculates edge weights"
        ],
        "correctIndex": 0,
        "explanation": "A stack reproduces the depth-first behavior by exploring the most recently discovered node first."
      },
      {
        "id": "quiz-stacks-set-17-q2",
        "question": "Which recursive process is commonly simulated using an explicit stack?",
        "options": [
          "Depth-first search",
          "Binary search only",
          "Counting sort",
          "Merge operation"
        ],
        "correctIndex": 0,
        "explanation": "An explicit stack can replace the call stack used by recursive DFS."
      },
      {
        "id": "quiz-stacks-set-17-q3",
        "question": "What does the call stack store during recursion?",
        "options": [
          "Information about active function calls and their local state",
          "Only global variables",
          "Only return values",
          "Only arrays"
        ],
        "correctIndex": 0,
        "explanation": "Each active function call has a stack frame containing information needed to resume execution."
      },
      {
        "id": "quiz-stacks-set-17-q4",
        "question": "What can cause stack overflow during deep recursion?",
        "options": [
          "Too many active function calls consuming the call stack",
          "Too few variables",
          "An empty array",
          "Using a queue"
        ],
        "correctIndex": 0,
        "explanation": "Each recursive call consumes stack-frame memory, and excessive depth can exceed the available stack."
      },
      {
        "id": "quiz-stacks-set-17-q5",
        "question": "Which traversal of a binary tree naturally corresponds to stack-based depth-first processing?",
        "options": [
          "Preorder traversal",
          "Level-order traversal",
          "Breadth-first traversal only",
          "Priority traversal"
        ],
        "correctIndex": 0,
        "explanation": "Preorder can be implemented iteratively with a stack by processing a node before its children."
      },
      {
        "id": "quiz-stacks-set-17-q6",
        "question": "Which structure is normally used for level-order traversal instead of a stack?",
        "options": [
          "Queue",
          "Stack",
          "Hash map only",
          "Heap only"
        ],
        "correctIndex": 0,
        "explanation": "Level-order traversal uses FIFO behavior, which is provided by a queue."
      },
      {
        "id": "quiz-stacks-set-17-q7",
        "question": "What is one benefit of replacing recursion with an explicit stack?",
        "options": [
          "The programmer can control the stored state and avoid call-stack depth limits",
          "It always reduces time complexity",
          "It eliminates all memory usage",
          "It automatically sorts data"
        ],
        "correctIndex": 0,
        "explanation": "An explicit stack gives more control over traversal state and can avoid language-specific recursion-depth limits."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-18",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 18",
    "subtitle": "Advanced questions for Stacks (Set 18/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-stacks-set-18-q1",
        "question": "What is the key idea behind designing a stack that supports getMax efficiently?",
        "options": [
          "Maintain additional information about the maximum value",
          "Sort the stack after every operation",
          "Search the entire stack for every getMax",
          "Store only the maximum and discard other values"
        ],
        "correctIndex": 0,
        "explanation": "Additional maximum-tracking information allows getMax to avoid scanning the entire stack."
      },
      {
        "id": "quiz-stacks-set-18-q2",
        "question": "What is the main trade-off of using an auxiliary stack for minimum or maximum tracking?",
        "options": [
          "Extra memory is used to obtain faster queries",
          "Push becomes impossible",
          "The stack stops following LIFO",
          "The values become sorted permanently"
        ],
        "correctIndex": 0,
        "explanation": "The additional storage trades space for constant-time min/max retrieval."
      },
      {
        "id": "quiz-stacks-set-18-q3",
        "question": "What is a space-optimized alternative sometimes used for Min Stack?",
        "options": [
          "Encode previous minimum information inside the stack values",
          "Use binary search on every pop",
          "Sort the stack after each push",
          "Use a queue instead"
        ],
        "correctIndex": 0,
        "explanation": "Mathematical encoding can store previous minimum information without a second full stack."
      },
      {
        "id": "quiz-stacks-set-18-q4",
        "question": "What is the major risk of arithmetic encoding in a Min Stack implementation?",
        "options": [
          "Integer overflow or precision issues depending on the numeric type",
          "It cannot store minimum values",
          "It always requires O(n2) time",
          "It changes LIFO behavior"
        ],
        "correctIndex": 0,
        "explanation": "Encoded values may exceed numeric limits or lose precision if the type is insufficient."
      },
      {
        "id": "quiz-stacks-set-18-q5",
        "question": "Which principle should be preserved when optimizing a stack implementation?",
        "options": [
          "Push and pop must continue to maintain correct LIFO semantics",
          "The stack must become sorted",
          "Every operation must use recursion",
          "The stack must become a queue"
        ],
        "correctIndex": 0,
        "explanation": "Optimization must not break the fundamental behavior of the data structure."
      },
      {
        "id": "quiz-stacks-set-18-q6",
        "question": "Why is O(1) getMin useful in some applications?",
        "options": [
          "It allows repeated minimum queries without scanning all stored elements",
          "It removes the need to store elements",
          "It guarantees constant memory",
          "It sorts the stack"
        ],
        "correctIndex": 0,
        "explanation": "Constant-time queries are valuable when minimum values are requested frequently."
      },
      {
        "id": "quiz-stacks-set-18-q7",
        "question": "Which complexity pair is ideal for a Min Stack?",
        "options": [
          "O(1) push, O(1) pop, and O(1) getMin",
          "O(n) push and O(n) pop",
          "O(log n) push and O(n2) getMin",
          "O(n2) for every operation"
        ],
        "correctIndex": 0,
        "explanation": "The standard optimized Min Stack supports all these core operations in constant time."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-19",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 19",
    "subtitle": "Advanced questions for Stacks (Set 19/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-stacks-set-19-q1",
        "question": "What is the key challenge when using monotonic stacks with duplicate values?",
        "options": [
          "Choosing consistent strict or non-strict comparisons",
          "Duplicates cannot be stored",
          "The stack becomes a queue",
          "All duplicates must be deleted"
        ],
        "correctIndex": 0,
        "explanation": "Whether equal values are popped affects which index remains as the representative candidate."
      },
      {
        "id": "quiz-stacks-set-19-q2",
        "question": "Why are strict versus non-strict comparisons important in monotonic-stack problems?",
        "options": [
          "They determine how equal values are handled and can change boundaries",
          "They change integers into strings",
          "They eliminate the need for a stack",
          "They always change O(n) to O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "Using > instead of >= can produce different stack contents and therefore different answers."
      },
      {
        "id": "quiz-stacks-set-19-q3",
        "question": "What is an important invariant in a monotonic-stack solution?",
        "options": [
          "The stack maintains the intended increasing or decreasing order",
          "The stack contains every array element",
          "The stack is always empty",
          "The stack contains only the maximum"
        ],
        "correctIndex": 0,
        "explanation": "Maintaining the invariant is what enables efficient elimination of impossible candidates."
      },
      {
        "id": "quiz-stacks-set-19-q4",
        "question": "Why can an algorithm with a while loop inside a for loop still be O(n) when using a monotonic stack?",
        "options": [
          "Each element can be pushed and popped only a limited number of times",
          "The while loop executes exactly once",
          "Nested loops are always O(n)",
          "The stack makes every operation O(1) regardless of repetition"
        ],
        "correctIndex": 0,
        "explanation": "Amortized analysis counts the total number of pushes and pops across the entire execution."
      },
      {
        "id": "quiz-stacks-set-19-q5",
        "question": "What is amortized analysis useful for in stack algorithms?",
        "options": [
          "Analyzing the average cost over a sequence of operations",
          "Guaranteeing every individual operation is constant time",
          "Sorting the stack",
          "Reducing memory to zero"
        ],
        "correctIndex": 0,
        "explanation": "Some individual operations may be expensive, but the total cost across all operations can still be linear."
      },
      {
        "id": "quiz-stacks-set-19-q6",
        "question": "Which statement about a monotonic stack is true?",
        "options": [
          "An element may be popped before the algorithm finishes, but it is not pushed again in the standard one-pass pattern",
          "Every element must remain until the end",
          "Elements can only be popped twice",
          "The stack must always contain exactly n elements"
        ],
        "correctIndex": 0,
        "explanation": "This one-time push and pop behavior is the foundation of the linear amortized complexity."
      },
      {
        "id": "quiz-stacks-set-19-q7",
        "question": "What is the best first step when solving a new monotonic-stack problem?",
        "options": [
          "Identify the nearest greater/smaller relationship and define the stack invariant",
          "Immediately write nested loops",
          "Sort the array",
          "Use recursion automatically"
        ],
        "correctIndex": 0,
        "explanation": "Recognizing the required nearest relationship and invariant determines whether a monotonic stack fits."
      }
    ]
  },
  {
    "id": "quiz-stacks-set-20",
    "topicId": "stacks",
    "title": "Stacks Quiz - Level 20",
    "subtitle": "Advanced questions for Stacks (Set 20/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-stacks-set-20-q1",
        "question": "Which combination best summarizes the major advanced stack patterns?",
        "options": [
          "Monotonic stacks, expression parsing, simulation, auxiliary-state stacks, and call-stack simulation",
          "Only push and pop",
          "Only sorting and binary search",
          "Only recursion"
        ],
        "correctIndex": 0,
        "explanation": "These patterns cover a large portion of advanced stack problems."
      },
      {
        "id": "quiz-stacks-set-20-q2",
        "question": "What is the most important property to identify when considering a monotonic stack?",
        "options": [
          "A nearest greater or smaller relationship with candidates that can be discarded permanently",
          "Whether the array contains only positive values",
          "Whether the input is already sorted",
          "Whether recursion is available"
        ],
        "correctIndex": 0,
        "explanation": "Monotonic stacks work particularly well when dominated candidates can be safely removed."
      },
      {
        "id": "quiz-stacks-set-20-q3",
        "question": "Why is amortized O(n) analysis possible for many monotonic-stack algorithms?",
        "options": [
          "Each input element is usually pushed once and popped at most once",
          "Each element is compared with every other element",
          "The stack is always empty",
          "The input is automatically sorted"
        ],
        "correctIndex": 0,
        "explanation": "The total number of stack operations is linear even if individual iterations contain multiple pops."
      },
      {
        "id": "quiz-stacks-set-20-q4",
        "question": "Which data structure combination is appropriate when an application needs both LIFO history and fast minimum retrieval?",
        "options": [
          "A stack with auxiliary minimum-tracking information",
          "A queue only",
          "A binary search tree without stack behavior",
          "A plain array with no tracking"
        ],
        "correctIndex": 0,
        "explanation": "Additional tracking preserves stack semantics while making minimum queries efficient."
      },
      {
        "id": "quiz-stacks-set-20-q5",
        "question": "Which problem demonstrates the use of a stack as a simulation tool rather than simply storing data?",
        "options": [
          "Asteroid Collision",
          "Binary Search",
          "Merge Sort",
          "Counting Sort"
        ],
        "correctIndex": 0,
        "explanation": "The stack represents unresolved asteroids and allows collisions to be simulated efficiently."
      },
      {
        "id": "quiz-stacks-set-20-q6",
        "question": "What is the key trade-off when replacing recursion with an explicit stack?",
        "options": [
          "You gain explicit control over traversal state but must manage that state manually",
          "You always reduce time complexity to O(1)",
          "You eliminate all memory usage",
          "You lose the ability to perform DFS"
        ],
        "correctIndex": 0,
        "explanation": "An explicit stack provides control but requires the programmer to manage what recursive calls would normally store."
      },
      {
        "id": "quiz-stacks-set-20-q7",
        "question": "When choosing between a stack, queue, deque, and monotonic stack, what should primarily determine the choice?",
        "options": [
          "The ordering and relationship the problem requires between elements",
          "The programming language alone",
          "The number of variables in the solution",
          "Whether the input contains integers only"
        ],
        "correctIndex": 0,
        "explanation": "The required access pattern should guide the data-structure choice."
      }
    ]
  },
  {
    "id": "quiz-queues-set-1",
    "topicId": "queues",
    "title": "Queues Quiz - Level 1",
    "subtitle": "Beginner questions for Queues (Set 1/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-queues-set-1-q1",
        "question": "What is a queue in data structures?",
        "options": [
          "A collection that follows FIFO order",
          "A collection that follows LIFO order",
          "A tree with connected nodes",
          "A key-value data structure"
        ],
        "correctIndex": 0,
        "explanation": "A queue follows First In, First Out (FIFO), meaning the earliest inserted element is removed first."
      },
      {
        "id": "quiz-queues-set-1-q2",
        "question": "What does FIFO stand for?",
        "options": [
          "First In, First Out",
          "Fast Input, Fast Output",
          "First Index, Final Output",
          "Fixed Input, Fixed Output"
        ],
        "correctIndex": 0,
        "explanation": "FIFO means the element that enters first is the element that leaves first."
      },
      {
        "id": "quiz-queues-set-1-q3",
        "question": "Which real-world situation best represents a queue?",
        "options": [
          "A stack of plates",
          "People waiting in a line",
          "A browser's undo history",
          "A pile of books"
        ],
        "correctIndex": 1,
        "explanation": "People generally leave a waiting line in the same order in which they joined it."
      },
      {
        "id": "quiz-queues-set-1-q4",
        "question": "Which operation adds an element to a queue?",
        "options": [
          "Dequeue",
          "Peek",
          "Enqueue",
          "Pop"
        ],
        "correctIndex": 2,
        "explanation": "Enqueue inserts an element at the rear of the queue."
      },
      {
        "id": "quiz-queues-set-1-q5",
        "question": "Which operation removes an element from a queue?",
        "options": [
          "Push",
          "Dequeue",
          "Enqueue",
          "Peek"
        ],
        "correctIndex": 1,
        "explanation": "Dequeue removes the element from the front of the queue."
      },
      {
        "id": "quiz-queues-set-1-q6",
        "question": "Which element is normally removed first from a queue?",
        "options": [
          "The newest element",
          "The middle element",
          "The oldest element",
          "A random element"
        ],
        "correctIndex": 2,
        "explanation": "Queues follow FIFO, so the oldest element is removed first."
      },
      {
        "id": "quiz-queues-set-1-q7",
        "question": "What does the front of a queue represent?",
        "options": [
          "The next element that can be removed",
          "The newest element",
          "The largest element",
          "The middle element"
        ],
        "correctIndex": 0,
        "explanation": "The front points to the element that will be dequeued next."
      }
    ]
  },
  {
    "id": "quiz-queues-set-2",
    "topicId": "queues",
    "title": "Queues Quiz - Level 2",
    "subtitle": "Beginner questions for Queues (Set 2/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-queues-set-2-q1",
        "question": "If 10, 20, and 30 are enqueued in that order, which element is at the front?",
        "options": [
          "30",
          "20",
          "10",
          "None"
        ],
        "correctIndex": 2,
        "explanation": "10 entered first, so it remains at the front."
      },
      {
        "id": "quiz-queues-set-2-q2",
        "question": "If A, B, C are enqueued and one dequeue is performed, which element is removed?",
        "options": [
          "C",
          "B",
          "A",
          "None"
        ],
        "correctIndex": 2,
        "explanation": "A was inserted first, so FIFO removes A first."
      },
      {
        "id": "quiz-queues-set-2-q3",
        "question": "After enqueue(1), enqueue(2), dequeue(), enqueue(3), what is at the front?",
        "options": [
          "3",
          "1",
          "2",
          "The queue is empty"
        ],
        "correctIndex": 2,
        "explanation": "1 is removed, leaving 2 at the front before 3 is added behind it."
      },
      {
        "id": "quiz-queues-set-2-q4",
        "question": "What happens when dequeue is attempted on an empty queue?",
        "options": [
          "The queue adds an element",
          "An underflow condition occurs",
          "The last element is returned",
          "The queue becomes circular"
        ],
        "correctIndex": 1,
        "explanation": "Removing from an empty queue causes queue underflow."
      },
      {
        "id": "quiz-queues-set-2-q5",
        "question": "What is queue overflow in a fixed-size implementation?",
        "options": [
          "Trying to enqueue when the queue is full",
          "Trying to dequeue when empty",
          "Reading the front element",
          "Removing the rear element"
        ],
        "correctIndex": 0,
        "explanation": "Overflow occurs when there is no available capacity for another element."
      },
      {
        "id": "quiz-queues-set-2-q6",
        "question": "Which end is normally used for insertion in a queue?",
        "options": [
          "Front",
          "Rear",
          "Middle",
          "Any random position"
        ],
        "correctIndex": 1,
        "explanation": "New elements are inserted at the rear."
      },
      {
        "id": "quiz-queues-set-2-q7",
        "question": "Which end is normally used for removal?",
        "options": [
          "Rear",
          "Middle",
          "Front",
          "Random position"
        ],
        "correctIndex": 2,
        "explanation": "Elements are removed from the front to maintain FIFO order."
      }
    ]
  },
  {
    "id": "quiz-queues-set-3",
    "topicId": "queues",
    "title": "Queues Quiz - Level 3",
    "subtitle": "Beginner questions for Queues (Set 3/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-queues-set-3-q1",
        "question": "What is the typical time complexity of enqueue in a properly implemented queue?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "With a rear pointer, inserting at the rear takes constant time."
      },
      {
        "id": "quiz-queues-set-3-q2",
        "question": "What is the typical time complexity of dequeue?",
        "options": [
          "O(n2)",
          "O(1)",
          "O(n)",
          "O(log n)"
        ],
        "correctIndex": 1,
        "explanation": "With a front pointer, removing the front element takes constant time."
      },
      {
        "id": "quiz-queues-set-3-q3",
        "question": "What is the purpose of maintaining a rear pointer?",
        "options": [
          "To quickly locate where a new element should be inserted",
          "To find the minimum element",
          "To reverse the queue",
          "To search every element"
        ],
        "correctIndex": 0,
        "explanation": "The rear pointer gives direct access to the insertion end."
      },
      {
        "id": "quiz-queues-set-3-q4",
        "question": "What is the purpose of maintaining a front pointer?",
        "options": [
          "To quickly locate the next element to remove",
          "To store the largest element",
          "To sort the queue",
          "To find the rear"
        ],
        "correctIndex": 0,
        "explanation": "The front pointer identifies the next element that dequeue should remove."
      },
      {
        "id": "quiz-queues-set-3-q5",
        "question": "Which data structure can be used to implement a queue?",
        "options": [
          "Array",
          "Graph only",
          "Binary tree only",
          "Hash function"
        ],
        "correctIndex": 0,
        "explanation": "Arrays can implement queues using front and rear indexes."
      },
      {
        "id": "quiz-queues-set-3-q6",
        "question": "What is one advantage of a linked-list queue?",
        "options": [
          "It can grow dynamically as nodes are added",
          "It provides random access",
          "It requires contiguous memory",
          "It automatically sorts elements"
        ],
        "correctIndex": 0,
        "explanation": "A linked-list queue can allocate nodes as needed instead of requiring a fixed capacity."
      },
      {
        "id": "quiz-queues-set-3-q7",
        "question": "What is the space complexity of storing n elements in a queue?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 1,
        "explanation": "Storage grows proportionally with the number of elements."
      }
    ]
  },
  {
    "id": "quiz-queues-set-4",
    "topicId": "queues",
    "title": "Queues Quiz - Level 4",
    "subtitle": "Beginner questions for Queues (Set 4/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-queues-set-4-q1",
        "question": "Why can a simple array-based queue waste space after several dequeues?",
        "options": [
          "Elements before the front may remain unused",
          "Arrays automatically duplicate elements",
          "The rear moves backward automatically",
          "The queue becomes sorted"
        ],
        "correctIndex": 0,
        "explanation": "After removals, earlier array positions can become unused even though the rear has reached the end."
      },
      {
        "id": "quiz-queues-set-4-q2",
        "question": "What is the main idea of a circular queue?",
        "options": [
          "Reuse array positions by wrapping the rear and front around",
          "Always remove from the rear",
          "Sort elements circularly",
          "Use two queues simultaneously"
        ],
        "correctIndex": 0,
        "explanation": "A circular queue treats the array as connected end-to-end so freed positions can be reused."
      },
      {
        "id": "quiz-queues-set-4-q3",
        "question": "What operation is commonly used to wrap an index around a circular array?",
        "options": [
          "Modulo arithmetic",
          "Binary search",
          "Recursion",
          "Sorting"
        ],
        "correctIndex": 0,
        "explanation": "Modulo allows an index to return to zero after reaching the array's end."
      },
      {
        "id": "quiz-queues-set-4-q4",
        "question": "If a circular queue has capacity 5 and rear is at index 4, where can the next position wrap to?",
        "options": [
          "Index 1",
          "Index 4",
          "Index 0",
          "Index 5"
        ],
        "correctIndex": 2,
        "explanation": "After index 4, modulo 5 wraps the next index back to 0."
      },
      {
        "id": "quiz-queues-set-4-q5",
        "question": "What is a common way to distinguish an empty circular queue from a full one?",
        "options": [
          "Maintain an explicit size or count",
          "Always leave two positions unused",
          "Sort the queue",
          "Use the largest element"
        ],
        "correctIndex": 0,
        "explanation": "Tracking size makes the empty and full states unambiguous."
      },
      {
        "id": "quiz-queues-set-4-q6",
        "question": "What is the typical complexity of enqueue and dequeue in a circular queue?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 1,
        "explanation": "Only a constant number of index and value updates are needed."
      },
      {
        "id": "quiz-queues-set-4-q7",
        "question": "What is the main benefit of a circular queue over a basic fixed array queue?",
        "options": [
          "It reuses positions freed by dequeue operations",
          "It provides random access",
          "It automatically sorts values",
          "It eliminates capacity limits"
        ],
        "correctIndex": 0,
        "explanation": "Circular indexing allows previously freed positions to be reused."
      }
    ]
  },
  {
    "id": "quiz-queues-set-5",
    "topicId": "queues",
    "title": "Queues Quiz - Level 5",
    "subtitle": "Beginner questions for Queues (Set 5/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-queues-set-5-q1",
        "question": "What is a deque?",
        "options": [
          "A double-ended queue that supports insertion and removal at both ends",
          "A queue that only supports deletion",
          "A stack with two tops",
          "A sorted queue"
        ],
        "correctIndex": 0,
        "explanation": "Deque stands for double-ended queue and supports operations at both the front and rear."
      },
      {
        "id": "quiz-queues-set-5-q2",
        "question": "Which operation adds an element to the front of a deque?",
        "options": [
          "Push front",
          "Pop rear",
          "Dequeue",
          "Peek"
        ],
        "correctIndex": 0,
        "explanation": "A deque supports insertion at the front as well as at the rear."
      },
      {
        "id": "quiz-queues-set-5-q3",
        "question": "Which operation removes an element from the rear of a deque?",
        "options": [
          "Push front",
          "Pop rear",
          "Peek front",
          "Enqueue"
        ],
        "correctIndex": 1,
        "explanation": "Pop rear removes the element at the rear end."
      },
      {
        "id": "quiz-queues-set-5-q4",
        "question": "Which data structure can behave like both a stack and a queue?",
        "options": [
          "Deque",
          "Binary tree",
          "Hash map",
          "Heap"
        ],
        "correctIndex": 0,
        "explanation": "A deque can add and remove from both ends, allowing it to simulate both structures."
      },
      {
        "id": "quiz-queues-set-5-q5",
        "question": "Which application commonly uses a deque?",
        "options": [
          "Sliding window problems",
          "Binary search only",
          "Static hashing only",
          "Merge sort only"
        ],
        "correctIndex": 0,
        "explanation": "Deques are useful for maintaining candidates inside moving windows."
      },
      {
        "id": "quiz-queues-set-5-q6",
        "question": "What is the typical time complexity of inserting at either end of a properly implemented deque?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 1,
        "explanation": "Both ends can be updated directly."
      },
      {
        "id": "quiz-queues-set-5-q7",
        "question": "What is the difference between a normal queue and a deque?",
        "options": [
          "A normal queue normally inserts at the rear and removes at the front, while a deque supports both ends",
          "A queue is always sorted",
          "A deque only supports FIFO",
          "A queue cannot store integers"
        ],
        "correctIndex": 0,
        "explanation": "A deque provides more flexible access than a standard FIFO queue."
      }
    ]
  },
  {
    "id": "quiz-queues-set-6",
    "topicId": "queues",
    "title": "Queues Quiz - Level 6",
    "subtitle": "Beginner questions for Queues (Set 6/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-queues-set-6-q1",
        "question": "Which algorithm commonly uses a queue to explore a graph level by level?",
        "options": [
          "Breadth-First Search",
          "Depth-First Search",
          "Binary Search",
          "Merge Sort"
        ],
        "correctIndex": 0,
        "explanation": "BFS uses a queue to process vertices in increasing order of distance from the starting vertex."
      },
      {
        "id": "quiz-queues-set-6-q2",
        "question": "Why does BFS use a queue?",
        "options": [
          "It processes discovered vertices in the order they were discovered",
          "It always chooses the deepest vertex",
          "It sorts vertices",
          "It removes the largest vertex"
        ],
        "correctIndex": 0,
        "explanation": "FIFO ordering causes BFS to finish one level before moving to the next."
      },
      {
        "id": "quiz-queues-set-6-q3",
        "question": "In an unweighted graph, what can BFS find efficiently from a source vertex?",
        "options": [
          "Shortest path distances in number of edges",
          "Minimum spanning tree weights only",
          "All cycles in O(1)",
          "The largest edge weight"
        ],
        "correctIndex": 0,
        "explanation": "BFS explores nodes by increasing edge distance, giving shortest paths in unweighted graphs."
      },
      {
        "id": "quiz-queues-set-6-q4",
        "question": "When should a vertex typically be marked visited in BFS?",
        "options": [
          "When it is discovered and enqueued",
          "Only after it is removed twice",
          "Only after the entire traversal",
          "Never"
        ],
        "correctIndex": 0,
        "explanation": "Marking on discovery prevents the same vertex from being enqueued repeatedly."
      },
      {
        "id": "quiz-queues-set-6-q5",
        "question": "What is the time complexity of BFS using an adjacency list?",
        "options": [
          "O(V + E)",
          "O(V2E)",
          "O(log V)",
          "O(E2)"
        ],
        "correctIndex": 0,
        "explanation": "Each vertex and each edge is processed a constant number of times."
      },
      {
        "id": "quiz-queues-set-6-q6",
        "question": "What additional structure is commonly used with the BFS queue?",
        "options": [
          "A visited set or array",
          "A sorting heap",
          "A stack only",
          "A binary search tree"
        ],
        "correctIndex": 0,
        "explanation": "Visited tracking prevents repeated processing of vertices."
      },
      {
        "id": "quiz-queues-set-6-q7",
        "question": "What does BFS process first after the starting vertex?",
        "options": [
          "Its immediate neighbors",
          "The farthest vertices",
          "The smallest-valued vertex globally",
          "Random vertices"
        ],
        "correctIndex": 0,
        "explanation": "BFS explores all vertices one edge away before moving farther."
      }
    ]
  },
  {
    "id": "quiz-queues-set-7",
    "topicId": "queues",
    "title": "Queues Quiz - Level 7",
    "subtitle": "Intermediate questions for Queues (Set 7/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-queues-set-7-q1",
        "question": "What is level-order traversal of a binary tree?",
        "options": [
          "Visiting nodes level by level from top to bottom",
          "Visiting all left nodes before the root",
          "Visiting nodes only in sorted order",
          "Visiting leaves first"
        ],
        "correctIndex": 0,
        "explanation": "Level-order traversal visits nodes according to their depth from the root."
      },
      {
        "id": "quiz-queues-set-7-q2",
        "question": "Which data structure is normally used for level-order traversal?",
        "options": [
          "Queue",
          "Stack",
          "Heap",
          "Hash map"
        ],
        "correctIndex": 0,
        "explanation": "A queue ensures nodes at the current level are processed before nodes at deeper levels."
      },
      {
        "id": "quiz-queues-set-7-q3",
        "question": "For the tree with root 1 and children 2 and 3, what is the level-order traversal?",
        "options": [
          "[2,1,3]",
          "[1,2,3]",
          "[3,2,1]",
          "[1,3,2]"
        ],
        "correctIndex": 1,
        "explanation": "The root is processed first, followed by its children from left to right."
      },
      {
        "id": "quiz-queues-set-7-q4",
        "question": "How can the number of nodes at each tree level be determined during BFS?",
        "options": [
          "Record the queue size before processing the current level",
          "Sort the tree",
          "Use binary search",
          "Count only leaf nodes"
        ],
        "correctIndex": 0,
        "explanation": "The queue contains exactly the nodes waiting to be processed."
      },
      {
        "id": "quiz-queues-set-7-q5",
        "question": "What is the time complexity of level-order traversal for a binary tree with n nodes?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(n2)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Every node is visited once."
      },
      {
        "id": "quiz-queues-set-7-q6",
        "question": "What is the worst-case auxiliary space used by BFS on a tree?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n) always",
          "O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "A level can contain O(n) nodes in a wide tree."
      },
      {
        "id": "quiz-queues-set-7-q7",
        "question": "Which tree problem naturally benefits from level-order BFS?",
        "options": [
          "Finding the rightmost node of each level",
          "Computing only inorder traversal",
          "Finding an exact sorted-array index",
          "Performing postfix evaluation"
        ],
        "correctIndex": 0,
        "explanation": "Processing one level at a time makes level-specific operations straightforward."
      }
    ]
  },
  {
    "id": "quiz-queues-set-8",
    "topicId": "queues",
    "title": "Queues Quiz - Level 8",
    "subtitle": "Intermediate questions for Queues (Set 8/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-queues-set-8-q1",
        "question": "What is a priority queue?",
        "options": [
          "A structure where removal is based on priority rather than simple insertion order",
          "A queue that always follows FIFO",
          "A queue with no ordering",
          "A queue that only stores integers"
        ],
        "correctIndex": 0,
        "explanation": "A priority queue removes the highest- or lowest-priority element depending on its design."
      },
      {
        "id": "quiz-queues-set-8-q2",
        "question": "Which data structure is commonly used to implement a priority queue efficiently?",
        "options": [
          "Heap",
          "Stack",
          "Linked list only",
          "Hash set"
        ],
        "correctIndex": 0,
        "explanation": "Binary heaps provide efficient insertion and removal of the highest-priority element."
      },
      {
        "id": "quiz-queues-set-8-q3",
        "question": "What does a min-priority queue return first?",
        "options": [
          "The smallest-priority-key element",
          "The newest element",
          "The oldest element regardless of priority",
          "A random element"
        ],
        "correctIndex": 0,
        "explanation": "A min-priority queue places the smallest key at the top."
      },
      {
        "id": "quiz-queues-set-8-q4",
        "question": "What is the typical time complexity of inserting into a binary-heap priority queue?",
        "options": [
          "O(log n)",
          "O(1)",
          "O(n2)",
          "O(n)"
        ],
        "correctIndex": 0,
        "explanation": "The inserted element may move up the heap through O(log n) levels."
      },
      {
        "id": "quiz-queues-set-8-q5",
        "question": "What is the typical time complexity of removing the top element from a binary heap?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 1,
        "explanation": "Removing the root requires restoring the heap property through O(log n) levels."
      },
      {
        "id": "quiz-queues-set-8-q6",
        "question": "What is the typical time complexity of peeking at the top of a binary heap?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "The highest-priority element is stored directly at the root."
      },
      {
        "id": "quiz-queues-set-8-q7",
        "question": "Which application can use a priority queue?",
        "options": [
          "Task scheduling based on priority",
          "Simple FIFO ticket lines only",
          "Undo operations",
          "Balanced parentheses"
        ],
        "correctIndex": 0,
        "explanation": "Priority queues are useful when the next task should be selected based on importance."
      }
    ]
  },
  {
    "id": "quiz-queues-set-9",
    "topicId": "queues",
    "title": "Queues Quiz - Level 9",
    "subtitle": "Intermediate questions for Queues (Set 9/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-queues-set-9-q1",
        "question": "Which algorithm uses a priority queue to repeatedly select the closest unprocessed vertex?",
        "options": [
          "Dijkstra's algorithm",
          "DFS",
          "Merge Sort",
          "Binary Search"
        ],
        "correctIndex": 0,
        "explanation": "Dijkstra's algorithm uses a min-priority queue to efficiently select the next vertex with the smallest tentative distance."
      },
      {
        "id": "quiz-queues-set-9-q2",
        "question": "What type of graph does standard Dijkstra's algorithm require?",
        "options": [
          "A graph with non-negative edge weights",
          "A graph with only negative weights",
          "Only unweighted graphs",
          "Only trees"
        ],
        "correctIndex": 0,
        "explanation": "Negative edge weights can invalidate Dijkstra's greedy selection property."
      },
      {
        "id": "quiz-queues-set-9-q3",
        "question": "What does the priority queue contain in Dijkstra's algorithm?",
        "options": [
          "Vertices paired with their current tentative distances",
          "Only edges with negative weights",
          "All vertices in arbitrary order",
          "Only the source vertex"
        ],
        "correctIndex": 0,
        "explanation": "The queue prioritizes vertices by their smallest known distance from the source."
      },
      {
        "id": "quiz-queues-set-9-q4",
        "question": "What is the relaxation operation in shortest-path algorithms?",
        "options": [
          "Checking whether a path through the current vertex gives a shorter distance",
          "Deleting an edge",
          "Sorting all vertices",
          "Reversing the graph"
        ],
        "correctIndex": 0,
        "explanation": "Relaxation updates a destination's distance if a shorter route has been found."
      },
      {
        "id": "quiz-queues-set-9-q5",
        "question": "What is a common complexity of Dijkstra's algorithm using an adjacency list and binary heap?",
        "options": [
          "O((V + E) log V)",
          "O(V2E)",
          "O(log E)",
          "O(E)"
        ],
        "correctIndex": 0,
        "explanation": "Heap operations contribute logarithmic factors while vertices and edges are processed."
      },
      {
        "id": "quiz-queues-set-9-q6",
        "question": "Why can a vertex appear multiple times in a priority queue implementation of Dijkstra?",
        "options": [
          "A shorter tentative distance may create a new queue entry",
          "Vertices are duplicated intentionally forever",
          "The graph requires one entry per edge regardless of distance",
          "The queue cannot update existing entries"
        ],
        "correctIndex": 0,
        "explanation": "Many implementations insert a new pair when a shorter distance is discovered."
      },
      {
        "id": "quiz-queues-set-9-q7",
        "question": "What should happen when a priority-queue entry is stale in Dijkstra's algorithm?",
        "options": [
          "It can be ignored if its distance is larger than the current best-known distance",
          "It must always be processed again",
          "It should become the source",
          "It should reverse all edges"
        ],
        "correctIndex": 0,
        "explanation": "A stale entry no longer represents the best known distance and can safely be skipped."
      }
    ]
  },
  {
    "id": "quiz-queues-set-10",
    "topicId": "queues",
    "title": "Queues Quiz - Level 10",
    "subtitle": "Intermediate questions for Queues (Set 10/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-queues-set-10-q1",
        "question": "What is a multi-source BFS?",
        "options": [
          "BFS that starts with multiple source vertices simultaneously",
          "BFS that uses multiple graphs",
          "DFS performed multiple times",
          "BFS without a queue"
        ],
        "correctIndex": 0,
        "explanation": "Multiple starting nodes are initially placed in the queue at the same distance level."
      },
      {
        "id": "quiz-queues-set-10-q2",
        "question": "Why is multi-source BFS useful for grid problems?",
        "options": [
          "It finds minimum distances from the nearest of multiple starting cells",
          "It sorts the grid",
          "It removes all obstacles",
          "It guarantees diagonal movement"
        ],
        "correctIndex": 0,
        "explanation": "Starting all sources together lets BFS expand outward according to minimum distance from any source."
      },
      {
        "id": "quiz-queues-set-10-q3",
        "question": "Which problem is a classic multi-source BFS application?",
        "options": [
          "Rotting Oranges",
          "Binary Search",
          "Merge Sort",
          "Two Sum"
        ],
        "correctIndex": 0,
        "explanation": "All initially rotten oranges can be treated as sources that spread simultaneously."
      },
      {
        "id": "quiz-queues-set-10-q4",
        "question": "In Rotting Oranges, what does one BFS level usually represent?",
        "options": [
          "One unit of time",
          "One column",
          "One connected component",
          "One orange"
        ],
        "correctIndex": 0,
        "explanation": "Each BFS layer represents the passage of one minute."
      },
      {
        "id": "quiz-queues-set-10-q5",
        "question": "Why should all initial sources be added to the queue before BFS begins?",
        "options": [
          "They should spread simultaneously from time zero",
          "It makes the grid sorted",
          "It prevents any traversal",
          "It guarantees every cell is reachable"
        ],
        "correctIndex": 0,
        "explanation": "Multi-source BFS treats all sources as starting at the same time."
      },
      {
        "id": "quiz-queues-set-10-q6",
        "question": "What is the time complexity of multi-source BFS on an m×n grid?",
        "options": [
          "O(mn)",
          "O(m2n2)",
          "O(log(mn))",
          "O(m+n)"
        ],
        "correctIndex": 0,
        "explanation": "Each grid cell is processed at most once."
      },
      {
        "id": "quiz-queues-set-10-q7",
        "question": "What does BFS guarantee in an unweighted grid when movement costs are equal?",
        "options": [
          "The first time a cell is reached is through a shortest-distance path",
          "The cell is always reached diagonally",
          "The path has the maximum possible length",
          "The path is always unique"
        ],
        "correctIndex": 0,
        "explanation": "BFS explores positions in increasing number of moves from the sources."
      }
    ]
  },
  {
    "id": "quiz-queues-set-11",
    "topicId": "queues",
    "title": "Queues Quiz - Level 11",
    "subtitle": "Intermediate questions for Queues (Set 11/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-queues-set-11-q1",
        "question": "What is topological sorting used for?",
        "options": [
          "Ordering vertices of a directed acyclic graph according to dependencies",
          "Sorting an array by value",
          "Finding shortest paths in any graph",
          "Building a binary heap"
        ],
        "correctIndex": 0,
        "explanation": "A topological order places every prerequisite before the vertex that depends on it."
      },
      {
        "id": "quiz-queues-set-11-q2",
        "question": "Which queue-based algorithm can perform topological sorting?",
        "options": [
          "Kahn's algorithm",
          "Dijkstra's algorithm",
          "Floyd-Warshall",
          "Binary Search"
        ],
        "correctIndex": 0,
        "explanation": "Kahn's algorithm repeatedly processes vertices with indegree zero using a queue."
      },
      {
        "id": "quiz-queues-set-11-q3",
        "question": "Which vertices are initially placed into Kahn's algorithm queue?",
        "options": [
          "Vertices with indegree zero",
          "Vertices with maximum degree",
          "All leaf vertices",
          "Vertices with negative values"
        ],
        "correctIndex": 0,
        "explanation": "Indegree-zero vertices have no unresolved prerequisites."
      },
      {
        "id": "quiz-queues-set-11-q4",
        "question": "What happens to a neighboring vertex's indegree after processing one of its incoming prerequisite edges?",
        "options": [
          "Its indegree decreases by one",
          "Its indegree doubles",
          "Its value changes",
          "It is always deleted"
        ],
        "correctIndex": 0,
        "explanation": "Removing a processed dependency reduces the remaining prerequisite count."
      },
      {
        "id": "quiz-queues-set-11-q5",
        "question": "How can Kahn's algorithm detect a cycle?",
        "options": [
          "If fewer than V vertices are processed, a cycle exists",
          "If the queue becomes non-empty",
          "If every vertex has degree zero",
          "If an edge is weighted"
        ],
        "correctIndex": 0,
        "explanation": "A directed cycle prevents its vertices from ever reaching indegree zero."
      },
      {
        "id": "quiz-queues-set-11-q6",
        "question": "What is the time complexity of Kahn's topological sort using adjacency lists?",
        "options": [
          "O(V + E)",
          "O(V2)",
          "O(E2)",
          "O(log V)"
        ],
        "correctIndex": 0,
        "explanation": "Each vertex and edge is processed a constant number of times."
      },
      {
        "id": "quiz-queues-set-11-q7",
        "question": "Can a graph with a directed cycle have a valid topological ordering?",
        "options": [
          "Yes, always",
          "Only if it has weighted edges",
          "No",
          "Only if it has one vertex"
        ],
        "correctIndex": 2,
        "explanation": "Topological ordering exists only for directed acyclic graphs."
      }
    ]
  },
  {
    "id": "quiz-queues-set-12",
    "topicId": "queues",
    "title": "Queues Quiz - Level 12",
    "subtitle": "Intermediate questions for Queues (Set 12/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-queues-set-12-q1",
        "question": "What is a deque's role in Sliding Window Maximum?",
        "options": [
          "Maintain candidate indices in decreasing order of their values",
          "Store every element permanently",
          "Sort each window from scratch",
          "Store only the smallest value"
        ],
        "correctIndex": 0,
        "explanation": "The deque front represents the maximum candidate for the current window."
      },
      {
        "id": "quiz-queues-set-12-q2",
        "question": "Why should indices outside the current window be removed?",
        "options": [
          "They can no longer contribute to the current answer",
          "They are always maximum",
          "They increase the window size",
          "They make the array sorted"
        ],
        "correctIndex": 0,
        "explanation": "Expired indices refer to elements that are no longer part of the window."
      },
      {
        "id": "quiz-queues-set-12-q3",
        "question": "What happens to smaller values at the back when a larger value enters a decreasing deque?",
        "options": [
          "They are removed because the larger value dominates them",
          "They move to the front",
          "They are duplicated",
          "They become the maximum"
        ],
        "correctIndex": 0,
        "explanation": "The larger newer value will remain a better maximum candidate for windows containing both."
      },
      {
        "id": "quiz-queues-set-12-q4",
        "question": "What is the maximum of [1,3,-1]?",
        "options": [
          "-1",
          "1",
          "3",
          "0"
        ],
        "correctIndex": 2,
        "explanation": "3 is greater than both 1 and -1."
      },
      {
        "id": "quiz-queues-set-12-q5",
        "question": "For array [1,3,-1,-3,5,3,6,7] and window size 3, what is the first window maximum?",
        "options": [
          "1",
          "3",
          "-1",
          "5"
        ],
        "correctIndex": 1,
        "explanation": "The first window is [1,3,-1], whose maximum is 3."
      },
      {
        "id": "quiz-queues-set-12-q6",
        "question": "What is the time complexity of processing n elements with a monotonic deque for sliding-window maximum?",
        "options": [
          "O(n2)",
          "O(n)",
          "O(log n)",
          "O(k2)"
        ],
        "correctIndex": 1,
        "explanation": "Each element is added and removed from the deque at most once."
      },
      {
        "id": "quiz-queues-set-12-q7",
        "question": "What is the worst-case space complexity of the monotonic deque?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "The deque may contain O(n) candidate indices in the worst case."
      }
    ]
  },
  {
    "id": "quiz-queues-set-13",
    "topicId": "queues",
    "title": "Queues Quiz - Level 13",
    "subtitle": "Intermediate questions for Queues (Set 13/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-queues-set-13-q1",
        "question": "What is the shortest-path advantage of 0-1 BFS?",
        "options": [
          "It efficiently handles graphs whose edge weights are only 0 or 1",
          "It handles arbitrary negative weights",
          "It requires no graph",
          "It only works on trees"
        ],
        "correctIndex": 0,
        "explanation": "0-1 BFS uses a deque to exploit the special structure of zero and one edge weights."
      },
      {
        "id": "quiz-queues-set-13-q2",
        "question": "Which data structure is central to 0-1 BFS?",
        "options": [
          "Deque",
          "Stack",
          "Binary search tree",
          "Hash set"
        ],
        "correctIndex": 0,
        "explanation": "Zero-cost edges are added to the front while one-cost edges are added to the back."
      },
      {
        "id": "quiz-queues-set-13-q3",
        "question": "When relaxing an edge with weight 0 in 0-1 BFS, where is the updated vertex placed?",
        "options": [
          "Front of the deque",
          "Back of the deque",
          "Middle of the deque",
          "It is discarded"
        ],
        "correctIndex": 0,
        "explanation": "A zero-cost transition should be processed as soon as possible."
      },
      {
        "id": "quiz-queues-set-13-q4",
        "question": "When relaxing an edge with weight 1 in 0-1 BFS, where is the updated vertex placed?",
        "options": [
          "Front",
          "Back",
          "Random position",
          "It is deleted"
        ],
        "correctIndex": 1,
        "explanation": "Cost-one transitions are delayed behind zero-cost transitions."
      },
      {
        "id": "quiz-queues-set-13-q5",
        "question": "What is the typical complexity of 0-1 BFS with adjacency lists?",
        "options": [
          "O(V + E)",
          "O(VE)",
          "O(V2)",
          "O(E log E)"
        ],
        "correctIndex": 0,
        "explanation": "Each edge can cause a constant amount of deque-based processing."
      },
      {
        "id": "quiz-queues-set-13-q6",
        "question": "Why is ordinary BFS not directly sufficient for graphs with both 0 and 1 edge weights?",
        "options": [
          "BFS assumes equal edge costs when measuring levels",
          "BFS cannot use a queue",
          "BFS only works on arrays",
          "BFS requires negative edges"
        ],
        "correctIndex": 0,
        "explanation": "Different edge costs mean one edge does not necessarily represent the same distance."
      },
      {
        "id": "quiz-queues-set-13-q7",
        "question": "Which algorithm is generally more appropriate than 0-1 BFS for arbitrary non-negative weights?",
        "options": [
          "Dijkstra's algorithm",
          "DFS",
          "Binary Search",
          "Kahn's algorithm"
        ],
        "correctIndex": 0,
        "explanation": "Dijkstra handles arbitrary non-negative edge weights using a priority queue."
      }
    ]
  },
  {
    "id": "quiz-queues-set-14",
    "topicId": "queues",
    "title": "Queues Quiz - Level 14",
    "subtitle": "Advanced questions for Queues (Set 14/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-queues-set-14-q1",
        "question": "What is the main idea of BFS on a grid with obstacles?",
        "options": [
          "Treat reachable cells as graph vertices and explore them level by level",
          "Sort all cells",
          "Use recursion only",
          "Ignore blocked cells"
        ],
        "correctIndex": 0,
        "explanation": "Each reachable cell can be treated as a graph node with edges to valid neighboring cells."
      },
      {
        "id": "quiz-queues-set-14-q2",
        "question": "What should happen when BFS encounters a blocked grid cell?",
        "options": [
          "Do not enqueue it",
          "Always enqueue it",
          "Treat it as the source",
          "Convert it into an open cell"
        ],
        "correctIndex": 0,
        "explanation": "Blocked cells cannot be traversed."
      },
      {
        "id": "quiz-queues-set-14-q3",
        "question": "What is the typical shortest path metric in a four-direction grid BFS?",
        "options": [
          "Number of horizontal and vertical moves",
          "Euclidean distance only",
          "Number of rows only",
          "Number of columns only"
        ],
        "correctIndex": 0,
        "explanation": "Each valid move has equal cost, so BFS minimizes the number of moves."
      },
      {
        "id": "quiz-queues-set-14-q4",
        "question": "Why should a grid cell usually be marked visited when enqueued?",
        "options": [
          "To prevent it from being added multiple times",
          "To increase its distance",
          "To make it an obstacle",
          "To sort the queue"
        ],
        "correctIndex": 0,
        "explanation": "Marking upon enqueue prevents duplicate queue entries."
      },
      {
        "id": "quiz-queues-set-14-q5",
        "question": "What is the time complexity of BFS over an m×n grid when each cell has a constant number of neighbors?",
        "options": [
          "O(mn)",
          "O(m2n2)",
          "O(m+n)",
          "O(log mn)"
        ],
        "correctIndex": 0,
        "explanation": "Each cell and its constant number of neighbors are processed at most a constant number of times."
      },
      {
        "id": "quiz-queues-set-14-q6",
        "question": "What is a common way to reconstruct the shortest path after BFS?",
        "options": [
          "Store each cell's parent or predecessor",
          "Sort the visited cells",
          "Store only the destination",
          "Run DFS without any information"
        ],
        "correctIndex": 0,
        "explanation": "Parent pointers allow the path to be followed backward from the destination to the source."
      },
      {
        "id": "quiz-queues-set-14-q7",
        "question": "If the destination is never reached by BFS, what does that imply?",
        "options": [
          "No valid path exists under the allowed movement rules",
          "The destination is automatically the source",
          "The graph contains a negative edge",
          "The queue is sorted incorrectly"
        ],
        "correctIndex": 0,
        "explanation": "If BFS exhausts all reachable states without finding the destination, it is unreachable."
      }
    ]
  },
  {
    "id": "quiz-queues-set-15",
    "topicId": "queues",
    "title": "Queues Quiz - Level 15",
    "subtitle": "Advanced questions for Queues (Set 15/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-queues-set-15-q1",
        "question": "What is the core idea of implementing a stack using two queues?",
        "options": [
          "Rearrange elements so the most recently added element is available for removal first",
          "Always remove the oldest element",
          "Sort the values numerically",
          "Use one queue only for storage"
        ],
        "correctIndex": 0,
        "explanation": "The implementation must transform FIFO behavior into LIFO behavior."
      },
      {
        "id": "quiz-queues-set-15-q2",
        "question": "Which approach can make push O(n) but pop O(1) when implementing a stack with two queues?",
        "options": [
          "Move existing elements behind the newly pushed element",
          "Move nothing during push",
          "Sort both queues",
          "Delete the newest element"
        ],
        "correctIndex": 0,
        "explanation": "By rearranging the queue during push, the newest element can be kept at the front for O(1) pop."
      },
      {
        "id": "quiz-queues-set-15-q3",
        "question": "What is the trade-off when implementing a stack with two queues using the push-costly approach?",
        "options": [
          "Push is O(n), while pop can be O(1)",
          "Both operations must be O(n2)",
          "Push and pop are always O(1)",
          "The stack becomes FIFO"
        ],
        "correctIndex": 0,
        "explanation": "The cost is shifted from pop to push."
      },
      {
        "id": "quiz-queues-set-15-q4",
        "question": "What is the alternative design where push is O(1) and pop can be O(n)?",
        "options": [
          "Keep elements in insertion order and transfer them during pop",
          "Sort on every push",
          "Use a heap",
          "Delete the oldest element"
        ],
        "correctIndex": 0,
        "explanation": "The newest element must be exposed at pop time, which can require moving older elements."
      },
      {
        "id": "quiz-queues-set-15-q5",
        "question": "Why is this stack-via-queues problem useful for learning data structures?",
        "options": [
          "It demonstrates how changing access rules can be achieved by combining structures",
          "It proves queues and stacks are identical",
          "It eliminates the need for algorithms",
          "It guarantees O(1) for every design"
        ],
        "correctIndex": 0,
        "explanation": "The problem highlights how one abstract behavior can be built from another data structure."
      },
      {
        "id": "quiz-queues-set-15-q6",
        "question": "Which principle should remain true regardless of the implementation?",
        "options": [
          "The most recently pushed element must be popped first",
          "The oldest element must be popped first",
          "Elements must remain sorted",
          "Elements must be removed randomly"
        ],
        "correctIndex": 0,
        "explanation": "That is the defining LIFO property of a stack."
      },
      {
        "id": "quiz-queues-set-15-q7",
        "question": "Can a queue implementation of a stack use only one queue?",
        "options": [
          "Yes, with suitable element rotation",
          "No, it always requires exactly two queues",
          "Only with a heap",
          "Only for one element"
        ],
        "correctIndex": 0,
        "explanation": "A single queue can rotate its elements so that the newest element reaches the front."
      }
    ]
  },
  {
    "id": "quiz-queues-set-16",
    "topicId": "queues",
    "title": "Queues Quiz - Level 16",
    "subtitle": "Advanced questions for Queues (Set 16/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-queues-set-16-q1",
        "question": "What is the purpose of a blocking queue in concurrent systems?",
        "options": [
          "Coordinate producers and consumers by waiting when the queue is empty or full",
          "Sort tasks by value",
          "Remove the need for synchronization",
          "Store only high-priority items"
        ],
        "correctIndex": 0,
        "explanation": "Blocking queues help coordinate threads by waiting when operations cannot safely proceed."
      },
      {
        "id": "quiz-queues-set-16-q2",
        "question": "What might a consumer do when a blocking queue is empty?",
        "options": [
          "Wait until an item becomes available",
          "Create a random item",
          "Delete the queue",
          "Reverse the queue"
        ],
        "correctIndex": 0,
        "explanation": "A blocking consumer waits for a producer to add an item."
      },
      {
        "id": "quiz-queues-set-16-q3",
        "question": "What might a producer do when a bounded blocking queue is full?",
        "options": [
          "Wait until space becomes available",
          "Overwrite an arbitrary item automatically",
          "Delete the queue",
          "Reverse all elements"
        ],
        "correctIndex": 0,
        "explanation": "A bounded blocking queue can make producers wait rather than exceed capacity."
      },
      {
        "id": "quiz-queues-set-16-q4",
        "question": "What is the producer-consumer problem?",
        "options": [
          "Coordinating producers that add items and consumers that remove them safely",
          "Sorting producer names",
          "Finding shortest paths",
          "Managing recursion"
        ],
        "correctIndex": 0,
        "explanation": "The problem focuses on synchronization and shared-buffer access."
      },
      {
        "id": "quiz-queues-set-16-q5",
        "question": "Why is synchronization important for a shared queue used by multiple threads?",
        "options": [
          "To prevent race conditions and inconsistent queue state",
          "To make every item sorted",
          "To guarantee infinite capacity",
          "To remove all waiting"
        ],
        "correctIndex": 0,
        "explanation": "Concurrent modifications can corrupt queue state without proper synchronization."
      },
      {
        "id": "quiz-queues-set-16-q6",
        "question": "What does a bounded queue enforce?",
        "options": [
          "A maximum number of elements",
          "A minimum number of elements",
          "Sorted insertion",
          "LIFO removal"
        ],
        "correctIndex": 0,
        "explanation": "A bounded queue has a fixed upper capacity."
      },
      {
        "id": "quiz-queues-set-16-q7",
        "question": "Which system is a natural producer-consumer example?",
        "options": [
          "A web server receiving requests and worker threads processing them",
          "A static array",
          "A binary search tree",
          "A recursive function with no shared state"
        ],
        "correctIndex": 0,
        "explanation": "Incoming requests can be produced into a queue while worker threads consume them."
      }
    ]
  },
  {
    "id": "quiz-queues-set-17",
    "topicId": "queues",
    "title": "Queues Quiz - Level 17",
    "subtitle": "Advanced questions for Queues (Set 17/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-queues-set-17-q1",
        "question": "What is the purpose of a priority queue in an event-driven system?",
        "options": [
          "Process the next event according to its priority or scheduled time",
          "Always process the oldest event regardless of priority",
          "Randomize event order",
          "Store only completed events"
        ],
        "correctIndex": 0,
        "explanation": "Priority queues allow the most urgent or earliest scheduled event to be selected efficiently."
      },
      {
        "id": "quiz-queues-set-17-q2",
        "question": "Which scheduling strategy can be implemented with a priority queue?",
        "options": [
          "Always process the highest-priority task first",
          "Always process tasks alphabetically",
          "Always process the newest task first",
          "Always process tasks randomly"
        ],
        "correctIndex": 0,
        "explanation": "Priority scheduling selects tasks based on their assigned priority."
      },
      {
        "id": "quiz-queues-set-17-q3",
        "question": "What problem can occur when high-priority tasks continuously arrive?",
        "options": [
          "Starvation of lower-priority tasks",
          "The queue automatically becomes a stack",
          "All tasks become equal",
          "The queue becomes sorted by insertion time"
        ],
        "correctIndex": 0,
        "explanation": "Low-priority tasks may wait indefinitely if higher-priority tasks continuously take precedence."
      },
      {
        "id": "quiz-queues-set-17-q4",
        "question": "What technique can help reduce starvation in priority scheduling?",
        "options": [
          "Aging lower-priority tasks over time",
          "Deleting low-priority tasks",
          "Ignoring task priorities",
          "Using random deletion only"
        ],
        "correctIndex": 0,
        "explanation": "Aging gradually increases the effective priority of tasks that have waited for a long time."
      },
      {
        "id": "quiz-queues-set-17-q5",
        "question": "What is a stable priority queue?",
        "options": [
          "One that preserves insertion order among elements with equal priority",
          "One that never changes size",
          "One that contains only integers",
          "One that always uses FIFO for all priorities"
        ],
        "correctIndex": 0,
        "explanation": "Stability means equal-priority items retain their relative arrival order."
      },
      {
        "id": "quiz-queues-set-17-q6",
        "question": "Why might a priority queue store both priority and insertion sequence?",
        "options": [
          "The sequence can break ties while preserving stable ordering",
          "It eliminates the need for priorities",
          "It makes all operations O(n2)",
          "It stores duplicate queues"
        ],
        "correctIndex": 0,
        "explanation": "A sequence number can provide deterministic ordering among equal-priority entries."
      },
      {
        "id": "quiz-queues-set-17-q7",
        "question": "Which structure is generally better for strict FIFO processing without priorities?",
        "options": [
          "Ordinary queue",
          "Priority queue",
          "Max heap",
          "Stack"
        ],
        "correctIndex": 0,
        "explanation": "A standard queue directly models FIFO behavior."
      }
    ]
  },
  {
    "id": "quiz-queues-set-18",
    "topicId": "queues",
    "title": "Queues Quiz - Level 18",
    "subtitle": "Advanced questions for Queues (Set 18/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-queues-set-18-q1",
        "question": "What is the key idea behind parallel BFS or multi-worker queue processing?",
        "options": [
          "Multiple workers process queued tasks while preserving appropriate synchronization",
          "Every worker uses a separate unrelated graph",
          "The queue is replaced by sorting",
          "Only one task can ever exist"
        ],
        "correctIndex": 0,
        "explanation": "Parallel processing allows multiple queued states to be processed concurrently."
      },
      {
        "id": "quiz-queues-set-18-q2",
        "question": "What major challenge appears when multiple workers access the same queue?",
        "options": [
          "Concurrent access must be synchronized safely",
          "FIFO becomes impossible mathematically",
          "Queues cannot store objects",
          "All workers must process the same item"
        ],
        "correctIndex": 0,
        "explanation": "Unsynchronized concurrent modifications can cause lost updates or duplicate processing."
      },
      {
        "id": "quiz-queues-set-18-q3",
        "question": "What is work stealing in task scheduling?",
        "options": [
          "An idle worker takes tasks from another worker's queue",
          "Deleting another worker's tasks",
          "Sorting every worker's queue",
          "Sending every task to one worker"
        ],
        "correctIndex": 0,
        "explanation": "Work stealing improves load balancing by allowing idle workers to take available tasks."
      },
      {
        "id": "quiz-queues-set-18-q4",
        "question": "Why is load balancing important in parallel queue processing?",
        "options": [
          "It prevents some workers from being overloaded while others remain idle",
          "It guarantees FIFO across unrelated tasks",
          "It removes synchronization requirements",
          "It makes every task identical"
        ],
        "correctIndex": 0,
        "explanation": "Balanced workloads can improve overall throughput and resource utilization."
      },
      {
        "id": "quiz-queues-set-18-q5",
        "question": "What is a common concern when using a priority queue in a concurrent environment?",
        "options": [
          "Multiple threads must coordinate access to heap state",
          "Priorities cannot be compared",
          "The queue cannot contain duplicate priorities",
          "The queue always becomes FIFO"
        ],
        "correctIndex": 0,
        "explanation": "Concurrent modifications to the priority queue require safe synchronization."
      },
      {
        "id": "quiz-queues-set-18-q6",
        "question": "What does thread-safe queue behavior aim to guarantee?",
        "options": [
          "Operations remain correct when multiple threads access the queue concurrently",
          "All tasks execute simultaneously",
          "The queue has unlimited capacity",
          "Tasks are always processed by priority"
        ],
        "correctIndex": 0,
        "explanation": "Thread safety protects the queue's invariants under concurrent operations."
      },
      {
        "id": "quiz-queues-set-18-q7",
        "question": "What is one advantage of a concurrent queue?",
        "options": [
          "It can support safe communication between concurrent producers and consumers",
          "It eliminates all synchronization costs",
          "It automatically sorts data",
          "It provides random access"
        ],
        "correctIndex": 0,
        "explanation": "Concurrent queues are designed to safely exchange work between threads."
      }
    ]
  },
  {
    "id": "quiz-queues-set-19",
    "topicId": "queues",
    "title": "Queues Quiz - Level 19",
    "subtitle": "Advanced questions for Queues (Set 19/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-queues-set-19-q1",
        "question": "What is the key difference between a queue and a priority queue?",
        "options": [
          "A queue removes by arrival order, while a priority queue removes according to priority",
          "A queue uses arrays while a priority queue cannot",
          "A queue is always sorted",
          "A priority queue always follows strict FIFO"
        ],
        "correctIndex": 0,
        "explanation": "FIFO is the defining rule of a normal queue, while priority determines removal in a priority queue."
      },
      {
        "id": "quiz-queues-set-19-q2",
        "question": "What is the key difference between a queue and a deque?",
        "options": [
          "A queue normally operates at opposite ends, while a deque supports insertion and removal at both ends",
          "A deque only removes from the front",
          "A queue always uses a heap",
          "A deque cannot store duplicate values"
        ],
        "correctIndex": 0,
        "explanation": "A deque provides more flexible endpoint operations."
      },
      {
        "id": "quiz-queues-set-19-q3",
        "question": "Which queue-related structure is best suited for shortest paths in an unweighted graph?",
        "options": [
          "FIFO queue",
          "Max heap",
          "Stack",
          "Sorted array"
        ],
        "correctIndex": 0,
        "explanation": "BFS uses FIFO ordering to explore vertices by increasing distance."
      },
      {
        "id": "quiz-queues-set-19-q4",
        "question": "Which queue-related structure is best suited for shortest paths with arbitrary non-negative edge weights?",
        "options": [
          "Priority queue",
          "Simple FIFO queue",
          "Stack",
          "Deque only"
        ],
        "correctIndex": 0,
        "explanation": "Dijkstra's algorithm uses a priority queue to select the smallest tentative distance."
      },
      {
        "id": "quiz-queues-set-19-q5",
        "question": "Which structure is especially useful when edge weights are only 0 and 1?",
        "options": [
          "Deque",
          "Stack",
          "Ordinary queue only",
          "Binary tree"
        ],
        "correctIndex": 0,
        "explanation": "0-1 BFS uses a deque to prioritize zero-cost transitions."
      },
      {
        "id": "quiz-queues-set-19-q6",
        "question": "What is the key invariant of a BFS queue?",
        "options": [
          "Vertices are processed in nondecreasing distance from the source in an unweighted graph",
          "Vertices are always processed by value",
          "The queue remains sorted alphabetically",
          "The largest vertex is always at the front"
        ],
        "correctIndex": 0,
        "explanation": "FIFO processing causes BFS to expand outward one distance level at a time."
      },
      {
        "id": "quiz-queues-set-19-q7",
        "question": "What is a common mistake when implementing BFS?",
        "options": [
          "Marking vertices visited too late and allowing duplicate enqueues",
          "Using a queue",
          "Tracking visited vertices",
          "Processing neighbors"
        ],
        "correctIndex": 0,
        "explanation": "Marking a vertex when it is discovered prevents unnecessary duplicate entries."
      }
    ]
  },
  {
    "id": "quiz-queues-set-20",
    "topicId": "queues",
    "title": "Queues Quiz - Level 20",
    "subtitle": "Advanced questions for Queues (Set 20/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-queues-set-20-q1",
        "question": "Which combination best summarizes the major advanced queue patterns?",
        "options": [
          "BFS, multi-source BFS, priority queues, monotonic deques, topological sorting, and producer-consumer systems",
          "Only enqueue and dequeue",
          "Only arrays and linked lists",
          "Only FIFO scheduling"
        ],
        "correctIndex": 0,
        "explanation": "These patterns cover many important applications of queues and related structures."
      },
      {
        "id": "quiz-queues-set-20-q2",
        "question": "When should you prefer a priority queue over a normal FIFO queue?",
        "options": [
          "When the next item should be selected according to priority rather than arrival order",
          "Whenever there are more than five elements",
          "Whenever elements are strings",
          "Whenever strict FIFO behavior is required"
        ],
        "correctIndex": 0,
        "explanation": "Priority queues are designed for situations where importance determines processing order."
      },
      {
        "id": "quiz-queues-set-20-q3",
        "question": "When should a monotonic deque be considered?",
        "options": [
          "When a sliding-window problem needs efficient maximum or minimum maintenance",
          "When strict LIFO behavior is required",
          "When all elements must be sorted permanently",
          "When there is no ordering requirement"
        ],
        "correctIndex": 0,
        "explanation": "Monotonic deques efficiently maintain candidates for window-based min/max queries."
      },
      {
        "id": "quiz-queues-set-20-q4",
        "question": "Why does multi-source BFS still achieve shortest distances from the nearest source?",
        "options": [
          "All sources begin at distance zero and BFS expands in increasing distance order",
          "Sources are processed one at a time using DFS",
          "The grid is sorted first",
          "Every source is assigned a different speed"
        ],
        "correctIndex": 0,
        "explanation": "Starting all sources simultaneously means the first arrival at a node comes from a nearest source."
      },
      {
        "id": "quiz-queues-set-20-q5",
        "question": "What is the main algorithmic insight behind Kahn's algorithm?",
        "options": [
          "Repeatedly remove vertices with no remaining prerequisites",
          "Always select the largest vertex",
          "Run DFS from every vertex",
          "Sort all edges by weight"
        ],
        "correctIndex": 0,
        "explanation": "Indegree-zero vertices are safe to place next in a topological ordering."
      },
      {
        "id": "quiz-queues-set-20-q6",
        "question": "What is the most important distinction when choosing between BFS and Dijkstra's algorithm?",
        "options": [
          "BFS assumes equal edge costs, while Dijkstra handles non-negative varying edge costs",
          "BFS works only on trees",
          "Dijkstra works only on unweighted graphs",
          "Both always require the same data structure"
        ],
        "correctIndex": 0,
        "explanation": "BFS is sufficient for equal-cost edges, while Dijkstra accounts for different non-negative weights."
      },
      {
        "id": "quiz-queues-set-20-q7",
        "question": "When designing a queue-based solution, what should you identify first?",
        "options": [
          "The required processing order and what information must remain available",
          "The programming language",
          "The number of comments",
          "Whether recursion can be avoided"
        ],
        "correctIndex": 0,
        "explanation": "Understanding whether the problem needs FIFO, priority, double-ended access, or level-based processing determines the appropriate queue structure."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-1",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 1",
    "subtitle": "Beginner questions for Hash Maps (Set 1/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-hash-maps-set-1-q1",
        "question": "What is a hash map?",
        "options": [
          "A data structure that stores key-value pairs",
          "A data structure that only stores values in sorted order",
          "A tree where every node has exactly two children",
          "A structure that follows LIFO order"
        ],
        "correctIndex": 0,
        "explanation": "A hash map stores data as key-value pairs and uses a hash function to efficiently locate values."
      },
      {
        "id": "quiz-hash-maps-set-1-q2",
        "question": "What is the main purpose of a key in a hash map?",
        "options": [
          "To uniquely identify and access a value",
          "To sort every value",
          "To determine the size of the array",
          "To store duplicate values"
        ],
        "correctIndex": 0,
        "explanation": "A key identifies the associated value and is used to find it efficiently."
      },
      {
        "id": "quiz-hash-maps-set-1-q3",
        "question": "Which real-world example is most similar to a hash map?",
        "options": [
          "A dictionary mapping words to definitions",
          "A stack of plates",
          "A line at a ticket counter",
          "A family tree"
        ],
        "correctIndex": 0,
        "explanation": "A dictionary maps a word (key) to its definition (value), similar to a hash map."
      },
      {
        "id": "quiz-hash-maps-set-1-q4",
        "question": "What does a hash function do?",
        "options": [
          "Converts a key into a value used to determine a storage location",
          "Sorts all keys alphabetically",
          "Deletes duplicate values",
          "Reverses the map"
        ],
        "correctIndex": 0,
        "explanation": "A hash function transforms a key into a hash value that helps determine where the key-value pair is stored."
      },
      {
        "id": "quiz-hash-maps-set-1-q5",
        "question": "Can two different keys produce the same hash index?",
        "options": [
          "Yes, this is called a collision",
          "No, it is mathematically impossible",
          "Only when the map is empty",
          "Only for string keys"
        ],
        "correctIndex": 0,
        "explanation": "Different keys can sometimes map to the same storage position, creating a hash collision."
      },
      {
        "id": "quiz-hash-maps-set-1-q6",
        "question": "What does a hash map typically optimize for?",
        "options": [
          "Fast lookup, insertion, and deletion",
          "Maintaining sorted order",
          "Sequential access only",
          "Recursive traversal"
        ],
        "correctIndex": 0,
        "explanation": "Hash maps are designed for fast average-case key-based operations."
      },
      {
        "id": "quiz-hash-maps-set-1-q7",
        "question": "Which of the following is a common hash map operation?",
        "options": [
          "Get a value using a key",
          "Traverse every tree level",
          "Push an element onto a stack",
          "Rotate a linked list"
        ],
        "correctIndex": 0,
        "explanation": "Retrieving a value using its key is one of the primary operations of a hash map."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-2",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 2",
    "subtitle": "Beginner questions for Hash Maps (Set 2/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-hash-maps-set-2-q1",
        "question": "If a hash map contains {name: Surya}, what is the key?",
        "options": [
          "Surya",
          "name",
          "The entire object",
          "None"
        ],
        "correctIndex": 1,
        "explanation": "name is the key and Surya is its associated value."
      },
      {
        "id": "quiz-hash-maps-set-2-q2",
        "question": "If a map stores student ID 101 mapped to Ravi, what is the value?",
        "options": [
          "101",
          "student",
          "Ravi",
          "The hash index"
        ],
        "correctIndex": 2,
        "explanation": "Ravi is the value associated with key 101."
      },
      {
        "id": "quiz-hash-maps-set-2-q3",
        "question": "What happens when a new value is assigned to an existing key?",
        "options": [
          "The existing value is typically replaced",
          "A second identical key is always created",
          "The entire map is deleted",
          "The key becomes invalid"
        ],
        "correctIndex": 0,
        "explanation": "Hash maps generally allow one current value per key, so assigning again updates the value."
      },
      {
        "id": "quiz-hash-maps-set-2-q4",
        "question": "Which operation checks whether a key exists in a hash map?",
        "options": [
          "Contains or has",
          "Push",
          "Pop",
          "Enqueue"
        ],
        "correctIndex": 0,
        "explanation": "A contains/has operation checks whether a specified key is present."
      },
      {
        "id": "quiz-hash-maps-set-2-q5",
        "question": "What does deleting a key from a hash map normally do?",
        "options": [
          "Removes the key and its associated value",
          "Removes every key",
          "Changes the key into an array",
          "Sorts the remaining keys"
        ],
        "correctIndex": 0,
        "explanation": "Deleting a key removes its corresponding key-value entry."
      },
      {
        "id": "quiz-hash-maps-set-2-q6",
        "question": "Can a hash map usually contain multiple entries with exactly the same key?",
        "options": [
          "No, assigning the same key normally updates its value",
          "Yes, always",
          "Only if the keys are integers",
          "Only when the map is full"
        ],
        "correctIndex": 0,
        "explanation": "Keys are identifiers, so a repeated key normally refers to the same entry."
      },
      {
        "id": "quiz-hash-maps-set-2-q7",
        "question": "Which task is naturally suited to a hash map?",
        "options": [
          "Looking up a person's phone number using their name",
          "Finding the middle node of a linked list",
          "Performing inorder traversal",
          "Implementing a stack"
        ],
        "correctIndex": 0,
        "explanation": "A hash map is ideal when one piece of information needs to quickly map to another."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-3",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 3",
    "subtitle": "Beginner questions for Hash Maps (Set 3/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-hash-maps-set-3-q1",
        "question": "What is the average-case time complexity of lookup in a well-designed hash map?",
        "options": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "A good hash function and controlled load factor allow average constant-time lookup."
      },
      {
        "id": "quiz-hash-maps-set-3-q2",
        "question": "What is the average-case time complexity of insertion?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "Insertion is typically O(1) on average when collisions are well controlled."
      },
      {
        "id": "quiz-hash-maps-set-3-q3",
        "question": "What is the average-case time complexity of deletion?",
        "options": [
          "O(n2)",
          "O(1)",
          "O(n)",
          "O(log n)"
        ],
        "correctIndex": 1,
        "explanation": "Deletion is generally constant time on average in a well-designed hash map."
      },
      {
        "id": "quiz-hash-maps-set-3-q4",
        "question": "What is the worst-case lookup complexity of a basic hash table?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "correctIndex": 2,
        "explanation": "In the worst case, many keys can collide and lookup may require scanning many entries."
      },
      {
        "id": "quiz-hash-maps-set-3-q5",
        "question": "What is the main reason hash map lookup can be O(1) on average?",
        "options": [
          "The hash function directly helps locate the relevant bucket",
          "All keys are always sorted",
          "Every map contains only one key",
          "Hash maps use binary search"
        ],
        "correctIndex": 0,
        "explanation": "Hashing converts a key into a location, avoiding a full scan in typical cases."
      },
      {
        "id": "quiz-hash-maps-set-3-q6",
        "question": "What happens if a hash map becomes extremely crowded?",
        "options": [
          "Collisions become more likely and performance can degrade",
          "All keys automatically disappear",
          "Lookup becomes guaranteed O(1)",
          "The map becomes a stack"
        ],
        "correctIndex": 0,
        "explanation": "A high load factor increases collisions and can make operations slower."
      },
      {
        "id": "quiz-hash-maps-set-3-q7",
        "question": "Which operation is generally NOT guaranteed to be O(1) in the worst case?",
        "options": [
          "Hash map lookup",
          "Reading an array element by index",
          "Accessing a fixed variable",
          "Checking a boolean"
        ],
        "correctIndex": 0,
        "explanation": "Hash map lookup can degrade to O(n) in unfavorable collision scenarios."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-4",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 4",
    "subtitle": "Beginner questions for Hash Maps (Set 4/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-hash-maps-set-4-q1",
        "question": "What is a hash collision?",
        "options": [
          "When two different keys map to the same bucket or index",
          "When a key is deleted",
          "When two values are equal",
          "When the table becomes empty"
        ],
        "correctIndex": 0,
        "explanation": "A collision occurs when multiple different keys are assigned to the same storage location."
      },
      {
        "id": "quiz-hash-maps-set-4-q2",
        "question": "Which technique stores multiple collided entries in a bucket using a linked structure?",
        "options": [
          "Separate chaining",
          "Binary search",
          "Recursion",
          "Heapification"
        ],
        "correctIndex": 0,
        "explanation": "Separate chaining stores multiple entries associated with the same bucket in a chain."
      },
      {
        "id": "quiz-hash-maps-set-4-q3",
        "question": "Which technique searches for another empty position when a collision occurs?",
        "options": [
          "Open addressing",
          "Tree traversal",
          "Depth-first search",
          "Merge operation"
        ],
        "correctIndex": 0,
        "explanation": "Open addressing stores all entries inside the table and searches for alternative positions."
      },
      {
        "id": "quiz-hash-maps-set-4-q4",
        "question": "What is linear probing?",
        "options": [
          "Checking consecutive positions until an available slot is found",
          "Using a linked list for every bucket",
          "Sorting all keys",
          "Using two hash maps"
        ],
        "correctIndex": 0,
        "explanation": "Linear probing checks the next slot, then the next, until it finds a suitable position."
      },
      {
        "id": "quiz-hash-maps-set-4-q5",
        "question": "What is one disadvantage of linear probing?",
        "options": [
          "Primary clustering",
          "It cannot store integers",
          "It always uses O(n2) space",
          "It cannot handle collisions"
        ],
        "correctIndex": 0,
        "explanation": "Linear probing can create clusters of occupied consecutive slots."
      },
      {
        "id": "quiz-hash-maps-set-4-q6",
        "question": "What is quadratic probing designed to reduce?",
        "options": [
          "Primary clustering",
          "The number of keys",
          "The table size",
          "Hash function computation"
        ],
        "correctIndex": 0,
        "explanation": "Quadratic probing uses increasing quadratic offsets to reduce the clustering caused by linear probing."
      },
      {
        "id": "quiz-hash-maps-set-4-q7",
        "question": "What is double hashing?",
        "options": [
          "Using a second hash function to determine the probing step",
          "Hashing every key twice into the same bucket",
          "Using two identical hash tables",
          "Sorting keys after hashing"
        ],
        "correctIndex": 0,
        "explanation": "Double hashing uses a second hash function to calculate how far to move after a collision."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-5",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 5",
    "subtitle": "Beginner questions for Hash Maps (Set 5/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-hash-maps-set-5-q1",
        "question": "What is the load factor of a hash table?",
        "options": [
          "The ratio of stored elements to available table capacity",
          "The number of collisions only",
          "The size of the largest key",
          "The number of hash functions"
        ],
        "correctIndex": 0,
        "explanation": "Load factor measures how full the hash table is."
      },
      {
        "id": "quiz-hash-maps-set-5-q2",
        "question": "If a hash table has 10 slots and stores 7 elements, what is its load factor?",
        "options": [
          "0.7",
          "7",
          "0.07",
          "1.7"
        ],
        "correctIndex": 0,
        "explanation": "Load factor = 7 / 10 = 0.7."
      },
      {
        "id": "quiz-hash-maps-set-5-q3",
        "question": "Why is controlling the load factor important?",
        "options": [
          "A lower load factor generally reduces collisions",
          "It makes keys sorted",
          "It eliminates the need for hashing",
          "It makes the table use no memory"
        ],
        "correctIndex": 0,
        "explanation": "More empty space generally means fewer collisions and faster average operations."
      },
      {
        "id": "quiz-hash-maps-set-5-q4",
        "question": "What is resizing in a hash map?",
        "options": [
          "Creating a larger table and rehashing existing entries",
          "Changing every key's value",
          "Deleting half the keys",
          "Sorting all values"
        ],
        "correctIndex": 0,
        "explanation": "When the table becomes too full, entries are usually moved into a larger table using the hash function again."
      },
      {
        "id": "quiz-hash-maps-set-5-q5",
        "question": "Why is rehashing needed after resizing?",
        "options": [
          "The bucket positions depend on the new table capacity",
          "Keys become invalid",
          "Values must be sorted",
          "The hash function stops working"
        ],
        "correctIndex": 0,
        "explanation": "Changing the table size can change the computed index, so entries must be placed again."
      },
      {
        "id": "quiz-hash-maps-set-5-q6",
        "question": "What does amortized O(1) insertion mean for a dynamic hash map?",
        "options": [
          "Most insertions are O(1), while occasional resizing is expensive but spread over many operations",
          "Every insertion is always O(1)",
          "Every insertion is O(n)",
          "Insertion requires sorting"
        ],
        "correctIndex": 0,
        "explanation": "Occasional rehashing costs more, but its cost can be averaged over many insertions."
      },
      {
        "id": "quiz-hash-maps-set-5-q7",
        "question": "What can happen if a hash table never resizes as it fills?",
        "options": [
          "Collisions may increase significantly",
          "Lookup becomes automatically faster",
          "Memory usage becomes zero",
          "Keys become sorted"
        ],
        "correctIndex": 0,
        "explanation": "A crowded table generally produces more collisions and worse performance."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-6",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 6",
    "subtitle": "Beginner questions for Hash Maps (Set 6/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-hash-maps-set-6-q1",
        "question": "Which problem is commonly solved using a hash map of frequencies?",
        "options": [
          "Finding the frequency of each element",
          "Finding tree height",
          "Performing BFS",
          "Reversing a linked list"
        ],
        "correctIndex": 0,
        "explanation": "A hash map can store each element as a key and its occurrence count as the value."
      },
      {
        "id": "quiz-hash-maps-set-6-q2",
        "question": "For the array [2,2,3,3,3], what is the frequency of 3?",
        "options": [
          "2",
          "3",
          "5",
          "1"
        ],
        "correctIndex": 1,
        "explanation": "The value 3 appears three times."
      },
      {
        "id": "quiz-hash-maps-set-6-q3",
        "question": "Which operation is typically used to update a frequency count?",
        "options": [
          "count[x] = count[x] + 1",
          "count[x] = 0 always",
          "delete(count[x])",
          "sort(count)"
        ],
        "correctIndex": 0,
        "explanation": "Each occurrence increments the count associated with the element."
      },
      {
        "id": "quiz-hash-maps-set-6-q4",
        "question": "What is the time complexity of counting frequencies of n elements using a hash map on average?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Each element performs an average O(1) map update, resulting in O(n) total time."
      },
      {
        "id": "quiz-hash-maps-set-6-q5",
        "question": "What is the space complexity of storing frequencies for k distinct values?",
        "options": [
          "O(k)",
          "O(1)",
          "O(n2)",
          "O(log k)"
        ],
        "correctIndex": 0,
        "explanation": "One map entry is needed for each distinct value."
      },
      {
        "id": "quiz-hash-maps-set-6-q6",
        "question": "How can a hash map help find the first unique character in a string?",
        "options": [
          "Count character frequencies and then scan the string again",
          "Sort the string and discard positions",
          "Use only a stack",
          "Reverse the string"
        ],
        "correctIndex": 0,
        "explanation": "The frequency map identifies characters appearing once, while the second scan preserves original order."
      },
      {
        "id": "quiz-hash-maps-set-6-q7",
        "question": "Why is a second scan needed when finding the first unique character?",
        "options": [
          "The first unique character depends on original order, not just frequency",
          "Hash maps cannot count frequencies",
          "The string must be reversed",
          "The map automatically sorts characters"
        ],
        "correctIndex": 0,
        "explanation": "Frequency alone does not tell which unique character appears first."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-7",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 7",
    "subtitle": "Intermediate questions for Hash Maps (Set 7/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-hash-maps-set-7-q1",
        "question": "How can a hash map solve the Two Sum problem efficiently?",
        "options": [
          "Store previously seen values and check whether target - current exists",
          "Sort the array and always use nested loops",
          "Use a stack only",
          "Compare every pair"
        ],
        "correctIndex": 0,
        "explanation": "For each number x, checking whether target-x was previously seen can find the pair in average O(1) per element."
      },
      {
        "id": "quiz-hash-maps-set-7-q2",
        "question": "For [2,7,11,15] and target 9, which pair solves Two Sum?",
        "options": [
          "2 and 7",
          "7 and 15",
          "2 and 15",
          "11 and -2"
        ],
        "correctIndex": 0,
        "explanation": "2 + 7 = 9."
      },
      {
        "id": "quiz-hash-maps-set-7-q3",
        "question": "What should be checked for current value x when target is T?",
        "options": [
          "Whether T - x is already in the map",
          "Whether T + x is in the map",
          "Whether x is the largest value",
          "Whether x is negative"
        ],
        "correctIndex": 0,
        "explanation": "The complement T-x is exactly the value needed to form the target."
      },
      {
        "id": "quiz-hash-maps-set-7-q4",
        "question": "What is the average time complexity of the hash-map Two Sum solution?",
        "options": [
          "O(n2)",
          "O(n)",
          "O(log n)",
          "O(1) regardless of input size"
        ],
        "correctIndex": 1,
        "explanation": "Each element is processed once with average O(1) hash-map operations."
      },
      {
        "id": "quiz-hash-maps-set-7-q5",
        "question": "What is the typical space complexity of the hash-map Two Sum approach?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "The map may store up to n previously seen elements."
      },
      {
        "id": "quiz-hash-maps-set-7-q6",
        "question": "Why might sorting be less convenient than a hash map for the classic Two Sum problem?",
        "options": [
          "Sorting can change original indices and typically takes O(n log n)",
          "Sorting cannot compare numbers",
          "Hash maps cannot store numbers",
          "Sorting always takes O(1)"
        ],
        "correctIndex": 0,
        "explanation": "The classic problem asks for original indices, and sorting requires additional handling or loses direct index positions."
      },
      {
        "id": "quiz-hash-maps-set-7-q7",
        "question": "What is a common mistake when using a hash map for Two Sum?",
        "options": [
          "Using the current element before checking can accidentally reuse the same element",
          "Using a map at all",
          "Checking the complement",
          "Iterating through the array"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm must ensure the pair uses two different positions."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-8",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 8",
    "subtitle": "Intermediate questions for Hash Maps (Set 8/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-hash-maps-set-8-q1",
        "question": "What is the main idea behind grouping anagrams using a hash map?",
        "options": [
          "Map a canonical representation of each word to a group",
          "Put every word in a stack",
          "Compare every pair of words",
          "Reverse every word"
        ],
        "correctIndex": 0,
        "explanation": "Words that are anagrams can share the same sorted-character or frequency signature."
      },
      {
        "id": "quiz-hash-maps-set-8-q2",
        "question": "Which words are anagrams?",
        "options": [
          "listen and silent",
          "cat and dog",
          "hello and world",
          "tree and graph"
        ],
        "correctIndex": 0,
        "explanation": "Both words contain the same characters with the same frequencies."
      },
      {
        "id": "quiz-hash-maps-set-8-q3",
        "question": "What can be used as a key when grouping anagrams?",
        "options": [
          "The sorted characters of the word",
          "The original word only",
          "The word's first character",
          "A random number"
        ],
        "correctIndex": 0,
        "explanation": "Anagrams produce the same sorted character sequence."
      },
      {
        "id": "quiz-hash-maps-set-8-q4",
        "question": "What is another way to create an anagram signature?",
        "options": [
          "Use a character-frequency vector",
          "Use the word length only",
          "Use the first character only",
          "Use the last character only"
        ],
        "correctIndex": 0,
        "explanation": "Two words are anagrams if their character frequency vectors are identical."
      },
      {
        "id": "quiz-hash-maps-set-8-q5",
        "question": "Why is a frequency signature sometimes faster than sorting each word?",
        "options": [
          "It can avoid sorting the characters individually",
          "It uses no memory",
          "It ignores repeated characters",
          "It always uses binary search"
        ],
        "correctIndex": 0,
        "explanation": "For a fixed alphabet, counting characters can take linear time per word."
      },
      {
        "id": "quiz-hash-maps-set-8-q6",
        "question": "What happens when two words have the same anagram signature?",
        "options": [
          "They are placed in the same group",
          "One is deleted",
          "Both become keys with no values",
          "They are automatically sorted globally"
        ],
        "correctIndex": 0,
        "explanation": "The shared signature maps both words to the same group."
      },
      {
        "id": "quiz-hash-maps-set-8-q7",
        "question": "What is the key requirement for a valid anagram signature?",
        "options": [
          "Anagrams must produce identical signatures, while non-anagrams should not",
          "Every word must have a unique signature",
          "Only word length matters",
          "The signature must be random"
        ],
        "correctIndex": 0,
        "explanation": "A correct signature must reliably identify whether two words contain the same character multiset."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-9",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 9",
    "subtitle": "Intermediate questions for Hash Maps (Set 9/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-hash-maps-set-9-q1",
        "question": "How can a hash map help detect duplicates in an array?",
        "options": [
          "Track previously seen values and check whether the current value already exists",
          "Sort the array without comparing values",
          "Use only a stack",
          "Check only the first element"
        ],
        "correctIndex": 0,
        "explanation": "If a value already exists in the set or map, a duplicate has been found."
      },
      {
        "id": "quiz-hash-maps-set-9-q2",
        "question": "What is the average time complexity of detecting duplicates using a hash set?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Each of the n elements is checked once with average constant-time membership testing."
      },
      {
        "id": "quiz-hash-maps-set-9-q3",
        "question": "What is the space complexity of storing all seen values?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "In the worst case, all n values may be distinct and stored."
      },
      {
        "id": "quiz-hash-maps-set-9-q4",
        "question": "What is the difference between a hash set and a hash map?",
        "options": [
          "A set stores keys or values for membership, while a map associates keys with values",
          "A set always follows FIFO",
          "A map cannot perform lookup",
          "A set is always sorted"
        ],
        "correctIndex": 0,
        "explanation": "A hash set is focused on membership, while a hash map stores key-value associations."
      },
      {
        "id": "quiz-hash-maps-set-9-q5",
        "question": "When is a hash set preferable to a hash map?",
        "options": [
          "When you only need to know whether an element exists",
          "When each key must map to a detailed value",
          "When you need sorted keys",
          "When you need LIFO behavior"
        ],
        "correctIndex": 0,
        "explanation": "A set is simpler when only membership matters."
      },
      {
        "id": "quiz-hash-maps-set-9-q6",
        "question": "Can a hash set contain duplicate values?",
        "options": [
          "No, duplicates represent the same set element",
          "Yes, always",
          "Only when the table is full",
          "Only for strings"
        ],
        "correctIndex": 0,
        "explanation": "Sets represent unique elements, so inserting an existing value does not create another copy."
      },
      {
        "id": "quiz-hash-maps-set-9-q7",
        "question": "Which task is better suited to a hash map than a hash set?",
        "options": [
          "Mapping product IDs to product prices",
          "Checking whether a number has appeared",
          "Checking whether a username exists",
          "Removing duplicates"
        ],
        "correctIndex": 0,
        "explanation": "A map is appropriate when each identifier needs an associated value."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-10",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 10",
    "subtitle": "Intermediate questions for Hash Maps (Set 10/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-hash-maps-set-10-q1",
        "question": "What is the sliding-window technique often combined with a hash map to solve?",
        "options": [
          "Longest substring without repeating characters",
          "Binary tree traversal",
          "Merge sort",
          "Stack reversal"
        ],
        "correctIndex": 0,
        "explanation": "A map can track the most recent index of each character while the window expands."
      },
      {
        "id": "quiz-hash-maps-set-10-q2",
        "question": "For the string abcabcbb, what is the length of the longest substring without repeating characters?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctIndex": 1,
        "explanation": "The longest substrings include abc, which has length 3."
      },
      {
        "id": "quiz-hash-maps-set-10-q3",
        "question": "What can a hash map store in the longest-substring problem?",
        "options": [
          "The most recent index of each character",
          "Only the total string length",
          "Only duplicate characters",
          "The sorted string"
        ],
        "correctIndex": 0,
        "explanation": "Knowing the last position of a repeated character allows the left boundary to move efficiently."
      },
      {
        "id": "quiz-hash-maps-set-10-q4",
        "question": "When a repeated character is found inside the current window, what may happen to the left boundary?",
        "options": [
          "Move it past the previous occurrence",
          "Always move it back to zero",
          "Delete the character from the string",
          "Move it to the end"
        ],
        "correctIndex": 0,
        "explanation": "The left boundary moves forward so the current window contains unique characters again."
      },
      {
        "id": "quiz-hash-maps-set-10-q5",
        "question": "What is the typical time complexity of the optimized longest-substring solution?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Each character is processed a constant number of times using the sliding window."
      },
      {
        "id": "quiz-hash-maps-set-10-q6",
        "question": "Why should the left pointer never move backward in the optimized solution?",
        "options": [
          "Moving only forward keeps the algorithm linear",
          "Backward movement is impossible in strings",
          "It would sort the characters",
          "It would delete the map"
        ],
        "correctIndex": 0,
        "explanation": "The two-pointer window progresses forward, ensuring each position is handled efficiently."
      },
      {
        "id": "quiz-hash-maps-set-10-q7",
        "question": "Which substring of pwwkew has the maximum length without repeating characters?",
        "options": [
          "pww",
          "wke",
          "wwk",
          "keww"
        ],
        "correctIndex": 1,
        "explanation": "wke has three unique characters and is one of the longest valid substrings."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-11",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 11",
    "subtitle": "Intermediate questions for Hash Maps (Set 11/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-hash-maps-set-11-q1",
        "question": "What is a prefix sum hash map commonly used for?",
        "options": [
          "Finding subarrays with a target sum efficiently",
          "Sorting arrays",
          "Reversing strings",
          "Building binary trees"
        ],
        "correctIndex": 0,
        "explanation": "A map of prefix sums can reveal whether two prefix sums differ by the desired target."
      },
      {
        "id": "quiz-hash-maps-set-11-q2",
        "question": "If the current prefix sum is S and the target is K, what previous prefix sum should be searched for?",
        "options": [
          "S + K",
          "S - K",
          "K - S only",
          "S x K"
        ],
        "correctIndex": 1,
        "explanation": "If previousPrefix = S-K, then the subarray between that prefix and the current position sums to K."
      },
      {
        "id": "quiz-hash-maps-set-11-q3",
        "question": "Why is prefixSum = 0 often initialized with count 1 in the subarray-sum problem?",
        "options": [
          "It represents an empty prefix before the array begins",
          "It means zero appears once in the array",
          "It prevents negative numbers",
          "It stores the array length"
        ],
        "correctIndex": 0,
        "explanation": "This allows a subarray starting at index 0 to be counted correctly."
      },
      {
        "id": "quiz-hash-maps-set-11-q4",
        "question": "For [1,1,1] and target 2, how many subarrays have sum 2?",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "correctIndex": 1,
        "explanation": "The subarrays [1,1] at positions 0-1 and 1-2 both sum to 2."
      },
      {
        "id": "quiz-hash-maps-set-11-q5",
        "question": "What is the average time complexity of counting subarrays with a target sum using prefix sums and a hash map?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Each prefix sum is processed once with average constant-time map operations."
      },
      {
        "id": "quiz-hash-maps-set-11-q6",
        "question": "Why is this prefix-sum approach useful even when array elements can be negative?",
        "options": [
          "The prefix-sum identity does not require all values to be positive",
          "Negative values are automatically removed",
          "Hash maps cannot store positive values",
          "The array is sorted first"
        ],
        "correctIndex": 0,
        "explanation": "Unlike a simple positive-number sliding window, prefix sums work regardless of the signs of the elements."
      },
      {
        "id": "quiz-hash-maps-set-11-q7",
        "question": "What does storing counts rather than only existence of prefix sums allow?",
        "options": [
          "Counting multiple subarrays that end at different earlier positions",
          "Sorting prefix sums",
          "Reducing space to O(1)",
          "Ignoring duplicate prefix sums"
        ],
        "correctIndex": 0,
        "explanation": "The same prefix sum can occur multiple times, and each occurrence may produce a valid subarray."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-12",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 12",
    "subtitle": "Intermediate questions for Hash Maps (Set 12/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-hash-maps-set-12-q1",
        "question": "What is the main idea of the longest consecutive sequence problem?",
        "options": [
          "Find the longest sequence of consecutive integer values",
          "Find the longest sorted subarray by index",
          "Find the largest element only",
          "Count all duplicates"
        ],
        "correctIndex": 0,
        "explanation": "The goal is to determine the longest run such as 1,2,3,4 regardless of their original order."
      },
      {
        "id": "quiz-hash-maps-set-12-q2",
        "question": "Which structure is useful for an O(n) average solution to longest consecutive sequence?",
        "options": [
          "Hash set",
          "Stack",
          "Queue",
          "Binary tree only"
        ],
        "correctIndex": 0,
        "explanation": "A hash set provides average O(1) membership checks."
      },
      {
        "id": "quiz-hash-maps-set-12-q3",
        "question": "Why should the algorithm start a sequence only when x-1 is absent?",
        "options": [
          "Then x is the beginning of a consecutive sequence",
          "It guarantees x is the maximum",
          "It removes duplicates",
          "It sorts the set"
        ],
        "correctIndex": 0,
        "explanation": "If x-1 exists, x is not the beginning, so starting there would repeat work."
      },
      {
        "id": "quiz-hash-maps-set-12-q4",
        "question": "For [100,4,200,1,3,2], what is the longest consecutive sequence length?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctIndex": 2,
        "explanation": "The sequence 1,2,3,4 has length 4."
      },
      {
        "id": "quiz-hash-maps-set-12-q5",
        "question": "What is the average time complexity of the hash-set solution?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n2)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Each number participates in only a constant amount of average-time set checking across the sequence expansion."
      },
      {
        "id": "quiz-hash-maps-set-12-q6",
        "question": "What is the main advantage of using a hash set over sorting for this problem?",
        "options": [
          "It can achieve average O(n) time without sorting",
          "It uses no memory",
          "It guarantees ordered traversal",
          "It stores duplicate values"
        ],
        "correctIndex": 0,
        "explanation": "Hash-set membership allows sequence detection without sorting the entire input."
      },
      {
        "id": "quiz-hash-maps-set-12-q7",
        "question": "Why does the longest consecutive sequence algorithm not need the original array order?",
        "options": [
          "The problem asks about consecutive values, not their positions",
          "Hash sets preserve array indices",
          "Sorting is always performed",
          "The original order is automatically reconstructed"
        ],
        "correctIndex": 0,
        "explanation": "Only the presence of values matters for identifying consecutive sequences."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-13",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 13",
    "subtitle": "Intermediate questions for Hash Maps (Set 13/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-hash-maps-set-13-q1",
        "question": "What is the main idea of the Subarray Sum Equals K problem?",
        "options": [
          "Count subarrays whose elements add up to a target K",
          "Find the longest array",
          "Sort all subarrays",
          "Find only positive subarrays"
        ],
        "correctIndex": 0,
        "explanation": "The goal is to count every contiguous subarray whose sum equals K."
      },
      {
        "id": "quiz-hash-maps-set-13-q2",
        "question": "Why does a prefix-sum frequency map outperform checking every subarray?",
        "options": [
          "It avoids enumerating all O(n2) subarrays",
          "It sorts the array automatically",
          "It removes negative values",
          "It uses no extra memory"
        ],
        "correctIndex": 0,
        "explanation": "The map lets each position determine valid previous prefixes in constant average time."
      },
      {
        "id": "quiz-hash-maps-set-13-q3",
        "question": "If prefix sums at positions i and j satisfy P[j] - P[i] = K, what does that represent?",
        "options": [
          "The subarray between those positions has sum K",
          "The entire array is sorted",
          "There is a duplicate value",
          "The array contains K elements"
        ],
        "correctIndex": 0,
        "explanation": "The difference between prefix sums equals the sum of the elements between them."
      },
      {
        "id": "quiz-hash-maps-set-13-q4",
        "question": "For [1,2,3] and K=3, how many subarrays sum to 3?",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "correctIndex": 1,
        "explanation": "The valid subarrays are [1,2] and [3]."
      },
      {
        "id": "quiz-hash-maps-set-13-q5",
        "question": "What happens when the same prefix sum occurs multiple times?",
        "options": [
          "Its frequency helps count multiple valid subarrays",
          "All but one occurrence must be deleted",
          "The algorithm fails",
          "The array must be sorted"
        ],
        "correctIndex": 0,
        "explanation": "Multiple identical prefix sums can correspond to different starting positions for valid subarrays."
      },
      {
        "id": "quiz-hash-maps-set-13-q6",
        "question": "Which values should be stored in the prefix-sum map for the counting version?",
        "options": [
          "Prefix sum frequencies",
          "Only the largest prefix sum",
          "Only array indexes",
          "Sorted elements"
        ],
        "correctIndex": 0,
        "explanation": "The frequency tells how many previous prefixes can form a target-sum subarray with the current prefix."
      },
      {
        "id": "quiz-hash-maps-set-13-q7",
        "question": "What is the average time complexity of the optimized solution?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Each array element updates and queries the prefix-sum map once."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-14",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 14",
    "subtitle": "Advanced questions for Hash Maps (Set 14/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-hash-maps-set-14-q1",
        "question": "What is the main idea behind the Top K Frequent Elements problem?",
        "options": [
          "Count frequencies and identify the k most frequent values",
          "Find the k smallest values only",
          "Sort the original indexes",
          "Remove duplicates without counting"
        ],
        "correctIndex": 0,
        "explanation": "A frequency map provides counts, which can then be used to select the most frequent elements."
      },
      {
        "id": "quiz-hash-maps-set-14-q2",
        "question": "Which data structure can be combined with a frequency map to efficiently solve Top K Frequent Elements?",
        "options": [
          "Heap",
          "Stack only",
          "Queue only",
          "Linked list only"
        ],
        "correctIndex": 0,
        "explanation": "A heap can maintain the k most relevant elements efficiently."
      },
      {
        "id": "quiz-hash-maps-set-14-q3",
        "question": "What is another technique that can achieve average O(n) for Top K Frequent Elements under suitable conditions?",
        "options": [
          "Bucket sort",
          "Binary search",
          "Depth-first search",
          "Linked-list reversal"
        ],
        "correctIndex": 0,
        "explanation": "Frequencies can be grouped into buckets indexed by frequency."
      },
      {
        "id": "quiz-hash-maps-set-14-q4",
        "question": "Why can bucket sort work for frequencies?",
        "options": [
          "A frequency can range only from 1 to n for n input elements",
          "All frequencies are equal",
          "The keys are already sorted",
          "Hash maps preserve numeric order"
        ],
        "correctIndex": 0,
        "explanation": "The bounded frequency range makes frequency-indexed buckets possible."
      },
      {
        "id": "quiz-hash-maps-set-14-q5",
        "question": "What is the purpose of the hash map in Top K Frequent Elements?",
        "options": [
          "Count how many times each distinct value occurs",
          "Sort the values automatically",
          "Store only the top k values",
          "Remove all duplicates"
        ],
        "correctIndex": 0,
        "explanation": "The frequency map is the first step before selecting the most frequent elements."
      },
      {
        "id": "quiz-hash-maps-set-14-q6",
        "question": "If values 1, 2, and 3 occur 5, 2, and 4 times respectively, what is the most frequent value?",
        "options": [
          "2",
          "3",
          "1",
          "They are tied"
        ],
        "correctIndex": 2,
        "explanation": "Value 1 occurs five times, which is the highest frequency."
      },
      {
        "id": "quiz-hash-maps-set-14-q7",
        "question": "What is a common time complexity of a heap-based Top K Frequent Elements solution?",
        "options": [
          "O(n log k)",
          "O(n2)",
          "O(log n) total",
          "O(k2)"
        ],
        "correctIndex": 0,
        "explanation": "After frequency counting, maintaining a heap of size k typically costs O(n log k)."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-15",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 15",
    "subtitle": "Advanced questions for Hash Maps (Set 15/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-hash-maps-set-15-q1",
        "question": "What is a collision-resolution challenge with open addressing?",
        "options": [
          "Deletion can break the probe sequence if handled incorrectly",
          "Keys cannot be integers",
          "Buckets can contain unlimited chains",
          "Hash functions become unnecessary"
        ],
        "correctIndex": 0,
        "explanation": "Simply clearing a deleted slot can cause later searches to stop too early."
      },
      {
        "id": "quiz-hash-maps-set-15-q2",
        "question": "What is a tombstone in an open-addressing hash table?",
        "options": [
          "A marker indicating that an entry was deleted but probing should continue",
          "A newly inserted key",
          "An empty table",
          "A duplicate hash function"
        ],
        "correctIndex": 0,
        "explanation": "Tombstones preserve the probe chain so searches can continue past deleted positions."
      },
      {
        "id": "quiz-hash-maps-set-15-q3",
        "question": "Why can't a deleted slot simply be treated as permanently empty in linear probing?",
        "options": [
          "A later key may have been placed beyond that slot due to an earlier collision",
          "Empty slots cannot exist",
          "The table becomes sorted",
          "The hash function stops working"
        ],
        "correctIndex": 0,
        "explanation": "Treating the slot as empty could incorrectly indicate that a searched key does not exist."
      },
      {
        "id": "quiz-hash-maps-set-15-q4",
        "question": "What is primary clustering?",
        "options": [
          "Formation of long consecutive occupied regions in linear probing",
          "Two identical keys",
          "A completely empty table",
          "A collision-free hash function"
        ],
        "correctIndex": 0,
        "explanation": "Linear probing tends to create clusters of adjacent occupied slots."
      },
      {
        "id": "quiz-hash-maps-set-15-q5",
        "question": "What is secondary clustering mainly associated with?",
        "options": [
          "Keys following the same probing sequence under certain probing schemes",
          "Separate chaining only",
          "Duplicate values",
          "Table resizing"
        ],
        "correctIndex": 0,
        "explanation": "Quadratic probing can cause keys with the same initial hash to follow identical probe patterns."
      },
      {
        "id": "quiz-hash-maps-set-15-q6",
        "question": "What is the goal of double hashing?",
        "options": [
          "Produce different probe sequences based on a second hash function",
          "Hash every key twice into the same position",
          "Use two identical tables",
          "Remove all collisions"
        ],
        "correctIndex": 0,
        "explanation": "A second hash function creates a key-dependent step size that can reduce clustering."
      },
      {
        "id": "quiz-hash-maps-set-15-q7",
        "question": "Why should the second hash function in double hashing avoid producing a step size of zero?",
        "options": [
          "Otherwise probing would never move to another slot",
          "It would sort the table",
          "It would delete the key",
          "It would create a linked list"
        ],
        "correctIndex": 0,
        "explanation": "A zero step would repeatedly check the same position."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-16",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 16",
    "subtitle": "Advanced questions for Hash Maps (Set 16/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-hash-maps-set-16-q1",
        "question": "What is a good property of a hash function?",
        "options": [
          "It distributes keys uniformly across the available buckets",
          "It always returns zero",
          "It sorts all keys",
          "It produces the same index for every key"
        ],
        "correctIndex": 0,
        "explanation": "Uniform distribution reduces collisions and improves hash-table performance."
      },
      {
        "id": "quiz-hash-maps-set-16-q2",
        "question": "Why is deterministic hashing important?",
        "options": [
          "The same key must consistently map to the same hash result for a given table configuration",
          "Every key must have a random result each time",
          "It guarantees no collisions",
          "It eliminates resizing"
        ],
        "correctIndex": 0,
        "explanation": "Lookup must reproduce the same location calculation used during insertion."
      },
      {
        "id": "quiz-hash-maps-set-16-q3",
        "question": "What is a poor characteristic for a hash function?",
        "options": [
          "It maps many different keys to the same bucket",
          "It distributes keys evenly",
          "It is deterministic",
          "It is fast to compute"
        ],
        "correctIndex": 0,
        "explanation": "Concentrating keys creates collisions and can significantly degrade performance."
      },
      {
        "id": "quiz-hash-maps-set-16-q4",
        "question": "Why should a hash function generally be fast to compute?",
        "options": [
          "Hashing happens during many map operations",
          "Slow hashing makes keys sorted",
          "Fast hashing prevents all collisions",
          "Hashing is performed only once"
        ],
        "correctIndex": 0,
        "explanation": "An expensive hash function can become a significant part of lookup and insertion costs."
      },
      {
        "id": "quiz-hash-maps-set-16-q5",
        "question": "What is avalanche behavior in hashing?",
        "options": [
          "A small change in input produces a significantly different hash output",
          "All inputs produce identical outputs",
          "The table automatically resizes",
          "Keys become sorted"
        ],
        "correctIndex": 0,
        "explanation": "Strong avalanche behavior helps spread related inputs across different hash outputs."
      },
      {
        "id": "quiz-hash-maps-set-16-q6",
        "question": "Does a good hash function guarantee zero collisions?",
        "options": [
          "No, collisions are unavoidable when the key space is larger than the table space",
          "Yes, always",
          "Only for strings",
          "Only for small tables"
        ],
        "correctIndex": 0,
        "explanation": "By the pigeonhole principle, multiple possible keys must share locations when there are fewer buckets than keys."
      },
      {
        "id": "quiz-hash-maps-set-16-q7",
        "question": "What does uniform hashing aim to achieve?",
        "options": [
          "Spread keys as evenly as possible across buckets",
          "Put all keys into one bucket",
          "Sort keys alphabetically",
          "Remove all duplicate values"
        ],
        "correctIndex": 0,
        "explanation": "Uniform distribution helps keep collision chains or probe sequences short."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-17",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 17",
    "subtitle": "Advanced questions for Hash Maps (Set 17/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-hash-maps-set-17-q1",
        "question": "What is memoization?",
        "options": [
          "Caching results of expensive function calls using previously computed inputs",
          "Sorting recursive calls",
          "Deleting duplicate results",
          "Converting recursion into a queue"
        ],
        "correctIndex": 0,
        "explanation": "Memoization stores results so the same subproblem does not need to be recomputed."
      },
      {
        "id": "quiz-hash-maps-set-17-q2",
        "question": "Which data structure is commonly used to implement memoization?",
        "options": [
          "Hash map",
          "Queue",
          "Stack only",
          "Heap only"
        ],
        "correctIndex": 0,
        "explanation": "A hash map can associate each problem state or input with its previously computed result."
      },
      {
        "id": "quiz-hash-maps-set-17-q3",
        "question": "What is the main benefit of memoization in recursive algorithms?",
        "options": [
          "It avoids repeatedly solving the same subproblem",
          "It removes all recursion",
          "It guarantees constant space",
          "It sorts recursive states"
        ],
        "correctIndex": 0,
        "explanation": "Repeated subproblems are replaced with fast cached lookups."
      },
      {
        "id": "quiz-hash-maps-set-17-q4",
        "question": "Which problem is a classic example of memoization?",
        "options": [
          "Fibonacci numbers",
          "Selection sort only",
          "Binary search on a static array",
          "Printing a string"
        ],
        "correctIndex": 0,
        "explanation": "Naive recursive Fibonacci repeatedly computes the same values, making it ideal for demonstrating memoization."
      },
      {
        "id": "quiz-hash-maps-set-17-q5",
        "question": "What is the typical time complexity of memoized Fibonacci for n?",
        "options": [
          "O(2^n)",
          "O(n)",
          "O(n2)",
          "O(log n)"
        ],
        "correctIndex": 1,
        "explanation": "Each Fibonacci state from 0 through n is computed once."
      },
      {
        "id": "quiz-hash-maps-set-17-q6",
        "question": "What is the main space cost of memoized Fibonacci?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n) always",
          "O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "The cache stores results for O(n) distinct states, in addition to recursion stack space."
      },
      {
        "id": "quiz-hash-maps-set-17-q7",
        "question": "What is the key requirement for a value to be safely memoized?",
        "options": [
          "The function result should depend consistently on its input state",
          "The function must always return random results",
          "The input must be sorted",
          "The function must use a queue"
        ],
        "correctIndex": 0,
        "explanation": "Memoization assumes the same state produces the same result."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-18",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 18",
    "subtitle": "Advanced questions for Hash Maps (Set 18/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-hash-maps-set-18-q1",
        "question": "What is an important use of hash maps in graph algorithms?",
        "options": [
          "Mapping arbitrary vertex labels to metadata or adjacency information",
          "Guaranteeing sorted edges",
          "Replacing every graph with an array",
          "Eliminating graph traversal"
        ],
        "correctIndex": 0,
        "explanation": "Hash maps are useful when graph vertices have arbitrary labels or when metadata needs key-based access."
      },
      {
        "id": "quiz-hash-maps-set-18-q2",
        "question": "How can a hash map represent an adjacency list for a graph with string-named vertices?",
        "options": [
          "Map each vertex name to a list of its neighbors",
          "Map every edge to a stack only",
          "Store only the largest vertex",
          "Sort all vertex names into an array"
        ],
        "correctIndex": 0,
        "explanation": "Each vertex becomes a key and its neighbor list becomes the associated value."
      },
      {
        "id": "quiz-hash-maps-set-18-q3",
        "question": "Why is a hash map useful for visited tracking when graph labels are strings?",
        "options": [
          "It can quickly check whether a string-labeled vertex has been visited",
          "It automatically performs BFS",
          "It sorts graph nodes",
          "It removes cycles automatically"
        ],
        "correctIndex": 0,
        "explanation": "Average O(1) membership checks make hash-based visited tracking efficient."
      },
      {
        "id": "quiz-hash-maps-set-18-q4",
        "question": "What is the purpose of mapping a graph node to its parent during traversal?",
        "options": [
          "To reconstruct a path or traversal tree",
          "To sort the graph",
          "To remove all edges",
          "To calculate hash collisions"
        ],
        "correctIndex": 0,
        "explanation": "Parent relationships allow the path to be reconstructed by following nodes backward."
      },
      {
        "id": "quiz-hash-maps-set-18-q5",
        "question": "How can a hash map help with counting connected components when labels are arbitrary?",
        "options": [
          "Track visited status for each labeled vertex",
          "Sort all components automatically",
          "Replace BFS with binary search",
          "Remove all isolated vertices"
        ],
        "correctIndex": 0,
        "explanation": "A visited map allows the traversal to determine which vertices have already been assigned to a component."
      },
      {
        "id": "quiz-hash-maps-set-18-q6",
        "question": "What is a useful map structure for storing weighted graph edges?",
        "options": [
          "Map each vertex to neighbor-weight pairs",
          "Map every graph to a single integer",
          "Store only edge weights without endpoints",
          "Store only vertices with no neighbors"
        ],
        "correctIndex": 0,
        "explanation": "Neighbor-weight pairs preserve both connectivity and edge cost."
      },
      {
        "id": "quiz-hash-maps-set-18-q7",
        "question": "What is a potential drawback of hash-map-based graph representation?",
        "options": [
          "It may use more overhead than compact array-based representations when labels are small integers",
          "It cannot store strings",
          "It cannot represent edges",
          "It always has O(n2) lookup"
        ],
        "correctIndex": 0,
        "explanation": "Hash maps offer flexibility but can have additional memory and hashing overhead."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-19",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 19",
    "subtitle": "Advanced questions for Hash Maps (Set 19/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-hash-maps-set-19-q1",
        "question": "What is a key property required for objects used as hash-map keys?",
        "options": [
          "Their equality and hash behavior must remain consistent while stored",
          "They must always be sorted",
          "They must be arrays",
          "They must contain duplicate fields"
        ],
        "correctIndex": 0,
        "explanation": "If a key's hash or equality changes while stored, the map may no longer be able to locate it correctly."
      },
      {
        "id": "quiz-hash-maps-set-19-q2",
        "question": "What relationship should hold between equality and hashing?",
        "options": [
          "Equal keys must produce compatible hash values",
          "Equal keys must always have different hashes",
          "Unequal keys must always have different hashes",
          "Hash values do not matter"
        ],
        "correctIndex": 0,
        "explanation": "If two keys are considered equal, they must hash consistently so they can be found in the same logical bucket."
      },
      {
        "id": "quiz-hash-maps-set-19-q3",
        "question": "Can unequal keys have the same hash value?",
        "options": [
          "Yes, that is a collision",
          "No, never",
          "Only when the table is empty",
          "Only for integer keys"
        ],
        "correctIndex": 0,
        "explanation": "Hash collisions occur precisely because different keys can share a hash value or bucket."
      },
      {
        "id": "quiz-hash-maps-set-19-q4",
        "question": "Why can mutable keys be dangerous in a hash map?",
        "options": [
          "Changing key fields can change its hash and make the entry difficult to locate",
          "Mutable keys always cause sorting",
          "They cannot store values",
          "They automatically resize the map"
        ],
        "correctIndex": 0,
        "explanation": "A key must remain logically stable while stored so its lookup location remains valid."
      },
      {
        "id": "quiz-hash-maps-set-19-q5",
        "question": "What is a hash-flooding attack?",
        "options": [
          "An attack that intentionally causes many keys to collide and degrade hash-table performance",
          "An attack that deletes all keys",
          "An attack that sorts the table",
          "An attack against linked lists only"
        ],
        "correctIndex": 0,
        "explanation": "Adversarial inputs can force excessive collisions and potentially turn operations into very slow searches."
      },
      {
        "id": "quiz-hash-maps-set-19-q6",
        "question": "Why might some systems use randomized hashing?",
        "options": [
          "To make collision patterns harder for attackers to predict",
          "To guarantee zero collisions",
          "To sort keys randomly",
          "To remove the need for equality checks"
        ],
        "correctIndex": 0,
        "explanation": "Randomization can make deliberately constructing large collision sets more difficult."
      },
      {
        "id": "quiz-hash-maps-set-19-q7",
        "question": "What is the key trade-off of hash maps compared with balanced search trees?",
        "options": [
          "Hash maps offer fast average lookup but generally do not maintain sorted key order",
          "Hash maps always use more time",
          "Trees cannot perform lookup",
          "Hash maps guarantee sorted traversal"
        ],
        "correctIndex": 0,
        "explanation": "Hash maps prioritize average constant-time access, while balanced trees provide ordered operations."
      }
    ]
  },
  {
    "id": "quiz-hash-maps-set-20",
    "topicId": "hash-maps",
    "title": "Hash Maps Quiz - Level 20",
    "subtitle": "Advanced questions for Hash Maps (Set 20/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-hash-maps-set-20-q1",
        "question": "Which combination best represents advanced hash-map problem-solving patterns?",
        "options": [
          "Frequency counting, complement lookup, prefix sums, sliding windows, memoization, grouping, and collision handling",
          "Only key-value insertion",
          "Only sorting keys",
          "Only duplicate removal"
        ],
        "correctIndex": 0,
        "explanation": "These patterns cover many of the most important ways hash maps are used in algorithmic problem solving."
      },
      {
        "id": "quiz-hash-maps-set-20-q2",
        "question": "When should you consider using a hash map in a coding problem?",
        "options": [
          "When fast average membership, counting, association, or lookup by a key is useful",
          "Only when the input is already sorted",
          "Only when recursion is required",
          "Only when there are exactly two values"
        ],
        "correctIndex": 0,
        "explanation": "Hash maps are especially valuable when the problem repeatedly asks whether something exists or needs associated information."
      },
      {
        "id": "quiz-hash-maps-set-20-q3",
        "question": "What is the biggest conceptual limitation of assuming every hash-map operation is O(1)?",
        "options": [
          "O(1) is generally an average-case expectation, not an unconditional worst-case guarantee",
          "Hash maps cannot perform lookup",
          "Every hash-map operation is actually O(n2)",
          "Hash maps only work with strings"
        ],
        "correctIndex": 0,
        "explanation": "Collisions, poor hashing, and implementation details can cause operations to degrade."
      },
      {
        "id": "quiz-hash-maps-set-20-q4",
        "question": "Which approach is usually best for counting subarrays with a target sum when negative numbers are allowed?",
        "options": [
          "Prefix sums combined with a frequency hash map",
          "A simple positive-only sliding window",
          "Sorting the array first",
          "A stack"
        ],
        "correctIndex": 0,
        "explanation": "Prefix sums with a frequency map work even when values can be negative."
      },
      {
        "id": "quiz-hash-maps-set-20-q5",
        "question": "Which approach is especially effective for finding a longest substring with a uniqueness constraint?",
        "options": [
          "Sliding window with a hash map or hash set",
          "Nested recursion only",
          "Sorting the characters",
          "A priority queue"
        ],
        "correctIndex": 0,
        "explanation": "The hash structure provides fast membership or last-position information while the window moves."
      },
      {
        "id": "quiz-hash-maps-set-20-q6",
        "question": "When is a balanced search tree potentially preferable to a hash map?",
        "options": [
          "When ordered keys, predecessor/successor queries, or guaranteed O(log n) bounds are required",
          "When only average O(1) lookup matters",
          "When keys should be completely unordered",
          "When frequency counting is required"
        ],
        "correctIndex": 0,
        "explanation": "Balanced trees maintain ordering and provide predictable logarithmic operations."
      },
      {
        "id": "quiz-hash-maps-set-20-q7",
        "question": "What should you analyze before choosing a hash map for an advanced problem?",
        "options": [
          "Required operations, key type, equality behavior, expected complexity, memory limits, and ordering requirements",
          "Only the variable names",
          "Only the input size",
          "Only whether recursion is available"
        ],
        "correctIndex": 0,
        "explanation": "Choosing the right structure requires understanding both the problem's operations and the trade-offs of hashing."
      }
    ]
  },
  {
    "id": "quiz-trees-set-1",
    "topicId": "trees",
    "title": "Trees Quiz - Level 1",
    "subtitle": "Beginner questions for Trees (Set 1/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-trees-set-1-q1",
        "question": "What is a tree in data structures?",
        "options": [
          "A hierarchical data structure made of connected nodes",
          "A linear structure that always follows FIFO",
          "A collection that only stores key-value pairs",
          "A structure where every element has exactly two parents"
        ],
        "correctIndex": 0,
        "explanation": "A tree represents hierarchical relationships using nodes connected by edges."
      },
      {
        "id": "quiz-trees-set-1-q2",
        "question": "What is the topmost node of a tree called?",
        "options": [
          "Leaf",
          "Root",
          "Child",
          "Sibling"
        ],
        "correctIndex": 1,
        "explanation": "The root is the starting or highest node in a tree."
      },
      {
        "id": "quiz-trees-set-1-q3",
        "question": "What is a node with no children called?",
        "options": [
          "Root",
          "Parent",
          "Leaf",
          "Ancestor"
        ],
        "correctIndex": 2,
        "explanation": "A leaf node has no child nodes."
      },
      {
        "id": "quiz-trees-set-1-q4",
        "question": "What is the relationship between a parent and its directly connected node below it?",
        "options": [
          "Sibling",
          "Child",
          "Ancestor",
          "Root"
        ],
        "correctIndex": 1,
        "explanation": "A node directly below another node is its child."
      },
      {
        "id": "quiz-trees-set-1-q5",
        "question": "Which real-world example best represents a tree?",
        "options": [
          "People waiting in a line",
          "A family hierarchy",
          "A stack of plates",
          "A playlist played sequentially"
        ],
        "correctIndex": 1,
        "explanation": "Family relationships naturally form a hierarchy of parents, children, and descendants."
      },
      {
        "id": "quiz-trees-set-1-q6",
        "question": "What is an edge in a tree?",
        "options": [
          "A connection between two nodes",
          "The largest node",
          "The first node",
          "A node without children"
        ],
        "correctIndex": 0,
        "explanation": "An edge represents the connection between two nodes."
      },
      {
        "id": "quiz-trees-set-1-q7",
        "question": "How many edges does a tree with n nodes have?",
        "options": [
          "n + 1",
          "n",
          "n - 1",
          "2n"
        ],
        "correctIndex": 2,
        "explanation": "Every tree with n connected nodes has exactly n - 1 edges."
      }
    ]
  },
  {
    "id": "quiz-trees-set-2",
    "topicId": "trees",
    "title": "Trees Quiz - Level 2",
    "subtitle": "Beginner questions for Trees (Set 2/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-trees-set-2-q1",
        "question": "What is the depth of the root node usually considered to be?",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0,
        "explanation": "Using the common convention, the root has depth 0."
      },
      {
        "id": "quiz-trees-set-2-q2",
        "question": "What is the height of a leaf node when height is measured in edges?",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctIndex": 0,
        "explanation": "A leaf has no edges below it, so its height is 0."
      },
      {
        "id": "quiz-trees-set-2-q3",
        "question": "What are nodes that share the same parent called?",
        "options": [
          "Ancestors",
          "Siblings",
          "Leaves",
          "Descendants"
        ],
        "correctIndex": 1,
        "explanation": "Nodes with the same immediate parent are siblings."
      },
      {
        "id": "quiz-trees-set-2-q4",
        "question": "What is a node's ancestor?",
        "options": [
          "A node directly below it only",
          "A node that appears on the path from the root to that node",
          "Any leaf node",
          "A node with no parent"
        ],
        "correctIndex": 1,
        "explanation": "Parents, grandparents, and other nodes above a node on its root path are its ancestors."
      },
      {
        "id": "quiz-trees-set-2-q5",
        "question": "What is a descendant?",
        "options": [
          "A node below another node in the hierarchy",
          "The root node",
          "A sibling",
          "A node without a parent"
        ],
        "correctIndex": 0,
        "explanation": "Children, grandchildren, and deeper nodes below a node are its descendants."
      },
      {
        "id": "quiz-trees-set-2-q6",
        "question": "What is the maximum number of children a node can have in a general tree?",
        "options": [
          "Exactly two",
          "Exactly one",
          "Any non-negative number",
          "Exactly three"
        ],
        "correctIndex": 2,
        "explanation": "A general tree does not impose a fixed limit on the number of children."
      },
      {
        "id": "quiz-trees-set-2-q7",
        "question": "What is the degree of a node in a tree?",
        "options": [
          "Number of children it has",
          "Its depth",
          "Its height",
          "Number of ancestors only"
        ],
        "correctIndex": 0,
        "explanation": "In a rooted tree, the degree of a node is commonly defined as its number of children."
      }
    ]
  },
  {
    "id": "quiz-trees-set-3",
    "topicId": "trees",
    "title": "Trees Quiz - Level 3",
    "subtitle": "Beginner questions for Trees (Set 3/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-trees-set-3-q1",
        "question": "What is a binary tree?",
        "options": [
          "A tree where each node has at most two children",
          "A tree containing exactly two nodes",
          "A tree where every node has exactly two children",
          "A tree containing only binary numbers"
        ],
        "correctIndex": 0,
        "explanation": "A binary tree allows each node to have zero, one, or two children."
      },
      {
        "id": "quiz-trees-set-3-q2",
        "question": "What are the two possible child positions in a binary tree called?",
        "options": [
          "Top and bottom",
          "Front and rear",
          "Left and right",
          "Start and end"
        ],
        "correctIndex": 2,
        "explanation": "Binary-tree nodes have a left child and a right child position."
      },
      {
        "id": "quiz-trees-set-3-q3",
        "question": "Can a binary-tree node have only a left child?",
        "options": [
          "No",
          "Yes",
          "Only at the root",
          "Only at a leaf"
        ],
        "correctIndex": 1,
        "explanation": "A binary tree permits a node to have just one child, either left or right."
      },
      {
        "id": "quiz-trees-set-3-q4",
        "question": "Which tree has every level completely filled except possibly the last, which is filled from left to right?",
        "options": [
          "Complete binary tree",
          "Skewed tree",
          "General tree",
          "Trie"
        ],
        "correctIndex": 0,
        "explanation": "That is the definition of a complete binary tree."
      },
      {
        "id": "quiz-trees-set-3-q5",
        "question": "What is a full binary tree?",
        "options": [
          "Every node has either 0 or 2 children",
          "Every node has exactly 2 children",
          "Every level must be full",
          "Every node has exactly 1 child"
        ],
        "correctIndex": 0,
        "explanation": "A full binary tree does not allow nodes with exactly one child."
      },
      {
        "id": "quiz-trees-set-3-q6",
        "question": "What is a perfect binary tree?",
        "options": [
          "Every internal node has two children and all leaves are at the same level",
          "Every node has one child",
          "Only the root has children",
          "The tree is always unbalanced"
        ],
        "correctIndex": 0,
        "explanation": "A perfect binary tree is completely filled at every level."
      },
      {
        "id": "quiz-trees-set-3-q7",
        "question": "Which structure is a binary tree where every node has at most one child?",
        "options": [
          "Perfect tree",
          "Skewed tree",
          "Complete tree",
          "Full tree"
        ],
        "correctIndex": 1,
        "explanation": "A skewed tree resembles a linked list because nodes mostly continue in one direction."
      }
    ]
  },
  {
    "id": "quiz-trees-set-4",
    "topicId": "trees",
    "title": "Trees Quiz - Level 4",
    "subtitle": "Beginner questions for Trees (Set 4/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-trees-set-4-q1",
        "question": "Which traversal visits Root, Left subtree, Right subtree?",
        "options": [
          "Postorder",
          "Inorder",
          "Preorder",
          "Level order"
        ],
        "correctIndex": 2,
        "explanation": "Preorder traversal follows Root - Left - Right."
      },
      {
        "id": "quiz-trees-set-4-q2",
        "question": "Which traversal visits Left subtree, Root, Right subtree?",
        "options": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "correctIndex": 0,
        "explanation": "Inorder traversal follows Left - Root - Right."
      },
      {
        "id": "quiz-trees-set-4-q3",
        "question": "Which traversal visits Left subtree, Right subtree, Root?",
        "options": [
          "Preorder",
          "Level order",
          "Inorder",
          "Postorder"
        ],
        "correctIndex": 3,
        "explanation": "Postorder traversal follows Left - Right - Root."
      },
      {
        "id": "quiz-trees-set-4-q4",
        "question": "Which traversal is naturally implemented using a queue?",
        "options": [
          "Inorder",
          "Preorder",
          "Level order",
          "Postorder"
        ],
        "correctIndex": 2,
        "explanation": "Level-order traversal uses a queue to process nodes level by level."
      },
      {
        "id": "quiz-trees-set-4-q5",
        "question": "Which traversal is commonly useful for deleting/freeing an entire tree?",
        "options": [
          "Postorder",
          "Preorder",
          "Level order",
          "Inorder"
        ],
        "correctIndex": 0,
        "explanation": "Postorder processes children before their parent, making it useful when removing a tree."
      },
      {
        "id": "quiz-trees-set-4-q6",
        "question": "Which traversal of a binary search tree produces values in sorted order?",
        "options": [
          "Preorder",
          "Postorder",
          "Inorder",
          "Level order"
        ],
        "correctIndex": 2,
        "explanation": "Inorder traversal of a BST visits values from smallest to largest."
      },
      {
        "id": "quiz-trees-set-4-q7",
        "question": "For a tree with root 1, left child 2, and right child 3, what is its preorder traversal?",
        "options": [
          "[2, 1, 3]",
          "[1, 2, 3]",
          "[2, 3, 1]",
          "[3, 2, 1]"
        ],
        "correctIndex": 1,
        "explanation": "Preorder visits the root first, followed by the left and right children."
      }
    ]
  },
  {
    "id": "quiz-trees-set-5",
    "topicId": "trees",
    "title": "Trees Quiz - Level 5",
    "subtitle": "Beginner questions for Trees (Set 5/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-trees-set-5-q1",
        "question": "What is a binary search tree (BST)?",
        "options": [
          "A binary tree where values in the left subtree are smaller and values in the right subtree are larger",
          "A binary tree where every node has two children",
          "A tree containing only sorted leaves",
          "A tree where all values are equal"
        ],
        "correctIndex": 0,
        "explanation": "A BST maintains an ordering property that supports efficient searching."
      },
      {
        "id": "quiz-trees-set-5-q2",
        "question": "If the root of a BST is 50, where should a value 30 normally be placed?",
        "options": [
          "Right subtree",
          "Left subtree",
          "At the root",
          "Outside the tree"
        ],
        "correctIndex": 1,
        "explanation": "30 is smaller than 50, so it belongs in the left subtree."
      },
      {
        "id": "quiz-trees-set-5-q3",
        "question": "If the root is 50, where should 80 normally be searched?",
        "options": [
          "Left subtree",
          "Right subtree",
          "Only the root",
          "A random subtree"
        ],
        "correctIndex": 1,
        "explanation": "80 is greater than 50, so the search continues to the right."
      },
      {
        "id": "quiz-trees-set-5-q4",
        "question": "What is the average search complexity in a reasonably balanced BST?",
        "options": [
          "O(n2)",
          "O(n)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 2,
        "explanation": "A balanced BST has logarithmic height, making search O(log n)."
      },
      {
        "id": "quiz-trees-set-5-q5",
        "question": "What can happen to BST search complexity when the tree becomes completely skewed?",
        "options": [
          "It becomes O(n)",
          "It becomes O(1)",
          "It becomes O(log log n)",
          "It becomes O(n2) for one search"
        ],
        "correctIndex": 0,
        "explanation": "A skewed BST can have height n, making search linear."
      },
      {
        "id": "quiz-trees-set-5-q6",
        "question": "What is the minimum value in a BST found by repeatedly following which direction?",
        "options": [
          "Right",
          "Left",
          "Random",
          "Up"
        ],
        "correctIndex": 1,
        "explanation": "The minimum value is the leftmost node."
      },
      {
        "id": "quiz-trees-set-5-q7",
        "question": "What is the maximum value in a BST found by repeatedly following which direction?",
        "options": [
          "Left",
          "Right",
          "Up",
          "Random"
        ],
        "correctIndex": 1,
        "explanation": "The maximum value is the rightmost node."
      }
    ]
  },
  {
    "id": "quiz-trees-set-6",
    "topicId": "trees",
    "title": "Trees Quiz - Level 6",
    "subtitle": "Beginner questions for Trees (Set 6/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-trees-set-6-q1",
        "question": "What is the height of a tree?",
        "options": [
          "The number of nodes in the tree",
          "The number of edges on the longest root-to-leaf path",
          "The number of leaves only",
          "The number of children of the root"
        ],
        "correctIndex": 1,
        "explanation": "When measured in edges, height is the longest path from the root to a leaf."
      },
      {
        "id": "quiz-trees-set-6-q2",
        "question": "What is the maximum number of nodes at level L of a binary tree when the root is level 0?",
        "options": [
          "L2",
          "2L",
          "2^L",
          "L + 2"
        ],
        "correctIndex": 2,
        "explanation": "A binary tree can have at most 2^L nodes at level L."
      },
      {
        "id": "quiz-trees-set-6-q3",
        "question": "What is the maximum number of nodes in a binary tree of height h, measured in edges?",
        "options": [
          "2h",
          "2^(h+1) - 1",
          "h2",
          "2^h - 1"
        ],
        "correctIndex": 1,
        "explanation": "A perfect binary tree of height h contains 2^(h+1)-1 nodes."
      },
      {
        "id": "quiz-trees-set-6-q4",
        "question": "What is the minimum possible height of a binary tree containing n nodes?",
        "options": [
          "Approximately log2(n)",
          "n",
          "n2",
          "1"
        ],
        "correctIndex": 0,
        "explanation": "A balanced binary tree packs nodes across levels, producing logarithmic height."
      },
      {
        "id": "quiz-trees-set-6-q5",
        "question": "What is the height of a single-node tree when height is measured in edges?",
        "options": [
          "1",
          "0",
          "-1",
          "2"
        ],
        "correctIndex": 1,
        "explanation": "The root is also a leaf, and there are zero edges from it to itself."
      },
      {
        "id": "quiz-trees-set-6-q6",
        "question": "What is the maximum number of children an internal node can have in a binary tree?",
        "options": [
          "3",
          "1",
          "2",
          "Unlimited"
        ],
        "correctIndex": 2,
        "explanation": "A binary tree allows at most two children per node."
      },
      {
        "id": "quiz-trees-set-6-q7",
        "question": "If a perfect binary tree has height 2, how many nodes does it contain?",
        "options": [
          "5",
          "6",
          "7",
          "8"
        ],
        "correctIndex": 2,
        "explanation": "Using 2^(h+1)-1, we get 2^3-1 = 7."
      }
    ]
  },
  {
    "id": "quiz-trees-set-7",
    "topicId": "trees",
    "title": "Trees Quiz - Level 7",
    "subtitle": "Intermediate questions for Trees (Set 7/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-trees-set-7-q1",
        "question": "What is the average time complexity of searching in a balanced BST?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(n2)",
          "O(1)"
        ],
        "correctIndex": 1,
        "explanation": "Each comparison eliminates roughly half of the remaining tree when the tree is balanced."
      },
      {
        "id": "quiz-trees-set-7-q2",
        "question": "What is the time complexity of inserting into a balanced BST?",
        "options": [
          "O(log n)",
          "O(n2)",
          "O(1) always",
          "O(n log n) always"
        ],
        "correctIndex": 0,
        "explanation": "Insertion follows a root-to-leaf path whose length is logarithmic in a balanced BST."
      },
      {
        "id": "quiz-trees-set-7-q3",
        "question": "What is the worst-case search complexity of an unbalanced BST?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(1)",
          "O(n log n)"
        ],
        "correctIndex": 1,
        "explanation": "A highly skewed BST can behave like a linked list."
      },
      {
        "id": "quiz-trees-set-7-q4",
        "question": "What happens when inserting already sorted values into a basic BST without balancing?",
        "options": [
          "The tree can become skewed",
          "The tree automatically becomes perfect",
          "All values become children of the root",
          "Insertion becomes O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Sorted insertion repeatedly chooses the same direction and can create a chain."
      },
      {
        "id": "quiz-trees-set-7-q5",
        "question": "What is the time complexity of inorder traversal of a binary tree with n nodes?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n2)",
          "O(1)"
        ],
        "correctIndex": 1,
        "explanation": "Every node is visited exactly once."
      },
      {
        "id": "quiz-trees-set-7-q6",
        "question": "What is the auxiliary space complexity of recursive inorder traversal in a balanced tree?",
        "options": [
          "O(n2)",
          "O(log n)",
          "O(1) always",
          "O(n2 log n)"
        ],
        "correctIndex": 1,
        "explanation": "The recursion stack follows the tree height, which is O(log n) when balanced."
      },
      {
        "id": "quiz-trees-set-7-q7",
        "question": "What is the worst-case recursion stack space for a skewed binary tree?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "A skewed tree can have height n, causing O(n) recursive depth."
      }
    ]
  },
  {
    "id": "quiz-trees-set-8",
    "topicId": "trees",
    "title": "Trees Quiz - Level 8",
    "subtitle": "Intermediate questions for Trees (Set 8/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-trees-set-8-q1",
        "question": "What is the first case to consider when deleting a node from a BST?",
        "options": [
          "The node is a leaf",
          "The node has exactly three children",
          "The tree is a graph",
          "The node is always the root"
        ],
        "correctIndex": 0,
        "explanation": "Deleting a leaf is the simplest case because it has no children to reconnect."
      },
      {
        "id": "quiz-trees-set-8-q2",
        "question": "How is a BST node with one child commonly deleted?",
        "options": [
          "Replace the node with its child",
          "Delete the entire tree",
          "Swap it with every leaf",
          "Always replace it with the root"
        ],
        "correctIndex": 0,
        "explanation": "Its child can take the deleted node's position while preserving the BST structure."
      },
      {
        "id": "quiz-trees-set-8-q3",
        "question": "How is a BST node with two children commonly deleted?",
        "options": [
          "Replace it with its inorder successor or predecessor, then delete that replacement node",
          "Always delete both children",
          "Replace it with a random node",
          "Convert the tree into a linked list"
        ],
        "correctIndex": 0,
        "explanation": "The inorder successor or predecessor preserves the BST ordering."
      },
      {
        "id": "quiz-trees-set-8-q4",
        "question": "Where is the inorder successor of a node with two children found?",
        "options": [
          "Maximum of the left subtree",
          "Minimum of the right subtree",
          "Root of the tree",
          "Any leaf"
        ],
        "correctIndex": 1,
        "explanation": "The successor is the smallest value greater than the node, found by going right once and then left as far as possible."
      },
      {
        "id": "quiz-trees-set-8-q5",
        "question": "Where is the inorder predecessor found?",
        "options": [
          "Minimum of the right subtree",
          "Maximum of the left subtree",
          "Root's right child",
          "Any leaf"
        ],
        "correctIndex": 1,
        "explanation": "The predecessor is the largest value smaller than the node."
      },
      {
        "id": "quiz-trees-set-8-q6",
        "question": "Why must BST deletion preserve ordering?",
        "options": [
          "Future searches depend on the BST ordering property",
          "Trees cannot contain leaves",
          "Deletion otherwise becomes O(1)",
          "The root must always be the smallest"
        ],
        "correctIndex": 0,
        "explanation": "Breaking the ordering property can make later searches incorrect."
      },
      {
        "id": "quiz-trees-set-8-q7",
        "question": "What is the typical complexity of BST deletion?",
        "options": [
          "O(h), where h is tree height",
          "O(n2) always",
          "O(1) always",
          "O(2^h)"
        ],
        "correctIndex": 0,
        "explanation": "Finding and removing the target or its replacement follows paths proportional to tree height."
      }
    ]
  },
  {
    "id": "quiz-trees-set-9",
    "topicId": "trees",
    "title": "Trees Quiz - Level 9",
    "subtitle": "Intermediate questions for Trees (Set 9/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-trees-set-9-q1",
        "question": "What is the lowest common ancestor (LCA) of two nodes?",
        "options": [
          "The deepest node that is an ancestor of both nodes",
          "The root only",
          "The deepest leaf",
          "The first node inserted"
        ],
        "correctIndex": 0,
        "explanation": "The LCA is the lowest node in the tree that has both target nodes in its subtree."
      },
      {
        "id": "quiz-trees-set-9-q2",
        "question": "In a BST, if both target values are smaller than the current node, where should you search for their LCA?",
        "options": [
          "Right subtree",
          "Left subtree",
          "Outside the tree",
          "Only at the root"
        ],
        "correctIndex": 1,
        "explanation": "If both values are smaller, their common ancestor must be in the left subtree."
      },
      {
        "id": "quiz-trees-set-9-q3",
        "question": "In a BST, if one target is smaller and the other is larger than the current node, what is the current node?",
        "options": [
          "A leaf",
          "The LCA",
          "The successor",
          "The minimum"
        ],
        "correctIndex": 1,
        "explanation": "The current node lies between the two values, so it is their lowest common ancestor."
      },
      {
        "id": "quiz-trees-set-9-q4",
        "question": "What is the time complexity of finding LCA in a BST using its ordering property?",
        "options": [
          "O(h)",
          "O(n2)",
          "O(1) for every tree",
          "O(2^h)"
        ],
        "correctIndex": 0,
        "explanation": "The search follows one path from the root, taking O(h)."
      },
      {
        "id": "quiz-trees-set-9-q5",
        "question": "For a general binary tree, can the BST ordering property be used to find LCA?",
        "options": [
          "No",
          "Yes, always",
          "Only if the tree has leaves",
          "Only when values are unique"
        ],
        "correctIndex": 0,
        "explanation": "A general binary tree does not guarantee that smaller values are on the left and larger values on the right."
      },
      {
        "id": "quiz-trees-set-9-q6",
        "question": "What is a common recursive strategy for LCA in a general binary tree?",
        "options": [
          "Search both subtrees and combine the returned information",
          "Always move left",
          "Always move right",
          "Sort all nodes first"
        ],
        "correctIndex": 0,
        "explanation": "The recursive solution determines whether each target appears in the left or right subtree."
      },
      {
        "id": "quiz-trees-set-9-q7",
        "question": "If one target node is an ancestor of the other, what can the LCA be?",
        "options": [
          "The ancestor node itself",
          "Only the root",
          "Only the descendant",
          "No node"
        ],
        "correctIndex": 0,
        "explanation": "A node is considered an ancestor of itself in the standard LCA formulation."
      }
    ]
  },
  {
    "id": "quiz-trees-set-10",
    "topicId": "trees",
    "title": "Trees Quiz - Level 10",
    "subtitle": "Intermediate questions for Trees (Set 10/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-trees-set-10-q1",
        "question": "What is a balanced binary tree?",
        "options": [
          "A tree whose left and right subtree heights remain within a bounded difference at each node",
          "A tree where every node has two children",
          "A tree with exactly n/2 nodes",
          "A tree with no leaves"
        ],
        "correctIndex": 0,
        "explanation": "Balanced trees keep their height relatively small so operations remain efficient."
      },
      {
        "id": "quiz-trees-set-10-q2",
        "question": "What is the main advantage of keeping a BST balanced?",
        "options": [
          "It keeps search, insertion, and deletion near O(log n)",
          "It makes every operation O(1)",
          "It removes the need for comparisons",
          "It guarantees zero memory usage"
        ],
        "correctIndex": 0,
        "explanation": "A balanced tree maintains logarithmic height."
      },
      {
        "id": "quiz-trees-set-10-q3",
        "question": "What is an AVL tree?",
        "options": [
          "A self-balancing binary search tree",
          "A graph traversal algorithm",
          "A type of hash map",
          "A complete general tree"
        ],
        "correctIndex": 0,
        "explanation": "AVL trees maintain a strict height-balance condition after updates."
      },
      {
        "id": "quiz-trees-set-10-q4",
        "question": "What is the AVL balance factor of a node commonly defined as?",
        "options": [
          "Height(left subtree) - Height(right subtree)",
          "Number of children + height",
          "Depth - number of leaves",
          "Height x depth"
        ],
        "correctIndex": 0,
        "explanation": "The balance factor compares the heights of the left and right subtrees."
      },
      {
        "id": "quiz-trees-set-10-q5",
        "question": "What balance factors are normally allowed in an AVL tree?",
        "options": [
          "-1, 0, or 1",
          "Only 0",
          "-2 through 2",
          "Any integer"
        ],
        "correctIndex": 0,
        "explanation": "An AVL node is balanced when the height difference is at most one."
      },
      {
        "id": "quiz-trees-set-10-q6",
        "question": "What operation is used to restore balance in an AVL tree?",
        "options": [
          "Rotation",
          "Hashing",
          "Sorting",
          "Queueing"
        ],
        "correctIndex": 0,
        "explanation": "Rotations restructure local parts of the tree while preserving BST ordering."
      },
      {
        "id": "quiz-trees-set-10-q7",
        "question": "Which AVL imbalance occurs when insertion happens in the left subtree of the left child?",
        "options": [
          "RR",
          "LR",
          "LL",
          "RL"
        ],
        "correctIndex": 2,
        "explanation": "An LL imbalance is corrected with a right rotation."
      }
    ]
  },
  {
    "id": "quiz-trees-set-11",
    "topicId": "trees",
    "title": "Trees Quiz - Level 11",
    "subtitle": "Intermediate questions for Trees (Set 11/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-trees-set-11-q1",
        "question": "Which AVL imbalance is caused by insertion into the right subtree of the right child?",
        "options": [
          "LL",
          "LR",
          "RL",
          "RR"
        ],
        "correctIndex": 3,
        "explanation": "An RR imbalance is corrected with a left rotation."
      },
      {
        "id": "quiz-trees-set-11-q2",
        "question": "Which rotation fixes a simple LL imbalance?",
        "options": [
          "Left rotation",
          "Right rotation",
          "Left-right rotation",
          "Right-left rotation"
        ],
        "correctIndex": 1,
        "explanation": "A right rotation moves the heavy left subtree upward."
      },
      {
        "id": "quiz-trees-set-11-q3",
        "question": "Which rotation fixes a simple RR imbalance?",
        "options": [
          "Right rotation",
          "Left rotation",
          "Left-right rotation",
          "No rotation"
        ],
        "correctIndex": 1,
        "explanation": "A left rotation fixes an RR imbalance."
      },
      {
        "id": "quiz-trees-set-11-q4",
        "question": "What type of rotation is required for an LR imbalance?",
        "options": [
          "Right rotation only",
          "Left rotation only",
          "Left rotation on the child followed by right rotation on the node",
          "Right rotation twice"
        ],
        "correctIndex": 2,
        "explanation": "LR requires a double rotation: left on the left child, then right on the unbalanced node."
      },
      {
        "id": "quiz-trees-set-11-q5",
        "question": "What type of rotation fixes an RL imbalance?",
        "options": [
          "Right rotation on the right child followed by left rotation on the node",
          "Left rotation twice",
          "Right rotation only",
          "No rotation"
        ],
        "correctIndex": 0,
        "explanation": "RL is corrected with a right rotation on the right child followed by a left rotation."
      },
      {
        "id": "quiz-trees-set-11-q6",
        "question": "What property does a rotation preserve in a BST?",
        "options": [
          "The inorder ordering of the keys",
          "The exact shape",
          "The original insertion order",
          "The number of leaves at every level"
        ],
        "correctIndex": 0,
        "explanation": "Rotations change shape but preserve the BST ordering."
      },
      {
        "id": "quiz-trees-set-11-q7",
        "question": "Why are AVL rotations efficient?",
        "options": [
          "They modify only a constant-size local set of pointers",
          "They rebuild the entire tree",
          "They sort every node",
          "They require BFS of the entire tree"
        ],
        "correctIndex": 0,
        "explanation": "A single rotation changes only a small local portion of the tree."
      }
    ]
  },
  {
    "id": "quiz-trees-set-12",
    "topicId": "trees",
    "title": "Trees Quiz - Level 12",
    "subtitle": "Intermediate questions for Trees (Set 12/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-trees-set-12-q1",
        "question": "What is a heap?",
        "options": [
          "A complete binary tree satisfying a heap-order property",
          "Any binary search tree",
          "A tree with no leaves",
          "A linked list with priorities"
        ],
        "correctIndex": 0,
        "explanation": "A binary heap is complete and maintains either min-heap or max-heap ordering."
      },
      {
        "id": "quiz-trees-set-12-q2",
        "question": "In a min-heap, where is the smallest element stored?",
        "options": [
          "At the root",
          "At the deepest leaf",
          "At the rightmost leaf",
          "Anywhere randomly"
        ],
        "correctIndex": 0,
        "explanation": "The min-heap property ensures the root contains the minimum element."
      },
      {
        "id": "quiz-trees-set-12-q3",
        "question": "In a max-heap, what relationship does a parent have with its children?",
        "options": [
          "The parent is greater than or equal to its children",
          "The parent is always smaller",
          "The parent must equal both children",
          "There is no relationship"
        ],
        "correctIndex": 0,
        "explanation": "The max-heap property requires each parent to be at least as large as its children."
      },
      {
        "id": "quiz-trees-set-12-q4",
        "question": "Which array representation is commonly used for a binary heap?",
        "options": [
          "A contiguous array",
          "A hash map only",
          "A linked list only",
          "A graph adjacency matrix"
        ],
        "correctIndex": 0,
        "explanation": "The complete-tree property allows heaps to be stored efficiently in arrays without explicit child pointers."
      },
      {
        "id": "quiz-trees-set-12-q5",
        "question": "For a zero-indexed heap, what is the left child index of node i?",
        "options": [
          "2i + 1",
          "2i",
          "i / 2",
          "2i + 2"
        ],
        "correctIndex": 0,
        "explanation": "In zero-based indexing, the left child of i is at 2i+1."
      },
      {
        "id": "quiz-trees-set-12-q6",
        "question": "For a zero-indexed heap, what is the right child index of node i?",
        "options": [
          "2i + 1",
          "i - 1",
          "2i + 2",
          "i / 2"
        ],
        "correctIndex": 2,
        "explanation": "The right child of index i is located at 2i+2."
      },
      {
        "id": "quiz-trees-set-12-q7",
        "question": "What is the typical complexity of inserting an element into a binary heap?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1) always",
          "O(n2)"
        ],
        "correctIndex": 1,
        "explanation": "The new element may move upward through at most the height of the heap."
      }
    ]
  },
  {
    "id": "quiz-trees-set-13",
    "topicId": "trees",
    "title": "Trees Quiz - Level 13",
    "subtitle": "Intermediate questions for Trees (Set 13/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-trees-set-13-q1",
        "question": "What is the time complexity of removing the root from a binary heap?",
        "options": [
          "O(log n)",
          "O(1) always",
          "O(n2)",
          "O(n)"
        ],
        "correctIndex": 0,
        "explanation": "After replacing the root, heapify-down can take O(log n)."
      },
      {
        "id": "quiz-trees-set-13-q2",
        "question": "What is the time complexity of peeking at the root of a binary heap?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "The root is directly accessible."
      },
      {
        "id": "quiz-trees-set-13-q3",
        "question": "What is heapify-down used for?",
        "options": [
          "Restoring heap order by moving a node downward",
          "Sorting a BST",
          "Finding an LCA",
          "Deleting every leaf"
        ],
        "correctIndex": 0,
        "explanation": "Heapify-down restores the heap property after the root or another node becomes too large or too small."
      },
      {
        "id": "quiz-trees-set-13-q4",
        "question": "What is heapify-up used for?",
        "options": [
          "Moving a newly inserted node upward until heap order is restored",
          "Deleting the root",
          "Traversing inorder",
          "Balancing an AVL tree"
        ],
        "correctIndex": 0,
        "explanation": "After insertion, the new element may violate the parent relationship and needs to move upward."
      },
      {
        "id": "quiz-trees-set-13-q5",
        "question": "What is the time complexity of building a heap from an unsorted array using bottom-up heap construction?",
        "options": [
          "O(n log n)",
          "O(n)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 1,
        "explanation": "Bottom-up heap construction runs in linear time."
      },
      {
        "id": "quiz-trees-set-13-q6",
        "question": "Why is bottom-up heap construction O(n) rather than O(n log n)?",
        "options": [
          "Most nodes are near the leaves and require very little heapify work",
          "No nodes are processed",
          "Sorting is skipped because heaps are always sorted",
          "Every operation is O(1)"
        ],
        "correctIndex": 0,
        "explanation": "The total amount of downward movement across all nodes is linear."
      },
      {
        "id": "quiz-trees-set-13-q7",
        "question": "Which algorithm can use a heap to repeatedly select the smallest element?",
        "options": [
          "Heap sort",
          "Binary search",
          "DFS",
          "Inorder traversal"
        ],
        "correctIndex": 0,
        "explanation": "Heap sort repeatedly removes the root of a heap to produce ordered output."
      }
    ]
  },
  {
    "id": "quiz-trees-set-14",
    "topicId": "trees",
    "title": "Trees Quiz - Level 14",
    "subtitle": "Advanced questions for Trees (Set 14/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-trees-set-14-q1",
        "question": "What is a segment tree mainly used for?",
        "options": [
          "Efficient range queries and updates on an array",
          "Storing only strings",
          "Representing parent-child relationships only",
          "Implementing recursion"
        ],
        "correctIndex": 0,
        "explanation": "Segment trees support range operations such as sum, minimum, or maximum queries efficiently."
      },
      {
        "id": "quiz-trees-set-14-q2",
        "question": "What is the typical query complexity of a segment tree?",
        "options": [
          "O(log n) for standard range queries",
          "O(n2)",
          "O(1) for every possible operation",
          "O(n log n) always"
        ],
        "correctIndex": 0,
        "explanation": "A segment tree decomposes a range into a logarithmic number of relevant segments."
      },
      {
        "id": "quiz-trees-set-14-q3",
        "question": "What is the typical point-update complexity of a segment tree?",
        "options": [
          "O(log n)",
          "O(n2)",
          "O(1) always",
          "O(n)"
        ],
        "correctIndex": 0,
        "explanation": "A point update changes values along one root-to-leaf path."
      },
      {
        "id": "quiz-trees-set-14-q4",
        "question": "What does an internal segment-tree node generally represent?",
        "options": [
          "Information about a range of the original array",
          "A single random element",
          "Only the root value",
          "A graph edge"
        ],
        "correctIndex": 0,
        "explanation": "Each node stores an aggregate or other information for a specific interval."
      },
      {
        "id": "quiz-trees-set-14-q5",
        "question": "Which operation is a common segment-tree application?",
        "options": [
          "Range minimum query",
          "Stack push",
          "Queue dequeue",
          "String reversal"
        ],
        "correctIndex": 0,
        "explanation": "Range minimum, maximum, and sum queries are classic segment-tree applications."
      },
      {
        "id": "quiz-trees-set-14-q6",
        "question": "Why can a segment tree answer a range query faster than scanning the entire range?",
        "options": [
          "It reuses precomputed information from stored segments",
          "It ignores most elements",
          "It sorts the range every time",
          "It stores only one array element"
        ],
        "correctIndex": 0,
        "explanation": "Precomputed aggregates allow large portions of the query range to be answered at once."
      },
      {
        "id": "quiz-trees-set-14-q7",
        "question": "What is a common space complexity for an array-based segment tree?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "A segment tree typically requires linear space relative to the input size."
      }
    ]
  },
  {
    "id": "quiz-trees-set-15",
    "topicId": "trees",
    "title": "Trees Quiz - Level 15",
    "subtitle": "Advanced questions for Trees (Set 15/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-trees-set-15-q1",
        "question": "What is a trie?",
        "options": [
          "A tree specialized for storing strings or sequences by shared prefixes",
          "A binary heap",
          "A balanced BST containing only numbers",
          "A graph with weighted edges"
        ],
        "correctIndex": 0,
        "explanation": "A trie organizes sequences character by character, allowing shared prefixes to use shared paths."
      },
      {
        "id": "quiz-trees-set-15-q2",
        "question": "What makes tries useful for prefix searches?",
        "options": [
          "All words sharing a prefix follow the same path from the root",
          "Words are stored in sorted arrays",
          "Every word is stored twice",
          "They eliminate characters"
        ],
        "correctIndex": 0,
        "explanation": "Shared prefix paths allow prefix-related queries to be handled efficiently."
      },
      {
        "id": "quiz-trees-set-15-q3",
        "question": "How can a trie indicate that a complete word ends at a node?",
        "options": [
          "Store an end-of-word marker",
          "Make the node the root",
          "Delete its children",
          "Assign it the largest value"
        ],
        "correctIndex": 0,
        "explanation": "An end-of-word flag distinguishes complete words from prefixes."
      },
      {
        "id": "quiz-trees-set-15-q4",
        "question": "If a trie contains cat and car, which prefix path can they share?",
        "options": [
          "c -> a",
          "c -> o",
          "c -> t only",
          "r -> a"
        ],
        "correctIndex": 0,
        "explanation": "Both words begin with ca, so they share the c and a nodes."
      },
      {
        "id": "quiz-trees-set-15-q5",
        "question": "What is the typical search complexity for a word of length L in a trie?",
        "options": [
          "O(L)",
          "O(n2)",
          "O(log n) regardless of L",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "The search follows one trie edge per character."
      },
      {
        "id": "quiz-trees-set-15-q6",
        "question": "What is a major drawback of a basic trie?",
        "options": [
          "It can consume substantial memory because of many child pointers",
          "It cannot store strings",
          "It cannot perform prefix searches",
          "It always requires sorting"
        ],
        "correctIndex": 0,
        "explanation": "A node with a large child-pointer array can use significant memory, especially for sparse data."
      },
      {
        "id": "quiz-trees-set-15-q7",
        "question": "Which application is especially suited to a trie?",
        "options": [
          "Autocomplete",
          "Heap sort",
          "Breadth-first graph traversal",
          "Stack evaluation"
        ],
        "correctIndex": 0,
        "explanation": "Autocomplete needs to efficiently find words sharing a given prefix."
      }
    ]
  },
  {
    "id": "quiz-trees-set-16",
    "topicId": "trees",
    "title": "Trees Quiz - Level 16",
    "subtitle": "Advanced questions for Trees (Set 16/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-trees-set-16-q1",
        "question": "What is a Red-Black tree?",
        "options": [
          "A self-balancing binary search tree using node colors to maintain structural constraints",
          "A binary tree containing only red values",
          "A graph traversal algorithm",
          "A type of heap with no ordering"
        ],
        "correctIndex": 0,
        "explanation": "Red-Black trees use coloring rules to keep the tree approximately balanced."
      },
      {
        "id": "quiz-trees-set-16-q2",
        "question": "How many colors are used in a standard Red-Black tree?",
        "options": [
          "Three",
          "Two",
          "Four",
          "One"
        ],
        "correctIndex": 1,
        "explanation": "Each node is either red or black."
      },
      {
        "id": "quiz-trees-set-16-q3",
        "question": "What color is the root of a standard Red-Black tree?",
        "options": [
          "Red",
          "Black",
          "Either always",
          "No color"
        ],
        "correctIndex": 1,
        "explanation": "A standard Red-Black tree requires the root to be black."
      },
      {
        "id": "quiz-trees-set-16-q4",
        "question": "Can a Red-Black tree have two consecutive red nodes on a root-to-leaf path?",
        "options": [
          "Yes, always",
          "Only after deletion",
          "No",
          "Only when the root is red"
        ],
        "correctIndex": 2,
        "explanation": "One of the Red-Black invariants prohibits a red node from having a red child."
      },
      {
        "id": "quiz-trees-set-16-q5",
        "question": "What is the main purpose of Red-Black tree rules?",
        "options": [
          "Keep the height O(log n)",
          "Make every node have two children",
          "Guarantee O(1) operations",
          "Sort values during every update"
        ],
        "correctIndex": 0,
        "explanation": "The color invariants ensure the tree cannot become excessively skewed."
      },
      {
        "id": "quiz-trees-set-16-q6",
        "question": "What operations are typically O(log n) in a Red-Black tree?",
        "options": [
          "Search, insertion, and deletion",
          "Only search",
          "Only traversal",
          "None of them"
        ],
        "correctIndex": 0,
        "explanation": "The bounded logarithmic height gives logarithmic worst-case search, insertion, and deletion."
      },
      {
        "id": "quiz-trees-set-16-q7",
        "question": "Which technique is used alongside recoloring to restore Red-Black tree properties?",
        "options": [
          "Rotations",
          "Binary search",
          "Hashing",
          "Queue rotation"
        ],
        "correctIndex": 0,
        "explanation": "Rotations restructure the tree while recoloring restores the Red-Black invariants."
      }
    ]
  },
  {
    "id": "quiz-trees-set-17",
    "topicId": "trees",
    "title": "Trees Quiz - Level 17",
    "subtitle": "Advanced questions for Trees (Set 17/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-trees-set-17-q1",
        "question": "What is a threaded binary tree designed to improve?",
        "options": [
          "Traversal by using otherwise-null pointers to store links to predecessor or successor nodes",
          "Hash-map collision handling",
          "Graph edge weights",
          "Heap insertion"
        ],
        "correctIndex": 0,
        "explanation": "Threaded trees use unused child pointers to make certain traversals easier without recursion or an explicit stack."
      },
      {
        "id": "quiz-trees-set-17-q2",
        "question": "What does an inorder thread commonly point to?",
        "options": [
          "The node's inorder predecessor or successor",
          "The root only",
          "A random leaf",
          "The largest node only"
        ],
        "correctIndex": 0,
        "explanation": "Threads can connect nodes according to their inorder relationships."
      },
      {
        "id": "quiz-trees-set-17-q3",
        "question": "What is one advantage of threaded traversal?",
        "options": [
          "It can traverse without recursion or an auxiliary stack",
          "It always sorts the tree",
          "It eliminates all pointers",
          "It guarantees O(1) construction"
        ],
        "correctIndex": 0,
        "explanation": "Threads provide explicit traversal links that can replace some stack or recursion overhead."
      },
      {
        "id": "quiz-trees-set-17-q4",
        "question": "What is an expression tree?",
        "options": [
          "A tree where leaves are operands and internal nodes represent operators",
          "A tree containing only variable names",
          "A binary heap of expressions",
          "A graph of function calls"
        ],
        "correctIndex": 0,
        "explanation": "Expression trees represent arithmetic or logical expressions structurally."
      },
      {
        "id": "quiz-trees-set-17-q5",
        "question": "Which traversal of an expression tree naturally produces postfix notation?",
        "options": [
          "Preorder",
          "Inorder",
          "Postorder",
          "Level order"
        ],
        "correctIndex": 2,
        "explanation": "Postorder visits operands before their operator, matching postfix notation."
      },
      {
        "id": "quiz-trees-set-17-q6",
        "question": "Which traversal of an expression tree corresponds most closely to infix notation?",
        "options": [
          "Inorder",
          "Postorder",
          "Preorder",
          "Level order"
        ],
        "correctIndex": 0,
        "explanation": "Inorder visits the left operand, operator, and right operand in that sequence."
      },
      {
        "id": "quiz-trees-set-17-q7",
        "question": "Which traversal corresponds to prefix notation in an expression tree?",
        "options": [
          "Postorder",
          "Preorder",
          "Inorder",
          "Level order"
        ],
        "correctIndex": 1,
        "explanation": "Preorder visits the operator before its operands, matching prefix notation."
      }
    ]
  },
  {
    "id": "quiz-trees-set-18",
    "topicId": "trees",
    "title": "Trees Quiz - Level 18",
    "subtitle": "Advanced questions for Trees (Set 18/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-trees-set-18-q1",
        "question": "What is binary lifting commonly used for?",
        "options": [
          "Fast ancestor and LCA queries on trees",
          "Sorting arrays",
          "Hashing strings",
          "Building heaps"
        ],
        "correctIndex": 0,
        "explanation": "Binary lifting precomputes ancestors at powers of two to answer tree queries efficiently."
      },
      {
        "id": "quiz-trees-set-18-q2",
        "question": "What does up[v][j] commonly represent in binary lifting?",
        "options": [
          "The 2^j-th ancestor of vertex v",
          "The j-th child of v",
          "The depth of v",
          "The number of leaves below v"
        ],
        "correctIndex": 0,
        "explanation": "The table stores ancestors at powers of two, enabling jumps over large distances."
      },
      {
        "id": "quiz-trees-set-18-q3",
        "question": "Why are powers of two useful for ancestor queries?",
        "options": [
          "Any jump distance can be decomposed into powers of two",
          "Trees always have power-of-two heights",
          "They eliminate preprocessing",
          "They make every node a leaf"
        ],
        "correctIndex": 0,
        "explanation": "Binary representation lets a large ancestor jump be constructed from several precomputed power-of-two jumps."
      },
      {
        "id": "quiz-trees-set-18-q4",
        "question": "What is a typical query complexity for LCA using binary lifting after preprocessing?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n2)",
          "O(1) always"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm examines logarithmically many ancestor levels."
      },
      {
        "id": "quiz-trees-set-18-q5",
        "question": "What is a typical preprocessing complexity for binary lifting on a tree with n nodes?",
        "options": [
          "O(n log n)",
          "O(n2 log n)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "There are n nodes and O(log n) ancestor levels to fill."
      },
      {
        "id": "quiz-trees-set-18-q6",
        "question": "What extra information is commonly stored to compare ancestor depths?",
        "options": [
          "Depth of each node",
          "Only node values",
          "Only leaf counts",
          "Hash collisions"
        ],
        "correctIndex": 0,
        "explanation": "Depth allows one node to be lifted until both queried nodes are at the same depth."
      },
      {
        "id": "quiz-trees-set-18-q7",
        "question": "What is the key trade-off of binary lifting?",
        "options": [
          "It uses extra O(n log n) memory to make ancestor queries fast",
          "It uses no preprocessing",
          "It makes queries slower than a naive traversal",
          "It removes the tree structure"
        ],
        "correctIndex": 0,
        "explanation": "Precomputation and memory are exchanged for fast repeated queries."
      }
    ]
  },
  {
    "id": "quiz-trees-set-19",
    "topicId": "trees",
    "title": "Trees Quiz - Level 19",
    "subtitle": "Advanced questions for Trees (Set 19/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-trees-set-19-q1",
        "question": "What is tree diameter?",
        "options": [
          "The longest shortest path between any two nodes in the tree",
          "The number of nodes in the root",
          "The height of the root only",
          "The number of leaves"
        ],
        "correctIndex": 0,
        "explanation": "Tree diameter measures the maximum distance between any pair of nodes."
      },
      {
        "id": "quiz-trees-set-19-q2",
        "question": "How can tree diameter be found efficiently using two BFS or DFS traversals?",
        "options": [
          "Start from any node, find a farthest node A, then find the farthest node from A",
          "Start only from the root and stop",
          "Sort all nodes first",
          "Run binary search on node values"
        ],
        "correctIndex": 0,
        "explanation": "A farthest node from an arbitrary start is an endpoint of a diameter; a second traversal finds the diameter length."
      },
      {
        "id": "quiz-trees-set-19-q3",
        "question": "What is the time complexity of finding tree diameter using two traversals?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Each traversal visits every node and edge at most once."
      },
      {
        "id": "quiz-trees-set-19-q4",
        "question": "What is a common DFS dynamic-programming approach to finding tree diameter?",
        "options": [
          "For each node, combine the two largest downward path lengths from its children",
          "Always choose the smallest child",
          "Sort all leaf values",
          "Count only the root"
        ],
        "correctIndex": 0,
        "explanation": "A diameter passing through a node can combine its two longest downward paths."
      },
      {
        "id": "quiz-trees-set-19-q5",
        "question": "What does a subtree-size computation return for a leaf?",
        "options": [
          "0",
          "1",
          "2",
          "-1"
        ],
        "correctIndex": 1,
        "explanation": "A leaf's subtree contains itself, so its size is 1."
      },
      {
        "id": "quiz-trees-set-19-q6",
        "question": "What is a common technique for finding the maximum path sum in a binary tree?",
        "options": [
          "Use DFS to compute the best downward contribution from each node",
          "Use inorder traversal only",
          "Sort node values first",
          "Use a queue without tracking values"
        ],
        "correctIndex": 0,
        "explanation": "DFS can calculate the best path extending downward while separately updating the global maximum path through each node."
      },
      {
        "id": "quiz-trees-set-19-q7",
        "question": "Why can't the maximum path through a node always use both child contributions?",
        "options": [
          "A downward path returned to the parent can continue through only one child",
          "Trees cannot have two children",
          "The root cannot have children",
          "All path sums must be zero"
        ],
        "correctIndex": 0,
        "explanation": "When returning a path contribution upward, the path cannot branch into two children."
      }
    ]
  },
  {
    "id": "quiz-trees-set-20",
    "topicId": "trees",
    "title": "Trees Quiz - Level 20",
    "subtitle": "Advanced questions for Trees (Set 20/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-trees-set-20-q1",
        "question": "Which combination best represents advanced tree problem-solving techniques?",
        "options": [
          "BSTs, balancing, heaps, tries, segment trees, LCA, binary lifting, diameter, and tree DP",
          "Only preorder traversal",
          "Only leaf counting",
          "Only binary search"
        ],
        "correctIndex": 0,
        "explanation": "These techniques cover a broad range of advanced tree-based problems."
      },
      {
        "id": "quiz-trees-set-20-q2",
        "question": "When should you consider a BST instead of a general binary tree?",
        "options": [
          "When ordered key-based searching and updates are required",
          "Whenever the tree has exactly two leaves",
          "Only when all values are equal",
          "When no ordering is needed"
        ],
        "correctIndex": 0,
        "explanation": "BST ordering provides efficient navigation based on comparisons."
      },
      {
        "id": "quiz-trees-set-20-q3",
        "question": "When is a heap more appropriate than a BST?",
        "options": [
          "When you repeatedly need the minimum or maximum element",
          "When you need sorted inorder traversal",
          "When you need arbitrary predecessor queries",
          "When you need prefix matching"
        ],
        "correctIndex": 0,
        "explanation": "Heaps efficiently expose the extreme-priority element but do not maintain full sorted order."
      },
      {
        "id": "quiz-trees-set-20-q4",
        "question": "When is a trie preferable to a BST?",
        "options": [
          "When operations depend heavily on prefixes of strings or sequences",
          "When only numeric minimum is needed",
          "When storing arbitrary graph edges",
          "When maintaining heap order"
        ],
        "correctIndex": 0,
        "explanation": "Tries organize data by prefixes, making autocomplete and prefix queries natural."
      },
      {
        "id": "quiz-trees-set-20-q5",
        "question": "When is a segment tree a strong choice?",
        "options": [
          "When repeated range queries and updates must be handled efficiently",
          "When only one value is stored",
          "When the data must remain strictly FIFO",
          "When performing string prefix matching only"
        ],
        "correctIndex": 0,
        "explanation": "Segment trees are designed for dynamic range aggregation problems."
      },
      {
        "id": "quiz-trees-set-20-q6",
        "question": "What is the main reason advanced tree algorithms often begin with DFS?",
        "options": [
          "DFS naturally exposes parent-child relationships and subtree information",
          "DFS automatically sorts every tree",
          "DFS always gives shortest paths",
          "DFS eliminates recursion depth"
        ],
        "correctIndex": 0,
        "explanation": "DFS makes it natural to compute heights, subtree sizes, DP states, ancestors, and path information."
      },
      {
        "id": "quiz-trees-set-20-q7",
        "question": "What should you analyze before choosing a specialized tree structure?",
        "options": [
          "Required queries, update patterns, ordering, height constraints, memory limits, and the structure's invariants",
          "Only the number of leaves",
          "Only the root value",
          "Only whether recursion is available"
        ],
        "correctIndex": 0,
        "explanation": "Choosing the right tree depends on the operations and guarantees the problem requires."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-1",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 1",
    "subtitle": "Beginner questions for Graphs (Set 1/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-graphs-set-1-q1",
        "question": "What is a graph in data structures?",
        "options": [
          "A collection of vertices connected by edges",
          "A hierarchy where every node has one parent",
          "A linear structure following LIFO",
          "A structure containing only sorted values"
        ],
        "correctIndex": 0,
        "explanation": "A graph consists of vertices and edges that represent relationships or connections between them."
      },
      {
        "id": "quiz-graphs-set-1-q2",
        "question": "What does a vertex represent in a graph?",
        "options": [
          "A connection between two nodes",
          "An individual entity or point in the graph",
          "Only the first element",
          "The total number of edges"
        ],
        "correctIndex": 1,
        "explanation": "A vertex, also called a node, represents an individual entity in the graph."
      },
      {
        "id": "quiz-graphs-set-1-q3",
        "question": "What does an edge represent?",
        "options": [
          "A connection between two vertices",
          "The root of a graph",
          "A vertex with no neighbors",
          "The number of components"
        ],
        "correctIndex": 0,
        "explanation": "An edge represents a relationship or connection between vertices."
      },
      {
        "id": "quiz-graphs-set-1-q4",
        "question": "Which real-world example can naturally be represented as a graph?",
        "options": [
          "A stack of plates",
          "A social network of people and friendships",
          "A single integer",
          "A sorted array"
        ],
        "correctIndex": 1,
        "explanation": "People can be represented as vertices and friendships as edges."
      },
      {
        "id": "quiz-graphs-set-1-q5",
        "question": "What is a neighboring vertex?",
        "options": [
          "A vertex directly connected by an edge",
          "The vertex with the smallest value",
          "The first vertex created",
          "Any vertex in the graph"
        ],
        "correctIndex": 0,
        "explanation": "Two vertices are neighbors when an edge directly connects them."
      },
      {
        "id": "quiz-graphs-set-1-q6",
        "question": "What is the degree of a vertex in an undirected graph?",
        "options": [
          "Number of vertices in the graph",
          "Number of edges connected to that vertex",
          "Number of components",
          "Distance from the root"
        ],
        "correctIndex": 1,
        "explanation": "The degree counts how many edges are incident to the vertex."
      },
      {
        "id": "quiz-graphs-set-1-q7",
        "question": "Which structure is specifically designed to represent relationships between arbitrary entities?",
        "options": [
          "Graph",
          "Stack",
          "Queue",
          "Array"
        ],
        "correctIndex": 0,
        "explanation": "Graphs are general-purpose structures for representing relationships and connections."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-2",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 2",
    "subtitle": "Beginner questions for Graphs (Set 2/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-graphs-set-2-q1",
        "question": "What is an undirected graph?",
        "options": [
          "A graph where edges have no direction",
          "A graph with no vertices",
          "A graph where every edge points toward the root",
          "A graph containing only one edge"
        ],
        "correctIndex": 0,
        "explanation": "In an undirected graph, a connection between A and B can be traversed in either direction."
      },
      {
        "id": "quiz-graphs-set-2-q2",
        "question": "What is a directed graph?",
        "options": [
          "A graph where edges have a specified direction",
          "A graph with no cycles",
          "A graph containing only trees",
          "A graph with exactly two vertices"
        ],
        "correctIndex": 0,
        "explanation": "Directed edges represent one-way relationships from one vertex to another."
      },
      {
        "id": "quiz-graphs-set-2-q3",
        "question": "Which example best represents a directed graph?",
        "options": [
          "Mutual friendship",
          "One-way road connections",
          "A stack of books",
          "A family tree with no edges"
        ],
        "correctIndex": 1,
        "explanation": "A one-way road has a permitted travel direction, naturally represented by directed edges."
      },
      {
        "id": "quiz-graphs-set-2-q4",
        "question": "What is a weighted graph?",
        "options": [
          "A graph where edges have associated values such as cost or distance",
          "A graph where vertices have no names",
          "A graph containing only positive vertices",
          "A graph with exactly one edge"
        ],
        "correctIndex": 0,
        "explanation": "Edge weights can represent distance, cost, time, or other quantities."
      },
      {
        "id": "quiz-graphs-set-2-q5",
        "question": "What is an unweighted graph?",
        "options": [
          "A graph where edges do not have numerical weights",
          "A graph with no edges",
          "A graph where all vertices are zero",
          "A graph that cannot be traversed"
        ],
        "correctIndex": 0,
        "explanation": "In an unweighted graph, edges represent connections without associated costs."
      },
      {
        "id": "quiz-graphs-set-2-q6",
        "question": "Can a graph contain a self-loop?",
        "options": [
          "Yes, an edge can connect a vertex to itself",
          "No, never",
          "Only in an undirected tree",
          "Only when there are exactly two vertices"
        ],
        "correctIndex": 0,
        "explanation": "A self-loop is an edge whose starting and ending vertex are the same."
      },
      {
        "id": "quiz-graphs-set-2-q7",
        "question": "What is a simple graph?",
        "options": [
          "A graph with no self-loops or parallel edges",
          "A graph containing exactly one vertex",
          "A graph with only positive weights",
          "A graph with no paths"
        ],
        "correctIndex": 0,
        "explanation": "A standard simple graph does not contain self-loops or multiple edges between the same pair of vertices."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-3",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 3",
    "subtitle": "Beginner questions for Graphs (Set 3/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-graphs-set-3-q1",
        "question": "Which representation stores a list of neighbors for each vertex?",
        "options": [
          "Adjacency list",
          "Adjacency matrix",
          "Binary heap",
          "Stack"
        ],
        "correctIndex": 0,
        "explanation": "An adjacency list stores the vertices directly connected to each vertex."
      },
      {
        "id": "quiz-graphs-set-3-q2",
        "question": "What does an adjacency matrix use to represent a graph?",
        "options": [
          "A 2D matrix indicating whether pairs of vertices are connected",
          "A linked list for every edge only",
          "A stack of vertices",
          "A sorted array of weights"
        ],
        "correctIndex": 0,
        "explanation": "The matrix uses rows and columns for vertices and stores edge information at their intersections."
      },
      {
        "id": "quiz-graphs-set-3-q3",
        "question": "What is the space complexity of an adjacency matrix for V vertices?",
        "options": [
          "O(V)",
          "O(E)",
          "O(V2)",
          "O(log V)"
        ],
        "correctIndex": 2,
        "explanation": "An adjacency matrix contains V x V entries."
      },
      {
        "id": "quiz-graphs-set-3-q4",
        "question": "What is the typical space complexity of an adjacency list?",
        "options": [
          "O(V + E)",
          "O(V2) always",
          "O(log V)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "The structure stores vertices plus their incident edges."
      },
      {
        "id": "quiz-graphs-set-3-q5",
        "question": "Which representation is generally better for a sparse graph?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "A stack",
          "A binary tree"
        ],
        "correctIndex": 1,
        "explanation": "Adjacency lists avoid allocating space for the many absent edges in sparse graphs."
      },
      {
        "id": "quiz-graphs-set-3-q6",
        "question": "Which representation allows checking whether an edge exists in O(1) time?",
        "options": [
          "Adjacency list in every implementation",
          "Adjacency matrix",
          "Stack",
          "Queue"
        ],
        "correctIndex": 1,
        "explanation": "An adjacency matrix can directly inspect the corresponding row-column entry."
      },
      {
        "id": "quiz-graphs-set-3-q7",
        "question": "For a graph with 1,000 vertices and very few edges, which representation is usually more memory-efficient?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "A 1,000 x 1,000 array",
          "Two matrices"
        ],
        "correctIndex": 1,
        "explanation": "The adjacency list stores only existing connections instead of all possible vertex pairs."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-4",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 4",
    "subtitle": "Beginner questions for Graphs (Set 4/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-graphs-set-4-q1",
        "question": "What is BFS?",
        "options": [
          "Breadth-First Search",
          "Binary-Fast Search",
          "Balanced-First Sorting",
          "Backward-Following Search"
        ],
        "correctIndex": 0,
        "explanation": "BFS explores a graph level by level from a starting vertex."
      },
      {
        "id": "quiz-graphs-set-4-q2",
        "question": "Which data structure is typically used by BFS?",
        "options": [
          "Stack",
          "Queue",
          "Heap",
          "Hash table only"
        ],
        "correctIndex": 1,
        "explanation": "A queue ensures vertices are processed in the order they were discovered."
      },
      {
        "id": "quiz-graphs-set-4-q3",
        "question": "What is the first vertex processed in BFS?",
        "options": [
          "The vertex with the smallest value",
          "The chosen starting vertex",
          "The last vertex in the graph",
          "A random leaf"
        ],
        "correctIndex": 1,
        "explanation": "BFS begins at the specified source vertex."
      },
      {
        "id": "quiz-graphs-set-4-q4",
        "question": "What does BFS naturally explore first?",
        "options": [
          "Vertices closest to the source",
          "The deepest vertices",
          "Only leaf vertices",
          "The largest-valued vertices"
        ],
        "correctIndex": 0,
        "explanation": "BFS visits all vertices at one distance level before moving farther away."
      },
      {
        "id": "quiz-graphs-set-4-q5",
        "question": "Which problem is BFS especially suitable for in an unweighted graph?",
        "options": [
          "Finding shortest path by number of edges",
          "Finding a minimum spanning tree with negative weights",
          "Sorting vertices numerically",
          "Finding a maximum spanning tree only"
        ],
        "correctIndex": 0,
        "explanation": "BFS discovers vertices in increasing distance from the source in an unweighted graph."
      },
      {
        "id": "quiz-graphs-set-4-q6",
        "question": "Why is a visited array or set commonly used in BFS?",
        "options": [
          "To avoid processing the same vertex repeatedly",
          "To sort the vertices",
          "To calculate edge weights",
          "To create cycles"
        ],
        "correctIndex": 0,
        "explanation": "Visited tracking prevents repeated traversal, especially when cycles exist."
      },
      {
        "id": "quiz-graphs-set-4-q7",
        "question": "What is the typical BFS complexity using an adjacency list?",
        "options": [
          "O(V + E)",
          "O(V2E)",
          "O(log V)",
          "O(E2)"
        ],
        "correctIndex": 0,
        "explanation": "BFS visits each vertex and examines each edge a constant number of times."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-5",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 5",
    "subtitle": "Beginner questions for Graphs (Set 5/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-graphs-set-5-q1",
        "question": "What is DFS?",
        "options": [
          "Depth-First Search",
          "Distance-Finding Sort",
          "Directed-Fast Search",
          "Dynamic-Frequency Search"
        ],
        "correctIndex": 0,
        "explanation": "DFS explores as deeply as possible along a path before backtracking."
      },
      {
        "id": "quiz-graphs-set-5-q2",
        "question": "Which data structure naturally supports iterative DFS?",
        "options": [
          "Queue",
          "Stack",
          "Priority queue",
          "Hash map only"
        ],
        "correctIndex": 1,
        "explanation": "A stack stores vertices so the most recently discovered vertex is processed first."
      },
      {
        "id": "quiz-graphs-set-5-q3",
        "question": "Can DFS be implemented recursively?",
        "options": [
          "Yes",
          "No",
          "Only on directed graphs",
          "Only on weighted graphs"
        ],
        "correctIndex": 0,
        "explanation": "Recursion naturally uses the call stack to perform depth-first traversal."
      },
      {
        "id": "quiz-graphs-set-5-q4",
        "question": "Which problem is commonly solved using DFS?",
        "options": [
          "Exploring connected components",
          "Maintaining a priority queue",
          "Finding the median of an array",
          "Sorting numbers using counting sort"
        ],
        "correctIndex": 0,
        "explanation": "DFS can visit every vertex reachable from a starting vertex, allowing component discovery."
      },
      {
        "id": "quiz-graphs-set-5-q5",
        "question": "What happens when DFS reaches a vertex with no unvisited neighbors?",
        "options": [
          "It backtracks",
          "It deletes the vertex",
          "It restarts the graph automatically",
          "It sorts all neighbors"
        ],
        "correctIndex": 0,
        "explanation": "DFS backtracks to the previous vertex and continues exploring other paths."
      },
      {
        "id": "quiz-graphs-set-5-q6",
        "question": "What is the typical DFS complexity using an adjacency list?",
        "options": [
          "O(V + E)",
          "O(V2E)",
          "O(log V)",
          "O(E2)"
        ],
        "correctIndex": 0,
        "explanation": "Each vertex and edge is processed a bounded number of times."
      },
      {
        "id": "quiz-graphs-set-5-q7",
        "question": "Why is a visited set important in DFS on a graph?",
        "options": [
          "It prevents infinite traversal through cycles",
          "It sorts vertices",
          "It removes all edges",
          "It guarantees the graph is a tree"
        ],
        "correctIndex": 0,
        "explanation": "Without visited tracking, DFS can repeatedly follow cycles."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-6",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 6",
    "subtitle": "Beginner questions for Graphs (Set 6/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-graphs-set-6-q1",
        "question": "What is a path in a graph?",
        "options": [
          "A sequence of vertices connected by edges",
          "A single vertex only",
          "A set containing no edges",
          "The number of connected components"
        ],
        "correctIndex": 0,
        "explanation": "A path represents a route through connected vertices."
      },
      {
        "id": "quiz-graphs-set-6-q2",
        "question": "What is a cycle?",
        "options": [
          "A path that starts and ends at the same vertex",
          "A graph with no edges",
          "A path containing only one vertex",
          "A tree with one leaf"
        ],
        "correctIndex": 0,
        "explanation": "A cycle forms a closed route that returns to its starting vertex."
      },
      {
        "id": "quiz-graphs-set-6-q3",
        "question": "What is a connected graph?",
        "options": [
          "Every pair of vertices has a path between them",
          "Every vertex has exactly two edges",
          "The graph has no cycles",
          "Every edge is directed"
        ],
        "correctIndex": 0,
        "explanation": "In a connected undirected graph, every vertex can be reached from every other vertex."
      },
      {
        "id": "quiz-graphs-set-6-q4",
        "question": "What is a connected component?",
        "options": [
          "A maximal set of vertices connected to one another",
          "A single edge only",
          "The largest vertex",
          "A graph with exactly one cycle"
        ],
        "correctIndex": 0,
        "explanation": "Each connected component contains vertices that can reach each other."
      },
      {
        "id": "quiz-graphs-set-6-q5",
        "question": "How many connected components does a connected graph have?",
        "options": [
          "0",
          "1",
          "2",
          "V"
        ],
        "correctIndex": 1,
        "explanation": "By definition, all vertices belong to one connected component."
      },
      {
        "id": "quiz-graphs-set-6-q6",
        "question": "Can a graph contain multiple connected components?",
        "options": [
          "Yes",
          "No",
          "Only if it is directed",
          "Only if it has weights"
        ],
        "correctIndex": 0,
        "explanation": "A disconnected graph contains two or more separate connected components."
      },
      {
        "id": "quiz-graphs-set-6-q7",
        "question": "Which traversal can be used to count connected components?",
        "options": [
          "BFS or DFS",
          "Binary search only",
          "Heapify only",
          "Merge sort only"
        ],
        "correctIndex": 0,
        "explanation": "Starting a traversal from each unvisited vertex identifies one connected component."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-7",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 7",
    "subtitle": "Intermediate questions for Graphs (Set 7/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-graphs-set-7-q1",
        "question": "What is the shortest path in an unweighted graph usually found with?",
        "options": [
          "DFS",
          "BFS",
          "Merge sort",
          "Binary search"
        ],
        "correctIndex": 1,
        "explanation": "BFS explores vertices by increasing number of edges from the source."
      },
      {
        "id": "quiz-graphs-set-7-q2",
        "question": "In an unweighted graph, what does the BFS distance array usually store?",
        "options": [
          "The number of edges from the source to each vertex",
          "The weight of every edge",
          "The degree of the source only",
          "The number of components"
        ],
        "correctIndex": 0,
        "explanation": "The distance records the shortest number of edges from the source."
      },
      {
        "id": "quiz-graphs-set-7-q3",
        "question": "If BFS first reaches a vertex, why is that distance shortest in an unweighted graph?",
        "options": [
          "BFS processes vertices in nondecreasing distance order",
          "BFS always chooses the largest edge",
          "DFS has already sorted the graph",
          "All paths have equal length"
        ],
        "correctIndex": 0,
        "explanation": "BFS processes all vertices at distance d before any at distance d+1."
      },
      {
        "id": "quiz-graphs-set-7-q4",
        "question": "Which data structure can reconstruct a shortest path after BFS?",
        "options": [
          "Parent or predecessor array",
          "Randomized stack",
          "Sorting array",
          "Heap of all vertices"
        ],
        "correctIndex": 0,
        "explanation": "Storing each vertex's predecessor allows the path to be reconstructed backward."
      },
      {
        "id": "quiz-graphs-set-7-q5",
        "question": "If the shortest path from A to D is A to B to C to D, how many edges are in the path?",
        "options": [
          "2",
          "3",
          "4",
          "1"
        ],
        "correctIndex": 1,
        "explanation": "There are three connections: A-B, B-C, and C-D."
      },
      {
        "id": "quiz-graphs-set-7-q6",
        "question": "What is the shortest path complexity using BFS with adjacency lists?",
        "options": [
          "O(V + E)",
          "O(V2)",
          "O(log V)",
          "O(E log E)"
        ],
        "correctIndex": 0,
        "explanation": "BFS processes all relevant vertices and edges once."
      },
      {
        "id": "quiz-graphs-set-7-q7",
        "question": "Why is ordinary BFS not sufficient for arbitrary positive edge weights?",
        "options": [
          "The path with fewer edges may have greater total weight",
          "BFS cannot store vertices",
          "BFS only works on trees",
          "Weighted graphs cannot contain paths"
        ],
        "correctIndex": 0,
        "explanation": "With weights, minimizing edge count is not necessarily the same as minimizing total cost."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-8",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 8",
    "subtitle": "Intermediate questions for Graphs (Set 8/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-graphs-set-8-q1",
        "question": "What is a topological ordering?",
        "options": [
          "A linear ordering of vertices such that every directed edge u to v places u before v",
          "A sorted list of edge weights",
          "A traversal of every undirected graph",
          "A cycle containing every vertex"
        ],
        "correctIndex": 0,
        "explanation": "Topological ordering respects all directed dependency relationships."
      },
      {
        "id": "quiz-graphs-set-8-q2",
        "question": "Which type of graph has a topological ordering?",
        "options": [
          "Directed acyclic graph",
          "Any graph with cycles",
          "Only complete graphs",
          "Only undirected graphs"
        ],
        "correctIndex": 0,
        "explanation": "A DAG has no directed cycles, which makes a valid dependency ordering possible."
      },
      {
        "id": "quiz-graphs-set-8-q3",
        "question": "What does DAG stand for?",
        "options": [
          "Directed Acyclic Graph",
          "Dynamic Array Graph",
          "Directed Array Grid",
          "Depth-Adjacent Graph"
        ],
        "correctIndex": 0,
        "explanation": "DAG stands for Directed Acyclic Graph."
      },
      {
        "id": "quiz-graphs-set-8-q4",
        "question": "Which algorithm can produce a topological ordering using indegrees?",
        "options": [
          "Kahn's algorithm",
          "Dijkstra's algorithm",
          "Kruskal's algorithm",
          "Binary search"
        ],
        "correctIndex": 0,
        "explanation": "Kahn's algorithm repeatedly removes vertices with indegree zero."
      },
      {
        "id": "quiz-graphs-set-8-q5",
        "question": "What happens if Kahn's algorithm cannot process all vertices?",
        "options": [
          "The graph contains a directed cycle",
          "The graph must be disconnected",
          "All edges have negative weight",
          "The graph is necessarily complete"
        ],
        "correctIndex": 0,
        "explanation": "A directed cycle prevents all vertices from reaching indegree zero."
      },
      {
        "id": "quiz-graphs-set-8-q6",
        "question": "What is another common approach to topological sorting?",
        "options": [
          "DFS with finishing times",
          "Binary search",
          "Heap sort",
          "Two-pointer traversal"
        ],
        "correctIndex": 0,
        "explanation": "DFS can add vertices after processing their descendants and then reverse the resulting order."
      },
      {
        "id": "quiz-graphs-set-8-q7",
        "question": "What is a practical application of topological sorting?",
        "options": [
          "Scheduling tasks with dependencies",
          "Finding the maximum array element",
          "Balancing a BST",
          "Counting string characters"
        ],
        "correctIndex": 0,
        "explanation": "Tasks can be ordered so prerequisites are completed before dependent tasks."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-9",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 9",
    "subtitle": "Intermediate questions for Graphs (Set 9/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-graphs-set-9-q1",
        "question": "What is Dijkstra's algorithm used for?",
        "options": [
          "Single-source shortest paths with non-negative edge weights",
          "Topological sorting only",
          "Minimum spanning trees only",
          "Sorting arrays"
        ],
        "correctIndex": 0,
        "explanation": "Dijkstra computes shortest distances from one source when edge weights are non-negative."
      },
      {
        "id": "quiz-graphs-set-9-q2",
        "question": "Which data structure is commonly used to optimize Dijkstra's algorithm?",
        "options": [
          "Priority queue",
          "Stack",
          "Simple array only",
          "Deque only"
        ],
        "correctIndex": 0,
        "explanation": "A priority queue efficiently selects the unsettled vertex with the smallest tentative distance."
      },
      {
        "id": "quiz-graphs-set-9-q3",
        "question": "What does relaxation mean in shortest-path algorithms?",
        "options": [
          "Checking whether going through one vertex gives a shorter distance",
          "Deleting an edge",
          "Sorting all vertices",
          "Removing the source"
        ],
        "correctIndex": 0,
        "explanation": "Relaxation updates dist[v] when dist[u] + weight(u,v) is smaller."
      },
      {
        "id": "quiz-graphs-set-9-q4",
        "question": "Why does standard Dijkstra fail with negative edge weights?",
        "options": [
          "A vertex finalized as optimal can later be improved through a negative edge",
          "Priority queues cannot store negative numbers",
          "Graphs cannot have negative edges",
          "Dijkstra only works on trees"
        ],
        "correctIndex": 0,
        "explanation": "Dijkstra relies on the fact that once the smallest tentative distance is selected, it cannot later decrease."
      },
      {
        "id": "quiz-graphs-set-9-q5",
        "question": "What is the typical complexity of Dijkstra using an adjacency list and binary heap?",
        "options": [
          "O((V + E) log V)",
          "O(V2E)",
          "O(log V)",
          "O(E)"
        ],
        "correctIndex": 0,
        "explanation": "Heap operations add a logarithmic factor to vertex/edge processing."
      },
      {
        "id": "quiz-graphs-set-9-q6",
        "question": "What initial distance is normally assigned to the source?",
        "options": [
          "Infinity",
          "0",
          "-1",
          "1"
        ],
        "correctIndex": 1,
        "explanation": "The distance from the source to itself is zero."
      },
      {
        "id": "quiz-graphs-set-9-q7",
        "question": "What initial distance is usually assigned to other vertices?",
        "options": [
          "0",
          "1",
          "Infinity",
          "-Infinity"
        ],
        "correctIndex": 2,
        "explanation": "Before discovering a path, the distance is treated as infinity."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-10",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 10",
    "subtitle": "Intermediate questions for Graphs (Set 10/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-graphs-set-10-q1",
        "question": "Which algorithm can handle negative edge weights and detect negative cycles reachable from the source?",
        "options": [
          "Bellman-Ford",
          "BFS",
          "Kruskal",
          "Binary search"
        ],
        "correctIndex": 0,
        "explanation": "Bellman-Ford supports negative weights and can detect reachable negative cycles."
      },
      {
        "id": "quiz-graphs-set-10-q2",
        "question": "How many relaxation passes does Bellman-Ford normally perform before the negative-cycle check?",
        "options": [
          "V - 1",
          "V",
          "E - 1",
          "log V"
        ],
        "correctIndex": 0,
        "explanation": "Any simple shortest path can contain at most V-1 edges."
      },
      {
        "id": "quiz-graphs-set-10-q3",
        "question": "What is the typical time complexity of Bellman-Ford?",
        "options": [
          "O(VE)",
          "O(V + E)",
          "O(E log V)",
          "O(log V)"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm relaxes all edges V-1 times."
      },
      {
        "id": "quiz-graphs-set-10-q4",
        "question": "What does a negative cycle mean for shortest-path problems?",
        "options": [
          "A reachable cycle with negative total weight can make path cost decrease without bound",
          "The graph has no edges",
          "All shortest paths are zero",
          "Every edge must be negative"
        ],
        "correctIndex": 0,
        "explanation": "Repeatedly traversing a negative cycle can reduce the path cost indefinitely."
      },
      {
        "id": "quiz-graphs-set-10-q5",
        "question": "Why can Bellman-Ford detect a negative cycle after V-1 passes?",
        "options": [
          "Any further improvement indicates a path using at least V edges, implying a cycle",
          "All graphs have V-1 cycles",
          "The graph becomes sorted",
          "All vertices are removed"
        ],
        "correctIndex": 0,
        "explanation": "A simple path cannot contain V or more edges, so additional improvement implies a cycle."
      },
      {
        "id": "quiz-graphs-set-10-q6",
        "question": "Compared with Dijkstra, what is a major advantage of Bellman-Ford?",
        "options": [
          "It supports negative edge weights",
          "It is always faster",
          "It uses no memory",
          "It requires the graph to be a DAG"
        ],
        "correctIndex": 0,
        "explanation": "Bellman-Ford works even when some edge weights are negative."
      },
      {
        "id": "quiz-graphs-set-10-q7",
        "question": "What optimization can stop Bellman-Ford early?",
        "options": [
          "Stop if an entire pass produces no distance updates",
          "Stop after one edge",
          "Sort the vertices",
          "Delete negative edges"
        ],
        "correctIndex": 0,
        "explanation": "If no distances change during a pass, no later pass can improve them in the absence of a relevant negative cycle."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-11",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 11",
    "subtitle": "Intermediate questions for Graphs (Set 11/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-graphs-set-11-q1",
        "question": "What is a minimum spanning tree?",
        "options": [
          "A spanning tree with minimum total edge weight",
          "The shortest path from one source",
          "A tree containing the maximum number of edges",
          "Any tree with a root"
        ],
        "correctIndex": 0,
        "explanation": "An MST connects all vertices with no cycles while minimizing total edge weight."
      },
      {
        "id": "quiz-graphs-set-11-q2",
        "question": "Which algorithms are commonly used to find an MST?",
        "options": [
          "Kruskal and Prim",
          "BFS and DFS only",
          "Dijkstra and Bellman-Ford",
          "Merge sort and quicksort"
        ],
        "correctIndex": 0,
        "explanation": "Kruskal's and Prim's algorithms are classic MST algorithms."
      },
      {
        "id": "quiz-graphs-set-11-q3",
        "question": "How many edges does an MST of a connected graph with V vertices contain?",
        "options": [
          "V",
          "V - 1",
          "2V",
          "E - 1"
        ],
        "correctIndex": 1,
        "explanation": "Any spanning tree on V vertices contains exactly V-1 edges."
      },
      {
        "id": "quiz-graphs-set-11-q4",
        "question": "What is Kruskal's algorithm based on?",
        "options": [
          "Repeatedly selecting the smallest edge that does not create a cycle",
          "Always expanding from a source vertex",
          "Choosing the largest edge first",
          "Using BFS levels"
        ],
        "correctIndex": 0,
        "explanation": "Kruskal sorts edges by weight and adds safe edges while avoiding cycles."
      },
      {
        "id": "quiz-graphs-set-11-q5",
        "question": "Which data structure is especially useful for cycle detection in Kruskal's algorithm?",
        "options": [
          "Disjoint Set Union",
          "Stack",
          "Queue",
          "Trie"
        ],
        "correctIndex": 0,
        "explanation": "DSU efficiently determines whether two vertices are already in the same component."
      },
      {
        "id": "quiz-graphs-set-11-q6",
        "question": "What is Prim's algorithm based on?",
        "options": [
          "Growing one connected tree by repeatedly adding the cheapest crossing edge",
          "Sorting all vertices",
          "Finding shortest paths from every source",
          "Removing cycles after DFS"
        ],
        "correctIndex": 0,
        "explanation": "Prim expands an MST from an initial vertex using the cheapest edge connecting the current tree to a new vertex."
      },
      {
        "id": "quiz-graphs-set-11-q7",
        "question": "What is an important distinction between MST and shortest path tree?",
        "options": [
          "An MST minimizes total tree edge weight, while a shortest path tree minimizes source-to-vertex distances",
          "They are always identical",
          "An MST requires directed edges only",
          "A shortest path tree cannot contain V-1 edges"
        ],
        "correctIndex": 0,
        "explanation": "They optimize different objectives and can produce different trees."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-12",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 12",
    "subtitle": "Intermediate questions for Graphs (Set 12/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-graphs-set-12-q1",
        "question": "How does Kruskal's algorithm avoid creating cycles?",
        "options": [
          "It adds an edge only when its endpoints belong to different DSU sets",
          "It never adds edges",
          "It uses BFS",
          "It chooses only directed edges"
        ],
        "correctIndex": 0,
        "explanation": "If endpoints are already connected, adding the edge would create a cycle."
      },
      {
        "id": "quiz-graphs-set-12-q2",
        "question": "What is the purpose of union in DSU?",
        "options": [
          "Merge two disjoint components",
          "Find the shortest path",
          "Sort edges",
          "Delete a vertex"
        ],
        "correctIndex": 0,
        "explanation": "Union combines two separate sets after an edge connects them."
      },
      {
        "id": "quiz-graphs-set-12-q3",
        "question": "What does find operation return in DSU?",
        "options": [
          "A representative of the set containing an element",
          "The shortest path",
          "The edge weight",
          "The number of graph vertices"
        ],
        "correctIndex": 0,
        "explanation": "Find identifies which connected component or set an element belongs to."
      },
      {
        "id": "quiz-graphs-set-12-q4",
        "question": "What optimization flattens DSU trees during find?",
        "options": [
          "Path compression",
          "Binary search",
          "Heapification",
          "Topological sorting"
        ],
        "correctIndex": 0,
        "explanation": "Path compression makes nodes point closer to the set representative."
      },
      {
        "id": "quiz-graphs-set-12-q5",
        "question": "What does union by rank or size help achieve?",
        "options": [
          "Keep DSU trees shallow",
          "Sort graph edges",
          "Find shortest paths",
          "Remove graph cycles directly"
        ],
        "correctIndex": 0,
        "explanation": "Attaching smaller trees under larger ones limits tree height."
      },
      {
        "id": "quiz-graphs-set-12-q6",
        "question": "What is the amortized complexity of DSU operations with path compression and union by rank/size?",
        "options": [
          "Nearly O(1), specifically O(a(V)) amortized",
          "O(V)",
          "O(V2)",
          "O(log V) exactly"
        ],
        "correctIndex": 0,
        "explanation": "The inverse Ackermann function grows extremely slowly, making DSU operations effectively constant for practical input sizes."
      },
      {
        "id": "quiz-graphs-set-12-q7",
        "question": "Which graph problem can DSU help solve besides Kruskal's MST?",
        "options": [
          "Dynamic connectivity and cycle detection in undirected graphs",
          "Dijkstra with negative edges",
          "Topological sorting of every graph",
          "String prefix matching"
        ],
        "correctIndex": 0,
        "explanation": "DSU is useful whenever components merge and connectivity needs to be queried."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-13",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 13",
    "subtitle": "Intermediate questions for Graphs (Set 13/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-graphs-set-13-q1",
        "question": "How can DFS detect a cycle in an undirected graph?",
        "options": [
          "Track the parent of each vertex and detect an already visited neighbor that is not the parent",
          "Check only the root",
          "Sort the vertices",
          "Use indegrees only"
        ],
        "correctIndex": 0,
        "explanation": "An already visited neighbor other than the parent indicates a back connection and therefore a cycle."
      },
      {
        "id": "quiz-graphs-set-13-q2",
        "question": "How is cycle detection commonly handled in a directed graph using DFS?",
        "options": [
          "Track vertices currently in the recursion stack",
          "Track only degrees",
          "Sort all edges",
          "Use union-find without modification"
        ],
        "correctIndex": 0,
        "explanation": "An edge to a vertex currently in the recursion stack indicates a directed cycle."
      },
      {
        "id": "quiz-graphs-set-13-q3",
        "question": "What does a back edge in DFS generally indicate in a directed graph?",
        "options": [
          "A directed cycle",
          "A minimum spanning tree",
          "A shortest path",
          "A disconnected component"
        ],
        "correctIndex": 0,
        "explanation": "An edge returning to an ancestor in the current DFS path forms a cycle."
      },
      {
        "id": "quiz-graphs-set-13-q4",
        "question": "Can DSU detect cycles in an undirected graph while processing edges?",
        "options": [
          "Yes",
          "No",
          "Only in weighted graphs",
          "Only in DAGs"
        ],
        "correctIndex": 0,
        "explanation": "If an edge connects two vertices already in the same DSU set, it creates a cycle."
      },
      {
        "id": "quiz-graphs-set-13-q5",
        "question": "Why is the same simple visited check insufficient for undirected DFS cycle detection?",
        "options": [
          "The edge back to the parent is naturally visited and should not be treated as a cycle",
          "Undirected graphs have no edges",
          "DFS cannot visit neighbors",
          "All undirected graphs contain cycles"
        ],
        "correctIndex": 0,
        "explanation": "The parent relationship creates an expected visited neighbor that must be ignored."
      },
      {
        "id": "quiz-graphs-set-13-q6",
        "question": "What is the typical complexity of DFS-based cycle detection with an adjacency list?",
        "options": [
          "O(V + E)",
          "O(V2E)",
          "O(log V)",
          "O(E2)"
        ],
        "correctIndex": 0,
        "explanation": "The traversal examines each vertex and edge a constant number of times."
      },
      {
        "id": "quiz-graphs-set-13-q7",
        "question": "What property must a directed graph have to admit a topological ordering?",
        "options": [
          "It must be acyclic",
          "It must be complete",
          "It must be weighted",
          "It must be undirected"
        ],
        "correctIndex": 0,
        "explanation": "A directed cycle makes it impossible to place every prerequisite before its dependent vertex."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-14",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 14",
    "subtitle": "Advanced questions for Graphs (Set 14/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-graphs-set-14-q1",
        "question": "What is bipartite graph coloring?",
        "options": [
          "Assigning one of two colors to each vertex so adjacent vertices have different colors",
          "Giving every vertex a unique color",
          "Coloring only the edges",
          "Assigning colors based on edge weights"
        ],
        "correctIndex": 0,
        "explanation": "A graph is bipartite if its vertices can be divided into two sets with no edge inside the same set."
      },
      {
        "id": "quiz-graphs-set-14-q2",
        "question": "Which traversal can be used to test whether a graph is bipartite?",
        "options": [
          "BFS or DFS",
          "Merge sort",
          "Binary search",
          "Dijkstra only"
        ],
        "correctIndex": 0,
        "explanation": "BFS or DFS can assign alternating colors and detect conflicts."
      },
      {
        "id": "quiz-graphs-set-14-q3",
        "question": "What happens if an edge connects two vertices with the same color?",
        "options": [
          "The graph is not bipartite",
          "The graph becomes weighted",
          "The colors should remain unchanged",
          "A new vertex is created"
        ],
        "correctIndex": 0,
        "explanation": "Adjacent vertices in a bipartite graph must have different colors."
      },
      {
        "id": "quiz-graphs-set-14-q4",
        "question": "Can a graph containing an odd-length cycle be bipartite?",
        "options": [
          "Yes, always",
          "No",
          "Only if weighted",
          "Only if directed"
        ],
        "correctIndex": 1,
        "explanation": "An odd cycle cannot be colored with only two colors without creating an adjacent same-color pair."
      },
      {
        "id": "quiz-graphs-set-14-q5",
        "question": "Can a graph with no cycles be bipartite?",
        "options": [
          "Yes",
          "No",
          "Only if complete",
          "Only if weighted"
        ],
        "correctIndex": 0,
        "explanation": "Every forest is bipartite because its vertices can be colored according to alternating tree levels."
      },
      {
        "id": "quiz-graphs-set-14-q6",
        "question": "What is the complexity of bipartite checking using adjacency lists?",
        "options": [
          "O(V + E)",
          "O(V2)",
          "O(log V)",
          "O(E2)"
        ],
        "correctIndex": 0,
        "explanation": "Each vertex and edge is processed a bounded number of times."
      },
      {
        "id": "quiz-graphs-set-14-q7",
        "question": "What is a common application of bipartite graphs?",
        "options": [
          "Modeling relationships between two different groups, such as students and courses",
          "Representing only recursive trees",
          "Sorting numbers",
          "Implementing stacks"
        ],
        "correctIndex": 0,
        "explanation": "Bipartite graphs naturally represent relationships between two distinct categories."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-15",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 15",
    "subtitle": "Advanced questions for Graphs (Set 15/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-graphs-set-15-q1",
        "question": "What is Floyd-Warshall used for?",
        "options": [
          "All-pairs shortest paths",
          "Minimum spanning trees only",
          "Topological sorting",
          "Binary search"
        ],
        "correctIndex": 0,
        "explanation": "Floyd-Warshall computes shortest distances between every pair of vertices."
      },
      {
        "id": "quiz-graphs-set-15-q2",
        "question": "What is the typical time complexity of Floyd-Warshall?",
        "options": [
          "O(V3)",
          "O(V + E)",
          "O(E log V)",
          "O(V2)"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm considers every possible intermediate vertex for every pair of endpoints."
      },
      {
        "id": "quiz-graphs-set-15-q3",
        "question": "What is the core recurrence in Floyd-Warshall?",
        "options": [
          "dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])",
          "dist[i][j] = max(i,j)",
          "dist[i][j] = dist[i][j] x k",
          "dist[i][j] = i + j only"
        ],
        "correctIndex": 0,
        "explanation": "The recurrence checks whether using k as an intermediate vertex improves the path."
      },
      {
        "id": "quiz-graphs-set-15-q4",
        "question": "Can Floyd-Warshall handle negative edge weights?",
        "options": [
          "Yes, provided there is no negative cycle affecting the shortest-path interpretation",
          "No, never",
          "Only when all edges are positive",
          "Only on trees"
        ],
        "correctIndex": 0,
        "explanation": "Floyd-Warshall supports negative edges but shortest paths are undefined when negative cycles are involved."
      },
      {
        "id": "quiz-graphs-set-15-q5",
        "question": "How can a negative cycle be detected with Floyd-Warshall?",
        "options": [
          "A diagonal distance dist[i][i] becomes negative",
          "Every edge becomes positive",
          "The graph becomes disconnected",
          "The source distance becomes zero"
        ],
        "correctIndex": 0,
        "explanation": "A negative value on the diagonal indicates a negative cycle reachable from that vertex."
      },
      {
        "id": "quiz-graphs-set-15-q6",
        "question": "What is the space complexity of the standard Floyd-Warshall distance matrix?",
        "options": [
          "O(V2)",
          "O(V)",
          "O(E)",
          "O(log V)"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm stores distances for every ordered pair of vertices."
      },
      {
        "id": "quiz-graphs-set-15-q7",
        "question": "When is Floyd-Warshall especially attractive?",
        "options": [
          "When the graph is relatively small and shortest paths between many pairs are needed",
          "When only one edge exists",
          "When only a single source and huge sparse graph matter",
          "When no weights exist"
        ],
        "correctIndex": 0,
        "explanation": "Its O(V3) cost is often reasonable for smaller graphs and provides all-pairs results."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-16",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 16",
    "subtitle": "Advanced questions for Graphs (Set 16/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-graphs-set-16-q1",
        "question": "What is a strongly connected component in a directed graph?",
        "options": [
          "A maximal set of vertices where every vertex can reach every other vertex",
          "A set containing only sources",
          "Any undirected component",
          "A single edge"
        ],
        "correctIndex": 0,
        "explanation": "Strong connectivity requires mutual reachability between every pair of vertices in the component."
      },
      {
        "id": "quiz-graphs-set-16-q2",
        "question": "Which algorithms can find strongly connected components?",
        "options": [
          "Kosaraju's and Tarjan's algorithms",
          "Kruskal and Prim",
          "Dijkstra and BFS only",
          "Merge sort and quicksort"
        ],
        "correctIndex": 0,
        "explanation": "Kosaraju's and Tarjan's algorithms are standard SCC algorithms."
      },
      {
        "id": "quiz-graphs-set-16-q3",
        "question": "What is a key idea in Kosaraju's algorithm?",
        "options": [
          "Run DFS, process vertices by finishing order, then DFS on the transposed graph",
          "Sort all edge weights",
          "Run Dijkstra twice",
          "Use a priority queue only"
        ],
        "correctIndex": 0,
        "explanation": "The finishing order from the first DFS determines the useful order for exploring the transpose."
      },
      {
        "id": "quiz-graphs-set-16-q4",
        "question": "What is the transpose of a directed graph?",
        "options": [
          "A graph where every edge direction is reversed",
          "A graph with all weights negated",
          "A graph with vertices sorted",
          "A graph with all edges removed"
        ],
        "correctIndex": 0,
        "explanation": "For every edge u to v, the transpose contains v to u."
      },
      {
        "id": "quiz-graphs-set-16-q5",
        "question": "What is the typical complexity of Kosaraju's algorithm?",
        "options": [
          "O(V + E)",
          "O(V2)",
          "O(E2)",
          "O(V3)"
        ],
        "correctIndex": 0,
        "explanation": "It performs a constant number of graph traversals and edge scans."
      },
      {
        "id": "quiz-graphs-set-16-q6",
        "question": "What is special about the condensation graph formed by SCCs?",
        "options": [
          "It is always a DAG",
          "It always contains a cycle",
          "It is always complete",
          "It contains only one vertex"
        ],
        "correctIndex": 0,
        "explanation": "Collapsing each SCC into a single vertex removes cycles between components."
      },
      {
        "id": "quiz-graphs-set-16-q7",
        "question": "Why are SCCs useful in dependency analysis?",
        "options": [
          "They identify groups of entities that are mutually reachable",
          "They sort all dependencies",
          "They remove all cycles from the original graph",
          "They find minimum edge weights"
        ],
        "correctIndex": 0,
        "explanation": "SCCs expose mutually dependent groups that can be treated as units."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-17",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 17",
    "subtitle": "Advanced questions for Graphs (Set 17/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-graphs-set-17-q1",
        "question": "What is a bridge in an undirected graph?",
        "options": [
          "An edge whose removal increases the number of connected components",
          "An edge with the largest weight",
          "A vertex with degree two",
          "Any edge in a cycle"
        ],
        "correctIndex": 0,
        "explanation": "A bridge is an edge that disconnects the graph when removed."
      },
      {
        "id": "quiz-graphs-set-17-q2",
        "question": "What is an articulation point?",
        "options": [
          "A vertex whose removal increases the number of connected components",
          "A vertex with maximum weight",
          "Any leaf",
          "A vertex with degree one only"
        ],
        "correctIndex": 0,
        "explanation": "Removing an articulation point disconnects a previously connected portion of the graph."
      },
      {
        "id": "quiz-graphs-set-17-q3",
        "question": "Which technique is commonly used to find bridges and articulation points efficiently?",
        "options": [
          "DFS with discovery times and low-link values",
          "BFS only",
          "Dijkstra",
          "Kruskal"
        ],
        "correctIndex": 0,
        "explanation": "DFS low-link analysis identifies whether subtrees have alternative connections to ancestors."
      },
      {
        "id": "quiz-graphs-set-17-q4",
        "question": "What does low[v] represent conceptually in Tarjan-style DFS analysis?",
        "options": [
          "The earliest discovery time reachable from v's DFS subtree using tree edges and at most one back edge",
          "The largest vertex value",
          "The degree of v",
          "The shortest weighted path from the source"
        ],
        "correctIndex": 0,
        "explanation": "Low-link values capture how far upward a DFS subtree can reach without using its parent edge as a shortcut."
      },
      {
        "id": "quiz-graphs-set-17-q5",
        "question": "For a DFS tree edge u to v, when can it indicate a bridge?",
        "options": [
          "When low[v] > tin[u]",
          "When low[v] < tin[u]",
          "When tin[v] = 0 always",
          "When low[v] = 0 always"
        ],
        "correctIndex": 0,
        "explanation": "If v's subtree cannot reach u or any ancestor of u through a back edge, removing u-v disconnects it."
      },
      {
        "id": "quiz-graphs-set-17-q6",
        "question": "What is the typical complexity of finding all bridges using DFS?",
        "options": [
          "O(V + E)",
          "O(V2)",
          "O(E log V)",
          "O(V3)"
        ],
        "correctIndex": 0,
        "explanation": "The DFS processes each vertex and edge a constant number of times."
      },
      {
        "id": "quiz-graphs-set-17-q7",
        "question": "Can an edge that belongs to a cycle be a bridge?",
        "options": [
          "No",
          "Yes, always",
          "Only if weighted",
          "Only in a directed graph"
        ],
        "correctIndex": 0,
        "explanation": "A cycle provides an alternative route, so removing one cycle edge does not disconnect its endpoints."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-18",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 18",
    "subtitle": "Advanced questions for Graphs (Set 18/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-graphs-set-18-q1",
        "question": "What is a max-flow problem?",
        "options": [
          "Finding the maximum amount of flow that can travel from a source to a sink subject to edge capacities",
          "Finding the maximum vertex value",
          "Finding the longest DFS path",
          "Sorting edge weights"
        ],
        "correctIndex": 0,
        "explanation": "Flow networks model capacities through which resources can move."
      },
      {
        "id": "quiz-graphs-set-18-q2",
        "question": "What is the capacity of an edge?",
        "options": [
          "The maximum flow that edge can carry",
          "The number of vertices",
          "The shortest distance",
          "The DFS depth"
        ],
        "correctIndex": 0,
        "explanation": "Capacity limits how much flow can pass through an edge."
      },
      {
        "id": "quiz-graphs-set-18-q3",
        "question": "What is a residual graph used for?",
        "options": [
          "Representing remaining capacity and possible reverse adjustments to existing flow",
          "Sorting vertices",
          "Finding tree height",
          "Removing all edges"
        ],
        "correctIndex": 0,
        "explanation": "Residual capacities indicate where additional flow can still be sent or rerouted."
      },
      {
        "id": "quiz-graphs-set-18-q4",
        "question": "What does the max-flow min-cut theorem state?",
        "options": [
          "The maximum flow equals the minimum capacity of an s-t cut",
          "Maximum flow always equals the number of vertices",
          "Minimum cut always has one edge",
          "Every flow is a shortest path"
        ],
        "correctIndex": 0,
        "explanation": "The theorem establishes equality between the maximum feasible flow and the minimum source-sink cut capacity."
      },
      {
        "id": "quiz-graphs-set-18-q5",
        "question": "Which algorithm is commonly used for maximum flow?",
        "options": [
          "Ford-Fulkerson",
          "Dijkstra only",
          "Kruskal",
          "Binary search"
        ],
        "correctIndex": 0,
        "explanation": "Ford-Fulkerson repeatedly finds augmenting paths to increase the flow."
      },
      {
        "id": "quiz-graphs-set-18-q6",
        "question": "What is Edmonds-Karp?",
        "options": [
          "A Ford-Fulkerson implementation that uses BFS to find augmenting paths",
          "A minimum spanning tree algorithm",
          "A sorting algorithm",
          "A graph coloring algorithm"
        ],
        "correctIndex": 0,
        "explanation": "Edmonds-Karp selects augmenting paths using BFS."
      },
      {
        "id": "quiz-graphs-set-18-q7",
        "question": "What is a common application of max flow?",
        "options": [
          "Network capacity and bipartite matching",
          "Sorting strings",
          "Finding tree height",
          "Binary search"
        ],
        "correctIndex": 0,
        "explanation": "Flow networks can model resource allocation, transportation, scheduling, and matching problems."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-19",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 19",
    "subtitle": "Advanced questions for Graphs (Set 19/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-graphs-set-19-q1",
        "question": "How can bipartite matching be modeled as a max-flow problem?",
        "options": [
          "Create source-to-left edges, left-to-right compatibility edges, and right-to-sink edges",
          "Connect every vertex directly to itself",
          "Use only negative-weight edges",
          "Sort both partitions first"
        ],
        "correctIndex": 0,
        "explanation": "The flow network represents choosing compatible left-right pairs while capacity 1 enforces matching constraints."
      },
      {
        "id": "quiz-graphs-set-19-q2",
        "question": "What is the goal of maximum bipartite matching?",
        "options": [
          "Choose the largest set of pairwise non-conflicting edges between the two partitions",
          "Find the largest edge weight",
          "Connect every vertex to every other vertex",
          "Find the shortest cycle"
        ],
        "correctIndex": 0,
        "explanation": "A matching ensures each vertex participates in at most one selected pair."
      },
      {
        "id": "quiz-graphs-set-19-q3",
        "question": "What is the key property of a matching?",
        "options": [
          "No two selected edges share an endpoint",
          "Every edge must have the same weight",
          "Every vertex must have degree two",
          "All vertices must belong to one cycle"
        ],
        "correctIndex": 0,
        "explanation": "A matching prevents any vertex from being matched more than once."
      },
      {
        "id": "quiz-graphs-set-19-q4",
        "question": "What is the difference between a path and a walk?",
        "options": [
          "A path typically does not repeat vertices, while a walk may repeat vertices",
          "A path must always have weights",
          "A walk cannot contain edges",
          "They are always identical"
        ],
        "correctIndex": 0,
        "explanation": "The exact terminology varies, but a path is commonly defined with no repeated vertices."
      },
      {
        "id": "quiz-graphs-set-19-q5",
        "question": "What is a Hamiltonian path?",
        "options": [
          "A path that visits every vertex exactly once",
          "A path that visits every edge exactly once",
          "The shortest path between two vertices",
          "A path containing only cycles"
        ],
        "correctIndex": 0,
        "explanation": "Hamiltonian paths focus on visiting every vertex exactly once."
      },
      {
        "id": "quiz-graphs-set-19-q6",
        "question": "What is an Eulerian path?",
        "options": [
          "A path that uses every edge exactly once",
          "A path that visits every vertex exactly once",
          "The shortest path in a weighted graph",
          "A path containing only tree edges"
        ],
        "correctIndex": 0,
        "explanation": "Eulerian paths focus on using every edge exactly once."
      },
      {
        "id": "quiz-graphs-set-19-q7",
        "question": "Which statement about Hamiltonian path problems is generally true?",
        "options": [
          "The general Hamiltonian path problem is computationally hard",
          "It is always solvable by BFS in O(V + E)",
          "It is identical to finding an MST",
          "It requires all edge weights to be positive"
        ],
        "correctIndex": 0,
        "explanation": "Hamiltonian path is a classic NP-complete decision problem in general graphs."
      }
    ]
  },
  {
    "id": "quiz-graphs-set-20",
    "topicId": "graphs",
    "title": "Graphs Quiz - Level 20",
    "subtitle": "Advanced questions for Graphs (Set 20/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-graphs-set-20-q1",
        "question": "Which combination represents core advanced graph problem-solving patterns?",
        "options": [
          "BFS/DFS, shortest paths, MST, DSU, topological sorting, SCCs, bridges, flow, and matching",
          "Only adjacency matrices",
          "Only BFS",
          "Only graph drawing"
        ],
        "correctIndex": 0,
        "explanation": "These techniques cover many major graph problems encountered in interviews and competitive programming."
      },
      {
        "id": "quiz-graphs-set-20-q2",
        "question": "When should BFS be preferred over DFS for shortest paths?",
        "options": [
          "When the graph is unweighted and the shortest path is measured by number of edges",
          "Whenever the graph has negative weights",
          "Only for directed cycles",
          "Only for MST problems"
        ],
        "correctIndex": 0,
        "explanation": "BFS guarantees shortest edge-count paths in unweighted graphs."
      },
      {
        "id": "quiz-graphs-set-20-q3",
        "question": "When is Dijkstra a better choice than Bellman-Ford?",
        "options": [
          "When edge weights are non-negative and efficient shortest-path computation is desired",
          "When negative cycles are required",
          "When all edges must be negative",
          "When finding SCCs"
        ],
        "correctIndex": 0,
        "explanation": "Dijkstra is generally faster when its non-negative-weight requirement is satisfied."
      },
      {
        "id": "quiz-graphs-set-20-q4",
        "question": "When is Bellman-Ford preferable to Dijkstra?",
        "options": [
          "When negative edge weights may exist and negative-cycle detection is needed",
          "When all edges are positive and speed is the only concern",
          "When finding an MST",
          "When performing topological sorting"
        ],
        "correctIndex": 0,
        "explanation": "Bellman-Ford supports negative edges and can detect reachable negative cycles."
      },
      {
        "id": "quiz-graphs-set-20-q5",
        "question": "When should you consider Kruskal or Prim instead of Dijkstra?",
        "options": [
          "When the goal is a minimum spanning tree rather than shortest paths from a source",
          "When finding a single-source shortest path",
          "When detecting directed cycles",
          "When finding SCCs"
        ],
        "correctIndex": 0,
        "explanation": "MST algorithms optimize the total cost of connecting all vertices, which is different from shortest-path optimization."
      },
      {
        "id": "quiz-graphs-set-20-q6",
        "question": "If a graph problem involves prerequisites between tasks, which concept should immediately come to mind?",
        "options": [
          "Topological sorting on a directed acyclic graph",
          "Minimum spanning tree",
          "Dijkstra",
          "Binary search"
        ],
        "correctIndex": 0,
        "explanation": "Prerequisite relationships naturally form directed edges and require an ordering that respects dependencies."
      },
      {
        "id": "quiz-graphs-set-20-q7",
        "question": "What should you identify first when solving an unfamiliar graph problem?",
        "options": [
          "Graph type, direction, weights, constraints, required operation, and whether cycles or connectivity matter",
          "Only the number of vertices",
          "Only the largest edge",
          "Only whether DFS exists"
        ],
        "correctIndex": 0,
        "explanation": "Correctly classifying the graph and the required operation helps determine the appropriate algorithm and complexity."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-1",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 1",
    "subtitle": "Beginner questions for Sorting (Set 1/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-sorting-set-1-q1",
        "question": "What is sorting?",
        "options": [
          "Arranging data in a specific order",
          "Removing all duplicate values",
          "Searching for one specific value",
          "Converting data into a graph"
        ],
        "correctIndex": 0,
        "explanation": "Sorting arranges elements according to an ordering rule, such as ascending or descending order."
      },
      {
        "id": "quiz-sorting-set-1-q2",
        "question": "Which order arranges numbers from smallest to largest?",
        "options": [
          "Descending order",
          "Random order",
          "Ascending order",
          "Circular order"
        ],
        "correctIndex": 2,
        "explanation": "Ascending order starts with the smallest value and ends with the largest."
      },
      {
        "id": "quiz-sorting-set-1-q3",
        "question": "Which order arranges numbers from largest to smallest?",
        "options": [
          "Ascending order",
          "Descending order",
          "Lexicographic order",
          "Insertion order"
        ],
        "correctIndex": 1,
        "explanation": "Descending order places larger values before smaller values."
      },
      {
        "id": "quiz-sorting-set-1-q4",
        "question": "Which of these is a sorting algorithm?",
        "options": [
          "Bubble Sort",
          "Binary Search",
          "BFS",
          "Hashing"
        ],
        "correctIndex": 0,
        "explanation": "Bubble Sort is an algorithm specifically designed to arrange elements."
      },
      {
        "id": "quiz-sorting-set-1-q5",
        "question": "What is the result of sorting [4, 2, 1, 3] in ascending order?",
        "options": [
          "[4, 3, 2, 1]",
          "[1, 2, 3, 4]",
          "[2, 4, 1, 3]",
          "[3, 1, 2, 4]"
        ],
        "correctIndex": 1,
        "explanation": "Ascending sorting places the values from smallest to largest."
      },
      {
        "id": "quiz-sorting-set-1-q6",
        "question": "Why is sorting useful?",
        "options": [
          "It can make searching and organizing data easier",
          "It always reduces memory to zero",
          "It removes the need for algorithms",
          "It guarantees O(1) operations"
        ],
        "correctIndex": 0,
        "explanation": "Sorted data can enable efficient searching and makes ordered processing easier."
      },
      {
        "id": "quiz-sorting-set-1-q7",
        "question": "Which data type can commonly be sorted?",
        "options": [
          "Only integers",
          "Only strings",
          "Only floating-point numbers",
          "Numbers, strings, objects, and other comparable data"
        ],
        "correctIndex": 3,
        "explanation": "Anything with a defined comparison rule can generally be sorted."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-2",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 2",
    "subtitle": "Beginner questions for Sorting (Set 2/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-sorting-set-2-q1",
        "question": "What is Bubble Sort based on?",
        "options": [
          "Repeatedly comparing and swapping adjacent elements",
          "Dividing the array into halves recursively",
          "Selecting a pivot",
          "Using a hash table"
        ],
        "correctIndex": 0,
        "explanation": "Bubble Sort repeatedly compares neighboring elements and swaps them when they are out of order."
      },
      {
        "id": "quiz-sorting-set-2-q2",
        "question": "After one complete pass of standard Bubble Sort in ascending order, where does the largest unsorted element move?",
        "options": [
          "To the beginning",
          "To the middle",
          "To the end of the unsorted portion",
          "It is deleted"
        ],
        "correctIndex": 2,
        "explanation": "Larger elements repeatedly move right during a pass."
      },
      {
        "id": "quiz-sorting-set-2-q3",
        "question": "What is the worst-case time complexity of Bubble Sort?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(n2)",
          "O(n log n)"
        ],
        "correctIndex": 2,
        "explanation": "Bubble Sort can perform a quadratic number of comparisons and swaps."
      },
      {
        "id": "quiz-sorting-set-2-q4",
        "question": "What is the best-case time complexity of an optimized Bubble Sort?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "If no swaps occur during the first pass, an optimized Bubble Sort can stop after O(n) work."
      },
      {
        "id": "quiz-sorting-set-2-q5",
        "question": "Is Bubble Sort usually stable?",
        "options": [
          "Yes",
          "No",
          "Only for integers",
          "Only when the array is reversed"
        ],
        "correctIndex": 0,
        "explanation": "Standard Bubble Sort can preserve the relative order of equal elements."
      },
      {
        "id": "quiz-sorting-set-2-q6",
        "question": "Which operation is most central to Bubble Sort?",
        "options": [
          "Hashing",
          "Adjacent swapping",
          "Binary searching",
          "Partitioning around a pivot"
        ],
        "correctIndex": 1,
        "explanation": "Bubble Sort moves elements through repeated adjacent comparisons and swaps."
      },
      {
        "id": "quiz-sorting-set-2-q7",
        "question": "For a very small array, Bubble Sort can still be useful because it is:",
        "options": [
          "Simple to understand and implement",
          "Always the fastest algorithm",
          "Always O(log n)",
          "Memory-free"
        ],
        "correctIndex": 0,
        "explanation": "Bubble Sort is easy to implement, although it is inefficient for large datasets."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-3",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 3",
    "subtitle": "Beginner questions for Sorting (Set 3/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-sorting-set-3-q1",
        "question": "What is Selection Sort based on?",
        "options": [
          "Repeatedly selecting the smallest remaining element",
          "Comparing adjacent elements only",
          "Splitting the array recursively",
          "Using a heap exclusively"
        ],
        "correctIndex": 0,
        "explanation": "Selection Sort finds the minimum element from the unsorted portion and places it at the correct position."
      },
      {
        "id": "quiz-sorting-set-3-q2",
        "question": "What is the typical time complexity of Selection Sort?",
        "options": [
          "O(n log n)",
          "O(n2)",
          "O(log n)",
          "O(n)"
        ],
        "correctIndex": 1,
        "explanation": "Selection Sort scans the remaining unsorted elements for every position."
      },
      {
        "id": "quiz-sorting-set-3-q3",
        "question": "How many major swaps does Selection Sort perform at most?",
        "options": [
          "O(n2)",
          "O(log n)",
          "O(n)",
          "O(1)"
        ],
        "correctIndex": 2,
        "explanation": "Selection Sort typically performs at most one swap for each position."
      },
      {
        "id": "quiz-sorting-set-3-q4",
        "question": "Is standard Selection Sort stable?",
        "options": [
          "Yes, always",
          "No, generally not",
          "Only for strings",
          "Only for sorted input"
        ],
        "correctIndex": 1,
        "explanation": "Swapping the minimum element can change the relative order of equal elements."
      },
      {
        "id": "quiz-sorting-set-3-q5",
        "question": "What happens after the first pass of Selection Sort in ascending order?",
        "options": [
          "The largest value is always at index 0",
          "The smallest value is placed at the first position",
          "The array is completely sorted",
          "The middle element is removed"
        ],
        "correctIndex": 1,
        "explanation": "The first pass selects the minimum from the entire array and places it at the beginning."
      },
      {
        "id": "quiz-sorting-set-3-q6",
        "question": "What is one advantage of Selection Sort?",
        "options": [
          "It performs relatively few swaps",
          "It always runs in O(n log n)",
          "It is stable by default",
          "It requires O(n) extra arrays"
        ],
        "correctIndex": 0,
        "explanation": "Selection Sort performs at most O(n) swaps, which can be useful when writes are expensive."
      },
      {
        "id": "quiz-sorting-set-3-q7",
        "question": "What is the extra space complexity of Selection Sort?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "Selection Sort can be implemented in-place using constant auxiliary space."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-4",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 4",
    "subtitle": "Beginner questions for Sorting (Set 4/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-sorting-set-4-q1",
        "question": "What is Insertion Sort based on?",
        "options": [
          "Building a sorted portion by inserting each new element into its correct position",
          "Selecting a random pivot",
          "Building a heap",
          "Counting frequencies only"
        ],
        "correctIndex": 0,
        "explanation": "Insertion Sort grows a sorted prefix one element at a time."
      },
      {
        "id": "quiz-sorting-set-4-q2",
        "question": "What is the best-case time complexity of Insertion Sort?",
        "options": [
          "O(n2)",
          "O(n)",
          "O(n log n)",
          "O(log n)"
        ],
        "correctIndex": 1,
        "explanation": "When the input is already sorted, each element requires only a constant amount of checking."
      },
      {
        "id": "quiz-sorting-set-4-q3",
        "question": "What is the worst-case time complexity of Insertion Sort?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(n2)",
          "O(1)"
        ],
        "correctIndex": 2,
        "explanation": "Reverse-sorted input can require shifting many elements for every insertion."
      },
      {
        "id": "quiz-sorting-set-4-q4",
        "question": "Is Insertion Sort stable?",
        "options": [
          "Yes, when implemented using shifts rather than swapping equal elements unnecessarily",
          "No, never",
          "Only for negative numbers",
          "Only for arrays of size two"
        ],
        "correctIndex": 0,
        "explanation": "Insertion Sort can preserve the relative order of equal elements."
      },
      {
        "id": "quiz-sorting-set-4-q5",
        "question": "Why is Insertion Sort often good for nearly sorted data?",
        "options": [
          "Few elements need to move",
          "It ignores the input order",
          "It always uses a heap",
          "It becomes O(1)"
        ],
        "correctIndex": 0,
        "explanation": "When elements are close to their correct positions, only a small number of shifts are needed."
      },
      {
        "id": "quiz-sorting-set-4-q6",
        "question": "What is the extra space complexity of iterative Insertion Sort?",
        "options": [
          "O(n2)",
          "O(log n)",
          "O(1)",
          "O(n)"
        ],
        "correctIndex": 2,
        "explanation": "Insertion Sort can sort the array in place using constant auxiliary space."
      },
      {
        "id": "quiz-sorting-set-4-q7",
        "question": "Which sorting algorithm is particularly suitable for online sorting, where elements arrive one at a time?",
        "options": [
          "Insertion Sort",
          "Selection Sort",
          "Heap Sort only",
          "Counting Sort only"
        ],
        "correctIndex": 0,
        "explanation": "Insertion Sort can maintain a sorted prefix as new elements arrive."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-5",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 5",
    "subtitle": "Beginner questions for Sorting (Set 5/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-sorting-set-5-q1",
        "question": "What is Merge Sort based on?",
        "options": [
          "Divide and conquer",
          "Greedy selection only",
          "Hashing",
          "Repeated adjacent swaps only"
        ],
        "correctIndex": 0,
        "explanation": "Merge Sort recursively divides the array and then merges sorted halves."
      },
      {
        "id": "quiz-sorting-set-5-q2",
        "question": "What is the typical time complexity of Merge Sort?",
        "options": [
          "O(n2)",
          "O(n log n)",
          "O(n)",
          "O(log n)"
        ],
        "correctIndex": 1,
        "explanation": "Merge Sort has logarithmic levels of division and linear work per level."
      },
      {
        "id": "quiz-sorting-set-5-q3",
        "question": "What happens during the merge step?",
        "options": [
          "Two sorted sequences are combined into one sorted sequence",
          "The array is randomly shuffled",
          "The largest value is deleted",
          "A pivot is selected"
        ],
        "correctIndex": 0,
        "explanation": "The merge operation compares elements from two sorted halves and produces a sorted result."
      },
      {
        "id": "quiz-sorting-set-5-q4",
        "question": "Is standard Merge Sort stable?",
        "options": [
          "Yes",
          "No",
          "Only for integers",
          "Only when the array is reversed"
        ],
        "correctIndex": 0,
        "explanation": "A properly implemented merge can preserve the order of equal elements."
      },
      {
        "id": "quiz-sorting-set-5-q5",
        "question": "What is the usual extra space complexity of array-based Merge Sort?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "Merging usually requires temporary storage proportional to the number of elements."
      },
      {
        "id": "quiz-sorting-set-5-q6",
        "question": "What is the recursion depth of Merge Sort?",
        "options": [
          "O(n2)",
          "O(log n)",
          "O(1)",
          "O(n)"
        ],
        "correctIndex": 1,
        "explanation": "The array is repeatedly divided in half, producing logarithmic recursion depth."
      },
      {
        "id": "quiz-sorting-set-5-q7",
        "question": "Which task can be efficiently solved using a Merge Sort-style divide-and-conquer approach?",
        "options": [
          "Counting inversions",
          "Finding a graph cycle",
          "Building a trie",
          "Performing BFS"
        ],
        "correctIndex": 0,
        "explanation": "The merge step can count cross-half inversions while sorting."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-6",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 6",
    "subtitle": "Beginner questions for Sorting (Set 6/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-sorting-set-6-q1",
        "question": "What is Quick Sort based on?",
        "options": [
          "Choosing a pivot and partitioning elements around it",
          "Repeatedly finding the minimum only",
          "Building a frequency table only",
          "Using BFS"
        ],
        "correctIndex": 0,
        "explanation": "Quick Sort partitions the array around a pivot and recursively sorts the resulting portions."
      },
      {
        "id": "quiz-sorting-set-6-q2",
        "question": "What does partitioning do in Quick Sort?",
        "options": [
          "Places elements relative to a pivot according to the chosen partition scheme",
          "Completely sorts the entire array immediately",
          "Deletes duplicates",
          "Builds a graph"
        ],
        "correctIndex": 0,
        "explanation": "Partitioning rearranges elements so those on one side satisfy a relation to the pivot."
      },
      {
        "id": "quiz-sorting-set-6-q3",
        "question": "What is the average-case time complexity of Quick Sort with reasonably good pivots?",
        "options": [
          "O(n log n)",
          "O(n2)",
          "O(n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Balanced partitions lead to logarithmic recursion depth and linear work per level."
      },
      {
        "id": "quiz-sorting-set-6-q4",
        "question": "What is the worst-case time complexity of basic Quick Sort?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(n2)",
          "O(n log log n)"
        ],
        "correctIndex": 2,
        "explanation": "Repeatedly choosing extremely unbalanced pivots can produce quadratic work."
      },
      {
        "id": "quiz-sorting-set-6-q5",
        "question": "Which pivot strategy can help reduce the chance of consistently bad partitions?",
        "options": [
          "Randomized pivot selection",
          "Always selecting the first element",
          "Always selecting the smallest element",
          "Never selecting a pivot"
        ],
        "correctIndex": 0,
        "explanation": "Randomization makes consistently pathological input less likely to force bad partitions."
      },
      {
        "id": "quiz-sorting-set-6-q6",
        "question": "Is typical in-place Quick Sort stable?",
        "options": [
          "Yes, always",
          "No, generally not",
          "Only for strings",
          "Only for sorted arrays"
        ],
        "correctIndex": 1,
        "explanation": "Common in-place partitioning can change the relative order of equal elements."
      },
      {
        "id": "quiz-sorting-set-6-q7",
        "question": "Why can Quick Sort be fast in practice despite its worst case?",
        "options": [
          "Good partitioning often gives strong cache behavior and low constant factors",
          "Its worst case never occurs",
          "It always uses O(1) comparisons",
          "It never performs recursion"
        ],
        "correctIndex": 0,
        "explanation": "Quick Sort often performs very well on real hardware because of locality and relatively small constants."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-7",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 7",
    "subtitle": "Intermediate questions for Sorting (Set 7/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-sorting-set-7-q1",
        "question": "What is Heap Sort based on?",
        "options": [
          "A binary heap",
          "A hash map",
          "A linked list",
          "A trie"
        ],
        "correctIndex": 0,
        "explanation": "Heap Sort builds a heap and repeatedly extracts the appropriate extreme element."
      },
      {
        "id": "quiz-sorting-set-7-q2",
        "question": "What is the time complexity of Heap Sort?",
        "options": [
          "O(n2)",
          "O(n log n)",
          "O(n)",
          "O(log n)"
        ],
        "correctIndex": 1,
        "explanation": "Building the heap is O(n), followed by O(n) extractions at O(log n) each."
      },
      {
        "id": "quiz-sorting-set-7-q3",
        "question": "What is a major advantage of Heap Sort over typical Quick Sort?",
        "options": [
          "It guarantees O(n log n) worst-case time",
          "It is always stable",
          "It requires O(n) extra space",
          "It never compares elements"
        ],
        "correctIndex": 0,
        "explanation": "Heap Sort maintains O(n log n) worst-case complexity."
      },
      {
        "id": "quiz-sorting-set-7-q4",
        "question": "What is the auxiliary space complexity of iterative in-place Heap Sort?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "The heap can be maintained inside the input array using constant auxiliary space."
      },
      {
        "id": "quiz-sorting-set-7-q5",
        "question": "Is standard Heap Sort stable?",
        "options": [
          "Yes",
          "No",
          "Only for positive values",
          "Only for strings"
        ],
        "correctIndex": 1,
        "explanation": "Heap operations can move equal elements past each other."
      },
      {
        "id": "quiz-sorting-set-7-q6",
        "question": "For ascending Heap Sort, which heap is commonly used?",
        "options": [
          "Min-heap",
          "Max-heap",
          "Trie",
          "Hash heap"
        ],
        "correctIndex": 1,
        "explanation": "A max-heap allows the largest element to be moved to the end repeatedly."
      },
      {
        "id": "quiz-sorting-set-7-q7",
        "question": "What is the complexity of building a heap using bottom-up heapify?",
        "options": [
          "O(n2)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "correctIndex": 2,
        "explanation": "Bottom-up heap construction runs in linear time."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-8",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 8",
    "subtitle": "Intermediate questions for Sorting (Set 8/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-sorting-set-8-q1",
        "question": "What is Counting Sort based on?",
        "options": [
          "Counting occurrences of values within a manageable range",
          "Comparing every pair of elements",
          "Choosing a pivot",
          "Building a binary tree"
        ],
        "correctIndex": 0,
        "explanation": "Counting Sort uses frequency information rather than comparison-based ordering."
      },
      {
        "id": "quiz-sorting-set-8-q2",
        "question": "When is Counting Sort particularly effective?",
        "options": [
          "When the range of integer keys is reasonably small",
          "When values are arbitrary huge objects",
          "When comparisons are expensive and no key information exists",
          "Only for linked lists"
        ],
        "correctIndex": 0,
        "explanation": "Its performance depends strongly on the range of values."
      },
      {
        "id": "quiz-sorting-set-8-q3",
        "question": "What is the typical time complexity of Counting Sort?",
        "options": [
          "O(n + k), where k is the key range",
          "O(n2)",
          "O(log n)",
          "O(n log n) regardless of k"
        ],
        "correctIndex": 0,
        "explanation": "Counting and processing the range take O(n+k) time."
      },
      {
        "id": "quiz-sorting-set-8-q4",
        "question": "What is a major disadvantage of Counting Sort?",
        "options": [
          "It can use excessive memory when the key range is huge",
          "It cannot sort integers",
          "It always takes O(n2)",
          "It requires a pivot"
        ],
        "correctIndex": 0,
        "explanation": "A large sparse range can make the counting array impractical."
      },
      {
        "id": "quiz-sorting-set-8-q5",
        "question": "Can Counting Sort be stable?",
        "options": [
          "Yes, with a proper cumulative-count/output implementation",
          "No, never",
          "Only for negative numbers",
          "Only with Quick Sort"
        ],
        "correctIndex": 0,
        "explanation": "A stable output placement strategy can preserve the order of equal elements."
      },
      {
        "id": "quiz-sorting-set-8-q6",
        "question": "What kind of sorting is Counting Sort?",
        "options": [
          "Non-comparison-based",
          "Comparison-based",
          "Graph-based",
          "Tree-only"
        ],
        "correctIndex": 0,
        "explanation": "Counting Sort uses key frequencies instead of comparing pairs of elements."
      },
      {
        "id": "quiz-sorting-set-8-q7",
        "question": "If n = 1,000 and the integer range k = 50, which complexity better describes Counting Sort?",
        "options": [
          "O(1,000 + 50)",
          "O(1,0002)",
          "O(log 1,000)",
          "O(502)"
        ],
        "correctIndex": 0,
        "explanation": "Counting Sort runs in O(n+k), so the relevant work is proportional to 1,050."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-9",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 9",
    "subtitle": "Intermediate questions for Sorting (Set 9/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-sorting-set-9-q1",
        "question": "What is Radix Sort based on?",
        "options": [
          "Sorting numbers or strings by processing digits or characters position by position",
          "Repeatedly selecting the minimum",
          "Comparing every pair",
          "Building an MST"
        ],
        "correctIndex": 0,
        "explanation": "Radix Sort processes keys one digit or character position at a time."
      },
      {
        "id": "quiz-sorting-set-9-q2",
        "question": "Which sorting algorithm is commonly used as a stable subroutine in LSD Radix Sort?",
        "options": [
          "Counting Sort",
          "Selection Sort",
          "Quick Sort",
          "Heap Sort"
        ],
        "correctIndex": 0,
        "explanation": "Counting Sort is efficient and stable when the digit range is small."
      },
      {
        "id": "quiz-sorting-set-9-q3",
        "question": "What does LSD mean in LSD Radix Sort?",
        "options": [
          "Least Significant Digit",
          "Largest Sorted Data",
          "Linear Search Division",
          "Last Sorted Direction"
        ],
        "correctIndex": 0,
        "explanation": "LSD Radix Sort starts with the least significant digit and moves toward the most significant."
      },
      {
        "id": "quiz-sorting-set-9-q4",
        "question": "Why must the subroutine used by LSD Radix Sort be stable?",
        "options": [
          "It must preserve ordering established by previously processed less-significant digits",
          "It eliminates all duplicates",
          "It prevents negative values",
          "It guarantees O(1) memory"
        ],
        "correctIndex": 0,
        "explanation": "Stability ensures earlier digit ordering is preserved while processing later digits."
      },
      {
        "id": "quiz-sorting-set-9-q5",
        "question": "What is the typical complexity of Radix Sort for n keys with d digits and base k?",
        "options": [
          "O(d(n + k))",
          "O(n2)",
          "O(log n)",
          "O(n log n) regardless of d"
        ],
        "correctIndex": 0,
        "explanation": "Each digit pass costs O(n+k), and there are d passes."
      },
      {
        "id": "quiz-sorting-set-9-q6",
        "question": "Is Radix Sort comparison-based?",
        "options": [
          "Yes",
          "No",
          "Only for integers",
          "Only for strings"
        ],
        "correctIndex": 1,
        "explanation": "Radix Sort uses digit or character positions rather than pairwise comparisons."
      },
      {
        "id": "quiz-sorting-set-9-q7",
        "question": "What is one limitation of Radix Sort?",
        "options": [
          "It depends on a suitable representation and bounded digit/base processing",
          "It cannot sort integers",
          "It always takes O(n2)",
          "It cannot use stable subroutines"
        ],
        "correctIndex": 0,
        "explanation": "Radix Sort is most effective when keys can be decomposed efficiently into a manageable number of digits."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-10",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 10",
    "subtitle": "Intermediate questions for Sorting (Set 10/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-sorting-set-10-q1",
        "question": "What is Bucket Sort based on?",
        "options": [
          "Distributing elements into buckets and sorting each bucket",
          "Repeatedly choosing a pivot",
          "Building a max-heap only",
          "Comparing adjacent elements"
        ],
        "correctIndex": 0,
        "explanation": "Bucket Sort distributes values into ranges and processes the buckets individually."
      },
      {
        "id": "quiz-sorting-set-10-q2",
        "question": "When can Bucket Sort achieve near-linear performance?",
        "options": [
          "When input values are reasonably uniformly distributed across buckets",
          "When all values are identical",
          "When every bucket contains every element",
          "When the number of buckets is zero"
        ],
        "correctIndex": 0,
        "explanation": "Uniform distribution keeps buckets small and makes their internal sorting inexpensive."
      },
      {
        "id": "quiz-sorting-set-10-q3",
        "question": "What is a potential worst-case complexity of Bucket Sort?",
        "options": [
          "O(n2), depending on the bucket sorting method and distribution",
          "O(1)",
          "O(log n)",
          "Always O(n)"
        ],
        "correctIndex": 0,
        "explanation": "If many elements fall into one bucket and that bucket is sorted with a quadratic algorithm, the overall time can become quadratic."
      },
      {
        "id": "quiz-sorting-set-10-q4",
        "question": "What is one major advantage of Bucket Sort?",
        "options": [
          "It can outperform comparison sorts when distribution assumptions are favorable",
          "It always works without extra memory",
          "It guarantees O(1)",
          "It requires no assumptions"
        ],
        "correctIndex": 0,
        "explanation": "Distribution-aware sorting can be very fast under suitable input assumptions."
      },
      {
        "id": "quiz-sorting-set-10-q5",
        "question": "Which type of data is a classic Bucket Sort example?",
        "options": [
          "Floating-point values distributed approximately uniformly over a known interval",
          "Arbitrary graph nodes",
          "Binary tree pointers",
          "Random objects without comparison or mapping"
        ],
        "correctIndex": 0,
        "explanation": "Values in a known continuous range can be mapped naturally into buckets."
      },
      {
        "id": "quiz-sorting-set-10-q6",
        "question": "Is Bucket Sort comparison-based as a whole?",
        "options": [
          "It can use comparisons inside buckets, but its distribution step is non-comparison-based",
          "Yes, exclusively",
          "No algorithm can sort buckets",
          "It is always a heap algorithm"
        ],
        "correctIndex": 0,
        "explanation": "Bucket placement uses key ranges, while individual buckets may use another sorting method."
      },
      {
        "id": "quiz-sorting-set-10-q7",
        "question": "What is a key design choice in Bucket Sort?",
        "options": [
          "How the value range is divided among buckets",
          "Which graph root to use",
          "Which queue implementation to use",
          "How to balance an AVL tree"
        ],
        "correctIndex": 0,
        "explanation": "Bucket boundaries strongly influence distribution and performance."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-11",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 11",
    "subtitle": "Intermediate questions for Sorting (Set 11/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-sorting-set-11-q1",
        "question": "Which sorting algorithms are comparison-based?",
        "options": [
          "Merge Sort, Quick Sort, Heap Sort, Insertion Sort, Selection Sort, and Bubble Sort",
          "Counting Sort only",
          "Radix Sort only",
          "Counting Sort and Radix Sort only"
        ],
        "correctIndex": 0,
        "explanation": "These algorithms determine order through comparisons between elements."
      },
      {
        "id": "quiz-sorting-set-11-q2",
        "question": "What lower bound applies to comparison-based sorting in the general case?",
        "options": [
          "Omega(n log n)",
          "Omega(1)",
          "Omega(log n)",
          "Omega(n2)"
        ],
        "correctIndex": 0,
        "explanation": "The comparison decision-tree model gives a lower bound of Omega(n log n) for sorting arbitrary elements."
      },
      {
        "id": "quiz-sorting-set-11-q3",
        "question": "Why can Counting Sort beat the comparison-sorting lower bound?",
        "options": [
          "It uses additional information about the keys rather than only comparisons",
          "It performs more comparisons",
          "It ignores the input",
          "The lower bound applies to all algorithms without exception"
        ],
        "correctIndex": 0,
        "explanation": "The Omega(n log n) bound applies to comparison-based sorting, not algorithms that exploit key structure."
      },
      {
        "id": "quiz-sorting-set-11-q4",
        "question": "Which sorting algorithms typically guarantee O(n log n) worst-case time?",
        "options": [
          "Merge Sort and Heap Sort",
          "Bubble Sort and Selection Sort",
          "Insertion Sort and Bubble Sort",
          "Quick Sort without any precautions"
        ],
        "correctIndex": 0,
        "explanation": "Merge Sort and Heap Sort have O(n log n) worst-case bounds."
      },
      {
        "id": "quiz-sorting-set-11-q5",
        "question": "Which algorithm has O(n2) worst-case but O(n log n) average time?",
        "options": [
          "Quick Sort",
          "Merge Sort",
          "Heap Sort",
          "Counting Sort"
        ],
        "correctIndex": 0,
        "explanation": "Quick Sort's average performance is O(n log n), but poor partitions can lead to O(n2)."
      },
      {
        "id": "quiz-sorting-set-11-q6",
        "question": "Which algorithms can have O(n) best-case behavior on already sorted data under suitable implementations?",
        "options": [
          "Insertion Sort and optimized Bubble Sort",
          "Merge Sort only",
          "Heap Sort only",
          "Selection Sort only"
        ],
        "correctIndex": 0,
        "explanation": "Insertion Sort and optimized Bubble Sort can detect or exploit already ordered input."
      },
      {
        "id": "quiz-sorting-set-11-q7",
        "question": "What does Omega notation represent?",
        "options": [
          "An asymptotic lower bound",
          "An exact runtime",
          "An asymptotic upper bound only",
          "Memory usage only"
        ],
        "correctIndex": 0,
        "explanation": "Omega describes a lower bound on growth."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-12",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 12",
    "subtitle": "Intermediate questions for Sorting (Set 12/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-sorting-set-12-q1",
        "question": "What does stable sorting mean?",
        "options": [
          "Equal-key elements retain their relative order",
          "The algorithm never uses recursion",
          "The algorithm always runs in O(n)",
          "The array cannot contain duplicates"
        ],
        "correctIndex": 0,
        "explanation": "Stability preserves the original ordering among elements with equal keys."
      },
      {
        "id": "quiz-sorting-set-12-q2",
        "question": "Which is a common stable sorting algorithm?",
        "options": [
          "Merge Sort",
          "Heap Sort",
          "Typical in-place Quick Sort",
          "Selection Sort"
        ],
        "correctIndex": 0,
        "explanation": "Merge Sort can be implemented stably by taking the left equal element first during merging."
      },
      {
        "id": "quiz-sorting-set-12-q3",
        "question": "Why is stability useful when sorting records by multiple fields?",
        "options": [
          "A stable second sort can preserve ordering established by an earlier sort on another field",
          "It removes duplicate records",
          "It guarantees O(1) memory",
          "It avoids comparisons entirely"
        ],
        "correctIndex": 0,
        "explanation": "Stable sorting allows multi-pass sorting by preserving the previous ordering among equal keys."
      },
      {
        "id": "quiz-sorting-set-12-q4",
        "question": "What does in-place sorting generally mean?",
        "options": [
          "The algorithm uses O(1) or small auxiliary memory beyond the input",
          "The algorithm always uses no variables",
          "The algorithm requires O(n) extra arrays",
          "The algorithm sorts only linked lists"
        ],
        "correctIndex": 0,
        "explanation": "In-place algorithms perform most rearrangement within the input structure."
      },
      {
        "id": "quiz-sorting-set-12-q5",
        "question": "Which algorithm is naturally in-place among the following?",
        "options": [
          "Heap Sort",
          "Standard array Merge Sort",
          "Counting Sort",
          "Typical external Merge Sort"
        ],
        "correctIndex": 0,
        "explanation": "Heap Sort can rearrange elements directly inside the input array."
      },
      {
        "id": "quiz-sorting-set-12-q6",
        "question": "Which combination best describes standard Merge Sort on arrays?",
        "options": [
          "Stable and typically requires O(n) auxiliary memory",
          "Unstable and O(1) memory always",
          "Stable and always O(1) memory",
          "Unstable and O(n2) time"
        ],
        "correctIndex": 0,
        "explanation": "Typical array Merge Sort is stable but requires auxiliary storage for merging."
      },
      {
        "id": "quiz-sorting-set-12-q7",
        "question": "Which property is independent of time complexity?",
        "options": [
          "Stability",
          "Number of comparisons",
          "Running time",
          "Asymptotic complexity"
        ],
        "correctIndex": 0,
        "explanation": "Stability describes how equal elements are treated, not how quickly the algorithm runs."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-13",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 13",
    "subtitle": "Intermediate questions for Sorting (Set 13/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-sorting-set-13-q1",
        "question": "What is an inversion in an array?",
        "options": [
          "A pair (i, j) where i < j but a[i] > a[j]",
          "Two equal adjacent values",
          "The maximum array element",
          "A pair where i > j and a[i] < a[j]"
        ],
        "correctIndex": 0,
        "explanation": "An inversion represents a pair that is out of ascending order."
      },
      {
        "id": "quiz-sorting-set-13-q2",
        "question": "What is the maximum number of inversions in an array of n distinct elements?",
        "options": [
          "n",
          "n(n-1)/2",
          "n2",
          "n log n"
        ],
        "correctIndex": 1,
        "explanation": "A reverse-sorted array has every possible pair inverted, giving n(n-1)/2 inversions."
      },
      {
        "id": "quiz-sorting-set-13-q3",
        "question": "How can Merge Sort count inversions efficiently?",
        "options": [
          "Count cross-half inversions during the merge step",
          "Compare only adjacent values once",
          "Use a heap without merging",
          "Count only duplicate values"
        ],
        "correctIndex": 0,
        "explanation": "When an element from the right half is chosen before remaining left elements, all those remaining left elements form inversions with it."
      },
      {
        "id": "quiz-sorting-set-13-q4",
        "question": "What is the complexity of counting inversions using modified Merge Sort?",
        "options": [
          "O(n log n)",
          "O(n2)",
          "O(n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "The merge-sort structure counts inversions while retaining O(n log n) complexity."
      },
      {
        "id": "quiz-sorting-set-13-q5",
        "question": "How many inversions are in [3, 1, 2]?",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "correctIndex": 1,
        "explanation": "The inversions are (3,1) and (3,2), giving a total of 2."
      },
      {
        "id": "quiz-sorting-set-13-q6",
        "question": "What does a high inversion count generally indicate?",
        "options": [
          "The array is far from being sorted in ascending order",
          "The array contains no duplicates",
          "The array is already sorted",
          "The array must be a heap"
        ],
        "correctIndex": 0,
        "explanation": "More inversions mean more pairs are out of ascending order."
      },
      {
        "id": "quiz-sorting-set-13-q7",
        "question": "What is the inversion count of an already ascending array with distinct elements?",
        "options": [
          "n2",
          "n(n-1)/2",
          "0",
          "n-1"
        ],
        "correctIndex": 2,
        "explanation": "No pair is out of order in an ascending array."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-14",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 14",
    "subtitle": "Advanced questions for Sorting (Set 14/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-sorting-set-14-q1",
        "question": "What is a common Quick Sort partition invariant?",
        "options": [
          "Elements in one region satisfy a relation to the pivot and elements in the other region satisfy the opposite relation",
          "Every element becomes globally sorted after one partition",
          "All duplicates are deleted",
          "The array becomes a heap"
        ],
        "correctIndex": 0,
        "explanation": "Partitioning establishes a relationship between regions and the pivot without necessarily fully sorting them."
      },
      {
        "id": "quiz-sorting-set-14-q2",
        "question": "What happens if Quick Sort repeatedly chooses the smallest element as pivot?",
        "options": [
          "Partitions can become highly unbalanced",
          "The algorithm becomes O(1)",
          "The array becomes a heap",
          "It guarantees O(n log n)"
        ],
        "correctIndex": 0,
        "explanation": "One side may contain nearly all remaining elements, causing quadratic behavior."
      },
      {
        "id": "quiz-sorting-set-14-q3",
        "question": "Why can randomized Quick Sort have good expected performance?",
        "options": [
          "Random pivot choices make consistently bad partitions unlikely",
          "Randomization removes comparisons",
          "Randomization guarantees perfectly balanced partitions",
          "Randomization makes sorting O(n)"
        ],
        "correctIndex": 0,
        "explanation": "Randomization reduces the likelihood of repeatedly selecting poor pivots."
      },
      {
        "id": "quiz-sorting-set-14-q4",
        "question": "What is tail-recursion optimization in Quick Sort commonly used for?",
        "options": [
          "Reducing recursion stack usage by recursively processing the smaller partition first",
          "Increasing the number of comparisons",
          "Making the pivot random",
          "Removing partitioning"
        ],
        "correctIndex": 0,
        "explanation": "Processing the smaller side recursively can keep stack depth logarithmic when combined with iterative processing of the larger side."
      },
      {
        "id": "quiz-sorting-set-14-q5",
        "question": "Why is three-way partitioning useful when an array contains many duplicate values?",
        "options": [
          "It separates elements into less-than, equal-to, and greater-than pivot regions",
          "It removes all duplicates",
          "It guarantees O(1) sorting time",
          "It converts the array into a heap"
        ],
        "correctIndex": 0,
        "explanation": "Grouping equal values avoids repeatedly processing large groups of duplicates."
      },
      {
        "id": "quiz-sorting-set-14-q6",
        "question": "Which Quick Sort variant is especially useful for arrays with many duplicate keys?",
        "options": [
          "Three-way Quick Sort",
          "Selection Sort",
          "Counting Sort only",
          "Heap Sort only"
        ],
        "correctIndex": 0,
        "explanation": "Three-way partitioning efficiently handles large equal-key regions."
      },
      {
        "id": "quiz-sorting-set-14-q7",
        "question": "What is the average recursion depth of well-balanced Quick Sort?",
        "options": [
          "O(log n)",
          "O(n2)",
          "O(n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Balanced partitions reduce the problem size by a constant factor at each level."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-15",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 15",
    "subtitle": "Advanced questions for Sorting (Set 15/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-sorting-set-15-q1",
        "question": "Which sorting algorithm is often preferred when guaranteed O(n log n) time and stability are both important?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Heap Sort",
          "Selection Sort"
        ],
        "correctIndex": 0,
        "explanation": "Merge Sort provides O(n log n) worst-case time and can be stable."
      },
      {
        "id": "quiz-sorting-set-15-q2",
        "question": "Which algorithm provides O(n log n) worst-case time and can be implemented in-place, but is not stable by default?",
        "options": [
          "Heap Sort",
          "Merge Sort",
          "Insertion Sort",
          "Bubble Sort"
        ],
        "correctIndex": 0,
        "explanation": "Heap Sort offers guaranteed O(n log n) time with constant auxiliary space in a typical in-place implementation."
      },
      {
        "id": "quiz-sorting-set-15-q3",
        "question": "For a nearly sorted array, which algorithm is often particularly efficient?",
        "options": [
          "Insertion Sort",
          "Selection Sort",
          "Heap Sort",
          "Counting Sort regardless of key range"
        ],
        "correctIndex": 0,
        "explanation": "Insertion Sort performs well when elements require only a small number of shifts."
      },
      {
        "id": "quiz-sorting-set-15-q4",
        "question": "For integers in a small known range, which algorithm can be especially efficient?",
        "options": [
          "Counting Sort",
          "Quick Sort only",
          "Heap Sort only",
          "Selection Sort"
        ],
        "correctIndex": 0,
        "explanation": "Counting Sort exploits the small key range to achieve O(n+k) time."
      },
      {
        "id": "quiz-sorting-set-15-q5",
        "question": "For fixed-length integers with many digits and a manageable digit base, which algorithm can be highly effective?",
        "options": [
          "Radix Sort",
          "Selection Sort",
          "Bubble Sort",
          "Binary Search"
        ],
        "correctIndex": 0,
        "explanation": "Radix Sort processes each digit position and can achieve near-linear performance under suitable conditions."
      },
      {
        "id": "quiz-sorting-set-15-q6",
        "question": "If memory is extremely limited and worst-case O(n log n) time is required, which is a strong candidate?",
        "options": [
          "Heap Sort",
          "Merge Sort",
          "Counting Sort",
          "Bucket Sort"
        ],
        "correctIndex": 0,
        "explanation": "Heap Sort can provide O(n log n) worst-case time with O(1) auxiliary space."
      },
      {
        "id": "quiz-sorting-set-15-q7",
        "question": "If you need a stable sort and the input is stored as a linked list, which algorithm is commonly attractive?",
        "options": [
          "Merge Sort",
          "Heap Sort",
          "Selection Sort",
          "Typical array Quick Sort"
        ],
        "correctIndex": 0,
        "explanation": "Merge Sort works naturally with linked lists because merging can be performed through pointer manipulation."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-16",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 16",
    "subtitle": "Advanced questions for Sorting (Set 16/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-sorting-set-16-q1",
        "question": "What is external sorting?",
        "options": [
          "Sorting data that does not fit entirely in main memory",
          "Sorting only external files by filename",
          "Sorting graph edges",
          "Sorting only linked lists"
        ],
        "correctIndex": 0,
        "explanation": "External sorting is designed for datasets larger than available RAM."
      },
      {
        "id": "quiz-sorting-set-16-q2",
        "question": "Which algorithm is commonly used for external sorting?",
        "options": [
          "External Merge Sort",
          "Bubble Sort",
          "Selection Sort",
          "Binary Search"
        ],
        "correctIndex": 0,
        "explanation": "External Merge Sort divides data into manageable sorted runs and merges them."
      },
      {
        "id": "quiz-sorting-set-16-q3",
        "question": "Why is Merge Sort well suited to external sorting?",
        "options": [
          "It can process sequential runs efficiently with limited memory",
          "It requires all data to fit in RAM",
          "It never accesses storage",
          "It needs random access to every element"
        ],
        "correctIndex": 0,
        "explanation": "External merging can read and write large runs sequentially, reducing expensive random I/O."
      },
      {
        "id": "quiz-sorting-set-16-q4",
        "question": "What is a sorted run in external sorting?",
        "options": [
          "A portion of data that has been sorted before the merge phase",
          "An unsorted graph",
          "A heap root",
          "A single duplicate value"
        ],
        "correctIndex": 0,
        "explanation": "Large input is split into chunks, each sorted into a run before the runs are merged."
      },
      {
        "id": "quiz-sorting-set-16-q5",
        "question": "What is a key bottleneck in external sorting?",
        "options": [
          "Disk or storage I/O",
          "Only CPU arithmetic",
          "The number of variable names",
          "The number of recursion functions"
        ],
        "correctIndex": 0,
        "explanation": "Reading and writing data between storage and memory can dominate runtime."
      },
      {
        "id": "quiz-sorting-set-16-q6",
        "question": "Why can multiway merging improve external sorting?",
        "options": [
          "It can merge several sorted runs in one pass, reducing the number of merge rounds",
          "It eliminates sorting",
          "It avoids reading files",
          "It always uses O(1) disk space"
        ],
        "correctIndex": 0,
        "explanation": "Merging more runs at once can reduce the number of sequential passes over the data."
      },
      {
        "id": "quiz-sorting-set-16-q7",
        "question": "What data structure is commonly used to efficiently perform a multiway merge?",
        "options": [
          "Min-heap",
          "Stack",
          "DFS tree",
          "Hash set only"
        ],
        "correctIndex": 0,
        "explanation": "A min-heap can track the smallest current element among multiple sorted runs."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-17",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 17",
    "subtitle": "Advanced questions for Sorting (Set 17/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-sorting-set-17-q1",
        "question": "What is IntroSort?",
        "options": [
          "A hybrid sorting algorithm that begins like Quick Sort and switches strategies when recursion becomes too deep",
          "A version of Insertion Sort for strings",
          "A graph traversal algorithm",
          "A counting-only algorithm"
        ],
        "correctIndex": 0,
        "explanation": "IntroSort combines Quick Sort's practical speed with a fallback such as Heap Sort to avoid quadratic worst cases."
      },
      {
        "id": "quiz-sorting-set-17-q2",
        "question": "Why does IntroSort switch away from Quick Sort?",
        "options": [
          "To prevent excessive recursion depth and protect worst-case performance",
          "Because Quick Sort cannot compare values",
          "Because arrays cannot be partitioned",
          "To make the algorithm stable"
        ],
        "correctIndex": 0,
        "explanation": "The fallback prevents pathological Quick Sort behavior from causing excessive runtime."
      },
      {
        "id": "quiz-sorting-set-17-q3",
        "question": "Which algorithm is commonly used as the fallback in IntroSort?",
        "options": [
          "Heap Sort",
          "Bubble Sort",
          "Counting Sort",
          "BFS"
        ],
        "correctIndex": 0,
        "explanation": "Heap Sort provides a guaranteed O(n log n) worst-case bound."
      },
      {
        "id": "quiz-sorting-set-17-q4",
        "question": "What is TimSort?",
        "options": [
          "A hybrid stable sorting algorithm derived from Merge Sort and Insertion Sort ideas",
          "A graph shortest-path algorithm",
          "A heap construction algorithm",
          "A counting-only algorithm"
        ],
        "correctIndex": 0,
        "explanation": "TimSort exploits naturally occurring ordered runs and combines them efficiently."
      },
      {
        "id": "quiz-sorting-set-17-q5",
        "question": "Why can TimSort perform very well on partially sorted data?",
        "options": [
          "It detects and exploits existing ordered runs",
          "It ignores existing ordering",
          "It always uses random pivots",
          "It converts data to a graph"
        ],
        "correctIndex": 0,
        "explanation": "Existing runs reduce the amount of work needed to establish global order."
      },
      {
        "id": "quiz-sorting-set-17-q6",
        "question": "Which property is associated with TimSort?",
        "options": [
          "Stability",
          "Guaranteed O(1) extra memory",
          "Negative-edge support",
          "Heap-only operation"
        ],
        "correctIndex": 0,
        "explanation": "TimSort is designed as a stable sorting algorithm."
      },
      {
        "id": "quiz-sorting-set-17-q7",
        "question": "Why are hybrid sorting algorithms useful?",
        "options": [
          "They combine strengths of different algorithms for practical performance",
          "They eliminate all complexity",
          "They always use more comparisons",
          "They only work on integers"
        ],
        "correctIndex": 0,
        "explanation": "Different algorithms perform well under different conditions, so hybrids can adapt to the input."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-18",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 18",
    "subtitle": "Advanced questions for Sorting (Set 18/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-sorting-set-18-q1",
        "question": "What is the key idea behind sorting by custom comparator?",
        "options": [
          "Define how two elements should be ordered instead of relying only on their natural order",
          "Remove all comparisons",
          "Sort only integers",
          "Use BFS instead of sorting"
        ],
        "correctIndex": 0,
        "explanation": "A comparator lets the programmer define the desired ordering."
      },
      {
        "id": "quiz-sorting-set-18-q2",
        "question": "If sorting strings by decreasing length, what should the comparator prioritize?",
        "options": [
          "Larger string length before smaller string length",
          "Alphabetical order only",
          "Smaller length before larger length",
          "Random ordering"
        ],
        "correctIndex": 0,
        "explanation": "The comparator should place longer strings before shorter strings."
      },
      {
        "id": "quiz-sorting-set-18-q3",
        "question": "For sorting intervals by starting point, what should happen when two intervals have the same start?",
        "options": [
          "Use a secondary rule such as ending point if required by the problem",
          "Always delete one interval",
          "Reverse the entire array",
          "The intervals become invalid"
        ],
        "correctIndex": 0,
        "explanation": "A tie-breaker creates a deterministic order and may be important for downstream algorithms."
      },
      {
        "id": "quiz-sorting-set-18-q4",
        "question": "What is a common strategy for sorting objects by multiple fields?",
        "options": [
          "Compare the primary field first and use secondary fields as tie-breakers",
          "Ignore all fields except the last",
          "Randomize equal values",
          "Sort each field independently without combining results"
        ],
        "correctIndex": 0,
        "explanation": "Lexicographic comparison across fields provides a well-defined multi-key ordering."
      },
      {
        "id": "quiz-sorting-set-18-q5",
        "question": "Why must a comparator be consistent?",
        "options": [
          "An inconsistent ordering can cause sorting algorithms to behave incorrectly or unpredictably",
          "Consistency makes memory O(1)",
          "It removes duplicates automatically",
          "It prevents all recursion"
        ],
        "correctIndex": 0,
        "explanation": "Sorting relies on the comparator defining a coherent ordering relationship."
      },
      {
        "id": "quiz-sorting-set-18-q6",
        "question": "Which sorting problem often uses a custom comparator to form the largest number?",
        "options": [
          "Arrange numbers so that concatenating them produces the largest possible value",
          "Sort numbers by memory address",
          "Find the minimum spanning tree",
          "Find graph cycles"
        ],
        "correctIndex": 0,
        "explanation": "For strings a and b, comparing a+b with b+a determines which should come first."
      },
      {
        "id": "quiz-sorting-set-18-q7",
        "question": "For strings a and b in the largest-number problem, which comparison determines their order?",
        "options": [
          "Compare a+b with b+a",
          "Compare only a.length and b.length",
          "Compare only the first character",
          "Compare their memory addresses"
        ],
        "correctIndex": 0,
        "explanation": "The concatenation comparison determines which ordering gives the larger combined result."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-19",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 19",
    "subtitle": "Advanced questions for Sorting (Set 19/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-sorting-set-19-q1",
        "question": "You need the kth smallest element without fully sorting the array. Which technique is often appropriate?",
        "options": [
          "Quickselect",
          "Bubble Sort only",
          "Merge Sort only",
          "Counting Sort regardless of values"
        ],
        "correctIndex": 0,
        "explanation": "Quickselect uses partitioning to focus only on the side containing the desired rank."
      },
      {
        "id": "quiz-sorting-set-19-q2",
        "question": "What is the average time complexity of Quickselect?",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n2) always",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Good partitions reduce the remaining search space substantially, giving linear expected time."
      },
      {
        "id": "quiz-sorting-set-19-q3",
        "question": "What is the worst-case complexity of basic Quickselect?",
        "options": [
          "O(n2)",
          "O(n)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Repeatedly choosing extremely poor pivots can reduce the problem by only one element each time."
      },
      {
        "id": "quiz-sorting-set-19-q4",
        "question": "Why can Quickselect be faster than fully sorting when only one order statistic is required?",
        "options": [
          "It discards the irrelevant partition after each step",
          "It sorts every element twice",
          "It uses Merge Sort internally",
          "It never compares elements"
        ],
        "correctIndex": 0,
        "explanation": "Only the partition containing the target rank needs further processing."
      },
      {
        "id": "quiz-sorting-set-19-q5",
        "question": "What is the median-of-medians technique designed to provide?",
        "options": [
          "A deterministic linear-time selection algorithm in the worst case",
          "A stable O(n log n) sorting algorithm",
          "A graph traversal",
          "A hashing method"
        ],
        "correctIndex": 0,
        "explanation": "Median-of-medians chooses a pivot with guaranteed quality, yielding worst-case O(n) selection."
      },
      {
        "id": "quiz-sorting-set-19-q6",
        "question": "What is an important distinction between Quickselect and Quick Sort?",
        "options": [
          "Quickselect only needs to determine one rank and does not fully sort both partitions",
          "Quickselect always uses a heap",
          "Quick Sort cannot use partitioning",
          "They always perform exactly the same work"
        ],
        "correctIndex": 0,
        "explanation": "Quickselect focuses on the target side while Quick Sort recursively processes both sides."
      },
      {
        "id": "quiz-sorting-set-19-q7",
        "question": "Which problem is an order-statistic problem?",
        "options": [
          "Finding the kth largest element",
          "Finding whether a graph is bipartite",
          "Finding an MST",
          "Finding a tree's LCA"
        ],
        "correctIndex": 0,
        "explanation": "Order statistics ask for the element occupying a particular sorted rank."
      }
    ]
  },
  {
    "id": "quiz-sorting-set-20",
    "topicId": "sorting",
    "title": "Sorting Quiz - Level 20",
    "subtitle": "Advanced questions for Sorting (Set 20/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-sorting-set-20-q1",
        "question": "You have 10 million records, need stable sorting, and memory is available for auxiliary arrays. Which is a strong general choice?",
        "options": [
          "Merge Sort or a stable optimized hybrid such as TimSort",
          "Selection Sort",
          "Bubble Sort",
          "Unoptimized Quick Sort only"
        ],
        "correctIndex": 0,
        "explanation": "Stable O(n log n) algorithms are appropriate for large datasets when stability matters."
      },
      {
        "id": "quiz-sorting-set-20-q2",
        "question": "You have integers from 0 to 100 and millions of elements. Which approach can exploit the small key range?",
        "options": [
          "Counting Sort",
          "Quick Sort only",
          "Heap Sort only",
          "Insertion Sort only"
        ],
        "correctIndex": 0,
        "explanation": "The small key range makes frequency counting extremely efficient."
      },
      {
        "id": "quiz-sorting-set-20-q3",
        "question": "You have a huge dataset that cannot fit into RAM. What should you primarily consider?",
        "options": [
          "External Merge Sort and minimizing storage I/O",
          "Bubble Sort in RAM",
          "Quick Sort requiring the entire dataset in memory",
          "Selection Sort only"
        ],
        "correctIndex": 0,
        "explanation": "External sorting is designed around limited memory and efficient sequential storage access."
      },
      {
        "id": "quiz-sorting-set-20-q4",
        "question": "You need the median of an unsorted array but do not need the complete sorted order. What is an efficient approach?",
        "options": [
          "Quickselect",
          "Bubble Sort",
          "Selection Sort",
          "Heap Sort only"
        ],
        "correctIndex": 0,
        "explanation": "Quickselect can find an order statistic without fully sorting the array."
      },
      {
        "id": "quiz-sorting-set-20-q5",
        "question": "Why can no comparison-based sorting algorithm have a general worst-case complexity better than Omega(n log n)?",
        "options": [
          "Its decision tree must distinguish among n! possible input orderings",
          "Arrays always contain n2 elements",
          "Comparisons require constant memory only",
          "Every sorting algorithm must use recursion"
        ],
        "correctIndex": 0,
        "explanation": "Distinguishing n! permutations requires a decision tree with logarithmic depth Omega(log(n!)) = Omega(n log n)."
      },
      {
        "id": "quiz-sorting-set-20-q6",
        "question": "Which factor should you consider when choosing a sorting algorithm for a real application?",
        "options": [
          "Input size, data distribution, stability, memory, worst-case guarantees, and key structure",
          "Only the algorithm's name",
          "Only the number of lines of code",
          "Only whether recursion is used"
        ],
        "correctIndex": 0,
        "explanation": "The best algorithm depends on the data, constraints, required guarantees, and system environment."
      },
      {
        "id": "quiz-sorting-set-20-q7",
        "question": "What is the most important mindset when solving an advanced sorting problem?",
        "options": [
          "Identify what the problem actually requires before deciding whether to fully sort, partially sort, count, partition, or exploit key structure",
          "Always use Quick Sort",
          "Always use Merge Sort",
          "Always sort the entire input first"
        ],
        "correctIndex": 0,
        "explanation": "Many advanced problems become easier when you recognize that full sorting may not be necessary and choose the technique that matches the required operation."
      }
    ]
  },
  {
    "id": "quiz-searching-set-1",
    "topicId": "searching",
    "title": "Searching Quiz - Level 1",
    "subtitle": "Beginner questions for Searching (Set 1/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-searching-set-1-q1",
        "question": "What is searching in data structures?",
        "options": [
          "Finding a specific element or determining whether it exists",
          "Arranging elements in ascending order",
          "Deleting every duplicate element",
          "Converting an array into a tree"
        ],
        "correctIndex": 0,
        "explanation": "Searching is the process of locating a target element or checking whether it exists in a data structure."
      },
      {
        "id": "quiz-searching-set-1-q2",
        "question": "Which searching technique checks elements one by one from the beginning?",
        "options": [
          "Binary Search",
          "Linear Search",
          "Jump Search",
          "Interpolation Search"
        ],
        "correctIndex": 1,
        "explanation": "Linear Search examines elements sequentially until the target is found or the data ends."
      },
      {
        "id": "quiz-searching-set-1-q3",
        "question": "What is the result of searching for 5 in [2, 4, 5, 7]?",
        "options": [
          "The element is not present",
          "The element is present",
          "The array must be sorted again",
          "The array becomes empty"
        ],
        "correctIndex": 1,
        "explanation": "The value 5 exists at index 2."
      },
      {
        "id": "quiz-searching-set-1-q4",
        "question": "Which operation is a common example of searching?",
        "options": [
          "Finding a student's record by ID",
          "Reversing an array",
          "Sorting numbers",
          "Deleting a stack"
        ],
        "correctIndex": 0,
        "explanation": "Looking up a record based on an identifier is a searching operation."
      },
      {
        "id": "quiz-searching-set-1-q5",
        "question": "Does Linear Search require the array to be sorted?",
        "options": [
          "Yes, always",
          "No",
          "Only when there are duplicates",
          "Only for strings"
        ],
        "correctIndex": 1,
        "explanation": "Linear Search can work on sorted or unsorted data."
      },
      {
        "id": "quiz-searching-set-1-q6",
        "question": "What does a successful search normally return?",
        "options": [
          "An indication or position of the target",
          "A completely sorted array",
          "The largest element",
          "The number of duplicates only"
        ],
        "correctIndex": 0,
        "explanation": "A search operation commonly returns the target's position, reference, or a success indicator."
      },
      {
        "id": "quiz-searching-set-1-q7",
        "question": "Which data structure can be searched using an index?",
        "options": [
          "Array",
          "Only graphs",
          "Only stacks",
          "Only queues"
        ],
        "correctIndex": 0,
        "explanation": "Arrays provide direct indexed access, which can be useful when searching."
      }
    ]
  },
  {
    "id": "quiz-searching-set-2",
    "topicId": "searching",
    "title": "Searching Quiz - Level 2",
    "subtitle": "Beginner questions for Searching (Set 2/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-searching-set-2-q1",
        "question": "What is the worst-case time complexity of Linear Search?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(1)",
          "O(n log n)"
        ],
        "correctIndex": 1,
        "explanation": "In the worst case, Linear Search may inspect every element."
      },
      {
        "id": "quiz-searching-set-2-q2",
        "question": "What is the best-case time complexity of Linear Search?",
        "options": [
          "O(n2)",
          "O(n)",
          "O(1)",
          "O(log n)"
        ],
        "correctIndex": 2,
        "explanation": "If the target is the first element, only one comparison is needed."
      },
      {
        "id": "quiz-searching-set-2-q3",
        "question": "What happens if Linear Search does not find the target?",
        "options": [
          "It normally checks all elements and returns a not-found result",
          "It automatically sorts the array",
          "It performs Binary Search",
          "It deletes the array"
        ],
        "correctIndex": 0,
        "explanation": "Linear Search continues until every relevant element has been checked."
      },
      {
        "id": "quiz-searching-set-2-q4",
        "question": "How many comparisons may Linear Search need to find the last element in an array of n elements?",
        "options": [
          "1",
          "log n",
          "n",
          "n/2 always"
        ],
        "correctIndex": 2,
        "explanation": "If the target is last, every element must be checked."
      },
      {
        "id": "quiz-searching-set-2-q5",
        "question": "Which situation is suitable for Linear Search?",
        "options": [
          "Searching a small unsorted collection",
          "Searching a huge sorted array where O(log n) is required",
          "Finding shortest paths",
          "Sorting a graph"
        ],
        "correctIndex": 0,
        "explanation": "For small or unsorted data, the simplicity of Linear Search can be sufficient."
      },
      {
        "id": "quiz-searching-set-2-q6",
        "question": "What is the auxiliary space complexity of a simple iterative Linear Search?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "Only a constant amount of extra variables is needed."
      },
      {
        "id": "quiz-searching-set-2-q7",
        "question": "If the target appears multiple times, what can Linear Search return?",
        "options": [
          "The first occurrence, depending on implementation",
          "Only the largest occurrence",
          "It must return every occurrence",
          "It cannot handle duplicates"
        ],
        "correctIndex": 0,
        "explanation": "A typical Linear Search stops at the first matching element, though it can be modified to find all occurrences."
      }
    ]
  },
  {
    "id": "quiz-searching-set-3",
    "topicId": "searching",
    "title": "Searching Quiz - Level 3",
    "subtitle": "Beginner questions for Searching (Set 3/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-searching-set-3-q1",
        "question": "What is the main requirement for standard Binary Search?",
        "options": [
          "The data must be sorted according to the search ordering",
          "The data must contain unique values",
          "The data must be stored in a linked list",
          "The data must contain only positive numbers"
        ],
        "correctIndex": 0,
        "explanation": "Binary Search relies on sorted order to eliminate half of the search space."
      },
      {
        "id": "quiz-searching-set-3-q2",
        "question": "What does Binary Search do at each step?",
        "options": [
          "Checks the middle element and eliminates one half of the search range",
          "Checks every element",
          "Randomly chooses an element",
          "Sorts the entire array"
        ],
        "correctIndex": 0,
        "explanation": "The comparison with the middle element determines which half can be discarded."
      },
      {
        "id": "quiz-searching-set-3-q3",
        "question": "What is the typical time complexity of Binary Search?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 2,
        "explanation": "The search interval is approximately halved after each comparison."
      },
      {
        "id": "quiz-searching-set-3-q4",
        "question": "What is the best-case time complexity of Binary Search?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "If the target is exactly the first middle element checked, only one comparison is needed."
      },
      {
        "id": "quiz-searching-set-3-q5",
        "question": "If the target is smaller than the middle element, which half is searched next?",
        "options": [
          "The right half",
          "The left half",
          "The entire array",
          "Neither half"
        ],
        "correctIndex": 1,
        "explanation": "Because the array is sorted, all elements to the right of the middle are too large."
      },
      {
        "id": "quiz-searching-set-3-q6",
        "question": "Which variables are commonly used in iterative Binary Search?",
        "options": [
          "left, right, and mid",
          "front, rear, and top",
          "parent, child, and root",
          "source, destination, and weight"
        ],
        "correctIndex": 0,
        "explanation": "These variables represent the current search interval and its midpoint."
      },
      {
        "id": "quiz-searching-set-3-q7",
        "question": "For [1, 3, 5, 7, 9], what is the first middle value?",
        "options": [
          "1",
          "3",
          "5",
          "9"
        ],
        "correctIndex": 2,
        "explanation": "The middle index points to 5."
      }
    ]
  },
  {
    "id": "quiz-searching-set-4",
    "topicId": "searching",
    "title": "Searching Quiz - Level 4",
    "subtitle": "Beginner questions for Searching (Set 4/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-searching-set-4-q1",
        "question": "What happens when Binary Search finds the target at mid?",
        "options": [
          "It can immediately return the target position",
          "It must search both halves",
          "It sorts the array",
          "It deletes mid"
        ],
        "correctIndex": 0,
        "explanation": "Once the target equals the middle value, the search is successful."
      },
      {
        "id": "quiz-searching-set-4-q2",
        "question": "What should happen when the search interval becomes invalid?",
        "options": [
          "Return that the target was not found",
          "Restart from the beginning",
          "Sort the array",
          "Double the array size"
        ],
        "correctIndex": 0,
        "explanation": "An empty search interval means no remaining element can match the target."
      },
      {
        "id": "quiz-searching-set-4-q3",
        "question": "Which condition commonly represents a valid inclusive Binary Search interval?",
        "options": [
          "left <= right",
          "left > right",
          "left == right + 2",
          "right < 0"
        ],
        "correctIndex": 0,
        "explanation": "With inclusive boundaries, the interval remains valid while left is less than or equal to right."
      },
      {
        "id": "quiz-searching-set-4-q4",
        "question": "Which expression is safer for calculating mid in many languages to avoid integer overflow?",
        "options": [
          "(left + right) / 2",
          "left + (right - left) / 2",
          "left * right",
          "right - left * 2"
        ],
        "correctIndex": 1,
        "explanation": "left + (right - left) / 2 avoids adding two potentially large indices before division."
      },
      {
        "id": "quiz-searching-set-4-q5",
        "question": "What happens if target > arr[mid] in an ascending sorted array?",
        "options": [
          "Search the left half",
          "Search the right half",
          "Return immediately",
          "Reverse the array"
        ],
        "correctIndex": 1,
        "explanation": "All values at or before mid are too small, so the search moves right."
      },
      {
        "id": "quiz-searching-set-4-q6",
        "question": "Can Binary Search work on descending sorted data?",
        "options": [
          "Yes, if the comparisons are adjusted for descending order",
          "No, never",
          "Only for strings",
          "Only when duplicates exist"
        ],
        "correctIndex": 0,
        "explanation": "Binary Search requires an ordering, but the comparison direction can be adapted."
      },
      {
        "id": "quiz-searching-set-4-q7",
        "question": "What is the main reason Binary Search is faster than Linear Search on large sorted arrays?",
        "options": [
          "It eliminates roughly half of the remaining search space each step",
          "It checks every element simultaneously",
          "It never performs comparisons",
          "It uses hashing automatically"
        ],
        "correctIndex": 0,
        "explanation": "Repeatedly halving the search space leads to logarithmic complexity."
      }
    ]
  },
  {
    "id": "quiz-searching-set-5",
    "topicId": "searching",
    "title": "Searching Quiz - Level 5",
    "subtitle": "Beginner questions for Searching (Set 5/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-searching-set-5-q1",
        "question": "What should Binary Search return if the target does not exist?",
        "options": [
          "A not-found indicator such as -1, depending on the API",
          "Always 0",
          "The largest value",
          "The array length squared"
        ],
        "correctIndex": 0,
        "explanation": "Many implementations use -1 or another sentinel to indicate that the target is absent."
      },
      {
        "id": "quiz-searching-set-5-q2",
        "question": "What is the main difference between recursive and iterative Binary Search?",
        "options": [
          "Recursive uses function calls, while iterative uses a loop",
          "Recursive requires sorted data but iterative does not",
          "Iterative cannot find values",
          "They use completely different search principles"
        ],
        "correctIndex": 0,
        "explanation": "Both use the same halving strategy but differ in implementation style."
      },
      {
        "id": "quiz-searching-set-5-q3",
        "question": "What extra space does recursive Binary Search typically use?",
        "options": [
          "O(log n) call stack space",
          "O(n2)",
          "O(1) always",
          "O(n)"
        ],
        "correctIndex": 0,
        "explanation": "Each recursive call reduces the range by about half, resulting in logarithmic recursion depth."
      },
      {
        "id": "quiz-searching-set-5-q4",
        "question": "What extra space does iterative Binary Search typically use?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 2,
        "explanation": "The iterative version needs only a few index variables."
      },
      {
        "id": "quiz-searching-set-5-q5",
        "question": "What is an important edge case in Binary Search?",
        "options": [
          "An empty array",
          "An array containing exactly one element",
          "A target equal to the first element",
          "All of these"
        ],
        "correctIndex": 3,
        "explanation": "Correctly handling empty, single-element, boundary, and duplicate cases is essential."
      },
      {
        "id": "quiz-searching-set-5-q6",
        "question": "For a one-element array [8], what should Binary Search return when searching for 8?",
        "options": [
          "0",
          "1",
          "-1",
          "8"
        ],
        "correctIndex": 0,
        "explanation": "The only element is located at index 0."
      },
      {
        "id": "quiz-searching-set-5-q7",
        "question": "For an empty array, what should a standard index-returning search report?",
        "options": [
          "The target index is 0",
          "Not found",
          "The target is the empty value",
          "The last index"
        ],
        "correctIndex": 1,
        "explanation": "An empty array contains no target, so the search should return its not-found result."
      }
    ]
  },
  {
    "id": "quiz-searching-set-6",
    "topicId": "searching",
    "title": "Searching Quiz - Level 6",
    "subtitle": "Beginner questions for Searching (Set 6/20)",
    "questionCount": 7,
    "difficulty": "Beginner",
    "questions": [
      {
        "id": "quiz-searching-set-6-q1",
        "question": "What is the first occurrence of a value?",
        "options": [
          "The smallest index where that value appears",
          "The largest index where it appears",
          "The value itself",
          "The number of times it appears"
        ],
        "correctIndex": 0,
        "explanation": "The first occurrence is the leftmost position containing the target."
      },
      {
        "id": "quiz-searching-set-6-q2",
        "question": "In [1, 2, 2, 2, 4], what is the first occurrence of 2?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctIndex": 1,
        "explanation": "The first 2 appears at index 1."
      },
      {
        "id": "quiz-searching-set-6-q3",
        "question": "What is the last occurrence of a value?",
        "options": [
          "The smallest index where it appears",
          "The largest index where it appears",
          "The value's frequency",
          "The middle occurrence"
        ],
        "correctIndex": 1,
        "explanation": "The last occurrence is the rightmost position containing the target."
      },
      {
        "id": "quiz-searching-set-6-q4",
        "question": "In [1, 2, 2, 2, 4], what is the last occurrence of 2?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctIndex": 2,
        "explanation": "The rightmost 2 is at index 3."
      },
      {
        "id": "quiz-searching-set-6-q5",
        "question": "Can Binary Search be modified to find the first occurrence?",
        "options": [
          "Yes",
          "No",
          "Only with unsorted arrays",
          "Only when there are no duplicates"
        ],
        "correctIndex": 0,
        "explanation": "After finding the target, the search can continue toward the left to locate the first occurrence."
      },
      {
        "id": "quiz-searching-set-6-q6",
        "question": "Can Binary Search be modified to find the last occurrence?",
        "options": [
          "Yes",
          "No",
          "Only for strings",
          "Only for unique values"
        ],
        "correctIndex": 0,
        "explanation": "After finding the target, the search can continue toward the right."
      },
      {
        "id": "quiz-searching-set-6-q7",
        "question": "What is the time complexity of finding the first occurrence using modified Binary Search?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(n2)",
          "O(1) always"
        ],
        "correctIndex": 1,
        "explanation": "The search still halves the range at every step."
      }
    ]
  },
  {
    "id": "quiz-searching-set-7",
    "topicId": "searching",
    "title": "Searching Quiz - Level 7",
    "subtitle": "Intermediate questions for Searching (Set 7/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-searching-set-7-q1",
        "question": "What is a lower bound in a sorted array?",
        "options": [
          "The first position where the value is greater than or equal to the target",
          "The last position smaller than the target",
          "The smallest array value",
          "The first element of the array"
        ],
        "correctIndex": 0,
        "explanation": "Lower bound identifies the first index whose value is at least the target."
      },
      {
        "id": "quiz-searching-set-7-q2",
        "question": "What is an upper bound in a sorted array?",
        "options": [
          "The first position where the value is strictly greater than the target",
          "The last position smaller than the target",
          "The largest array value",
          "The first index always"
        ],
        "correctIndex": 0,
        "explanation": "Upper bound returns the first index containing a value greater than the target."
      },
      {
        "id": "quiz-searching-set-7-q3",
        "question": "For [1, 2, 2, 4, 5], what is lower_bound(2)?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctIndex": 1,
        "explanation": "Index 1 is the first position where the value is at least 2."
      },
      {
        "id": "quiz-searching-set-7-q4",
        "question": "For [1, 2, 2, 4, 5], what is upper_bound(2)?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctIndex": 2,
        "explanation": "Index 2 is the first position containing a value greater than 2."
      },
      {
        "id": "quiz-searching-set-7-q5",
        "question": "How can the frequency of a target be found using lower and upper bounds?",
        "options": [
          "upper_bound(target) - lower_bound(target)",
          "lower_bound + upper_bound",
          "upper_bound × lower_bound",
          "lower_bound - upper_bound"
        ],
        "correctIndex": 0,
        "explanation": "The difference gives the number of positions occupied by the target."
      },
      {
        "id": "quiz-searching-set-7-q6",
        "question": "What is the complexity of lower_bound using Binary Search?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(n2)",
          "O(1) always"
        ],
        "correctIndex": 1,
        "explanation": "The search interval is halved at every step."
      },
      {
        "id": "quiz-searching-set-7-q7",
        "question": "If lower_bound(target) returns n, what does that mean?",
        "options": [
          "Every element is smaller than the target",
          "The target is definitely at index n",
          "The array is unsorted",
          "The target occurs n times"
        ],
        "correctIndex": 0,
        "explanation": "Returning n means no valid index exists whose value is at least the target."
      }
    ]
  },
  {
    "id": "quiz-searching-set-8",
    "topicId": "searching",
    "title": "Searching Quiz - Level 8",
    "subtitle": "Intermediate questions for Searching (Set 8/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-searching-set-8-q1",
        "question": "What is the purpose of searching in a rotated sorted array?",
        "options": [
          "Find a target efficiently despite the sorted order being split at a rotation point",
          "Sort the array again",
          "Remove the rotation",
          "Convert it into a linked list"
        ],
        "correctIndex": 0,
        "explanation": "A rotated sorted array retains useful ordering in at least one portion."
      },
      {
        "id": "quiz-searching-set-8-q2",
        "question": "Which property helps Binary Search work on a rotated sorted array?",
        "options": [
          "At least one of the two halves around mid is normally sorted",
          "Every half is completely random",
          "The array must contain no elements",
          "All elements must be equal"
        ],
        "correctIndex": 0,
        "explanation": "The sorted half can be used to determine whether the target lies within it."
      },
      {
        "id": "quiz-searching-set-8-q3",
        "question": "For [4,5,6,7,0,1,2], what is the rotation point?",
        "options": [
          "Index 0",
          "Index 2",
          "Index 4",
          "Index 6"
        ],
        "correctIndex": 2,
        "explanation": "The smallest value 0 begins at index 4 after the rotation."
      },
      {
        "id": "quiz-searching-set-8-q4",
        "question": "In [4,5,6,7,0,1,2], which side is sorted when mid = 3?",
        "options": [
          "Left side [4,5,6,7]",
          "Right side [0,1,2]",
          "Neither side",
          "The entire array"
        ],
        "correctIndex": 0,
        "explanation": "The left portion from index 0 through 3 is sorted."
      },
      {
        "id": "quiz-searching-set-8-q5",
        "question": "What is the typical complexity of searching a rotated sorted array without duplicates?",
        "options": [
          "O(log n)",
          "O(n2)",
          "O(n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "The sorted-half property allows the search space to be halved."
      },
      {
        "id": "quiz-searching-set-8-q6",
        "question": "Why can duplicates complicate rotated-array Binary Search?",
        "options": [
          "Equal boundary and middle values can make it unclear which half is sorted",
          "Duplicates make comparisons impossible",
          "Duplicates always sort the array",
          "Binary Search cannot store duplicates"
        ],
        "correctIndex": 0,
        "explanation": "When values are equal, the usual sorted-half decision may become ambiguous."
      },
      {
        "id": "quiz-searching-set-8-q7",
        "question": "What may be required when duplicates make both halves ambiguous?",
        "options": [
          "Shrink the search boundaries cautiously",
          "Immediately sort the entire array",
          "Delete all duplicates",
          "Switch to BFS"
        ],
        "correctIndex": 0,
        "explanation": "Moving boundaries inward can resolve the ambiguity, though worst-case complexity may degrade."
      }
    ]
  },
  {
    "id": "quiz-searching-set-9",
    "topicId": "searching",
    "title": "Searching Quiz - Level 9",
    "subtitle": "Intermediate questions for Searching (Set 9/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-searching-set-9-q1",
        "question": "What is a peak element?",
        "options": [
          "An element that is greater than its relevant neighbors",
          "The smallest element",
          "The first element always",
          "An element that appears twice"
        ],
        "correctIndex": 0,
        "explanation": "A peak is an element that is not smaller than its neighboring values under the problem's boundary definition."
      },
      {
        "id": "quiz-searching-set-9-q2",
        "question": "Can a peak element be found using Binary Search-like reasoning?",
        "options": [
          "Yes",
          "No",
          "Only after sorting",
          "Only with a hash map"
        ],
        "correctIndex": 0,
        "explanation": "Comparing neighboring values can indicate which direction contains a peak."
      },
      {
        "id": "quiz-searching-set-9-q3",
        "question": "If arr[mid] < arr[mid + 1], which direction can contain a peak?",
        "options": [
          "The right side",
          "Only the left side",
          "Neither side",
          "Only index 0"
        ],
        "correctIndex": 0,
        "explanation": "An increasing slope toward the right guarantees that a peak exists somewhere on the right boundary or beyond."
      },
      {
        "id": "quiz-searching-set-9-q4",
        "question": "What is the complexity of finding a peak using binary-search reasoning?",
        "options": [
          "O(log n)",
          "O(n2)",
          "O(n)",
          "O(1) always"
        ],
        "correctIndex": 0,
        "explanation": "Each comparison can eliminate roughly half of the candidate range."
      },
      {
        "id": "quiz-searching-set-9-q5",
        "question": "Does the array need to be globally sorted to find a peak using this method?",
        "options": [
          "No",
          "Yes, always",
          "Only if it contains duplicates",
          "Only if n is even"
        ],
        "correctIndex": 0,
        "explanation": "The method relies on local comparisons rather than global sorted order."
      },
      {
        "id": "quiz-searching-set-9-q6",
        "question": "For [1, 2, 3, 1], which index is a peak?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctIndex": 2,
        "explanation": "Value 3 at index 2 is greater than both neighboring values."
      },
      {
        "id": "quiz-searching-set-9-q7",
        "question": "What makes peak finding a useful Binary Search pattern?",
        "options": [
          "A local comparison can tell which half must contain a valid answer",
          "The array must be sorted",
          "It always finds the global maximum",
          "It requires hashing"
        ],
        "correctIndex": 0,
        "explanation": "The key idea is eliminating half the search space using local structure."
      }
    ]
  },
  {
    "id": "quiz-searching-set-10",
    "topicId": "searching",
    "title": "Searching Quiz - Level 10",
    "subtitle": "Intermediate questions for Searching (Set 10/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-searching-set-10-q1",
        "question": "What is Jump Search?",
        "options": [
          "A search technique that jumps ahead by fixed-size blocks and then performs a linear scan",
          "A recursive graph traversal",
          "A hashing algorithm",
          "A tree balancing algorithm"
        ],
        "correctIndex": 0,
        "explanation": "Jump Search uses block jumps followed by a linear search within the relevant block."
      },
      {
        "id": "quiz-searching-set-10-q2",
        "question": "What condition does Jump Search require?",
        "options": [
          "The data should be sorted",
          "The data must be completely unsorted",
          "The data must be a graph",
          "The data must contain unique values"
        ],
        "correctIndex": 0,
        "explanation": "Sorted order allows the algorithm to skip blocks that cannot contain the target."
      },
      {
        "id": "quiz-searching-set-10-q3",
        "question": "What is the optimal jump size for basic Jump Search on n elements?",
        "options": [
          "n",
          "√n",
          "log n",
          "n/2"
        ],
        "correctIndex": 1,
        "explanation": "A block size around √n balances the number of jumps and the final linear scan."
      },
      {
        "id": "quiz-searching-set-10-q4",
        "question": "What is the typical time complexity of Jump Search?",
        "options": [
          "O(√n)",
          "O(log n)",
          "O(n2)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "With √n-sized jumps, both the jumping and final scanning work are O(√n)."
      },
      {
        "id": "quiz-searching-set-10-q5",
        "question": "Compared with Binary Search, Jump Search is generally:",
        "options": [
          "Slower asymptotically but can be useful in certain access models",
          "Always faster",
          "Exactly the same complexity",
          "Only applicable to graphs"
        ],
        "correctIndex": 0,
        "explanation": "Binary Search achieves O(log n), while Jump Search typically achieves O(√n)."
      },
      {
        "id": "quiz-searching-set-10-q6",
        "question": "What happens after Jump Search identifies the block that may contain the target?",
        "options": [
          "It performs a linear search within that block",
          "It sorts the block",
          "It deletes the block",
          "It starts BFS"
        ],
        "correctIndex": 0,
        "explanation": "The final block is searched sequentially."
      },
      {
        "id": "quiz-searching-set-10-q7",
        "question": "Why might Jump Search be considered in some practical scenarios?",
        "options": [
          "Its block-based access pattern can suit some systems better than arbitrary midpoint access",
          "It always has the best asymptotic complexity",
          "It does not require sorted data",
          "It never performs comparisons"
        ],
        "correctIndex": 0,
        "explanation": "The usefulness of a search algorithm depends not only on asymptotic complexity but also on the underlying access pattern."
      }
    ]
  },
  {
    "id": "quiz-searching-set-11",
    "topicId": "searching",
    "title": "Searching Quiz - Level 11",
    "subtitle": "Intermediate questions for Searching (Set 11/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-searching-set-11-q1",
        "question": "What is Interpolation Search designed for?",
        "options": [
          "Searching sorted data where values are approximately uniformly distributed",
          "Searching arbitrary graphs",
          "Searching unsorted linked lists only",
          "Searching stacks"
        ],
        "correctIndex": 0,
        "explanation": "Interpolation Search estimates where a target should be based on its value."
      },
      {
        "id": "quiz-searching-set-11-q2",
        "question": "How does Interpolation Search choose a likely position?",
        "options": [
          "Using the target's value relative to the values at the current boundaries",
          "Always choosing the midpoint",
          "Choosing a random index",
          "Choosing the first element"
        ],
        "correctIndex": 0,
        "explanation": "It estimates the target's position using a proportional formula."
      },
      {
        "id": "quiz-searching-set-11-q3",
        "question": "What is the average complexity of Interpolation Search under favorable uniform-distribution assumptions?",
        "options": [
          "O(log log n)",
          "O(n2)",
          "O(n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "For uniformly distributed keys, interpolation can narrow the search much faster than Binary Search."
      },
      {
        "id": "quiz-searching-set-11-q4",
        "question": "What is the worst-case complexity of Interpolation Search?",
        "options": [
          "O(n)",
          "O(log log n)",
          "O(1)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Poorly distributed data can cause the estimated positions to be ineffective."
      },
      {
        "id": "quiz-searching-set-11-q5",
        "question": "What is a major assumption behind efficient Interpolation Search?",
        "options": [
          "Values are reasonably uniformly distributed",
          "All values are identical",
          "The array is unsorted",
          "The data is a graph"
        ],
        "correctIndex": 0,
        "explanation": "Uniform distribution makes value-based position estimation useful."
      },
      {
        "id": "quiz-searching-set-11-q6",
        "question": "Which formula conceptually estimates the interpolation position?",
        "options": [
          "low + ((target - arr[low]) / (arr[high] - arr[low])) × (high - low)",
          "low + high2",
          "target × high",
          "low - target"
        ],
        "correctIndex": 0,
        "explanation": "The formula estimates the position proportionally within the value range."
      },
      {
        "id": "quiz-searching-set-11-q7",
        "question": "Which search is generally safer as a default for arbitrary sorted data?",
        "options": [
          "Binary Search",
          "Interpolation Search",
          "Linear Search only",
          "Jump Search only"
        ],
        "correctIndex": 0,
        "explanation": "Binary Search provides predictable O(log n) behavior without requiring uniform value distribution."
      }
    ]
  },
  {
    "id": "quiz-searching-set-12",
    "topicId": "searching",
    "title": "Searching Quiz - Level 12",
    "subtitle": "Intermediate questions for Searching (Set 12/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-searching-set-12-q1",
        "question": "What is Exponential Search useful for?",
        "options": [
          "Finding a range containing the target and then applying Binary Search",
          "Sorting an array",
          "Searching only graphs",
          "Building a heap"
        ],
        "correctIndex": 0,
        "explanation": "Exponential Search expands the search boundary rapidly before using Binary Search."
      },
      {
        "id": "quiz-searching-set-12-q2",
        "question": "How does Exponential Search typically expand its range?",
        "options": [
          "By repeatedly doubling the index",
          "By increasing the index by exactly one",
          "By randomly choosing indices",
          "By sorting the array first"
        ],
        "correctIndex": 0,
        "explanation": "Indices often progress as 1, 2, 4, 8, 16, and so on."
      },
      {
        "id": "quiz-searching-set-12-q3",
        "question": "What is the complexity of Exponential Search for a target at position i?",
        "options": [
          "O(log i)",
          "O(i2)",
          "O(n2)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "The exponential phase and subsequent binary search depend logarithmically on the target position."
      },
      {
        "id": "quiz-searching-set-12-q4",
        "question": "What is the overall worst-case complexity of Exponential Search on n elements?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n2)",
          "O(√n)"
        ],
        "correctIndex": 0,
        "explanation": "The search range reaches n after O(log n) doubling steps."
      },
      {
        "id": "quiz-searching-set-12-q5",
        "question": "Why can Exponential Search be useful for unbounded or conceptually infinite sorted arrays?",
        "options": [
          "It can find a finite range containing the target without knowing the array length initially",
          "It does not require sorted data",
          "It sorts the infinite array",
          "It uses no comparisons"
        ],
        "correctIndex": 0,
        "explanation": "Doubling the boundary lets the algorithm locate a region before performing Binary Search."
      },
      {
        "id": "quiz-searching-set-12-q6",
        "question": "After finding an upper bound where the target may exist, what algorithm is commonly used?",
        "options": [
          "Binary Search",
          "Bubble Sort",
          "DFS",
          "Kruskal"
        ],
        "correctIndex": 0,
        "explanation": "Binary Search efficiently searches the identified bounded interval."
      },
      {
        "id": "quiz-searching-set-12-q7",
        "question": "What key requirement does Exponential Search share with Binary Search?",
        "options": [
          "The relevant data must be sorted",
          "The data must be a graph",
          "The data must contain no duplicates",
          "The data must have integer values"
        ],
        "correctIndex": 0,
        "explanation": "Both algorithms rely on ordered data to eliminate impossible regions."
      }
    ]
  },
  {
    "id": "quiz-searching-set-13",
    "topicId": "searching",
    "title": "Searching Quiz - Level 13",
    "subtitle": "Intermediate questions for Searching (Set 13/20)",
    "questionCount": 7,
    "difficulty": "Intermediate",
    "questions": [
      {
        "id": "quiz-searching-set-13-q1",
        "question": "What is binary search on the answer?",
        "options": [
          "Binary searching over a range of possible answers rather than directly over array indices",
          "Searching an array twice",
          "Searching only binary numbers",
          "Sorting before every comparison"
        ],
        "correctIndex": 0,
        "explanation": "The technique applies Binary Search to a numeric answer space when feasibility is monotonic."
      },
      {
        "id": "quiz-searching-set-13-q2",
        "question": "What is required for binary search on the answer to work?",
        "options": [
          "A monotonic feasibility condition",
          "An unsorted array",
          "A graph with no edges",
          "Unique array elements"
        ],
        "correctIndex": 0,
        "explanation": "The feasible/infeasible outcomes must change in one direction across the answer range."
      },
      {
        "id": "quiz-searching-set-13-q3",
        "question": "Suppose a problem asks for the minimum capacity that makes a schedule possible. What technique may apply?",
        "options": [
          "Binary Search on the capacity",
          "Bubble Sort",
          "DFS only",
          "Hashing only"
        ],
        "correctIndex": 0,
        "explanation": "If feasibility becomes true once capacity is large enough, the answer space is monotonic."
      },
      {
        "id": "quiz-searching-set-13-q4",
        "question": "What does the feasibility function usually answer?",
        "options": [
          "Whether a candidate answer satisfies the problem constraints",
          "Whether the array is sorted alphabetically",
          "How many duplicates exist",
          "Which graph vertex is largest"
        ],
        "correctIndex": 0,
        "explanation": "The feasibility check determines whether a candidate value is sufficient or valid."
      },
      {
        "id": "quiz-searching-set-13-q5",
        "question": "If feasibility is false for small values and true for all sufficiently large values, what should Binary Search find?",
        "options": [
          "The first feasible value",
          "The largest infeasible value only",
          "A random feasible value",
          "The median array element"
        ],
        "correctIndex": 0,
        "explanation": "The boundary between false and true contains the minimum feasible answer."
      },
      {
        "id": "quiz-searching-set-13-q6",
        "question": "What is the complexity of binary search on answer if the answer range has R possibilities and feasibility costs O(F)?",
        "options": [
          "O(F log R)",
          "O(R2)",
          "O(F + R)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Binary Search performs O(log R) feasibility checks."
      },
      {
        "id": "quiz-searching-set-13-q7",
        "question": "Which problem is a classic example of binary search on answer?",
        "options": [
          "Minimizing the maximum load when splitting work among workers",
          "Finding an exact value in an unsorted array",
          "Counting characters in a string",
          "Finding a tree's root"
        ],
        "correctIndex": 0,
        "explanation": "Load-balancing problems often have a monotonic feasibility condition on the maximum allowed load."
      }
    ]
  },
  {
    "id": "quiz-searching-set-14",
    "topicId": "searching",
    "title": "Searching Quiz - Level 14",
    "subtitle": "Advanced questions for Searching (Set 14/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-searching-set-14-q1",
        "question": "What is a monotonic predicate?",
        "options": [
          "A condition whose truth values change in only one direction over the search domain",
          "A predicate that is always false",
          "A random Boolean function",
          "A function that sorts an array"
        ],
        "correctIndex": 0,
        "explanation": "For example, a predicate may be false for all values below a threshold and true afterward."
      },
      {
        "id": "quiz-searching-set-14-q2",
        "question": "Why is monotonicity important in advanced Binary Search problems?",
        "options": [
          "It allows half of the candidate answer space to be eliminated",
          "It removes the need for a feasibility check",
          "It guarantees O(1)",
          "It sorts the input"
        ],
        "correctIndex": 0,
        "explanation": "Monotonic behavior allows the search to identify a boundary efficiently."
      },
      {
        "id": "quiz-searching-set-14-q3",
        "question": "Which is a monotonic sequence of Boolean outcomes suitable for first-true Binary Search?",
        "options": [
          "[false, false, false, true, true, true]",
          "[false, true, false, true]",
          "[true, false, true]",
          "[true, false, false, true]"
        ],
        "correctIndex": 0,
        "explanation": "The values transition from false to true only once."
      },
      {
        "id": "quiz-searching-set-14-q4",
        "question": "Which is NOT monotonic?",
        "options": [
          "[false, false, true, true]",
          "[true, true, true, false]",
          "[false, true, false, true]",
          "[false, false, false, false]"
        ],
        "correctIndex": 2,
        "explanation": "The third sequence changes from true back to false and then true again."
      },
      {
        "id": "quiz-searching-set-14-q5",
        "question": "What boundary does a first-true Binary Search usually locate?",
        "options": [
          "The smallest index where the predicate becomes true",
          "The largest index where it is false only",
          "The middle index regardless of values",
          "The maximum input value"
        ],
        "correctIndex": 0,
        "explanation": "The goal is to find the earliest feasible position."
      },
      {
        "id": "quiz-searching-set-14-q6",
        "question": "What boundary does a last-true Binary Search locate?",
        "options": [
          "The largest index where the predicate remains true",
          "The first false index only",
          "The minimum array value",
          "The middle element"
        ],
        "correctIndex": 0,
        "explanation": "It identifies the rightmost feasible position."
      },
      {
        "id": "quiz-searching-set-14-q7",
        "question": "What is a common source of bugs in boundary Binary Search?",
        "options": [
          "Incorrect loop conditions or failure to maintain the search invariant",
          "Using integers",
          "Having a sorted input",
          "Using comparisons"
        ],
        "correctIndex": 0,
        "explanation": "Boundary searches require precise definitions of what each interval represents."
      }
    ]
  },
  {
    "id": "quiz-searching-set-15",
    "topicId": "searching",
    "title": "Searching Quiz - Level 15",
    "subtitle": "Advanced questions for Searching (Set 15/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-searching-set-15-q1",
        "question": "You are given a sorted array and need the first index where arr[i] >= target. Which pattern should you use?",
        "options": [
          "Lower Bound Binary Search",
          "Linear Search only",
          "DFS",
          "Hashing"
        ],
        "correctIndex": 0,
        "explanation": "Lower Bound directly finds the first position satisfying arr[i] >= target."
      },
      {
        "id": "quiz-searching-set-15-q2",
        "question": "You need the number of occurrences of x in a sorted array. Which approach is efficient?",
        "options": [
          "upper_bound(x) - lower_bound(x)",
          "Only search for x once",
          "Sort the array again",
          "Use DFS"
        ],
        "correctIndex": 0,
        "explanation": "The distance between the upper and lower bounds equals the frequency."
      },
      {
        "id": "quiz-searching-set-15-q3",
        "question": "You need to find the minimum element in a rotated sorted array without duplicates. What complexity should you target?",
        "options": [
          "O(log n)",
          "O(n2)",
          "O(n log n)",
          "O(1) for every input"
        ],
        "correctIndex": 0,
        "explanation": "The sorted structure allows the minimum to be located with a Binary Search variant."
      },
      {
        "id": "quiz-searching-set-15-q4",
        "question": "For [4,5,6,7,0,1,2], if mid points to 7 and arr[mid] > arr[right], where should the minimum lie?",
        "options": [
          "To the right of mid",
          "To the left of mid including mid",
          "Outside the array",
          "It must be at index 0"
        ],
        "correctIndex": 0,
        "explanation": "A value larger than the right boundary indicates the rotation point and minimum are to the right."
      },
      {
        "id": "quiz-searching-set-15-q5",
        "question": "What is the main challenge when searching a rotated sorted array with duplicates?",
        "options": [
          "Duplicates can prevent determining which side is sorted",
          "Duplicates make arrays unsortable",
          "Binary Search cannot compare duplicates",
          "The array must be converted to a tree"
        ],
        "correctIndex": 0,
        "explanation": "Equal values can make both sides appear equally plausible."
      },
      {
        "id": "quiz-searching-set-15-q6",
        "question": "If arr[mid] == arr[left] == arr[right] in a rotated-array search with duplicates, what may be necessary?",
        "options": [
          "Shrink left and right boundaries",
          "Return false immediately",
          "Sort the array",
          "Set mid to zero permanently"
        ],
        "correctIndex": 0,
        "explanation": "Shrinking boundaries removes redundant equal elements and allows progress."
      },
      {
        "id": "quiz-searching-set-15-q7",
        "question": "What can the worst-case complexity become for rotated-array search with many duplicates?",
        "options": [
          "O(n)",
          "O(log log n)",
          "O(1)",
          "O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "If duplicates repeatedly prevent eliminating half the range, the algorithm may degrade to linear time."
      }
    ]
  },
  {
    "id": "quiz-searching-set-16",
    "topicId": "searching",
    "title": "Searching Quiz - Level 16",
    "subtitle": "Advanced questions for Searching (Set 16/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-searching-set-16-q1",
        "question": "What is ternary search commonly used for in algorithmic problems?",
        "options": [
          "Finding the maximum or minimum of a unimodal function or sequence",
          "Searching arbitrary unsorted arrays for exact values",
          "Finding graph cycles",
          "Sorting linked lists"
        ],
        "correctIndex": 0,
        "explanation": "Ternary Search is useful when the search space has a single peak or valley and comparisons can determine which third to discard."
      },
      {
        "id": "quiz-searching-set-16-q2",
        "question": "What does unimodal mean in this context?",
        "options": [
          "The function increases and then decreases, or decreases and then increases",
          "Every value is identical",
          "The array is completely random",
          "The function has infinitely many peaks"
        ],
        "correctIndex": 0,
        "explanation": "A unimodal function has one dominant peak or valley over the relevant domain."
      },
      {
        "id": "quiz-searching-set-16-q3",
        "question": "How many internal points does standard Ternary Search use?",
        "options": [
          "One",
          "Two",
          "Three",
          "n"
        ],
        "correctIndex": 1,
        "explanation": "The interval is divided into three sections using two internal points."
      },
      {
        "id": "quiz-searching-set-16-q4",
        "question": "Can Binary Search also find the maximum of a unimodal sequence?",
        "options": [
          "Yes, using a slope-based comparison",
          "No, never",
          "Only after sorting",
          "Only with a hash map"
        ],
        "correctIndex": 0,
        "explanation": "Comparing adjacent values can determine whether the peak lies left or right of the current point."
      },
      {
        "id": "quiz-searching-set-16-q5",
        "question": "What is a common reason Binary Search is preferred over Ternary Search for unimodal optimization?",
        "options": [
          "Binary Search often uses fewer evaluations and is simpler",
          "Ternary Search cannot find maxima",
          "Binary Search does not need any comparisons",
          "Ternary Search always runs in O(n)"
        ],
        "correctIndex": 0,
        "explanation": "Although both can work, binary-style elimination can be more efficient depending on the evaluation model."
      },
      {
        "id": "quiz-searching-set-16-q6",
        "question": "What is the asymptotic complexity of Ternary Search over a discrete range?",
        "options": [
          "O(log n)",
          "O(n2)",
          "O(n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Each iteration reduces the candidate interval by a constant factor."
      },
      {
        "id": "quiz-searching-set-16-q7",
        "question": "What is crucial before applying a unimodal-search technique?",
        "options": [
          "Verify that the problem's objective actually has the required unimodal structure",
          "Sort the data alphabetically",
          "Remove all duplicates",
          "Convert the input to a graph"
        ],
        "correctIndex": 0,
        "explanation": "Without the required structural property, eliminating regions can discard the true optimum."
      }
    ]
  },
  {
    "id": "quiz-searching-set-17",
    "topicId": "searching",
    "title": "Searching Quiz - Level 17",
    "subtitle": "Advanced questions for Searching (Set 17/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-searching-set-17-q1",
        "question": "What is a search problem on a Binary Search Tree based on?",
        "options": [
          "Using the BST ordering property to choose left or right",
          "Checking every node in arbitrary order",
          "Sorting the tree first",
          "Using a hash table"
        ],
        "correctIndex": 0,
        "explanation": "Values smaller than a node are in its left subtree and larger values are in its right subtree under the standard BST rule."
      },
      {
        "id": "quiz-searching-set-17-q2",
        "question": "What is the average search complexity in a balanced BST?",
        "options": [
          "O(log n)",
          "O(n2)",
          "O(n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "A balanced BST has logarithmic height."
      },
      {
        "id": "quiz-searching-set-17-q3",
        "question": "What is the worst-case search complexity in an unbalanced BST?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(1)",
          "O(n log n)"
        ],
        "correctIndex": 1,
        "explanation": "A completely skewed BST can have height n."
      },
      {
        "id": "quiz-searching-set-17-q4",
        "question": "Which traversal of a BST produces values in sorted order?",
        "options": [
          "Inorder traversal",
          "Preorder traversal",
          "Level-order traversal",
          "Postorder traversal"
        ],
        "correctIndex": 0,
        "explanation": "Inorder traversal visits left subtree, node, then right subtree, producing sorted values in a BST."
      },
      {
        "id": "quiz-searching-set-17-q5",
        "question": "How can you find the minimum value in a standard BST?",
        "options": [
          "Follow left child pointers until there is no left child",
          "Follow right pointers only",
          "Perform BFS and choose the last node",
          "Sort all nodes"
        ],
        "correctIndex": 0,
        "explanation": "The minimum value is located at the leftmost node."
      },
      {
        "id": "quiz-searching-set-17-q6",
        "question": "How can you find the maximum value in a standard BST?",
        "options": [
          "Follow right child pointers until there is no right child",
          "Follow left pointers only",
          "Choose the root always",
          "Use Binary Search on an array"
        ],
        "correctIndex": 0,
        "explanation": "The maximum value is located at the rightmost node."
      },
      {
        "id": "quiz-searching-set-17-q7",
        "question": "What determines the search complexity in a BST?",
        "options": [
          "The height of the tree",
          "Only the number of leaves",
          "Only the root value",
          "The number of duplicate keys"
        ],
        "correctIndex": 0,
        "explanation": "BST search follows one root-to-node path, so its complexity is proportional to tree height."
      }
    ]
  },
  {
    "id": "quiz-searching-set-18",
    "topicId": "searching",
    "title": "Searching Quiz - Level 18",
    "subtitle": "Advanced questions for Searching (Set 18/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-searching-set-18-q1",
        "question": "What is a hash table search typically expected to provide?",
        "options": [
          "O(1) average-time lookup",
          "O(n2) lookup",
          "O(log n) guaranteed lookup",
          "O(n log n) always"
        ],
        "correctIndex": 0,
        "explanation": "With a good hash function and controlled load factor, hash-table lookup is expected O(1) on average."
      },
      {
        "id": "quiz-searching-set-18-q2",
        "question": "What happens when two keys map to the same hash bucket?",
        "options": [
          "A collision occurs",
          "Both keys are automatically deleted",
          "The table becomes sorted",
          "The search becomes O(1) guaranteed"
        ],
        "correctIndex": 0,
        "explanation": "A collision occurs when multiple keys map to the same location."
      },
      {
        "id": "quiz-searching-set-18-q3",
        "question": "Which technique can handle hash collisions?",
        "options": [
          "Chaining",
          "Binary Search only",
          "Merge Sort",
          "DFS"
        ],
        "correctIndex": 0,
        "explanation": "Chaining stores multiple entries in a bucket, often using a linked structure."
      },
      {
        "id": "quiz-searching-set-18-q4",
        "question": "What is another common collision-resolution technique?",
        "options": [
          "Open addressing",
          "Tree traversal only",
          "Topological sorting",
          "Bubble sorting"
        ],
        "correctIndex": 0,
        "explanation": "Open addressing searches for another available slot within the table."
      },
      {
        "id": "quiz-searching-set-18-q5",
        "question": "What happens to hash-table performance as the load factor becomes too high?",
        "options": [
          "Collisions generally increase and operations can become slower",
          "Lookup becomes guaranteed O(1)",
          "The table automatically becomes sorted",
          "All keys become unique"
        ],
        "correctIndex": 0,
        "explanation": "A crowded table increases collisions and can degrade lookup performance."
      },
      {
        "id": "quiz-searching-set-18-q6",
        "question": "What is rehashing?",
        "options": [
          "Creating a larger table and inserting existing entries again using the new table size",
          "Sorting all keys alphabetically",
          "Deleting all collisions",
          "Running Binary Search"
        ],
        "correctIndex": 0,
        "explanation": "Rehashing redistributes entries to maintain efficient table performance."
      },
      {
        "id": "quiz-searching-set-18-q7",
        "question": "What is the worst-case lookup complexity of a basic hash table?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(log log n)"
        ],
        "correctIndex": 0,
        "explanation": "If many keys collide into the same bucket, lookup may require examining many entries."
      }
    ]
  },
  {
    "id": "quiz-searching-set-19",
    "topicId": "searching",
    "title": "Searching Quiz - Level 19",
    "subtitle": "Advanced questions for Searching (Set 19/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-searching-set-19-q1",
        "question": "You are given a sorted array of positive integers and need to find two values whose sum equals target. Which approach can use the sorted structure directly?",
        "options": [
          "Two pointers",
          "DFS",
          "Hashing is the only possible method",
          "Bubble Sort followed by Linear Search"
        ],
        "correctIndex": 0,
        "explanation": "Two pointers can move inward based on whether the current sum is too small or too large."
      },
      {
        "id": "quiz-searching-set-19-q2",
        "question": "In a sorted array, if arr[left] + arr[right] is smaller than target, what should happen?",
        "options": [
          "Increase left",
          "Decrease left",
          "Increase right",
          "Stop immediately"
        ],
        "correctIndex": 0,
        "explanation": "Moving left forward increases the sum in a sorted ascending array."
      },
      {
        "id": "quiz-searching-set-19-q3",
        "question": "If arr[left] + arr[right] is larger than target, what should happen?",
        "options": [
          "Decrease right",
          "Increase right",
          "Decrease left",
          "Randomize both pointers"
        ],
        "correctIndex": 0,
        "explanation": "Moving right backward decreases the sum."
      },
      {
        "id": "quiz-searching-set-19-q4",
        "question": "What is the typical complexity of the two-pointer pair-sum approach on a sorted array?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(n log n)"
        ],
        "correctIndex": 0,
        "explanation": "Each pointer moves at most n positions, giving linear time."
      },
      {
        "id": "quiz-searching-set-19-q5",
        "question": "If the array is unsorted, what is one common way to obtain the two-pointer approach?",
        "options": [
          "Sort the array first",
          "Use BFS",
          "Delete duplicates",
          "Build a tree necessarily"
        ],
        "correctIndex": 0,
        "explanation": "Sorting enables the directional decisions needed by the two-pointer method."
      },
      {
        "id": "quiz-searching-set-19-q6",
        "question": "What is the total complexity if an unsorted array is sorted first and then searched using two pointers?",
        "options": [
          "O(n log n)",
          "O(n2)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Sorting costs O(n log n), while the two-pointer scan costs O(n), so sorting dominates."
      },
      {
        "id": "quiz-searching-set-19-q7",
        "question": "Which trade-off can make hashing preferable to sorting plus two pointers for two-sum?",
        "options": [
          "Hashing can achieve expected O(n) time without requiring the input to be sorted",
          "Hashing always uses less memory",
          "Hashing always preserves sorted order",
          "Hashing guarantees O(1) worst-case total time"
        ],
        "correctIndex": 0,
        "explanation": "A hash set or map can solve two-sum in expected linear time but typically uses extra memory."
      }
    ]
  },
  {
    "id": "quiz-searching-set-20",
    "topicId": "searching",
    "title": "Searching Quiz - Level 20",
    "subtitle": "Advanced questions for Searching (Set 20/20)",
    "questionCount": 7,
    "difficulty": "Advanced",
    "questions": [
      {
        "id": "quiz-searching-set-20-q1",
        "question": "What is the most important first step when choosing a searching algorithm?",
        "options": [
          "Identify the data structure, ordering, constraints, and required query",
          "Always choose Binary Search",
          "Always sort the data",
          "Always use hashing"
        ],
        "correctIndex": 0,
        "explanation": "The right algorithm depends on whether data is sorted, the required operation, constraints, and available memory."
      },
      {
        "id": "quiz-searching-set-20-q2",
        "question": "You have an unsorted array and need one lookup. Which approach is usually simplest?",
        "options": [
          "Linear Search",
          "Binary Search without sorting",
          "Interpolation Search",
          "Exponential Search"
        ],
        "correctIndex": 0,
        "explanation": "Linear Search requires no preprocessing and works directly on unsorted data."
      },
      {
        "id": "quiz-searching-set-20-q3",
        "question": "You have a sorted array and need many exact-value lookups. Which approach is generally appropriate?",
        "options": [
          "Binary Search",
          "Linear Search only",
          "DFS",
          "Bubble Sort before every lookup"
        ],
        "correctIndex": 0,
        "explanation": "Binary Search provides O(log n) lookup on sorted random-access data."
      },
      {
        "id": "quiz-searching-set-20-q4",
        "question": "You need the first position satisfying a monotonic condition such as 'capacity is sufficient'. What advanced pattern should you recognize?",
        "options": [
          "Binary Search on the answer",
          "Bubble Sort",
          "DFS",
          "Hashing"
        ],
        "correctIndex": 0,
        "explanation": "A monotonic feasibility condition allows Binary Search to find the boundary efficiently."
      },
      {
        "id": "quiz-searching-set-20-q5",
        "question": "You need repeated dynamic key lookups with no requirement to maintain sorted order. Which structure is often a strong choice?",
        "options": [
          "Hash Table",
          "Sorted array with Linear Search",
          "Stack",
          "Queue"
        ],
        "correctIndex": 0,
        "explanation": "Hash tables provide expected O(1) lookup and are well suited for key-based access."
      },
      {
        "id": "quiz-searching-set-20-q6",
        "question": "You need predecessor or successor queries and ordered traversal. Which structure can be more suitable than a hash table?",
        "options": [
          "Balanced Binary Search Tree",
          "Stack",
          "Queue",
          "Unsorted array with Linear Search"
        ],
        "correctIndex": 0,
        "explanation": "Balanced BSTs maintain ordering and support operations such as predecessor, successor, and range queries efficiently."
      },
      {
        "id": "quiz-searching-set-20-q7",
        "question": "What separates advanced searching problem solving from simply knowing Binary Search?",
        "options": [
          "Recognizing when the search space is an index range, answer range, value domain, tree, graph, or another structured space",
          "Memorizing one Binary Search implementation",
          "Always sorting first",
          "Using recursion in every problem"
        ],
        "correctIndex": 0,
        "explanation": "Advanced problems often hide a searchable monotonic structure that is not simply an array index."
      }
    ]
  },
  {
    "id": "quiz-dp-set-1",
    "title": "Dynamic Programming - Level 1",
    "topicId": "dp",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-1-q1",
        "question": "What is Dynamic Programming mainly used for?",
        "options": [
          "Problems with overlapping subproblems and optimal substructure",
          "Only sorting arrays",
          "Only traversing graphs",
          "Deleting duplicate values"
        ],
        "correctIndex": 0,
        "explanation": "Dynamic Programming solves complex problems by breaking them into smaller reusable subproblems."
      },
      {
        "id": "quiz-dp-set-1-q2",
        "question": "What is the main idea behind storing results in Dynamic Programming?",
        "options": [
          "Avoid solving the same subproblem repeatedly",
          "Make every algorithm recursive",
          "Increase the number of calculations",
          "Randomize the input"
        ],
        "correctIndex": 0,
        "explanation": "Previously computed results are stored so the same subproblem does not need to be solved again."
      },
      {
        "id": "quiz-dp-set-1-q3",
        "question": "Which technique is a common form of Dynamic Programming?",
        "options": [
          "Memoization",
          "Binary Search",
          "BFS",
          "Hashing only"
        ],
        "correctIndex": 0,
        "explanation": "Memoization stores results of recursive subproblems and reuses them."
      },
      {
        "id": "quiz-dp-set-1-q4",
        "question": "What is another common approach to implementing Dynamic Programming?",
        "options": [
          "Tabulation",
          "Partitioning",
          "Linear Search",
          "Tree rotation"
        ],
        "correctIndex": 0,
        "explanation": "Tabulation solves subproblems iteratively and stores their results in a table."
      },
      {
        "id": "quiz-dp-set-1-q5",
        "question": "Which classic problem is often used to introduce Dynamic Programming?",
        "options": [
          "Fibonacci numbers",
          "Binary Search",
          "Graph coloring only",
          "Heap construction"
        ],
        "correctIndex": 0,
        "explanation": "Fibonacci demonstrates overlapping subproblems clearly and is a common introduction to DP."
      },
      {
        "id": "quiz-dp-set-1-q6",
        "question": "What does a DP state represent?",
        "options": [
          "The information needed to describe a subproblem",
          "Only the final answer",
          "The memory address of a variable",
          "A random intermediate value"
        ],
        "correctIndex": 0,
        "explanation": "A state captures the relevant information needed to solve a particular subproblem."
      },
      {
        "id": "quiz-dp-set-1-q7",
        "question": "What is usually the first step when designing a DP solution?",
        "options": [
          "Define the state",
          "Write nested loops immediately",
          "Sort the input",
          "Use a graph"
        ],
        "correctIndex": 0,
        "explanation": "Clearly defining what each DP state means makes the transition and base cases much easier to derive."
      }
    ]
  },
  {
    "id": "quiz-dp-set-2",
    "title": "Dynamic Programming - Level 2",
    "topicId": "dp",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-2-q1",
        "question": "What is memoization?",
        "options": [
          "Top-down recursion with stored results",
          "Bottom-up iteration without storage",
          "Sorting subproblems",
          "Randomly caching values"
        ],
        "correctIndex": 0,
        "explanation": "Memoization combines recursion with a cache containing already computed states."
      },
      {
        "id": "quiz-dp-set-2-q2",
        "question": "What is tabulation?",
        "options": [
          "Bottom-up computation using a table",
          "Recursive computation without storing results",
          "Hashing every input",
          "Searching from the middle"
        ],
        "correctIndex": 0,
        "explanation": "Tabulation starts from known base cases and iteratively computes larger states."
      },
      {
        "id": "quiz-dp-set-2-q3",
        "question": "Which approach usually uses the call stack?",
        "options": [
          "Memoization",
          "Iterative tabulation",
          "Counting Sort",
          "Two-pointer search"
        ],
        "correctIndex": 0,
        "explanation": "Memoization is commonly implemented recursively, so recursive calls use the call stack."
      },
      {
        "id": "quiz-dp-set-2-q4",
        "question": "Which approach naturally avoids recursive function calls?",
        "options": [
          "Tabulation",
          "Memoization",
          "Recursive backtracking",
          "DFS recursion"
        ],
        "correctIndex": 0,
        "explanation": "Tabulation is generally implemented iteratively."
      },
      {
        "id": "quiz-dp-set-2-q5",
        "question": "What is a base case in DP?",
        "options": [
          "A state whose answer is known directly",
          "The largest state",
          "A random state",
          "The final loop iteration only"
        ],
        "correctIndex": 0,
        "explanation": "Base cases provide the starting values from which other DP states are computed."
      },
      {
        "id": "quiz-dp-set-2-q6",
        "question": "What is a transition in Dynamic Programming?",
        "options": [
          "A rule that derives one state from previously solved states",
          "A memory allocation operation",
          "A sorting operation",
          "A graph traversal"
        ],
        "correctIndex": 0,
        "explanation": "The recurrence or transition describes how smaller answers combine to produce a larger answer."
      },
      {
        "id": "quiz-dp-set-2-q7",
        "question": "Why can DP improve a naive recursive Fibonacci solution?",
        "options": [
          "It prevents repeated computation of the same Fibonacci values",
          "It removes all additions",
          "It sorts Fibonacci numbers",
          "It changes Fibonacci into a graph"
        ],
        "correctIndex": 0,
        "explanation": "Without caching, many Fibonacci values are calculated repeatedly."
      }
    ]
  },
  {
    "id": "quiz-dp-set-3",
    "title": "Dynamic Programming - Level 3",
    "topicId": "dp",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-3-q1",
        "question": "What is the recurrence for Fibonacci numbers using the standard definition?",
        "options": [
          "F(n) = F(n-1) + F(n-2)",
          "F(n) = F(n-1) × F(n-2)",
          "F(n) = F(n) + 1",
          "F(n) = 2n"
        ],
        "correctIndex": 0,
        "explanation": "Each Fibonacci number is the sum of the previous two."
      },
      {
        "id": "quiz-dp-set-3-q2",
        "question": "What are common base cases for Fibonacci?",
        "options": [
          "F(0)=0 and F(1)=1",
          "F(0)=1 and F(1)=2",
          "F(0)=0 and F(1)=0",
          "F(0)=2 and F(1)=3"
        ],
        "correctIndex": 0,
        "explanation": "These are the standard initial values of the Fibonacci sequence."
      },
      {
        "id": "quiz-dp-set-3-q3",
        "question": "What is the approximate time complexity of naive recursive Fibonacci?",
        "options": [
          "O(2^n)",
          "O(n)",
          "O(log n)",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "The recursion repeatedly branches into overlapping subproblems, producing exponential growth."
      },
      {
        "id": "quiz-dp-set-3-q4",
        "question": "What is the time complexity of Fibonacci using simple DP?",
        "options": [
          "O(n)",
          "O(2^n)",
          "O(n2)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Each Fibonacci state from 0 through n can be computed once."
      },
      {
        "id": "quiz-dp-set-3-q5",
        "question": "What is the space complexity of storing the entire Fibonacci DP array?",
        "options": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "The array stores one result for each state."
      },
      {
        "id": "quiz-dp-set-3-q6",
        "question": "Can Fibonacci DP be optimized to O(1) extra space?",
        "options": [
          "Yes, by keeping only the previous two values",
          "No, never",
          "Only with recursion",
          "Only by sorting"
        ],
        "correctIndex": 0,
        "explanation": "Since each state depends only on the previous two, older values do not need to be stored."
      },
      {
        "id": "quiz-dp-set-3-q7",
        "question": "What DP concept does Fibonacci demonstrate particularly well?",
        "options": [
          "Overlapping subproblems",
          "Graph cycles",
          "Hash collisions",
          "Tree rotations"
        ],
        "correctIndex": 0,
        "explanation": "The same smaller Fibonacci values appear repeatedly in the recursive solution."
      }
    ]
  },
  {
    "id": "quiz-dp-set-4",
    "title": "Dynamic Programming - Level 4",
    "topicId": "dp",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-4-q1",
        "question": "In the Climbing Stairs problem, if you can climb 1 or 2 steps at a time, what does dp[i] usually represent?",
        "options": [
          "The number of ways to reach step i",
          "The cost of step i",
          "The height of step i",
          "The number of remaining steps only"
        ],
        "correctIndex": 0,
        "explanation": "Each state counts the number of distinct ways to reach that step."
      },
      {
        "id": "quiz-dp-set-4-q2",
        "question": "What recurrence commonly solves the Climbing Stairs problem?",
        "options": [
          "dp[i] = dp[i-1] + dp[i-2]",
          "dp[i] = dp[i-1] × dp[i-2]",
          "dp[i] = i2",
          "dp[i] = dp[i] + 1"
        ],
        "correctIndex": 0,
        "explanation": "The final step can be reached from either the previous step or two steps before."
      },
      {
        "id": "quiz-dp-set-4-q3",
        "question": "How many ways are there to climb 3 stairs using 1-step or 2-step moves?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctIndex": 1,
        "explanation": "The ways are 1+1+1, 1+2, and 2+1."
      },
      {
        "id": "quiz-dp-set-4-q4",
        "question": "What does choosing a DP state correctly help with?",
        "options": [
          "It makes the recurrence easier to define",
          "It guarantees O(1) time",
          "It eliminates all base cases",
          "It automatically sorts the input"
        ],
        "correctIndex": 0,
        "explanation": "A good state definition captures exactly the information required for the transition."
      },
      {
        "id": "quiz-dp-set-4-q5",
        "question": "What is a common space optimization for Climbing Stairs?",
        "options": [
          "Keep only the previous two DP values",
          "Store every possible sequence",
          "Use a graph",
          "Use a hash table containing all paths"
        ],
        "correctIndex": 0,
        "explanation": "Each state depends only on the previous two states."
      },
      {
        "id": "quiz-dp-set-4-q6",
        "question": "If you can climb 1, 2, or 3 steps at a time, what does the recurrence become?",
        "options": [
          "dp[i] = dp[i-1] + dp[i-2] + dp[i-3]",
          "dp[i] = dp[i-1] × 3",
          "dp[i] = i3",
          "dp[i] = dp[i-1] - dp[i-2]"
        ],
        "correctIndex": 0,
        "explanation": "The final step can be reached from any of the previous three positions."
      },
      {
        "id": "quiz-dp-set-4-q7",
        "question": "What type of DP is Climbing Stairs?",
        "options": [
          "One-dimensional DP",
          "Two-dimensional DP only",
          "Graph DP only",
          "Bitmask DP only"
        ],
        "correctIndex": 0,
        "explanation": "A single index representing the current step is sufficient to describe the state."
      }
    ]
  },
  {
    "id": "quiz-dp-set-5",
    "title": "Dynamic Programming - Level 5",
    "topicId": "dp",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-5-q1",
        "question": "What is the 0/1 Knapsack problem about?",
        "options": [
          "Selecting items at most once to maximize value under a weight limit",
          "Selecting every item multiple times",
          "Sorting items by weight only",
          "Finding a graph path"
        ],
        "correctIndex": 0,
        "explanation": "Each item is either chosen or not chosen, and the total weight must stay within capacity."
      },
      {
        "id": "quiz-dp-set-5-q2",
        "question": "What does dp[i][w] commonly represent in 0/1 Knapsack?",
        "options": [
          "The maximum value using the first i items with capacity w",
          "The minimum weight of item i",
          "The number of items in the array",
          "The value of only item i"
        ],
        "correctIndex": 0,
        "explanation": "The two dimensions represent how many items are considered and the available capacity."
      },
      {
        "id": "quiz-dp-set-5-q3",
        "question": "When considering an item in 0/1 Knapsack, what are the two main choices?",
        "options": [
          "Take it or skip it",
          "Sort it or delete it",
          "Reverse it or rotate it",
          "Hash it or search it"
        ],
        "correctIndex": 0,
        "explanation": "The 0/1 constraint means each item can be selected at most once."
      },
      {
        "id": "quiz-dp-set-5-q4",
        "question": "What happens if an item's weight exceeds the current capacity?",
        "options": [
          "The item cannot be taken",
          "The item must be taken",
          "The capacity doubles",
          "The item becomes weight zero"
        ],
        "correctIndex": 0,
        "explanation": "An item heavier than the available capacity cannot be included."
      },
      {
        "id": "quiz-dp-set-5-q5",
        "question": "What is the typical time complexity of 0/1 Knapsack DP with n items and capacity W?",
        "options": [
          "O(nW)",
          "O(n2W)",
          "O(W)",
          "O(2^nW)"
        ],
        "correctIndex": 0,
        "explanation": "There are n × W states, each computed in constant time."
      },
      {
        "id": "quiz-dp-set-5-q6",
        "question": "Can the 0/1 Knapsack DP be optimized from O(nW) space to O(W)?",
        "options": [
          "Yes",
          "No",
          "Only when all values are equal",
          "Only with recursion"
        ],
        "correctIndex": 0,
        "explanation": "Each row depends only on the previous row, so one dimension can be compressed."
      },
      {
        "id": "quiz-dp-set-5-q7",
        "question": "When using a one-dimensional DP array for 0/1 Knapsack, why should capacity usually be iterated downward?",
        "options": [
          "To prevent using the same item more than once",
          "To sort the items",
          "To increase capacity automatically",
          "To make the algorithm recursive"
        ],
        "correctIndex": 0,
        "explanation": "Descending capacity ensures the current item does not reuse an already updated state from the same iteration."
      }
    ]
  },
  {
    "id": "quiz-dp-set-6",
    "title": "Dynamic Programming - Level 6",
    "topicId": "dp",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-6-q1",
        "question": "What is the goal of the Coin Change minimum-coins problem?",
        "options": [
          "Find the minimum number of coins needed to form a target amount",
          "Find the maximum number of coins",
          "Sort coins by value",
          "Find the largest coin only"
        ],
        "correctIndex": 0,
        "explanation": "The objective is to minimize how many available coins are required to make the target amount."
      },
      {
        "id": "quiz-dp-set-6-q2",
        "question": "What can dp[a] represent in the minimum Coin Change problem?",
        "options": [
          "The minimum coins needed to make amount a",
          "The largest coin smaller than a",
          "The number of coin types",
          "The total value of all coins"
        ],
        "correctIndex": 0,
        "explanation": "Each state represents the optimal answer for one intermediate amount."
      },
      {
        "id": "quiz-dp-set-6-q3",
        "question": "What is a common base case for Coin Change?",
        "options": [
          "dp[0] = 0",
          "dp[0] = 1",
          "dp[1] = 0 always",
          "dp[0] = infinity only"
        ],
        "correctIndex": 0,
        "explanation": "Zero coins are required to make amount zero."
      },
      {
        "id": "quiz-dp-set-6-q4",
        "question": "What should an unreachable amount usually be initialized to?",
        "options": [
          "A value representing infinity or an impossible state",
          "Always zero",
          "Always one",
          "The largest coin"
        ],
        "correctIndex": 0,
        "explanation": "An impossible state should not accidentally look like a valid solution."
      },
      {
        "id": "quiz-dp-set-6-q5",
        "question": "With coins [1,2,5], what is the minimum number of coins needed to make 11?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctIndex": 1,
        "explanation": "11 can be formed as 5+5+1 using 3 coins."
      },
      {
        "id": "quiz-dp-set-6-q6",
        "question": "What is the typical time complexity of Coin Change with amount A and n coin types?",
        "options": [
          "O(nA)",
          "O(A2n2)",
          "O(log A)",
          "O(2^A)"
        ],
        "correctIndex": 0,
        "explanation": "Each amount is considered with each coin type."
      },
      {
        "id": "quiz-dp-set-6-q7",
        "question": "Can greedy coin selection always solve the minimum Coin Change problem?",
        "options": [
          "No, not for arbitrary coin denominations",
          "Yes, always",
          "Only when there are three coins",
          "Only for even amounts"
        ],
        "correctIndex": 0,
        "explanation": "Greedy works for some denomination systems but fails for others, while DP handles arbitrary positive denominations."
      }
    ]
  },
  {
    "id": "quiz-dp-set-7",
    "title": "Dynamic Programming - Level 7",
    "topicId": "dp",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-7-q1",
        "question": "What is the Longest Common Subsequence problem?",
        "options": [
          "Finding the longest sequence appearing in both strings in the same relative order, not necessarily contiguously",
          "Finding the longest substring only",
          "Sorting two strings",
          "Finding the shortest string"
        ],
        "correctIndex": 0,
        "explanation": "An LCS preserves relative order but does not require consecutive characters."
      },
      {
        "id": "quiz-dp-set-7-q2",
        "question": "For strings 'abcde' and 'ace', what is the LCS length?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctIndex": 1,
        "explanation": "The LCS is 'ace', which has length 3."
      },
      {
        "id": "quiz-dp-set-7-q3",
        "question": "What does dp[i][j] commonly represent in LCS?",
        "options": [
          "LCS length of the first i characters of one string and first j of the other",
          "The number of unique characters",
          "The string length only",
          "The ASCII difference"
        ],
        "correctIndex": 0,
        "explanation": "The two indices describe prefixes of the two strings."
      },
      {
        "id": "quiz-dp-set-7-q4",
        "question": "If the current characters in LCS are equal, what transition is commonly used?",
        "options": [
          "dp[i][j] = 1 + dp[i-1][j-1]",
          "dp[i][j] = dp[i-1][j] + dp[i][j-1]",
          "dp[i][j] = 0",
          "dp[i][j] = i × j"
        ],
        "correctIndex": 0,
        "explanation": "Matching characters can extend the LCS of the two previous prefixes."
      },
      {
        "id": "quiz-dp-set-7-q5",
        "question": "If the current LCS characters differ, what is the usual transition?",
        "options": [
          "max(dp[i-1][j], dp[i][j-1])",
          "dp[i-1][j-1] + 1",
          "dp[i][j] = 0 always",
          "min(i,j)"
        ],
        "correctIndex": 0,
        "explanation": "When the characters differ, one of them must be excluded from the current comparison."
      },
      {
        "id": "quiz-dp-set-7-q6",
        "question": "What is the typical time complexity of LCS DP for strings of lengths m and n?",
        "options": [
          "O(mn)",
          "O(m+n)",
          "O(log(mn))",
          "O(m2n2)"
        ],
        "correctIndex": 0,
        "explanation": "The DP table contains m × n states."
      },
      {
        "id": "quiz-dp-set-7-q7",
        "question": "What is the typical space complexity of the full LCS table?",
        "options": [
          "O(mn)",
          "O(m+n)",
          "O(1)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "The complete two-dimensional table stores one result for every pair of prefix lengths."
      }
    ]
  },
  {
    "id": "quiz-dp-set-8",
    "title": "Dynamic Programming - Level 8",
    "topicId": "dp",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-8-q1",
        "question": "What is the difference between a subsequence and a substring?",
        "options": [
          "A subsequence need not be contiguous, while a substring must be contiguous",
          "A substring need not preserve order",
          "They are always identical concepts",
          "A subsequence must be sorted"
        ],
        "correctIndex": 0,
        "explanation": "Subsequences preserve order but may skip characters; substrings are contiguous."
      },
      {
        "id": "quiz-dp-set-8-q2",
        "question": "Which problem commonly uses a 2D DP table similar to LCS?",
        "options": [
          "Edit Distance",
          "Binary Search",
          "Heap Sort",
          "BFS"
        ],
        "correctIndex": 0,
        "explanation": "Edit Distance compares prefixes of two strings and naturally forms a two-dimensional DP."
      },
      {
        "id": "quiz-dp-set-8-q3",
        "question": "What does Edit Distance measure?",
        "options": [
          "The minimum number of insertions, deletions, and substitutions needed to transform one string into another",
          "The number of common characters only",
          "The number of substrings",
          "The ASCII difference"
        ],
        "correctIndex": 0,
        "explanation": "Levenshtein distance counts the minimum basic edits required for transformation."
      },
      {
        "id": "quiz-dp-set-8-q4",
        "question": "What is the Edit Distance between 'cat' and 'cat'?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctIndex": 0,
        "explanation": "No edits are needed because the strings are already identical."
      },
      {
        "id": "quiz-dp-set-8-q5",
        "question": "What is the Edit Distance between 'cat' and 'cut'?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctIndex": 1,
        "explanation": "Only the character 'a' needs to be substituted with 'u'."
      },
      {
        "id": "quiz-dp-set-8-q6",
        "question": "What are the three standard operations in Levenshtein Edit Distance?",
        "options": [
          "Insert, delete, substitute",
          "Sort, search, merge",
          "Push, pop, peek",
          "Rotate, reverse, partition"
        ],
        "correctIndex": 0,
        "explanation": "These three operations define the standard edit distance."
      },
      {
        "id": "quiz-dp-set-8-q7",
        "question": "What is the typical complexity of Edit Distance DP for strings of lengths m and n?",
        "options": [
          "O(mn)",
          "O(m+n)",
          "O(log n)",
          "O(2^n)"
        ],
        "correctIndex": 0,
        "explanation": "Each pair of prefixes corresponds to one DP state."
      }
    ]
  },
  {
    "id": "quiz-dp-set-9",
    "title": "Dynamic Programming - Level 9",
    "topicId": "dp",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-9-q1",
        "question": "What is the Longest Increasing Subsequence problem?",
        "options": [
          "Finding the longest subsequence whose values are strictly increasing",
          "Finding the longest contiguous increasing subarray only",
          "Sorting the array",
          "Finding the maximum element"
        ],
        "correctIndex": 0,
        "explanation": "LIS selects elements while preserving order and requires increasing values."
      },
      {
        "id": "quiz-dp-set-9-q2",
        "question": "What can dp[i] represent in the O(n2) LIS solution?",
        "options": [
          "The length of the LIS ending at index i",
          "The LIS of the entire array always",
          "The value of arr[i] squared",
          "The number of elements after i"
        ],
        "correctIndex": 0,
        "explanation": "The state focuses on subsequences whose final selected element is arr[i]."
      },
      {
        "id": "quiz-dp-set-9-q3",
        "question": "What condition allows j to extend an LIS ending at i?",
        "options": [
          "arr[j] < arr[i]",
          "arr[j] > arr[i]",
          "arr[j] == arr[i] only",
          "j must always equal i"
        ],
        "correctIndex": 0,
        "explanation": "For a strictly increasing subsequence, the previous value must be smaller."
      },
      {
        "id": "quiz-dp-set-9-q4",
        "question": "What is the typical complexity of the basic LIS DP?",
        "options": [
          "O(n2)",
          "O(n)",
          "O(log n)",
          "O(n log log n)"
        ],
        "correctIndex": 0,
        "explanation": "For every i, the algorithm may inspect every previous j."
      },
      {
        "id": "quiz-dp-set-9-q5",
        "question": "What is the optimized complexity for finding LIS length using the tails/binary-search technique?",
        "options": [
          "O(n log n)",
          "O(n2)",
          "O(n3)",
          "O(2^n)"
        ],
        "correctIndex": 0,
        "explanation": "Binary Search maintains the smallest possible tail for each subsequence length."
      },
      {
        "id": "quiz-dp-set-9-q6",
        "question": "Does the optimized LIS tails array necessarily contain an actual LIS?",
        "options": [
          "Not necessarily; it primarily stores useful tail values for determining the length",
          "Yes, always",
          "It always contains the sorted input",
          "It contains only duplicate values"
        ],
        "correctIndex": 0,
        "explanation": "The tails structure is an auxiliary representation used to compute the LIS length efficiently."
      },
      {
        "id": "quiz-dp-set-9-q7",
        "question": "For [10, 9, 2, 5, 3, 7, 101, 18], what is the LIS length?",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "correctIndex": 1,
        "explanation": "One LIS is [2,3,7,101], giving length 4."
      }
    ]
  },
  {
    "id": "quiz-dp-set-10",
    "title": "Dynamic Programming - Level 10",
    "topicId": "dp",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-10-q1",
        "question": "What is the House Robber problem's main constraint?",
        "options": [
          "You cannot rob two adjacent houses",
          "You must rob every house",
          "You can rob only one house",
          "You cannot rob houses with even values"
        ],
        "correctIndex": 0,
        "explanation": "The problem requires choosing non-adjacent houses."
      },
      {
        "id": "quiz-dp-set-10-q2",
        "question": "What can dp[i] represent in House Robber?",
        "options": [
          "Maximum money that can be robbed from the first i houses",
          "Money in house i only",
          "Number of houses",
          "Minimum money robbed"
        ],
        "correctIndex": 0,
        "explanation": "The state captures the best achievable amount considering the prefix."
      },
      {
        "id": "quiz-dp-set-10-q3",
        "question": "What are the main choices when considering a house?",
        "options": [
          "Rob it and skip the previous house, or skip it",
          "Rob it twice or delete it",
          "Sort it or reverse it",
          "Always rob it"
        ],
        "correctIndex": 0,
        "explanation": "Taking a house prevents taking its adjacent predecessor."
      },
      {
        "id": "quiz-dp-set-10-q4",
        "question": "What recurrence is commonly used for House Robber?",
        "options": [
          "dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
          "dp[i] = dp[i-1] + nums[i]",
          "dp[i] = dp[i-1] × nums[i]",
          "dp[i] = nums[i] only"
        ],
        "correctIndex": 0,
        "explanation": "The robber either skips the current house or takes it along with the best result up to i-2."
      },
      {
        "id": "quiz-dp-set-10-q5",
        "question": "Can House Robber be solved using O(1) extra space?",
        "options": [
          "Yes",
          "No",
          "Only for sorted values",
          "Only for negative values"
        ],
        "correctIndex": 0,
        "explanation": "Each state depends only on the previous two states."
      },
      {
        "id": "quiz-dp-set-10-q6",
        "question": "For [2,7,9,3,1], what is the maximum amount that can be robbed?",
        "options": [
          "11",
          "12",
          "13",
          "14"
        ],
        "correctIndex": 1,
        "explanation": "Robbing houses with values 2, 9, and 1 gives 12."
      },
      {
        "id": "quiz-dp-set-10-q7",
        "question": "What type of DP pattern does House Robber demonstrate?",
        "options": [
          "Choose or skip with local dependency",
          "Two-string matching",
          "Interval partitioning only",
          "Bitmask enumeration only"
        ],
        "correctIndex": 0,
        "explanation": "Each position involves a decision between taking the current element or skipping it."
      }
    ]
  },
  {
    "id": "quiz-dp-set-11",
    "title": "Dynamic Programming - Level 11",
    "topicId": "dp",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-11-q1",
        "question": "What is Matrix Chain Multiplication trying to optimize?",
        "options": [
          "The order of matrix multiplications to minimize scalar multiplication cost",
          "The values inside matrices",
          "The number of matrices",
          "The matrix dimensions"
        ],
        "correctIndex": 0,
        "explanation": "Different parenthesizations can have dramatically different multiplication costs."
      },
      {
        "id": "quiz-dp-set-11-q2",
        "question": "Why does Matrix Chain Multiplication use interval DP?",
        "options": [
          "A state represents a contiguous range of matrices",
          "Matrices form a graph",
          "Only one matrix can be processed",
          "The problem requires sorting"
        ],
        "correctIndex": 0,
        "explanation": "Each DP state corresponds to optimally multiplying a continuous interval of matrices."
      },
      {
        "id": "quiz-dp-set-11-q3",
        "question": "What does dp[i][j] commonly represent?",
        "options": [
          "Minimum multiplication cost for matrices i through j",
          "Maximum matrix value",
          "Number of rows in matrix i",
          "The product of matrices i and j"
        ],
        "correctIndex": 0,
        "explanation": "The state stores the minimum cost to multiply the selected interval."
      },
      {
        "id": "quiz-dp-set-11-q4",
        "question": "How is an interval split in Matrix Chain Multiplication?",
        "options": [
          "Try every possible split point k between i and j",
          "Always split at the middle",
          "Always split at i",
          "Split randomly"
        ],
        "correctIndex": 0,
        "explanation": "The optimal parenthesization can use any split point, so all possibilities must be considered."
      },
      {
        "id": "quiz-dp-set-11-q5",
        "question": "What is the typical time complexity of Matrix Chain Multiplication DP for n matrices?",
        "options": [
          "O(n3)",
          "O(n)",
          "O(n2)",
          "O(2^n)"
        ],
        "correctIndex": 0,
        "explanation": "There are O(n2) intervals and O(n) possible split points per interval."
      },
      {
        "id": "quiz-dp-set-11-q6",
        "question": "What is the typical space complexity of Matrix Chain Multiplication?",
        "options": [
          "O(n2)",
          "O(n)",
          "O(1)",
          "O(n3)"
        ],
        "correctIndex": 0,
        "explanation": "The DP table contains one state for each pair of matrix boundaries."
      },
      {
        "id": "quiz-dp-set-11-q7",
        "question": "What DP pattern does Matrix Chain Multiplication represent?",
        "options": [
          "Interval DP",
          "One-dimensional prefix DP",
          "Bitmask DP only",
          "Digit DP"
        ],
        "correctIndex": 0,
        "explanation": "The problem optimizes over contiguous intervals and possible split points."
      }
    ]
  },
  {
    "id": "quiz-dp-set-12",
    "title": "Dynamic Programming - Level 12",
    "topicId": "dp",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-12-q1",
        "question": "What is interval DP?",
        "options": [
          "A DP technique where states represent intervals or ranges",
          "A DP technique that only works on arrays of size two",
          "A graph traversal technique",
          "A sorting algorithm"
        ],
        "correctIndex": 0,
        "explanation": "Interval DP solves problems by combining solutions from smaller subintervals."
      },
      {
        "id": "quiz-dp-set-12-q2",
        "question": "Which problem is a classic interval DP problem?",
        "options": [
          "Burst Balloons",
          "Binary Search",
          "Fibonacci only",
          "Two Sum"
        ],
        "correctIndex": 0,
        "explanation": "Burst Balloons can be formulated around intervals and the last balloon burst inside each interval."
      },
      {
        "id": "quiz-dp-set-12-q3",
        "question": "What is a useful trick in Burst Balloons?",
        "options": [
          "Add virtual boundary balloons with value 1",
          "Sort all balloons first",
          "Remove every duplicate",
          "Use BFS"
        ],
        "correctIndex": 0,
        "explanation": "Virtual boundaries simplify the calculation of neighboring values at interval edges."
      },
      {
        "id": "quiz-dp-set-12-q4",
        "question": "Why is choosing the last operation sometimes useful in interval DP?",
        "options": [
          "It separates the remaining interval into independent smaller intervals",
          "It guarantees O(1)",
          "It avoids all recursion",
          "It sorts the interval"
        ],
        "correctIndex": 0,
        "explanation": "Choosing the final operation can make the left and right portions independent."
      },
      {
        "id": "quiz-dp-set-12-q5",
        "question": "What is usually the state space of interval DP?",
        "options": [
          "O(n2) intervals",
          "O(n) only",
          "O(2^n) always",
          "O(1)"
        ],
        "correctIndex": 0,
        "explanation": "There are generally O(n2) possible start and end pairs."
      },
      {
        "id": "quiz-dp-set-12-q6",
        "question": "What additional loop often makes interval DP O(n3)?",
        "options": [
          "Trying every split point inside each interval",
          "Sorting every interval",
          "Running BFS",
          "Hashing every element"
        ],
        "correctIndex": 0,
        "explanation": "Each of O(n2) intervals may consider O(n) split positions."
      },
      {
        "id": "quiz-dp-set-12-q7",
        "question": "What order is commonly useful when filling an interval DP table?",
        "options": [
          "Increasing interval length",
          "Random order",
          "Decreasing element values",
          "Alphabetical order"
        ],
        "correctIndex": 0,
        "explanation": "Smaller intervals must be solved before the larger intervals that depend on them."
      }
    ]
  },
  {
    "id": "quiz-dp-set-13",
    "title": "Dynamic Programming - Level 13",
    "topicId": "dp",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-13-q1",
        "question": "What is Bitmask DP commonly used to represent?",
        "options": [
          "Which elements or tasks have already been selected",
          "Only integer sorting",
          "Graph edge weights only",
          "String lengths only"
        ],
        "correctIndex": 0,
        "explanation": "A bitmask compactly represents a subset of items."
      },
      {
        "id": "quiz-dp-set-13-q2",
        "question": "How many different subsets can n binary choices represent?",
        "options": [
          "n",
          "2n",
          "2^n",
          "n2"
        ],
        "correctIndex": 2,
        "explanation": "Each of n elements can be either selected or not selected, giving 2^n subsets."
      },
      {
        "id": "quiz-dp-set-13-q3",
        "question": "What does a set bit commonly mean in a subset bitmask?",
        "options": [
          "The corresponding element is selected",
          "The element is deleted",
          "The element is sorted",
          "The element is duplicated"
        ],
        "correctIndex": 0,
        "explanation": "A bit value of 1 commonly indicates that the corresponding item belongs to the subset."
      },
      {
        "id": "quiz-dp-set-13-q4",
        "question": "What is the typical state count for a DP over all subsets of n elements?",
        "options": [
          "O(2^n)",
          "O(n)",
          "O(log n)",
          "O(n2)"
        ],
        "correctIndex": 0,
        "explanation": "There are 2^n possible subsets."
      },
      {
        "id": "quiz-dp-set-13-q5",
        "question": "Which problem is a classic application of Bitmask DP?",
        "options": [
          "Travelling Salesperson Problem for small n",
          "Binary Search",
          "Bubble Sort",
          "Fibonacci only"
        ],
        "correctIndex": 0,
        "explanation": "TSP can use a subset mask to represent visited cities."
      },
      {
        "id": "quiz-dp-set-13-q6",
        "question": "In TSP Bitmask DP, what can dp[mask][i] represent?",
        "options": [
          "Minimum cost to visit the cities in mask and finish at city i",
          "The number of cities in the graph only",
          "The maximum edge weight",
          "The sorted order of cities"
        ],
        "correctIndex": 0,
        "explanation": "The state combines the visited subset with the current endpoint."
      },
      {
        "id": "quiz-dp-set-13-q7",
        "question": "What is the typical complexity of the standard Bitmask DP solution for TSP?",
        "options": [
          "O(n2 2^n)",
          "O(n log n)",
          "O(n2)",
          "O(2n)"
        ],
        "correctIndex": 0,
        "explanation": "There are O(n2^n) states and each may consider O(n) transitions."
      }
    ]
  },
  {
    "id": "quiz-dp-set-14",
    "title": "Dynamic Programming - Level 14",
    "topicId": "dp",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-14-q1",
        "question": "What is tree DP?",
        "options": [
          "Dynamic Programming where states are defined over nodes or subtrees of a tree",
          "Sorting a tree using DP",
          "Searching a tree with Binary Search",
          "A graph algorithm that requires cycles"
        ],
        "correctIndex": 0,
        "explanation": "Tree DP computes answers for subtrees and combines child results."
      },
      {
        "id": "quiz-dp-set-14-q2",
        "question": "What traversal is commonly used to compute child states before parent states in tree DP?",
        "options": [
          "Postorder DFS",
          "Breadth-first search only",
          "Random traversal",
          "Binary Search"
        ],
        "correctIndex": 0,
        "explanation": "Postorder ensures child subproblems are solved before their parent."
      },
      {
        "id": "quiz-dp-set-14-q3",
        "question": "In Maximum Independent Set on a tree, what choices are commonly considered for each node?",
        "options": [
          "Take the node or skip the node",
          "Sort the node or delete it",
          "Rotate the node or reverse it",
          "Always take the node"
        ],
        "correctIndex": 0,
        "explanation": "If a node is taken, its children cannot be taken."
      },
      {
        "id": "quiz-dp-set-14-q4",
        "question": "What can dp[node][0] represent in a tree independent-set problem?",
        "options": [
          "Best answer in the subtree when the node is not selected",
          "The node's value only",
          "The number of children",
          "The tree height"
        ],
        "correctIndex": 0,
        "explanation": "The state can represent the best result conditioned on whether the current node is selected."
      },
      {
        "id": "quiz-dp-set-14-q5",
        "question": "What can dp[node][1] represent?",
        "options": [
          "Best answer when the node is selected",
          "The node's depth only",
          "The number of leaves",
          "The parent node's value"
        ],
        "correctIndex": 0,
        "explanation": "This state represents solutions where the current node is included."
      },
      {
        "id": "quiz-dp-set-14-q6",
        "question": "What is the typical time complexity of a tree DP that processes each edge and node a constant number of times?",
        "options": [
          "O(n)",
          "O(n2)",
          "O(log n)",
          "O(2^n)"
        ],
        "correctIndex": 0,
        "explanation": "A tree has n nodes and n-1 edges, so linear processing is possible."
      },
      {
        "id": "quiz-dp-set-14-q7",
        "question": "Why is tree DP often easier than general graph DP?",
        "options": [
          "Trees have no cycles, giving a natural recursive dependency structure",
          "Trees always have one node",
          "Trees require no memory",
          "Trees are always balanced"
        ],
        "correctIndex": 0,
        "explanation": "The absence of cycles allows subtrees to be solved independently and combined."
      }
    ]
  },
  {
    "id": "quiz-dp-set-15",
    "title": "Dynamic Programming - Level 15",
    "topicId": "dp",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-15-q1",
        "question": "What is state compression in Dynamic Programming?",
        "options": [
          "Reducing the amount of stored DP information by keeping only states needed for future transitions",
          "Compressing the input file",
          "Sorting DP states",
          "Deleting all base cases"
        ],
        "correctIndex": 0,
        "explanation": "State compression reduces memory when older states are no longer needed."
      },
      {
        "id": "quiz-dp-set-15-q2",
        "question": "Which problem is commonly optimized from O(nW) space to O(W)?",
        "options": [
          "0/1 Knapsack",
          "LCS without any modification",
          "Matrix Chain Multiplication",
          "TSP"
        ],
        "correctIndex": 0,
        "explanation": "Knapsack rows depend only on previous information, allowing one-dimensional compression."
      },
      {
        "id": "quiz-dp-set-15-q3",
        "question": "What is the main danger when compressing 0/1 Knapsack into one dimension?",
        "options": [
          "Updating capacity in the wrong direction can reuse the same item multiple times",
          "The array becomes sorted",
          "The recurrence becomes exponential",
          "The input is deleted"
        ],
        "correctIndex": 0,
        "explanation": "Descending capacity preserves the 0/1 restriction."
      },
      {
        "id": "quiz-dp-set-15-q4",
        "question": "For an unbounded knapsack variant, how does capacity iteration commonly differ?",
        "options": [
          "Capacity can be iterated upward to allow repeated use of the same item",
          "Capacity must always be iterated downward",
          "Capacity is never iterated",
          "The item list must be reversed"
        ],
        "correctIndex": 0,
        "explanation": "Ascending updates allow the current item to contribute repeatedly."
      },
      {
        "id": "quiz-dp-set-15-q5",
        "question": "What is a key question when deciding whether DP space can be compressed?",
        "options": [
          "Which previous states are actually required to compute the current state",
          "How many variables are named",
          "Whether the input is sorted",
          "Whether recursion looks elegant"
        ],
        "correctIndex": 0,
        "explanation": "Dependencies determine whether older rows or dimensions can safely be discarded."
      },
      {
        "id": "quiz-dp-set-15-q6",
        "question": "Can space compression always preserve the ability to reconstruct the full solution?",
        "options": [
          "No, additional information may be needed for reconstruction",
          "Yes, always",
          "Only for strings",
          "Only when n is prime"
        ],
        "correctIndex": 0,
        "explanation": "If intermediate decisions are discarded, reconstructing the exact choices may require extra storage or recomputation."
      },
      {
        "id": "quiz-dp-set-15-q7",
        "question": "What is the main trade-off of aggressive DP space optimization?",
        "options": [
          "Lower memory usage but potentially harder reconstruction or implementation",
          "Higher time and higher memory always",
          "No effect at all",
          "It makes every solution recursive"
        ],
        "correctIndex": 0,
        "explanation": "Space optimization can make the implementation more subtle and may remove information useful for recovering choices."
      }
    ]
  },
  {
    "id": "quiz-dp-set-16",
    "title": "Dynamic Programming - Level 16",
    "topicId": "dp",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-16-q1",
        "question": "What is a DAG DP?",
        "options": [
          "Dynamic Programming performed on a Directed Acyclic Graph",
          "DP on a cyclic graph",
          "DP only on arrays",
          "A sorting algorithm"
        ],
        "correctIndex": 0,
        "explanation": "A DAG provides an acyclic dependency structure that allows DP to process vertices in a valid order."
      },
      {
        "id": "quiz-dp-set-16-q2",
        "question": "Why is a topological ordering useful for DAG DP?",
        "options": [
          "It ensures dependencies are processed before the states that depend on them",
          "It sorts edge weights",
          "It removes all edges",
          "It finds cycles"
        ],
        "correctIndex": 0,
        "explanation": "Topological order provides a valid direction for propagating DP values."
      },
      {
        "id": "quiz-dp-set-16-q3",
        "question": "Can shortest paths in a DAG be solved using DP?",
        "options": [
          "Yes",
          "No",
          "Only if all weights are positive",
          "Only if the graph is undirected"
        ],
        "correctIndex": 0,
        "explanation": "Relaxing edges in topological order computes shortest paths efficiently even with negative edge weights."
      },
      {
        "id": "quiz-dp-set-16-q4",
        "question": "What is the time complexity of shortest paths in a DAG using topological order?",
        "options": [
          "O(V + E)",
          "O(V2E)",
          "O(log V)",
          "O(E2)"
        ],
        "correctIndex": 0,
        "explanation": "Each vertex and edge can be processed a constant number of times."
      },
      {
        "id": "quiz-dp-set-16-q5",
        "question": "Why can DAG DP handle negative edge weights safely?",
        "options": [
          "The graph has no cycles, so there can be no negative cycle",
          "Negative weights are ignored",
          "The graph is automatically converted to positive weights",
          "DP cannot use negative values"
        ],
        "correctIndex": 0,
        "explanation": "A DAG cannot contain any cycle, including a negative-weight cycle."
      },
      {
        "id": "quiz-dp-set-16-q6",
        "question": "What happens if a supposed DAG contains a cycle?",
        "options": [
          "A topological-order DP approach is no longer directly applicable",
          "The cycle is automatically removed",
          "The DP becomes O(1)",
          "The graph becomes a tree"
        ],
        "correctIndex": 0,
        "explanation": "Topological ordering exists only for directed acyclic graphs."
      },
      {
        "id": "quiz-dp-set-16-q7",
        "question": "What is a useful way to think about DAG DP?",
        "options": [
          "Each edge represents a possible transition between DP states",
          "Each edge must be sorted",
          "Every vertex is an independent problem",
          "It is the same as Binary Search"
        ],
        "correctIndex": 0,
        "explanation": "Graph edges naturally describe how one state can transition to another."
      }
    ]
  },
  {
    "id": "quiz-dp-set-17",
    "title": "Dynamic Programming - Level 17",
    "topicId": "dp",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-17-q1",
        "question": "What is Digit DP generally used for?",
        "options": [
          "Counting or optimizing numbers satisfying digit-based constraints within a range",
          "Sorting digits only",
          "Searching arrays",
          "Building binary trees"
        ],
        "correctIndex": 0,
        "explanation": "Digit DP processes numbers digit by digit while tracking constraints."
      },
      {
        "id": "quiz-dp-set-17-q2",
        "question": "What does a tight flag often represent in Digit DP?",
        "options": [
          "Whether the digits chosen so far are exactly on the boundary of the upper limit",
          "Whether the number is prime",
          "Whether a digit is even",
          "Whether the input is sorted"
        ],
        "correctIndex": 0,
        "explanation": "The tight state determines whether the next digit is restricted by the corresponding digit of the limit."
      },
      {
        "id": "quiz-dp-set-17-q3",
        "question": "What does a started flag often represent?",
        "options": [
          "Whether a non-leading-zero digit has been placed yet",
          "Whether the number is sorted",
          "Whether the last digit is prime",
          "Whether the DP has finished"
        ],
        "correctIndex": 0,
        "explanation": "The started state distinguishes leading zeros from actual digits of the number."
      },
      {
        "id": "quiz-dp-set-17-q4",
        "question": "Which type of condition is suitable for Digit DP?",
        "options": [
          "Count numbers up to N whose digit sum satisfies a condition",
          "Find the maximum edge in a graph",
          "Sort an array",
          "Find the first array occurrence"
        ],
        "correctIndex": 0,
        "explanation": "Digit DP is particularly useful for constraints involving digits, digit sums, counts, or patterns."
      },
      {
        "id": "quiz-dp-set-17-q5",
        "question": "Why does Digit DP usually process digits from most significant to least significant?",
        "options": [
          "It allows the tight constraint to be tracked against the upper bound",
          "It sorts the digits",
          "It makes numbers prime",
          "It eliminates all states"
        ],
        "correctIndex": 0,
        "explanation": "Processing from the most significant side makes it possible to determine whether the constructed prefix remains equal to the limit."
      },
      {
        "id": "quiz-dp-set-17-q6",
        "question": "What is one way to count numbers in [L, R] using Digit DP?",
        "options": [
          "Compute count(R) - count(L-1)",
          "Compute count(L) + count(R)",
          "Sort L and R",
          "Use Binary Search only"
        ],
        "correctIndex": 0,
        "explanation": "Prefix counting converts a range query into two upper-bound counting problems."
      },
      {
        "id": "quiz-dp-set-17-q7",
        "question": "What is a typical Digit DP state composed of?",
        "options": [
          "Position plus constraint information such as tight, started, and problem-specific state",
          "Only the current number",
          "Only the first digit",
          "Only the array index"
        ],
        "correctIndex": 0,
        "explanation": "The state tracks enough information to determine which future digits are valid."
      }
    ]
  },
  {
    "id": "quiz-dp-set-18",
    "title": "Dynamic Programming - Level 18",
    "topicId": "dp",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-18-q1",
        "question": "What is DP with state defined by subsets of items commonly called?",
        "options": [
          "Bitmask DP",
          "Interval DP",
          "Digit DP",
          "Tree DP"
        ],
        "correctIndex": 0,
        "explanation": "Bitmask DP uses bits to represent selected or visited subsets."
      },
      {
        "id": "quiz-dp-set-18-q2",
        "question": "What is a common challenge in Bitmask DP?",
        "options": [
          "The state space grows exponentially with the number of items",
          "There are no possible transitions",
          "It always uses O(1) memory",
          "It cannot represent subsets"
        ],
        "correctIndex": 0,
        "explanation": "There are 2^n subsets, so Bitmask DP is generally practical only for relatively small n."
      },
      {
        "id": "quiz-dp-set-18-q3",
        "question": "What does the expression mask | (1 << j) commonly do?",
        "options": [
          "Marks item j as selected in the mask",
          "Removes item j",
          "Checks whether item j is selected",
          "Sorts the mask"
        ],
        "correctIndex": 0,
        "explanation": "Bitwise OR sets the corresponding bit to 1."
      },
      {
        "id": "quiz-dp-set-18-q4",
        "question": "What does mask & (1 << j) commonly check?",
        "options": [
          "Whether item j is selected",
          "Whether item j should be deleted",
          "Whether all items are selected",
          "Whether the mask is sorted"
        ],
        "correctIndex": 0,
        "explanation": "A nonzero result means the corresponding bit is set."
      },
      {
        "id": "quiz-dp-set-18-q5",
        "question": "What does mask ^ (1 << j) do when bit j is known to be set?",
        "options": [
          "Turns bit j off",
          "Always turns every bit on",
          "Sorts the bits",
          "Doubles the mask"
        ],
        "correctIndex": 0,
        "explanation": "XOR toggles the specified bit, so a known-set bit becomes zero."
      },
      {
        "id": "quiz-dp-set-18-q6",
        "question": "Why is Bitmask DP often paired with memoization?",
        "options": [
          "Many different paths can lead to the same subset state",
          "Bitmasks cannot be used iteratively",
          "Memoization sorts masks",
          "It removes the exponential state space"
        ],
        "correctIndex": 0,
        "explanation": "Caching prevents recomputation when multiple transitions reach the same subset and auxiliary state."
      },
      {
        "id": "quiz-dp-set-18-q7",
        "question": "What is a practical limitation of Bitmask DP?",
        "options": [
          "It becomes difficult to scale as n grows because 2^n states are possible",
          "It cannot represent integers",
          "It always requires a graph",
          "It cannot use recursion"
        ],
        "correctIndex": 0,
        "explanation": "Exponential growth in the number of subsets limits the technique to relatively small state dimensions."
      }
    ]
  },
  {
    "id": "quiz-dp-set-19",
    "title": "Dynamic Programming - Level 19",
    "topicId": "dp",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-19-q1",
        "question": "What does it mean for a DP problem to have optimal substructure?",
        "options": [
          "An optimal solution can be constructed from optimal solutions to relevant subproblems",
          "Every subproblem has the same answer",
          "The input must be sorted",
          "The algorithm must be recursive"
        ],
        "correctIndex": 0,
        "explanation": "Optimal substructure means solving smaller subproblems optimally contributes to an overall optimal solution."
      },
      {
        "id": "quiz-dp-set-19-q2",
        "question": "What are overlapping subproblems?",
        "options": [
          "The same smaller problems are encountered multiple times",
          "Different arrays have the same length",
          "Two graphs share an edge",
          "Two strings have the same characters"
        ],
        "correctIndex": 0,
        "explanation": "DP is especially useful when recursive decomposition repeatedly reaches the same states."
      },
      {
        "id": "quiz-dp-set-19-q3",
        "question": "Which technique is often used when a problem has optimal substructure but no significant overlapping subproblems?",
        "options": [
          "Divide and conquer may be sufficient",
          "DP is always mandatory",
          "Hashing is mandatory",
          "Bitmask DP is mandatory"
        ],
        "correctIndex": 0,
        "explanation": "Dynamic Programming is most beneficial when repeated subproblems justify storing results."
      },
      {
        "id": "quiz-dp-set-19-q4",
        "question": "What is the relationship between recursion and memoization?",
        "options": [
          "Memoization can turn an exponential recursive solution into a polynomial solution when the number of distinct states is polynomial",
          "Memoization removes recursion automatically",
          "Memoization always makes time O(1)",
          "Memoization is a sorting technique"
        ],
        "correctIndex": 0,
        "explanation": "Caching ensures each distinct state is usually computed only once."
      },
      {
        "id": "quiz-dp-set-19-q5",
        "question": "How can you estimate the complexity of a memoized DP?",
        "options": [
          "Number of distinct states × transition work per state",
          "Number of recursive calls before memoization only",
          "Input size squared always",
          "Number of base cases only"
        ],
        "correctIndex": 0,
        "explanation": "Once states are cached, complexity is largely determined by how many states exist and how much each transition costs."
      },
      {
        "id": "quiz-dp-set-19-q6",
        "question": "What is a common sign that your DP state is too large?",
        "options": [
          "The number of states becomes impractically large despite simple transitions",
          "The code has comments",
          "The input is sorted",
          "There is one base case"
        ],
        "correctIndex": 0,
        "explanation": "A poor state definition can create unnecessary dimensions and make the solution too expensive."
      },
      {
        "id": "quiz-dp-set-19-q7",
        "question": "What is a useful question when reducing a DP state?",
        "options": [
          "Does this piece of information affect future decisions or transitions?",
          "Can I rename this variable?",
          "Can I sort the input?",
          "Can I remove all loops?"
        ],
        "correctIndex": 0,
        "explanation": "If information does not affect future states, it may not need to be part of the DP state."
      }
    ]
  },
  {
    "id": "quiz-dp-set-20",
    "title": "Dynamic Programming - Level 20",
    "topicId": "dp",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-dp-set-20-q1",
        "question": "What is the most reliable workflow for solving an unfamiliar Dynamic Programming problem?",
        "options": [
          "Define the state, identify choices, derive the transition, establish base cases, determine computation order, then optimize",
          "Immediately write recursive code without defining a state",
          "Always use a 2D array",
          "Always use greedy"
        ],
        "correctIndex": 0,
        "explanation": "A systematic state-to-transition approach makes complex DP problems much easier to reason about."
      },
      {
        "id": "quiz-dp-set-20-q2",
        "question": "What should a good DP state contain?",
        "options": [
          "Exactly the information needed to describe the subproblem and make future decisions",
          "Every input variable",
          "Only the final answer",
          "Random historical information"
        ],
        "correctIndex": 0,
        "explanation": "The ideal state is neither missing necessary information nor carrying unnecessary dimensions."
      },
      {
        "id": "quiz-dp-set-20-q3",
        "question": "If a DP solution has O(n3) states and each state performs O(n) work, what is the total complexity?",
        "options": [
          "O(n4)",
          "O(n3)",
          "O(n2)",
          "O(2^n)"
        ],
        "correctIndex": 0,
        "explanation": "Total complexity is the number of states multiplied by the work performed for each state."
      },
      {
        "id": "quiz-dp-set-20-q4",
        "question": "When should you consider optimizing DP from O(n2) memory to O(n)?",
        "options": [
          "When each state depends only on a limited number of previous rows or states",
          "Whenever the code is recursive",
          "Only when n is less than 10",
          "Never"
        ],
        "correctIndex": 0,
        "explanation": "Limited dependency allows older states to be discarded safely."
      },
      {
        "id": "quiz-dp-set-20-q5",
        "question": "Which statement best distinguishes DP from greedy algorithms?",
        "options": [
          "DP systematically considers combinations of subproblem decisions, while greedy commits to locally preferred choices when justified",
          "DP never uses optimization",
          "Greedy algorithms always produce incorrect answers",
          "DP cannot use recursion"
        ],
        "correctIndex": 0,
        "explanation": "DP explores structured alternatives through states, while greedy relies on a property proving local choices lead to a global optimum."
      },
      {
        "id": "quiz-dp-set-20-q6",
        "question": "Why can a seemingly correct DP solution still fail on large inputs?",
        "options": [
          "Its state space, transition cost, memory usage, or numeric range may be too large",
          "DP solutions always fail on large inputs",
          "Base cases are never important",
          "Recursion is always the problem"
        ],
        "correctIndex": 0,
        "explanation": "Correctness alone is not enough; the state count, transitions, memory, and integer limits must also fit the constraints."
      },
      {
        "id": "quiz-dp-set-20-q7",
        "question": "What is the most important advanced DP skill?",
        "options": [
          "Recognizing the underlying state structure and reducing the problem to reusable subproblems",
          "Memorizing every DP formula",
          "Always using recursion",
          "Always using a 2D table"
        ],
        "correctIndex": 0,
        "explanation": "Advanced DP is less about memorizing formulas and more about identifying the right states, transitions, and optimization opportunities."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-1",
    "title": "Backtracking - Level 1",
    "topicId": "backtracking",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-1-q1",
        "question": "What is backtracking?",
        "options": [
          "A technique that explores choices and undoes them when they cannot lead to a valid solution",
          "A sorting algorithm",
          "A method for storing key-value pairs",
          "A graph shortest-path algorithm"
        ],
        "correctIndex": 0,
        "explanation": "Backtracking builds a solution step by step and reverses a choice when that path cannot produce a valid answer."
      },
      {
        "id": "quiz-backtracking-set-1-q2",
        "question": "What is the basic idea behind backtracking?",
        "options": [
          "Choose, explore, and undo",
          "Sort, merge, and delete",
          "Push, pop, and peek",
          "Search, hash, and sort"
        ],
        "correctIndex": 0,
        "explanation": "Backtracking repeatedly makes a choice, explores it, and undoes it before trying another choice."
      },
      {
        "id": "quiz-backtracking-set-1-q3",
        "question": "Which problem is commonly solved using backtracking?",
        "options": [
          "Generating all subsets",
          "Binary Search",
          "Finding an array maximum",
          "Counting frequencies with a hash map"
        ],
        "correctIndex": 0,
        "explanation": "Backtracking is well suited to problems where many possible combinations or arrangements must be explored."
      },
      {
        "id": "quiz-backtracking-set-1-q4",
        "question": "What does a recursive call usually represent in a backtracking solution?",
        "options": [
          "Moving to the next decision or level",
          "Sorting the input",
          "Deleting the current solution",
          "Ending the entire program"
        ],
        "correctIndex": 0,
        "explanation": "Each recursive call typically represents making another choice in the partial solution."
      },
      {
        "id": "quiz-backtracking-set-1-q5",
        "question": "What is a partial solution?",
        "options": [
          "A solution that has been built only up to the current decision",
          "The final answer only",
          "An unsorted input",
          "A deleted solution"
        ],
        "correctIndex": 0,
        "explanation": "Backtracking gradually constructs a partial solution before reaching a complete one."
      },
      {
        "id": "quiz-backtracking-set-1-q6",
        "question": "Why do we undo a choice in backtracking?",
        "options": [
          "So another possible choice can be explored using the previous state",
          "To sort the choices",
          "To permanently delete the solution",
          "To reduce the input size"
        ],
        "correctIndex": 0,
        "explanation": "Undoing restores the state so the algorithm can explore another branch."
      },
      {
        "id": "quiz-backtracking-set-1-q7",
        "question": "Which structure is commonly used to store the current backtracking solution?",
        "options": [
          "Array or list",
          "Heap only",
          "Graph only",
          "Queue only"
        ],
        "correctIndex": 0,
        "explanation": "A list or array is commonly modified as choices are added and removed."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-2",
    "title": "Backtracking - Level 2",
    "topicId": "backtracking",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-2-q1",
        "question": "What is the base case in a backtracking algorithm?",
        "options": [
          "The condition indicating that a complete solution has been constructed",
          "The first loop iteration",
          "The largest input value",
          "The moment the first choice is made"
        ],
        "correctIndex": 0,
        "explanation": "When the required solution is complete, the algorithm processes or records it."
      },
      {
        "id": "quiz-backtracking-set-2-q2",
        "question": "What does pruning mean in backtracking?",
        "options": [
          "Stopping exploration of a branch that cannot produce a valid solution",
          "Deleting the input",
          "Sorting all candidates",
          "Removing the final answer"
        ],
        "correctIndex": 0,
        "explanation": "Pruning avoids unnecessary exploration of branches that are already known to fail."
      },
      {
        "id": "quiz-backtracking-set-2-q3",
        "question": "Which step normally happens after a recursive backtracking call returns?",
        "options": [
          "Undo the choice",
          "Sort the entire input",
          "Delete every previous choice",
          "Restart the program"
        ],
        "correctIndex": 0,
        "explanation": "The choice is removed so the next candidate can be tested."
      },
      {
        "id": "quiz-backtracking-set-2-q4",
        "question": "What does the recursion tree represent?",
        "options": [
          "Different choices and possible solution paths",
          "The sorted input",
          "Only successful solutions",
          "Memory addresses"
        ],
        "correctIndex": 0,
        "explanation": "Each branch of the recursion tree represents a different sequence of choices."
      },
      {
        "id": "quiz-backtracking-set-2-q5",
        "question": "If a branch violates a constraint, what should backtracking usually do?",
        "options": [
          "Stop exploring that branch",
          "Continue deeper anyway",
          "Sort the branch",
          "Duplicate the branch"
        ],
        "correctIndex": 0,
        "explanation": "Once a partial solution is invalid, deeper choices cannot repair it in many backtracking problems."
      },
      {
        "id": "quiz-backtracking-set-2-q6",
        "question": "What makes backtracking different from simple brute force?",
        "options": [
          "It can prune invalid branches early",
          "It never explores choices",
          "It always runs in O(n)",
          "It never uses recursion"
        ],
        "correctIndex": 0,
        "explanation": "Backtracking is essentially structured brute force with state management and pruning."
      },
      {
        "id": "quiz-backtracking-set-2-q7",
        "question": "What is a decision tree in backtracking?",
        "options": [
          "A tree showing the choices available at each step",
          "A binary search tree",
          "A sorted tree",
          "A graph of memory addresses"
        ],
        "correctIndex": 0,
        "explanation": "The decision tree models all possible choices and their resulting branches."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-3",
    "title": "Backtracking - Level 3",
    "topicId": "backtracking",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-3-q1",
        "question": "How many subsets does a set of n distinct elements have?",
        "options": [
          "2^n",
          "n",
          "n²",
          "n!"
        ],
        "correctIndex": 0,
        "explanation": "Each element has two choices: include it or exclude it, giving 2^n subsets."
      },
      {
        "id": "quiz-backtracking-set-3-q2",
        "question": "Which two choices are commonly made for each element when generating subsets?",
        "options": [
          "Include it or exclude it",
          "Sort it or reverse it",
          "Push it or queue it",
          "Multiply it or divide it"
        ],
        "correctIndex": 0,
        "explanation": "Every element can independently be selected or skipped."
      },
      {
        "id": "quiz-backtracking-set-3-q3",
        "question": "How many subsets does [1,2,3] have?",
        "options": [
          "6",
          "8",
          "9",
          "3"
        ],
        "correctIndex": 1,
        "explanation": "There are 2^3 = 8 subsets, including the empty subset."
      },
      {
        "id": "quiz-backtracking-set-3-q4",
        "question": "Which subset is always included when generating all subsets?",
        "options": [
          "The empty subset",
          "Only the full set",
          "Only singleton subsets",
          "Only sorted subsets"
        ],
        "correctIndex": 0,
        "explanation": "Choosing no elements produces the empty subset."
      },
      {
        "id": "quiz-backtracking-set-3-q5",
        "question": "What is the recursion depth when generating subsets of n elements using one decision per element?",
        "options": [
          "n",
          "2^n",
          "n²",
          "n!"
        ],
        "correctIndex": 0,
        "explanation": "There is typically one recursion level for each element."
      },
      {
        "id": "quiz-backtracking-set-3-q6",
        "question": "What is the main source of exponential growth in subset generation?",
        "options": [
          "Each element creates two possible choices",
          "Each element is sorted twice",
          "Each element is stored in a graph",
          "Each element creates n choices"
        ],
        "correctIndex": 0,
        "explanation": "Two choices at each of n levels produce 2^n possible combinations."
      },
      {
        "id": "quiz-backtracking-set-3-q7",
        "question": "Can subsets be generated iteratively using bitmasks instead of recursion?",
        "options": [
          "Yes",
          "No",
          "Only for strings",
          "Only for linked lists"
        ],
        "correctIndex": 0,
        "explanation": "Each bit in a mask can represent whether the corresponding element is selected."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-4",
    "title": "Backtracking - Level 4",
    "topicId": "backtracking",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-4-q1",
        "question": "What is the goal of the Permutations problem?",
        "options": [
          "Generate all possible orderings of the given elements",
          "Generate only subsets",
          "Sort the input once",
          "Find the smallest element"
        ],
        "correctIndex": 0,
        "explanation": "A permutation is an arrangement of all elements in a particular order."
      },
      {
        "id": "quiz-backtracking-set-4-q2",
        "question": "How many permutations are there for n distinct elements?",
        "options": [
          "2^n",
          "n!",
          "n²",
          "n"
        ],
        "correctIndex": 1,
        "explanation": "There are n choices for the first position, n-1 for the second, and so on, giving n!."
      },
      {
        "id": "quiz-backtracking-set-4-q3",
        "question": "How many permutations are there for [1,2,3]?",
        "options": [
          "3",
          "6",
          "9",
          "8"
        ],
        "correctIndex": 1,
        "explanation": "Three distinct elements have 3! = 6 permutations."
      },
      {
        "id": "quiz-backtracking-set-4-q4",
        "question": "What is commonly tracked while generating permutations?",
        "options": [
          "Which elements have already been used",
          "Only the maximum value",
          "Only the array length",
          "Only the first element"
        ],
        "correctIndex": 0,
        "explanation": "A used array or bitmask prevents the same element from being selected twice in one permutation."
      },
      {
        "id": "quiz-backtracking-set-4-q5",
        "question": "What happens after placing an element into the current permutation?",
        "options": [
          "Recursively choose the next position",
          "Immediately delete the entire permutation",
          "Sort the array",
          "Stop the algorithm"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm continues making choices until all positions are filled."
      },
      {
        "id": "quiz-backtracking-set-4-q6",
        "question": "What happens when a permutation is complete?",
        "options": [
          "It is added to the result",
          "It is always discarded",
          "The input is sorted",
          "The recursion restarts from the beginning"
        ],
        "correctIndex": 0,
        "explanation": "A complete permutation is a valid result and is recorded."
      },
      {
        "id": "quiz-backtracking-set-4-q7",
        "question": "Why is permutation generation more expensive than subset generation?",
        "options": [
          "There are n! permutations compared with 2^n subsets",
          "Permutations use no recursion",
          "Subsets always require sorting",
          "Permutations have only n results"
        ],
        "correctIndex": 0,
        "explanation": "Factorial growth eventually becomes much larger than exponential 2^n growth."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-5",
    "title": "Backtracking - Level 5",
    "topicId": "backtracking",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-5-q1",
        "question": "What is the N-Queens problem?",
        "options": [
          "Place N queens on an N×N chessboard so that no two queens attack each other",
          "Place N kings in one row",
          "Sort N queens by position",
          "Find N shortest chess moves"
        ],
        "correctIndex": 0,
        "explanation": "Queens cannot share the same row, column, or diagonal."
      },
      {
        "id": "quiz-backtracking-set-5-q2",
        "question": "When solving N-Queens row by row, how many queens are normally placed in each row?",
        "options": [
          "One",
          "Two",
          "N",
          "Zero always"
        ],
        "correctIndex": 0,
        "explanation": "Placing one queen per row automatically satisfies the row constraint."
      },
      {
        "id": "quiz-backtracking-set-5-q3",
        "question": "Which constraints must be checked before placing a queen?",
        "options": [
          "Column and both diagonals",
          "Only the row",
          "Only the column",
          "Only the board edges"
        ],
        "correctIndex": 0,
        "explanation": "Queens attack vertically and diagonally, so those positions must be safe."
      },
      {
        "id": "quiz-backtracking-set-5-q4",
        "question": "What should happen if no column is safe for the current row?",
        "options": [
          "Backtrack to the previous row",
          "Place the queen anyway",
          "Restart the entire program",
          "Delete the board"
        ],
        "correctIndex": 0,
        "explanation": "The previous placement must be changed because the current partial solution cannot continue."
      },
      {
        "id": "quiz-backtracking-set-5-q5",
        "question": "What is the purpose of a diagonal-tracking set in N-Queens?",
        "options": [
          "To quickly determine whether a queen attacks the current position diagonally",
          "To sort queens",
          "To store solutions only",
          "To count rows"
        ],
        "correctIndex": 0,
        "explanation": "Tracking diagonal identifiers allows constant-time conflict checks."
      },
      {
        "id": "quiz-backtracking-set-5-q6",
        "question": "What is the approximate naive search size for N-Queens?",
        "options": [
          "O(N!)",
          "O(N)",
          "O(log N)",
          "O(N²) exactly"
        ],
        "correctIndex": 0,
        "explanation": "Considering one column per row gives a permutation-like search space of roughly N! before pruning."
      },
      {
        "id": "quiz-backtracking-set-5-q7",
        "question": "Why is pruning important in N-Queens?",
        "options": [
          "It avoids exploring placements that already violate queen constraints",
          "It sorts the board",
          "It guarantees one solution",
          "It removes recursion"
        ],
        "correctIndex": 0,
        "explanation": "Early rejection dramatically reduces the number of branches that need to be explored."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-6",
    "title": "Backtracking - Level 6",
    "topicId": "backtracking",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-6-q1",
        "question": "What is the Subset Sum problem?",
        "options": [
          "Determine whether a subset of elements can produce a given target sum",
          "Find the largest array element",
          "Sort the subset",
          "Generate all permutations only"
        ],
        "correctIndex": 0,
        "explanation": "The problem asks whether some selection of elements adds up to the target."
      },
      {
        "id": "quiz-backtracking-set-6-q2",
        "question": "What choices can backtracking make for each number in Subset Sum?",
        "options": [
          "Include it or exclude it",
          "Sort it or reverse it",
          "Multiply it or divide it",
          "Hash it or delete it"
        ],
        "correctIndex": 0,
        "explanation": "Each number can either participate in the current subset or be skipped."
      },
      {
        "id": "quiz-backtracking-set-6-q3",
        "question": "For [2,3,7] and target 5, is a solution possible?",
        "options": [
          "Yes, using 2 and 3",
          "No, because 5 is absent",
          "Yes, using 7 only",
          "No, because there are three elements"
        ],
        "correctIndex": 0,
        "explanation": "The subset [2,3] sums to 5."
      },
      {
        "id": "quiz-backtracking-set-6-q4",
        "question": "When can Subset Sum backtracking prune a branch for positive numbers?",
        "options": [
          "When the current sum exceeds the target",
          "Whenever the current sum is below the target",
          "Whenever an element is even",
          "Never"
        ],
        "correctIndex": 0,
        "explanation": "With only positive numbers, adding more values cannot reduce an already-too-large sum."
      },
      {
        "id": "quiz-backtracking-set-6-q5",
        "question": "What is the brute-force number of subsets for n elements?",
        "options": [
          "2^n",
          "n!",
          "n²",
          "n"
        ],
        "correctIndex": 0,
        "explanation": "Each element has an include/exclude decision."
      },
      {
        "id": "quiz-backtracking-set-6-q6",
        "question": "What happens when the current sum equals the target?",
        "options": [
          "A valid subset has been found",
          "The branch must always continue",
          "The current subset must be deleted",
          "The input must be sorted"
        ],
        "correctIndex": 0,
        "explanation": "Reaching the target means the current selection satisfies the requirement."
      },
      {
        "id": "quiz-backtracking-set-6-q7",
        "question": "Can Subset Sum also be solved using Dynamic Programming?",
        "options": [
          "Yes",
          "No",
          "Only for strings",
          "Only when the array is sorted"
        ],
        "correctIndex": 0,
        "explanation": "Subset Sum has overlapping subproblems and can be solved using DP based on index and remaining sum."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-7",
    "title": "Backtracking - Level 7",
    "topicId": "backtracking",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-7-q1",
        "question": "What is a constraint in a backtracking problem?",
        "options": [
          "A rule that determines whether a partial or complete solution is valid",
          "A sorting operation",
          "A data structure",
          "A memory address"
        ],
        "correctIndex": 0,
        "explanation": "Constraints define which choices are allowed."
      },
      {
        "id": "quiz-backtracking-set-7-q2",
        "question": "What is constraint propagation?",
        "options": [
          "Using current choices to eliminate impossible future choices",
          "Copying every choice",
          "Sorting all constraints",
          "Deleting the recursion tree"
        ],
        "correctIndex": 0,
        "explanation": "Constraint propagation makes the search smarter by detecting consequences early."
      },
      {
        "id": "quiz-backtracking-set-7-q3",
        "question": "Why can ordering candidate choices improve backtracking performance?",
        "options": [
          "Good choices can reveal contradictions earlier and increase pruning",
          "It changes exponential complexity to O(1) always",
          "It eliminates the need for constraints",
          "It guarantees no recursion"
        ],
        "correctIndex": 0,
        "explanation": "Exploring promising or restrictive choices first can cause invalid branches to be rejected sooner."
      },
      {
        "id": "quiz-backtracking-set-7-q4",
        "question": "What is a feasibility check?",
        "options": [
          "A test to determine whether the current partial solution can still lead to a valid solution",
          "A sorting function",
          "A memory allocation",
          "A graph traversal"
        ],
        "correctIndex": 0,
        "explanation": "Feasibility checks are central to pruning."
      },
      {
        "id": "quiz-backtracking-set-7-q5",
        "question": "What happens if a feasibility check returns false?",
        "options": [
          "The current branch should be abandoned",
          "The branch should always continue",
          "The entire input should be deleted",
          "The algorithm should sort the candidates"
        ],
        "correctIndex": 0,
        "explanation": "A false feasibility result means the branch cannot produce a valid solution."
      },
      {
        "id": "quiz-backtracking-set-7-q6",
        "question": "Which technique can reduce duplicate work in backtracking?",
        "options": [
          "Memoizing repeated states when the problem has overlapping states",
          "Removing all recursion",
          "Sorting after every recursive call",
          "Using a queue only"
        ],
        "correctIndex": 0,
        "explanation": "Caching repeated states can convert some brute-force backtracking problems into DP-like solutions."
      },
      {
        "id": "quiz-backtracking-set-7-q7",
        "question": "What is the trade-off of aggressive pruning?",
        "options": [
          "It can greatly improve speed but requires correct and sometimes complex feasibility checks",
          "It always increases runtime",
          "It removes all possible solutions",
          "It makes memory O(1)"
        ],
        "correctIndex": 0,
        "explanation": "Effective pruning is powerful, but incorrect pruning can eliminate valid answers."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-8",
    "title": "Backtracking - Level 8",
    "topicId": "backtracking",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-8-q1",
        "question": "When generating permutations of [1,1,2], what problem occurs if duplicates are handled naively?",
        "options": [
          "Duplicate permutations may be generated",
          "No permutation can be generated",
          "The array becomes sorted automatically",
          "The recursion cannot terminate"
        ],
        "correctIndex": 0,
        "explanation": "Identical values can produce the same permutation through different recursive choices."
      },
      {
        "id": "quiz-backtracking-set-8-q2",
        "question": "What is a common technique to avoid duplicate permutations?",
        "options": [
          "Sort the input and skip equivalent unused values at the same recursion level",
          "Delete all duplicates",
          "Reverse the input",
          "Use BFS"
        ],
        "correctIndex": 0,
        "explanation": "Sorting places equal values together, allowing duplicate branches to be skipped safely."
      },
      {
        "id": "quiz-backtracking-set-8-q3",
        "question": "Why is sorting often useful before duplicate-aware backtracking?",
        "options": [
          "Equal candidates become adjacent and can be recognized easily",
          "Sorting removes all recursion",
          "Sorting guarantees O(n)",
          "Sorting creates all solutions"
        ],
        "correctIndex": 0,
        "explanation": "Adjacent equal values make duplicate detection at each decision level straightforward."
      },
      {
        "id": "quiz-backtracking-set-8-q4",
        "question": "When skipping duplicates in combination generation, what does 'same recursion level' mean?",
        "options": [
          "Two equivalent candidates are skipped as alternative choices for the same position",
          "All duplicate values are globally deleted",
          "Duplicates are skipped across every level",
          "Only the first element is considered"
        ],
        "correctIndex": 0,
        "explanation": "A duplicate candidate can be skipped when it would create the same branch choice at the current depth."
      },
      {
        "id": "quiz-backtracking-set-8-q5",
        "question": "Why should duplicates sometimes still be allowed at deeper recursion levels?",
        "options": [
          "The same value may legitimately be used in a different position when multiple copies exist",
          "Duplicates are always invalid",
          "It makes the algorithm faster",
          "It sorts the result"
        ],
        "correctIndex": 0,
        "explanation": "Skipping all duplicates globally could remove valid solutions that use multiple copies."
      },
      {
        "id": "quiz-backtracking-set-8-q6",
        "question": "What is the difference between skipping a duplicate at the same level and skipping it globally?",
        "options": [
          "Same-level skipping removes duplicate branches while preserving valid repeated-value usage",
          "They are always identical",
          "Global skipping is always correct",
          "Same-level skipping deletes the input"
        ],
        "correctIndex": 0,
        "explanation": "The distinction is essential for generating unique combinations and permutations correctly."
      },
      {
        "id": "quiz-backtracking-set-8-q7",
        "question": "Which problem commonly requires duplicate handling?",
        "options": [
          "Combination Sum II",
          "Binary Search",
          "Fibonacci",
          "Merge Sort"
        ],
        "correctIndex": 0,
        "explanation": "Combination Sum II contains duplicate candidates and requires avoiding duplicate combinations."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-9",
    "title": "Backtracking - Level 9",
    "topicId": "backtracking",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-9-q1",
        "question": "What is Combination Sum?",
        "options": [
          "Finding combinations of candidates that add up to a target, often allowing repeated use depending on the problem definition",
          "Finding all permutations of an array",
          "Sorting candidates",
          "Finding the maximum candidate"
        ],
        "correctIndex": 0,
        "explanation": "Combination Sum explores candidate choices while tracking the remaining target."
      },
      {
        "id": "quiz-backtracking-set-9-q2",
        "question": "How can a backtracking solution avoid generating duplicate combinations such as [2,3] and [3,2]?",
        "options": [
          "Move the candidate starting index forward rather than allowing earlier candidates again",
          "Sort the final result only",
          "Reverse every combination",
          "Use BFS"
        ],
        "correctIndex": 0,
        "explanation": "Maintaining a nondecreasing candidate index ensures combinations are generated in one canonical order."
      },
      {
        "id": "quiz-backtracking-set-9-q3",
        "question": "In Combination Sum where unlimited reuse is allowed, what index is commonly passed after choosing candidate i?",
        "options": [
          "i",
          "i + 1",
          "0 always",
          "i - 1"
        ],
        "correctIndex": 0,
        "explanation": "Passing i allows the same candidate to be chosen again."
      },
      {
        "id": "quiz-backtracking-set-9-q4",
        "question": "In a combination problem where each candidate can be used only once, what index is commonly passed after choosing i?",
        "options": [
          "i + 1",
          "i",
          "0",
          "i - 1"
        ],
        "correctIndex": 0,
        "explanation": "Moving to i+1 prevents the same array element from being reused."
      },
      {
        "id": "quiz-backtracking-set-9-q5",
        "question": "If candidates are positive and the remaining target becomes negative, what can happen?",
        "options": [
          "The branch can be pruned",
          "The target becomes positive",
          "The combination is automatically valid",
          "The algorithm must continue"
        ],
        "correctIndex": 0,
        "explanation": "With positive candidates, adding more values cannot reduce an already-negative remaining target."
      },
      {
        "id": "quiz-backtracking-set-9-q6",
        "question": "What should happen when the remaining target becomes exactly zero?",
        "options": [
          "Record the current combination as a valid solution",
          "Delete the combination",
          "Continue forever",
          "Sort the combination"
        ],
        "correctIndex": 0,
        "explanation": "A remaining target of zero means the selected values reach the required sum."
      },
      {
        "id": "quiz-backtracking-set-9-q7",
        "question": "What is an important invariant when generating combinations?",
        "options": [
          "Candidates are considered in a consistent order to prevent duplicate arrangements",
          "Candidates must always decrease",
          "Every candidate must be used",
          "The target must increase"
        ],
        "correctIndex": 0,
        "explanation": "Maintaining an ordering ensures equivalent combinations are not generated multiple times."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-10",
    "title": "Backtracking - Level 10",
    "topicId": "backtracking",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-10-q1",
        "question": "What is the Word Search problem?",
        "options": [
          "Determine whether a word can be formed by moving through adjacent cells in a grid without reusing a cell",
          "Sort words alphabetically",
          "Find the longest row",
          "Build a binary tree"
        ],
        "correctIndex": 0,
        "explanation": "Backtracking explores neighboring cells while tracking which cells have already been used."
      },
      {
        "id": "quiz-backtracking-set-10-q2",
        "question": "What is usually tracked in Word Search?",
        "options": [
          "Visited cells",
          "Only the current row",
          "Only the first character",
          "The sorted grid"
        ],
        "correctIndex": 0,
        "explanation": "A cell cannot normally be reused within the same path, so visited state is required."
      },
      {
        "id": "quiz-backtracking-set-10-q3",
        "question": "How many directions are commonly considered in a four-direction Word Search?",
        "options": [
          "4",
          "2",
          "8",
          "1"
        ],
        "correctIndex": 0,
        "explanation": "The standard four directions are up, down, left, and right."
      },
      {
        "id": "quiz-backtracking-set-10-q4",
        "question": "What should happen if the current grid character does not match the required word character?",
        "options": [
          "Return false for that path",
          "Continue to every neighbor anyway",
          "Sort the grid",
          "Delete the character permanently"
        ],
        "correctIndex": 0,
        "explanation": "A mismatching cell cannot continue the current word path."
      },
      {
        "id": "quiz-backtracking-set-10-q5",
        "question": "What is a common way to mark a cell as visited?",
        "options": [
          "Temporarily modify it or maintain a visited matrix",
          "Sort its row",
          "Duplicate it",
          "Move it to another grid"
        ],
        "correctIndex": 0,
        "explanation": "Temporary marking avoids using the same cell twice on one path."
      },
      {
        "id": "quiz-backtracking-set-10-q6",
        "question": "Why must the visited state be undone after returning from recursion?",
        "options": [
          "The cell can be used in another independent path",
          "The cell must be deleted",
          "The grid must remain sorted",
          "The word changes"
        ],
        "correctIndex": 0,
        "explanation": "Backtracking restores the grid so other paths can explore that cell."
      },
      {
        "id": "quiz-backtracking-set-10-q7",
        "question": "What is a useful early optimization for Word Search?",
        "options": [
          "Start only from cells matching the first character",
          "Start from every cell regardless of its value",
          "Sort the board",
          "Reverse the word always"
        ],
        "correctIndex": 0,
        "explanation": "A starting cell that does not match the first character cannot produce a valid path."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-11",
    "title": "Backtracking - Level 11",
    "topicId": "backtracking",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-11-q1",
        "question": "What is Sudoku solving with backtracking based on?",
        "options": [
          "Trying valid numbers and undoing choices when they lead to contradictions",
          "Sorting every row",
          "Using Binary Search only",
          "Randomly filling cells"
        ],
        "correctIndex": 0,
        "explanation": "The solver chooses a candidate number, checks constraints, and backtracks when necessary."
      },
      {
        "id": "quiz-backtracking-set-11-q2",
        "question": "What constraints must a Sudoku placement satisfy?",
        "options": [
          "Row, column, and corresponding subgrid",
          "Only the row",
          "Only the column",
          "Only the diagonal"
        ],
        "correctIndex": 0,
        "explanation": "Every number must satisfy all three Sudoku constraints."
      },
      {
        "id": "quiz-backtracking-set-11-q3",
        "question": "What is a useful optimization when selecting the next Sudoku cell?",
        "options": [
          "Choose the empty cell with the fewest possible candidates",
          "Always choose the first empty cell",
          "Choose a random filled cell",
          "Choose the largest number"
        ],
        "correctIndex": 0,
        "explanation": "The minimum-remaining-values strategy tends to expose contradictions earlier."
      },
      {
        "id": "quiz-backtracking-set-11-q4",
        "question": "What happens if a Sudoku cell has no valid candidate?",
        "options": [
          "Backtrack immediately",
          "Fill it with zero",
          "Ignore the constraint",
          "Restart from scratch"
        ],
        "correctIndex": 0,
        "explanation": "No candidate means the current partial assignment cannot lead to a valid solution."
      },
      {
        "id": "quiz-backtracking-set-11-q5",
        "question": "What data structures can speed up Sudoku constraint checks?",
        "options": [
          "Boolean sets or bitmasks for rows, columns, and boxes",
          "Only a queue",
          "Only a stack",
          "A sorting algorithm"
        ],
        "correctIndex": 0,
        "explanation": "Bitmasks or sets can provide fast membership checks."
      },
      {
        "id": "quiz-backtracking-set-11-q6",
        "question": "Why is Sudoku a good backtracking example?",
        "options": [
          "Each cell creates a constrained decision with immediate opportunities for pruning",
          "There are no constraints",
          "It requires sorting",
          "It has only one possible choice"
        ],
        "correctIndex": 0,
        "explanation": "Constraint violations can be detected early, making pruning effective."
      },
      {
        "id": "quiz-backtracking-set-11-q7",
        "question": "What happens after successfully placing a candidate in Sudoku?",
        "options": [
          "Recursively solve the remaining empty cells",
          "Immediately return success",
          "Delete the candidate",
          "Sort the board"
        ],
        "correctIndex": 0,
        "explanation": "A placement is only part of the solution; the remaining cells must still be solved."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-12",
    "title": "Backtracking - Level 12",
    "topicId": "backtracking",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-12-q1",
        "question": "What is graph coloring?",
        "options": [
          "Assigning colors to vertices so adjacent vertices satisfy a color constraint",
          "Sorting graph vertices",
          "Finding graph shortest paths",
          "Deleting graph edges"
        ],
        "correctIndex": 0,
        "explanation": "In standard graph coloring, adjacent vertices must receive different colors."
      },
      {
        "id": "quiz-backtracking-set-12-q2",
        "question": "How can backtracking solve graph coloring?",
        "options": [
          "Assign a color to a vertex, validate it, and backtrack when it causes a conflict",
          "Always use the same color",
          "Sort vertices by value",
          "Run Binary Search"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm explores possible color assignments while pruning invalid ones."
      },
      {
        "id": "quiz-backtracking-set-12-q3",
        "question": "What is checked before assigning a color to a vertex?",
        "options": [
          "Whether adjacent colored vertices already use that color",
          "Whether the vertex is the largest",
          "Whether the graph is sorted",
          "Whether the vertex has even degree only"
        ],
        "correctIndex": 0,
        "explanation": "A color is valid only if it does not conflict with already colored neighbors."
      },
      {
        "id": "quiz-backtracking-set-12-q4",
        "question": "For a graph with n vertices and m available colors, what is a simple upper-bound search size?",
        "options": [
          "O(m^n)",
          "O(n log m)",
          "O(n²)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Each vertex may initially have m choices, giving m^n possible assignments."
      },
      {
        "id": "quiz-backtracking-set-12-q5",
        "question": "Why does graph coloring become difficult as the number of vertices grows?",
        "options": [
          "The number of possible color assignments grows exponentially",
          "Graphs cannot store colors",
          "Every graph has exactly one coloring",
          "Color checking takes O(1) for the entire graph"
        ],
        "correctIndex": 0,
        "explanation": "The raw assignment space is exponential, so pruning and heuristics become important."
      },
      {
        "id": "quiz-backtracking-set-12-q6",
        "question": "Which vertex ordering can improve backtracking graph coloring?",
        "options": [
          "Coloring highly constrained or high-degree vertices earlier",
          "Always choosing vertices randomly",
          "Choosing isolated vertices first",
          "Sorting vertices alphabetically"
        ],
        "correctIndex": 0,
        "explanation": "Highly constrained vertices can expose conflicts earlier."
      },
      {
        "id": "quiz-backtracking-set-12-q7",
        "question": "What is the goal of pruning in graph coloring?",
        "options": [
          "Avoid exploring color assignments that already violate constraints",
          "Remove valid colorings",
          "Delete graph vertices",
          "Reduce the number of colors automatically"
        ],
        "correctIndex": 0,
        "explanation": "Invalid partial colorings cannot become valid by assigning more vertices."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-13",
    "title": "Backtracking - Level 13",
    "topicId": "backtracking",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-13-q1",
        "question": "What is a Hamiltonian path?",
        "options": [
          "A path that visits every vertex exactly once",
          "A path that visits every edge exactly once",
          "The shortest path between two vertices",
          "A path containing only cycles"
        ],
        "correctIndex": 0,
        "explanation": "A Hamiltonian path visits every vertex exactly once."
      },
      {
        "id": "quiz-backtracking-set-13-q2",
        "question": "How can backtracking search for a Hamiltonian path?",
        "options": [
          "Try an unvisited adjacent vertex and backtrack when no continuation is possible",
          "Sort the vertices",
          "Use Binary Search",
          "Always choose the smallest vertex"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm incrementally constructs a path while ensuring vertices are not reused."
      },
      {
        "id": "quiz-backtracking-set-13-q3",
        "question": "What must be tracked during Hamiltonian path search?",
        "options": [
          "Visited vertices",
          "Only edge weights",
          "Only the starting vertex",
          "Sorted vertex values"
        ],
        "correctIndex": 0,
        "explanation": "A vertex cannot be used more than once in a Hamiltonian path."
      },
      {
        "id": "quiz-backtracking-set-13-q4",
        "question": "What is the worst-case nature of basic Hamiltonian path backtracking?",
        "options": [
          "Exponential",
          "Always O(log n)",
          "Always O(n)",
          "Always O(1)"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm may need to explore a huge number of possible vertex sequences."
      },
      {
        "id": "quiz-backtracking-set-13-q5",
        "question": "What is the Hamiltonian cycle problem?",
        "options": [
          "Finding a cycle that visits every vertex exactly once and returns to the start",
          "Finding every edge once",
          "Finding the shortest edge",
          "Finding any cycle"
        ],
        "correctIndex": 0,
        "explanation": "A Hamiltonian cycle extends the Hamiltonian path requirement by returning to the starting vertex."
      },
      {
        "id": "quiz-backtracking-set-13-q6",
        "question": "What additional condition is needed at the end of Hamiltonian cycle search?",
        "options": [
          "The final vertex must have an edge back to the starting vertex",
          "The final vertex must be the smallest",
          "The graph must be sorted",
          "Every edge must be used"
        ],
        "correctIndex": 0,
        "explanation": "The final vertex must connect back to the start to close the cycle."
      },
      {
        "id": "quiz-backtracking-set-13-q7",
        "question": "What can improve Hamiltonian search performance?",
        "options": [
          "Pruning based on connectivity and remaining feasible choices",
          "Sorting edge names",
          "Deleting all low-degree vertices",
          "Ignoring visited status"
        ],
        "correctIndex": 0,
        "explanation": "Detecting impossible partial paths early can significantly reduce exploration."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-14",
    "title": "Backtracking - Level 14",
    "topicId": "backtracking",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-14-q1",
        "question": "What is the difference between backtracking and Dynamic Programming?",
        "options": [
          "Backtracking explores choices, while DP stores reusable subproblem results",
          "They are always identical",
          "DP never uses recursion",
          "Backtracking always runs faster"
        ],
        "correctIndex": 0,
        "explanation": "Backtracking focuses on exploring a decision space, while DP exploits overlapping subproblems."
      },
      {
        "id": "quiz-backtracking-set-14-q2",
        "question": "When can backtracking be combined with memoization?",
        "options": [
          "When different search paths can reach the same state",
          "Only when the input is sorted",
          "Never",
          "Only for arrays"
        ],
        "correctIndex": 0,
        "explanation": "Caching repeated states can prevent solving the same subproblem from multiple paths."
      },
      {
        "id": "quiz-backtracking-set-14-q3",
        "question": "What does the phrase 'search space' mean in backtracking?",
        "options": [
          "The collection of possible choices and resulting states that may be explored",
          "Only the input array",
          "Only successful answers",
          "The program's memory"
        ],
        "correctIndex": 0,
        "explanation": "The search space represents all possible decision paths."
      },
      {
        "id": "quiz-backtracking-set-14-q4",
        "question": "What is branch-and-bound?",
        "options": [
          "A search technique that uses bounds to eliminate branches that cannot improve the best solution",
          "A tree sorting method",
          "A graph traversal",
          "A hash-table technique"
        ],
        "correctIndex": 0,
        "explanation": "Branch-and-bound extends search by using objective bounds to prune noncompetitive branches."
      },
      {
        "id": "quiz-backtracking-set-14-q5",
        "question": "What does a lower or upper bound help determine in optimization backtracking?",
        "options": [
          "Whether a branch can possibly beat the current best solution",
          "Whether the input is sorted",
          "Whether recursion should always stop",
          "The exact final answer immediately"
        ],
        "correctIndex": 0,
        "explanation": "If a branch cannot beat the current best, it can safely be pruned."
      },
      {
        "id": "quiz-backtracking-set-14-q6",
        "question": "Why is maintaining a good global best solution useful in branch-and-bound?",
        "options": [
          "It makes the pruning bound stronger as the search progresses",
          "It eliminates all branches immediately",
          "It guarantees polynomial time",
          "It removes constraints"
        ],
        "correctIndex": 0,
        "explanation": "A better current solution raises the bar that remaining branches must beat."
      },
      {
        "id": "quiz-backtracking-set-14-q7",
        "question": "Can branch-and-bound guarantee polynomial time for arbitrary NP-hard problems?",
        "options": [
          "No",
          "Yes, always",
          "Only when n is odd",
          "Only for graphs"
        ],
        "correctIndex": 0,
        "explanation": "Worst-case exponential behavior can remain even when pruning works extremely well in practice."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-15",
    "title": "Backtracking - Level 15",
    "topicId": "backtracking",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-15-q1",
        "question": "When generating unique subsets from [1,2,2], what is the key challenge?",
        "options": [
          "Avoid generating duplicate subsets",
          "Avoid generating any subset",
          "Sort every subset afterward",
          "Prevent the use of recursion"
        ],
        "correctIndex": 0,
        "explanation": "Duplicate values can cause identical subsets to be generated through different branches."
      },
      {
        "id": "quiz-backtracking-set-15-q2",
        "question": "What is a common strategy for generating unique subsets?",
        "options": [
          "Sort the input and skip equal values at the same recursion level",
          "Delete every duplicate from the input",
          "Use Binary Search",
          "Reverse the array"
        ],
        "correctIndex": 0,
        "explanation": "Sorting and same-level duplicate skipping preserves valid subsets while removing duplicate branches."
      },
      {
        "id": "quiz-backtracking-set-15-q3",
        "question": "Why must the duplicate-skip rule be applied carefully?",
        "options": [
          "Skipping duplicates at every depth could remove valid subsets containing repeated values",
          "Duplicates are never allowed",
          "Sorting destroys the solution",
          "Recursion cannot handle duplicates"
        ],
        "correctIndex": 0,
        "explanation": "A duplicate value can be legitimately selected at a deeper level when the input contains multiple copies."
      },
      {
        "id": "quiz-backtracking-set-15-q4",
        "question": "For [1,2,2], how many unique subsets are there?",
        "options": [
          "6",
          "8",
          "7",
          "4"
        ],
        "correctIndex": 0,
        "explanation": "The unique subsets are [], [1], [2], [1,2], [2,2], and [1,2,2]."
      },
      {
        "id": "quiz-backtracking-set-15-q5",
        "question": "What does choosing a duplicate at a deeper level represent?",
        "options": [
          "Using another copy of the same value",
          "Generating the exact same branch necessarily",
          "Deleting the duplicate",
          "Sorting the subset"
        ],
        "correctIndex": 0,
        "explanation": "Multiple copies in the input can legitimately appear together in a subset."
      },
      {
        "id": "quiz-backtracking-set-15-q6",
        "question": "What is the role of the starting index in combination-style backtracking?",
        "options": [
          "It prevents selecting earlier elements again and maintains a consistent ordering",
          "It sorts the input",
          "It counts duplicates only",
          "It stores the answer"
        ],
        "correctIndex": 0,
        "explanation": "The starting index controls which candidates can be considered next."
      },
      {
        "id": "quiz-backtracking-set-15-q7",
        "question": "What is a common bug when generating combinations?",
        "options": [
          "Allowing the recursive loop to start from an earlier index and generating duplicate arrangements",
          "Using a list",
          "Sorting the candidates",
          "Using a base case"
        ],
        "correctIndex": 0,
        "explanation": "Incorrect index progression can cause the same combination to appear in multiple orders."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-16",
    "title": "Backtracking - Level 16",
    "topicId": "backtracking",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-16-q1",
        "question": "What is the Rat in a Maze problem?",
        "options": [
          "Finding a path through a maze from a start cell to a destination while respecting blocked cells",
          "Sorting maze cells",
          "Finding the shortest array",
          "Coloring a graph"
        ],
        "correctIndex": 0,
        "explanation": "Backtracking can explore possible paths while marking cells to avoid cycles."
      },
      {
        "id": "quiz-backtracking-set-16-q2",
        "question": "Why is a visited matrix useful in maze backtracking?",
        "options": [
          "It prevents the path from revisiting the same cell and creating cycles",
          "It sorts the maze",
          "It guarantees the shortest path",
          "It removes obstacles"
        ],
        "correctIndex": 0,
        "explanation": "Visited tracking prevents infinite or redundant exploration."
      },
      {
        "id": "quiz-backtracking-set-16-q3",
        "question": "If the goal is to find any valid maze path, when can recursion stop successfully?",
        "options": [
          "When the destination cell is reached",
          "When the first cell is visited",
          "When the maze has one obstacle",
          "After sorting the grid"
        ],
        "correctIndex": 0,
        "explanation": "Reaching the destination establishes that a valid path exists."
      },
      {
        "id": "quiz-backtracking-set-16-q4",
        "question": "Does DFS-style backtracking necessarily find the shortest path in an unweighted maze?",
        "options": [
          "No",
          "Yes, always",
          "Only when the maze is square",
          "Only with diagonal movement"
        ],
        "correctIndex": 0,
        "explanation": "DFS may find a valid path before discovering a shorter one; BFS is typically used for shortest unweighted paths."
      },
      {
        "id": "quiz-backtracking-set-16-q5",
        "question": "What happens when a maze path reaches a dead end?",
        "options": [
          "Undo the last move and try another direction",
          "Continue through the wall",
          "Delete the maze",
          "Restart the computer"
        ],
        "correctIndex": 0,
        "explanation": "Backtracking returns to the previous cell and explores another available route."
      },
      {
        "id": "quiz-backtracking-set-16-q6",
        "question": "Which optimization can reduce unnecessary maze exploration?",
        "options": [
          "Marking visited cells and rejecting blocked cells immediately",
          "Ignoring boundaries",
          "Trying the same direction repeatedly",
          "Sorting cells"
        ],
        "correctIndex": 0,
        "explanation": "Early validity checks prevent exploration of impossible or repeated paths."
      },
      {
        "id": "quiz-backtracking-set-16-q7",
        "question": "What is the worst-case nature of basic maze backtracking?",
        "options": [
          "It can be exponential in the number of cells",
          "It is always O(1)",
          "It is always O(log n)",
          "It is always O(n)"
        ],
        "correctIndex": 0,
        "explanation": "A large maze can contain an enormous number of possible paths."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-17",
    "title": "Backtracking - Level 17",
    "topicId": "backtracking",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-17-q1",
        "question": "What is a Hamiltonian-cycle-style backtracking invariant?",
        "options": [
          "The current path contains no repeated vertex",
          "Every edge must already be used",
          "Every vertex must have the same degree",
          "The graph must be sorted"
        ],
        "correctIndex": 0,
        "explanation": "A Hamiltonian path or cycle requires each vertex to appear exactly once."
      },
      {
        "id": "quiz-backtracking-set-17-q2",
        "question": "Why can choosing a vertex with very few available neighbors first improve search?",
        "options": [
          "It can expose dead ends earlier",
          "It guarantees a solution",
          "It makes the graph sorted",
          "It removes all recursion"
        ],
        "correctIndex": 0,
        "explanation": "Highly constrained choices can reveal impossible branches earlier."
      },
      {
        "id": "quiz-backtracking-set-17-q3",
        "question": "What is a forward-checking technique?",
        "options": [
          "After a choice, inspect remaining variables to ensure they still have feasible options",
          "Search only forward in an array",
          "Reverse every recursive call",
          "Sort all candidates"
        ],
        "correctIndex": 0,
        "explanation": "Forward checking detects future impossibilities immediately after making a choice."
      },
      {
        "id": "quiz-backtracking-set-17-q4",
        "question": "What is the minimum remaining values heuristic?",
        "options": [
          "Choose the variable with the fewest legal values remaining",
          "Choose the variable with the largest value",
          "Choose the first variable always",
          "Choose the most recently modified variable"
        ],
        "correctIndex": 0,
        "explanation": "MRV prioritizes the most constrained variable to expose contradictions early."
      },
      {
        "id": "quiz-backtracking-set-17-q5",
        "question": "Why does MRV often improve constraint-satisfaction backtracking?",
        "options": [
          "It tends to discover impossible branches earlier",
          "It eliminates every branch",
          "It guarantees polynomial time",
          "It removes the need for constraints"
        ],
        "correctIndex": 0,
        "explanation": "A variable with very few choices is more likely to reveal failure quickly."
      },
      {
        "id": "quiz-backtracking-set-17-q6",
        "question": "What is the degree heuristic in graph-related backtracking?",
        "options": [
          "Prioritize vertices based on how constrained they are by neighboring relationships",
          "Sort vertices numerically",
          "Choose vertices with zero degree first always",
          "Ignore graph edges"
        ],
        "correctIndex": 0,
        "explanation": "Degree information can help choose decisions that are likely to constrain the search strongly."
      },
      {
        "id": "quiz-backtracking-set-17-q7",
        "question": "Are heuristics guaranteed to improve worst-case asymptotic complexity?",
        "options": [
          "No",
          "Yes, always",
          "Only for N-Queens",
          "Only for Sudoku"
        ],
        "correctIndex": 0,
        "explanation": "Heuristics often improve practical performance but do not necessarily change worst-case complexity."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-18",
    "title": "Backtracking - Level 18",
    "topicId": "backtracking",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-18-q1",
        "question": "What is exact cover?",
        "options": [
          "Selecting subsets so that every required element is covered exactly once",
          "Covering every element at least twice",
          "Sorting all subsets",
          "Finding a graph spanning tree"
        ],
        "correctIndex": 0,
        "explanation": "Exact cover requires every constraint or item to be covered exactly once."
      },
      {
        "id": "quiz-backtracking-set-18-q2",
        "question": "Which famous algorithm is designed for exact cover?",
        "options": [
          "Algorithm X",
          "Dijkstra's algorithm",
          "Merge Sort",
          "Binary Search"
        ],
        "correctIndex": 0,
        "explanation": "Donald Knuth's Algorithm X is a backtracking algorithm for solving exact cover problems."
      },
      {
        "id": "quiz-backtracking-set-18-q3",
        "question": "What data structure is famously used to implement Algorithm X efficiently?",
        "options": [
          "Dancing Links",
          "Binary Heap",
          "Trie",
          "Stack only"
        ],
        "correctIndex": 0,
        "explanation": "Dancing Links is a linked data structure designed to efficiently remove and restore sparse matrix columns and rows."
      },
      {
        "id": "quiz-backtracking-set-18-q4",
        "question": "Why is Sudoku related to exact cover?",
        "options": [
          "Sudoku constraints can be represented as an exact-cover problem",
          "Sudoku has no constraints",
          "Sudoku is a sorting problem",
          "Sudoku requires only Binary Search"
        ],
        "correctIndex": 0,
        "explanation": "Cell, row, column, and box constraints can be represented as exact-cover requirements."
      },
      {
        "id": "quiz-backtracking-set-18-q5",
        "question": "What is the purpose of choosing a constrained column in Algorithm X?",
        "options": [
          "Reduce branching by selecting a requirement with fewer available rows",
          "Sort the matrix",
          "Guarantee a solution",
          "Delete all columns"
        ],
        "correctIndex": 0,
        "explanation": "Choosing a highly constrained requirement reduces the number of branches to explore."
      },
      {
        "id": "quiz-backtracking-set-18-q6",
        "question": "What does covering a constraint mean in Algorithm X?",
        "options": [
          "Temporarily remove the constraint and conflicting choices from consideration",
          "Permanently delete the input",
          "Sort the constraint",
          "Mark every constraint as satisfied"
        ],
        "correctIndex": 0,
        "explanation": "Covering updates the remaining problem so incompatible choices cannot be selected."
      },
      {
        "id": "quiz-backtracking-set-18-q7",
        "question": "Why must Algorithm X support efficient undo operations?",
        "options": [
          "Backtracking needs to restore the problem state after exploring a branch",
          "The algorithm never returns from recursion",
          "The input must remain sorted",
          "It prevents all recursion"
        ],
        "correctIndex": 0,
        "explanation": "Efficient restoration is essential because many alternative branches must be explored."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-19",
    "title": "Backtracking - Level 19",
    "topicId": "backtracking",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-19-q1",
        "question": "What is the key difference between generating all solutions and finding one solution in backtracking?",
        "options": [
          "Finding one solution can stop after the first valid answer, while generating all solutions must continue exploring remaining branches",
          "They always have identical runtime",
          "Generating all solutions never uses recursion",
          "Finding one solution must always explore every branch"
        ],
        "correctIndex": 0,
        "explanation": "If only one valid solution is required, successful termination can avoid exploring the rest of the search space."
      },
      {
        "id": "quiz-backtracking-set-19-q2",
        "question": "What is a common source of memory usage in recursive backtracking?",
        "options": [
          "Recursion stack and storage of generated solutions",
          "Only the input array",
          "Binary Search",
          "CPU registers only"
        ],
        "correctIndex": 0,
        "explanation": "The recursion depth and result collection can both contribute significantly to memory usage."
      },
      {
        "id": "quiz-backtracking-set-19-q3",
        "question": "If a problem asks for all permutations, why can output size itself be factorial?",
        "options": [
          "There can be n! valid permutations",
          "There are only n results",
          "Every permutation uses no memory",
          "Sorting creates n! values"
        ],
        "correctIndex": 0,
        "explanation": "For distinct elements, the number of permutations is n!, so producing them inherently requires large output."
      },
      {
        "id": "quiz-backtracking-set-19-q4",
        "question": "What is output-sensitive complexity?",
        "options": [
          "Complexity that accounts for the time required to produce the required output",
          "Complexity based only on input size",
          "Complexity that ignores results",
          "A sorting complexity"
        ],
        "correctIndex": 0,
        "explanation": "When a problem requires many outputs, simply writing those outputs imposes an unavoidable cost."
      },
      {
        "id": "quiz-backtracking-set-19-q5",
        "question": "What is a useful optimization when only one solution is required?",
        "options": [
          "Return immediately once a valid solution is found",
          "Continue exploring every branch",
          "Store every failed path",
          "Sort every partial solution"
        ],
        "correctIndex": 0,
        "explanation": "Early termination avoids unnecessary exploration after success."
      },
      {
        "id": "quiz-backtracking-set-19-q6",
        "question": "What is the danger of modifying shared state incorrectly during backtracking?",
        "options": [
          "Changes can leak into sibling branches and produce incorrect results",
          "The algorithm automatically becomes faster",
          "The input becomes sorted",
          "The recursion depth becomes zero"
        ],
        "correctIndex": 0,
        "explanation": "Every branch must start from the correct restored state."
      },
      {
        "id": "quiz-backtracking-set-19-q7",
        "question": "What is a reliable pattern for safely managing mutable backtracking state?",
        "options": [
          "Make a choice, recurse, then undo exactly that choice",
          "Make choices without restoring anything",
          "Restore only after the whole algorithm finishes",
          "Copy the entire program state"
        ],
        "correctIndex": 0,
        "explanation": "The choose-explore-unchoose pattern keeps sibling branches independent."
      }
    ]
  },
  {
    "id": "quiz-backtracking-set-20",
    "title": "Backtracking - Level 20",
    "topicId": "backtracking",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-backtracking-set-20-q1",
        "question": "What is the most important skill for solving advanced backtracking problems?",
        "options": [
          "Identifying the decision space, constraints, pruning rules, and correct state restoration",
          "Memorizing one recursive template",
          "Always using a 2D array",
          "Always sorting the input"
        ],
        "correctIndex": 0,
        "explanation": "Advanced backtracking depends on modeling choices correctly and aggressively but safely pruning impossible branches."
      },
      {
        "id": "quiz-backtracking-set-20-q2",
        "question": "When should a backtracking state be considered invalid?",
        "options": [
          "As soon as it violates a constraint that cannot be repaired by future choices",
          "Only after every possible choice is explored",
          "Only at the root",
          "Never"
        ],
        "correctIndex": 0,
        "explanation": "Early detection of irreversible violations is the foundation of pruning."
      },
      {
        "id": "quiz-backtracking-set-20-q3",
        "question": "What is the most important property of a correct pruning condition?",
        "options": [
          "It must never prune a branch that could contain a valid required solution",
          "It should remove as many branches as possible regardless of correctness",
          "It must always run in O(n²)",
          "It must use recursion"
        ],
        "correctIndex": 0,
        "explanation": "An aggressive but incorrect pruning rule can make the algorithm miss valid solutions."
      },
      {
        "id": "quiz-backtracking-set-20-q4",
        "question": "When can a backtracking problem benefit from Dynamic Programming techniques?",
        "options": [
          "When different branches repeatedly reach the same state",
          "Only when the input is sorted",
          "Never",
          "Only when there are no constraints"
        ],
        "correctIndex": 0,
        "explanation": "Repeated states indicate overlapping subproblems, making memoization or DP potentially useful."
      },
      {
        "id": "quiz-backtracking-set-20-q5",
        "question": "What is the main trade-off when adding stronger heuristics to backtracking?",
        "options": [
          "Better practical pruning can come at the cost of more complex state management and heuristic computation",
          "Heuristics always make code simpler",
          "Heuristics guarantee polynomial time",
          "Heuristics remove the need for correctness"
        ],
        "correctIndex": 0,
        "explanation": "Sophisticated heuristics can dramatically improve search but increase implementation complexity."
      },
      {
        "id": "quiz-backtracking-set-20-q6",
        "question": "A backtracking algorithm explores 2 choices at each of n levels. What is the approximate number of leaves before pruning?",
        "options": [
          "2^n",
          "n!",
          "n²",
          "n"
        ],
        "correctIndex": 0,
        "explanation": "Two independent choices at each of n levels produce 2^n possible decision sequences."
      },
      {
        "id": "quiz-backtracking-set-20-q7",
        "question": "Which statement best summarizes the relationship between brute force and backtracking?",
        "options": [
          "Backtracking is systematic brute-force search enhanced with constraints, pruning, and state restoration",
          "Backtracking never explores alternatives",
          "Brute force is always faster",
          "Backtracking guarantees polynomial complexity"
        ],
        "correctIndex": 0,
        "explanation": "Backtracking still explores a potentially exponential search space, but it avoids many unnecessary branches through intelligent pruning."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-1",
    "title": "Greedy Algorithms - Level 1",
    "topicId": "greedy",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-1-q1",
        "question": "What is a greedy algorithm?",
        "options": [
          "An algorithm that makes the best-looking local choice at each step",
          "An algorithm that always uses recursion",
          "An algorithm that sorts every input",
          "An algorithm that explores every possible solution"
        ],
        "correctIndex": 0,
        "explanation": "Greedy algorithms repeatedly choose what appears to be the best option at the current step."
      },
      {
        "id": "quiz-greedy-set-1-q2",
        "question": "What is the main idea behind a greedy approach?",
        "options": [
          "Make a locally optimal choice and continue",
          "Try every possible combination",
          "Always choose the smallest number",
          "Always choose the largest number"
        ],
        "correctIndex": 0,
        "explanation": "Greedy algorithms commit to a choice without generally reconsidering it."
      },
      {
        "id": "quiz-greedy-set-1-q3",
        "question": "Which problem is a classic example of a greedy algorithm?",
        "options": [
          "Activity Selection",
          "Merge Sort",
          "Binary Search",
          "Fibonacci recursion"
        ],
        "correctIndex": 0,
        "explanation": "Activity Selection is a classic problem where choosing the activity that finishes earliest leads to an optimal solution."
      },
      {
        "id": "quiz-greedy-set-1-q4",
        "question": "Does a greedy algorithm always produce the optimal solution?",
        "options": [
          "No, only when the problem has the required greedy properties",
          "Yes, always",
          "Only when the input is sorted",
          "Only for arrays"
        ],
        "correctIndex": 0,
        "explanation": "Greedy choices are not universally optimal; the problem must support a greedy-choice strategy."
      },
      {
        "id": "quiz-greedy-set-1-q5",
        "question": "What does 'local optimum' mean?",
        "options": [
          "The best choice according to the current situation",
          "The final globally best answer",
          "The smallest possible input",
          "The last element in an array"
        ],
        "correctIndex": 0,
        "explanation": "A local optimum is the best choice available at the current step, not necessarily the best overall solution."
      },
      {
        "id": "quiz-greedy-set-1-q6",
        "question": "What does 'global optimum' mean?",
        "options": [
          "The best possible solution for the entire problem",
          "The best choice at one step",
          "The first available choice",
          "The largest input value"
        ],
        "correctIndex": 0,
        "explanation": "The global optimum is the best solution considering the entire problem."
      },
      {
        "id": "quiz-greedy-set-1-q7",
        "question": "What is a common feature of greedy algorithms?",
        "options": [
          "They usually make decisions without revisiting previous choices",
          "They always use dynamic programming",
          "They always use backtracking",
          "They always examine every permutation"
        ],
        "correctIndex": 0,
        "explanation": "Greedy algorithms typically commit to their choices instead of exploring alternatives."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-2",
    "title": "Greedy Algorithms - Level 2",
    "topicId": "greedy",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-2-q1",
        "question": "Which property is commonly required for a problem to be solved correctly using a greedy strategy?",
        "options": [
          "Greedy-choice property",
          "Hashing property",
          "Binary tree property",
          "Sorting property"
        ],
        "correctIndex": 0,
        "explanation": "The greedy-choice property means an optimal solution can be reached by making an appropriate greedy choice."
      },
      {
        "id": "quiz-greedy-set-2-q2",
        "question": "What does optimal substructure mean?",
        "options": [
          "An optimal solution contains optimal solutions to relevant subproblems",
          "Every problem must be recursive",
          "Every element must be sorted",
          "The input must contain unique values"
        ],
        "correctIndex": 0,
        "explanation": "Optimal substructure allows the overall optimal solution to be constructed from optimal smaller solutions."
      },
      {
        "id": "quiz-greedy-set-2-q3",
        "question": "Which technique is often used to prove a greedy algorithm is correct?",
        "options": [
          "Exchange argument",
          "Binary Search",
          "Hashing",
          "Recursion tree only"
        ],
        "correctIndex": 0,
        "explanation": "An exchange argument shows that a solution using the greedy choice can be transformed into an optimal solution without becoming worse."
      },
      {
        "id": "quiz-greedy-set-2-q4",
        "question": "What does an exchange argument generally show?",
        "options": [
          "A greedy choice can replace another choice in an optimal solution without reducing its quality",
          "The algorithm must use a hash map",
          "The input must be sorted numerically",
          "Every solution is identical"
        ],
        "correctIndex": 0,
        "explanation": "This provides a mathematical justification for why the greedy choice is safe."
      },
      {
        "id": "quiz-greedy-set-2-q5",
        "question": "Which problem is usually NOT solved correctly by simply choosing the largest available value?",
        "options": [
          "Arbitrary Coin Change",
          "Activity Selection",
          "Fractional Knapsack",
          "Selecting the maximum immediate value"
        ],
        "correctIndex": 0,
        "explanation": "For arbitrary coin denominations, taking the largest coin first can produce a non-optimal answer."
      },
      {
        "id": "quiz-greedy-set-2-q6",
        "question": "Why can greedy algorithms be faster than brute-force approaches?",
        "options": [
          "They avoid exploring many alternative combinations",
          "They always use O(1) memory",
          "They never process input",
          "They always use binary search"
        ],
        "correctIndex": 0,
        "explanation": "Greedy methods commit to choices instead of exploring the entire solution space."
      },
      {
        "id": "quiz-greedy-set-2-q7",
        "question": "What is a danger of applying greedy without proof?",
        "options": [
          "A locally attractive choice may prevent the global optimum",
          "The algorithm will always crash",
          "The input will become sorted",
          "The complexity automatically becomes exponential"
        ],
        "correctIndex": 0,
        "explanation": "Greedy strategies can fail when the problem does not have the necessary greedy-choice property."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-3",
    "title": "Greedy Algorithms - Level 3",
    "topicId": "greedy",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-3-q1",
        "question": "What is the Activity Selection problem?",
        "options": [
          "Select the maximum number of non-overlapping activities",
          "Select the activity with the largest duration",
          "Sort activities by name",
          "Select every activity"
        ],
        "correctIndex": 0,
        "explanation": "The goal is to schedule as many mutually compatible activities as possible."
      },
      {
        "id": "quiz-greedy-set-3-q2",
        "question": "What is the standard greedy rule for Activity Selection?",
        "options": [
          "Choose the activity with the earliest finishing time",
          "Choose the activity with the latest starting time always",
          "Choose the longest activity",
          "Choose the shortest activity"
        ],
        "correctIndex": 0,
        "explanation": "Finishing earliest leaves the most room for future activities."
      },
      {
        "id": "quiz-greedy-set-3-q3",
        "question": "What should be done before applying the standard Activity Selection greedy algorithm?",
        "options": [
          "Sort activities by finishing time",
          "Sort by starting time only",
          "Sort by duration descending",
          "Reverse all activities"
        ],
        "correctIndex": 0,
        "explanation": "Sorting by finish time allows the greedy scan to select the earliest-finishing compatible activity."
      },
      {
        "id": "quiz-greedy-set-3-q4",
        "question": "If the selected activity finishes at time 5, which next activity can be selected?",
        "options": [
          "One starting at time 5 or later",
          "Only one starting at time 6",
          "One ending before time 5 only",
          "Any overlapping activity"
        ],
        "correctIndex": 0,
        "explanation": "An activity beginning at the exact finishing time does not overlap."
      },
      {
        "id": "quiz-greedy-set-3-q5",
        "question": "What is the typical time complexity of Activity Selection after sorting?",
        "options": [
          "O(n log n)",
          "O(n²)",
          "O(2^n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Sorting takes O(n log n), followed by an O(n) greedy scan."
      },
      {
        "id": "quiz-greedy-set-3-q6",
        "question": "Why is choosing the shortest-duration activity not always correct?",
        "options": [
          "A short activity may finish later than another activity and block more choices",
          "Short activities cannot be scheduled",
          "Duration is always irrelevant",
          "The problem requires longest activities"
        ],
        "correctIndex": 0,
        "explanation": "The key factor is the finish time, not simply the duration."
      },
      {
        "id": "quiz-greedy-set-3-q7",
        "question": "What does the Activity Selection greedy choice optimize?",
        "options": [
          "Remaining time for future activities",
          "Activity duration",
          "Starting time only",
          "Number of conflicts immediately"
        ],
        "correctIndex": 0,
        "explanation": "An early finish leaves the largest possible remaining time window."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-4",
    "title": "Greedy Algorithms - Level 4",
    "topicId": "greedy",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-4-q1",
        "question": "What is Fractional Knapsack?",
        "options": [
          "A knapsack problem where fractions of items can be taken",
          "A problem where every item must be taken completely",
          "A graph traversal problem",
          "A sorting problem only"
        ],
        "correctIndex": 0,
        "explanation": "Unlike 0/1 Knapsack, Fractional Knapsack allows taking part of an item."
      },
      {
        "id": "quiz-greedy-set-4-q2",
        "question": "What greedy criterion is used for Fractional Knapsack?",
        "options": [
          "Value-to-weight ratio",
          "Weight alone",
          "Value alone",
          "Item index"
        ],
        "correctIndex": 0,
        "explanation": "Items with the highest value per unit weight provide the greatest value for available capacity."
      },
      {
        "id": "quiz-greedy-set-4-q3",
        "question": "Suppose an item has value 60 and weight 10. What is its value-to-weight ratio?",
        "options": [
          "6",
          "10",
          "50",
          "600"
        ],
        "correctIndex": 0,
        "explanation": "The ratio is 60 ÷ 10 = 6."
      },
      {
        "id": "quiz-greedy-set-4-q4",
        "question": "Why does the greedy strategy work for Fractional Knapsack?",
        "options": [
          "Items can be divided, so taking the highest value density first is always beneficial",
          "Items must be taken completely",
          "The weights are always equal",
          "The values are always sorted"
        ],
        "correctIndex": 0,
        "explanation": "Because fractions are allowed, capacity can be filled continuously with the most valuable density."
      },
      {
        "id": "quiz-greedy-set-4-q5",
        "question": "What is the typical time complexity of Fractional Knapsack?",
        "options": [
          "O(n log n)",
          "O(2^n)",
          "O(n²)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Sorting by value-to-weight ratio dominates the runtime."
      },
      {
        "id": "quiz-greedy-set-4-q6",
        "question": "If only half of an item fits in the remaining capacity, what can Fractional Knapsack do?",
        "options": [
          "Take half of the item",
          "Reject the entire item",
          "Take another item automatically",
          "Double the capacity"
        ],
        "correctIndex": 0,
        "explanation": "Fractional Knapsack explicitly allows partial items."
      },
      {
        "id": "quiz-greedy-set-4-q7",
        "question": "Does the same value-density greedy strategy solve 0/1 Knapsack optimally in general?",
        "options": [
          "No",
          "Yes, always",
          "Only when weights are prime",
          "Only when there are two items"
        ],
        "correctIndex": 0,
        "explanation": "The inability to split items makes the fractional greedy proof invalid for the 0/1 version."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-5",
    "title": "Greedy Algorithms - Level 5",
    "topicId": "greedy",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-5-q1",
        "question": "What is the Coin Change problem when solved greedily?",
        "options": [
          "Repeatedly choose a coin according to a greedy rule, often the largest denomination first",
          "Always choose the smallest coin",
          "Use every coin exactly once",
          "Sort coins alphabetically"
        ],
        "correctIndex": 0,
        "explanation": "A common greedy approach repeatedly takes the largest coin that does not exceed the remaining amount."
      },
      {
        "id": "quiz-greedy-set-5-q2",
        "question": "Does largest-coin-first always produce the minimum number of coins?",
        "options": [
          "No, not for arbitrary denominations",
          "Yes, always",
          "Only for three denominations",
          "Only for prime denominations"
        ],
        "correctIndex": 0,
        "explanation": "Some denomination systems cause greedy to use more coins than an optimal combination."
      },
      {
        "id": "quiz-greedy-set-5-q3",
        "question": "For coins [1,5,10,25], what greedy approach is commonly used for amount 30?",
        "options": [
          "25 + 5",
          "10 + 10 + 10",
          "1 repeated 30 times",
          "5 repeated 6 times"
        ],
        "correctIndex": 0,
        "explanation": "Greedy chooses 25 first and then 5, using only two coins."
      },
      {
        "id": "quiz-greedy-set-5-q4",
        "question": "Which coin system is a well-known case where greedy works naturally?",
        "options": [
          "Many standard currency denominations such as US coins",
          "Every arbitrary denomination system",
          "Only denominations containing primes",
          "Only denominations that are powers of two"
        ],
        "correctIndex": 0,
        "explanation": "For common US coin denominations, largest-first greedy produces an optimal minimum-coin solution."
      },
      {
        "id": "quiz-greedy-set-5-q5",
        "question": "Which example demonstrates that greedy coin change can fail?",
        "options": [
          "Coins [1,3,4], amount 6",
          "Coins [1,5,10], amount 10",
          "Coins [1,5,10], amount 15",
          "Coins [1,2,4], amount 4"
        ],
        "correctIndex": 0,
        "explanation": "Greedy gives 4+1+1 = 3 coins, while 3+3 uses only 2."
      },
      {
        "id": "quiz-greedy-set-5-q6",
        "question": "What technique can reliably solve minimum Coin Change for arbitrary positive denominations?",
        "options": [
          "dp",
          "Greedy only",
          "Binary Search",
          "Merge Sort"
        ],
        "correctIndex": 0,
        "explanation": "Dynamic Programming considers optimal solutions for smaller amounts and works for arbitrary denominations."
      },
      {
        "id": "quiz-greedy-set-5-q7",
        "question": "What lesson does Coin Change teach about greedy algorithms?",
        "options": [
          "A locally best choice must be proven safe before relying on it",
          "Greedy always works",
          "Greedy never works",
          "Sorting solves every optimization problem"
        ],
        "correctIndex": 0,
        "explanation": "Greedy correctness depends on the structure of the problem, not simply on choosing the largest value."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-6",
    "title": "Greedy Algorithms - Level 6",
    "topicId": "greedy",
    "difficulty": "Beginner",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-6-q1",
        "question": "What is Huffman Coding used for?",
        "options": [
          "Constructing a prefix-free variable-length code for data compression",
          "Sorting strings",
          "Searching graphs",
          "Encrypting passwords"
        ],
        "correctIndex": 0,
        "explanation": "Huffman Coding assigns shorter codes to more frequent symbols to reduce total encoded size."
      },
      {
        "id": "quiz-greedy-set-6-q2",
        "question": "What data structure is commonly used in Huffman Coding?",
        "options": [
          "Min-heap",
          "Stack",
          "Queue only",
          "Hash table only"
        ],
        "correctIndex": 0,
        "explanation": "A min-heap efficiently retrieves the two least frequent nodes at each step."
      },
      {
        "id": "quiz-greedy-set-6-q3",
        "question": "What does Huffman repeatedly combine?",
        "options": [
          "The two nodes with the smallest frequencies",
          "The two largest frequencies",
          "The two longest strings",
          "Random nodes"
        ],
        "correctIndex": 0,
        "explanation": "Combining the two least frequent nodes builds the optimal prefix-code tree."
      },
      {
        "id": "quiz-greedy-set-6-q4",
        "question": "Why are frequent characters usually given shorter Huffman codes?",
        "options": [
          "It reduces the total weighted encoding length",
          "Short codes are easier to sort",
          "It makes the tree balanced",
          "It eliminates the need for a decoder"
        ],
        "correctIndex": 0,
        "explanation": "Frequent symbols contribute more to total size, so assigning them shorter codes is beneficial."
      },
      {
        "id": "quiz-greedy-set-6-q5",
        "question": "What property does a Huffman code have?",
        "options": [
          "Prefix-free",
          "Always fixed-length",
          "Always alphabetically ordered",
          "Always numeric"
        ],
        "correctIndex": 0,
        "explanation": "No valid Huffman codeword is a prefix of another, allowing unambiguous decoding."
      },
      {
        "id": "quiz-greedy-set-6-q6",
        "question": "What is the typical construction complexity of Huffman Coding using a min-heap?",
        "options": [
          "O(n log n)",
          "O(n²)",
          "O(2^n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "There are n-1 heap combinations, each requiring logarithmic heap operations."
      },
      {
        "id": "quiz-greedy-set-6-q7",
        "question": "Why is Huffman Coding considered greedy?",
        "options": [
          "It repeatedly makes the locally optimal choice of combining the two least frequent nodes",
          "It explores every possible code tree",
          "It always chooses the largest frequency",
          "It uses dynamic programming"
        ],
        "correctIndex": 0,
        "explanation": "The correctness of Huffman Coding relies on repeatedly making this specific greedy choice."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-7",
    "title": "Greedy Algorithms - Level 7",
    "topicId": "greedy",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-7-q1",
        "question": "What is the main goal of Job Sequencing with Deadlines?",
        "options": [
          "Maximize profit by scheduling jobs before their deadlines",
          "Minimize the number of jobs always",
          "Sort jobs by duration",
          "Complete every job regardless of deadlines"
        ],
        "correctIndex": 0,
        "explanation": "Each job has a deadline and profit, and the goal is to maximize total profit."
      },
      {
        "id": "quiz-greedy-set-7-q2",
        "question": "What is a common greedy strategy for Job Sequencing?",
        "options": [
          "Process jobs by decreasing profit and place each in the latest available slot before its deadline",
          "Process jobs by increasing profit",
          "Always schedule the shortest job first",
          "Ignore deadlines"
        ],
        "correctIndex": 0,
        "explanation": "Taking high-profit jobs first and placing them as late as possible preserves earlier slots for other jobs."
      },
      {
        "id": "quiz-greedy-set-7-q3",
        "question": "Why place a selected job in the latest available slot?",
        "options": [
          "It preserves earlier slots for other jobs",
          "It maximizes job duration",
          "It removes the deadline",
          "It guarantees every job is selected"
        ],
        "correctIndex": 0,
        "explanation": "Using the latest feasible slot leaves maximum flexibility for jobs with earlier deadlines."
      },
      {
        "id": "quiz-greedy-set-7-q4",
        "question": "If a job has deadline 3, which slots can it occupy?",
        "options": [
          "1, 2, or 3",
          "Only slot 3",
          "Only slot 1",
          "Any slot after 3"
        ],
        "correctIndex": 0,
        "explanation": "A deadline of 3 means the job must be completed by slot 3."
      },
      {
        "id": "quiz-greedy-set-7-q5",
        "question": "What is typically sorted first in the standard Job Sequencing approach?",
        "options": [
          "Jobs by decreasing profit",
          "Jobs by increasing deadline",
          "Jobs alphabetically",
          "Jobs by increasing profit"
        ],
        "correctIndex": 0,
        "explanation": "Higher-profit jobs are considered first to prioritize valuable opportunities."
      },
      {
        "id": "quiz-greedy-set-7-q6",
        "question": "What happens if no slot before a job's deadline is available?",
        "options": [
          "That job is skipped",
          "The deadline is extended",
          "An existing job is always deleted",
          "The job is scheduled after its deadline"
        ],
        "correctIndex": 0,
        "explanation": "The job cannot be completed on time, so it cannot be included in the valid schedule."
      },
      {
        "id": "quiz-greedy-set-7-q7",
        "question": "What is the core greedy decision in Job Sequencing?",
        "options": [
          "Prioritize high-profit jobs while preserving feasible scheduling slots",
          "Always choose the earliest deadline",
          "Always choose the longest job",
          "Always schedule every job"
        ],
        "correctIndex": 0,
        "explanation": "The strategy balances profit with the limited deadline slots."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-8",
    "title": "Greedy Algorithms - Level 8",
    "topicId": "greedy",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-8-q1",
        "question": "What is the Jump Game problem asking?",
        "options": [
          "Determine whether the last index can be reached using jumps allowed by the array values",
          "Find the shortest array",
          "Sort the array",
          "Count duplicate values"
        ],
        "correctIndex": 0,
        "explanation": "Each value indicates how far you can jump from that position."
      },
      {
        "id": "quiz-greedy-set-8-q2",
        "question": "What greedy value is commonly tracked in Jump Game?",
        "options": [
          "The farthest reachable index",
          "The smallest array value",
          "The number of duplicates",
          "The current minimum element"
        ],
        "correctIndex": 0,
        "explanation": "Tracking the farthest reachable position allows the algorithm to determine whether progress is possible."
      },
      {
        "id": "quiz-greedy-set-8-q3",
        "question": "When scanning index i, what is a possible update for the farthest reachable position?",
        "options": [
          "max(farthest, i + nums[i])",
          "min(farthest, nums[i])",
          "farthest - nums[i]",
          "farthest × nums[i]"
        ],
        "correctIndex": 0,
        "explanation": "From index i, the farthest position reachable is i + nums[i]."
      },
      {
        "id": "quiz-greedy-set-8-q4",
        "question": "When can the Jump Game scan conclude that the end is unreachable?",
        "options": [
          "When the current index is beyond the farthest reachable position",
          "When an element is zero",
          "When the array has duplicates",
          "When the array is unsorted"
        ],
        "correctIndex": 0,
        "explanation": "If the current index cannot be reached, no later index can be reached either."
      },
      {
        "id": "quiz-greedy-set-8-q5",
        "question": "What is the time complexity of the standard greedy Jump Game solution?",
        "options": [
          "O(n)",
          "O(n²)",
          "O(2^n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm scans the array once."
      },
      {
        "id": "quiz-greedy-set-8-q6",
        "question": "For [2,3,1,1,4], can the last index be reached?",
        "options": [
          "Yes",
          "No",
          "Only using exactly four jumps",
          "Only by moving backward"
        ],
        "correctIndex": 0,
        "explanation": "From index 0, you can reach index 1 or 2, and eventually reach index 4."
      },
      {
        "id": "quiz-greedy-set-8-q7",
        "question": "What does the greedy Jump Game solution avoid?",
        "options": [
          "Exploring every possible jump sequence",
          "Scanning the array",
          "Using comparisons",
          "Tracking reachability"
        ],
        "correctIndex": 0,
        "explanation": "The farthest-reach invariant summarizes all relevant jump choices."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-9",
    "title": "Greedy Algorithms - Level 9",
    "topicId": "greedy",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-9-q1",
        "question": "What is Jump Game II asking for?",
        "options": [
          "The minimum number of jumps needed to reach the last index",
          "The maximum jump value",
          "The number of reachable indices",
          "The longest possible path"
        ],
        "correctIndex": 0,
        "explanation": "The goal is to minimize the number of jumps rather than simply determine reachability."
      },
      {
        "id": "quiz-greedy-set-9-q2",
        "question": "What does the current boundary represent in the greedy Jump Game II approach?",
        "options": [
          "The farthest index reachable using the current number of jumps",
          "The smallest reachable index",
          "The final index always",
          "The current array value"
        ],
        "correctIndex": 0,
        "explanation": "All positions within the current range can be reached with the same number of jumps."
      },
      {
        "id": "quiz-greedy-set-9-q3",
        "question": "What is tracked while scanning the current jump range?",
        "options": [
          "The farthest position reachable with one additional jump",
          "The smallest value",
          "The number of duplicates",
          "The previous index only"
        ],
        "correctIndex": 0,
        "explanation": "The farthest next reach determines the boundary of the next jump."
      },
      {
        "id": "quiz-greedy-set-9-q4",
        "question": "When is the jump count usually incremented?",
        "options": [
          "When the scan reaches the end of the current reachable range",
          "At every index",
          "Only at the last index",
          "When a zero appears"
        ],
        "correctIndex": 0,
        "explanation": "Once the current jump's range is exhausted, another jump is needed to continue."
      },
      {
        "id": "quiz-greedy-set-9-q5",
        "question": "What is the typical time complexity of the greedy Jump Game II solution?",
        "options": [
          "O(n)",
          "O(n²)",
          "O(2^n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "The array can be scanned once while maintaining the current and next boundaries."
      },
      {
        "id": "quiz-greedy-set-9-q6",
        "question": "For [2,3,1,1,4], what is the minimum number of jumps?",
        "options": [
          "2",
          "3",
          "4",
          "1"
        ],
        "correctIndex": 0,
        "explanation": "Jump from index 0 to index 1, then from index 1 to index 4."
      },
      {
        "id": "quiz-greedy-set-9-q7",
        "question": "Why is simply choosing the largest immediate jump not the full idea behind Jump Game II?",
        "options": [
          "The best choice considers the farthest reach of the entire current range",
          "Jumps cannot be larger than one",
          "The array must be sorted",
          "Only the smallest jump matters"
        ],
        "correctIndex": 0,
        "explanation": "The greedy range-based approach evaluates all positions reachable with the current jump before committing to the next boundary."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-10",
    "title": "Greedy Algorithms - Level 10",
    "topicId": "greedy",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-10-q1",
        "question": "What is the Gas Station problem?",
        "options": [
          "Find a starting station from which a car can complete a circular route",
          "Find the cheapest gas station",
          "Sort gas stations by price",
          "Find the shortest road"
        ],
        "correctIndex": 0,
        "explanation": "Each station provides gas and requires some gas to travel to the next station."
      },
      {
        "id": "quiz-greedy-set-10-q2",
        "question": "What condition must hold for a complete circuit to be possible?",
        "options": [
          "Total gas must be at least total travel cost",
          "Every station must have more gas than cost",
          "The first station must have maximum gas",
          "All stations must have equal gas"
        ],
        "correctIndex": 0,
        "explanation": "If total available gas is less than total required cost, no starting point can complete the circuit."
      },
      {
        "id": "quiz-greedy-set-10-q3",
        "question": "What should happen when the current fuel becomes negative while testing a starting point?",
        "options": [
          "Move the starting point forward",
          "Keep the same start forever",
          "Double the fuel",
          "Reverse the route"
        ],
        "correctIndex": 0,
        "explanation": "If a segment cannot be completed from the current start, none of the stations within that failed segment can serve as the valid start."
      },
      {
        "id": "quiz-greedy-set-10-q4",
        "question": "What is the time complexity of the standard Gas Station greedy solution?",
        "options": [
          "O(n)",
          "O(n²)",
          "O(2^n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "A single pass can track total fuel and the current candidate start."
      },
      {
        "id": "quiz-greedy-set-10-q5",
        "question": "If total gas is less than total cost, what should the algorithm return?",
        "options": [
          "-1 or an equivalent indication that no solution exists",
          "The first station",
          "The station with maximum gas",
          "Zero always"
        ],
        "correctIndex": 0,
        "explanation": "The total deficit makes completing the circuit impossible from any station."
      },
      {
        "id": "quiz-greedy-set-10-q6",
        "question": "Why can a failed starting station be skipped entirely along with some following stations?",
        "options": [
          "If the accumulated fuel becomes negative before reaching a station, none of those failed candidates can recover that deficit",
          "All stations are identical",
          "The route is sorted",
          "The first station is always optimal"
        ],
        "correctIndex": 0,
        "explanation": "The accumulated deficit proves that every candidate inside that failed segment would also fail."
      },
      {
        "id": "quiz-greedy-set-10-q7",
        "question": "What greedy invariant is useful in Gas Station?",
        "options": [
          "Maintain a candidate start whose running fuel never becomes negative over the tested segment",
          "Always choose the station with the most gas",
          "Always choose the cheapest station",
          "Always choose station zero"
        ],
        "correctIndex": 0,
        "explanation": "The candidate start is shifted whenever the current segment cannot be completed."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-11",
    "title": "Greedy Algorithms - Level 11",
    "topicId": "greedy",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-11-q1",
        "question": "What is the Partition Labels problem?",
        "options": [
          "Partition a string into as many parts as possible so each character appears in at most one part",
          "Sort characters alphabetically",
          "Find the longest substring",
          "Remove duplicate characters"
        ],
        "correctIndex": 0,
        "explanation": "Each character must belong entirely to one partition."
      },
      {
        "id": "quiz-greedy-set-11-q2",
        "question": "What information is commonly precomputed for Partition Labels?",
        "options": [
          "The last occurrence of each character",
          "The first character only",
          "The frequency of vowels only",
          "The sorted string"
        ],
        "correctIndex": 0,
        "explanation": "Knowing each character's last occurrence tells us how far a partition must extend."
      },
      {
        "id": "quiz-greedy-set-11-q3",
        "question": "When can a partition end while scanning the string?",
        "options": [
          "When the current index reaches the farthest last occurrence of every character seen in the partition",
          "Whenever a character repeats",
          "After every character",
          "Only at the final character"
        ],
        "correctIndex": 0,
        "explanation": "Once no character in the current partition appears later, the partition can safely end."
      },
      {
        "id": "quiz-greedy-set-11-q4",
        "question": "For the string 'ababcbacadefegdehijhklij', what is the first partition?",
        "options": [
          "ababcbaca",
          "ab",
          "abab",
          "a"
        ],
        "correctIndex": 0,
        "explanation": "The characters in the first partition do not appear outside that segment."
      },
      {
        "id": "quiz-greedy-set-11-q5",
        "question": "What is the typical time complexity of Partition Labels?",
        "options": [
          "O(n)",
          "O(n²)",
          "O(2^n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "The string is processed using last-occurrence information in linear time."
      },
      {
        "id": "quiz-greedy-set-11-q6",
        "question": "Why is Partition Labels considered greedy?",
        "options": [
          "It closes a partition as soon as doing so is guaranteed to be safe",
          "It always chooses the longest partition",
          "It tries every partitioning",
          "It uses recursion"
        ],
        "correctIndex": 0,
        "explanation": "The algorithm makes the earliest safe partition boundary, leaving the rest for later."
      },
      {
        "id": "quiz-greedy-set-11-q7",
        "question": "What would happen if a character inside the current partition appears later?",
        "options": [
          "The partition boundary must be extended beyond that later occurrence",
          "The character is deleted",
          "The partition can always end immediately",
          "The string is sorted"
        ],
        "correctIndex": 0,
        "explanation": "Ending earlier would place the same character in multiple partitions."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-12",
    "title": "Greedy Algorithms - Level 12",
    "topicId": "greedy",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-12-q1",
        "question": "What is the Minimum Number of Arrows to Burst Balloons problem?",
        "options": [
          "Find the minimum arrows needed to burst all overlapping intervals represented by balloons",
          "Find the maximum balloon size",
          "Sort balloons by diameter",
          "Burst exactly one balloon per arrow"
        ],
        "correctIndex": 0,
        "explanation": "Each balloon represents an interval, and an arrow can burst all balloons whose intervals contain its position."
      },
      {
        "id": "quiz-greedy-set-12-q2",
        "question": "What is the common greedy sorting criterion for this problem?",
        "options": [
          "Sort intervals by their ending coordinate",
          "Sort by starting coordinate descending",
          "Sort by interval length only",
          "Do not sort"
        ],
        "correctIndex": 0,
        "explanation": "Choosing the earliest ending interval determines a useful arrow position."
      },
      {
        "id": "quiz-greedy-set-12-q3",
        "question": "Where should the greedy arrow usually be placed?",
        "options": [
          "At the end coordinate of the current interval",
          "At the start of the array",
          "At the largest coordinate",
          "At the midpoint of every interval"
        ],
        "correctIndex": 0,
        "explanation": "Placing the arrow at the current interval's end maximizes the chance of bursting overlapping intervals."
      },
      {
        "id": "quiz-greedy-set-12-q4",
        "question": "If another balloon starts before or at the current arrow position, what can happen?",
        "options": [
          "The same arrow may burst it if its interval contains that position",
          "It always requires another arrow",
          "It must be deleted",
          "The intervals must be reversed"
        ],
        "correctIndex": 0,
        "explanation": "An arrow bursts a balloon when its position lies within that balloon's interval."
      },
      {
        "id": "quiz-greedy-set-12-q5",
        "question": "What is the typical time complexity of the interval-based greedy solution?",
        "options": [
          "O(n log n)",
          "O(n²)",
          "O(2^n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Sorting dominates the linear scan."
      },
      {
        "id": "quiz-greedy-set-12-q6",
        "question": "What common pattern does this balloon problem share with Activity Selection?",
        "options": [
          "Both rely on ordering intervals by finishing position",
          "Both require dynamic programming",
          "Both require permutations",
          "Both use BFS"
        ],
        "correctIndex": 0,
        "explanation": "Earliest finishing boundaries are central to both greedy interval strategies."
      },
      {
        "id": "quiz-greedy-set-12-q7",
        "question": "Why would choosing the interval with the latest ending point first be a poor greedy strategy?",
        "options": [
          "It may miss opportunities to cover intervals that finish earlier",
          "It always produces the minimum",
          "Latest endpoints are invalid",
          "It removes all intervals"
        ],
        "correctIndex": 0,
        "explanation": "An early endpoint provides a tighter and more flexible position for covering overlapping intervals."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-13",
    "title": "Greedy Algorithms - Level 13",
    "topicId": "greedy",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-13-q1",
        "question": "What is the Minimum Platforms problem?",
        "options": [
          "Find the minimum number of railway platforms needed so no train has to wait",
          "Find the fastest train",
          "Sort trains by speed",
          "Find the longest train"
        ],
        "correctIndex": 0,
        "explanation": "The number of platforms must accommodate all trains present at the station simultaneously."
      },
      {
        "id": "quiz-greedy-set-13-q2",
        "question": "What greedy technique is commonly used for Minimum Platforms?",
        "options": [
          "Sort arrival and departure times separately and use two pointers",
          "Sort only train numbers",
          "Use recursion",
          "Use binary search on train names"
        ],
        "correctIndex": 0,
        "explanation": "Comparing the next arrival with the next departure tracks the number of active trains."
      },
      {
        "id": "quiz-greedy-set-13-q3",
        "question": "What happens when the next arrival occurs before the next departure?",
        "options": [
          "Increase the number of occupied platforms",
          "Decrease platforms",
          "Ignore the arrival",
          "Remove the departure"
        ],
        "correctIndex": 0,
        "explanation": "A new train arrives while another is still present, requiring an additional platform."
      },
      {
        "id": "quiz-greedy-set-13-q4",
        "question": "What happens when a departure occurs before the next arrival?",
        "options": [
          "Decrease the number of occupied platforms",
          "Increase platforms",
          "Ignore the departure",
          "Restart the scan"
        ],
        "correctIndex": 0,
        "explanation": "A train has left, so its platform becomes available."
      },
      {
        "id": "quiz-greedy-set-13-q5",
        "question": "What does the maximum number of simultaneously active trains represent?",
        "options": [
          "The minimum number of platforms required",
          "The total number of trains",
          "The longest train",
          "The number of departures"
        ],
        "correctIndex": 0,
        "explanation": "Every simultaneously present train needs a platform."
      },
      {
        "id": "quiz-greedy-set-13-q6",
        "question": "What is the typical time complexity after sorting arrival and departure arrays?",
        "options": [
          "O(n log n)",
          "O(n²)",
          "O(2^n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Two sorting operations dominate, followed by an O(n) two-pointer scan."
      },
      {
        "id": "quiz-greedy-set-13-q7",
        "question": "If a train arrives at exactly the same time another train departs, how the tie is handled depends on what?",
        "options": [
          "The problem's definition of whether the platform is reusable at that exact time",
          "The train number",
          "The train speed",
          "The station name"
        ],
        "correctIndex": 0,
        "explanation": "Boundary conventions determine whether simultaneous arrival and departure require another platform."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-14",
    "title": "Greedy Algorithms - Level 14",
    "topicId": "greedy",
    "difficulty": "Intermediate",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-14-q1",
        "question": "What is the purpose of Dijkstra's algorithm?",
        "options": [
          "Find shortest paths from a source in a graph with non-negative edge weights",
          "Find minimum spanning trees only",
          "Sort graph vertices",
          "Find strongly connected components"
        ],
        "correctIndex": 0,
        "explanation": "Dijkstra's algorithm repeatedly finalizes the closest unprocessed vertex."
      },
      {
        "id": "quiz-greedy-set-14-q2",
        "question": "What greedy choice does Dijkstra's algorithm make?",
        "options": [
          "Select the unvisited vertex with the smallest tentative distance",
          "Select the vertex with the largest degree",
          "Select the edge with the largest weight",
          "Select a random vertex"
        ],
        "correctIndex": 0,
        "explanation": "With non-negative edge weights, the smallest tentative distance can safely be finalized."
      },
      {
        "id": "quiz-greedy-set-14-q3",
        "question": "Why does Dijkstra's algorithm require non-negative edge weights?",
        "options": [
          "A negative edge could later reduce the distance of a vertex that was already finalized",
          "Negative numbers cannot be stored",
          "Graphs cannot contain negative values",
          "The priority queue cannot store negatives"
        ],
        "correctIndex": 0,
        "explanation": "The greedy finalization property breaks when negative edges can produce shorter paths later."
      },
      {
        "id": "quiz-greedy-set-14-q4",
        "question": "What data structure is commonly used to implement efficient Dijkstra?",
        "options": [
          "Min-priority queue",
          "Stack",
          "Queue only",
          "Hash set only"
        ],
        "correctIndex": 0,
        "explanation": "A min-priority queue efficiently retrieves the vertex with the smallest tentative distance."
      },
      {
        "id": "quiz-greedy-set-14-q5",
        "question": "What is the common complexity of Dijkstra using an adjacency list and binary heap?",
        "options": [
          "O((V + E) log V)",
          "O(V²E)",
          "O(V + E)",
          "O(2^V)"
        ],
        "correctIndex": 0,
        "explanation": "Priority-queue operations introduce a logarithmic factor."
      },
      {
        "id": "quiz-greedy-set-14-q6",
        "question": "Can Dijkstra correctly handle negative edge weights?",
        "options": [
          "No",
          "Yes, always",
          "Only in trees",
          "Only when there are no vertices"
        ],
        "correctIndex": 0,
        "explanation": "Graphs with negative edges require algorithms such as Bellman-Ford in the general case."
      },
      {
        "id": "quiz-greedy-set-14-q7",
        "question": "What is the key greedy invariant in Dijkstra?",
        "options": [
          "Once the minimum tentative-distance vertex is selected, its shortest distance is finalized",
          "Every edge is selected exactly once",
          "The largest distance is always finalized",
          "All vertices are finalized simultaneously"
        ],
        "correctIndex": 0,
        "explanation": "Non-negative edge weights guarantee that no later path can improve the finalized minimum."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-15",
    "title": "Greedy Algorithms - Level 15",
    "topicId": "greedy",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-15-q1",
        "question": "What is a Minimum Spanning Tree?",
        "options": [
          "A spanning tree with minimum possible total edge weight",
          "A tree with the fewest vertices",
          "A tree containing every graph edge",
          "The shortest path from one source"
        ],
        "correctIndex": 0,
        "explanation": "An MST connects all vertices without cycles while minimizing total edge weight."
      },
      {
        "id": "quiz-greedy-set-15-q2",
        "question": "Which two classic greedy algorithms find Minimum Spanning Trees?",
        "options": [
          "Kruskal's and Prim's",
          "Dijkstra's and BFS",
          "Merge Sort and Quick Sort",
          "Floyd-Warshall and Bellman-Ford"
        ],
        "correctIndex": 0,
        "explanation": "Both Kruskal's and Prim's use greedy choices to construct an MST."
      },
      {
        "id": "quiz-greedy-set-15-q3",
        "question": "What greedy choice does Kruskal's algorithm make?",
        "options": [
          "Choose the smallest edge that does not create a cycle",
          "Choose the largest edge",
          "Choose any edge from the source",
          "Choose the edge with the highest degree"
        ],
        "correctIndex": 0,
        "explanation": "Kruskal processes edges in increasing weight and accepts safe edges."
      },
      {
        "id": "quiz-greedy-set-15-q4",
        "question": "What data structure is commonly used by Kruskal to detect cycles efficiently?",
        "options": [
          "Disjoint Set Union",
          "Stack",
          "Trie",
          "Queue"
        ],
        "correctIndex": 0,
        "explanation": "DSU efficiently determines whether two vertices are already connected."
      },
      {
        "id": "quiz-greedy-set-15-q5",
        "question": "What greedy choice does Prim's algorithm make?",
        "options": [
          "Add the minimum-weight edge connecting the current tree to an unvisited vertex",
          "Always choose the largest edge",
          "Choose the shortest path from every vertex",
          "Choose edges randomly"
        ],
        "correctIndex": 0,
        "explanation": "Prim expands one connected tree by selecting the cheapest edge crossing its boundary."
      },
      {
        "id": "quiz-greedy-set-15-q6",
        "question": "What is a major difference between Kruskal and Prim?",
        "options": [
          "Kruskal considers globally sorted edges, while Prim grows a connected tree from a starting vertex",
          "Prim cannot use weights",
          "Kruskal requires a source vertex",
          "They are completely unrelated"
        ],
        "correctIndex": 0,
        "explanation": "Kruskal builds a forest by edges, while Prim continuously expands one tree."
      },
      {
        "id": "quiz-greedy-set-15-q7",
        "question": "Can an MST be unique if all edge weights are distinct?",
        "options": [
          "Yes, and in fact distinct edge weights guarantee a unique MST",
          "No, MSTs are never unique",
          "Only if the graph is directed",
          "Only if all weights are equal"
        ],
        "correctIndex": 0,
        "explanation": "Distinct edge weights eliminate ties in the MST construction, resulting in a unique MST."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-16",
    "title": "Greedy Algorithms - Level 16",
    "topicId": "greedy",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-16-q1",
        "question": "What is the greedy-choice property?",
        "options": [
          "There exists an optimal solution that begins with a greedy choice",
          "Every greedy choice is optimal for every problem",
          "The first element must be selected",
          "The input must be sorted"
        ],
        "correctIndex": 0,
        "explanation": "The property provides the foundation for safely making a local choice."
      },
      {
        "id": "quiz-greedy-set-16-q2",
        "question": "What is the cut property used to justify?",
        "options": [
          "A minimum-weight edge crossing a cut can safely belong to an MST",
          "Every shortest-path edge belongs to an MST",
          "Every largest edge must be selected",
          "Every graph must be connected"
        ],
        "correctIndex": 0,
        "explanation": "The cut property is a key correctness theorem behind MST greedy algorithms."
      },
      {
        "id": "quiz-greedy-set-16-q3",
        "question": "What is the cycle property for MSTs?",
        "options": [
          "A maximum-weight edge in a cycle can be excluded from some MST when it is uniquely maximum",
          "Every cycle must be included",
          "The smallest edge in every cycle must be removed",
          "Cycles cannot exist in the input graph"
        ],
        "correctIndex": 0,
        "explanation": "A uniquely heaviest edge on a cycle cannot be necessary for an MST."
      },
      {
        "id": "quiz-greedy-set-16-q4",
        "question": "What does a safe edge mean in MST algorithms?",
        "options": [
          "An edge that can be added without preventing completion of an MST",
          "An edge with the highest weight",
          "An edge connected to the source only",
          "Any randomly selected edge"
        ],
        "correctIndex": 0,
        "explanation": "Greedy MST algorithms rely on identifying edges that are safe to include."
      },
      {
        "id": "quiz-greedy-set-16-q5",
        "question": "Why does Kruskal skip an edge that creates a cycle?",
        "options": [
          "A spanning tree must be acyclic and the edge is unnecessary for connectivity",
          "The edge is always too expensive",
          "Cycles are required in MSTs",
          "The edge must be negative"
        ],
        "correctIndex": 0,
        "explanation": "Adding a cycle cannot help form a tree and would use an unnecessary edge."
      },
      {
        "id": "quiz-greedy-set-16-q6",
        "question": "Can an MST contain the globally smallest edge?",
        "options": [
          "For a connected undirected weighted graph, there exists an MST containing a globally lightest edge",
          "Never",
          "Only when the graph has two vertices",
          "Only when all weights are equal"
        ],
        "correctIndex": 0,
        "explanation": "The cut property supports including a globally minimum edge in some MST."
      },
      {
        "id": "quiz-greedy-set-16-q7",
        "question": "What is the main purpose of a greedy proof?",
        "options": [
          "Show that making the local choice cannot prevent an optimal global solution",
          "Show that the algorithm uses recursion",
          "Show that sorting is unnecessary",
          "Show that every branch is explored"
        ],
        "correctIndex": 0,
        "explanation": "A proof establishes why the greedy choice is safe rather than merely observing that it works on examples."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-17",
    "title": "Greedy Algorithms - Level 17",
    "topicId": "greedy",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-17-q1",
        "question": "What is the main idea of the Two City Scheduling problem?",
        "options": [
          "Send exactly half the people to each city while minimizing total cost",
          "Send everyone to the cheaper city",
          "Send everyone to city A",
          "Sort people alphabetically"
        ],
        "correctIndex": 0,
        "explanation": "The constraint requires an equal number of people in each city."
      },
      {
        "id": "quiz-greedy-set-17-q2",
        "question": "What greedy value is commonly used in Two City Scheduling?",
        "options": [
          "The cost difference between sending a person to city A versus city B",
          "The sum of both costs",
          "The person's index",
          "The larger cost only"
        ],
        "correctIndex": 0,
        "explanation": "The difference tells us which city gives a greater relative saving for each person."
      },
      {
        "id": "quiz-greedy-set-17-q3",
        "question": "Why can people be sorted by cost difference?",
        "options": [
          "It identifies who benefits most from being assigned to one city rather than the other",
          "It guarantees every person goes to city A",
          "It removes the equal-count constraint",
          "It sorts the original names"
        ],
        "correctIndex": 0,
        "explanation": "Relative cost differences determine the most advantageous assignments."
      },
      {
        "id": "quiz-greedy-set-17-q4",
        "question": "If a person's cost to A is 20 and cost to B is 50, which assignment is cheaper for that person?",
        "options": [
          "City A",
          "City B",
          "Both equally",
          "Neither"
        ],
        "correctIndex": 0,
        "explanation": "City A costs 20 compared with 50 for city B."
      },
      {
        "id": "quiz-greedy-set-17-q5",
        "question": "What constraint prevents simply sending everyone to their individually cheaper city?",
        "options": [
          "Exactly half must be assigned to each city",
          "Everyone must pay the same amount",
          "Cities must have equal costs",
          "People cannot be sorted"
        ],
        "correctIndex": 0,
        "explanation": "The equal distribution requirement may force some people into their more expensive city."
      },
      {
        "id": "quiz-greedy-set-17-q6",
        "question": "What general greedy pattern does Two City Scheduling demonstrate?",
        "options": [
          "Rank choices by relative benefit while satisfying a global quota",
          "Always choose the smallest raw cost independently",
          "Explore every assignment",
          "Use BFS"
        ],
        "correctIndex": 0,
        "explanation": "The solution considers relative savings while enforcing the required number of assignments."
      },
      {
        "id": "quiz-greedy-set-17-q7",
        "question": "Why is relative difference more useful than absolute cost alone?",
        "options": [
          "The difference captures how much is gained or lost by choosing one option over the other",
          "Absolute costs are never useful",
          "Difference automatically sorts the input",
          "It removes the quota"
        ],
        "correctIndex": 0,
        "explanation": "Relative advantage is what matters when every person must be assigned to one of two constrained groups."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-18",
    "title": "Greedy Algorithms - Level 18",
    "topicId": "greedy",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-18-q1",
        "question": "What is the basic idea behind the Remove K Digits problem?",
        "options": [
          "Remove k digits to form the smallest possible number",
          "Remove the largest k numbers from an array",
          "Sort the digits",
          "Reverse the number"
        ],
        "correctIndex": 0,
        "explanation": "The goal is to minimize the resulting number after deleting exactly k digits."
      },
      {
        "id": "quiz-greedy-set-18-q2",
        "question": "What greedy principle is useful for Remove K Digits?",
        "options": [
          "Remove a digit that is larger than a following digit when possible",
          "Always remove the smallest digit",
          "Always remove the first digit",
          "Always remove the largest digit globally"
        ],
        "correctIndex": 0,
        "explanation": "Removing a larger digit before a smaller following digit improves the number lexicographically."
      },
      {
        "id": "quiz-greedy-set-18-q3",
        "question": "Which data structure is commonly used for Remove K Digits?",
        "options": [
          "Monotonic stack",
          "Binary heap only",
          "Graph",
          "Queue only"
        ],
        "correctIndex": 0,
        "explanation": "A monotonic stack efficiently removes previous larger digits when a smaller digit arrives."
      },
      {
        "id": "quiz-greedy-set-18-q4",
        "question": "What happens when the current digit is smaller than the stack's top and k > 0?",
        "options": [
          "Pop the larger top digit while possible",
          "Always push without comparison",
          "Delete the current digit",
          "Reverse the stack"
        ],
        "correctIndex": 0,
        "explanation": "Removing the larger previous digit can make the resulting number smaller."
      },
      {
        "id": "quiz-greedy-set-18-q5",
        "question": "What should be done if digits remain to remove after processing the entire number?",
        "options": [
          "Remove digits from the end of the remaining monotonic sequence",
          "Add digits",
          "Sort the number",
          "Restart the algorithm"
        ],
        "correctIndex": 0,
        "explanation": "If no later smaller digit caused removals, removing from the end is optimal."
      },
      {
        "id": "quiz-greedy-set-18-q6",
        "question": "What special handling is often needed for leading zeros?",
        "options": [
          "Strip unnecessary leading zeros from the final result",
          "Always keep every zero",
          "Convert every zero to one",
          "Delete all zeros"
        ],
        "correctIndex": 0,
        "explanation": "The numeric result should normally not contain unnecessary leading zeros."
      },
      {
        "id": "quiz-greedy-set-18-q7",
        "question": "What is the typical time complexity of the monotonic-stack solution?",
        "options": [
          "O(n)",
          "O(n²)",
          "O(2^n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Each digit is pushed and popped at most once."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-19",
    "title": "Greedy Algorithms - Level 19",
    "topicId": "greedy",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-19-q1",
        "question": "What is the Lemonade Change problem testing?",
        "options": [
          "Whether customers can receive correct change while processing bills in order",
          "Whether lemonade prices can increase",
          "How to maximize lemonade sales",
          "How to sort customers"
        ],
        "correctIndex": 0,
        "explanation": "The seller must maintain enough smaller bills to provide correct change."
      },
      {
        "id": "quiz-greedy-set-19-q2",
        "question": "If a customer pays with $5 for a $5 lemonade, what change is required?",
        "options": [
          "$0",
          "$5",
          "$10",
          "$15"
        ],
        "correctIndex": 0,
        "explanation": "The customer pays the exact price."
      },
      {
        "id": "quiz-greedy-set-19-q3",
        "question": "For a $20 bill, why is giving one $10 and two $5 bills often preferable to four $5 bills?",
        "options": [
          "It preserves more $5 bills for future $10 changes",
          "It uses more bills",
          "It always gives less change",
          "It is required by the customer"
        ],
        "correctIndex": 0,
        "explanation": "Preserving smaller denominations gives more flexibility for future transactions."
      },
      {
        "id": "quiz-greedy-set-19-q4",
        "question": "What greedy principle does Lemonade Change demonstrate?",
        "options": [
          "Use change combinations that preserve scarce resources needed for future customers",
          "Always use the smallest bill available",
          "Always use the largest bill",
          "Ignore future transactions"
        ],
        "correctIndex": 0,
        "explanation": "Choosing the right change combination protects the limited smaller bills."
      },
      {
        "id": "quiz-greedy-set-19-q5",
        "question": "What should happen if exact change cannot be provided?",
        "options": [
          "Return false or indicate that the transaction sequence cannot be completed",
          "Borrow money automatically",
          "Ignore the customer's payment",
          "Change the lemonade price"
        ],
        "correctIndex": 0,
        "explanation": "If one transaction cannot be completed, the required sequence is impossible."
      },
      {
        "id": "quiz-greedy-set-19-q6",
        "question": "What is the time complexity of the standard Lemonade Change solution?",
        "options": [
          "O(n)",
          "O(n²)",
          "O(2^n)",
          "O(log n)"
        ],
        "correctIndex": 0,
        "explanation": "Each customer's bill is processed once with constant-time updates."
      },
      {
        "id": "quiz-greedy-set-19-q7",
        "question": "Why is preserving $5 bills particularly important?",
        "options": [
          "They are needed to provide change for both $10 and $20 payments",
          "They have the highest value",
          "They cannot be stored",
          "They are always returned"
        ],
        "correctIndex": 0,
        "explanation": "A $5 bill is a fundamental component of many possible change combinations."
      }
    ]
  },
  {
    "id": "quiz-greedy-set-20",
    "title": "Greedy Algorithms - Level 20",
    "topicId": "greedy",
    "difficulty": "Advanced",
    "subtitle": "Practice Set",
    "questionCount": 10,
    "questions": [
      {
        "id": "quiz-greedy-set-20-q1",
        "question": "What is the most important question to ask before using a greedy algorithm?",
        "options": [
          "Can the local choice be proven to lead to a globally optimal solution?",
          "Is the input sorted?",
          "Can recursion be used?",
          "Can a hash map store the input?"
        ],
        "correctIndex": 0,
        "explanation": "Greedy algorithms should be used when there is a correctness argument supporting the local choice."
      },
      {
        "id": "quiz-greedy-set-20-q2",
        "question": "What is the main difference between greedy and Dynamic Programming?",
        "options": [
          "Greedy commits to local choices, while DP systematically evaluates reusable subproblems",
          "Greedy always uses more memory",
          "DP never finds optimal solutions",
          "They are always identical"
        ],
        "correctIndex": 0,
        "explanation": "Greedy relies on a safe-choice property, whereas DP stores and combines subproblem results."
      },
      {
        "id": "quiz-greedy-set-20-q3",
        "question": "A greedy algorithm gives the correct answer on many examples but has no proof. What should you conclude?",
        "options": [
          "Correctness is not established; a counterexample may still exist",
          "It is definitely correct",
          "It is definitely incorrect",
          "It must be converted to recursion"
        ],
        "correctIndex": 0,
        "explanation": "Passing examples does not prove that a greedy choice is always safe."
      },
      {
        "id": "quiz-greedy-set-20-q4",
        "question": "What is an exchange argument trying to establish?",
        "options": [
          "An optimal solution can be transformed to use the greedy choice without worsening the result",
          "Every solution has the same cost",
          "The input should be exchanged with another input",
          "The algorithm must use swapping"
        ],
        "correctIndex": 0,
        "explanation": "This argument demonstrates that the greedy choice can safely appear in an optimal solution."
      },
      {
        "id": "quiz-greedy-set-20-q5",
        "question": "Why can sorting be an important part of a greedy algorithm?",
        "options": [
          "Sorting can expose the order in which locally safe choices should be considered",
          "Sorting automatically proves correctness",
          "Sorting always gives the final answer",
          "Sorting removes all constraints"
        ],
        "correctIndex": 0,
        "explanation": "Many greedy algorithms rely on processing candidates according to a carefully chosen ordering."
      },
      {
        "id": "quiz-greedy-set-20-q6",
        "question": "Which statement best describes a safe greedy algorithm?",
        "options": [
          "Every committed greedy choice can be extended to an optimal solution under the problem's required properties",
          "It always chooses the largest value",
          "It never uses sorting",
          "It always runs in O(n)"
        ],
        "correctIndex": 0,
        "explanation": "The defining feature is not the specific direction of the choice but the proof that the choice is safe."
      },
      {
        "id": "quiz-greedy-set-20-q7",
        "question": "What is the biggest mistake when learning greedy algorithms?",
        "options": [
          "Assuming that choosing the locally largest or smallest value automatically gives the global optimum",
          "Learning Activity Selection",
          "Learning MST algorithms",
          "Analyzing time complexity"
        ],
        "correctIndex": 0,
        "explanation": "Greedy is about a provably safe strategy, not simply choosing the largest or smallest value."
      }
    ]
  }
];

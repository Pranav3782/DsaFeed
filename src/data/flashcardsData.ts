import { Flashcard } from '../types';

// Total: 150 Flashcards (10 per topic)
export const FLASHCARDS: Flashcard[] = [
  // ARRAYS
  {
    id: 'fc-1',
    topicId: 'arrays',
    question: "What is an Array?",
    answer: "A collection of items stored at contiguous memory locations, allowing O(1) random access using indices."
  },
  {
    id: 'fc-2',
    topicId: 'arrays',
    question: "What is the time complexity to access an element by index?",
    answer: "O(1) - Constant time, because the memory address is calculated instantly using the base address and index."
  },
  {
    id: 'fc-3',
    topicId: 'arrays',
    question: "Why is inserting at the beginning of an Array slow?",
    answer: "Because all existing elements must be shifted one position to the right, taking O(N) time."
  },
  {
    id: 'fc-4',
    topicId: 'arrays',
    question: "What is a Dynamic Array?",
    answer: "An array that automatically resizes itself (usually doubling in size) when it runs out of capacity."
  },
  {
    id: 'fc-5',
    topicId: 'arrays',
    question: "What is the amortized time complexity of appending to a dynamic array?",
    answer: "O(1). Although resizing takes O(N), it happens infrequently enough that the average time per append is constant."
  },
  {
    id: 'fc-6',
    topicId: 'arrays',
    question: "What is the difference between an Array and a List in Python?",
    answer: "Python Lists are dynamic arrays under the hood, whereas traditional arrays are fixed-size and homogeneous (store same data types)."
  },
  {
    id: 'fc-7',
    topicId: 'arrays',
    question: "How do you find the length of an array in constant time?",
    answer: "The array data structure maintains a hidden \"size\" property that is updated during insertions and deletions, allowing O(1) retrieval."
  },
  {
    id: 'fc-8',
    topicId: 'arrays',
    question: "What is a 2D Array (Matrix)?",
    answer: "An array of arrays, representing a grid or table of data with rows and columns."
  },
  {
    id: 'fc-9',
    topicId: 'arrays',
    question: "What happens if you access an index outside the array bounds?",
    answer: "It results in an \"Index Out of Bounds\" exception or returns undefined/garbage values, depending on the language."
  },
  {
    id: 'fc-10',
    topicId: 'arrays',
    question: "When should you avoid using an Array?",
    answer: "When you need frequent insertions and deletions at the beginning or middle of the collection."
  },
  // STRINGS
  {
    id: 'fc-11',
    topicId: 'strings',
    question: "What is a String?",
    answer: "A sequence of characters, usually implemented as an array of characters or bytes in memory."
  },
  {
    id: 'fc-12',
    topicId: 'strings',
    question: "Are strings mutable or immutable in most languages?",
    answer: "In many modern languages (like Python, Java, JavaScript), strings are immutable. Changing a string creates a completely new string in memory."
  },
  {
    id: 'fc-13',
    topicId: 'strings',
    question: "What is a Substring?",
    answer: "A contiguous sequence of characters within a string."
  },
  {
    id: 'fc-14',
    topicId: 'strings',
    question: "How do you concatenate strings efficiently?",
    answer: "Using a StringBuilder or joining an array of strings, because repeated concatenation with \"+\" creates many temporary strings (O(N^2) time)."
  },
  {
    id: 'fc-15',
    topicId: 'strings',
    question: "What is an Anagram?",
    answer: "A word or phrase formed by rearranging the letters of a different word or phrase, typically using all original letters exactly once."
  },
  {
    id: 'fc-16',
    topicId: 'strings',
    question: "What is a Palindrome?",
    answer: "A string that reads the same forwards and backwards (e.g., \"racecar\")."
  },
  {
    id: 'fc-17',
    topicId: 'strings',
    question: "How do you quickly check if two strings are anagrams?",
    answer: "Sort both strings and compare them (O(N log N)), or count the frequency of each character using a Hash Map/Array (O(N))."
  },
  {
    id: 'fc-18',
    topicId: 'strings',
    question: "What is ASCII?",
    answer: "A character encoding standard that assigns a unique number to 128 standard characters (letters, numbers, symbols)."
  },
  {
    id: 'fc-19',
    topicId: 'strings',
    question: "What is Unicode?",
    answer: "A universal character encoding standard that supports text in almost all world languages, emojis, and symbols, unlike ASCII which only supports 128."
  },
  {
    id: 'fc-20',
    topicId: 'strings',
    question: "What is the typical time complexity of searching for a substring (e.g., indexOf)?",
    answer: "Usually O(N*M) in simple implementations, but algorithms like KMP or Rabin-Karp can do it in O(N+M) time."
  },
  // LINKED-LISTS
  {
    id: 'fc-21',
    topicId: 'linked-lists',
    question: "What is a Linked List?",
    answer: "A linear data structure where elements (nodes) are not stored in contiguous memory. Each node points to the next node in the sequence."
  },
  {
    id: 'fc-22',
    topicId: 'linked-lists',
    question: "What is a Node?",
    answer: "The basic building block of a linked list, containing data and a reference (pointer) to the next node."
  },
  {
    id: 'fc-23',
    topicId: 'linked-lists',
    question: "What is the Head of a Linked List?",
    answer: "The first node in a linked list. It serves as the starting point for any traversal."
  },
  {
    id: 'fc-24',
    topicId: 'linked-lists',
    question: "Why is searching in a Linked List slow?",
    answer: "Because there is no random access (like array indices). You must traverse sequentially from the head to find an element, taking O(N) time."
  },
  {
    id: 'fc-25',
    topicId: 'linked-lists',
    question: "What is the advantage of Linked Lists over Arrays?",
    answer: "Insertions and deletions at known positions (like the head) take O(1) time, without needing to shift other elements."
  },
  {
    id: 'fc-26',
    topicId: 'linked-lists',
    question: "What is a Doubly Linked List?",
    answer: "A linked list where each node has two pointers: one to the next node, and one to the previous node."
  },
  {
    id: 'fc-27',
    topicId: 'linked-lists',
    question: "What is a Circular Linked List?",
    answer: "A linked list where the last node points back to the head, creating a closed loop."
  },
  {
    id: 'fc-28',
    topicId: 'linked-lists',
    question: "What is the \"Runner Technique\" (Two Pointers)?",
    answer: "Using two pointers moving at different speeds (e.g., fast and slow) to detect cycles or find the middle of a linked list."
  },
  {
    id: 'fc-29',
    topicId: 'linked-lists',
    question: "How do you reverse a Linked List?",
    answer: "Iterate through the list, keeping track of the previous node, current node, and next node, and reverse the pointers one by one."
  },
  {
    id: 'fc-30',
    topicId: 'linked-lists',
    question: "What happens if you lose the reference to the Head node?",
    answer: "The entire linked list is lost in memory and will be garbage collected (a memory leak in languages like C/C++)."
  },
  // STACKS
  {
    id: 'fc-31',
    topicId: 'stacks',
    question: "What is a Stack?",
    answer: "A linear data structure that follows the Last In, First Out (LIFO) principle. Think of a stack of plates."
  },
  {
    id: 'fc-32',
    topicId: 'stacks',
    question: "What does \"Push\" do?",
    answer: "Adds an element to the top of the stack. (O(1) time complexity)"
  },
  {
    id: 'fc-33',
    topicId: 'stacks',
    question: "What does \"Pop\" do?",
    answer: "Removes and returns the element at the top of the stack. (O(1) time complexity)"
  },
  {
    id: 'fc-34',
    topicId: 'stacks',
    question: "What does \"Peek\" or \"Top\" do?",
    answer: "Returns the top element without removing it from the stack."
  },
  {
    id: 'fc-35',
    topicId: 'stacks',
    question: "What is Stack Overflow?",
    answer: "An error that occurs when a program attempts to use more space in the call stack than has been allocated (often caused by infinite recursion)."
  },
  {
    id: 'fc-36',
    topicId: 'stacks',
    question: "How are function calls managed in programming languages?",
    answer: "Using a Call Stack. Each function call pushes a new \"frame\" onto the stack, which is popped when the function returns."
  },
  {
    id: 'fc-37',
    topicId: 'stacks',
    question: "How can a Stack be used for checking balanced parentheses?",
    answer: "Push opening brackets onto the stack. When you see a closing bracket, pop the stack and check if it matches the opening bracket."
  },
  {
    id: 'fc-38',
    topicId: 'stacks',
    question: "Can a Stack be implemented using an Array?",
    answer: "Yes, pushing and popping from the end of a dynamic array gives O(1) amortized performance."
  },
  {
    id: 'fc-39',
    topicId: 'stacks',
    question: "Can a Stack be implemented using a Linked List?",
    answer: "Yes, pushing and popping from the head of a linked list provides strict O(1) performance."
  },
  {
    id: 'fc-40',
    topicId: 'stacks',
    question: "What is a Monotonic Stack?",
    answer: "A stack whose elements are always entirely in increasing or decreasing order. Useful for \"next greater element\" problems."
  },
  // QUEUES
  {
    id: 'fc-41',
    topicId: 'queues',
    question: "What is a Queue?",
    answer: "A linear data structure that follows the First In, First Out (FIFO) principle. Think of a line of people waiting."
  },
  {
    id: 'fc-42',
    topicId: 'queues',
    question: "What does \"Enqueue\" do?",
    answer: "Adds an element to the back (rear) of the queue. (O(1) time complexity)"
  },
  {
    id: 'fc-43',
    topicId: 'queues',
    question: "What does \"Dequeue\" do?",
    answer: "Removes and returns the element at the front of the queue. (O(1) time complexity)"
  },
  {
    id: 'fc-44',
    topicId: 'queues',
    question: "What is a common real-world use case for a Queue?",
    answer: "Print spooling, task scheduling (CPU), or processing requests on a web server in the order they were received."
  },
  {
    id: 'fc-45',
    topicId: 'queues',
    question: "Why is implementing a Queue with a standard array inefficient?",
    answer: "Dequeueing from the front of a standard array requires shifting all remaining elements, taking O(N) time."
  },
  {
    id: 'fc-46',
    topicId: 'queues',
    question: "What is a Circular Queue (Ring Buffer)?",
    answer: "An array-based queue where the rear wraps around to the beginning when it reaches the end, maximizing space efficiency."
  },
  {
    id: 'fc-47',
    topicId: 'queues',
    question: "What is a Double-Ended Queue (Deque)?",
    answer: "A queue that allows insertion and deletion at both the front and the rear in O(1) time."
  },
  {
    id: 'fc-48',
    topicId: 'queues',
    question: "What algorithm uses a Queue as its primary data structure?",
    answer: "Breadth-First Search (BFS) uses a queue to explore nodes level by level."
  },
  {
    id: 'fc-49',
    topicId: 'queues',
    question: "Can a Queue be implemented using Stacks?",
    answer: "Yes, using two stacks. One stack is used for enqueueing, and the other is used for dequeueing (transferring elements to reverse order)."
  },
  {
    id: 'fc-50',
    topicId: 'queues',
    question: "What is a Priority Queue?",
    answer: "A specialized queue where elements have priorities. Elements with higher priority are dequeued before elements with lower priority, regardless of insertion order."
  },
  // HASH-MAPS
  {
    id: 'fc-51',
    topicId: 'hash-maps',
    question: "What is a Hash Map (Hash Table)?",
    answer: "A data structure that maps keys to values for highly efficient lookups, insertions, and deletions."
  },
  {
    id: 'fc-52',
    topicId: 'hash-maps',
    question: "What is the average time complexity for Hash Map operations?",
    answer: "O(1) - Constant time for insert, delete, and lookup on average."
  },
  {
    id: 'fc-53',
    topicId: 'hash-maps',
    question: "What is a Hash Function?",
    answer: "A function that converts a key (like a string) into an integer index, which determines where the value is stored in the underlying array."
  },
  {
    id: 'fc-54',
    topicId: 'hash-maps',
    question: "What is a Hash Collision?",
    answer: "When a hash function generates the same index for two completely different keys."
  },
  {
    id: 'fc-55',
    topicId: 'hash-maps',
    question: "How are collisions resolved using Chaining?",
    answer: "Instead of storing a single value at the array index, the index stores a Linked List of all key-value pairs that hashed to that location."
  },
  {
    id: 'fc-56',
    topicId: 'hash-maps',
    question: "How are collisions resolved using Open Addressing?",
    answer: "If an index is occupied, the hash map probes for the next available empty slot in the array (e.g., linear probing)."
  },
  {
    id: 'fc-57',
    topicId: 'hash-maps',
    question: "What is the Load Factor?",
    answer: "The ratio of the number of elements in the hash map to its total capacity. When it exceeds a threshold, the map resizes itself."
  },
  {
    id: 'fc-58',
    topicId: 'hash-maps',
    question: "Why do Hash Maps need to resize?",
    answer: "To maintain O(1) performance. If the array gets too full, collisions increase, degrading performance to O(N)."
  },
  {
    id: 'fc-59',
    topicId: 'hash-maps',
    question: "Are Hash Maps ordered?",
    answer: "In traditional Hash Maps, keys are completely unordered. Some implementations (like Python dicts 3.7+ or LinkedHashMap) maintain insertion order."
  },
  {
    id: 'fc-60',
    topicId: 'hash-maps',
    question: "When should you NOT use a Hash Map?",
    answer: "When you need to iterate through elements in a sorted order, or when you need to find the maximum/minimum element quickly."
  },
  // TREES
  {
    id: 'fc-61',
    topicId: 'trees',
    question: "What is a Tree?",
    answer: "A hierarchical, non-linear data structure consisting of nodes connected by edges, with a single root and no cycles."
  },
  {
    id: 'fc-62',
    topicId: 'trees',
    question: "What is the Root node?",
    answer: "The topmost node of the tree. It is the only node without a parent."
  },
  {
    id: 'fc-63',
    topicId: 'trees',
    question: "What is a Leaf node?",
    answer: "A node at the very bottom of the tree that has no children."
  },
  {
    id: 'fc-64',
    topicId: 'trees',
    question: "What is a Binary Tree?",
    answer: "A tree where every node has at most two children, typically referred to as the left child and right child."
  },
  {
    id: 'fc-65',
    topicId: 'trees',
    question: "What is a Binary Search Tree (BST)?",
    answer: "A binary tree where the left child is always less than the parent, and the right child is always greater than the parent."
  },
  {
    id: 'fc-66',
    topicId: 'trees',
    question: "What is the time complexity of searching in a balanced BST?",
    answer: "O(log N), because every step eliminates half of the remaining nodes."
  },
  {
    id: 'fc-67',
    topicId: 'trees',
    question: "What happens if a BST becomes completely unbalanced (like a straight line)?",
    answer: "It essentially becomes a Linked List, and search/insert/delete operations degrade to O(N) time."
  },
  {
    id: 'fc-68',
    topicId: 'trees',
    question: "What is In-order Traversal?",
    answer: "Visiting the Left subtree, then the Node, then the Right subtree. In a BST, this visits nodes in sorted order."
  },
  {
    id: 'fc-69',
    topicId: 'trees',
    question: "What is Pre-order Traversal?",
    answer: "Visiting the Node first, then Left, then Right. Useful for copying or serializing a tree."
  },
  {
    id: 'fc-70',
    topicId: 'trees',
    question: "What is a Balanced Tree (e.g., AVL, Red-Black)?",
    answer: "A tree that automatically rebalances itself during insertions and deletions to guarantee a height of O(log N)."
  },
  // GRAPHS
  {
    id: 'fc-71',
    topicId: 'graphs',
    question: "What is a Graph?",
    answer: "A data structure consisting of a set of vertices (nodes) and a set of edges connecting those vertices."
  },
  {
    id: 'fc-72',
    topicId: 'graphs',
    question: "What is the difference between Directed and Undirected graphs?",
    answer: "In directed graphs, edges have a direction (A points to B). In undirected graphs, edges are two-way connections."
  },
  {
    id: 'fc-73',
    topicId: 'graphs',
    question: "What is a Weighted Graph?",
    answer: "A graph where each edge has a numerical value or \"cost\" associated with it (e.g., distance between two cities)."
  },
  {
    id: 'fc-74',
    topicId: 'graphs',
    question: "What is an Adjacency Matrix?",
    answer: "A 2D array of size V x V where matrix[i][j] is 1 (or the weight) if there is an edge between vertex i and vertex j."
  },
  {
    id: 'fc-75',
    topicId: 'graphs',
    question: "What is an Adjacency List?",
    answer: "An array of lists, where the list at index i contains all the neighbors of vertex i. It is much more space-efficient for sparse graphs."
  },
  {
    id: 'fc-76',
    topicId: 'graphs',
    question: "What is Breadth-First Search (BFS)?",
    answer: "An algorithm that explores a graph level by level, radiating outward from the starting node. Uses a Queue."
  },
  {
    id: 'fc-77',
    topicId: 'graphs',
    question: "What is Depth-First Search (DFS)?",
    answer: "An algorithm that explores as far down a path as possible before backtracking. Uses a Stack (or recursion)."
  },
  {
    id: 'fc-78',
    topicId: 'graphs',
    question: "What is a Cycle?",
    answer: "A path in a graph that starts and ends at the exact same vertex."
  },
  {
    id: 'fc-79',
    topicId: 'graphs',
    question: "What is a Connected Component?",
    answer: "A subgraph where every pair of vertices is connected by a path, and it is not connected to any other vertices in the larger graph."
  },
  {
    id: 'fc-80',
    topicId: 'graphs',
    question: "Which algorithm finds the shortest path in an unweighted graph?",
    answer: "Breadth-First Search (BFS) guarantees finding the shortest path in terms of the number of edges."
  },
  // SORTING
  {
    id: 'fc-81',
    topicId: 'sorting',
    question: "What is Bubble Sort?",
    answer: "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. O(N^2) time."
  },
  {
    id: 'fc-82',
    topicId: 'sorting',
    question: "What is Merge Sort?",
    answer: "A divide-and-conquer algorithm that divides the array in half, sorts each half recursively, and then merges the sorted halves. O(N log N) time."
  },
  {
    id: 'fc-83',
    topicId: 'sorting',
    question: "What is Quick Sort?",
    answer: "A divide-and-conquer algorithm that selects a \"pivot\", partitions the array into elements smaller and larger than the pivot, and sorts them. O(N log N) average time."
  },
  {
    id: 'fc-84',
    topicId: 'sorting',
    question: "Why is Quick Sort often preferred over Merge Sort in practice?",
    answer: "Because it does in-place sorting (requires O(log N) memory) and has excellent cache locality, making it faster in the real world despite worst-case O(N^2)."
  },
  {
    id: 'fc-85',
    topicId: 'sorting',
    question: "What is a Stable Sort?",
    answer: "A sorting algorithm that preserves the relative order of equal elements. (e.g., Merge Sort is stable, Quick Sort is typically not)."
  },
  {
    id: 'fc-86',
    topicId: 'sorting',
    question: "What is Insertion Sort?",
    answer: "Builds the final sorted array one item at a time by picking the next item and inserting it into its correct position in the already sorted part. Great for small or nearly sorted data."
  },
  {
    id: 'fc-87',
    topicId: 'sorting',
    question: "What is the theoretical lower bound time complexity for comparison-based sorting?",
    answer: "O(N log N). You cannot sort faster than this using only comparisons."
  },
  {
    id: 'fc-88',
    topicId: 'sorting',
    question: "What is Counting Sort?",
    answer: "A non-comparison integer sorting algorithm that counts the occurrences of each unique value. Can sort in O(N) time if the range of numbers is small."
  },
  {
    id: 'fc-89',
    topicId: 'sorting',
    question: "What is Selection Sort?",
    answer: "Finds the minimum element from the unsorted part and puts it at the beginning. Always takes O(N^2) time, regardless of initial order."
  },
  {
    id: 'fc-90',
    topicId: 'sorting',
    question: "What is the Space Complexity of Merge Sort?",
    answer: "O(N), because it requires a temporary array during the merging phase."
  },
  // SEARCHING
  {
    id: 'fc-91',
    topicId: 'searching',
    question: "What is Linear Search?",
    answer: "Sequentially checking every element in a list until the target is found. O(N) time complexity."
  },
  {
    id: 'fc-92',
    topicId: 'searching',
    question: "When is Linear Search appropriate?",
    answer: "When the data is completely unsorted, or the collection is very small."
  },
  {
    id: 'fc-93',
    topicId: 'searching',
    question: "What is Binary Search?",
    answer: "An efficient search algorithm that finds an item from a SORTED list by repeatedly dividing the search interval in half. O(log N) time."
  },
  {
    id: 'fc-94',
    topicId: 'searching',
    question: "Why MUST the array be sorted for Binary Search?",
    answer: "Because the algorithm relies on knowing that all elements to the left of the midpoint are smaller, and all elements to the right are larger."
  },
  {
    id: 'fc-95',
    topicId: 'searching',
    question: "How do you calculate the midpoint safely in Binary Search?",
    answer: "mid = left + (right - left) / 2 to prevent integer overflow that could occur with (left + right) / 2."
  },
  {
    id: 'fc-96',
    topicId: 'searching',
    question: "Can Binary Search be used on a Linked List?",
    answer: "Technically yes, but it takes O(N) time just to find the midpoint, destroying the O(log N) advantage."
  },
  {
    id: 'fc-97',
    topicId: 'searching',
    question: "What is Depth-First Search (DFS) in a tree/graph?",
    answer: "A search technique that dives deep into a data structure before backtracking."
  },
  {
    id: 'fc-98',
    topicId: 'searching',
    question: "What is Breadth-First Search (BFS) in a tree/graph?",
    answer: "A search technique that explores nodes level by level, useful for finding the shortest path in unweighted graphs."
  },
  {
    id: 'fc-99',
    topicId: 'searching',
    question: "What is the time complexity of searching in a Hash Map?",
    answer: "O(1) on average, making it the fastest search data structure for key-value pairs."
  },
  {
    id: 'fc-100',
    topicId: 'searching',
    question: "What is a lower bound (e.g., bisect_left)?",
    answer: "A variant of binary search that finds the FIRST occurrence of a target element in a sorted array with duplicates."
  },
  // DP
  {
    id: 'fc-101',
    topicId: 'dp',
    question: "What is Dynamic Programming (DP)?",
    answer: "An algorithmic technique for solving complex problems by breaking them down into simpler overlapping subproblems and storing the results."
  },
  {
    id: 'fc-102',
    topicId: 'dp',
    question: "What is Memoization (Top-Down DP)?",
    answer: "Solving the problem recursively and caching (saving) the results of expensive function calls to avoid recalculating them later."
  },
  {
    id: 'fc-103',
    topicId: 'dp',
    question: "What is Tabulation (Bottom-Up DP)?",
    answer: "Solving the problem iteratively using a table (array), solving the smallest subproblems first and building up to the final answer."
  },
  {
    id: 'fc-104',
    topicId: 'dp',
    question: "What are Overlapping Subproblems?",
    answer: "When a problem can be broken down into subproblems which are reused several times (e.g., calculating Fibonacci(3) multiple times)."
  },
  {
    id: 'fc-105',
    topicId: 'dp',
    question: "What is Optimal Substructure?",
    answer: "When the optimal solution to a problem can be constructed from the optimal solutions of its subproblems."
  },
  {
    id: 'fc-106',
    topicId: 'dp',
    question: "Why is DP better than raw Recursion?",
    answer: "Raw recursion recalculates the same subproblems exponentially. DP computes each subproblem exactly once, reducing exponential time O(2^N) to polynomial time O(N)."
  },
  {
    id: 'fc-107',
    topicId: 'dp',
    question: "What is the classic 0/1 Knapsack Problem?",
    answer: "Given items with weights and values, maximize the total value without exceeding the weight capacity of a knapsack."
  },
  {
    id: 'fc-108',
    topicId: 'dp',
    question: "What is the Longest Common Subsequence (LCS)?",
    answer: "Finding the longest sequence that appears in both strings in the same relative order, but not necessarily contiguous."
  },
  {
    id: 'fc-109',
    topicId: 'dp',
    question: "How do you optimize Space Complexity in Tabulation DP?",
    answer: "If the current row only depends on the previous row (or last two rows), you can store just those rows instead of a massive 2D matrix."
  },
  {
    id: 'fc-110',
    topicId: 'dp',
    question: "Is DP always the best solution for optimization problems?",
    answer: "Not always. If the problem exhibits the \"Greedy Choice Property\", a Greedy algorithm might be faster and simpler than DP."
  },
  // BACKTRACKING
  {
    id: 'fc-111',
    topicId: 'backtracking',
    question: "What is Backtracking?",
    answer: "An algorithmic technique for finding all (or some) solutions by exploring all possible paths, and abandoning (\"backtracking\") paths that fail to satisfy constraints."
  },
  {
    id: 'fc-112',
    topicId: 'backtracking',
    question: "How is Backtracking related to Recursion?",
    answer: "Backtracking is implemented using recursion. It traverses a state-space tree depth-first."
  },
  {
    id: 'fc-113',
    topicId: 'backtracking',
    question: "What is the classic N-Queens Problem?",
    answer: "Placing N chess queens on an NxN chessboard so that no two queens threaten each other."
  },
  {
    id: 'fc-114',
    topicId: 'backtracking',
    question: "What is the difference between DFS and Backtracking?",
    answer: "DFS visits every node. Backtracking is essentially DFS but with \"pruning\"\u2014it stops exploring a branch as soon as it determines it cannot lead to a valid solution."
  },
  {
    id: 'fc-115',
    topicId: 'backtracking',
    question: "What is Pruning?",
    answer: "Stopping the exploration of a recursive branch early because constraints have been violated, saving massive amounts of computation time."
  },
  {
    id: 'fc-116',
    topicId: 'backtracking',
    question: "Why does Backtracking often have exponential time complexity (O(2^N) or O(N!))?",
    answer: "Because it is designed to explore combinations or permutations, the number of which grows exponentially with the input size."
  },
  {
    id: 'fc-117',
    topicId: 'backtracking',
    question: "What is the Subset sum problem?",
    answer: "Finding all subsets of a given set whose elements sum to a specific target value. Easily solved with backtracking."
  },
  {
    id: 'fc-118',
    topicId: 'backtracking',
    question: "What are the three core steps of a backtracking recursive function?",
    answer: "1. Choose an option. 2. Explore recursively. 3. \"Un-choose\" (backtrack) to explore the next option."
  },
  {
    id: 'fc-119',
    topicId: 'backtracking',
    question: "When should you use Backtracking instead of DP?",
    answer: "When you need to find ALL possible valid combinations/permutations, rather than just the single \"optimal\" value or count."
  },
  {
    id: 'fc-120',
    topicId: 'backtracking',
    question: "What happens if you forget the \"Un-choose\" (backtrack) step?",
    answer: "Your state (like an array or path) will become polluted with choices from previous recursive branches, leading to completely incorrect results."
  },
  // GREEDY
  {
    id: 'fc-121',
    topicId: 'greedy',
    question: "What is a Greedy Algorithm?",
    answer: "An algorithmic paradigm that makes the locally optimal choice at each step with the hope of finding a global optimum."
  },
  {
    id: 'fc-122',
    topicId: 'greedy',
    question: "What is the \"Greedy Choice Property\"?",
    answer: "The guarantee that a globally optimal solution can be arrived at by making a locally optimal choice at each step without reconsidering previous choices."
  },
  {
    id: 'fc-123',
    topicId: 'greedy',
    question: "Does a Greedy algorithm always produce the optimal solution?",
    answer: "No! It only works if the problem has the greedy choice property and optimal substructure. Otherwise, it may return a sub-optimal solution."
  },
  {
    id: 'fc-124',
    topicId: 'greedy',
    question: "What is Dijkstra's Algorithm?",
    answer: "A classic greedy algorithm for finding the shortest path from a starting node to all other nodes in a graph with non-negative edge weights."
  },
  {
    id: 'fc-125',
    topicId: 'greedy',
    question: "What is Huffman Coding?",
    answer: "A greedy algorithm used for lossless data compression, assigning variable-length codes to characters based on their frequencies."
  },
  {
    id: 'fc-126',
    topicId: 'greedy',
    question: "What is the classic Fractional Knapsack Problem?",
    answer: "A problem where you can take fractions of items. Unlike 0/1 Knapsack, it can be optimally solved with a Greedy algorithm by sorting by value/weight ratio."
  },
  {
    id: 'fc-127',
    topicId: 'greedy',
    question: "Why are Greedy algorithms preferred when they work?",
    answer: "Because they are generally much faster and use less memory (often O(N log N) or O(N)) compared to Dynamic Programming (O(N^2) or worse)."
  },
  {
    id: 'fc-128',
    topicId: 'greedy',
    question: "How do you usually structure a Greedy solution?",
    answer: "1. Sort the data based on some heuristic (e.g., end time, value/weight). 2. Iterate through and greedily pick the best option."
  },
  {
    id: 'fc-129',
    topicId: 'greedy',
    question: "What is the Activity Selection Problem?",
    answer: "Given a set of activities with start and end times, select the maximum number of non-overlapping activities. (Greedy strategy: always pick the one that ends earliest)."
  },
  {
    id: 'fc-130',
    topicId: 'greedy',
    question: "What is the risk of using a Greedy algorithm?",
    answer: "Proving its correctness. A greedy approach might seem intuitively correct but can fail on hidden edge cases unless mathematically proven."
  },
  // TRIES
  {
    id: 'fc-131',
    topicId: 'tries',
    question: "What is a Trie (Prefix Tree)?",
    answer: "A tree-like data structure used to efficiently store and retrieve strings, where each node represents a character of the string."
  },
  {
    id: 'fc-132',
    topicId: 'tries',
    question: "What is the main use case for a Trie?",
    answer: "Autocomplete, spell checkers, and searching for words in a dictionary."
  },
  {
    id: 'fc-133',
    topicId: 'tries',
    question: "What is the time complexity of searching for a word of length L in a Trie?",
    answer: "O(L) - which is exceptionally fast, as it doesn't depend on how many millions of words are stored in the dictionary!"
  },
  {
    id: 'fc-134',
    topicId: 'tries',
    question: "How does a Trie handle words sharing the same prefix (e.g., \"cat\" and \"car\")?",
    answer: "They share the same nodes for the prefix \"ca\", branching only at the third character. This saves massive amounts of space."
  },
  {
    id: 'fc-135',
    topicId: 'tries',
    question: "What marks the end of a valid word in a Trie?",
    answer: "A boolean flag (e.g., `isEndOfWord = true`) on the node of the final character of the word."
  },
  {
    id: 'fc-136',
    topicId: 'tries',
    question: "What is the space complexity of a Trie?",
    answer: "O(N * L * Alphabet Size), where N is the number of words. It can be memory-intensive if words don't share many prefixes."
  },
  {
    id: 'fc-137',
    topicId: 'tries',
    question: "Why use a Trie instead of a Hash Set for storing a dictionary?",
    answer: "A Hash Set cannot easily do prefix matching (e.g., \"give me all words starting with 'app'\"). A Trie does this natively."
  },
  {
    id: 'fc-138',
    topicId: 'tries',
    question: "Can a Trie store things other than strings?",
    answer: "Yes, Tries can store sequences of bits (Bit Tries) to efficiently solve maximum XOR and IP routing problems."
  },
  {
    id: 'fc-139',
    topicId: 'tries',
    question: "What is a Radix Tree (Compact Trie)?",
    answer: "An optimized version of a Trie where nodes with only one child are merged together, saving significant memory."
  },
  {
    id: 'fc-140',
    topicId: 'tries',
    question: "How do you implement autocomplete using a Trie?",
    answer: "Traverse down to the node representing the user's prefix, then use DFS from that node to find all valid words terminating in that subtree."
  },
  // DISJOINT-SETS
  {
    id: 'fc-141',
    topicId: 'disjoint-sets',
    question: "What is a Disjoint-Set (Union-Find) data structure?",
    answer: "A data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets."
  },
  {
    id: 'fc-142',
    topicId: 'disjoint-sets',
    question: "What are the two primary operations of Union-Find?",
    answer: "Find (determines which subset an element is in) and Union (joins two subsets into a single subset)."
  },
  {
    id: 'fc-143',
    topicId: 'disjoint-sets',
    question: "What is a common real-world use case for Union-Find?",
    answer: "Finding connected components in a network, determining if two people are in the same friend group, or Kruskal's Minimum Spanning Tree algorithm."
  },
  {
    id: 'fc-144',
    topicId: 'disjoint-sets',
    question: "How is a Disjoint-Set usually implemented?",
    answer: "Using an array `parent[]`, where `parent[i]` points to the parent of element i. A subset is represented by its \"root\" element (where `parent[i] == i`)."
  },
  {
    id: 'fc-145',
    topicId: 'disjoint-sets',
    question: "What is Path Compression?",
    answer: "An optimization during the `Find` operation: flattening the structure of the tree so that every node points directly to the root, vastly speeding up future lookups."
  },
  {
    id: 'fc-146',
    topicId: 'disjoint-sets',
    question: "What is Union by Rank (or Size)?",
    answer: "An optimization during the `Union` operation: always attaching the smaller tree to the root of the larger tree to keep the overall tree shallow."
  },
  {
    id: 'fc-147',
    topicId: 'disjoint-sets',
    question: "What is the time complexity of Union-Find with both optimizations?",
    answer: "Nearly O(1). Specifically, it is O(\u03b1(N)), where \u03b1 is the inverse Ackermann function, which is \u2264 4 for all reasonable values of N."
  },
  {
    id: 'fc-148',
    topicId: 'disjoint-sets',
    question: "Can Union-Find easily remove or split elements from a set?",
    answer: "No, traditional Union-Find only supports adding and merging sets. Splitting sets requires a completely different data structure."
  },
  {
    id: 'fc-149',
    topicId: 'disjoint-sets',
    question: "How do you detect a cycle in an undirected graph using Union-Find?",
    answer: "Iterate through all edges. If both vertices of an edge belong to the SAME subset (i.e., `find(u) == find(v)`), a cycle exists."
  },
  {
    id: 'fc-150',
    topicId: 'disjoint-sets',
    question: "Why is Union-Find preferred over DFS for finding connected components in dynamic graphs?",
    answer: "Because as new edges are added dynamically, Union-Find updates components in near O(1) time, whereas DFS would require an O(V+E) recalculation every time."
  },
];

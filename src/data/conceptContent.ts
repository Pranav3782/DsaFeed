import { DsaCategory } from '../types';

export interface ConceptData {
  analogy: string;
  summary: string;
  keyPoints: string[];
  whenToUse: string[];
}

/**
 * Update this file to modify the explanations shown in the Concepts section!
 * Ensure explanations are beginner-friendly and use real-world analogies.
 */
export const CONCEPT_CONTENT: Record<DsaCategory, ConceptData> = {
  arrays: {
    analogy: 'Imagine a row of numbered parking spaces or a carton of eggs. Every item has a fixed, numbered slot called an index, starting from 0.',
    summary: 'Arrays store elements in sequential order directly next to each other in memory. Because they are contiguous, accessing any element if you know its index number is incredibly fast (instantaneous).',
    keyPoints: [
      '0-indexed: The first element is always at index 0, not 1.',
      'Instant Access: Reading `arr[5]` takes O(1) time—it goes straight to that memory slot.',
      'Costly Inserts: Inserting an item at the beginning means you have to shift every other item one spot to the right (O(N) time).'
    ],
    whenToUse: [
      'When you need blazing fast read access by index.',
      'When you know the size of the data in advance.',
      'As a fundamental building block for other structures like Stacks or Hash Maps.'
    ]
  },
  strings: {
    analogy: 'Think of a beaded necklace where each bead has a single letter printed on it.',
    summary: 'Strings are just arrays of characters. In many modern languages (like Java, Python, and JavaScript), strings are "immutable", meaning once created, you cannot change a single character—you have to create a whole new string.',
    keyPoints: [
      'Characters are accessed by index, just like arrays.',
      'String concatenation inside a loop can be slow (O(N^2)); use an array join or StringBuilder instead.',
      'Palindromes (reads same forwards and backwards) and Anagrams (rearranged letters) are extremely common interview topics.'
    ],
    whenToUse: [
      'Text processing, natural language parsing, and regex pattern matching.',
      'Encoding data (like JSON or Base64).'
    ]
  },
  'linked-lists': {
    analogy: 'A treasure hunt where each clue (Node) contains a piece of information and the exact address of where to find the NEXT clue.',
    summary: 'Unlike arrays, linked list nodes do not sit next to each other in memory. They can be scattered anywhere. Each node holds its data and a memory pointer (next) to the next item in the chain.',
    keyPoints: [
      'Head: The starting node. Tail: The last node (points to null).',
      'No Instant Access: To find the 5th item, you MUST walk through items 1, 2, 3, and 4.',
      'Fast Inserts: If you already have the node, inserting a new one next to it is instant (O(1)), because no shifting is required!'
    ],
    whenToUse: [
      'When you need frequent insertions and deletions at the beginning of a list.',
      'When you don’t know how many items you will have, preventing memory waste.'
    ]
  },
  stacks: {
    analogy: 'A stack of cafeteria trays or plates. The last plate you put on top is the very first one you take off.',
    summary: 'A Stack follows the LIFO rule (Last-In, First-Out). You can only push (add) to the top and pop (remove) from the top.',
    keyPoints: [
      'Push: Add an item to the top (O(1)).',
      'Pop: Remove an item from the top (O(1)).',
      'Peek: Look at the top item without removing it.'
    ],
    whenToUse: [
      'Undo/Redo history in text editors.',
      'Browser Back/Forward navigation.',
      'Validating matching parentheses `( { [ ] } )`.'
    ]
  },
  queues: {
    analogy: 'Waiting in line at a movie theater. The first person to join the line is the first person to get a ticket.',
    summary: 'A Queue follows the FIFO rule (First-In, First-Out). You enqueue (add) to the back and dequeue (remove) from the front.',
    keyPoints: [
      'Enqueue: Join the back of the queue (O(1)).',
      'Dequeue: Leave the front of the queue (O(1)).',
      'Always ensures fair, chronological ordering based on arrival time.'
    ],
    whenToUse: [
      'Task scheduling (like a printer queue).',
      'Handling web server requests.',
      'Breadth-First Search (BFS) in trees and graphs.'
    ]
  },
  'hash-maps': {
    analogy: 'A coat check at a club. You hand them your coat, get a ticket number (Key), and later hand back the ticket to instantly get your coat (Value).',
    summary: 'Hash Maps (also called objects, dicts, or hash tables) convert a Key into an array index using a "Hash Function". This magic allows you to store and fetch values in instant O(1) time.',
    keyPoints: [
      'Keys must be completely unique.',
      'Instant O(1) lookup, insert, and delete on average.',
      'Hash Collisions happen when two keys hash to the same spot (handled internally by chaining or probing).'
    ],
    whenToUse: [
      'Frequency counting (e.g. how many times does each letter appear?).',
      'Caching (memoization) to save expensive function results.',
      'The "Two Sum" problem (storing target complements).'
    ]
  },
  trees: {
    analogy: 'A family tree, or the folder directory on your computer (Root folder -> Subfolders -> Files).',
    summary: 'Trees are non-linear data structures. A "Binary Tree" has at most 2 children per node (Left and Right). A "Binary Search Tree" (BST) keeps smaller children on the left and larger children on the right.',
    keyPoints: [
      'Root: The top node. Leaf: A bottom node with no children.',
      'Height: The longest path from the root down to a leaf.',
      'Searching in a balanced BST takes O(log N) time, halving the search space each step.'
    ],
    whenToUse: [
      'Hierarchical data (file systems, company org charts).',
      'DOM trees in web browsers.',
      'Database indexing (B-Trees).'
    ]
  },
  graphs: {
    analogy: 'Google Maps: The cities are Vertices (Nodes), and the highways connecting them are Edges (Lines).',
    summary: 'Graphs are networks of nodes. They can be Directed (one-way streets like Twitter followers) or Undirected (two-way streets like Facebook friends).',
    keyPoints: [
      'Represented via an Adjacency List (dictionary of arrays) or an Adjacency Matrix (2D grid).',
      'DFS (Depth-First Search) uses a Stack to explore as deep as possible before backtracking.',
      'BFS (Breadth-First Search) uses a Queue to explore layer by layer (perfect for finding the shortest path).'
    ],
    whenToUse: [
      'Social networks (friends of friends).',
      'GPS Navigation and routing algorithms (Dijkstra\'s).',
      'Dependency resolution (which package installs first?).'
    ]
  },
  sorting: {
    analogy: 'Organizing a messy hand of playing cards from lowest to highest.',
    summary: 'Sorting arranges data sequentially. Simple algorithms (Bubble/Insertion Sort) are O(N²), while efficient algorithms (Merge Sort/Quick Sort) achieve O(N log N).',
    keyPoints: [
      'Merge Sort: Divide and conquer. Splits arrays in half, then merges them back together in order (O(N log N)).',
      'Quick Sort: Picks a "pivot", puts smaller things left and bigger things right, then repeats.',
      'Most built-in language `.sort()` functions use a highly optimized O(N log N) algorithm under the hood.'
    ],
    whenToUse: [
      'Whenever data must be displayed in alphabetical or numerical order.',
      'As a prerequisite before using Binary Search or Two-Pointer techniques.'
    ]
  },
  searching: {
    analogy: 'Finding a name in a phone book: you open halfway, check if the name comes before or after, and instantly rip away half the pages!',
    summary: 'Linear search scans element by element (O(N)). Binary search works ONLY on sorted arrays and repeatedly divides the search interval in half (O(log N)).',
    keyPoints: [
      'Binary Search STRICT REQUIREMENT: The array MUST be sorted first!',
      'In 1,000,000 items, Linear search takes up to 1,000,000 steps. Binary search takes at most 20 steps!',
      'Calculate `mid = low + Math.floor((high - low) / 2)` to avoid integer overflow bugs.'
    ],
    whenToUse: [
      'Finding a target value in a sorted list.',
      'Finding the first/last occurrence of a duplicate element.',
      'Searching the "Answer Space" (e.g., finding the minimum capacity needed).'
    ]
  },
  dp: {
    analogy: 'Remembering that 1+1+1+1=4, so if someone adds "+1" at the end, you just say 5 instead of recounting the first four 1s.',
    summary: 'Dynamic Programming (DP) is an optimization technique. It solves complex problems by breaking them down into simpler subproblems, and storing (memoizing) their results so you never compute the same thing twice.',
    keyPoints: [
      'Top-Down (Memoization): Uses recursion + a hash map to cache results.',
      'Bottom-Up (Tabulation): Uses a loop + an array to build answers from the base case up.',
      'Look for "overlapping subproblems" and "optimal substructure".'
    ],
    whenToUse: [
      'Finding the maximum/minimum of something (e.g., max profit, min coins).',
      'Counting total unique ways to reach a goal (e.g., climbing stairs).',
      'Problems asking for combinations or sequences.'
    ]
  },
  backtracking: {
    analogy: 'Navigating a physical maze: You walk down a path, hit a dead end, backtrack to the last fork in the road, and try a different path.',
    summary: 'Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally. If a path fails a constraint, it undoes the last choice and tries another.',
    keyPoints: [
      'It is essentially an optimized, organized brute-force search.',
      'State Reversal: You must always "undo" your choice after exploring the recursive branch.',
      'Usually implemented using Depth-First Search (DFS).'
    ],
    whenToUse: [
      'Generating all permutations or combinations.',
      'Solving Sudoku, N-Queens, or Word Search problems.',
      'When you need to explore ALL possible valid configurations.'
    ]
  },
  greedy: {
    analogy: 'Giving change to a customer using the largest coins possible first, to minimize the total number of coins handed back.',
    summary: 'Greedy algorithms build up a solution piece by piece, always choosing the next piece that offers the most immediate (local) benefit, hoping it leads to the global optimum.',
    keyPoints: [
      'Never looks back: Once a choice is made, it is never reconsidered.',
      'Often requires sorting the data first (e.g., sorting by profit/weight ratio).',
      'Warning: Greedy doesn\'t always work! It requires the problem to have the "Greedy Choice Property".'
    ],
    whenToUse: [
      'Fractional Knapsack problem.',
      'Activity Selection / Meeting Rooms (scheduling max non-overlapping intervals).',
      'Dijkstra\'s Shortest Path and minimum spanning trees.'
    ]
  },
  tries: {
    analogy: 'An old-school dictionary with thumb-tabs. You open the "C" tab, then find words starting with "Ca", then "Cat".',
    summary: 'A Trie (Prefix Tree) is a specialized tree structure used specifically to store associative data structures, primarily strings. Each node represents a single character.',
    keyPoints: [
      'Lightning fast for prefix lookups: O(L) time where L is word length, regardless of how many words exist!',
      'Space intensive: Each node can have up to 26 children (for English letters).',
      'Nodes often store a boolean flag `isEndOfWord` to mark valid dictionary words.'
    ],
    whenToUse: [
      'Building Autocomplete / Typeahead suggestion systems.',
      'Spell checkers.',
      'Finding all words with a common prefix.'
    ]
  },
  'disjoint-sets': {
    analogy: 'Grouping people into teams. If Alice is on Team A and Bob is on Team A, they are teammates. If Charlie joins Team A, he instantly becomes teammates with both Alice and Bob.',
    summary: 'Disjoint-Set (also known as Union-Find) is a data structure that tracks a set of elements partitioned into a number of disjoint (non-overlapping) subsets.',
    keyPoints: [
      'Find: Determines which subset a particular element is in (usually by finding the "Root" or "Representative").',
      'Union: Joins two subsets into a single subset.',
      'Path Compression & Union by Rank make these operations nearly constant time O(1) [Inverse Ackermann function].'
    ],
    whenToUse: [
      'Finding cycles in an undirected graph.',
      'Kruskal\'s Algorithm for Minimum Spanning Trees.',
      'Grouping connected components (e.g., networks, social circles).'
    ]
  }
};

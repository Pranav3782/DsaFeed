import json
import os

topics = [
  'arrays',
  'strings',
  'linked-lists',
  'stacks',
  'queues',
  'hash-maps',
  'trees',
  'graphs',
  'sorting',
  'searching',
  'dp',
  'backtracking',
  'greedy',
  'tries',
  'disjoint-sets'
]

flashcards = []

data = {
    'arrays': [
        ('What is an Array?', 'A collection of items stored at contiguous memory locations, allowing O(1) random access using indices.'),
        ('What is the time complexity to access an element by index?', 'O(1) - Constant time, because the memory address is calculated instantly using the base address and index.'),
        ('Why is inserting at the beginning of an Array slow?', 'Because all existing elements must be shifted one position to the right, taking O(N) time.'),
        ('What is a Dynamic Array?', 'An array that automatically resizes itself (usually doubling in size) when it runs out of capacity.'),
        ('What is the amortized time complexity of appending to a dynamic array?', 'O(1). Although resizing takes O(N), it happens infrequently enough that the average time per append is constant.'),
        ('What is the difference between an Array and a List in Python?', 'Python Lists are dynamic arrays under the hood, whereas traditional arrays are fixed-size and homogeneous (store same data types).'),
        ('How do you find the length of an array in constant time?', 'The array data structure maintains a hidden "size" property that is updated during insertions and deletions, allowing O(1) retrieval.'),
        ('What is a 2D Array (Matrix)?', 'An array of arrays, representing a grid or table of data with rows and columns.'),
        ('What happens if you access an index outside the array bounds?', 'It results in an "Index Out of Bounds" exception or returns undefined/garbage values, depending on the language.'),
        ('When should you avoid using an Array?', 'When you need frequent insertions and deletions at the beginning or middle of the collection.')
    ],
    'strings': [
        ('What is a String?', 'A sequence of characters, usually implemented as an array of characters or bytes in memory.'),
        ('Are strings mutable or immutable in most languages?', 'In many modern languages (like Python, Java, JavaScript), strings are immutable. Changing a string creates a completely new string in memory.'),
        ('What is a Substring?', 'A contiguous sequence of characters within a string.'),
        ('How do you concatenate strings efficiently?', 'Using a StringBuilder or joining an array of strings, because repeated concatenation with "+" creates many temporary strings (O(N^2) time).'),
        ('What is an Anagram?', 'A word or phrase formed by rearranging the letters of a different word or phrase, typically using all original letters exactly once.'),
        ('What is a Palindrome?', 'A string that reads the same forwards and backwards (e.g., "racecar").'),
        ('How do you quickly check if two strings are anagrams?', 'Sort both strings and compare them (O(N log N)), or count the frequency of each character using a Hash Map/Array (O(N)).'),
        ('What is ASCII?', 'A character encoding standard that assigns a unique number to 128 standard characters (letters, numbers, symbols).'),
        ('What is Unicode?', 'A universal character encoding standard that supports text in almost all world languages, emojis, and symbols, unlike ASCII which only supports 128.'),
        ('What is the typical time complexity of searching for a substring (e.g., indexOf)?', 'Usually O(N*M) in simple implementations, but algorithms like KMP or Rabin-Karp can do it in O(N+M) time.')
    ],
    'linked-lists': [
        ('What is a Linked List?', 'A linear data structure where elements (nodes) are not stored in contiguous memory. Each node points to the next node in the sequence.'),
        ('What is a Node?', 'The basic building block of a linked list, containing data and a reference (pointer) to the next node.'),
        ('What is the Head of a Linked List?', 'The first node in a linked list. It serves as the starting point for any traversal.'),
        ('Why is searching in a Linked List slow?', 'Because there is no random access (like array indices). You must traverse sequentially from the head to find an element, taking O(N) time.'),
        ('What is the advantage of Linked Lists over Arrays?', 'Insertions and deletions at known positions (like the head) take O(1) time, without needing to shift other elements.'),
        ('What is a Doubly Linked List?', 'A linked list where each node has two pointers: one to the next node, and one to the previous node.'),
        ('What is a Circular Linked List?', 'A linked list where the last node points back to the head, creating a closed loop.'),
        ('What is the "Runner Technique" (Two Pointers)?', 'Using two pointers moving at different speeds (e.g., fast and slow) to detect cycles or find the middle of a linked list.'),
        ('How do you reverse a Linked List?', 'Iterate through the list, keeping track of the previous node, current node, and next node, and reverse the pointers one by one.'),
        ('What happens if you lose the reference to the Head node?', 'The entire linked list is lost in memory and will be garbage collected (a memory leak in languages like C/C++).')
    ],
    'stacks': [
        ('What is a Stack?', 'A linear data structure that follows the Last In, First Out (LIFO) principle. Think of a stack of plates.'),
        ('What does "Push" do?', 'Adds an element to the top of the stack. (O(1) time complexity)'),
        ('What does "Pop" do?', 'Removes and returns the element at the top of the stack. (O(1) time complexity)'),
        ('What does "Peek" or "Top" do?', 'Returns the top element without removing it from the stack.'),
        ('What is Stack Overflow?', 'An error that occurs when a program attempts to use more space in the call stack than has been allocated (often caused by infinite recursion).'),
        ('How are function calls managed in programming languages?', 'Using a Call Stack. Each function call pushes a new "frame" onto the stack, which is popped when the function returns.'),
        ('How can a Stack be used for checking balanced parentheses?', 'Push opening brackets onto the stack. When you see a closing bracket, pop the stack and check if it matches the opening bracket.'),
        ('Can a Stack be implemented using an Array?', 'Yes, pushing and popping from the end of a dynamic array gives O(1) amortized performance.'),
        ('Can a Stack be implemented using a Linked List?', 'Yes, pushing and popping from the head of a linked list provides strict O(1) performance.'),
        ('What is a Monotonic Stack?', 'A stack whose elements are always entirely in increasing or decreasing order. Useful for "next greater element" problems.')
    ],
    'queues': [
        ('What is a Queue?', 'A linear data structure that follows the First In, First Out (FIFO) principle. Think of a line of people waiting.'),
        ('What does "Enqueue" do?', 'Adds an element to the back (rear) of the queue. (O(1) time complexity)'),
        ('What does "Dequeue" do?', 'Removes and returns the element at the front of the queue. (O(1) time complexity)'),
        ('What is a common real-world use case for a Queue?', 'Print spooling, task scheduling (CPU), or processing requests on a web server in the order they were received.'),
        ('Why is implementing a Queue with a standard array inefficient?', 'Dequeueing from the front of a standard array requires shifting all remaining elements, taking O(N) time.'),
        ('What is a Circular Queue (Ring Buffer)?', 'An array-based queue where the rear wraps around to the beginning when it reaches the end, maximizing space efficiency.'),
        ('What is a Double-Ended Queue (Deque)?', 'A queue that allows insertion and deletion at both the front and the rear in O(1) time.'),
        ('What algorithm uses a Queue as its primary data structure?', 'Breadth-First Search (BFS) uses a queue to explore nodes level by level.'),
        ('Can a Queue be implemented using Stacks?', 'Yes, using two stacks. One stack is used for enqueueing, and the other is used for dequeueing (transferring elements to reverse order).'),
        ('What is a Priority Queue?', 'A specialized queue where elements have priorities. Elements with higher priority are dequeued before elements with lower priority, regardless of insertion order.')
    ],
    'hash-maps': [
        ('What is a Hash Map (Hash Table)?', 'A data structure that maps keys to values for highly efficient lookups, insertions, and deletions.'),
        ('What is the average time complexity for Hash Map operations?', 'O(1) - Constant time for insert, delete, and lookup on average.'),
        ('What is a Hash Function?', 'A function that converts a key (like a string) into an integer index, which determines where the value is stored in the underlying array.'),
        ('What is a Hash Collision?', 'When a hash function generates the same index for two completely different keys.'),
        ('How are collisions resolved using Chaining?', 'Instead of storing a single value at the array index, the index stores a Linked List of all key-value pairs that hashed to that location.'),
        ('How are collisions resolved using Open Addressing?', 'If an index is occupied, the hash map probes for the next available empty slot in the array (e.g., linear probing).'),
        ('What is the Load Factor?', 'The ratio of the number of elements in the hash map to its total capacity. When it exceeds a threshold, the map resizes itself.'),
        ('Why do Hash Maps need to resize?', 'To maintain O(1) performance. If the array gets too full, collisions increase, degrading performance to O(N).'),
        ('Are Hash Maps ordered?', 'In traditional Hash Maps, keys are completely unordered. Some implementations (like Python dicts 3.7+ or LinkedHashMap) maintain insertion order.'),
        ('When should you NOT use a Hash Map?', 'When you need to iterate through elements in a sorted order, or when you need to find the maximum/minimum element quickly.')
    ],
    'trees': [
        ('What is a Tree?', 'A hierarchical, non-linear data structure consisting of nodes connected by edges, with a single root and no cycles.'),
        ('What is the Root node?', 'The topmost node of the tree. It is the only node without a parent.'),
        ('What is a Leaf node?', 'A node at the very bottom of the tree that has no children.'),
        ('What is a Binary Tree?', 'A tree where every node has at most two children, typically referred to as the left child and right child.'),
        ('What is a Binary Search Tree (BST)?', 'A binary tree where the left child is always less than the parent, and the right child is always greater than the parent.'),
        ('What is the time complexity of searching in a balanced BST?', 'O(log N), because every step eliminates half of the remaining nodes.'),
        ('What happens if a BST becomes completely unbalanced (like a straight line)?', 'It essentially becomes a Linked List, and search/insert/delete operations degrade to O(N) time.'),
        ('What is In-order Traversal?', 'Visiting the Left subtree, then the Node, then the Right subtree. In a BST, this visits nodes in sorted order.'),
        ('What is Pre-order Traversal?', 'Visiting the Node first, then Left, then Right. Useful for copying or serializing a tree.'),
        ('What is a Balanced Tree (e.g., AVL, Red-Black)?', 'A tree that automatically rebalances itself during insertions and deletions to guarantee a height of O(log N).')
    ],
    'graphs': [
        ('What is a Graph?', 'A data structure consisting of a set of vertices (nodes) and a set of edges connecting those vertices.'),
        ('What is the difference between Directed and Undirected graphs?', 'In directed graphs, edges have a direction (A points to B). In undirected graphs, edges are two-way connections.'),
        ('What is a Weighted Graph?', 'A graph where each edge has a numerical value or "cost" associated with it (e.g., distance between two cities).'),
        ('What is an Adjacency Matrix?', 'A 2D array of size V x V where matrix[i][j] is 1 (or the weight) if there is an edge between vertex i and vertex j.'),
        ('What is an Adjacency List?', 'An array of lists, where the list at index i contains all the neighbors of vertex i. It is much more space-efficient for sparse graphs.'),
        ('What is Breadth-First Search (BFS)?', 'An algorithm that explores a graph level by level, radiating outward from the starting node. Uses a Queue.'),
        ('What is Depth-First Search (DFS)?', 'An algorithm that explores as far down a path as possible before backtracking. Uses a Stack (or recursion).'),
        ('What is a Cycle?', 'A path in a graph that starts and ends at the exact same vertex.'),
        ('What is a Connected Component?', 'A subgraph where every pair of vertices is connected by a path, and it is not connected to any other vertices in the larger graph.'),
        ('Which algorithm finds the shortest path in an unweighted graph?', 'Breadth-First Search (BFS) guarantees finding the shortest path in terms of the number of edges.')
    ],
    'sorting': [
        ('What is Bubble Sort?', 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. O(N^2) time.'),
        ('What is Merge Sort?', 'A divide-and-conquer algorithm that divides the array in half, sorts each half recursively, and then merges the sorted halves. O(N log N) time.'),
        ('What is Quick Sort?', 'A divide-and-conquer algorithm that selects a "pivot", partitions the array into elements smaller and larger than the pivot, and sorts them. O(N log N) average time.'),
        ('Why is Quick Sort often preferred over Merge Sort in practice?', 'Because it does in-place sorting (requires O(log N) memory) and has excellent cache locality, making it faster in the real world despite worst-case O(N^2).'),
        ('What is a Stable Sort?', 'A sorting algorithm that preserves the relative order of equal elements. (e.g., Merge Sort is stable, Quick Sort is typically not).'),
        ('What is Insertion Sort?', 'Builds the final sorted array one item at a time by picking the next item and inserting it into its correct position in the already sorted part. Great for small or nearly sorted data.'),
        ('What is the theoretical lower bound time complexity for comparison-based sorting?', 'O(N log N). You cannot sort faster than this using only comparisons.'),
        ('What is Counting Sort?', 'A non-comparison integer sorting algorithm that counts the occurrences of each unique value. Can sort in O(N) time if the range of numbers is small.'),
        ('What is Selection Sort?', 'Finds the minimum element from the unsorted part and puts it at the beginning. Always takes O(N^2) time, regardless of initial order.'),
        ('What is the Space Complexity of Merge Sort?', 'O(N), because it requires a temporary array during the merging phase.')
    ],
    'searching': [
        ('What is Linear Search?', 'Sequentially checking every element in a list until the target is found. O(N) time complexity.'),
        ('When is Linear Search appropriate?', 'When the data is completely unsorted, or the collection is very small.'),
        ('What is Binary Search?', 'An efficient search algorithm that finds an item from a SORTED list by repeatedly dividing the search interval in half. O(log N) time.'),
        ('Why MUST the array be sorted for Binary Search?', 'Because the algorithm relies on knowing that all elements to the left of the midpoint are smaller, and all elements to the right are larger.'),
        ('How do you calculate the midpoint safely in Binary Search?', 'mid = left + (right - left) / 2 to prevent integer overflow that could occur with (left + right) / 2.'),
        ('Can Binary Search be used on a Linked List?', 'Technically yes, but it takes O(N) time just to find the midpoint, destroying the O(log N) advantage.'),
        ('What is Depth-First Search (DFS) in a tree/graph?', 'A search technique that dives deep into a data structure before backtracking.'),
        ('What is Breadth-First Search (BFS) in a tree/graph?', 'A search technique that explores nodes level by level, useful for finding the shortest path in unweighted graphs.'),
        ('What is the time complexity of searching in a Hash Map?', 'O(1) on average, making it the fastest search data structure for key-value pairs.'),
        ('What is a lower bound (e.g., bisect_left)?', 'A variant of binary search that finds the FIRST occurrence of a target element in a sorted array with duplicates.')
    ],
    'dp': [
        ('What is Dynamic Programming (DP)?', 'An algorithmic technique for solving complex problems by breaking them down into simpler overlapping subproblems and storing the results.'),
        ('What is Memoization (Top-Down DP)?', 'Solving the problem recursively and caching (saving) the results of expensive function calls to avoid recalculating them later.'),
        ('What is Tabulation (Bottom-Up DP)?', 'Solving the problem iteratively using a table (array), solving the smallest subproblems first and building up to the final answer.'),
        ('What are Overlapping Subproblems?', 'When a problem can be broken down into subproblems which are reused several times (e.g., calculating Fibonacci(3) multiple times).'),
        ('What is Optimal Substructure?', 'When the optimal solution to a problem can be constructed from the optimal solutions of its subproblems.'),
        ('Why is DP better than raw Recursion?', 'Raw recursion recalculates the same subproblems exponentially. DP computes each subproblem exactly once, reducing exponential time O(2^N) to polynomial time O(N).'),
        ('What is the classic 0/1 Knapsack Problem?', 'Given items with weights and values, maximize the total value without exceeding the weight capacity of a knapsack.'),
        ('What is the Longest Common Subsequence (LCS)?', 'Finding the longest sequence that appears in both strings in the same relative order, but not necessarily contiguous.'),
        ('How do you optimize Space Complexity in Tabulation DP?', 'If the current row only depends on the previous row (or last two rows), you can store just those rows instead of a massive 2D matrix.'),
        ('Is DP always the best solution for optimization problems?', 'Not always. If the problem exhibits the "Greedy Choice Property", a Greedy algorithm might be faster and simpler than DP.')
    ],
    'backtracking': [
        ('What is Backtracking?', 'An algorithmic technique for finding all (or some) solutions by exploring all possible paths, and abandoning ("backtracking") paths that fail to satisfy constraints.'),
        ('How is Backtracking related to Recursion?', 'Backtracking is implemented using recursion. It traverses a state-space tree depth-first.'),
        ('What is the classic N-Queens Problem?', 'Placing N chess queens on an NxN chessboard so that no two queens threaten each other.'),
        ('What is the difference between DFS and Backtracking?', 'DFS visits every node. Backtracking is essentially DFS but with "pruning"—it stops exploring a branch as soon as it determines it cannot lead to a valid solution.'),
        ('What is Pruning?', 'Stopping the exploration of a recursive branch early because constraints have been violated, saving massive amounts of computation time.'),
        ('Why does Backtracking often have exponential time complexity (O(2^N) or O(N!))?', 'Because it is designed to explore combinations or permutations, the number of which grows exponentially with the input size.'),
        ('What is the Subset sum problem?', 'Finding all subsets of a given set whose elements sum to a specific target value. Easily solved with backtracking.'),
        ('What are the three core steps of a backtracking recursive function?', '1. Choose an option. 2. Explore recursively. 3. "Un-choose" (backtrack) to explore the next option.'),
        ('When should you use Backtracking instead of DP?', 'When you need to find ALL possible valid combinations/permutations, rather than just the single "optimal" value or count.'),
        ('What happens if you forget the "Un-choose" (backtrack) step?', 'Your state (like an array or path) will become polluted with choices from previous recursive branches, leading to completely incorrect results.')
    ],
    'greedy': [
        ('What is a Greedy Algorithm?', 'An algorithmic paradigm that makes the locally optimal choice at each step with the hope of finding a global optimum.'),
        ('What is the "Greedy Choice Property"?', 'The guarantee that a globally optimal solution can be arrived at by making a locally optimal choice at each step without reconsidering previous choices.'),
        ('Does a Greedy algorithm always produce the optimal solution?', 'No! It only works if the problem has the greedy choice property and optimal substructure. Otherwise, it may return a sub-optimal solution.'),
        ('What is Dijkstra\'s Algorithm?', 'A classic greedy algorithm for finding the shortest path from a starting node to all other nodes in a graph with non-negative edge weights.'),
        ('What is Huffman Coding?', 'A greedy algorithm used for lossless data compression, assigning variable-length codes to characters based on their frequencies.'),
        ('What is the classic Fractional Knapsack Problem?', 'A problem where you can take fractions of items. Unlike 0/1 Knapsack, it can be optimally solved with a Greedy algorithm by sorting by value/weight ratio.'),
        ('Why are Greedy algorithms preferred when they work?', 'Because they are generally much faster and use less memory (often O(N log N) or O(N)) compared to Dynamic Programming (O(N^2) or worse).'),
        ('How do you usually structure a Greedy solution?', '1. Sort the data based on some heuristic (e.g., end time, value/weight). 2. Iterate through and greedily pick the best option.'),
        ('What is the Activity Selection Problem?', 'Given a set of activities with start and end times, select the maximum number of non-overlapping activities. (Greedy strategy: always pick the one that ends earliest).'),
        ('What is the risk of using a Greedy algorithm?', 'Proving its correctness. A greedy approach might seem intuitively correct but can fail on hidden edge cases unless mathematically proven.')
    ],
    'tries': [
        ('What is a Trie (Prefix Tree)?', 'A tree-like data structure used to efficiently store and retrieve strings, where each node represents a character of the string.'),
        ('What is the main use case for a Trie?', 'Autocomplete, spell checkers, and searching for words in a dictionary.'),
        ('What is the time complexity of searching for a word of length L in a Trie?', 'O(L) - which is exceptionally fast, as it doesn\'t depend on how many millions of words are stored in the dictionary!'),
        ('How does a Trie handle words sharing the same prefix (e.g., "cat" and "car")?', 'They share the same nodes for the prefix "ca", branching only at the third character. This saves massive amounts of space.'),
        ('What marks the end of a valid word in a Trie?', 'A boolean flag (e.g., `isEndOfWord = true`) on the node of the final character of the word.'),
        ('What is the space complexity of a Trie?', 'O(N * L * Alphabet Size), where N is the number of words. It can be memory-intensive if words don\'t share many prefixes.'),
        ('Why use a Trie instead of a Hash Set for storing a dictionary?', 'A Hash Set cannot easily do prefix matching (e.g., "give me all words starting with \'app\'"). A Trie does this natively.'),
        ('Can a Trie store things other than strings?', 'Yes, Tries can store sequences of bits (Bit Tries) to efficiently solve maximum XOR and IP routing problems.'),
        ('What is a Radix Tree (Compact Trie)?', 'An optimized version of a Trie where nodes with only one child are merged together, saving significant memory.'),
        ('How do you implement autocomplete using a Trie?', 'Traverse down to the node representing the user\'s prefix, then use DFS from that node to find all valid words terminating in that subtree.')
    ],
    'disjoint-sets': [
        ('What is a Disjoint-Set (Union-Find) data structure?', 'A data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.'),
        ('What are the two primary operations of Union-Find?', 'Find (determines which subset an element is in) and Union (joins two subsets into a single subset).'),
        ('What is a common real-world use case for Union-Find?', 'Finding connected components in a network, determining if two people are in the same friend group, or Kruskal\'s Minimum Spanning Tree algorithm.'),
        ('How is a Disjoint-Set usually implemented?', 'Using an array `parent[]`, where `parent[i]` points to the parent of element i. A subset is represented by its "root" element (where `parent[i] == i`).'),
        ('What is Path Compression?', 'An optimization during the `Find` operation: flattening the structure of the tree so that every node points directly to the root, vastly speeding up future lookups.'),
        ('What is Union by Rank (or Size)?', 'An optimization during the `Union` operation: always attaching the smaller tree to the root of the larger tree to keep the overall tree shallow.'),
        ('What is the time complexity of Union-Find with both optimizations?', 'Nearly O(1). Specifically, it is O(α(N)), where α is the inverse Ackermann function, which is ≤ 4 for all reasonable values of N.'),
        ('Can Union-Find easily remove or split elements from a set?', 'No, traditional Union-Find only supports adding and merging sets. Splitting sets requires a completely different data structure.'),
        ('How do you detect a cycle in an undirected graph using Union-Find?', 'Iterate through all edges. If both vertices of an edge belong to the SAME subset (i.e., `find(u) == find(v)`), a cycle exists.'),
        ('Why is Union-Find preferred over DFS for finding connected components in dynamic graphs?', 'Because as new edges are added dynamically, Union-Find updates components in near O(1) time, whereas DFS would require an O(V+E) recalculation every time.')
    ]
}

js_content = "import { Flashcard } from './types';\n\n// Total: 150 Flashcards (10 per topic)\nexport const FLASHCARDS: Flashcard[] = [\n"

counter = 1
for topic_id, cards in data.items():
    js_content += f"  // {topic_id.upper()}\n"
    for q, a in cards:
        js_content += f"  {{\n    id: 'fc-{counter}',\n    topicId: '{topic_id}',\n    question: {json.dumps(q)},\n    answer: {json.dumps(a)}\n  }},\n"
        counter += 1

js_content += "];\n"

with open("C:/Users/Surya Pranav/Downloads/dsafeed_claude/dsafeed/src/data/flashcardsData.ts", "w", encoding="utf-8") as f:
    f.write(js_content)

print("SUCCESS: 150 flashcards written to flashcardsData.ts")

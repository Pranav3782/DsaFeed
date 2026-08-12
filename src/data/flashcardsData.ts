export interface Flashcard {
  id: string;
  topicId: string;
  question: string;
  answer: string;
}

export const FLASHCARDS: Flashcard[] = [
  // Arrays
  {
    id: 'arr-1',
    topicId: 'arrays',
    question: 'What is an Array?',
    answer: 'A collection of items stored at contiguous memory locations.'
  },
  {
    id: 'arr-2',
    topicId: 'arrays',
    question: 'What is the time complexity to access an element in an array by index?',
    answer: 'O(1) - Constant time, because memory addresses are calculated instantly.'
  },
  {
    id: 'arr-3',
    topicId: 'arrays',
    question: 'Why is inserting at the beginning of an array slow?',
    answer: 'O(N) - Because all existing elements must be shifted one position to the right.'
  },

  // Linked Lists
  {
    id: 'll-1',
    topicId: 'linked-lists',
    question: 'What is a Linked List?',
    answer: 'A sequence of nodes where each node contains data and a pointer to the next node.'
  },
  {
    id: 'll-2',
    topicId: 'linked-lists',
    question: 'What is the main advantage of a Linked List over an Array?',
    answer: 'Dynamic size and fast O(1) insertions/deletions at the beginning or end (if tail pointer exists).'
  },
  {
    id: 'll-3',
    topicId: 'linked-lists',
    question: 'What is the time complexity to access the Nth element in a Linked List?',
    answer: 'O(N) - You must traverse the list from the head node one by one.'
  },

  // Hash Maps
  {
    id: 'hm-1',
    topicId: 'hash-maps',
    question: 'What is a Hash Map?',
    answer: 'A data structure that maps keys to values for highly efficient lookup.'
  },
  {
    id: 'hm-2',
    topicId: 'hash-maps',
    question: 'What is a Hash Collision?',
    answer: 'When two different keys generate the same hash code and map to the same bucket.'
  },
  {
    id: 'hm-3',
    topicId: 'hash-maps',
    question: 'What is the average time complexity for lookup in a Hash Map?',
    answer: 'O(1) - Constant time, making them incredibly fast for search operations.'
  },

  // Two Pointers
  {
    id: 'tp-1',
    topicId: 'two-pointers',
    question: 'What is the Two Pointers technique?',
    answer: 'Using two references (usually starting at opposite ends) to iterate through a data structure.'
  },
  {
    id: 'tp-2',
    topicId: 'two-pointers',
    question: 'When should you consider using Two Pointers?',
    answer: 'When dealing with sorted arrays or linked lists, often to find pairs or reverse elements.'
  }
];

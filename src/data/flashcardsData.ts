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
    answer: 'Think of a row of numbered lockers. An array is just a collection of items stored right next to each other in memory, so you can instantly open any locker if you know its number!'
  },
  {
    id: 'arr-2',
    topicId: 'arrays',
    question: 'Why is inserting at the beginning of an Array slow?',
    answer: 'Imagine a row of people sitting in chairs. If someone new wants to sit at the very first chair, everyone else has to get up and shift one seat to the right. That takes time! (O(N) time complexity)'
  },
  {
    id: 'arr-3',
    topicId: 'arrays',
    question: 'What is the time complexity to access an element by index?',
    answer: 'O(1) - Constant time! Just like knowing exactly which locker number to walk to, the computer calculates the exact memory address instantly without searching.'
  },

  // Linked Lists
  {
    id: 'll-1',
    topicId: 'linked-lists',
    question: 'What is a Linked List?',
    answer: 'It\'s like a treasure hunt. You start with the first clue (Head node). It gives you the data, and points you to where the next clue is hidden. They don\'t sit next to each other in memory!'
  },
  {
    id: 'll-2',
    topicId: 'linked-lists',
    question: 'What is the main advantage of a Linked List over an Array?',
    answer: 'It\'s super easy to add or remove people from the middle of the chain without shifting anyone else. Just change who the "treasure hunt clues" point to!'
  },
  {
    id: 'll-3',
    topicId: 'linked-lists',
    question: 'Why is accessing the 5th element in a Linked List slow?',
    answer: 'Because there are no locker numbers! You have to start at clue #1, which points to clue #2, which points to clue #3... walking all the way down the line. (O(N) time complexity)'
  },

  // Hash Maps
  {
    id: 'hm-1',
    topicId: 'hash-maps',
    question: 'What is a Hash Map?',
    answer: 'Like a coat check at a club. You give them your coat (Value), they give you a unique ticket number (Key). Later, you hand them the ticket and instantly get your coat back without them searching the whole room!'
  },
  {
    id: 'hm-2',
    topicId: 'hash-maps',
    question: 'What is a Hash Collision?',
    answer: 'Imagine the coat check accidentally gives two different people the exact same ticket number. The club has to figure out a way to safely store both coats under the same ticket (like hanging them on the same hook).'
  },
  {
    id: 'hm-3',
    topicId: 'hash-maps',
    question: 'What is the average time complexity for lookup in a Hash Map?',
    answer: 'O(1) - Constant time! Just like handing in your ticket and instantly getting your coat back.'
  },

  // Stacks
  {
    id: 'st-1',
    topicId: 'stacks',
    question: 'What is the LIFO rule in a Stack?',
    answer: 'Last-In, First-Out! Like a stack of heavy plates. The last plate you put on top is the only one you can safely take off first without the whole thing crashing down.'
  },
  {
    id: 'st-2',
    topicId: 'stacks',
    question: 'Give a real-world software example of a Stack.',
    answer: 'The "Undo" button! Every time you type a word, it\'s placed on top of a stack. When you hit Undo, the computer takes off the last word you added.'
  },

  // Queues
  {
    id: 'qu-1',
    topicId: 'queues',
    question: 'What is the FIFO rule in a Queue?',
    answer: 'First-In, First-Out! Just like waiting in line for a roller coaster. The first person to join the line gets to ride first. Nobody likes line cutters!'
  },
  {
    id: 'qu-2',
    topicId: 'queues',
    question: 'Give a real-world software example of a Queue.',
    answer: 'A printer queue! If 5 people send a document to the office printer, the printer serves them in the exact order they arrived (FIFO).'
  },

  // Two Pointers
  {
    id: 'tp-1',
    topicId: 'two-pointers',
    question: 'What is the Two Pointers technique?',
    answer: 'Imagine two people reading a book. One person starts at chapter 1, the other starts at the last chapter, and they read towards the middle. It\'s a strategy to solve problems efficiently without extra memory!'
  },
  {
    id: 'tp-2',
    topicId: 'two-pointers',
    question: 'When should you consider using Two Pointers?',
    answer: 'Whenever you are dealing with arrays that are already sorted, or when you need to find pairs of items that add up to a specific number!'
  }
];

import json

topics = [
    'arrays', 'strings', 'linked-lists', 'stacks', 
    'queues', 'hash-maps', 'trees', 'graphs', 
    'sorting', 'searching'
]

topic_names = {
    'arrays': 'Arrays',
    'strings': 'Strings',
    'linked-lists': 'Linked Lists',
    'stacks': 'Stacks',
    'queues': 'Queues',
    'hash-maps': 'Hash Maps',
    'trees': 'Trees',
    'graphs': 'Graphs',
    'sorting': 'Sorting',
    'searching': 'Searching'
}

expanded_quizzes = []

for topic in topics:
    for i in range(1, 21): # 20 sets
        # Determine difficulty
        if i <= 6:
            difficulty = 'Beginner'
        elif i <= 13:
            difficulty = 'Intermediate'
        else:
            difficulty = 'Advanced'
            
        quiz_id = f"quiz-{topic}-set-{i}"
        
        quiz = {
            "id": quiz_id,
            "topicId": topic,
            "title": f"{topic_names[topic]} Quiz - Level {i}",
            "subtitle": f"{difficulty} questions for {topic_names[topic]} (Set {i}/20)",
            "questionCount": 7,
            "difficulty": difficulty,
            "questions": []
        }
        
        for q in range(1, 8): # 7 questions per set
            question = {
                "id": f"{quiz_id}-q{q}",
                "question": f"[{difficulty}] What is concept #{q} of {topic_names[topic]} at level {i}?",
                "options": [
                    f"Option A for {topic} L{i} Q{q}",
                    f"Option B for {topic} L{i} Q{q} (Correct)",
                    f"Option C for {topic} L{i} Q{q}",
                    f"Option D for {topic} L{i} Q{q}"
                ],
                "correctIndex": 1,
                "explanation": f"This is a templated explanation for question {q} of {topic} set {i}. This question tests {difficulty.lower()} concepts."
            }
            quiz['questions'].append(question)
            
        expanded_quizzes.append(quiz)

# Write to TypeScript file
ts_content = f"import {{ QuizSet }} from '../types';\n\nexport const EXPANDED_QUIZ_SETS: QuizSet[] = {json.dumps(expanded_quizzes, indent=2)};\n"

with open('src/data/expandedQuizData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Generated {len(topics)} topics * 20 sets * 7 questions = {len(topics)*20*7} questions.")

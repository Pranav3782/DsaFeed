# DSAfeed

DSAfeed is an interactive, Duolingo-style learning platform for Data Structures and Algorithms. It makes learning complex coding concepts simple and fun through bite-sized lessons, interactive quizzes, and daily streaks.

## Features

- **Simple Concept Explainers:** Learn complex DSA concepts through easy-to-understand analogies and plain English summaries without the heavy textbook jargon.
- **Interactive Practice:** Solve code-ordering puzzles and fill-in-the-blank style exercises to test your understanding.
- **Quizzes:** Take fast-paced quizzes to earn XP and level up.
- **Daily Streaks:** Keep your daily streak alive by learning every day. Use your earned XP to buy a "Streak Freeze" if you need to take a day off.
- **User Profiles:** Create an account to track your progress, unlock badges, and customize your profile card.

## Technologies Used

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Database & Authentication:** Supabase
- **Icons & Animations:** Lucide React, Framer Motion

## How to Run Locally

### Prerequisites
Make sure you have Node.js installed on your machine.

### 1. Clone and Install
First, clone the repository and install the dependencies.
```bash
npm install
```

### 2. Set Up Environment Variables
Create a file named `.env` in the root folder and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run the App
Start the local development server:
```bash
npm run dev
```
Open the provided local URL (usually `http://localhost:5173`) in your browser to view the app!

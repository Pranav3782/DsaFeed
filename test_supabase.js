const url = 'https://fdkgqntgbmueuynjnrpp.supabase.co/rest/v1/user_progress';
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZka2dxbnRnYm11ZXV5bmpucnBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYzNjkxOTAsImV4cCI6MjEwMTk0NTE5MH0.fwap5k08WhVCvPQRpYehhR__7NYquHl-3Lxr9LDmZ_8';

fetch(url, {
  method: 'POST', // upsert
  headers: {
    'apikey': anonKey,
    'Authorization': 'Bearer ' + anonKey,
    'Content-Type': 'application/json',
    'Prefer': 'resolution=merge-duplicates'
  },
  body: JSON.stringify({
    user_id: '00000000-0000-0000-0000-000000000000',
    streak_days: 0,
    last_active_date: '2023-01-01',
    xp: 0,
    completed_topics: [],
    quiz_scores: {},
    completed_exercises: [],
    topic_progress: {},
    updated_at: new Date().toISOString()
  })
}).then(res => res.json()).then(data => console.log(data)).catch(err => console.error(err));

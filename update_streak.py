import re

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace part 1: the top of markTaskProgress
part1_old = """  const markTaskProgress = (taskType: 'time' | 'read' | 'quiz', amount = 1) => {
    setUserProgress(prev => {
      const today = new Date().toISOString().split('T')[0];
      let tasks = prev.dailyTasks;
      let mPoints = prev.monthlyPoints;"""

part1_new = """  const markTaskProgress = (taskType: 'time' | 'read' | 'quiz', amount = 1) => {
    setUserProgress(prev => {
      const today = new Date().toISOString().split('T')[0];
      
      // Real-time streak calculation
      let newStreak = prev.streakDays;
      let newLastActive = prev.lastActiveDate;
      let streakUpdated = false;

      if (newLastActive !== today) {
        if (!newLastActive) {
          newStreak = 1;
        } else {
          const lastDate = new Date(newLastActive);
          const currDate = new Date(today);
          const diffTime = Date.UTC(currDate.getFullYear(), currDate.getMonth(), currDate.getDate()) - 
                           Date.UTC(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate());
          const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
          
          if (diffDays === 1) {
            newStreak += 1;
          } else if (diffDays > 1 || diffDays < 0) {
            newStreak = 1;
          }
        }
        newLastActive = today;
        streakUpdated = true;
      }

      let tasks = prev.dailyTasks;
      let mPoints = prev.monthlyPoints;"""

content = content.replace(part1_old, part1_new)

# Replace part 2: early return
part2_old = """      if (!updated && prev.lastTaskDate === today) return prev; // No changes"""
part2_new = """      if (!updated && !streakUpdated && prev.lastTaskDate === today) return prev; // No changes"""
content = content.replace(part2_old, part2_new)

# Replace part 3: the next object
part3_old = """      const next = {
        ...prev,
        dailyTasks: newTasks,
        monthlyPoints: mPoints,
        lastTaskDate: today
      };"""
part3_new = """      const next = {
        ...prev,
        streakDays: newStreak,
        lastActiveDate: newLastActive,
        dailyTasks: newTasks,
        monthlyPoints: mPoints,
        lastTaskDate: today
      };"""
content = content.replace(part3_old, part3_new)

# Replace part 4: supabase sync trigger
part4_old = """      if (!isTimeTask || timeCompletedNow || hitMinuteMilestone) {
        syncProgressToSupabase(next);
      }"""
part4_new = """      if (!isTimeTask || timeCompletedNow || hitMinuteMilestone || streakUpdated) {
        syncProgressToSupabase(next);
      }"""
content = content.replace(part4_old, part4_new)

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated App.tsx successfully.")

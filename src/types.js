export const getLevelInfo = (streak) => {
  if (streak >= 365) return { title: 'Legend of Discipline', color: 'text-purple-500' };
  if (streak >= 180) return { title: 'Master of Routine', color: 'text-red-500' };
  if (streak >= 90) return { title: 'Habit Hero', color: 'text-yellow-500' };
  if (streak >= 30) return { title: 'Consistency Champ', color: 'text-green-500' };
  if (streak >= 7) return { title: 'Starter Spark', color: 'text-blue-500' };
  return { title: 'Beginner', color: 'text-gray-500' };
};
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';
import { getLevelInfo } from '../types';
import { format, subDays, endOfToday } from 'date-fns';

export const HabitCard = ({ habit, onToggle, onClick, isDarkMode }) => {
  const todayStr = format(endOfToday(), 'yyyy-MM-dd');
  const completionSet = new Set(habit.completionDates || []);
  const isCheckedToday = completionSet.has(todayStr);

  // === Calculate current streak ===
  let currentStreak = 0;
  let dateCursor = endOfToday();

  while (completionSet.has(format(dateCursor, 'yyyy-MM-dd'))) {
    currentStreak += 1;
    dateCursor = subDays(dateCursor, 1);
  }

  const { title, color } = getLevelInfo(currentStreak);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -1,
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      className={`p-6 rounded-lg shadow-lg ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } transition-colors duration-200`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{habit.name}</h3>
          <p className={`text-sm ${color}`}>{title}</p>
          <p className="text-sm mt-1">
            Current streak: <span className="font-bold">
              {currentStreak} day{currentStreak !== 1 && 's'} {currentStreak > 3 && '🔥'}
            </span>
          </p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className="text-2xl focus:outline-none"
        >
          {isCheckedToday ? (
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          ) : (
            <Circle className="w-8 h-8 text-gray-400" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

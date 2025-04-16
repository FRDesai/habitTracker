import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';
import { getLevelInfo } from '../types';

export const HabitCard = ({ habit, onToggle, isDarkMode }) => {
  const { title, color } = getLevelInfo(habit.streak);
  const isCheckedToday = habit.lastChecked?.split('T')[0] === new Date().toISOString().split('T')[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -1,
        scale: 1.01,
        // boxShadow: isDarkMode
        //   ? '0 0 15px rgba(255, 255, 255, 0.1)'
        //   : '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.2 },
      }}
      className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } transition-colors duration-200`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{habit.name}</h3>
          <p className={`text-sm ${color}`}>{title}</p>
          <p className="text-sm mt-1">
            Current streak: <span className="font-bold">
              {habit.streak} days {habit.streak > 3 && '🔥'}
            </span>
          </p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onToggle}
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
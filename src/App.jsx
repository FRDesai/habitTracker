import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useStore } from './store';
import { AddHabitForm } from './components/AddHabitForm';
import { HabitCard } from './components/HabitCard';
import { WeeklyProgress } from './components/WeeklyProgress';

function App() {
  const { habits, darkMode, addHabit, toggleHabit, toggleDarkMode } = useStore();
  
  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex justify-between items-center mb-8">
          <h1
            className={`text-3xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            Habit Tracker
          </h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-gray-800 text-yellow-500' : 'bg-white text-gray-800'
            }`}
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </motion.button>
        </div>

        <AddHabitForm onAdd={addHabit} isDarkMode={darkMode} />

        <WeeklyProgress isDarkMode={darkMode} />

        <div className="grid gap-4 md:grid-cols-2">
          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onToggle={() => toggleHabit(habit.id)}
              isDarkMode={darkMode}
            />
          ))}
        </div>

        {habits.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center mt-8 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Add your first habit to get started!
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default App;
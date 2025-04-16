import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, ArrowLeft } from 'lucide-react';
import { useStore } from './store';
import { AddHabitForm } from './components/AddHabitForm';
import { HabitCard } from './components/HabitCard';
import { WeeklyProgress } from './components/WeeklyProgress';
import { ContributionHeatmap } from './components/ContributionHeatmap';

function App() {
  const { habits, darkMode, addHabit, toggleHabit, toggleDarkMode } = useStore();
  const [selectedHabit, setSelectedHabit] = useState(null);

  function logDatesBetween(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Check if start date is before end date
    if (start > end) {
      console.log('Start date should be earlier than end date.');
      return;
    }
  
    // Initialize an array to collect the dates
    const dates = [];
  
    // Loop through each day between start date and end date
    let currentDate = start;
    while (currentDate <= end) {
      dates.push(currentDate.toISOString().split('T')[0]); // Add date in YYYY-MM-DD format to the array
      currentDate.setDate(currentDate.getDate() + 1); // Increment the current date by 1 day
    }
  
    // Log the array of dates
    console.log(dates);
  }
  
  // Example usage
  logDatesBetween('2025-01-01', '2025-04-16');

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {selectedHabit ? (
          <div>
            <button
              className={`mb-4 flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              onClick={() => setSelectedHabit(null)}
            >
              <ArrowLeft /> Back
            </button>
            <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {selectedHabit.name} 
            </h2>
            <ContributionHeatmap
              completionDates={selectedHabit.completionDates}
              isDarkMode={darkMode}
            />
          </div>
        ) : (
          <>
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
                  onClick={() => setSelectedHabit(habit)}
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
          </>
        )}
      </div>
    </div>
  );
}

export default App;

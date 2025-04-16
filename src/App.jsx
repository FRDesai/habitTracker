import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, ArrowLeft } from 'lucide-react';
import { useStore } from './store';
import { AddHabitForm } from './components/AddHabitForm';
import { HabitCard } from './components/HabitCard';
import { WeeklyProgress } from './components/WeeklyProgress';
import { ContributionHeatmap } from './components/ContributionHeatmap';
import ReminderModal from './components/ReminderModal';
import { format } from 'date-fns';

function App() {
  const { habits, darkMode, addHabit, toggleHabit, toggleDarkMode, deleteHabit, selectedDate, setSelectedDate } = useStore();
  const [selectedHabit, setSelectedHabit] = useState(null);

  const [showReminder, setShowReminder] = useState(true);
  

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      habits.forEach((habit) => {
        if (!habit.reminderTime) return;

        const [reminderHour, reminderMinute] = habit.reminderTime.split(':').map(Number);

        if (currentHour === reminderHour && currentMinute === reminderMinute) {
          setSelectedHabit(habit); // show modal for this habit
          setShowReminder(true);

          const alarm = new Audio('/audio.wav');
          alarm.play().catch((e) => console.error('Audio play error:', e));
        }
      });
    };

    const interval = setInterval(checkTime, 60000); 
    return () => clearInterval(interval);
  }, [habits]);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'
        }`}
    >
      {showReminder && selectedHabit && (
        <ReminderModal
          show={showReminder}
          onClose={() => setShowReminder(false)}
          habitName={selectedHabit.name}
        />
      )}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {selectedHabit ? (
          <div>
            <button
              className={`mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-800'
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
                className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'
                  }`}
              >
                Habit Tracker
              </h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-500' : 'bg-white text-gray-800'
                  }`}
              >
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </motion.button>
            </div>

            <AddHabitForm onAdd={addHabit} isDarkMode={darkMode} />

            <WeeklyProgress isDarkMode={darkMode} onDateSelect={setSelectedDate} />

            <div className="grid gap-4 md:grid-cols-2">
              {habits.map((habit) => (
                <HabitCard
                  key={habit.id}
                  habit={habit}
                  onClick={() => setSelectedHabit(habit)}
                  onToggle={()=>toggleHabit(habit.id)}
                  onDelete={()=> deleteHabit(habit.id)}
                  selectedDate={selectedDate}
                  isDarkMode={darkMode}
                />
              ))}
            </div>

            {habits.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center mt-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'
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

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, ArrowLeft } from 'lucide-react';
import { useStore } from './store';
import { AddHabitForm } from './components/AddHabitForm';
import { HabitCard } from './components/HabitCard';
import { WeeklyProgress } from './components/WeeklyProgress';
import { ContributionHeatmap } from './components/ContributionHeatmap';
import ReminderModal from './components/ReminderModal';



function App() {
  const { habits, darkMode, addHabit, toggleHabit, toggleDarkMode, deleteHabit, selectedDate, setSelectedDate, editHabit } = useStore();
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [showReminder, setShowReminder] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
        {!isEditing && selectedHabit ? (
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
            <p className={`text-sm text-left mb-4 px-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Viewing habits for{' '}
              <span className={`${darkMode ? 'text-white' : 'text-black'} font-semibold`}>
                {new Date(selectedDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDate} // forces re-render & animation on date change
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-4 md:grid-cols-2"
              >
                {habits.map((habit) => (
                  <motion.div
                    key={habit.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HabitCard
                      habit={habit}
                      onClick={() => {
                        isEditing ? null :
                          setSelectedHabit(habit)
                      }}
                      onToggle={() => toggleHabit(habit.id)}
                      onDelete={() => deleteHabit(habit.id)}
                      isEditing={isEditing}
                      setIsEditing={setIsEditing}
                      editHabit={editHabit}
                      selectedDate={selectedDate}
                      isDarkMode={darkMode}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>


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

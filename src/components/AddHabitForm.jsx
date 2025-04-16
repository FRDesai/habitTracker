import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export const AddHabitForm = ({ onAdd, isDarkMode }) => {
  const [name, setName] = useState('');
  const [reminderTime, setReminderTime] = useState('07:00'); // default time

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd({
        id: Date.now().toString(),
        name: name.trim(),
        lastChecked: null,
        createdAt: new Date().toISOString(),
        completionDates: [],
        reminderTime, // <-- Save this
      });
      setName('');
      setReminderTime('07:00');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a new habit..."
          className={`flex-1 p-3 rounded-lg border ${isDarkMode
            ? 'bg-gray-700 border-gray-600 text-white'
            : 'bg-white border-gray-200 text-gray-800'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />

        <input
          type="time"
          value={reminderTime}
          onChange={(e) => setReminderTime(e.target.value)}
          className={`p-3 rounded-lg border w-full sm:w-[140px] ${isDarkMode
            ? 'bg-gray-700 border-gray-600 text-white'
            : 'bg-white border-gray-200 text-gray-800'
            } focus:outline-none focus:ring-blue-500`}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors
        ${isDarkMode
              ? 'bg-[#1f2937] text-white hover:bg-[#374151]'
              : 'bg-blue-500 text-white hover:bg-blue-600'}
        `}
        >
          <Plus className="w-5 h-5" />
          Add
        </motion.button>
      </div>
    </form>
  );
};

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export const AddHabitForm = ({ onAdd, isDarkMode }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name.trim());
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
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
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, MoreVertical, Trash2, X, Check } from 'lucide-react';
import { getLevelInfo } from '../types';
import { format, subDays, endOfToday } from 'date-fns';
import { useState } from 'react';

export const HabitCard = ({
  habit,
  onToggle,
  onDelete,
  onClick,
  isDarkMode,
  selectedDate,
  editHabit,
  isEditing,
  setIsEditing,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [editedName, setEditedName] = useState(habit.name);
  const [editedTime, setEditedTime] = useState(habit.reminderTime || '');

  const todayStr = format(endOfToday(), 'yyyy-MM-dd');
  const completionSet = new Set(habit.completionDates || []);
  const isCheckedToday = selectedDate
    ? habit.completionDates.includes(selectedDate)
    : habit.completionDates.includes(format(new Date(), 'yyyy-MM-dd'));

  let currentStreak = 0;
  let dateCursor = endOfToday();
  while (completionSet.has(format(dateCursor, 'yyyy-MM-dd'))) {
    currentStreak += 1;
    dateCursor = subDays(dateCursor, 1);
  }

  const { title, color } = getLevelInfo(habit.completionDates.length);

  const handleSaveEdit = () => {
    editHabit(habit.id, { name: editedName, reminderTime: editedTime });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedName(habit.name);
    setEditedTime(habit.reminderTime || '');
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -1,
        scale: 1.01,
        transition: { duration: 0.2 },
        cursor: "pointer"
      }}
      className={`relative p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition-colors duration-200`}
      onClick={onClick}
    >
      {/* Menu Button */}
      <div className="absolute top-3 right-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          className="focus:outline-none"
        >
          <MoreVertical className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
        </button>

        {menuOpen && (
          <div
            className={`absolute right-0 mt-2 w-28 rounded-md shadow-lg z-10 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsEditing(true);
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-blue-500 hover:text-white rounded-md w-full"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => {
                onDelete(habit.id);
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-red-500 hover:text-white rounded-md w-full"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex-1">
          {/* Habit Name */}
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className={`bg-transparent border-b-2 w-full outline-none text-xl font-semibold mb-2 ${isDarkMode ? 'border-gray-400 text-white' : 'border-gray-500 text-gray-800'}`}
            />
          ) : (
            <h3 className="text-xl font-semibold mb-2" title="Habit name">{habit.name}</h3>
          )}

          {/* Award Title */}
          <p className={`text-sm ${color}`} title="award">{title}</p>

          {/* Streak */}
          <p className="text-sm mt-1">
            Current streak:{' '}
            <span className="font-bold">
              {currentStreak} day{currentStreak !== 1 && 's'} {currentStreak > 3 && '🔥'}
            </span>
          </p>

          {/* Reminder Time */}
          {isEditing ? (
            <input
              type="time"
              value={editedTime}
              onChange={(e) => setEditedTime(e.target.value)}
              className={`bg-transparent border-b-2 mt-1 outline-none text-sm ${isDarkMode ? 'border-gray-400 text-white' : 'border-gray-500 text-gray-800'}`}
            />
          ) : habit.reminderTime && (
            <p>
              <span className="text-xs text-gray-500" title="Reminder time">⏰ {habit.reminderTime}</span>
            </p>
          )}
        </div>

        {/* Completion Toggle */}
        {!isEditing && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onToggle(habit.id);
            }}
            className="text-2xl focus:outline-none"
          >
            {isCheckedToday ? (
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            ) : (
              <Circle className="w-8 h-8 text-gray-400" />
            )}
          </motion.button>
        )}
      </div>

      {/* Save / Cancel Buttons */}
      {isEditing && (
        <div className="flex justify-end mt-4 gap-4">
          <button onClick={handleCancelEdit} title="Cancel">
            <X className="w-6 h-6 text-red-500 hover:text-red-600" />
          </button>
          <button onClick={handleSaveEdit} title="Save">
            <Check className="w-6 h-6 text-green-500 hover:text-green-600" />
          </button>
        </div>
      )}
    </motion.div>
  );
};

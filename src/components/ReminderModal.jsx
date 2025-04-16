// ReminderModal.jsx
import { motion } from 'framer-motion';
import { AlarmClock } from 'lucide-react';

const ReminderModal = ({ show, onClose, habitName = "Your Habit" }) => {
  if (!show) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md text-center space-y-4"
      >
        <div className="flex justify-center text-yellow-500">
          <AlarmClock className="w-12 h-12 animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          It's Time! ⏰
        </h2>
        <p className="text-gray-600 text-lg">
          Don't forget to complete <span className="font-semibold text-black">{habitName}</span> and keep your streak alive!
        </p>
        <button
          onClick={handleClose}
          className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full transition duration-200"
        >
          Got it! 🙌
        </button>
      </motion.div>
    </div>
  );
};

export default ReminderModal;

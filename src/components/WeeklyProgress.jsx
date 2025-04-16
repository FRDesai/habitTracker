import React from 'react';
import { format, subDays } from 'date-fns';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useStore } from '../store'; // adjust the path as needed

export const WeeklyProgress = ({ isDarkMode }) => {
  const { habits } = useStore();
  const totalHabits = habits.length;
  const today = new Date();
  const last7Days = Array.from({ length: 7 }).map((_, i) => {
    const date = subDays(today, 6 - i); // So we get oldest to newest
    const formatted = format(date, 'yyyy-MM-dd');
    const dayName = format(date, 'EEE'); // Mon, Tue, etc.

    // Count completed habits for this day
    const completed = habits.filter(habit =>
      habit.completionDates?.includes(formatted)
    ).length;


    const percentage = totalHabits ? (completed / totalHabits) * 100 : 0;

    return {
      dayName,
      formatted,
      completed,
      percentage,
    };
  });

  return (
    <div className="flex justify-between gap-2  my-6 overflow">
      {last7Days.map(({ dayName, percentage }, idx) => (
        <div
          key={idx}
          className={`flex flex-col items-center p-2 rounded-full w-16 h-20 transition-transform duration-200 will-change-transform
          ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}
          shadow-md hover:shadow-lg hover:scale-105 cursor-pointer`}
        >
          <span className="text-sm font-medium">{dayName}</span>
          <div className="w-10 h-10 mt-1">
            <CircularProgressbarWithChildren
              value={percentage}
              styles={buildStyles({
                pathColor: '#10b981',
                trailColor: isDarkMode ? '#4b5563' : '#e5e7eb',
              })}
            >
              {percentage === 100 && <span role="img" aria-label="fire">🔥</span>}
            </CircularProgressbarWithChildren>
          </div>
        </div>
      ))}
    </div>


  );
};

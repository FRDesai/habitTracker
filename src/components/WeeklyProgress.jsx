import React from 'react';
import { format, subDays } from 'date-fns';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useStore } from '../store'; // adjust the path as needed

export const WeeklyProgress = ({ isDarkMode, onDateSelect }) => {
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
    <div className="my-6">
      <div className="grid grid-cols-3 sm:grid-cols-7 gap-4 px-1">
        {last7Days.map(({ dayName, formatted, percentage }, idx) => (
          <div
            key={idx}
            onClick={() => onDateSelect(formatted)}
            className={`flex flex-col items-center p-2 rounded-full w-full h-20 transition-transform duration-200
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
                {percentage === 100 && <span role="img" aria-label="fire" title="Completed all the habits of the day">🔥</span>}
              </CircularProgressbarWithChildren>
            </div>
          </div>
        ))}

      </div>
    </div>



  );
};

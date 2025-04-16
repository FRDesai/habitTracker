import {
    eachDayOfInterval,
    format,
    startOfYear,
    endOfToday,
    parseISO,
    subDays,
    isSameDay,
    isBefore,
  } from 'date-fns';
  import { useMediaQuery } from 'react-responsive';
  
  export const ContributionHeatmap = ({ completionDates = [], year = 2025 }) => {
    const allDays = eachDayOfInterval({
      start: startOfYear(new Date(year, 0, 1)),
      end: endOfToday(),
    });
  
    const completionSet = new Set(completionDates);
  
    const getColorClass = (dateStr) => {
      return completionSet.has(dateStr)
        ? 'bg-green-500 hover:bg-green-600'
        : 'bg-gray-200 hover:bg-gray-300';
    };
  
    // === Streak Logic ===
    const sortedDates = Array.from(new Set(completionDates))
      .map((d) => parseISO(d))
      .sort((a, b) => a.getTime() - b.getTime());
  
    let currentStreak = 0;
    let bestStreak = 0;
    let streak = 0;
  
    for (let i = 0; i < sortedDates.length; i++) {
      if (i === 0) {
        streak = 1;
      } else {
        const prev = sortedDates[i - 1];
        const curr = sortedDates[i];
  
        const diff = Math.floor((curr - prev) / (1000 * 60 * 60 * 24));
        if (diff === 1) {
          streak += 1;
        } else if (diff > 1) {
          streak = 1;
        }
      }
      bestStreak = Math.max(bestStreak, streak);
    }
  
    // Calculate current streak up to today
    let today = endOfToday();
    let dayCursor = today;
    while (completionSet.has(format(dayCursor, 'yyyy-MM-dd'))) {
      currentStreak += 1;
      dayCursor = subDays(dayCursor, 1);
    }
  
    const isMobile = useMediaQuery({ maxWidth: 640 }); // Tailwind 'sm' breakpoint
    const rows = isMobile ? 6 : 3;
    const columns = Math.ceil(allDays.length / rows);
    const cells = Array.from({ length: rows }, (_, rowIndex) =>
      allDays.slice(rowIndex * columns, (rowIndex + 1) * columns)
    );
  
    return (
      <div className="flex flex-col gap-4">
        {/* Streak Info */}
        <div className="flex justify-between text-sm text-gray-700 font-medium">
          <div>🔥 Current streak: <span className="font-semibold text-green-600">{currentStreak} {currentStreak === 1 ? 'day' : 'days'}</span></div>
          <div>🏆 Best streak: <span className="font-semibold text-green-600">{bestStreak} {bestStreak === 1 ? 'day' : 'days'}</span></div>
        </div>
  
        {/* Heatmap */}
        <div className="flex flex-col gap-1 overflow-x-auto">
          {cells.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row gap-1">
              {row.map((date, colIndex) => {
                const dateStr = format(date, 'yyyy-MM-dd');
                return (
                  <div
                    key={colIndex}
                    title={dateStr}
                    className={`w-4 h-4 rounded-sm ${getColorClass(dateStr)} transition-colors`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
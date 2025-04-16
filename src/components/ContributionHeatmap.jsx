import { eachDayOfInterval, format, startOfYear, endOfToday } from 'date-fns';

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

  const rows = 3;
  const columns = Math.ceil(allDays.length / rows);
  const cells = Array.from({ length: rows }, (_, rowIndex) =>
    allDays.slice(rowIndex * columns, (rowIndex + 1) * columns)
  );

  return (
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
  );
};

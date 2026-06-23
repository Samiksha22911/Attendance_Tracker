interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({
  percentage,
}: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">
          Attendance
        </span>

        <span className="font-bold text-blue-600">
          {percentage}%
        </span>
      </div>

      <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{
            width: `${Math.min(
              percentage,
              100
            )}%`,
          }}
        />
      </div>
    </div>
  );
}
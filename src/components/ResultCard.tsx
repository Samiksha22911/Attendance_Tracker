import ProgressBar from "./ProgressBar";

interface ResultCardProps {
  percentage: number;
  status: string;
  message: string;
}

export default function ResultCard({
  percentage,
  status,
  message,
}: ResultCardProps) {
  const getStatusStyle = () => {
    if (status === "Safe") {
      return "bg-green-100 text-green-700 border-green-300";
    }

    if (status === "Warning") {
      return "bg-yellow-100 text-yellow-700 border-yellow-300";
    }

    return "bg-red-100 text-red-700 border-red-300";
  };

  const getStatusIcon = () => {
    if (status === "Safe") return "🟢";
    if (status === "Warning") return "🟡";
    return "🔴";
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center">
        <u>Attendance Report</u>
      </h2>
      <br/>
      <ProgressBar percentage={percentage} />

      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            Attendance Percentage
          </span>

          <span className="font-bold text-xl text-blue-600">
            {percentage}%
          </span>
        </div>

        <div
          className={`flex items-center gap-2 px-4 py-3 rounded-xl border ${getStatusStyle()}`}
        >
          <span className="text-lg">
            {getStatusIcon()}
          </span>

          <span className="font-semibold">
            {status}
          </span>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
          <p className="text-gray-700 dark:text-gray-200">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
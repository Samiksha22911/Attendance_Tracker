import { useEffect, useState } from "react";
import "./App.css";

import AttendanceForm from "./components/AttendanceForm";
import ResultCard from "./components/ResultCard";
// import HistoryCard from "./components/HistoryCard";
// import ThemeToggle from "./components/ThemeToggle";

import { calculateAttendance } from "./lib/attendance";

import type {
  AttendanceResult,
  HistoryItem,
} from "./types/attendance";

function App() {
  const [result, setResult] =
    useState<AttendanceResult | null>(null);

  const [history, setHistory] = useState<
    HistoryItem[]
  >([]);

  useEffect(() => {
    const savedHistory =
      localStorage.getItem(
        "attendance-history"
      );

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleCalculate = (
    totalClasses: number,
    attendedClasses: number
  ) => {
    const attendanceResult =
      calculateAttendance(
        totalClasses,
        attendedClasses
      );

    setResult(attendanceResult);

    const newHistory: HistoryItem[] = [
      {
        percentage:
          attendanceResult.percentage,
        status: attendanceResult.status,
        date: new Date().toLocaleString(),
      },
      ...history,
    ].slice(0, 5);

    setHistory(newHistory);

    localStorage.setItem(
      "attendance-history",
      JSON.stringify(newHistory)
    );
  };

  return (
    <div className="app-container">
      {/* <ThemeToggle /> */}

      <h1 className="title">
         Attendance Tracker
      </h1>

      <div className="card">
        <AttendanceForm
          onCalculate={handleCalculate}
        />

        {result && (
          <div style={{ marginTop: "20px" }}>
            <ResultCard
              percentage={result.percentage}
              status={result.status}
              message={result.message}
            />
          </div>
        )}

        <div style={{ marginTop: "20px" }}>
          {/* <HistoryCard history={history} /> */}
        </div>
      </div>

      <footer className="footer">
        <p>
          <strong>Samiksha Sharma</strong>
        </p>

        <p>sharmasamiksha189@gmail.com</p>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="digital-btn">
            Built for Digital Heroes
          </button>
        </a>
      </footer>
    </div>
  );
}

export default App;
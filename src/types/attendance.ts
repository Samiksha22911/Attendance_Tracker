export interface AttendanceResult {
  percentage: number;
  status: "Safe" | "Warning" | "Critical";
  message: string;
}

export interface HistoryItem {
  percentage: number;
  status: "Safe" | "Warning" | "Critical";
  date: string;
}
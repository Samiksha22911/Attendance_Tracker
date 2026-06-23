export interface AttendanceResult {
  percentage: number;
  status: "Safe" | "Warning" | "Critical";
  message: string;
}

export function calculateAttendance(
  totalClasses: number,
  attendedClasses: number
): AttendanceResult {
  const percentage = Number(
    ((attendedClasses / totalClasses) * 100).toFixed(2)
  );

  let status: "Safe" | "Warning" | "Critical";
  let message = "";

  if (percentage >= 75) {
    status = "Safe";

    let missableClasses = 0;

    while (
      (attendedClasses /
        (totalClasses + missableClasses + 1)) *
        100 >=
      75
    ) {
      missableClasses++;
    }

    message = `You can miss ${missableClasses} more classes and still maintain 75% attendance.`;
  } else if (percentage >= 70) {
    status = "Warning";

    let requiredClasses = 0;

    while (
      ((attendedClasses + requiredClasses) /
        (totalClasses + requiredClasses)) *
        100 <
      75
    ) {
      requiredClasses++;
    }

    message = `You need to attend the next ${requiredClasses} classes to reach 75% attendance.`;
  } else {
    status = "Critical";

    let requiredClasses = 0;

    while (
      ((attendedClasses + requiredClasses) /
        (totalClasses + requiredClasses)) *
        100 <
      75
    ) {
      requiredClasses++;
    }

    message = `Attendance is below safe limits. Attend the next ${requiredClasses} classes to reach 75%.`;
  }

  return {
    percentage,
    status,
    message,
  };
}
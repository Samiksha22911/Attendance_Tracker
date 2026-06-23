import { useState } from "react";

interface AttendanceFormProps {
  onCalculate: (
    totalClasses: number,
    attendedClasses: number
  ) => void;
}

export default function AttendanceForm({
  onCalculate,
}: AttendanceFormProps) {
  const [totalClasses, setTotalClasses] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const total = Number(totalClasses);
    const attended = Number(attendedClasses);

    if (total <= 0) {
  alert("Total classes must be greater than 0");
  return;
}

if (attended < 0) {
  alert("Attended classes cannot be negative");
  return;
}

    if (attended > total) {
      alert(
        "Attended classes cannot be greater than total classes"
      );
      return;
    }

    onCalculate(total, attended);
  };

  const handleReset = () => {
    setTotalClasses("");
    setAttendedClasses("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        <u>Attendance Calculator</u> 
      </h2>
      <br/>

      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Total Classes -   </label>
        <input
          type="number"
          value={totalClasses}
          onChange={(e) =>
            setTotalClasses(e.target.value)
          }
          placeholder="Enter total classes"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <br/>
      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Classes Attended -  </label>
        <input
          type="number"
          value={attendedClasses}
          onChange={(e) =>
            setAttendedClasses(e.target.value)
          }
          placeholder="Enter attended classes"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
       <br/>
     <div className="flex gap-4 mt-4"> 
  <button 
    type="submit" 
    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition" 
  > 
    <h4>Calculate</h4> 
  </button> 
  <br/> <br/>
  
  <button 
    type="button" 
    onClick={handleReset} 
    className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition" 
  > 
    <h4>Reset</h4> 
  </button> 
</div>

    </form>
  );
}

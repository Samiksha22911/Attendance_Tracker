// interface HistoryItem {
//   percentage: number;
//   status: string;
//   date: string;
// }

// interface HistoryCardProps {
//   history: HistoryItem[];
// }

// export default function HistoryCard({
//   history,
// }: HistoryCardProps) {
//   if (history.length === 0) return null;

//   return (
//     <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">
//        <u> Recent Calculations</u>
//       </h2>
//       <br/>
//       <div className="space-y-3">
//         {history.map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center p-3 rounded-xl bg-gray-100 dark:bg-gray-700"
//           >
//             <div>
//               <p className="font-semibold">
//                 {item.percentage}%
//               </p>

//               <p className="text-sm text-gray-500 dark:text-gray-300">
//                 {item.date}
//               </p>
//             </div>

//             <span
//               className={`px-3 py-1 rounded-full text-sm font-medium ${
//                 item.status === "Safe"
//                   ? "bg-green-100 text-green-700"
//                   : item.status === "Warning"
//                   ? "bg-yellow-100 text-yellow-700"
//                   : "bg-red-100 text-red-700"
//               }`}
//             >
//               {item.status === "Safe"
//                 ? "🟢 Safe"
//                 : item.status === "Warning"
//                 ? "🟡 Warning"
//                 : "🔴 Critical"}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
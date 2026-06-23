// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       setDarkMode(true);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = !darkMode;

//     setDarkMode(newTheme);

//     if (newTheme) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="fixed top-5 right-5 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:scale-105"
//     >
//       {darkMode ? "☀️ Light" : "🌙 Dark"}
//     </button>
//   );
// }
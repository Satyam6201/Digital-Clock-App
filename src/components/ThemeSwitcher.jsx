import React, { useEffect, useState } from "react";
import "../styles/ThemeSwitcher.css";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      document.body.classList.add("dark-mode");
      root.style.setProperty("--bg-color", "#121212");
      root.style.setProperty("--text-color", "#ffffff");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      root.style.setProperty("--bg-color", "#f5f5f5");
      root.style.setProperty("--text-color", "#222222");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="theme-switch-wrapper">
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider round"></span>
      </label>
      <span className="theme-label">
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </span>
    </div>
  );
}

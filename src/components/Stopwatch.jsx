import React, { useState, useRef } from "react";
import "../styles/Stopwatch.css"

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const toggleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setIsRunning(false);
  };

  const recordLap = () => {
    if (isRunning) {
      setLaps([...laps, time]);
    }
  };

  const clearLaps = () => {
    setLaps([]);
  };

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const milliseconds = ms % 1000;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
  };

  return (
    <div className="stopwatch">
      <h2>⏱️ Stopwatch</h2>
      <div className="stopwatch-display">{formatTime(time)}</div>
      <div className="stopwatch-buttons">
        <button onClick={toggleStartStop}>
          {isRunning ? "⏸️ Stop" : "▶️ Start"}
        </button>
        <button onClick={resetStopwatch}>🔄 Reset</button>
        <button onClick={recordLap} disabled={!isRunning}>🏁 Lap</button>
        <button onClick={clearLaps} disabled={laps.length === 0}>🧹 Clear Laps</button>
      </div>
      {laps.length > 0 && (
        <ul className="laps-list">
          {laps.map((lap, index) => (
            <li key={index}>Lap {index + 1}: {formatTime(lap)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

import React, { useState, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
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
    setIsRunning(false);
  };

  return (
    <div className="stopwatch">
      <h2>⏱️ Stopwatch</h2>
      <h3>{(time / 1000).toFixed(2)}s</h3>
      <button onClick={toggleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}

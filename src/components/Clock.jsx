import React, { useState, useEffect } from "react";

export default function Clock({ is24Hour, selectedTimeZone }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    timeZone: selectedTimeZone === "local" ? undefined : selectedTimeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !is24Hour,
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    timeZone: selectedTimeZone === "local" ? undefined : selectedTimeZone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="clock-container">
      <h2 className="date">{formattedDate}</h2>
      <h1 className="time">{formattedTime}</h1>
    </div>
  );
}

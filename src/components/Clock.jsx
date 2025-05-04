import React, { useState, useEffect } from "react";
import "../styles/Clock.css"

export default function Clock({ is24Hour, selectedTimeZone }) {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  const fetchWeather = (latitude, longitude) => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data.current_weather);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position.coords);
        fetchWeather(position.coords.latitude, position.coords.longitude);
      });
    }
  }, []);

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

      {/* Weather Section */}
      {weather && location ? (
        <div className="weather-container">
          <h3 className="weather">Temperature: {weather.temperature}°C</h3>
          <p className="wind">Wind Speed: {weather.windspeed} km/h</p>
        </div>
      ) : (
        <p className="loading">Fetching weather...</p>
      )}
    </div>
  );
}

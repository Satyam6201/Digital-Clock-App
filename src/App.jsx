import React, { useState } from "react";
import Clock from "./components/Clock";
import Stopwatch from "./components/Stopwatch";
import TimeZoneSelector from "./components/TimeZoneSelector";
import FormatToggle from "./components/FormatToggle";
import ThemeSwitcher from "./components/ThemeSwitcher";
import SetAlarm from "./components/SetAlarm";  
import AlarmList from "./components/AlarmList";
import "./styles.css";

export default function App() {
  const [alarms, setAlarms] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [is24HourFormat, setIs24HourFormat] = useState(false);
  const [selectedTimeZone, setSelectedTimeZone] = useState("local");

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleFormat = () => setIs24HourFormat(!is24HourFormat);
  const addAlarm = (newAlarm) => setAlarms([...alarms, newAlarm]);
  const removeAlarm = (index) => setAlarms(alarms.filter((_, i) => i !== index));

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>🕒 Digital Clock App</h1>
      <ThemeSwitcher isDark={isDarkMode} onToggle={toggleTheme} />
      <FormatToggle is24Hour={is24HourFormat} onToggle={toggleFormat} />
      <TimeZoneSelector selectedTimeZone={selectedTimeZone} onChange={setSelectedTimeZone} />
      <Clock is24Hour={is24HourFormat} selectedTimeZone={selectedTimeZone} />
      <Stopwatch />
      <SetAlarm onAddAlarm={addAlarm} />
      <AlarmList alarms={alarms} onRemoveAlarm={removeAlarm} />
    </div>
  );
}


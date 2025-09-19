import React, { useState } from "react";
import "../styles/SetAlarm.css";

export default function SetAlarm({ onAddAlarm }) {
  const [alarmTime, setAlarmTime] = useState("");
  const [ampm, setAmpm] = useState("AM");
  const [label, setLabel] = useState("");
  const [repeat, setRepeat] = useState("Once");
  const [sound, setSound] = useState("Default");

  const handleAddAlarm = () => {
    if (alarmTime) {
      const [hour, minute] = alarmTime.split(":");
      const formattedHour = ("0" + (parseInt(hour, 10) % 12 || 12)).slice(-2);
      const formattedMinute = ("0" + minute).slice(-2);
      const timeString = `${formattedHour}:${formattedMinute} ${ampm}`;

      onAddAlarm({ time: timeString, label, repeat, sound });
      setAlarmTime("");
      setLabel("");
      setRepeat("Once");
      setSound("Default");
    } else {
      alert("Please set a valid time!");
    }
  };

  return (
    <div className="set-alarm">
      <h2>🔔 Set Alarm</h2>
      
      {/* Time + AM/PM */}
      <div className="alarm-inputs">
        <input 
          type="time" 
          value={alarmTime} 
          onChange={(e) => setAlarmTime(e.target.value)} 
        />
        <select value={ampm} onChange={(e) => setAmpm(e.target.value)}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>

      {/* Label */}
      <input
        type="text"
        placeholder="Label (optional)"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />

      {/* Repeat */}
      <select value={repeat} onChange={(e) => setRepeat(e.target.value)}>
        <option value="Once">Once</option>
        <option value="Daily">Daily</option>
        <option value="Weekdays">Weekdays</option>
        <option value="Weekends">Weekends</option>
      </select>

      {/* Sound */}
      <select value={sound} onChange={(e) => setSound(e.target.value)}>
        <option value="Default">Default</option>
        <option value="Birds">Birds</option>
        <option value="Beep">Beep</option>
        <option value="Chimes">Chimes</option>
      </select>

      {/* Preview */}
      {alarmTime && (
        <p className="preview">
          Preview: <strong>{alarmTime} {ampm}</strong> | {repeat} | {sound}
        </p>
      )}

      <button onClick={handleAddAlarm}>➕ Add Alarm</button>
    </div>
  );
}
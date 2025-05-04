import React, { useState } from "react";
import "../styles/SetAlarm.css"

export default function SetAlarm({ onAddAlarm }) {
  const [alarmTime, setAlarmTime] = useState("");
  const [ampm, setAmpm] = useState("AM");
  const [label, setLabel] = useState("");

  const handleAddAlarm = () => {
    if (alarmTime) {
      const [hour, minute] = alarmTime.split(":");
      const formattedHour = ("0" + (parseInt(hour, 10) % 12 || 12)).slice(-2);
      const formattedMinute = ("0" + minute).slice(-2);
      const timeString = `${formattedHour}:${formattedMinute} ${ampm}`;

      onAddAlarm({ time: timeString, label });
      setAlarmTime("");
      setLabel("");
    } else {
      alert("Please set a valid time!");
    }
  };

  return (
    <div className="set-alarm">
      <h2>🔔 Set Alarm</h2>
      <div className="alarm-inputs">
        <input type="time" value={alarmTime} onChange={(e) => setAlarmTime(e.target.value)} />
        <select value={ampm} onChange={(e) => setAmpm(e.target.value)}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
      <input type="text" placeholder="Label (optional)" value={label} onChange={(e) => setLabel(e.target.value)} />
      <button onClick={handleAddAlarm}>Add Alarm</button>
    </div>
  );
}

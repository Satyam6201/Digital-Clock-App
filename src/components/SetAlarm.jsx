import React, { useState } from "react";

export default function SetAlarm({ onAddAlarm }) {
  const [alarmTime, setAlarmTime] = useState("");
  const [label, setLabel] = useState("");

  const handleAddAlarm = () => {
    if (alarmTime) {
      onAddAlarm({ time: alarmTime, label });
      setAlarmTime("");
      setLabel("");
    } else {
      alert("Please set a valid time!");
    }
  };

  return (
    <div className="set-alarm">
      <h2>🔔 Set Alarm</h2>
      <input
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Label (optional)"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <button onClick={handleAddAlarm}>Add Alarm</button>
    </div>
  );
}

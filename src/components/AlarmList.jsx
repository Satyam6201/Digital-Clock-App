import React, { useEffect, useState } from "react";
import alarmSound from "../assets/alarm.mp3"; 

export default function AlarmList({ alarms, onRemoveAlarm }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const checkAlarms = setInterval(() => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      alarms.forEach((alarm) => {
        if (alarm.time === currentTime && !isPlaying) {
          const sound = new Audio(alarmSound);
          sound.loop = true; 
          sound.play().catch((error) => console.error("Audio Play Error:", error));
          setAudio(sound);
          setIsPlaying(true);
        }
      });
    }, 1000);

    return () => clearInterval(checkAlarms);
  }, [alarms, isPlaying]);

  const stopAlarm = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0; 
      setIsPlaying(false);
      setAudio(null); 
    }
  };

  return (
    <div className="alarm-list">
      <h2>⏰ Active Alarms</h2>
      {alarms.length === 0 ? <p>No alarms set</p> : null}
      <ul>
        {alarms.map((alarm, index) => (
          <li key={index} className="alarm-item">
            <span>{alarm.time} - {alarm.label || "No Label"}</span>
            <button onClick={() => onRemoveAlarm(index)}>❌ Remove</button>
          </li>
        ))}
      </ul>
      {isPlaying && <button className="stop-alarm" onClick={stopAlarm}>🔴 Stop Alarm</button>}
    </div>
  );
}

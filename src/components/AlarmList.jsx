import React, { useEffect, useState } from "react";
import alarmSound from "../assets/alarm.mp3";
import "../styles/AlarmList.css";

export default function AlarmList({ alarms, onRemoveAlarm, onUpdateAlarm }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [triggeredIndex, setTriggeredIndex] = useState(null);

  useEffect(() => {
    const checkAlarms = setInterval(() => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      alarms.forEach((alarm, index) => {
        if (alarm.time === currentTime && !isPlaying) {
          const sound = new Audio(alarmSound);
          sound.loop = true;
          sound.play().catch((error) => console.error("Audio Play Error:", error));
          setAudio(sound);
          setIsPlaying(true);
          setTriggeredIndex(index);
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
      setTriggeredIndex(null);
    }
  };

  const snoozeAlarm = (index) => {
    const snoozeTime = new Date();
    snoozeTime.setMinutes(snoozeTime.getMinutes() + 5);
    const newTime = snoozeTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const updatedAlarm = { ...alarms[index], time: newTime };
    onUpdateAlarm(index, updatedAlarm);
    stopAlarm();
  };

  return (
    <div className="alarm-list modern-shadow">
      <h2>⏰ Active Alarms</h2>
      {alarms.length === 0 ? <p className="no-alarm">No alarms set</p> : null}
      <ul>
        {alarms.map((alarm, index) => (
          <li key={index} className={`alarm-item ${triggeredIndex === index ? "triggered" : ""}`}>
            <span><strong>{alarm.time}</strong> - {alarm.label || "No Label"}</span>
            <div className="alarm-actions">
              <button onClick={() => onRemoveAlarm(index)}>❌</button>
              {triggeredIndex === index && (
                <button className="snooze" onClick={() => snoozeAlarm(index)}>😴 Snooze 5 min</button>
              )}
            </div>
          </li>
        ))}
      </ul>
      {isPlaying && <button className="stop-alarm" onClick={stopAlarm}>🔴 Stop Alarm</button>}
    </div>
  );
}

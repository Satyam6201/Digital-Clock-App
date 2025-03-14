import React from "react";

export default function TimeZoneSelector({ selectedTimeZone, onChange }) {
  return (
    <div className="timezone-selector">
      <label>🌎 Select Time Zone: </label>
      <select value={selectedTimeZone} onChange={(e) => onChange(e.target.value)}>
        <option value="local">Local Time</option>
        <option value="UTC">UTC</option>
        <option value="America/New_York">New York (EST)</option>
        <option value="Europe/London">London (GMT)</option>
        <option value="Asia/Kolkata">India (IST)</option>
        <option value="Asia/Tokyo">Tokyo (JST)</option>
        <option value="Australia/Sydney">Sydney (AEDT)</option>
      </select>
    </div>
  );
}

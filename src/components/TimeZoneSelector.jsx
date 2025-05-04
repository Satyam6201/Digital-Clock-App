import React from "react";
import "../styles/TimeZoneSelector.css";

export default function TimeZoneSelector({ selectedTimeZone, onChange }) {
  return (
    <div className="timezone-selector">
      <label htmlFor="timezone-select">🌎 Select Time Zone:</label>
      <select
        id="timezone-select"
        value={selectedTimeZone}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="local">🕒 Local Time</option>
        <option value="UTC">🌐 UTC</option>
        <option value="America/New_York">🇺🇸 New York (EST)</option>
        <option value="America/Los_Angeles">🇺🇸 Los Angeles (PST)</option>
        <option value="America/Chicago">🇺🇸 Chicago (CST)</option>
        <option value="Europe/London">🇬🇧 London (GMT)</option>
        <option value="Europe/Paris">🇫🇷 Paris (CET)</option>
        <option value="Europe/Berlin">🇩🇪 Berlin (CET)</option>
        <option value="Asia/Kolkata">🇮🇳 India (IST)</option>
        <option value="Asia/Tokyo">🇯🇵 Tokyo (JST)</option>
        <option value="Asia/Shanghai">🇨🇳 Shanghai (CST)</option>
        <option value="Asia/Dubai">🇦🇪 Dubai (GST)</option>
        <option value="Australia/Sydney">🇦🇺 Sydney (AEDT)</option>
        <option value="Africa/Johannesburg">🇿🇦 Johannesburg (SAST)</option>
        <option value="America/Sao_Paulo">🇧🇷 São Paulo (BRT)</option>
      </select>
    </div>
  );
}

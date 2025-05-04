import React from "react";
import "../styles/FormatToggle.css";

export default function FormatToggle({ is24Hour, onToggle }) {
  return (
    <div className="format-toggle">
      <label className="toggle-switch">
        <input type="checkbox" checked={is24Hour} onChange={onToggle} />
        <span className="slider" />
      </label>
      <span className="format-label">
        {is24Hour ? "24-Hour Format" : "12-Hour Format"}
      </span>
    </div>
  );
}

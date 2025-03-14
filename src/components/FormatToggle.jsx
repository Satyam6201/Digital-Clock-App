import React from "react";

export default function FormatToggle({ is24Hour, onToggle }) {
  return <button onClick={onToggle}>{is24Hour ? "Switch to 12-hour" : "Switch to 24-hour"}</button>;
}

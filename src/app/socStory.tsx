"use client";
import { useEffect, useState } from "react";
import "./SocStory.css";

const STATES = [
  "enter",
  "monitor",
  "alert",
  "investigate",
  "respond",
];

export default function SocStory() {
  const [step, setStep] = useState(0);
  const state = STATES[step];

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % STATES.length);
    }, 2600);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="soc-wrapper">
      <svg viewBox="0 0 900 420" className="soc-svg">

        {/* Screens */}
        <rect x="260" y="50" width="120" height="70" rx="8" className="screen"/>
        <rect x="410" y="50" width="120" height="70" rx="8" className="screen"/>
        <rect x="560" y="50" width="120" height="70" rx="8" className="screen"/>

        {/* Screen activity */}
        <rect x="270" y="85" width="30" height="4" className="scan"/>
        <rect x="420" y="85" width="30" height="4" className="scan delay1"/>
        <rect x="570" y="85" width="30" height="4" className="scan delay2"/>

        {/* Alert */}
        {state === "alert" && (
          <circle cx="610" cy="70" r="6" className="alert"/>
        )}

        {/* Desk */}
        <rect x="300" y="160" width="320" height="40" rx="6" className="desk"/>

        {/* Person */}
        <g className={`person ${state}`}>
          <circle cx="180" cy="150" r="12"/>
          <rect x="168" y="162" width="24" height="54" rx="8"/>
        </g>

        {/* Response line */}
        {state === "respond" && (
          <line
            x1="560"
            y1="80"
            x2="720"
            y2="80"
            className="response"
          />
        )}

        {/* Caption */}
        <text x="450" y="360" className="caption">
          {state === "enter" && "Security operations run continuously"}
          {state === "monitor" && "Continuous monitoring of security events"}
          {state === "alert" && "Suspicious activity detected"}
          {state === "investigate" && "Analyst investigates the signal"}
          {state === "respond" && "Coordinated incident response"}
        </text>

      </svg>
    </div>
  );
}

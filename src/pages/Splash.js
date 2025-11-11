import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="splash">
      <h1 className="title">Welcome to <span>BuildMyResume</span></h1>
      <button className="btn" onClick={() => navigate("/dashboard")}>
        Get Started →
      </button>
    </div>
  );
}

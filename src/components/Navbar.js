import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1><Link to="/dashboard" className="logo">BuildMyResume</Link></h1>
      <ul>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/myresumes">My Resumes</Link></li>
      </ul>
    </nav>
  );
}

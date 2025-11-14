import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <>
      <div className="about-page">
        <div className="about-content">
          <h1 className="about-title">
            About <span>BuildMyResume</span>
          </h1>

          <p className="about-desc">
            <strong>BuildMyResume</strong> is an <strong>ATS-Friendly Resume Builder</strong> designed
            to help you create professional, recruiter-approved resumes with ease.
          </p>

          <p className="about-desc">
            With a clean and minimal interface, it allows you to focus on what matters —
            <em> your skills, achievements, and career story. </em> Customize, preview, and
            download your perfect resume in just a few clicks!
          </p>

          <div className="creator-card">
            <div className="avatar">💻</div>
            <h2>
              Developed by <span>Nency Parmar</span>
            </h2>
            <p>
              A passionate web developer who loves turning creative ideas into beautiful,
              functional web experiences. <strong>BuildMyResume</strong> is one such project built with ❤️
              and dedication to help students and professionals shine.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout20.css";

export default function Layout20({ data = {}, selectedColor = "#1d3557" }) {
    const {
        name = "Your Name",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        summary = "Dedicated and detail-oriented professional seeking to leverage strong skills in software development and project management.",
        education = [],
        experience = [],
        skills = [],
        projects = [],
    } = data;

    return (
        <div className="layout20" style={{ "--theme-color": selectedColor }}>
            {/* Header */}
            <header className="header">
                <h1>{name}</h1>
                <p>{email} | {phone}</p>
            </header>

            {/* Summary */}
            <section className="summary">
                <h2>Profile Summary</h2>
                <p>{summary}</p>
            </section>

            {/* Two-column layout */}
            <div className="main-content">
                {/* Left column */}
                <div className="left-column">
                    {/* Skills */}
                    <section>
                        <h2>Technical Skills</h2>
                        <ul>
                            {skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Education */}
                    <section>
                        <h2>Education</h2>
                        {education.map((edu, i) => (
                            <div key={i} className="edu-item">
                                <h3>{edu.degree}</h3>
                                <p>{edu.institute}</p>
                                <span>{edu.year}</span>
                            </div>
                        ))}
                    </section>
                </div>

                {/* Right column */}
                <div className="right-column">
                    {/* Experience */}
                    <section>
                        <h2>Experience</h2>
                        {experience.map((exp, i) => (
                            <div key={i} className="exp-item">
                                <h3>{exp.role}</h3>
                                <p className="exp-company">{exp.company}</p>
                                <p className="exp-duration">{exp.duration}</p>
                                <ul>
                                    {exp.description?.split(".").map(
                                        (d, j) => d.trim() && <li key={j}>{d.trim()}.</li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* Projects */}
                    <section>
                        <h2>Projects</h2>
                        {projects.map((proj, i) => (
                            <div key={i} className="proj-item">
                                <h3>{proj.title}</h3>
                                <p>{proj.description}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
}

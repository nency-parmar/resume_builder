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

    // Helper to safely parse comma-separated or array data
    const parseList = (input) =>
        Array.isArray(input)
            ? input
            : input
                ?.split(",")
                .map((item) => item.trim())
                .filter(Boolean) || [];

    return (
        <div className="layout20" style={{ "--theme-color": selectedColor }}>
            {/* Header */}
            <header className="header">
                <h1 style={{ color: selectedColor }}>{name}</h1>
                <p>
                    {email && <span>{email}</span>}
                    {phone && <span> | {phone}</span>}
                </p>
            </header>

            {/* Summary */}
            {summary && (
                <section className="summary">
                    <h2 style={{ color: selectedColor }}>Profile Summary</h2>
                    <p>{summary}</p>
                </section>
            )}

            {/* Two-column layout */}
            <div className="main-content">
                {/* Left column */}
                <div className="left-column">
                    {/* Skills */}
                    {parseList(skills).length > 0 && (
                        <section>
                            <h2 style={{ color: selectedColor }}>Technical Skills</h2>
                            <ul>
                                {parseList(skills).map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Education */}
                    {education?.length > 0 && (
                        <section>
                            <h2 style={{ color: selectedColor }}>Education</h2>
                            {education.map((edu, i) => (
                                <div key={i} className="edu-item">
                                    <h3>{edu.degree || "Degree"}</h3>
                                    <p>{edu.institute || edu.institution || "Institute"}</p>
                                    {edu.year && <span>{edu.year}</span>}
                                </div>
                            ))}
                        </section>
                    )}
                </div>

                {/* Right column */}
                <div className="right-column">
                    {/* Experience */}
                    {experience?.length > 0 && (
                        <section>
                            <h2 style={{ color: selectedColor }}>Experience</h2>
                            {experience.map((exp, i) => (
                                <div key={i} className="exp-item">
                                    <h3>{exp.role || exp.position || "Job Title"}</h3>
                                    {exp.company && <p className="exp-company">{exp.company}</p>}
                                    {exp.duration && <p className="exp-duration">{exp.duration}</p>}
                                    {exp.description && (
                                        <ul>
                                            {exp.description
                                                .split(".")
                                                .map((d, j) => d.trim() && <li key={j}>{d.trim()}.</li>)}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </section>
                    )}

                    {/* Projects */}
                    {projects?.length > 0 && (
                        <section>
                            <h2 style={{ color: selectedColor }}>Projects</h2>
                            {projects.map((proj, i) => (
                                <div key={i} className="proj-item">
                                    <h3>{proj.title || proj.name || "Project Title"}</h3>
                                    {proj.description && <p>{proj.description}</p>}
                                </div>
                            ))}
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}

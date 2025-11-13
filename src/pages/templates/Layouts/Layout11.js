// src/pages/templates/Layouts/Layout11.js
import React from "react";
import "../../../styles/layouts/Layout11.css";

export default function Layout11({ data = {}, color = "#6a1b9a" }) {
    const {
        name = "Your Name",
        title = "Full Stack Developer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "Rajkot, Gujarat, India",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        summary = "",
        skills = [],
        education = [],
        experience = [],
        projects = [],
        achievements = [],
    } = data;

    // 🧠 Helper for handling string/array lists safely
    const parseList = (input) =>
        Array.isArray(input)
            ? input
            : input
                ?.split(",")
                .map((s) => s.trim())
                .filter(Boolean) || [];

    return (
        <div
            className="layout11-container"
            style={{
                "--primary-color": color,
                "--accent-color": color,
            }}
        >
            {/* HEADER */}
            <header className="layout11-header" style={{ borderColor: "var(--primary-color)" }}>
                <h1 style={{ color: "var(--primary-color)" }}>{name}</h1>
                <h3>{title}</h3>
                <p>
                    {email && <>{email}</>}
                    {phone && <> | {phone}</>}
                    {address && <> | {address}</>}
                    {linkedin && (
                        <>
                            {" "}
                            |{" "}
                            <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        </>
                    )}
                    {github && (
                        <>
                            {" "}
                            |{" "}
                            <a href={`https://${github}`} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </>
                    )}
                </p>
            </header>

            {/* SUMMARY */}
            {summary && (
                <section className="layout11-summary">
                    <h2>Profile Summary</h2>
                    <p>{summary}</p>
                </section>
            )}

            {/* EXPERIENCE TIMELINE */}
            {experience?.length > 0 && (
                <section className="layout11-timeline">
                    <h2>Experience</h2>
                    <div className="timeline">
                        {experience.map((exp, i) => (
                            <div key={i} className="timeline-item">
                                <div className="circle" style={{ backgroundColor: "var(--primary-color)" }}></div>
                                <div className="timeline-content">
                                    <h4>{exp.role || exp.position || "Role"}</h4>
                                    {exp.company && <p className="company">{exp.company}</p>}
                                    {exp.duration && <span className="duration">{exp.duration}</span>}
                                    {exp.description && <p className="desc">{exp.description}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* EDUCATION */}
            {education?.length > 0 && (
                <section className="layout11-education">
                    <h2>Education</h2>
                    {education.map((edu, i) => (
                        <div key={i} className="edu-item">
                            <h4>{edu.degree || "Degree"}</h4>
                            <p>{edu.institute || edu.college || "Institute"}</p>
                            {edu.year && <span>{edu.year}</span>}
                        </div>
                    ))}
                </section>
            )}

            {/* SKILLS */}
            {parseList(skills).length > 0 && (
                <section className="layout11-skills">
                    <h2>Technical Skills</h2>
                    <div className="skills-list">
                        {parseList(skills).map((s, i) => (
                            <span
                                key={i}
                                className="skill-chip"
                                style={{
                                    borderColor: "var(--primary-color)",
                                    color: "var(--primary-color)",
                                }}
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* PROJECTS */}
            {projects?.length > 0 && (
                <section className="layout11-projects">
                    <h2>Projects</h2>
                    {projects.map((proj, i) => (
                        <div key={i} className="proj-item">
                            <h4>{proj.name || proj.title || "Project Title"}</h4>
                            <p>{proj.description || ""}</p>
                        </div>
                    ))}
                </section>
            )}

            {/* ACHIEVEMENTS */}
            {parseList(achievements).length > 0 && (
                <section className="layout11-achievements">
                    <h2>Achievements</h2>
                    <ul>
                        {parseList(achievements).map((a, i) => (
                            <li key={i}>{a}</li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}

// src/pages/templates/Layouts/Layout8.js
import React from "react";
import "../../../styles/layouts/Layout8.css";

export default function Layout8({ data = {}, color = "#e17055" }) {
    const {
        name = "Your Name",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "Your City, Country",
        linkedin = "linkedin.com/in/yourprofile",
        github = "github.com/yourprofile",
        summary = "",
        education = [],
        experience = [],
        skills = [],
        projects = [],
        achievements = [],
    } = data;

    // 🧠 Helper to safely parse strings or arrays
    const parseList = (input) =>
        Array.isArray(input)
            ? input
            : input
                ?.split(",")
                .map((s) => s.trim())
                .filter(Boolean) || [];

    return (
        <div
            className="layout8"
            style={{
                "--primary-color": color,
                "--heading-color": color,
            }}
        >
            {/* HEADER */}
            <header className="header">
                <h1>{name}</h1>

                {(email || phone || address) && (
                    <p className="contact-info">
                        {email && <>📧 {email}</>}
                        {phone && <> | 📱 {phone}</>}
                        {address && <> | 📍 {address}</>}
                    </p>
                )}

                {(linkedin || github) && (
                    <p className="links">
                        {linkedin && (
                            <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        )}
                        {linkedin && github && " | "}
                        {github && (
                            <a href={`https://${github}`} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        )}
                    </p>
                )}
            </header>

            {/* SUMMARY */}
            {summary && (
                <section className="summary">
                    <h2>Professional Summary</h2>
                    <p>{summary}</p>
                </section>
            )}

            {/* EXPERIENCE TIMELINE */}
            {experience?.length > 0 && (
                <section className="timeline">
                    <h2>Work Experience</h2>
                    <div className="timeline-items">
                        {experience.map((exp, idx) => (
                            <div key={idx} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>{exp.role || exp.position || "Role"}</h3>
                                    {exp.company && <p className="company">{exp.company}</p>}
                                    {exp.duration && <p className="duration">{exp.duration}</p>}
                                    {exp.details && (
                                        <ul>
                                            {exp.details
                                                .split("\n")
                                                .filter(Boolean)
                                                .map((line, i) => (
                                                    <li key={i}>{line}</li>
                                                ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* PROJECTS */}
            {projects?.length > 0 && (
                <section className="projects">
                    <h2>Projects</h2>
                    {projects.map((proj, idx) => (
                        <div key={idx} className="project-card">
                            <h3>{proj.title || "Project Title"}</h3>
                            <p>{proj.description || ""}</p>
                            {proj.tech && (
                                <p>
                                    <strong>Tech Used:</strong> {proj.tech}
                                </p>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* EDUCATION */}
            {education?.length > 0 && (
                <section className="education">
                    <h2>Education</h2>
                    {education.map((edu, idx) => (
                        <div key={idx} className="edu-item">
                            <h3>{edu.degree || "Degree"}</h3>
                            <p>
                                {edu.institution || edu.college || "Institution"}{" "}
                                {edu.year && `— ${edu.year}`}
                            </p>
                            {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
                        </div>
                    ))}
                </section>
            )}

            {/* SKILLS */}
            {parseList(skills).length > 0 && (
                <section className="skills">
                    <h2>Technical Skills</h2>
                    <div className="skill-list">
                        {parseList(skills).map((skill, idx) => (
                            <span key={idx}>{skill}</span>
                        ))}
                    </div>
                </section>
            )}

            {/* ACHIEVEMENTS */}
            {parseList(achievements).length > 0 && (
                <section className="achievements">
                    <h2>Achievements</h2>
                    <ul>
                        {parseList(achievements).map((ach, idx) => (
                            <li key={idx}>{ach}</li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}

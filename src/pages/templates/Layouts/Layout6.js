// src/pages/templates/Layouts/Layout6.js
import React from "react";
import "../../../styles/layouts/Layout6.css";

export default function Layout6({ data = {}, color = "#6c5ce7" }) {
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

    // 🧠 Safe conversion for string or array
    const parseList = (input) =>
        Array.isArray(input)
            ? input
            : input
                ?.split(",")
                .map((s) => s.trim())
                .filter(Boolean) || [];

    return (
        <div
            className="layout6"
            style={{
                "--primary-color": color,
                "--heading-color": color,
            }}
        >
            {/* HEADER */}
            <header className="header">
                <h1 className="name">{name}</h1>

                {(email || phone || address) && (
                    <p className="contact">
                        {email && <span>{email}</span>}
                        {phone && <span> | {phone}</span>}
                        {address && <span> | {address}</span>}
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
                    <h2>Profile Summary</h2>
                    <p>{summary}</p>
                </section>
            )}

            {/* EDUCATION */}
            {education?.length > 0 && (
                <section className="education">
                    <h2>Education</h2>
                    {education.map((edu, idx) => (
                        <div className="edu-item" key={idx}>
                            <h3>{edu.degree || "Degree"}</h3>
                            <p>
                                {edu.institution || edu.college || "Institution"}{" "}
                                {edu.year && `— ${edu.year}`}
                            </p>
                            {edu.cgpa && <p className="grade">CGPA: {edu.cgpa}</p>}
                        </div>
                    ))}
                </section>
            )}

            {/* EXPERIENCE */}
            {experience?.length > 0 && (
                <section className="experience">
                    <h2>Experience</h2>
                    {experience.map((exp, idx) => (
                        <div className="exp-item" key={idx}>
                            <h3>{exp.role || exp.position || "Role"}</h3>
                            <p>
                                {exp.company || "Company"}{" "}
                                {exp.duration && `| ${exp.duration}`}
                            </p>
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
                    ))}
                </section>
            )}

            {/* PROJECTS */}
            {projects?.length > 0 && (
                <section className="projects">
                    <h2>Projects</h2>
                    {projects.map((proj, idx) => (
                        <div className="proj-item" key={idx}>
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

            {/* SKILLS */}
            {parseList(skills).length > 0 && (
                <section className="skills">
                    <h2>Skills</h2>
                    <div className="skills-list">
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

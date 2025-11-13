// src/pages/templates/Layouts/Layout10.js
import React from "react";
import "../../../styles/layouts/Layout10.css";

export default function Layout10({ data = {}, color = "#34495e" }) {
    const {
        name = "Your Name",
        title = "Software Engineer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        summary = "",
        skills = [],
        education = [],
        experience = [],
        projects = [],
        achievements = [],
    } = data;

    // 🧠 Safe list parser
    const parseList = (input) =>
        Array.isArray(input)
            ? input
            : input
                ?.split(",")
                .map((s) => s.trim())
                .filter(Boolean) || [];

    return (
        <div
            className="layout10-container"
            style={{
                "--primary-color": color,
            }}
        >
            {/* HEADER */}
            <header
                className="layout10-header"
                style={{ backgroundColor: "var(--primary-color)" }}
            >
                <h1>{name}</h1>
                <h3>{title}</h3>
            </header>

            {/* CONTACT */}
            {(email || phone || address || linkedin || github) && (
                <section className="layout10-contact">
                    {email && <p>{email}</p>}
                    {phone && <p>{phone}</p>}
                    {address && <p>{address}</p>}
                    {linkedin && (
                        <p>
                            <a
                                href={`https://${linkedin}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {linkedin}
                            </a>
                        </p>
                    )}
                    {github && (
                        <p>
                            <a
                                href={`https://${github}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {github}
                            </a>
                        </p>
                    )}
                </section>
            )}

            {/* SUMMARY */}
            {summary && (
                <section className="layout10-summary">
                    <h4>Profile Summary</h4>
                    <p>{summary}</p>
                </section>
            )}

            {/* EXPERIENCE */}
            {experience?.length > 0 && (
                <section className="layout10-experience">
                    <h4>Experience</h4>
                    {experience.map((exp, i) => (
                        <div key={i} className="exp-item">
                            <div className="exp-title">
                                <h5>{exp.role || exp.position || "Role"}</h5>
                                {exp.duration && <span>{exp.duration}</span>}
                            </div>
                            <p className="exp-company">
                                {exp.company || "Company"}
                            </p>
                            {exp.description && (
                                <p className="exp-desc">{exp.description}</p>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* EDUCATION */}
            {education?.length > 0 && (
                <section className="layout10-education">
                    <h4>Education</h4>
                    {education.map((edu, i) => (
                        <div key={i} className="edu-item">
                            <div className="edu-title">
                                <h5>{edu.degree || "Degree"}</h5>
                                {edu.year && <span>{edu.year}</span>}
                            </div>
                            <p>{edu.institute || edu.college || "Institute"}</p>
                        </div>
                    ))}
                </section>
            )}

            {/* SKILLS */}
            {parseList(skills).length > 0 && (
                <section className="layout10-skills">
                    <h4>Skills</h4>
                    <ul>
                        {parseList(skills).map((s, i) => (
                            <li key={i}>{s}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* PROJECTS */}
            {projects?.length > 0 && (
                <section className="layout10-projects">
                    <h4>Projects</h4>
                    {projects.map((proj, i) => (
                        <div key={i} className="proj-item">
                            <h5>{proj.name || proj.title || "Project Title"}</h5>
                            <p>{proj.description || ""}</p>
                        </div>
                    ))}
                </section>
            )}

            {/* ACHIEVEMENTS */}
            {parseList(achievements).length > 0 && (
                <section className="layout10-achievements">
                    <h4>Achievements</h4>
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

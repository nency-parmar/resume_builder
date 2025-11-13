// src/pages/templates/Layouts/Layout9.js
import React from "react";
import "../../../styles/layouts/Layout9.css";

export default function Layout9({ data = {}, color = "#2c3e50" }) {
    const {
        name = "Your Name",
        title = "Full Stack Developer",
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

    // 🧠 Helper function to handle array or comma-separated string
    const parseList = (input) =>
        Array.isArray(input)
            ? input
            : input
                ?.split(",")
                .map((s) => s.trim())
                .filter(Boolean) || [];

    return (
        <div
            className="layout9-container"
            style={{
                "--primary-color": color,
                borderColor: color,
            }}
        >
            {/* HEADER */}
            <div
                className="layout9-header"
                style={{ backgroundColor: "var(--primary-color)" }}
            >
                <h1>{name}</h1>
                <h3>{title}</h3>
            </div>

            {/* BODY */}
            <div className="layout9-body">
                {/* LEFT COLUMN */}
                <div className="layout9-left">
                    {(email || phone || address || linkedin || github) && (
                        <div className="contact-info">
                            <h4>Contact</h4>
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
                        </div>
                    )}

                    {parseList(skills).length > 0 && (
                        <div className="skills">
                            <h4>Skills</h4>
                            <ul>
                                {parseList(skills).map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {parseList(achievements).length > 0 && (
                        <div className="achievements">
                            <h4>Achievements</h4>
                            <ul>
                                {parseList(achievements).map((ach, i) => (
                                    <li key={i}>{ach}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN */}
                <div className="layout9-right">
                    {summary && (
                        <div className="summary">
                            <h4>Profile Summary</h4>
                            <p>{summary}</p>
                        </div>
                    )}

                    {experience?.length > 0 && (
                        <div className="experience">
                            <h4>Experience</h4>
                            {experience.map((exp, i) => (
                                <div key={i} className="exp-item">
                                    <h5>{exp.role || exp.position || "Role"}</h5>
                                    <p>
                                        {exp.company || "Company"}{" "}
                                        {exp.duration && `| ${exp.duration}`}
                                    </p>
                                    <p>{exp.description || exp.details || ""}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {education?.length > 0 && (
                        <div className="education">
                            <h4>Education</h4>
                            {education.map((edu, i) => (
                                <div key={i} className="edu-item">
                                    <h5>{edu.degree || "Degree"}</h5>
                                    <p>
                                        {edu.institute ||
                                            edu.college ||
                                            "Institute"}{" "}
                                        {edu.year && `| ${edu.year}`}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {projects?.length > 0 && (
                        <div className="projects">
                            <h4>Projects</h4>
                            {projects.map((proj, i) => (
                                <div key={i} className="proj-item">
                                    <h5>{proj.name || proj.title || "Project"}</h5>
                                    <p>{proj.description || ""}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

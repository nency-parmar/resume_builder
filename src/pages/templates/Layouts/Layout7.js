// src/pages/templates/Layouts/Layout7.js
import React from "react";
import "../../../styles/layouts/Layout7.css";

export default function Layout7({ data = {}, color = "#0984e3" }) {
    const {
        name = "Your Name",
        role = "Software Developer",
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

    // 🧠 Helper for handling arrays or comma-separated strings
    const parseList = (input) =>
        Array.isArray(input)
            ? input
            : input
                ?.split(",")
                .map((s) => s.trim())
                .filter(Boolean) || [];

    return (
        <div
            className="layout7"
            style={{
                "--primary-color": color,
                "--heading-color": color,
            }}
        >
            {/* LEFT SIDEBAR */}
            <div className="left-column">
                <div className="profile">
                    <h1 className="name">{name}</h1>
                    {role && <p className="role">{role}</p>}
                </div>

                {(email || phone || address || linkedin || github) && (
                    <div className="contact">
                        <h2>Contact</h2>
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
                                    LinkedIn
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
                                    GitHub
                                </a>
                            </p>
                        )}
                    </div>
                )}

                {parseList(skills).length > 0 && (
                    <div className="skills">
                        <h2>Skills</h2>
                        <ul>
                            {parseList(skills).map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {parseList(achievements).length > 0 && (
                    <div className="achievements">
                        <h2>Achievements</h2>
                        <ul>
                            {parseList(achievements).map((ach, idx) => (
                                <li key={idx}>{ach}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* RIGHT COLUMN */}
            <div className="right-column">
                {summary && (
                    <section className="summary">
                        <h2>Profile Summary</h2>
                        <p>{summary}</p>
                    </section>
                )}

                {experience?.length > 0 && (
                    <section className="experience">
                        <h2>Experience</h2>
                        {experience.map((exp, idx) => (
                            <div className="exp-item" key={idx}>
                                <h3>{exp.role || exp.position || "Role"}</h3>
                                <p className="company">
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

                {education?.length > 0 && (
                    <section className="education">
                        <h2>Education</h2>
                        {education.map((edu, idx) => (
                            <div className="edu-item" key={idx}>
                                <h3>{edu.degree || "Degree"}</h3>
                                <p>
                                    {edu.institution ||
                                        edu.college ||
                                        "Institution"}{" "}
                                    {edu.year && `— ${edu.year}`}
                                </p>
                                {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
                            </div>
                        ))}
                    </section>
                )}

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
            </div>
        </div>
    );
}

// src/pages/templates/Layouts/Layout13.js
import React from "react";
import "../../../styles/layouts/Layout13.css";

export default function Layout13({ data = {}, color = "#7c3aed" }) {
    const {
        name = "Your Name",
        title = "Full Stack Developer",
        email = "youremail@example.com",
        phone = "+91 98765 43210",
        address = "Ahmedabad, India",
        summary = "",
        skills = [],
        education = [],
        experience = [],
        projects = [],
    } = data;

    // Helper to safely parse arrays or comma-separated strings
    const parseList = (input) =>
        Array.isArray(input)
            ? input
            : input
                ?.split(",")
                .map((s) => s.trim())
                .filter(Boolean) || [];

    return (
        <div className="layout13" style={{ "--accent": color }}>
            {/* HEADER */}
            <header className="header13">
                <h1>{name}</h1>
                <h3>{title}</h3>
                <p>
                    {email && <>{email}</>}
                    {phone && <> | {phone}</>}
                    {address && <> | {address}</>}
                </p>
            </header>

            {/* SUMMARY */}
            {summary && (
                <section className="summary13">
                    <h2>Profile Summary</h2>
                    <p>{summary}</p>
                </section>
            )}

            <div className="main13">
                {/* LEFT COLUMN */}
                <div className="left13">
                    {/* SKILLS */}
                    {parseList(skills).length > 0 && (
                        <div className="block13">
                            <h2>Skills</h2>
                            <ul>
                                {parseList(skills).map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* EDUCATION */}
                    {education?.length > 0 && (
                        <div className="block13">
                            <h2>Education</h2>
                            {education.map((edu, i) => (
                                <div key={i} className="edu-item13">
                                    <h4>{edu.degree || "Degree"}</h4>
                                    <p>{edu.institution || "Institution"}</p>
                                    {edu.year && <span>{edu.year}</span>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN */}
                <div className="right13">
                    {/* EXPERIENCE */}
                    {experience?.length > 0 && (
                        <div className="block13">
                            <h2>Experience</h2>
                            {experience.map((exp, i) => (
                                <div key={i} className="exp-item13">
                                    <h4>{exp.position || exp.role || "Role"}</h4>
                                    {exp.company && <p className="company13">{exp.company}</p>}
                                    {exp.duration && <span>{exp.duration}</span>}
                                    {exp.description && <p>{exp.description}</p>}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* PROJECTS */}
                    {projects?.length > 0 && (
                        <div className="block13">
                            <h2>Projects</h2>
                            {projects.map((proj, i) => (
                                <div key={i} className="proj-item13">
                                    <h4>{proj.title || proj.name || "Project Title"}</h4>
                                    {proj.description && <p>{proj.description}</p>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

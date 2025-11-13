// src/pages/templates/Layouts/Layout12.js
import React from "react";
import "../../../styles/layouts/Layout12.css";

export default function Layout12({ data = {}, color = "#7c3aed" }) {
    const {
        name = "Your Name",
        title = "UI/UX Designer & Frontend Developer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "Ahmedabad, Gujarat, India",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        summary = "Creative and detail-oriented designer and developer with a passion for building visually stunning, user-centered digital experiences.",
        skills = [],
        education = [],
        experience = [],
        projects = [],
        achievements = [],
        photo = "https://via.placeholder.com/150",
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
        <div
            className="layout12-container"
            style={{
                "--primary-color": color,
                "--accent-color": color,
            }}
        >
            {/* LEFT SIDEBAR */}
            <aside className="layout12-sidebar" style={{ backgroundColor: "var(--primary-color)" }}>
                <div className="profile-photo">
                    <img src={photo} alt="Profile" />
                </div>

                <div className="sidebar-content">
                    {/* Contact */}
                    <h2>Contact</h2>
                    {email && <p>{email}</p>}
                    {phone && <p>{phone}</p>}
                    {address && <p>{address}</p>}

                    {/* Links */}
                    {(linkedin || github) && <h2>Links</h2>}
                    {linkedin && (
                        <p>
                            <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        </p>
                    )}
                    {github && (
                        <p>
                            <a href={`https://${github}`} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </p>
                    )}

                    {/* Skills */}
                    {parseList(skills).length > 0 && (
                        <>
                            <h2>Skills</h2>
                            <ul>
                                {parseList(skills).map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </aside>

            {/* RIGHT MAIN CONTENT */}
            <main className="layout12-main">
                {/* Header */}
                <header>
                    <h1 style={{ color: "var(--primary-color)" }}>{name}</h1>
                    <h3>{title}</h3>
                    {summary && <p className="summary">{summary}</p>}
                </header>

                {/* Experience */}
                {experience?.length > 0 && (
                    <section>
                        <h2 style={{ color: "var(--primary-color)" }}>Experience</h2>
                        {experience.map((exp, i) => (
                            <div key={i} className="exp-item">
                                <h4>{exp.role || "Role"}</h4>
                                {exp.company && <p className="company">{exp.company}</p>}
                                {exp.duration && <span className="duration">{exp.duration}</span>}
                                {exp.description && <p className="desc">{exp.description}</p>}
                            </div>
                        ))}
                    </section>
                )}

                {/* Education */}
                {education?.length > 0 && (
                    <section>
                        <h2 style={{ color: "var(--primary-color)" }}>Education</h2>
                        {education.map((edu, i) => (
                            <div key={i} className="edu-item">
                                <h4>{edu.degree || "Degree"}</h4>
                                <p>{edu.institute || "Institute"}</p>
                                {edu.year && <span>{edu.year}</span>}
                            </div>
                        ))}
                    </section>
                )}

                {/* Projects */}
                {projects?.length > 0 && (
                    <section>
                        <h2 style={{ color: "var(--primary-color)" }}>Projects</h2>
                        {projects.map((proj, i) => (
                            <div key={i} className="proj-item">
                                <h4>{proj.name || "Project Title"}</h4>
                                {proj.description && <p>{proj.description}</p>}
                            </div>
                        ))}
                    </section>
                )}

                {/* Achievements */}
                {parseList(achievements).length > 0 && (
                    <section>
                        <h2 style={{ color: "var(--primary-color)" }}>Achievements</h2>
                        <ul>
                            {parseList(achievements).map((a, i) => (
                                <li key={i}>{a}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>
        </div>
    );
}

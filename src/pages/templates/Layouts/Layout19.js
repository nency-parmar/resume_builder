import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/resume-builder/src/styles/layouts/Layout19.css";

export default function Layout19({ data = {}, selectedColor = "#6a1b9a" }) {
    const {
        name = "Your Name",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        summary = "Motivated and detail-oriented software developer passionate about creating efficient, scalable web applications with clean code practices.",
        education = [],
        experience = [],
        projects = [],
        skills = [],
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
        <div className="layout19-container">
            {/* Sidebar */}
            <aside
                className="layout19-sidebar"
                style={{ backgroundColor: selectedColor }}
            >
                <div className="sidebar-header">
                    <h1 style={{ color: "#fff" }}>{name}</h1>
                    {email && <p style={{ color: "#fff" }}>{email}</p>}
                    {phone && <p style={{ color: "#fff" }}>{phone}</p>}
                    {address && <p style={{ color: "#fff" }}>{address}</p>}
                    {linkedin && <p style={{ color: "#fff" }}>{linkedin}</p>}
                    {github && <p style={{ color: "#fff" }}>{github}</p>}
                </div>

                {parseList(skills).length > 0 && (
                    <div className="sidebar-section">
                        <h2 style={{ color: "#fff" }}>Skills</h2>
                        <ul>
                            {parseList(skills).map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </aside>

            {/* Main Content */}
            <main className="layout19-main">
                {summary && (
                    <section className="layout19-section">
                        <h2 style={{ color: selectedColor }}>Professional Summary</h2>
                        <p>{summary}</p>
                    </section>
                )}

                <section className="layout19-section">
                    <h2 style={{ color: selectedColor }}>Experience</h2>
                    {experience?.length > 0 ? (
                        experience.map((exp, index) => (
                            <div key={index} className="layout19-item">
                                <div className="layout19-item-header">
                                    <h3>{exp.position || exp.role || "Job Title"}</h3>
                                    {exp.duration && <span>{exp.duration}</span>}
                                </div>
                                {exp.company && <p className="company">{exp.company}</p>}
                                {exp.description && <p>{exp.description}</p>}
                            </div>
                        ))
                    ) : (
                        <p>No experience added yet.</p>
                    )}
                </section>

                <section className="layout19-section">
                    <h2 style={{ color: selectedColor }}>Projects</h2>
                    {projects?.length > 0 ? (
                        projects.map((proj, index) => (
                            <div key={index} className="layout19-item">
                                <h3>{proj.title || proj.name || "Project Title"}</h3>
                                {proj.description && <p>{proj.description}</p>}
                            </div>
                        ))
                    ) : (
                        <p>No projects added yet.</p>
                    )}
                </section>

                <section className="layout19-section">
                    <h2 style={{ color: selectedColor }}>Education</h2>
                    {education?.length > 0 ? (
                        education.map((edu, index) => (
                            <div key={index} className="layout19-item">
                                <h3>{edu.degree || "Degree"}</h3>
                                <p>{edu.institution || edu.institute || "Institution"}</p>
                                {edu.year && <span>{edu.year}</span>}
                            </div>
                        ))
                    ) : (
                        <p>No education added yet.</p>
                    )}
                </section>
            </main>
        </div>
    );
}

import React from "react";
import "../../../styles/layouts/Layout15.css";

export default function Layout15({ data = {}, color = "#7c3aed" }) {
    const {
        name = "Your Name",
        title = "Software Engineer",
        email = "youremail@example.com",
        phone = "+91 98765 43210",
        address = "Ahmedabad, India",
        summary = "Motivated software engineer passionate about building innovative and scalable web applications. Dedicated to writing clean code and delivering seamless user experiences.",
        skills = [],
        education = [],
        experience = [],
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
        <div className="layout15" style={{ "--accent": color }}>
            <header className="header15">
                <h1 style={{ color: "var(--accent)" }}>{name}</h1>
                <h3>{title}</h3>
                <div className="contact15">
                    {email && <span>{email}</span>}
                    {phone && <span> | {phone}</span>}
                    {address && <span> | {address}</span>}
                </div>
            </header>

            {summary && (
                <section className="summary15">
                    <h2 style={{ color: "var(--accent)" }}>Professional Summary</h2>
                    <p>{summary}</p>
                </section>
            )}

            {parseList(skills).length > 0 && (
                <section className="skills15">
                    <h2 style={{ color: "var(--accent)" }}>Technical Skills</h2>
                    <div className="skill-grid15">
                        {parseList(skills).map((skill, i) => (
                            <span key={i} className="skill-tag15">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {experience?.length > 0 && (
                <section className="experience15">
                    <h2 style={{ color: "var(--accent)" }}>Experience</h2>
                    {experience.map((exp, i) => (
                        <div key={i} className="exp-item15">
                            <h4>{exp.position || exp.role || "Role"}</h4>
                            <p className="company15">
                                {exp.company} {exp.duration && <span>• {exp.duration}</span>}
                            </p>
                            {exp.description && <p>{exp.description}</p>}
                        </div>
                    ))}
                </section>
            )}

            {projects?.length > 0 && (
                <section className="projects15">
                    <h2 style={{ color: "var(--accent)" }}>Projects</h2>
                    {projects.map((proj, i) => (
                        <div key={i} className="proj-item15">
                            <h4>{proj.title || proj.name || "Project Title"}</h4>
                            {proj.description && <p>{proj.description}</p>}
                        </div>
                    ))}
                </section>
            )}

            {education?.length > 0 && (
                <section className="education15">
                    <h2 style={{ color: "var(--accent)" }}>Education</h2>
                    {education.map((edu, i) => (
                        <div key={i} className="edu-item15">
                            <h4>{edu.degree || "Degree"}</h4>
                            <p>
                                {edu.institution || edu.institute || "Institute"}
                                {edu.year && <span> • {edu.year}</span>}
                            </p>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
}

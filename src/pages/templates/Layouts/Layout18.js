import React from "react";
import "../../../styles/layouts/Layout18.css";

export default function Layout18({ data = {}, selectedColor = "#6a1b9a" }) {
    const {
        name = "Your Name",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        summary = "Results-driven software developer with a passion for creating clean, efficient, and user-focused web applications.",
        education = [],
        experience = [],
        skills = [],
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
        <div className="layout18-container">
            {/* Header */}
            <header className="layout18-header" style={{ borderColor: selectedColor }}>
                <h1 style={{ color: selectedColor }}>{name}</h1>
                <p className="layout18-contact">
                    {email && <span>{email}</span>}
                    {phone && <span> | {phone}</span>}
                    {address && <span> | {address}</span>}
                </p>
                <p className="layout18-links">
                    {linkedin && <span>{linkedin}</span>}
                    {github && <span> | {github}</span>}
                </p>
            </header>

            <hr style={{ borderColor: selectedColor }} />

            {/* Summary */}
            {summary && (
                <section className="layout18-section">
                    <h2 style={{ color: selectedColor }}>Professional Summary</h2>
                    <p>{summary}</p>
                </section>
            )}

            {/* Experience */}
            <section className="layout18-section">
                <h2 style={{ color: selectedColor }}>Experience</h2>
                {experience?.length > 0 ? (
                    experience.map((exp, index) => (
                        <div key={index} className="layout18-item">
                            <div className="layout18-item-header">
                                <h3>{exp.position || exp.role || "Job Title"}</h3>
                                {exp.duration && <span>{exp.duration}</span>}
                            </div>
                            {exp.company && <p className="layout18-company">{exp.company}</p>}
                            {exp.description && <p>{exp.description}</p>}
                        </div>
                    ))
                ) : (
                    <p>No experience added yet.</p>
                )}
            </section>

            {/* Projects */}
            <section className="layout18-section">
                <h2 style={{ color: selectedColor }}>Projects</h2>
                {projects?.length > 0 ? (
                    projects.map((proj, index) => (
                        <div key={index} className="layout18-item">
                            <h3>{proj.title || proj.name || "Project Title"}</h3>
                            {proj.description && <p>{proj.description}</p>}
                        </div>
                    ))
                ) : (
                    <p>No projects added yet.</p>
                )}
            </section>

            {/* Education */}
            <section className="layout18-section">
                <h2 style={{ color: selectedColor }}>Education</h2>
                {education?.length > 0 ? (
                    education.map((edu, index) => (
                        <div key={index} className="layout18-item">
                            <h3>{edu.degree || "Degree"}</h3>
                            <p>{edu.institution || edu.institute || "Institution Name"}</p>
                            {edu.year && <span>{edu.year}</span>}
                        </div>
                    ))
                ) : (
                    <p>No education added yet.</p>
                )}
            </section>

            {/* Skills */}
            <section className="layout18-section">
                <h2 style={{ color: selectedColor }}>Skills</h2>
                <div className="layout18-skill-container">
                    {parseList(skills).length > 0 ? (
                        parseList(skills).map((skill, index) => (
                            <span
                                key={index}
                                className="layout18-skill"
                                style={{ borderColor: selectedColor, color: selectedColor }}
                            >
                                {skill}
                            </span>
                        ))
                    ) : (
                        <p>No skills added yet.</p>
                    )}
                </div>
            </section>
        </div>
    );
}

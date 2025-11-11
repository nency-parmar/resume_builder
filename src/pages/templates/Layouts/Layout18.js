import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout18.css";

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

    return (
        <div className="layout18-container">
            {/* Header */}
            <header className="layout18-header" style={{ borderColor: selectedColor }}>
                <h1 style={{ color: selectedColor }}>{name}</h1>
                <p className="layout18-contact">
                    {email} | {phone} | {address}
                </p>
                <p className="layout18-links">
                    <span>{linkedin}</span> | <span>{github}</span>
                </p>
            </header>

            <hr style={{ borderColor: selectedColor }} />

            {/* Summary */}
            <section className="layout18-section">
                <h2 style={{ color: selectedColor }}>Professional Summary</h2>
                <p>{summary}</p>
            </section>

            {/* Experience */}
            <section className="layout18-section">
                <h2 style={{ color: selectedColor }}>Experience</h2>
                {experience.length > 0 ? (
                    experience.map((exp, index) => (
                        <div key={index} className="layout18-item">
                            <div className="layout18-item-header">
                                <h3>{exp.position || "Job Title"}</h3>
                                <span>{exp.duration || "Duration"}</span>
                            </div>
                            <p className="layout18-company">{exp.company || "Company Name"}</p>
                            <p>{exp.description || "Description about your role and achievements."}</p>
                        </div>
                    ))
                ) : (
                    <p>No experience added yet.</p>
                )}
            </section>

            {/* Projects */}
            <section className="layout18-section">
                <h2 style={{ color: selectedColor }}>Projects</h2>
                {projects.length > 0 ? (
                    projects.map((proj, index) => (
                        <div key={index} className="layout18-item">
                            <h3>{proj.title || "Project Title"}</h3>
                            <p>{proj.description || "Brief about what you built and tools used."}</p>
                        </div>
                    ))
                ) : (
                    <p>No projects added yet.</p>
                )}
            </section>

            {/* Education */}
            <section className="layout18-section">
                <h2 style={{ color: selectedColor }}>Education</h2>
                {education.length > 0 ? (
                    education.map((edu, index) => (
                        <div key={index} className="layout18-item">
                            <h3>{edu.degree || "Degree"}</h3>
                            <p>{edu.institution || "Institution Name"}</p>
                            <span>{edu.year || "Year"}</span>
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
                    {skills.length > 0 ? (
                        skills.map((skill, index) => (
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

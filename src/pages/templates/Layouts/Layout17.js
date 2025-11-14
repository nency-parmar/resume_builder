import React from "react";
import "../../../styles/layouts/Layout17.css";
import { Briefcase, GraduationCap, Code, User } from "lucide-react"; // for icons

export default function Layout17({ data = {}, selectedColor = "#1d3557" }) {
    const {
        name = "Your Name",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        summary = "Motivated professional with experience in building modern web applications and delivering clean, scalable code.",
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
        <div className="layout17-container">
            {/* Header */}
            <header className="layout17-header" style={{ backgroundColor: selectedColor }}>
                <h1 style={{ color: "#fff" }}>{name}</h1>
                <p style={{ color: "#fff" }}>
                    {email && <span>{email}</span>}
                    {phone && <span> | {phone}</span>}
                    {address && <span> | {address}</span>}
                </p>
            </header>

            {/* Body */}
            <div className="layout17-body">
                {summary && (
                    <section className="layout17-summary">
                        <div className="layout17-section-title" style={{ color: selectedColor }}>
                            <User size={18} /> <h2>Professional Summary</h2>
                        </div>
                        <p>{summary}</p>
                    </section>
                )}

                <section>
                    <div className="layout17-section-title" style={{ color: selectedColor }}>
                        <GraduationCap size={18} /> <h2>Education</h2>
                    </div>
                    {education?.length > 0 ? (
                        education.map((edu, i) => (
                            <div key={i} className="layout17-item">
                                <h3>{edu.degree || "Degree"}</h3>
                                <p>{edu.institution || edu.institute || "Institution"}</p>
                                {edu.year && <span>{edu.year}</span>}
                            </div>
                        ))
                    ) : (
                        <p>No education added yet</p>
                    )}
                </section>

                <section>
                    <div className="layout17-section-title" style={{ color: selectedColor }}>
                        <Briefcase size={18} /> <h2>Experience</h2>
                    </div>
                    {experience?.length > 0 ? (
                        experience.map((exp, i) => (
                            <div key={i} className="layout17-item">
                                <h3>{exp.position || exp.role || "Job Title"}</h3>
                                {exp.company && <p>{exp.company}</p>}
                                {exp.duration && <span>{exp.duration}</span>}
                                {exp.description && <p>{exp.description}</p>}
                            </div>
                        ))
                    ) : (
                        <p>No experience added yet</p>
                    )}
                </section>

                <section>
                    <div className="layout17-section-title" style={{ color: selectedColor }}>
                        <Code size={18} /> <h2>Projects</h2>
                    </div>
                    {projects?.length > 0 ? (
                        projects.map((proj, i) => (
                            <div key={i} className="layout17-item">
                                <h3>{proj.title || proj.name || "Project Title"}</h3>
                                {proj.description && <p>{proj.description}</p>}
                            </div>
                        ))
                    ) : (
                        <p>No projects added yet</p>
                    )}
                </section>

                <section>
                    <div className="layout17-section-title" style={{ color: selectedColor }}>
                        <h2>Skills</h2>
                    </div>
                    {parseList(skills).length > 0 ? (
                        <ul className="layout17-skill-list">
                            {parseList(skills).map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No skills added yet</p>
                    )}
                </section>
            </div>
        </div>
    );
}

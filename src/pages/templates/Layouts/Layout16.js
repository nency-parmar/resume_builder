import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/resume-builder/src/styles/layouts/Layout16.css";

export default function Layout16({ data = {}, selectedColor = "#2c3e50" }) {
    const {
        name = "Your Name",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        summary = "Results-driven professional with a passion for innovation and growth.",
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
        <div className="layout16-container" style={{ borderColor: selectedColor }}>
            <header className="layout16-header" style={{ backgroundColor: selectedColor }}>
                <h1 style={{ color: "#fff" }}>{name}</h1>
                <p style={{ color: "#fff" }}>
                    {email && <span>{email}</span>}
                    {phone && <span> | {phone}</span>}
                    {address && <span> | {address}</span>}
                </p>
            </header>

            <div className="layout16-body">
                {summary && (
                    <section className="layout16-summary">
                        <h2 style={{ color: selectedColor }}>Profile Summary</h2>
                        <p>{summary}</p>
                    </section>
                )}

                <div className="layout16-columns">
                    <div className="layout16-left">
                        <section>
                            <h2 style={{ color: selectedColor }}>Education</h2>
                            {education?.length > 0 ? (
                                education.map((edu, i) => (
                                    <div key={i} className="layout16-item">
                                        <h3>{edu.degree || "Degree"}</h3>
                                        <p>{edu.institution || edu.institute || "University Name"}</p>
                                        {edu.year && <span>{edu.year}</span>}
                                    </div>
                                ))
                            ) : (
                                <p>No education added</p>
                            )}
                        </section>

                        <section>
                            <h2 style={{ color: selectedColor }}>Skills</h2>
                            {parseList(skills).length > 0 ? (
                                <ul>
                                    {parseList(skills).map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No skills added</p>
                            )}
                        </section>
                    </div>

                    <div className="layout16-right">
                        <section>
                            <h2 style={{ color: selectedColor }}>Experience</h2>
                            {experience?.length > 0 ? (
                                experience.map((exp, i) => (
                                    <div key={i} className="layout16-item">
                                        <h3>{exp.position || exp.role || "Job Title"}</h3>
                                        {exp.company && <p>{exp.company}</p>}
                                        {exp.duration && <span>{exp.duration}</span>}
                                        {exp.description && <p>{exp.description}</p>}
                                    </div>
                                ))
                            ) : (
                                <p>No experience added</p>
                            )}
                        </section>

                        <section>
                            <h2 style={{ color: selectedColor }}>Projects</h2>
                            {projects?.length > 0 ? (
                                projects.map((proj, i) => (
                                    <div key={i} className="layout16-item">
                                        <h3>{proj.title || proj.name || "Project Title"}</h3>
                                        {proj.description && <p>{proj.description}</p>}
                                    </div>
                                ))
                            ) : (
                                <p>No projects added</p>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

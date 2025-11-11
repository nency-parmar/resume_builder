import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout19.css";

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

    return (
        <div className="layout19-container">
            {/* Sidebar */}
            <aside
                className="layout19-sidebar"
                style={{ backgroundColor: selectedColor }}
            >
                <div className="sidebar-header">
                    <h1>{name}</h1>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{address}</p>
                    <p>{linkedin}</p>
                    <p>{github}</p>
                </div>

                <div className="sidebar-section">
                    <h2>Skills</h2>
                    <ul>
                        {skills.length > 0 ? (
                            skills.map((skill, index) => <li key={index}>{skill}</li>)
                        ) : (
                            <li>No skills added yet</li>
                        )}
                    </ul>
                </div>
            </aside>

            {/* Main Content */}
            <main className="layout19-main">
                <section className="layout19-section">
                    <h2 style={{ color: selectedColor }}>Professional Summary</h2>
                    <p>{summary}</p>
                </section>

                <section className="layout19-section">
                    <h2 style={{ color: selectedColor }}>Experience</h2>
                    {experience.length > 0 ? (
                        experience.map((exp, index) => (
                            <div key={index} className="layout19-item">
                                <div className="layout19-item-header">
                                    <h3>{exp.position || "Job Title"}</h3>
                                    <span>{exp.duration || "Duration"}</span>
                                </div>
                                <p className="company">{exp.company || "Company Name"}</p>
                                <p>{exp.description || "Brief description of your work."}</p>
                            </div>
                        ))
                    ) : (
                        <p>No experience added yet.</p>
                    )}
                </section>

                <section className="layout19-section">
                    <h2 style={{ color: selectedColor }}>Projects</h2>
                    {projects.length > 0 ? (
                        projects.map((proj, index) => (
                            <div key={index} className="layout19-item">
                                <h3>{proj.title || "Project Title"}</h3>
                                <p>{proj.description || "Project description here."}</p>
                            </div>
                        ))
                    ) : (
                        <p>No projects added yet.</p>
                    )}
                </section>

                <section className="layout19-section">
                    <h2 style={{ color: selectedColor }}>Education</h2>
                    {education.length > 0 ? (
                        education.map((edu, index) => (
                            <div key={index} className="layout19-item">
                                <h3>{edu.degree || "Degree"}</h3>
                                <p>{edu.institution || "Institution"}</p>
                                <span>{edu.year || "Year"}</span>
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

import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout17.css";
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

    return (
        <div className="layout17-container">
            {/* Header */}
            <header className="layout17-header" style={{ backgroundColor: selectedColor }}>
                <h1>{name}</h1>
                <p>{email} | {phone} | {address}</p>
            </header>

            {/* Body */}
            <div className="layout17-body">
                <section className="layout17-summary">
                    <div className="layout17-section-title" style={{ color: selectedColor }}>
                        <User size={18} /> <h2>Professional Summary</h2>
                    </div>
                    <p>{summary}</p>
                </section>

                <section>
                    <div className="layout17-section-title" style={{ color: selectedColor }}>
                        <GraduationCap size={18} /> <h2>Education</h2>
                    </div>
                    {education.length > 0 ? (
                        education.map((edu, i) => (
                            <div key={i} className="layout17-item">
                                <h3>{edu.degree || "Degree"}</h3>
                                <p>{edu.institution || "Institution"}</p>
                                <span>{edu.year || "Year"}</span>
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
                    {experience.length > 0 ? (
                        experience.map((exp, i) => (
                            <div key={i} className="layout17-item">
                                <h3>{exp.position || "Job Title"}</h3>
                                <p>{exp.company || "Company Name"}</p>
                                <span>{exp.duration || "Duration"}</span>
                                <p>{exp.description || "Job description goes here."}</p>
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
                    {projects.length > 0 ? (
                        projects.map((proj, i) => (
                            <div key={i} className="layout17-item">
                                <h3>{proj.title || "Project Title"}</h3>
                                <p>{proj.description || "Description about the project."}</p>
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
                    <ul className="layout17-skill-list">
                        {skills.length > 0 ? (
                            skills.map((skill, i) => <li key={i}>{skill}</li>)
                        ) : (
                            <p>No skills added yet</p>
                        )}
                    </ul>
                </section>
            </div>
        </div>
    );
}

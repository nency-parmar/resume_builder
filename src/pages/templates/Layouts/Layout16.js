import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout16.css";

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

    return (
        <div className="layout16-container" style={{ borderColor: selectedColor }}>
            <header className="layout16-header" style={{ backgroundColor: selectedColor }}>
                <h1>{name}</h1>
                <p>{email} | {phone} | {address}</p>
            </header>

            <div className="layout16-body">
                <section className="layout16-summary">
                    <h2 style={{ color: selectedColor }}>Profile Summary</h2>
                    <p>{summary}</p>
                </section>

                <div className="layout16-columns">
                    <div className="layout16-left">
                        <section>
                            <h2 style={{ color: selectedColor }}>Education</h2>
                            {education.length > 0 ? (
                                education.map((edu, i) => (
                                    <div key={i} className="layout16-item">
                                        <h3>{edu.degree || "Degree"}</h3>
                                        <p>{edu.institution || "University Name"}</p>
                                        <span>{edu.year || "Year"}</span>
                                    </div>
                                ))
                            ) : (
                                <p>No education added</p>
                            )}
                        </section>

                        <section>
                            <h2 style={{ color: selectedColor }}>Skills</h2>
                            <ul>
                                {skills.length > 0 ? (
                                    skills.map((skill, i) => <li key={i}>{skill}</li>)
                                ) : (
                                    <p>No skills added</p>
                                )}
                            </ul>
                        </section>
                    </div>

                    <div className="layout16-right">
                        <section>
                            <h2 style={{ color: selectedColor }}>Experience</h2>
                            {experience.length > 0 ? (
                                experience.map((exp, i) => (
                                    <div key={i} className="layout16-item">
                                        <h3>{exp.position || "Job Title"}</h3>
                                        <p>{exp.company || "Company Name"}</p>
                                        <span>{exp.duration || "Duration"}</span>
                                        <p>{exp.description || "Job description goes here."}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No experience added</p>
                            )}
                        </section>

                        <section>
                            <h2 style={{ color: selectedColor }}>Projects</h2>
                            {projects.length > 0 ? (
                                projects.map((proj, i) => (
                                    <div key={i} className="layout16-item">
                                        <h3>{proj.title || "Project Title"}</h3>
                                        <p>{proj.description || "Project description goes here."}</p>
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

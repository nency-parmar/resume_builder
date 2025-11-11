import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout6.css";

export default function Layout6({ data = {} }) {
    const {
        name = "Your Name",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "Your City, Country",
        linkedin = "linkedin.com/in/yourprofile",
        github = "github.com/yourprofile",
        summary = "A passionate developer eager to learn and grow.",
        education = [],
        experience = [],
        skills = [],
        projects = [],
        achievements = [],
    } = data;

    return (
        <div className="layout6">
            <header className="header">
                <h1 className="name">{name}</h1>
                <p className="contact">
                    {email} | {phone} | {address}
                </p>
                <p className="links">
                    <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>{" "}
                    |{" "}
                    <a href={`https://${github}`} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </p>
            </header>

            <section className="summary">
                <h2>Profile Summary</h2>
                <p>{summary}</p>
            </section>

            <section className="education">
                <h2>Education</h2>
                {education.length > 0 ? (
                    education.map((edu, idx) => (
                        <div className="edu-item" key={idx}>
                            <h3>{edu.degree}</h3>
                            <p>
                                {edu.institution} — {edu.year}
                            </p>
                            <p className="grade">CGPA: {edu.cgpa}</p>
                        </div>
                    ))
                ) : (
                    <p>No education added</p>
                )}
            </section>

            <section className="experience">
                <h2>Experience</h2>
                {experience.length > 0 ? (
                    experience.map((exp, idx) => (
                        <div className="exp-item" key={idx}>
                            <h3>{exp.role}</h3>
                            <p>
                                {exp.company} | {exp.duration}
                            </p>
                            <ul>
                                {exp.details?.split("\n").map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No experience added</p>
                )}
            </section>

            <section className="projects">
                <h2>Projects</h2>
                {projects.length > 0 ? (
                    projects.map((proj, idx) => (
                        <div className="proj-item" key={idx}>
                            <h3>{proj.title}</h3>
                            <p>{proj.description}</p>
                            <p>
                                <strong>Tech Used:</strong> {proj.tech}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No projects added</p>
                )}
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <div className="skills-list">
                    {skills.length > 0 ? (
                        skills.map((skill, idx) => <span key={idx}>{skill}</span>)
                    ) : (
                        <p>No skills added</p>
                    )}
                </div>
            </section>

            <section className="achievements">
                <h2>Achievements</h2>
                <ul>
                    {achievements.length > 0 ? (
                        achievements.map((ach, idx) => <li key={idx}>{ach}</li>)
                    ) : (
                        <p>No achievements added</p>
                    )}
                </ul>
            </section>
        </div>
    );
}

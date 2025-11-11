import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout8.css";

export default function Layout8({ data = {} }) {
    const {
        name = "Your Name",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "Your City, Country",
        linkedin = "linkedin.com/in/yourprofile",
        github = "github.com/yourprofile",
        summary = "A highly motivated and detail-oriented software developer passionate about creating impactful applications.",
        education = [],
        experience = [],
        skills = [],
        projects = [],
        achievements = [],
    } = data;

    return (
        <div className="layout8">
            <header className="header">
                <h1>{name}</h1>
                <p className="contact-info">
                    📧 {email} | 📱 {phone} | 📍 {address}
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
                <h2>Professional Summary</h2>
                <p>{summary}</p>
            </section>

            <section className="timeline">
                <h2>Work Experience</h2>
                {experience.length > 0 ? (
                    <div className="timeline-items">
                        {experience.map((exp, idx) => (
                            <div key={idx} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>{exp.role}</h3>
                                    <p className="company">{exp.company}</p>
                                    <p className="duration">{exp.duration}</p>
                                    <ul>
                                        {exp.details?.split("\n").map((line, i) => (
                                            <li key={i}>{line}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No experience added</p>
                )}
            </section>

            <section className="projects">
                <h2>Projects</h2>
                {projects.length > 0 ? (
                    projects.map((proj, idx) => (
                        <div key={idx} className="project-card">
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

            <section className="education">
                <h2>Education</h2>
                {education.length > 0 ? (
                    education.map((edu, idx) => (
                        <div key={idx} className="edu-item">
                            <h3>{edu.degree}</h3>
                            <p>
                                {edu.institution} — {edu.year}
                            </p>
                            <p>CGPA: {edu.cgpa}</p>
                        </div>
                    ))
                ) : (
                    <p>No education added</p>
                )}
            </section>

            <section className="skills">
                <h2>Technical Skills</h2>
                <div className="skill-list">
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

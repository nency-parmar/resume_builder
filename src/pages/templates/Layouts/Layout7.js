import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout7.css";

export default function Layout7({ data = {} }) {
    const {
        name = "Your Name",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "Your City, Country",
        linkedin = "linkedin.com/in/yourprofile",
        github = "github.com/yourprofile",
        summary = "A detail-oriented developer with a passion for clean code and problem-solving.",
        education = [],
        experience = [],
        skills = [],
        projects = [],
        achievements = [],
    } = data;

    return (
        <div className="layout7">
            {/* Left Sidebar */}
            <div className="left-column">
                <div className="profile">
                    <h1 className="name">{name}</h1>
                    <p className="role">Software Developer</p>
                </div>

                <div className="contact">
                    <h2>Contact</h2>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{address}</p>
                    <p><a href={`https://${linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a></p>
                    <p><a href={`https://${github}`} target="_blank" rel="noreferrer">GitHub</a></p>
                </div>

                <div className="skills">
                    <h2>Skills</h2>
                    <ul>
                        {skills.length > 0 ? (
                            skills.map((skill, idx) => <li key={idx}>{skill}</li>)
                        ) : (
                            <li>No skills added</li>
                        )}
                    </ul>
                </div>

                <div className="achievements">
                    <h2>Achievements</h2>
                    <ul>
                        {achievements.length > 0 ? (
                            achievements.map((ach, idx) => <li key={idx}>{ach}</li>)
                        ) : (
                            <li>No achievements yet</li>
                        )}
                    </ul>
                </div>
            </div>

            {/* Right Content */}
            <div className="right-column">
                <section className="summary">
                    <h2>Profile Summary</h2>
                    <p>{summary}</p>
                </section>

                <section className="experience">
                    <h2>Experience</h2>
                    {experience.length > 0 ? (
                        experience.map((exp, idx) => (
                            <div className="exp-item" key={idx}>
                                <h3>{exp.role}</h3>
                                <p className="company">
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

                <section className="education">
                    <h2>Education</h2>
                    {education.length > 0 ? (
                        education.map((edu, idx) => (
                            <div className="edu-item" key={idx}>
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
            </div>
        </div>
    );
}

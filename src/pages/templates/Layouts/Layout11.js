// components/templates/Layout11.js
import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout11.css";

export default function Layout11({ data = {}, selectedColor = "#6a1b9a" }) {
    const {
        name = "Your Name",
        title = "Full Stack Developer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "Rajkot, Gujarat, India",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        summary = "Motivated developer skilled in building responsive web apps and creating innovative solutions using modern technologies.",
        skills = [],
        education = [],
        experience = [],
        projects = [],
        achievements = [],
    } = data;

    return (
        <div className="layout11-container">
            {/* Header */}
            <header
                className="layout11-header"
                style={{ borderColor: selectedColor }}
            >
                <h1 style={{ color: selectedColor }}>{name}</h1>
                <h3>{title}</h3>
                <p>{email} | {phone} | {linkedin} | {github}</p>
            </header>

            {/* Summary */}
            <section className="layout11-summary">
                <h2 style={{ color: selectedColor }}>Profile Summary</h2>
                <p>{summary}</p>
            </section>

            {/* Experience Timeline */}
            <section className="layout11-timeline">
                <h2 style={{ color: selectedColor }}>Experience</h2>
                <div className="timeline">
                    {experience.length
                        ? experience.map((exp, i) => (
                            <div key={i} className="timeline-item">
                                <div className="circle" style={{ backgroundColor: selectedColor }}></div>
                                <div className="timeline-content">
                                    <h4>{exp.role}</h4>
                                    <p className="company">{exp.company}</p>
                                    <span className="duration">{exp.duration}</span>
                                    <p className="desc">{exp.description}</p>
                                </div>
                            </div>
                        ))
                        : [
                            {
                                role: "Frontend Intern",
                                company: "Tech Vision Pvt. Ltd.",
                                duration: "May 2024 - July 2024",
                                description:
                                    "Developed reusable React components and improved UI/UX of internal dashboard.",
                            },
                            {
                                role: "Freelance Developer",
                                company: "Self-Employed",
                                duration: "2023 - Present",
                                description:
                                    "Built responsive websites for clients using MERN stack.",
                            },
                        ].map((exp, i) => (
                            <div key={i} className="timeline-item">
                                <div className="circle" style={{ backgroundColor: selectedColor }}></div>
                                <div className="timeline-content">
                                    <h4>{exp.role}</h4>
                                    <p className="company">{exp.company}</p>
                                    <span className="duration">{exp.duration}</span>
                                    <p className="desc">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </section>

            {/* Education */}
            <section className="layout11-education">
                <h2 style={{ color: selectedColor }}>Education</h2>
                {education.length
                    ? education.map((edu, i) => (
                        <div key={i} className="edu-item">
                            <h4>{edu.degree}</h4>
                            <p>{edu.institute}</p>
                            <span>{edu.year}</span>
                        </div>
                    ))
                    : [
                        {
                            degree: "B.Tech in Computer Science",
                            institute: "Darshan University",
                            year: "2022 - 2026",
                        },
                    ].map((edu, i) => (
                        <div key={i} className="edu-item">
                            <h4>{edu.degree}</h4>
                            <p>{edu.institute}</p>
                            <span>{edu.year}</span>
                        </div>
                    ))}
            </section>

            {/* Skills */}
            <section className="layout11-skills">
                <h2 style={{ color: selectedColor }}>Technical Skills</h2>
                <div className="skills-list">
                    {(skills.length ? skills : ["React", "Node.js", "MongoDB", "Flutter", "Java", "DBMS"]).map(
                        (s, i) => (
                            <span key={i} className="skill-chip" style={{ borderColor: selectedColor, color: selectedColor }}>
                                {s}
                            </span>
                        )
                    )}
                </div>
            </section>

            {/* Projects */}
            <section className="layout11-projects">
                <h2 style={{ color: selectedColor }}>Projects</h2>
                {projects.length
                    ? projects.map((proj, i) => (
                        <div key={i} className="proj-item">
                            <h4>{proj.name}</h4>
                            <p>{proj.description}</p>
                        </div>
                    ))
                    : [
                        {
                            name: "BuildMyResume",
                            description:
                                "Developed an ATS-friendly Resume Builder with color themes and dynamic templates.",
                        },
                    ].map((proj, i) => (
                        <div key={i} className="proj-item">
                            <h4>{proj.name}</h4>
                            <p>{proj.description}</p>
                        </div>
                    ))}
            </section>

            {/* Achievements */}
            <section className="layout11-achievements">
                <h2 style={{ color: selectedColor }}>Achievements</h2>
                <ul>
                    {(achievements.length
                        ? achievements
                        : ["Winner - Hackathon 2024", "Best Developer Award at College"]).map((a, i) => (
                            <li key={i}>{a}</li>
                        ))}
                </ul>
            </section>
        </div>
    );
}

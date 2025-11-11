// components/templates/Layout9.js
import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout9.css";

export default function Layout9({ data = {}, selectedColor = "#2c3e50" }) {
    const {
        name = "Your Name",
        title = "Full Stack Developer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        summary = "A passionate developer with experience in designing and building responsive web applications.",
        skills = [],
        education = [],
        experience = [],
        projects = [],
        achievements = [],
    } = data;

    return (
        <div className="layout9-container" style={{ borderColor: selectedColor }}>
            <div className="layout9-header" style={{ backgroundColor: selectedColor }}>
                <h1>{name}</h1>
                <h3>{title}</h3>
            </div>

            <div className="layout9-body">
                <div className="layout9-left">
                    <div className="contact-info">
                        <h4 style={{ color: selectedColor }}>Contact</h4>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{address}</p>
                        <p>{linkedin}</p>
                        <p>{github}</p>
                    </div>

                    <div className="skills">
                        <h4 style={{ color: selectedColor }}>Skills</h4>
                        <ul>
                            {skills.length
                                ? skills.map((skill, i) => <li key={i}>{skill}</li>)
                                : ["JavaScript", "React", "Node.js", "MongoDB"].map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                        </ul>
                    </div>

                    <div className="achievements">
                        <h4 style={{ color: selectedColor }}>Achievements</h4>
                        <ul>
                            {achievements.length
                                ? achievements.map((ach, i) => <li key={i}>{ach}</li>)
                                : ["Completed 10+ web projects", "Awarded Best Coder 2024"].map(
                                    (a, i) => <li key={i}>{a}</li>
                                )}
                        </ul>
                    </div>
                </div>

                <div className="layout9-right">
                    <div className="summary">
                        <h4 style={{ color: selectedColor }}>Profile Summary</h4>
                        <p>{summary}</p>
                    </div>

                    <div className="experience">
                        <h4 style={{ color: selectedColor }}>Experience</h4>
                        {experience.length
                            ? experience.map((exp, i) => (
                                <div key={i} className="exp-item">
                                    <h5>{exp.role}</h5>
                                    <p>
                                        {exp.company} | {exp.duration}
                                    </p>
                                    <p>{exp.description}</p>
                                </div>
                            ))
                            : [
                                {
                                    role: "Frontend Developer",
                                    company: "ABC Company",
                                    duration: "Jan 2023 - Dec 2023",
                                    description:
                                        "Worked on building responsive UI components using React.js.",
                                },
                            ].map((exp, i) => (
                                <div key={i} className="exp-item">
                                    <h5>{exp.role}</h5>
                                    <p>
                                        {exp.company} | {exp.duration}
                                    </p>
                                    <p>{exp.description}</p>
                                </div>
                            ))}
                    </div>

                    <div className="education">
                        <h4 style={{ color: selectedColor }}>Education</h4>
                        {education.length
                            ? education.map((edu, i) => (
                                <div key={i} className="edu-item">
                                    <h5>{edu.degree}</h5>
                                    <p>
                                        {edu.institute} | {edu.year}
                                    </p>
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
                                    <h5>{edu.degree}</h5>
                                    <p>
                                        {edu.institute} | {edu.year}
                                    </p>
                                </div>
                            ))}
                    </div>

                    <div className="projects">
                        <h4 style={{ color: selectedColor }}>Projects</h4>
                        {projects.length
                            ? projects.map((proj, i) => (
                                <div key={i} className="proj-item">
                                    <h5>{proj.name}</h5>
                                    <p>{proj.description}</p>
                                </div>
                            ))
                            : [
                                {
                                    name: "Resume Builder App",
                                    description:
                                        "Developed a resume builder app using React and Node.js with export-to-PDF functionality.",
                                },
                            ].map((proj, i) => (
                                <div key={i} className="proj-item">
                                    <h5>{proj.name}</h5>
                                    <p>{proj.description}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
